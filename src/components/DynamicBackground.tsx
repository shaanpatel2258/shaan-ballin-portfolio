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

    // Draw completely new trophy design
    const drawTrophy = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.globalAlpha = 0.8;
      
      // Trophy base (wider and more stable)
      ctx.fillStyle = '#654321';
      ctx.fillRect(centerX - 30, centerY + 60, 60, 8);
      ctx.fillRect(centerX - 25, centerY + 50, 50, 10);
      ctx.fillRect(centerX - 20, centerY + 40, 40, 10);
      
      // Trophy stem (taller)
      ctx.fillStyle = '#ffd700';
      ctx.fillRect(centerX - 6, centerY + 10, 12, 30);
      
      // Main trophy cup (sleeker design)
      ctx.fillStyle = '#ffed4e';
      ctx.beginPath();
      ctx.moveTo(centerX - 28, centerY + 10);
      ctx.lineTo(centerX + 28, centerY + 10);
      ctx.lineTo(centerX + 22, centerY - 10);
      ctx.lineTo(centerX - 22, centerY - 10);
      ctx.closePath();
      ctx.fill();
      
      // Trophy cup top section
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - 20, 24, 15, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Trophy handles (elegant curves)
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX - 35, centerY - 5, 12, -Math.PI/3, Math.PI/3);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(centerX + 35, centerY - 5, 12, Math.PI*2/3, Math.PI*4/3);
      ctx.stroke();
      
      // Trophy crown/top ornament
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.moveTo(centerX - 8, centerY - 35);
      ctx.lineTo(centerX, centerY - 45);
      ctx.lineTo(centerX + 8, centerY - 35);
      ctx.lineTo(centerX + 5, centerY - 30);
      ctx.lineTo(centerX - 5, centerY - 30);
      ctx.closePath();
      ctx.fill();
      
      // Trophy engravings/details
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 1;
      
      // Decorative lines on cup
      ctx.beginPath();
      ctx.moveTo(centerX - 20, centerY - 5);
      ctx.lineTo(centerX + 20, centerY - 5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX - 18, centerY + 2);
      ctx.lineTo(centerX + 18, centerY + 2);
      ctx.stroke();
    };

    // Create particles (fewer and larger for better visibility)
    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
      isBasketball: boolean;
    }> = [];

    for (let i = 0; i < 60; i++) { // Reduced from 100 to 60
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 6 + 4, // Increased minimum size from 2 to 4, max from 6 to 10
        color: i < 15 ? '#ea580c' : `hsl(${Math.random() * 40 + 20}, 70%, 50%)`, // Reduced basketball particles from 20 to 15
        isBasketball: i < 15
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
        ctx.globalAlpha = particle.isBasketball ? 0.8 : 0.5; // Increased opacity
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Enhanced basketball lines for basketball particles (same as big basketballs)
        if (particle.isBasketball) {
          ctx.strokeStyle = '#9a3412';
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.9;
          
          // Main seam lines (curved like a real basketball)
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.9, -Math.PI/2, Math.PI/2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.9, Math.PI/2, -Math.PI/2);
          ctx.stroke();
          
          // Horizontal seam lines
          ctx.beginPath();
          ctx.ellipse(particle.x, particle.y, particle.size * 0.9, particle.size * 0.3, 0, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.ellipse(particle.x, particle.y, particle.size * 0.9, particle.size * 0.3, Math.PI, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Connect nearby particles (with higher opacity)
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = 0.15; // Increased from 0.08
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
