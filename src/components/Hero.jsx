/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";


function Hero() {
  return (
    <>
    
<section
  className="relative bg-[url(https://images.unsplash.com/photo-1507484467459-0c01be16726e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyb3BzfGVufDB8fDB8fHww)] bg-cover bg-no-repeat h-screen w-screen"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-red-600 font-extrabold sm:text-5xl">
        Crop Care

        <strong className="block font-extrabold text-green-400"> Take Care of the Crops </strong>
      </h1>

      <p className="text-white mt-4 max-w-lg sm:text-xl/relaxed">
       Website to detect the plant or crop disease and to cure the disease.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
      <Link
      to="/CropDiseasePredictor"
      className="mx-auto block w-full rounded
       bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow
        hover:bg-green-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
    >
      Get Started
    </Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero