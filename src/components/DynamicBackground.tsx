
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

    // NBA Finals Trophy (Larry O'Brien Trophy)
    const drawTrophy = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.globalAlpha = 0.9;
      
      // Trophy base - black marble base
      const baseGradient = ctx.createLinearGradient(centerX - 50, centerY + 50, centerX + 50, centerY + 80);
      baseGradient.addColorStop(0, '#1a1a1a');
      baseGradient.addColorStop(0.5, '#333333');
      baseGradient.addColorStop(1, '#1a1a1a');
      
      ctx.fillStyle = baseGradient;
      ctx.fillRect(centerX - 50, centerY + 60, 100, 20);
      ctx.fillRect(centerX - 40, centerY + 50, 80, 10);
      
      // Trophy stem - cylindrical
      const stemGradient = ctx.createLinearGradient(centerX - 15, centerY + 20, centerX + 15, centerY + 50);
      stemGradient.addColorStop(0, '#ffd700');
      stemGradient.addColorStop(0.3, '#ffed4e');
      stemGradient.addColorStop(0.7, '#ffd700');
      stemGradient.addColorStop(1, '#b8860b');
      
      ctx.fillStyle = stemGradient;
      ctx.fillRect(centerX - 15, centerY + 20, 30, 30);
      
      // Ball section - basketball on top
      const ballGradient = ctx.createRadialGradient(
        centerX - 8, centerY - 15, 0,
        centerX, centerY - 5, 25
      );
      ballGradient.addColorStop(0, '#ff8c00');
      ballGradient.addColorStop(0.7, '#ea580c');
      ballGradient.addColorStop(1, '#c2410c');
      
      ctx.fillStyle = ballGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY - 5, 25, 0, Math.PI * 2);
      ctx.fill();

      // Basketball lines on the ball
      ctx.strokeStyle = '#9a3412';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.9;
      
      // Vertical line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 30);
      ctx.lineTo(centerX, centerY + 20);
      ctx.stroke();
      
      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(centerX - 25, centerY - 5);
      ctx.lineTo(centerX + 25, centerY - 5);
      ctx.stroke();
      
      // Curved seam lines
      ctx.beginPath();
      ctx.arc(centerX, centerY - 5, 22, -Math.PI/2, Math.PI/2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(centerX, centerY - 5, 22, Math.PI/2, -Math.PI/2);
      ctx.stroke();
      
      // Trophy cup section - elegant bowl shape
      ctx.globalAlpha = 0.9;
      const cupGradient = ctx.createLinearGradient(centerX - 35, centerY - 50, centerX + 35, centerY - 10);
      cupGradient.addColorStop(0, '#ffed4e');
      cupGradient.addColorStop(0.2, '#ffd700');
      cupGradient.addColorStop(0.5, '#ffed4e');
      cupGradient.addColorStop(0.8, '#ffd700');
      cupGradient.addColorStop(1, '#b8860b');
      
      ctx.fillStyle = cupGradient;
      ctx.beginPath();
      ctx.moveTo(centerX - 35, centerY - 10);
      ctx.lineTo(centerX + 35, centerY - 10);
      ctx.quadraticCurveTo(centerX + 30, centerY - 40, centerX + 25, centerY - 50);
      ctx.lineTo(centerX - 25, centerY - 50);
      ctx.quadraticCurveTo(centerX - 30, centerY - 40, centerX - 35, centerY - 10);
      ctx.closePath();
      ctx.fill();
      
      // Trophy rim
      const rimGradient = ctx.createLinearGradient(centerX - 35, centerY - 55, centerX + 35, centerY - 45);
      rimGradient.addColorStop(0, '#ffd700');
      rimGradient.addColorStop(0.5, '#ffed4e');
      rimGradient.addColorStop(1, '#ffd700');
      
      ctx.fillStyle = rimGradient;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - 50, 25, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Trophy handles
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX - 45, centerY - 30, 12, -Math.PI/3, Math.PI/3);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(centerX + 45, centerY - 30, 12, Math.PI*0.67, Math.PI*1.33);
      ctx.stroke();
      
      // Trophy shine effect
      ctx.globalAlpha = 0.4;
      const shineGradient = ctx.createLinearGradient(centerX - 20, centerY - 45, centerX - 10, centerY - 25);
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = shineGradient;
      ctx.beginPath();
      ctx.ellipse(centerX - 15, centerY - 35, 6, 15, -0.3, 0, Math.PI * 2);
      ctx.fill();
    };

    // Create particles with proper basketball design
    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
      isBasketball: boolean;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 6 + 4,
        color: i < 15 ? '#ea580c' : `hsl(${Math.random() * 40 + 20}, 70%, 50%)`,
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
        if (particle.isBasketball) {
          // Draw basketball EXACTLY like the cursor - with gradient
          ctx.globalAlpha = 0.8;
          const gradient = ctx.createRadialGradient(
            particle.x - particle.size * 0.3, particle.y - particle.size * 0.3, 0,
            particle.x, particle.y, particle.size
          );
          gradient.addColorStop(0, '#ff8c00');
          gradient.addColorStop(0.7, '#ea580c');
          gradient.addColorStop(1, '#c2410c');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Basketball lines - EXACTLY like cursor
          ctx.strokeStyle = '#9a3412';
          ctx.lineWidth = Math.max(1, particle.size * 0.15);
          ctx.globalAlpha = 0.9;
          
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
          
          // Curved seam lines - EXACTLY like cursor
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.85, -Math.PI/2, Math.PI/2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.85, Math.PI/2, -Math.PI/2);
          ctx.stroke();
          
        } else {
          // Regular particles
          ctx.globalAlpha = 0.5;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
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
            ctx.globalAlpha = 0.15;
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
