import { Mail, Phone, MapPin, Github, Linkedin,  } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-black">About Me</h3>
            <p className="text-black mt-2">
              Passionate Full Stack Developer & Machine Learning Enthusiast, building
              intelligent and scalable solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-black">Contact Info</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="text-blue-500" />
                <span>mishraanshuman9937@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-blue-500" />
                <span>+91 8260604940</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="text-blue-500" />
                <span>Sambalpur, Odisha, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold text-black">Follow Me</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/ANSHU1970"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-800 transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anshuman-mishra-665740268/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-800 transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-700 mt-8 pt-4 text-gray-500">
          &copy; {new Date().getFullYear()} Anshuman Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
