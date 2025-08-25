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
    <header className="w-full bg-gradient-to-r from-white via-slate-50 to-white border-b border-gray-200 shadow-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6 relative z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Enhanced Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg p-2 -m-2 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/10 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <ImageWithFallback
              src="/genexcorp-logo.png"
              alt="GenexCorp Logo"
              className="w-10 sm:w-12 h-10 sm:h-12 object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-red-500 uppercase tracking-wider">
            <div className="text-xs sm:text-sm leading-tight font-semibold">
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                GENEXCORP
              </span>
              <br />
              <span className="text-gray-600 text-[10px] sm:text-xs font-medium">
                CORPORATE
              </span>
              <br />
              <span className="text-gray-600 text-[10px] sm:text-xs font-medium">
                SERVICES PVT LTD
              </span>
            </div>
          </div>
        </button>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-sm text-gray-600">
          {/* Home with enhanced dropdown */}
          <div className={`relative group flex items-center space-x-1 ${isHomeActive ? 'text-red-500' : 'hover:text-red-500'} transition-all duration-300 cursor-pointer`}>
            <button
              onClick={() => onNavigate('home')}
              className="focus:outline-none font-medium relative py-2"
            >
              Home
              {isHomeActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"></div>}
            </button>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
            {/* Enhanced Dropdown Menu */}
            <div className="absolute left-0 top-full mt-3 w-56 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-3 transition-all duration-300 z-50 overflow-hidden">
              <div className="p-2">
                <button
                  onClick={() => onNavigate('objective')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium"
                >
                  Our Objective
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium"
                >
                  Portfolio
                </button>
              </div>
            </div>
          </div>

          {/* Services with enhanced dropdown */}
          <div className={`relative group flex items-center space-x-1 ${isServicesActive ? 'text-red-500' : 'hover:text-red-500'} transition-all duration-300 cursor-pointer`}>
            <span className="font-medium relative py-2">
              Services
              {isServicesActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"></div>}
            </span>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
            {/* Enhanced Services Dropdown Menu */}
            <div className="absolute left-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-3 transition-all duration-300 z-50 overflow-hidden">
              <div className="p-2">
                <button
                  onClick={() => onNavigate('productdevelopment')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium border-b border-gray-50 last:border-b-0"
                >
                  Product Development
                </button>
                <button
                  onClick={() => onNavigate('itconsulting')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium border-b border-gray-50 last:border-b-0"
                >
                  IT Consulting
                </button>
                <button
                  onClick={() => onNavigate('itresourcing')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium"
                >
                  IT Resourcing
                </button>
              </div>
            </div>
          </div>

          {/* Training with enhanced dropdown */}
          <div className={`relative group flex items-center space-x-1 ${isTrainingActive ? 'text-red-500' : 'hover:text-red-500'} transition-all duration-300 cursor-pointer`}>
            <span className="font-medium relative py-2">
              Training
              {isTrainingActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"></div>}
            </span>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
            {/* Enhanced Training Dropdown Menu */}
            <div className="absolute left-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-3 transition-all duration-300 z-50 overflow-hidden">
              <div className="p-2">
                <button
                  onClick={() => onNavigate('training')}
                  className={`w-full text-left px-4 py-3 ${currentPage === 'training' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium border-b border-gray-50 last:border-b-0`}
                >
                  Training / Internships
                </button>
                <button
                  onClick={() => onNavigate('realtimeinternships')}
                  className={`w-full text-left px-4 py-3 ${currentPage === 'realtimeinternships' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium border-b border-gray-50 last:border-b-0`}
                >
                  Real Time Internships
                </button>
                <button
                  onClick={() => onNavigate('corporatetraining')}
                  className={`w-full text-left px-4 py-3 ${currentPage === 'corporatetraining' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-all duration-200 rounded-xl font-medium`}
                >
                  Corporate Training
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Jobs Button */}
          <button
            onClick={() => onNavigate('jobs')}
            className={`text-sm font-medium ${currentPage === 'jobs' ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition-all duration-300 relative py-2 px-4 rounded-lg hover:bg-red-50`}
          >
            Jobs
            {currentPage === 'jobs' && <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-500 rounded-full"></div>}
          </button>
          {/* Enhanced Support Button */}
          <button
            onClick={() => onNavigate('support')}
            className={`text-sm font-medium ${currentPage === 'support' ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition-all duration-300 relative py-2 px-4 rounded-lg hover:bg-red-50`}
          >
            Support
            {currentPage === 'support' && <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-500 rounded-full"></div>}
          </button>
        </nav>

        {/* Enhanced Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-xl p-2 hover:bg-red-50 transition-all duration-300"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 
            <X className="h-6 w-6 rotate-90 transition-transform duration-300" /> : 
            <Menu className="h-6 w-6 transition-transform duration-300" />
          }
        </button>
      </div>

      {/* Enhanced Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 rounded-b-2xl shadow-2xl mt-2 overflow-hidden transform transition-all duration-300 ease-out">
          <nav className="px-4 py-6">
            <div className="flex flex-col space-y-2">
              {/* Enhanced Home Dropdown */}
              <div className="relative">
                <button
                  onClick={() => onNavigate('home')}
                  className={`w-full text-left text-sm font-medium ${isHomeActive ? 'text-red-500 bg-red-50' : 'text-gray-600'} hover:text-red-500 hover:bg-red-50 flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300`}
                >
                  Home
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="ml-4 mt-2 space-y-1">
                  <button
                    onClick={() => { onNavigate('objective'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm"
                  >
                    Our Objective
                  </button>
                  <button
                    onClick={() => { onNavigate('portfolio'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm"
                  >
                    Portfolio
                  </button>
                </div>
              </div>

              {/* Enhanced Services Dropdown */}
              <div className="relative">
                <button
                  className={`w-full text-left text-sm font-medium ${isServicesActive ? 'text-red-500 bg-red-50' : 'text-gray-600'} hover:text-red-500 hover:bg-red-50 flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300`}
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="ml-4 mt-2 space-y-1">
                  <button
                    onClick={() => { onNavigate('productdevelopment'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm"
                  >
                    Product Development
                  </button>
                  <button
                    onClick={() => { onNavigate('itconsulting'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm"
                  >
                    IT Consulting
                  </button>
                  <button
                    onClick={() => { onNavigate('itresourcing'); setIsMobileMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm"
                  >
                    IT Resourcing
                  </button>
                </div>
              </div>

              {/* Enhanced Training Dropdown */}
              <div className="relative">
                <button
                  className={`w-full text-left text-sm font-medium ${isTrainingActive ? 'text-red-500 bg-red-50' : 'text-gray-600'} hover:text-red-500 hover:bg-red-50 flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300`}
                >
                  Training
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="ml-4 mt-2 space-y-1">
                  <button
                    onClick={() => { onNavigate('training'); setIsMobileMenuOpen(false); }}
                    className={`block w-full text-left px-4 py-2 ${currentPage === 'training' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm`}
                  >
                    Training / Internships
                  </button>
                  <button
                    onClick={() => { onNavigate('realtimeinternships'); setIsMobileMenuOpen(false); }}
                    className={`block w-full text-left px-4 py-2 ${currentPage === 'realtimeinternships' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm`}
                  >
                    Real Time Internships
                  </button>
                  <button
                    onClick={() => { onNavigate('corporatetraining'); setIsMobileMenuOpen(false); }}
                    className={`block w-full text-left px-4 py-2 ${currentPage === 'corporatetraining' ? 'text-red-500 bg-red-50' : 'text-gray-700'} hover:bg-red-50 hover:text-red-500 transition-all duration-300 rounded-lg text-sm`}
                  >
                    Corporate Training
                  </button>
                </div>
              </div>

              {/* Enhanced Jobs & Support Buttons */}
              <button
                onClick={() => { onNavigate('jobs'); setIsMobileMenuOpen(false); }}
                className={`text-sm font-medium ${currentPage === 'jobs' ? 'text-red-500 bg-red-50' : 'text-gray-600'} hover:text-red-500 hover:bg-red-50 transition-all duration-300 px-4 py-3 rounded-xl`}
              >
                Jobs
              </button>
              <button
                onClick={() => { onNavigate('support'); setIsMobileMenuOpen(false); }}
                className={`text-sm font-medium ${currentPage === 'support' ? 'text-red-500 bg-red-50' : 'text-gray-600'} hover:text-red-500 hover:bg-red-50 transition-all duration-300 px-4 py-3 rounded-xl`}
              >
                Support
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}