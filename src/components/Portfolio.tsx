
import { useEffect, useState } from 'react';
import { ChevronDown, Linkedin, Github, Mail, FileText } from 'lucide-react';
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
    'Full Stack Developer', 
    'React Specialist',
    'Problem Solver',
    'Code Architect'
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <BasketballCursor />
      <DynamicBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className={`text-center transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
              Shaan
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Patel
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide h-12">
            <TypedText texts={titles} />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-gray-200 transition-colors duration-300 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="mailto:your.email@example.com"
               className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform">
              <Mail size={28} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:scale-110 transform">
              <FileText size={28} />
            </a>
          </div>

          {/* Blurb */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Passionate about creating innovative solutions that bridge technology and user experience. 
            I build scalable applications with clean code and modern frameworks, always pushing the 
            boundaries of what's possible.
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

        {/* Floating basketball elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-500 rounded-full animate-bounce opacity-20" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-red-500 rounded-full animate-bounce opacity-20" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-500 rounded-full animate-bounce opacity-20" style={{ animationDelay: '2s' }} />
      </section>

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Portfolio;
