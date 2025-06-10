
import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const [showAdjective, setShowAdjective] = useState(false);
  const [splitNames, setSplitNames] = useState(false);
  const [hideAdjectives, setHideAdjectives] = useState(false);
  const [reuniteNames, setReuniteNames] = useState(false);
  const [basketballPosition, setBasketballPosition] = useState({ x: 0, direction: 1 });

  const adjectives = ['ENGINEER', 'INNOVATOR', 'DREAMER', 'DEDICATED', 'CONFIDENT', 'LEARNER', 'ENGINEER'];

  useEffect(() => {
    // Show name first
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 500);

    // Split names to make space for adjectives
    const splitTimer = setTimeout(() => {
      setSplitNames(true);
    }, 2000);

    // Start showing adjectives after names split
    const adjectiveTimer = setTimeout(() => {
      setShowAdjective(true);
    }, 2500);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(splitTimer);
      clearTimeout(adjectiveTimer);
    };
  }, []);

  useEffect(() => {
    if (!showAdjective) return;

    const interval = setInterval(() => {
      setCurrentAdjectiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= adjectives.length) {
          // Hide adjectives and reunite names
          setHideAdjectives(true);
          setTimeout(() => {
            setReuniteNames(true);
            setTimeout(onComplete, 1500);
          }, 800);
          return prevIndex;
        }
        return nextIndex;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [showAdjective, adjectives.length, onComplete]);

  // Basketball rolling animation
  useEffect(() => {
    const rollBasketball = () => {
      setBasketballPosition(prev => {
        const newX = prev.x + (prev.direction * 2);
        const screenWidth = window.innerWidth - 80; // Account for basketball width
        
        if (newX >= screenWidth || newX <= 0) {
          return { x: newX <= 0 ? 0 : screenWidth, direction: prev.direction * -1 };
        }
        
        return { x: newX, direction: prev.direction };
      });
    };

    const interval = setInterval(rollBasketball, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-orange-900 relative overflow-hidden cursor-pointer" onClick={handleContinue}>
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Rolling Basketball */}
      <div 
        className="absolute w-20 h-20 z-20 transition-transform duration-75" 
        style={{ 
          left: `${basketballPosition.x}px`,
          bottom: '20px',
          transform: `rotate(${basketballPosition.x * 2}deg)` // Rolling effect
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-full relative shadow-2xl">
          {/* Basketball lines */}
          <div className="absolute inset-0 rounded-full border-3 border-orange-800 opacity-90" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-orange-800 opacity-90 rounded-full" style={{ transform: 'translateX(-50%)' }} />
          <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-800 opacity-90 rounded-full" style={{ transform: 'translateY(-50%)' }} />
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 80 80">
              <path 
                d="M 20 10 Q 40 30 60 10" 
                stroke="#9a3412" 
                strokeWidth="3" 
                fill="none" 
                opacity="0.9"
              />
              <path 
                d="M 20 70 Q 40 50 60 70" 
                stroke="#9a3412" 
                strokeWidth="3" 
                fill="none" 
                opacity="0.9"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Click to continue text - stationary and centered */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30">
        <p className="text-sm text-gray-400">
          Click anywhere to continue
        </p>
      </div>

      <div className="text-center z-10 relative">
        {/* Name with improved spacing */}
        <div className="flex flex-col items-center justify-center h-32">
          <div className={`flex items-center justify-center transition-all duration-1000 ${
            splitNames && !reuniteNames ? 'space-x-64' : 'space-x-4'
          }`}>
            <h1 
              className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-1000 ${
                showName ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              Shaan
            </h1>
            <h1 
              className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-1000 ${
                showName ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              Patel
            </h1>
          </div>

          {/* Cycling adjectives in the middle with better positioning */}
          <div className="absolute inset-0 flex items-center justify-center">
            {showAdjective && !hideAdjectives && (
              <p 
                key={currentAdjectiveIndex}
                className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in px-8"
              >
                {adjectives[currentAdjectiveIndex]}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
