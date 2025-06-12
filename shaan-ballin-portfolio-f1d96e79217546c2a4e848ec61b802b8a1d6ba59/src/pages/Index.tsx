
import { useState, useEffect } from 'react';
import IntroAnimation from '../components/IntroAnimation';
import Portfolio from '../components/Portfolio';

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleAnimationComplete = () => {
    setShowPortfolio(true);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden cursor-none">
      {!showPortfolio ? (
        <IntroAnimation onComplete={handleAnimationComplete} />
      ) : (
        <Portfolio />
      )}
    </div>
  );
};

export default Index;
