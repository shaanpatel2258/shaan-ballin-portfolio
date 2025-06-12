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
        left: position.x - 6,
        top: position.y - 6,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full relative shadow-lg">
        {/* Basketball curved lines */}
        <div className="absolute inset-0 rounded-full border-2 border-orange-800 opacity-80" />
        
        {/* Vertical curved line */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-800 opacity-80 rounded-full" style={{ transform: 'translateX(-50%)' }} />
        
        {/* Horizontal curved line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-800 opacity-80 rounded-full" style={{ transform: 'translateY(-50%)' }} />
        
        {/* Diagonal curved lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 20 20">
            <path 
              d="M 5 2.5 Q 10 7.5 15 2.5" 
              stroke="#9a3412" 
              strokeWidth="0.6" 
              fill="none" 
              opacity="0.8"
            />
            <path 
              d="M 5 17.5 Q 10 12.5 15 17.5" 
              stroke="#9a3412" 
              strokeWidth="0.6" 
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
