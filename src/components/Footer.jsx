import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              About Me
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Passionate Full Stack Developer & Machine Learning Enthusiast, building
              intelligent and scalable solutions with modern technologies.
            </p>
            {/* Brand indicator */}
            <div className="flex items-center space-x-2 pt-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-xs text-gray-500">CropCare Developer</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30 transition-all duration-300">
                  <Mail className="text-emerald-400 group-hover:text-emerald-300" size={16} />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  mishraanshuman9937@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-teal-500/20 group-hover:border-teal-400/30 transition-all duration-300">
                  <Phone className="text-teal-400 group-hover:text-teal-300" size={16} />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  +91 8260604940
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-300">
                  <MapPin className="text-cyan-400 group-hover:text-cyan-300" size={16} />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  Sambalpur, Odisha, India
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Follow Me
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/ANSHU1970"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
              >
                <Github 
                  size={24} 
                  className="text-gray-400 group-hover:text-white transition-colors duration-300" 
                />
                <div className="absolute inset-0 bg-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/anshuman-mishra-665740268/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-blue-500/20 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <Linkedin 
                  size={24} 
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </a>
            </div>
            
            {/* Quick Links */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400">
                  React Developer
                </span>
                <span className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400">
                  ML Enthusiast
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-900 px-4">
              <div className="w-8 h-0.5 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} 
            </span>
            <span className="text-sm font-semibold text-white">
              Anshuman Mishra
            </span>
            <span className="text-sm text-gray-400">
              All rights reserved.
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400 opacity-50"></div>
    </footer>
  );
}
