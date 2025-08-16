import {
  Facebook,
  Twitter,
  Mail,
  ChevronDown,
  Linkedin,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function Header({ onNavigate, handleLogoClick }) {
  return (
    <header className="w-full bg-slate-50 border-b border-gray-200 px-8 py-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg p-2 -m-2"
        >
          <ImageWithFallback
            src="/genexcorp-logo.png"
            alt="GenexCorp Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="text-red-400 uppercase tracking-wider">
            <div className="text-sm leading-tight">
              GENEXCORP<br />
              CORPORATE<br />
              SERVICES PVT LTD
            </div>
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-500">
          {/* Home with dropdown */}
          <div className="relative group flex items-center space-x-1 text-red-500 cursor-pointer">
            <span>Home</span>
            <ChevronDown className="h-3 w-3" />
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <button
                onClick={() => onNavigate('objective')}
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                Our Objective
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Services with dropdown */}
          <div className="relative group flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
            <span>Services</span>
            <ChevronDown className="h-3 w-3" />
            {/* Services Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <button
                onClick={() => onNavigate('productdevelopment')}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                Product Development
              </button>
              <button
                onClick={() => onNavigate('itconsulting')}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                IT Consulting
              </button>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                IT Resourcing
              </a>
            </div>
          </div>

          {/* Training with dropdown */}
          <div className="relative group flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
            <span>Training</span>
            <ChevronDown className="h-3 w-3" />
            {/* Training Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                Training / Internships
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                Real Time Internships
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                Corporate Training
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-red-500 transition-colors">Jobs</a>
          <a href="#" className="hover:text-red-500 transition-colors">Support</a>
        </nav>
      </div>
    </header>
  );
}