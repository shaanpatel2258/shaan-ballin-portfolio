
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
    <div className="min-h-screen bg-amber-900 text-white relative overflow-x-hidden" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hardwood' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23D2691E'/%3E%3Cg fill='%23A0522D' opacity='0.3'%3E%3Crect x='0' y='0' width='100' height='5'/%3E%3Crect x='0' y='10' width='100' height='3'/%3E%3Crect x='0' y='17' width='100' height='2'/%3E%3Crect x='0' y='25' width='100' height='4'/%3E%3Crect x='0' y='33' width='100' height='2'/%3E%3Crect x='0' y='40' width='100' height='5'/%3E%3Crect x='0' y='50' width='100' height='3'/%3E%3Crect x='0' y='57' width='100' height='2'/%3E%3Crect x='0' y='65' width='100' height='4'/%3E%3Crect x='0' y='73' width='100' height='2'/%3E%3Crect x='0' y='80' width='100' height='5'/%3E%3Crect x='0' y='90' width='100' height='3'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23hardwood)'/%3E%3C/svg%3E")`,
      backgroundSize: '200px 200px'
    }}>
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
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-amber-400 bg-size-200 animate-[gradient_3s_ease-in-out_infinite]">
                  About Me
                </span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed mb-8">
                Hi! My name is Shaan Patel and I am a recent graduate of Rutgers Honors College with majors in Computer Science and Finance. I am a passionate engineer who loves utilizing technology to solve challenging problems and welcome any opportunities! Aside from that, I'm a huge basketball and football fan, love hiking, surfing, traveling, and photography.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-amber-400 bg-size-200 animate-[gradient_3s_ease-in-out_infinite]">
                  Work Experience
                </span>
              </h2>
              <div className="space-y-4">
                {workExperience.map((experience, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-amber-800/30 border border-amber-700/50 hover:border-orange-500/50 transition-colors duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                    <span className="text-lg text-gray-100">{experience}</span>
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
