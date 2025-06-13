
import { useEffect, useState } from 'react';
import { ChevronDown, Linkedin, Github, Mail, FileText, User } from 'lucide-react';
import ProjectsSection from './ProjectsSection';
import BasketballCursor from './BasketballCursor';
import DynamicBackground from './DynamicBackground';
import ContactSection from './ContactSection';
import TypedText from './TypedText';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const titles = [
    'Software Engineer',
    'Sports Fanatic', 
    'Travel Enthusiast',
    'Curious Learner'
  ];

  return (
    <div className="min-h-screen bg-amber-900 text-white relative overflow-x-hidden" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hardwood' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23D2691E'/%3E%3Cg fill='%23A0522D' opacity='0.3'%3E%3Crect x='0' y='0' width='100' height='5'/%3E%3Crect x='0' y='10' width='100' height='3'/%3E%3Crect x='0' y='17' width='100' height='2'/%3E%3Crect x='0' y='25' width='100' height='4'/%3E%3Crect x='0' y='33' width='100' height='2'/%3E%3Crect x='0' y='40' width='100' height='5'/%3E%3Crect x='0' y='50' width='100' height='3'/%3E%3Crect x='0' y='57' width='100' height='2'/%3E%3Crect x='0' y='65' width='100' height='4'/%3E%3Crect x='0' y='73' width='100' height='2'/%3E%3Crect x='0' y='80' width='100' height='5'/%3E%3Crect x='0' y='90' width='100' height='3'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23hardwood)'/%3E%3C/svg%3E")`,
      backgroundSize: '200px 200px'
    }}>
      <BasketballCursor />
      <DynamicBackground />
      
      {/* Navigation */}
      <nav className="fixed top-6 right-6 z-50">
        <a 
          href="/about"
          className="flex items-center space-x-2 px-4 py-2 bg-amber-800/80 backdrop-blur-sm border border-amber-700/50 rounded-full text-gray-100 hover:text-white hover:border-orange-500/50 transition-all duration-300"
        >
          <User size={20} />
          <span>About Me</span>
        </a>
      </nav>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className={`text-center transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main heading with white-based gradient transitions */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-size-200 animate-[gradient_4s_ease-in-out_infinite]">
              Shaan
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-size-200 animate-[gradient_4s_ease-in-out_infinite] [animation-delay:2s]">
              Patel
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className="text-2xl md:text-3xl text-gray-100 mb-8 font-light tracking-wide h-12">
            <TypedText texts={titles} />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/shaan-patel-181253207/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/spatel0203" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="mailto:shaanp2258@gmail.com"
               className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform">
              <Mail size={28} />
            </a>
            <a href="https://drive.google.com/file/d/1zuWqTebwxxbvkdBlTArQE6KWQcqqXjKH/view?pli=1" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform">
              <FileText size={28} />
            </a>
          </div>

          {/* Blurb */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">
            Passionate engineer always looking to tackle technical problems and create innovative solutions that help shape modern systems and improve user experiences.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            View My Work
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Floating basketball elements - made darker */}
        <div className="absolute top-20 left-10 w-16 h-16 animate-bounce opacity-30" style={{ animationDelay: '0s' }}>
          <div className="w-full h-full bg-gradient-to-br from-orange-700 to-orange-900 rounded-full relative shadow-xl">
            <div className="absolute inset-0 rounded-full border-2 border-orange-900 opacity-80" />
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-900 opacity-80" style={{ transform: 'translateX(-50%)' }} />
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-900 opacity-80" style={{ transform: 'translateY(-50%)' }} />
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 64 64">
                <path d="M 16 8 Q 32 24 48 8" stroke="#7c2d12" strokeWidth="2" fill="none" opacity="0.8" />
                <path d="M 16 56 Q 32 40 48 56" stroke="#7c2d12" strokeWidth="2" fill="none" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-40 right-20 w-12 h-12 animate-bounce opacity-30" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-br from-orange-700 to-orange-900 rounded-full relative shadow-xl">
            <div className="absolute inset-0 rounded-full border-2 border-orange-900 opacity-80" />
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-900 opacity-80" style={{ transform: 'translateX(-50%)' }} />
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-900 opacity-80" style={{ transform: 'translateY(-50%)' }} />
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 48 48">
                <path d="M 12 6 Q 24 18 36 6" stroke="#7c2d12" strokeWidth="1.5" fill="none" opacity="0.8" />
                <path d="M 12 42 Q 24 30 36 42" stroke="#7c2d12" strokeWidth="1.5" fill="none" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-20 w-20 h-20 animate-bounce opacity-30" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-orange-700 to-orange-900 rounded-full relative shadow-xl">
            <div className="absolute inset-0 rounded-full border-2 border-orange-900 opacity-80" />
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-900 opacity-80" style={{ transform: 'translateX(-50%)' }} />
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-900 opacity-80" style={{ transform: 'translateY(-50%)' }} />
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 80 80">
                <path d="M 20 10 Q 40 30 60 10" stroke="#7c2d12" strokeWidth="2.5" fill="none" opacity="0.8" />
                <path d="M 20 70 Q 40 50 60 70" stroke="#7c2d12" strokeWidth="2.5" fill="none" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Portfolio;
