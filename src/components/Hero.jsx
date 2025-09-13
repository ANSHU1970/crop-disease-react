/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Static Professional Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-gray-950 to-emerald-950"></div>
      
      {/* Additional depth layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-teal-900/20"></div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #14b8a6 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 80px 80px'
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          
          
          {/* Subtitle - Solid Text */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg mb-8 p-8">
            Take Care of the Crops
          </h2>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-12 drop-shadow-md">
            Advanced AI-powered website to detect plant and crop diseases with precision. 
            Get instant diagnosis and effective treatment recommendations for healthier crops.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/CropDiseasePredictor"
              className="group relative px-8 py-4 rounded-xl text-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-500 border-2 border-emerald-400/50 hover:border-emerald-300/70 backdrop-blur-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/40 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>🚀</span>
                <span>Get Started</span>
              </span>
              <div className="absolute inset-0 bg-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            </Link>
            
            <Link
              to="/About"
              className="group relative px-8 py-4 rounded-xl text-lg font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm shadow-xl shadow-black/20 hover:shadow-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>📖</span>
                <span>Learn More</span>
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            </Link>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '🔍', title: 'AI Detection', desc: 'Advanced machine learning algorithms for accurate disease identification' },
              { icon: '💊', title: 'Treatment Plans', desc: 'Personalized treatment recommendations for optimal crop health' },
              { icon: '📊', title: 'Real-time Analysis', desc: 'Instant results with detailed analysis and progress tracking' }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:border-emerald-400/30"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20 p-8">
            {[
              { number: '95%', label: 'Accuracy Rate' },
              { number: '6+', label: 'Supported Crops' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-emerald-400 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-sm text-white mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400 opacity-50"></div>
    </section>
  )
}

export default Hero
