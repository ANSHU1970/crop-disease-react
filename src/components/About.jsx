// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Cpu, Database, Globe, Shield, Zap, Target, Award, TrendingUp, Users } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black/40 backdrop-blur-xl border-2 border-white/20 rounded-full mb-6 shadow-2xl">
            <span className="text-3xl">🌱</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl mb-4">
            About CropCare
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Advanced AI-Powered Crop Disease Detection | Smart Agriculture Solution | Real-time Analysis
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-black/40 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
          
          {/* Project Overview */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-xl">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Project Overview</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                <span className="font-bold text-white">CropCare</span> is an innovative web application that leverages 
                cutting-edge artificial intelligence and machine learning technologies to revolutionize crop disease detection. 
                Our platform empowers farmers and agricultural professionals with instant, accurate disease identification 
                and personalized treatment recommendations.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Built with modern technologies including React.js, FastAPI, and TensorFlow, CropCare delivers 
                real-time analysis with industry-leading accuracy rates to help ensure healthier crops and better yields.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-teal-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Key Features</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "🔍", name: "AI-Powered Detection", desc: "Advanced neural networks for precise disease identification" },
                  { icon: "⚡", name: "Real-time Analysis", desc: "Instant results with detailed diagnostic reports" },
                  { icon: "💊", name: "Treatment Recommendations", desc: "Personalized cure suggestions and preventive measures" },
                  { icon: "📱", name: "Multi-Device Support", desc: "Responsive design for desktop, tablet, and mobile" },
                  { icon: "🌾", name: "Multiple Crop Types", desc: "Support for potato, tomato, rice, wheat, corn, and pea" },
                  { icon: "📊", name: "Progress Tracking", desc: "Monitor treatment effectiveness over time" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                          {feature.name}
                        </h3>
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-cyan-500/20 rounded-xl">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Globe className="text-blue-400" />,
                    title: "Frontend Technologies",
                    techs: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"]
                  },
                  {
                    icon: <Database className="text-emerald-400" />,
                    title: "Backend & AI",
                    techs: ["FastAPI", "TensorFlow", "Python", "Machine Learning Models"]
                  },
                  {
                    icon: <Shield className="text-purple-400" />,
                    title: "Development Tools",
                    techs: ["Git Version Control", "RESTful APIs", "Modern Build Tools", "CI/CD Pipeline"]
                  },
                  {
                    icon: <Zap className="text-teal-400" />,
                    title: "Performance Features",
                    techs: ["Image Processing", "Real-time Analysis", "Optimized Loading", "Cross-browser Support"]
                  }
                ].map((category, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {category.techs.map((tech, techIndex) => (
                        <div key={techIndex} className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          • {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, number: "95%", label: "Detection Accuracy", color: "emerald" },
              { icon: <TrendingUp className="w-6 h-6" />, number: "6", label: "Supported Crops", color: "teal" },
              { icon: <Users className="w-6 h-6" />, number: "24/7", label: "Availability", color: "cyan" }
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-xl mb-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <span className="text-emerald-400">{stat.icon}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="flex justify-center">
          <div className="w-32 h-1 bg-emerald-400 opacity-60 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default About
