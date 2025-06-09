
import { useEffect, useState } from 'react';

const BasketballCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideOnLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', hideOnLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', hideOnLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 12,
        top: position.y - 12,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full relative">
        {/* Basketball lines */}
        <div className="absolute inset-0 rounded-full border border-orange-800 opacity-60" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-orange-800 opacity-60" style={{ transform: 'translateX(-50%)' }} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-orange-800 opacity-60" style={{ transform: 'translateY(-50%)' }} />
      </div>
    </div>
  );
};

export default BasketballCursor;
