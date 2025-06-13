import { useState } from 'react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500 to-purple-600",
      link: "https://www.google.com/search?q=reddd"
    },
    {
      title: "AI Task Manager",
      description: "Smart productivity app using machine learning to prioritize and categorize tasks automatically.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      gradient: "from-green-500 to-teal-600",
      link: "https://www.google.com/search?q=blue"
    },
    {
      title: "Real-time Chat App",
      description: "Scalable messaging platform with end-to-end encryption and multimedia support.",
      tech: ["TypeScript", "Socket.io", "Redis", "PostgreSQL"],
      gradient: "from-pink-500 to-red-600",
      link: "https://www.google.com/search?q=green"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics platform for business intelligence with real-time data processing.",
      tech: ["D3.js", "React", "Python", "AWS"],
      gradient: "from-yellow-500 to-orange-600",
      link: "https://www.google.com/search?q=yellow"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer block ${
                hoveredProject === index ? 'shadow-2xl shadow-orange-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 group-hover:border-orange-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
