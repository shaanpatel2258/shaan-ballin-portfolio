
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4 relative z-10 bg-amber-900" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hardwood' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23D2691E'/%3E%3Cg fill='%23A0522D' opacity='0.3'%3E%3Crect x='0' y='0' width='100' height='5'/%3E%3Crect x='0' y='10' width='100' height='3'/%3E%3Crect x='0' y='17' width='100' height='2'/%3E%3Crect x='0' y='25' width='100' height='4'/%3E%3Crect x='0' y='33' width='100' height='2'/%3E%3Crect x='0' y='40' width='100' height='5'/%3E%3Crect x='0' y='50' width='100' height='3'/%3E%3Crect x='0' y='57' width='100' height='2'/%3E%3Crect x='0' y='65' width='100' height='4'/%3E%3Crect x='0' y='73' width='100' height='2'/%3E%3Crect x='0' y='80' width='100' height='5'/%3E%3Crect x='0' y='90' width='100' height='3'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23hardwood)'/%3E%3C/svg%3E")`,
      backgroundSize: '200px 200px'
    }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-amber-400 bg-size-200 animate-[gradient_3s_ease-in-out_infinite]">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
            <p className="text-gray-300 text-sm">shaanp2258@gmail.com</p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white">Phone</h3>
            <p className="text-gray-300 text-sm">+1 (732) 910-6290</p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white">Location</h3>
            <p className="text-gray-300 text-sm">San Jose, CA</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-300 text-base mb-4">Ready to build something amazing together?</p>
          <a 
            href="mailto:shaanp2258@gmail.com"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 rounded-full text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
