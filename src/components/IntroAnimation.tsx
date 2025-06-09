
import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const [showAdjective, setShowAdjective] = useState(false);

  const adjectives = ['engineer', 'innovator', 'dreamer', 'dedicated', 'confident', 'learner', 'engineer'];

  useEffect(() => {
    // Show name first
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 500);

    // Start showing adjectives after name appears
    const adjectiveTimer = setTimeout(() => {
      setShowAdjective(true);
    }, 1500);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(adjectiveTimer);
    };
  }, []);

  useEffect(() => {
    if (!showAdjective) return;

    const interval = setInterval(() => {
      setCurrentAdjectiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= adjectives.length) {
          // Animation complete, transition to portfolio
          setTimeout(onComplete, 1000);
          return prevIndex;
        }
        return nextIndex;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [showAdjective, adjectives.length, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Name */}
        <h1 
          className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-1000 ${
            showName ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          Shaan Patel
        </h1>

        {/* Cycling adjectives */}
        <div className="mt-8 h-12">
          {showAdjective && (
            <p 
              key={currentAdjectiveIndex}
              className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in"
            >
              {adjectives[currentAdjectiveIndex]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
