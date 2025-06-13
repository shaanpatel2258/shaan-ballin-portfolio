import { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced Basketball court elements
    const drawCourt = () => {
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      
      // Center circle
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.stroke();
      
      // Half court line
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();
      
      // Three-point arcs (more realistic)
      ctx.beginPath();
      ctx.arc(canvas.width * 0.15, canvas.height / 2, 180, -Math.PI/2.5, Math.PI/2.5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(canvas.width * 0.85, canvas.height / 2, 180, Math.PI/1.67, Math.PI*1.33);
      ctx.stroke();
      
      // Free throw circles (not rectangles)
      ctx.beginPath();
      ctx.arc(canvas.width * 0.12, canvas.height / 2, 90, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(canvas.width * 0.88, canvas.height / 2, 90, 0, Math.PI * 2);
      ctx.stroke();
      
      // Free throw lines
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.03, canvas.height / 2 - 90);
      ctx.lineTo(canvas.width * 0.21, canvas.height / 2 - 90);
      ctx.moveTo(canvas.width * 0.03, canvas.height / 2 + 90);
      ctx.lineTo(canvas.width * 0.21, canvas.height / 2 + 90);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.79, canvas.height / 2 - 90);
      ctx.lineTo(canvas.width * 0.97, canvas.height / 2 - 90);
      ctx.moveTo(canvas.width * 0.79, canvas.height / 2 + 90);
      ctx.lineTo(canvas.width * 0.97, canvas.height / 2 + 90);
      ctx.stroke();
    };

    // Draw NBA Championship Trophy (original design)
    const drawTrophy = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.globalAlpha = 0.6; // Higher opacity
      
      // Trophy base (black/dark brown)
      ctx.fillStyle = '#3c2415';
      ctx.fillRect(centerX - 25, centerY + 50, 50, 15);
      ctx.fillRect(centerX - 20, centerY + 40, 40, 10);
      
      // Trophy stem
      ctx.fillStyle = '#ffd700';
      ctx.fillRect(centerX - 8, centerY + 15, 16, 25);
      
      // Trophy cup base (wider part)
      ctx.fillStyle = '#ffed4e';
      ctx.beginPath();
      ctx.moveTo(centerX - 25, centerY + 15);
      ctx.lineTo(centerX + 25, centerY + 15);
      ctx.lineTo(centerX + 20, centerY - 5);
      ctx.lineTo(centerX - 20, centerY - 5);
      ctx.closePath();
      ctx.fill();
      
      // Trophy cup main body
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - 15, 22, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Basketball on top
      ctx.fillStyle = '#ff8c00';
      ctx.beginPath();
      ctx.arc(centerX, centerY - 30, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Basketball lines
      ctx.strokeStyle = '#cc5500';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.8;
      
      // Vertical line on basketball
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 42);
      ctx.lineTo(centerX, centerY - 18);
      ctx.stroke();
      
      // Horizontal line on basketball
      ctx.beginPath();
      ctx.moveTo(centerX - 12, centerY - 30);
      ctx.lineTo(centerX + 12, centerY - 30);
      ctx.stroke();
      
      // Curved lines on basketball
      ctx.beginPath();
      ctx.arc(centerX, centerY - 30, 10, 0, Math.PI * 2);
      ctx.stroke();
      
      // Trophy details and diamond pattern
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 1;
      
      // Diamond pattern on cup
      for (let i = -15; i <= 15; i += 8) {
        ctx.beginPath();
        ctx.moveTo(centerX + i, centerY - 25);
        ctx.lineTo(centerX + i + 4, centerY - 10);
        ctx.lineTo(centerX + i, centerY + 5);
        ctx.lineTo(centerX + i - 4, centerY - 10);
        ctx.closePath();
        ctx.stroke();
      }
    };

    // Create particles (more basketball-like ones)
    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
      isBasketball: boolean;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 2,
        color: i < 20 ? '#ea580c' : `hsl(${Math.random() * 40 + 20}, 70%, 50%)`,
        isBasketball: i < 20
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw court
      drawCourt();
      
      // Draw trophy
      drawTrophy();

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw particle
        ctx.globalAlpha = particle.isBasketball ? 0.7 : 0.35; // Higher opacity for basketballs
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Enhanced basketball lines for basketball particles
        if (particle.isBasketball) {
          ctx.strokeStyle = '#9a3412';
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = 0.8; // Higher opacity for basketball lines
          
          // Vertical line
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x, particle.y + particle.size);
          ctx.stroke();
          
          // Horizontal line
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y);
          ctx.lineTo(particle.x + particle.size, particle.y);
          ctx.stroke();
          
          // Curved lines for more realistic basketball look
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Connect nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = 0.08;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default DynamicBackground;
