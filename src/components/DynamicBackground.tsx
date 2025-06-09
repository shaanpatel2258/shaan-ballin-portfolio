
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

    // Basketball court elements
    const drawCourt = () => {
      ctx.globalAlpha = 0.1;
      
      // Court lines
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      
      // Center circle
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
      ctx.stroke();
      
      // Three-point lines (arcs)
      ctx.beginPath();
      ctx.arc(canvas.width * 0.2, canvas.height / 2, 150, -Math.PI/3, Math.PI/3);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(canvas.width * 0.8, canvas.height / 2, 150, Math.PI*2/3, Math.PI*4/3);
      ctx.stroke();
      
      // Free throw lines
      ctx.strokeRect(canvas.width * 0.1, canvas.height / 2 - 80, 100, 160);
      ctx.strokeRect(canvas.width * 0.8, canvas.height / 2 - 80, 100, 160);
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

    // Create particles (including basketball-like ones)
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        color: i < 10 ? '#ea580c' : `hsl(${Math.random() * 40 + 20}, 70%, 50%)`, // Some orange basketballs
        isBasketball: i < 10
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw court
      drawCourt();

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw particle
        ctx.globalAlpha = particle.isBasketball ? 0.4 : 0.2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Add basketball lines for basketball particles
        if (particle.isBasketball) {
          ctx.strokeStyle = '#9a3412';
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = 0.6;
          
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
        }

        // Connect nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = 0.05;
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
