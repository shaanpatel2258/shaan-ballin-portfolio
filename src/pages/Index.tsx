
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IntroAnimation from '../components/IntroAnimation';
import Portfolio from '../components/Portfolio';

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Skip intro if coming from another page (like About)
    if (location.state?.skipIntro) {
      setShowPortfolio(true);
    }
  }, [location]);

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
