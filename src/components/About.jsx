// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Briefcase, Code, GraduationCap, MapPin } from "lucide-react";


function About() {
  return (
    <>
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-gray-800 text-center">About Me</h2>
        <p className="text-gray-600 text-center mt-3">
          Passionate Developer | Web & AI Enthusiast | Problem Solver
        </p>

        <div className="mt-8 space-y-6">
          {/* Introduction Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">👋 Introduction</h3>
            <p className="text-gray-700 mt-2">
              Hi, I am <span className="font-semibold">Anshuman Mishra</span>, a tech enthusiast
              pursuing B.Tech in Computer Science and Engineering at Veer Surendra Sai University of Technology, Burla.
              I specialize in web development, machine learning, and optimization algorithms.
              My passion lies in creating impactful projects that solve real-world problems.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">🛠️ Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {["React.js", "FastAPI", "Django", "Tailwind CSS", "TensorFlow", "Machine Learning", "Optimization Algorithms", "HTML & CSS"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">📌 More About Me</h3>
            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-600" />
                <span>B.Tech, Veer Surendra Sai University of Technology, Burla</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-600" />
                <span>Experience in Web Dev, AI and ML</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="text-blue-600" />
                <span>Languages: Python, C/C++, JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span>Birmaharajpur, Odisha, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About