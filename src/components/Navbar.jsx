// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { initFlowbite } from "flowbite";

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    initFlowbite();
    
    // Add dark class to document
    document.documentElement.classList.add('dark');
    
    // Add scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/20' 
        : 'bg-black/60 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/Logo.svg" 
                className="h-10 w-10 transition-all duration-300 group-hover:scale-110 drop-shadow-xl" 
                alt="CropCare Logo" 
              />
              <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl"></div>
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              CropCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { path: '/', label: 'Home', icon: '🏠' },
              { path: '/CropDiseasePredictor', label: 'Crops', icon: '🌱' },
              { path: '/About', label: 'About', icon: '👤' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white bg-emerald-600 shadow-xl shadow-emerald-500/40 border-2 border-emerald-400/50'
                    : 'text-white/90 hover:text-white hover:bg-white/20 border-2 border-transparent hover:border-white/30 hover:shadow-xl hover:shadow-white/20 backdrop-blur-sm'
                }`}
              >
                <span className="flex items-center space-x-2 relative z-10">
                  <span className="text-base filter drop-shadow-sm">{item.icon}</span>
                  <span className="drop-shadow-sm">{item.label}</span>
                </span>
                {isActive(item.path) && (
                  <>
                    <div className="absolute inset-0 bg-emerald-500/30 rounded-xl blur-sm -z-10"></div>
                    <div className="absolute -inset-1 bg-emerald-400 rounded-xl opacity-20 blur-md -z-20"></div>
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2.5 rounded-xl text-white hover:text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border-2 border-transparent hover:border-white/30 shadow-lg"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 drop-shadow-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 drop-shadow-sm ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 drop-shadow-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl mt-4 p-5 shadow-2xl border-2 border-white/20 shadow-black/50">
            {[
              { path: '/', label: 'Home', icon: '🏠' },
              { path: '/CropDiseasePredictor', label: 'Crops', icon: '🌱' },
              { path: '/About', label: 'About Me', icon: '👤' }
            ].map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-4 w-full px-4 py-4 rounded-xl text-left transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white bg-emerald-600 shadow-xl shadow-emerald-500/30 border border-emerald-400/50'
                    : 'text-white/90 hover:text-white hover:bg-white/15 hover:shadow-xl hover:shadow-white/10 border border-transparent hover:border-white/20'
                } ${index !== 0 ? 'mt-2' : ''}`}
              >
                <span className="text-xl filter drop-shadow-sm">{item.icon}</span>
                <span className="font-semibold drop-shadow-sm">{item.label}</span>
              </Link>
            ))}
            
            {/* Status Indicator */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-center space-x-2 text-white/60 text-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-sm"></span>
                <span className="drop-shadow-sm">Enhanced Visibility Mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Subtle accent border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 opacity-60"></div>
    </nav>
  );
}

export default Navbar;
