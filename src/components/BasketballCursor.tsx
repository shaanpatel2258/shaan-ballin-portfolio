
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
      <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full relative shadow-lg">
        {/* Basketball curved lines */}
        <div className="absolute inset-0 rounded-full border-2 border-orange-800 opacity-80" />
        
        {/* Vertical curved line */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-800 opacity-80 rounded-full" style={{ transform: 'translateX(-50%)' }} />
        
        {/* Horizontal curved line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-800 opacity-80 rounded-full" style={{ transform: 'translateY(-50%)' }} />
        
        {/* Diagonal curved lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 24 24">
            <path 
              d="M 6 3 Q 12 9 18 3" 
              stroke="#9a3412" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.8"
            />
            <path 
              d="M 6 21 Q 12 15 18 21" 
              stroke="#9a3412" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BasketballCursor;
