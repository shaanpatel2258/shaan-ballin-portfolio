
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

    // Draw new modern trophy design
    const drawTrophy = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.globalAlpha = 0.9;
      
      // Trophy base - three tier marble base
      const gradient1 = ctx.createLinearGradient(centerX - 40, centerY + 60, centerX + 40, centerY + 80);
      gradient1.addColorStop(0, '#2c1810');
      gradient1.addColorStop(0.5, '#4a2c1a');
      gradient1.addColorStop(1, '#2c1810');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(centerX - 40, centerY + 70, 80, 15);
      ctx.fillRect(centerX - 32, centerY + 60, 64, 10);
      ctx.fillRect(centerX - 24, centerY + 50, 48, 10);
      
      // Trophy stem - elegant column
      const stemGradient = ctx.createLinearGradient(centerX - 8, centerY + 10, centerX + 8, centerY + 50);
      stemGradient.addColorStop(0, '#ffd700');
      stemGradient.addColorStop(0.3, '#ffed4e');
      stemGradient.addColorStop(0.7, '#ffd700');
      stemGradient.addColorStop(1, '#b8860b');
      
      ctx.fillStyle = stemGradient;
      ctx.fillRect(centerX - 8, centerY + 10, 16, 40);
      
      // Trophy main body - sleek modern cup
      const bodyGradient = ctx.createLinearGradient(centerX - 35, centerY - 30, centerX + 35, centerY + 10);
      bodyGradient.addColorStop(0, '#ffed4e');
      bodyGradient.addColorStop(0.2, '#ffd700');
      bodyGradient.addColorStop(0.5, '#ffed4e');
      bodyGradient.addColorStop(0.8, '#ffd700');
      bodyGradient.addColorStop(1, '#b8860b');
      
      ctx.fillStyle = bodyGradient;
      ctx.beginPath();
      ctx.moveTo(centerX - 35, centerY + 10);
      ctx.lineTo(centerX + 35, centerY + 10);
      ctx.lineTo(centerX + 28, centerY - 25);
      ctx.lineTo(centerX - 28, centerY - 25);
      ctx.closePath();
      ctx.fill();
      
      // Trophy rim
      const rimGradient = ctx.createLinearGradient(centerX - 30, centerY - 35, centerX + 30, centerY - 25);
      rimGradient.addColorStop(0, '#ffd700');
      rimGradient.addColorStop(0.5, '#ffed4e');
      rimGradient.addColorStop(1, '#ffd700');
      
      ctx.fillStyle = rimGradient;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - 30, 30, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Trophy handles - elegant curves
      ctx.strokeStyle = '#b8860b';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(centerX - 42, centerY - 8, 15, -Math.PI/2.5, Math.PI/2.5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(centerX + 42, centerY - 8, 15, Math.PI*0.6, Math.PI*1.4);
      ctx.stroke();
      
      // Crown ornament
      const crownGradient = ctx.createRadialGradient(centerX, centerY - 45, 0, centerX, centerY - 45, 15);
      crownGradient.addColorStop(0, '#ffed4e');
      crownGradient.addColorStop(0.7, '#ffd700');
      crownGradient.addColorStop(1, '#b8860b');
      
      ctx.fillStyle = crownGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY - 45, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Crown points
      ctx.fillStyle = '#ffd700';
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const x = centerX + Math.cos(angle) * 8;
        const y = centerY - 45 + Math.sin(angle) * 8;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(centerX + Math.cos(angle) * 15, centerY - 45 + Math.sin(angle) * 15);
        ctx.lineTo(centerX + Math.cos(angle + 0.3) * 12, centerY - 45 + Math.sin(angle + 0.3) * 12);
        ctx.closePath();
        ctx.fill();
      }
      
      // Trophy shine effect
      ctx.globalAlpha = 0.3;
      const shineGradient = ctx.createLinearGradient(centerX - 20, centerY - 25, centerX - 10, centerY - 15);
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = shineGradient;
      ctx.beginPath();
      ctx.ellipse(centerX - 15, centerY - 20, 8, 20, -0.3, 0, Math.PI * 2);
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
        ctx.globalAlpha = particle.isBasketball ? 0.8 : 0.5;
        
        if (particle.isBasketball) {
          // Draw basketball exactly like the cursor
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

          // Basketball lines - exactly like cursor
          ctx.strokeStyle = '#9a3412';
          ctx.lineWidth = Math.max(1, particle.size * 0.1);
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
          
          // Curved seam lines
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.9, -Math.PI/2, Math.PI/2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.9, Math.PI/2, -Math.PI/2);
          ctx.stroke();
          
        } else {
          // Regular particles
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
