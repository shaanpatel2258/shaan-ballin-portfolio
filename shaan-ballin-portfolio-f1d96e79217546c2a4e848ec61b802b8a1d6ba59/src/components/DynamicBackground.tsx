
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

    // Draw NBA Finals Trophy in center
    const drawTrophy = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = '#ffd700';
      
      // Trophy base
      ctx.fillRect(centerX - 15, centerY + 40, 30, 20);
      
      // Trophy stem
      ctx.fillRect(centerX - 5, centerY + 20, 10, 20);
      
      // Trophy cup
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 25, 15, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Trophy handles
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX - 30, centerY, 8, Math.PI * 0.3, Math.PI * 1.7);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(centerX + 30, centerY, 8, Math.PI * 1.3, Math.PI * 0.7);
      ctx.stroke();
    };

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
      isBasketball: boolean;
    }> = [];

    // Create particles (more basketball-like ones)
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
        ctx.globalAlpha = particle.isBasketball ? 0.5 : 0.25;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Enhanced basketball lines for basketball particles
        if (particle.isBasketball) {
          ctx.strokeStyle = '#9a3412';
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = 0.7;
          
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
