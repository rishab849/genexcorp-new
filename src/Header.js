import { useState } from "react";
import {
  Facebook,
  Twitter,
  Mail,
  ChevronDown,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function Header({ onNavigate, handleLogoClick, currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define which pages belong to each dropdown
  const isHomeActive = ['home', 'objective', 'portfolio'].includes(currentPage);
  const isServicesActive = ['productdevelopment', 'itconsulting', 'itresourcing'].includes(currentPage);
  const isTrainingActive = ['training', 'realtimeinternships', 'corporatetraining'].includes(currentPage);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-slate-50 border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg p-2 -m-2"
        >
          <ImageWithFallback
            src="/genexcorp-logo.png"
            alt="GenexCorp Logo"
            className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
          />
          <div className="text-red-400 uppercase tracking-wider">
            <div className="text-xs sm:text-sm leading-tight">
              GENEXCORP<br />
              CORPORATE<br />
              SERVICES PVT LTD
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-xs sm:text-sm text-gray-500">
          {/* Home with dropdown */}
          <div className={`relative group flex items-center space-x-1 ${isHomeActive ? 'text-red-500' : 'hover:text-red-500'} transition-colors cursor-pointer`}>
            <button
              onClick={() => onNavigate('home')} // Navigate to home page on click
              className="focus:outline-none"
            >
              Home
            </button>
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
          <div className={`relative group flex items-center space-x-1 ${isServicesActive ? 'text-red-500' : 'hover:text-red-500'} transition-colors cursor-pointer`}>
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
              <button
                onClick={() => onNavigate('itresourcing')}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                IT Resourcing
              </button>
            </div>
          </div>

          {/* Training with dropdown */}
          <div className={`relative group flex items-center space-x-1 ${isTrainingActive ? 'text-red-500' : 'hover:text-red-500'} transition-colors cursor-pointer`}>
            <span>Training</span>
            <ChevronDown className="h-3 w-3" />
            {/* Training Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <button
                onClick={() => onNavigate('training')}
                className={`block px-4 py-3 ${currentPage === 'training' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100`}
              >
                Training / Internships
              </button>
              <button
                onClick={() => onNavigate('realtimeinternships')}
                className={`block px-4 py-3 ${currentPage === 'realtimeinternships' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100`}
              >
                Real Time Internships
              </button>
              <button
                onClick={() => onNavigate('corporatetraining')}
                className={`block px-4 py-3 ${currentPage === 'corporatetraining' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-colors`}
              >
                Corporate Training
              </button>
            </div>
          </div>

          {/* Jobs Button */}
          <button
            onClick={() => onNavigate('jobs')}
            className={`text-xs sm:text-sm ${currentPage === 'jobs' ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}
          >
            Jobs
          </button>
          {/* Support Button */}
          <button
            onClick={() => onNavigate('support')}
            className={`text-xs sm:text-sm ${currentPage === 'support' ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}
          >
            Support
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md p-2"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4 mt-2">
          <div className="flex flex-col space-y-2">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={() => onNavigate('home')} // Navigate to home page on click
                className={`w-full text-left text-sm ${isHomeActive ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 flex items-center justify-between px-4 py-2`}
              >
                Home
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-1">
                <button
                  onClick={() => { onNavigate('objective'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  Our Objective
                </button>
                <button
                  onClick={() => { onNavigate('portfolio'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  Portfolio
                </button>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className={`w-full text-left text-sm ${isServicesActive ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 flex items-center justify-between px-4 py-2`}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-1">
                <button
                  onClick={() => { onNavigate('productdevelopment'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  Product Development
                </button>
                <button
                  onClick={() => { onNavigate('itconsulting'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  IT Consulting
                </button>
                <button
                  onClick={() => { onNavigate('itresourcing'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  IT Resourcing
                </button>
              </div>
            </div>

            {/* Training Dropdown */}
            <div className="relative">
              <button
                className={`w-full text-left text-sm ${isTrainingActive ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 flex items-center justify-between px-4 py-2`}
              >
                Training
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-1">
                <button
                  onClick={() => { onNavigate('training'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 ${currentPage === 'training' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-colors`}
                >
                  Training / Internships
                </button>
                <button
                  onClick={() => { onNavigate('realtimeinternships'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 ${currentPage === 'realtimeinternships' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-colors`}
                >
                  Real Time Internships
                </button>
                <button
                  onClick={() => { onNavigate('corporatetraining'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 ${currentPage === 'corporatetraining' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-colors`}
                >
                  Corporate Training
                </button>
              </div>
            </div>

            {/* Jobs Button */}
            <button
              onClick={() => { onNavigate('jobs'); setIsMobileMenuOpen(false); }}
              className={`text-sm ${currentPage === 'jobs' ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors px-4 py-2`}
            >
              Jobs
            </button>
            {/* Support Button */}
            <button
              onClick={() => { onNavigate('support'); setIsMobileMenuOpen(false); }}
              className={`text-sm ${currentPage === 'support' ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors px-4 py-2`}
            >
              Support
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}