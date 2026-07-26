import React, { useEffect, useRef } from "react";

export default function CircuitTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // List of active circuit traces
    let traces = [];
    const maxTraces = 40;

    let lastX = 0;
    let lastY = 0;
    const minDistance = 15; // Minimum mouse movement distance to spawn a new trace

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance from last trace coordinates
      const dist = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);

      if (dist > minDistance && Math.random() < 0.45) {
        lastX = x;
        lastY = y;
        
        // Choose gold or cyan
        const isGold = Math.random() < 0.35;
        
        // Generate a 45/90 degree path starting from cursor
        const points = [{ x, y }];
        
        // 8 standard directions (multiples of 45 degrees)
        const angles = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
        
        // First segment direction
        const angle1 = angles[Math.floor(Math.random() * angles.length)];
        const len1 = Math.random() * 35 + 20;
        const x2 = x + Math.cos(angle1) * len1;
        const y2 = y + Math.sin(angle1) * len1;
        points.push({ x: x2, y: y2 });

        // Second segment direction (turn by 45 or 90 degrees relative to first)
        const turns = [-Math.PI/4, Math.PI/4, -Math.PI/2, Math.PI/2];
        const turn = turns[Math.floor(Math.random() * turns.length)];
        const angle2 = angle1 + turn;
        const len2 = Math.random() * 25 + 15;
        const x3 = x2 + Math.cos(angle2) * len2;
        const y3 = y2 + Math.sin(angle2) * len2;
        points.push({ x: x3, y: y3 });

        traces.push({
          points,
          life: 1.0, 
          decay: Math.random() * 0.015 + 0.008, 
          progress: 0, 
          isGold
        });
        
        if (traces.length > maxTraces) {
          traces.shift();
        }
      }
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      traces.forEach((trace) => {
        // Grow the path first
        if (trace.progress < 1) {
          trace.progress += 0.07;
          if (trace.progress > 1) trace.progress = 1;
        } else {
          // Once fully grown, it decays
          trace.life -= trace.decay;
        }

        if (trace.life <= 0) {
          return;
        }

        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        const colorPrefix = trace.isGold ? "rgba(197, 160, 89, " : "rgba(0, 225, 255, ";
        const alpha = trace.life;

        // Draw glowing background shadow (larger stroke, lower alpha)
        ctx.strokeStyle = colorPrefix + (alpha * 0.12) + ")";
        ctx.lineWidth = 4;
        ctx.beginPath();
        drawTracePath(ctx, trace.points, trace.progress);
        ctx.stroke();

        // Draw core circuit line
        ctx.strokeStyle = colorPrefix + (alpha * 0.75) + ")";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        drawTracePath(ctx, trace.points, trace.progress);
        ctx.stroke();

        // Draw terminal pads
        if (trace.points.length > 0) {
          const startPt = trace.points[0];
          // Start pad
          ctx.fillStyle = colorPrefix + (alpha * 0.8) + ")";
          ctx.beginPath();
          ctx.arc(startPt.x, startPt.y, 2, 0, Math.PI * 2);
          ctx.fill();

          // End pad (only draw if progress reaches the end point)
          if (trace.progress >= 1.0) {
            const endPt = trace.points[trace.points.length - 1];
            ctx.fillStyle = colorPrefix + (alpha * 0.95) + ")";
            ctx.beginPath();
            ctx.arc(endPt.x, endPt.y, 3, 0, Math.PI * 2);
            ctx.fill();

            // Inner pad hole
            ctx.fillStyle = "rgba(4, 7, 18, " + alpha + ")";
            ctx.beginPath();
            ctx.arc(endPt.x, endPt.y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      });

      // Filter out dead traces
      traces = traces.filter(t => t.life > 0);

      animationFrameId = requestAnimationFrame(draw);
    };

    const drawTracePath = (context, pts, progress) => {
      if (pts.length < 2) return;
      
      const totalSegments = pts.length - 1;
      const activeProgress = progress * totalSegments; 
      
      context.moveTo(pts[0].x, pts[0].y);
      
      for (let i = 0; i < totalSegments; i++) {
        const pStart = pts[i];
        const pEnd = pts[i + 1];
        
        if (activeProgress >= i + 1) {
          // Draw full segment
          context.lineTo(pEnd.x, pEnd.y);
        } else if (activeProgress > i) {
          // Draw partial segment
          const ratio = activeProgress - i;
          const px = pStart.x + (pEnd.x - pStart.x) * ratio;
          const py = pStart.y + (pEnd.y - pStart.y) * ratio;
          context.lineTo(px, py);
          break;
        } else {
          break;
        }
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="circuit-trail-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1, 
      }}
    />
  );
}
