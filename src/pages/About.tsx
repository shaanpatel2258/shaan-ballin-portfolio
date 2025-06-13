
import { useState, useEffect } from 'react';
import DynamicBackground from '../components/DynamicBackground';
import BasketballCursor from '../components/BasketballCursor';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const workExperience = [
    'Software Engineer @ Nutanix',
    'Software Engineer Intern @ Nutanix', 
    'Software Engineer Intern @ BMO Capital Markets',
    'Tax Technology Intern @ Goldman Sachs'
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <BasketballCursor />
      <DynamicBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="/lovable-uploads/f853fcd0-69c8-448e-b6a9-41860a9bc8a5.png"
                alt="Shaan Patel"
                className="w-full max-w-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                  About Me
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Passionate engineer always looking to tackle technical problems and create innovative solutions that help shape modern systems and improve user experiences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Work Experience
              </h2>
              <div className="space-y-4">
                {workExperience.map((experience, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800/50 hover:border-orange-500/50 transition-colors duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                    <span className="text-lg text-gray-200">{experience}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
