/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CropDiseasePredictor from './components/CropDiseasePredictor'
import About from './components/About';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/CropDiseasePredictor" element={<CropDiseasePredictor />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
