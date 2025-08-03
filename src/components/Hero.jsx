/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center 
        bg-[url(https://images.unsplash.com/photo-1507484467459-0c01be16726e?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyb3BzfGVufDB8fDB8fHww)] 
        bg-cover bg-center"
    >
      {/* Glass Panel/Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-950/40 to-white/20 backdrop-blur-sm p-2"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-8 py-16 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md text-center leading-tight">
          Crop Care
          <span className="block bg-gradient-to-r from-green-600 via-green-400 to-lime-400 bg-clip-text text-transparent drop-shadow mt-2 animate-gradient">
            Take Care of the Crops
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 text-center font-medium drop-shadow">
          Website to detect the plant or crop disease and to cure the disease.
        </p>
        <div className="flex gap-4 mt-10">
          <Link
            to="/CropDiseasePredictor"
            className="bg-green-600 px-8 py-3 rounded-xl border-2 border-white/40 text-white/90 backdrop-blur transition duration-20 hover:bg-blue-500 font-semibold;"
          >
            Get Started
          </Link>
          <Link
            to="/About"
            className="px-8 py-3 rounded-xl border-2 border-white/40 text-white/90 backdrop-blur transition hover:bg-blue-500 font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
