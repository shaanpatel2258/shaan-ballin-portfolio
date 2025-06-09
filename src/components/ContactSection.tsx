
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative z-10 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-400">your.email@example.com</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
            <p className="text-gray-400">San Francisco, CA</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-6">Ready to build something amazing together?</p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
