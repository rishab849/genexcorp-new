import {
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-50 text-gray-800 mt-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-8 grid md:grid-cols-3 gap-8 items-start">
        {/* About GenexCorp */}
        <div>
          <h2 className="text-lg text-gray-900 mb-3">About GenexCorp</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Some believe in the power of numbers. Some believe in the power of technology. We believe 
            in the power of people, power of human touch which brings best out of the best and the impact 
            people can have on technology.
          </p>
        </div>

        {/* GenexCorp Quick Links */}
        <div className="text-center">
          <h3 className="text-gray-900 mb-4">GenexCorp Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button 
                onClick={() => onNavigate('home')} 
                className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('objective')} 
                className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block"
              >
                Our Objective
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('portfolio')} 
                className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block"
              >
                Portfolio
              </button>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block">
                Corporate Training
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block">
                Career Augmentation Training
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <p className="hover:text-red-500 transition-colors cursor-pointer">
              📍 VT Plaza, 4th Floor, KPHB Colony,<br />
              Kukatpally, Road # 1, Hyderabad - 500085,<br />
              Telangana, India
            </p>
            <p className="hover:text-red-500 transition-colors cursor-pointer">📞 +91-9920779095</p>
            <p className="hover:text-red-500 transition-colors cursor-pointer">📧 hr@genexcorp.com</p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-red-500 hover:scale-110 transform transition-all duration-200 p-2 hover:bg-red-50 rounded-full"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-red-500 hover:scale-110 transform transition-all duration-200 p-2 hover:bg-red-50 rounded-full"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-red-500 hover:scale-110 transform transition-all duration-200 p-2 hover:bg-red-50 rounded-full"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-center py-4 text-xs text-gray-500 border-t border-gray-200">
        © Genexcorp.com, {new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  );
}