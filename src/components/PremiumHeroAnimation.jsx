import React, { useEffect, useRef } from "react";

export default function PremiumHeroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation state
    const nodes = [];
    const connections = [];
    const particles = [];
    const dataStreams = [];

    // Create network nodes
    const nodeCount = 15;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 3 + Math.random() * 4,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? '#00e1ff' : '#c5a059'
      });
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 300) {
          connections.push({
            from: i,
            to: j,
            distance: distance,
            opacity: 1 - distance / 300,
            dataFlow: Math.random() > 0.7,
            flowProgress: Math.random()
          });
        }
      }
    }

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.4,
        color: Math.random() > 0.5 ? '#00e1ff' : '#c5a059'
      });
    }

    // Create data streams
    for (let i = 0; i < 8; i++) {
      dataStreams.push({
        points: [],
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        color: Math.random() > 0.5 ? '#00e1ff' : '#c5a059'
      });
      
      // Generate stream path
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      for (let j = 0; j < 15; j++) {
        dataStreams[i].points.push({
          x: x + (Math.random() - 0.5) * 200,
          y: y + (Math.random() - 0.5) * 200
        });
        x = dataStreams[i].points[j].x;
        y = dataStreams[i].points[j].y;
      }
    }

    // Drawing functions
    const drawNode = (node, time) => {
      const pulse = Math.sin(time * 0.02 + node.pulsePhase) * 0.3 + 1;
      const radius = node.radius * pulse;
      
      // Glow effect
      ctx.shadowColor = node.color;
      ctx.shadowBlur = 20 * pulse;
      
      // Core
      ctx.fillStyle = node.color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Outer ring
      ctx.strokeStyle = node.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3 * pulse;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const drawConnection = (connection, time) => {
      const fromNode = nodes[connection.from];
      const toNode = nodes[connection.to];
      
      const gradient = ctx.createLinearGradient(
        fromNode.x, fromNode.y,
        toNode.x, toNode.y
      );
      gradient.addColorStop(0, `rgba(0, 225, 255, ${connection.opacity * 0.3})`);
      gradient.addColorStop(0.5, `rgba(197, 160, 89, ${connection.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(0, 225, 255, ${connection.opacity * 0.3})`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(fromNode.x, fromNode.y);
      ctx.lineTo(toNode.x, toNode.y);
      ctx.stroke();
      
      // Data flow animation
      if (connection.dataFlow) {
        connection.flowProgress += 0.01;
        if (connection.flowProgress > 1) connection.flowProgress = 0;
        
        const flowX = fromNode.x + (toNode.x - fromNode.x) * connection.flowProgress;
        const flowY = fromNode.y + (toNode.y - fromNode.y) * connection.flowProgress;
        
        ctx.shadowColor = '#00e1ff';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#00e1ff';
        ctx.beginPath();
        ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const drawParticle = (particle) => {
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const drawDataStream = (stream) => {
      stream.progress += stream.speed;
      if (stream.progress > 1) stream.progress = 0;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(stream.progress, stream.color);
      gradient.addColorStop(Math.min(1, stream.progress + 0.2), '#ffffff');
      gradient.addColorStop(1, 'transparent');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.shadowColor = stream.color;
      ctx.shadowBlur = 15;
      ctx.lineCap = 'round';
      
      ctx.beginPath();
      stream.points.forEach((point, i) => {
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawGlobe = (time) => {
      const centerX = canvas.width * 0.75;
      const centerY = canvas.height * 0.5;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;
      
      // Globe base
      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3, centerY - radius * 0.3, 0,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, 'rgba(0, 225, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(0, 225, 255, 0.05)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Globe grid lines
      ctx.strokeStyle = 'rgba(0, 225, 255, 0.2)';
      ctx.lineWidth = 1;
      
      // Latitude lines
      for (let i = -3; i <= 3; i++) {
        const y = centerY + (i * radius) / 4;
        const width = Math.sqrt(radius * radius - Math.pow(y - centerY, 2)) * 2;
        ctx.beginPath();
        ctx.ellipse(centerX, y, width / 2, radius / 8, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Longitude lines
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI + time * 0.001;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.cos(angle), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Rotating marker dots
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2 + time * 0.002;
        const x = centerX + Math.cos(angle) * radius * 0.8;
        const y = centerY + Math.sin(angle) * radius * 0.4;
        
        ctx.fillStyle = '#c5a059';
        ctx.shadowColor = '#c5a059';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    // Animation loop
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Background gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      bgGradient.addColorStop(0, '#0a1520');
      bgGradient.addColorStop(1, '#040712');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw globe
      drawGlobe(time);

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        drawNode(node, time);
      });

      // Update and draw connections
      connections.forEach(connection => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        const dx = fromNode.x - toNode.x;
        const dy = fromNode.y - toNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        connection.opacity = Math.max(0, 1 - distance / 300);
        
        if (connection.opacity > 0) {
          drawConnection(connection, time);
        }
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        drawParticle(particle);
      });

      // Draw data streams
      dataStreams.forEach(stream => {
        drawDataStream(stream);
      });

      // Center glow effect
      const centerGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.4
      );
      centerGlow.addColorStop(0, 'rgba(0, 225, 255, 0.05)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
}
