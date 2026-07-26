import React, { useEffect, useRef } from "react";

export default function HologramGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = 500;
    let height = 500;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;
    const sphereRadius = 135;

    // Generate points on a sphere using Fibonacci lattice
    const points = [];
    const N = 120; // Number of particles
    for (let i = 0; i < N; i++) {
      const theta = Math.acos(-1 + (2 * i) / N);
      const phi = Math.sqrt(N * Math.PI) * theta;
      points.push({
        x: Math.cos(phi) * Math.sin(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(theta),
        isGold: Math.random() < 0.35 // 35% gold, 65% cyan particles
      });
    }

    let angleX = 0.3; // Default tilt
    let angleY = 0;   // Default rotation
    let targetAngleX = 0.3;
    let targetAngleY = 0;
    let rotationSpeed = 0.003;
    let hoverActive = false;

    const mouse = { x: 0, y: 0 };

    const rotateX = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos
      };
    };

    const rotateY = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: x * cos + z * sin,
        y,
        z: -x * sin + z * cos
      };
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      
      // Calculate normalized coordinates (-1 to 1) from center
      const nx = (mx - centerX) / centerX;
      const ny = (my - centerY) / centerY;

      targetAngleY = nx * 0.8;
      targetAngleX = -ny * 0.8 + 0.3; // base tilt of 0.3
      hoverActive = true;
    };

    const handleMouseLeave = () => {
      targetAngleX = 0.3;
      hoverActive = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
      parent.style.cursor = "pointer";
    }

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.01;
      
      // Smoothly interpolate towards target angles
      if (hoverActive) {
        angleY += (targetAngleY - angleY) * 0.08;
        angleX += (targetAngleX - angleX) * 0.08;
        rotationSpeed = 0.007; // spin faster on hover
      } else {
        angleY += rotationSpeed; // continuous default rotation
        angleX += (targetAngleX - angleX) * 0.05;
        rotationSpeed = 0.003;
      }

      // 1. Draw Pulsating Inner Energy Core
      ctx.save();
      const corePulse = Math.sin(time * 3) * 12;
      const coreGlow = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, (sphereRadius * 0.5) + corePulse
      );
      coreGlow.addColorStop(0, "rgba(0, 225, 255, 0.15)");
      coreGlow.addColorStop(0.4, "rgba(197, 160, 89, 0.08)");
      coreGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, (sphereRadius * 0.5) + corePulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Project all 3D points to 2D
      const projected = points.map(p => {
        let r = rotateY(p.x, p.y, p.z, angleY);
        r = rotateX(r.x, r.y, r.z, angleX);

        // Simple perspective scaling
        const fov = 350;
        const scale = fov / (fov + r.z * sphereRadius);
        
        return {
          x: centerX + r.x * sphereRadius * scale,
          y: centerY + r.y * sphereRadius * scale,
          z: r.z, // -1 is closest, 1 is furthest
          scale,
          isGold: p.isGold
        };
      });

      // 3. Draw Connecting Grid Lines (Cybernet Mesh)
      // Connect points for sphere grid effect
      ctx.lineWidth = 0.45;
      for (let i = 0; i < N; i++) {
        const p1 = projected[i];
        
        // Connect each point to its neighbors on the sphere lattice
        const connections = [1, 2, 8, 12];
        connections.forEach(offset => {
          const neighborIdx = (i + offset) % N;
          const p2 = projected[neighborIdx];
          
          // Calculate distance in 3D sphere coordinate space
          const dx = points[i].x - points[neighborIdx].x;
          const dy = points[i].y - points[neighborIdx].y;
          const dz = points[i].z - points[neighborIdx].z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Only draw lines for close neighbors
          if (dist3D < 0.38) {
            // Opacity depends on depth: closer lines are more visible
            const avgDepth = (p1.z + p2.z) / 2; // range: -1 to 1
            const opacity = Math.max(0.02, (1 - avgDepth) * 0.12);
            
            const isGoldLine = points[i].isGold && points[neighborIdx].isGold;
            ctx.strokeStyle = isGoldLine 
              ? `rgba(197, 160, 89, ${opacity * 1.5})` 
              : `rgba(0, 225, 255, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      }

      // 4. Draw Outer Spinning HUD Ring & Tick Marks
      ctx.save();
      // Orbit Ring 1 (Gold, horizontal rotation)
      ctx.strokeStyle = "rgba(197, 160, 89, 0.18)";
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 12]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, sphereRadius + 30, (sphereRadius + 30) * Math.abs(Math.sin(angleX)), 0, 0, Math.PI * 2);
      ctx.stroke();

      // Orbit Ring 2 (Cyan, fast opposite diagonal rotation)
      ctx.strokeStyle = "rgba(0, 225, 255, 0.14)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 18]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, sphereRadius + 45, (sphereRadius + 45) * 0.25, -Math.PI / 6 + time * 0.1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 5. Draw Sphere Particle Dots
      // Sort points by z-index so back particles are drawn first (painters algorithm)
      const sortedProjected = [...projected].sort((a, b) => b.z - a.z);

      sortedProjected.forEach(p => {
        const radius = p.isGold ? 2.5 : 2;
        // z runs from -1 (front) to 1 (back). Normalize to opacity
        const opacity = Math.max(0.1, (1 - p.z) * 0.5); 
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * p.scale, 0, Math.PI * 2);
        
        if (p.isGold) {
          ctx.fillStyle = `rgba(197, 160, 89, ${opacity * 1.8})`;
          if (p.z < -0.2) { // front glow
            ctx.shadowColor = "#f3cf65";
            ctx.shadowBlur = 8;
          }
        } else {
          ctx.fillStyle = `rgba(0, 225, 255, ${opacity * 1.5})`;
          if (p.z < -0.2) { // front glow
            ctx.shadowColor = "#00e1ff";
            ctx.shadowBlur = 8;
          }
        }
        
        ctx.fill();
        ctx.restore();
      });

      // 6. Draw Outer Decorative Tech Data HUD Overlay
      ctx.save();
      ctx.font = "8px monospace";
      ctx.fillStyle = "rgba(0, 225, 255, 0.4)";
      ctx.textAlign = "center";
      
      const valLat = (19.07 + Math.sin(time * 0.1) * 0.02).toFixed(4);
      const valLng = (72.87 + Math.cos(time * 0.08) * 0.02).toFixed(4);
      
      ctx.fillText(`SYS.LOCK: IND.MUM`, centerX, centerY + sphereRadius + 60);
      ctx.fillStyle = "rgba(197, 160, 89, 0.4)";
      ctx.fillText(`LAT: ${valLat}° N  |  LNG: ${valLng}° E`, centerX, centerY + sphereRadius + 72);
      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hologram-globe-canvas"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
