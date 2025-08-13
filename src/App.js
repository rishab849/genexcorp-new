import { Button } from "./components/ui/button";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Mail,
  ChevronDown,
  Linkedin,
  Users,
  Target,
  Award,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState, useEffect } from "react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=1200&h=600&crop=center",
      title: "Ready to Transform Your Business?",
      subtitle:
        "Join hundreds of successful companies that have revolutionized their operations with our expert consulting and innovative solutions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=1200&h=600&crop=center",
      title: "Strategic IT Consulting Solutions",
      subtitle:
        "Leverage cutting-edge technology and strategic insights to drive your business forward with our comprehensive IT consulting services.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      title: "Professional Training & Development",
      subtitle:
        "Empower your workforce with industry-leading training programs designed to enhance skills and drive organizational excellence.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentSlide(0);
  };

  // Handle scroll position and document dimensions
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.documentElement.scrollHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set dimensions
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate max scroll position to keep icons visible until the end
  const maxScroll = documentHeight - windowHeight;
  const translateY = Math.min(scrollPosition * 0.5, maxScroll);

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 relative z-50 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg p-2 -m-2"
        >
          <ImageWithFallback
            src="/genexcorp-logo.png"
            alt="GenexCorp Logo"
            onClick={handleLogoClick}
            className="h-12 w-auto cursor-pointer outline-none focus:outline-none border-none"
          />
          <div className="text-red-400 uppercase tracking-wider text-sm leading-tight">
            GENEXCORP
            <br />
            CORPORATE
            <br />
            SERVICES PVT LTD
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-500">
          {/* Home dropdown */}
          <div className="relative group flex items-center space-x-1 text-red-500 cursor-pointer">
            <span>01 - Home</span>
            <ChevronDown className="h-3 w-3" />
            <div className="absolute left-0 top-full mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform -translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-red-50 hover:text-red-500"
              >
                Our Objective
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-red-50 hover:text-red-500"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Services dropdown */}
          <div className="relative group flex items-center space-x-1 hover:text-red-500 cursor-pointer">
            <span>02 - Services</span>
            <ChevronDown className="h-3 w-3" />
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform -translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
              <a
                href="#"
                className="block px-4 py-3 border-b hover:bg-red-50 hover:text-red-500"
              >
                Product Development
              </a>
              <a
                href="#"
                className="block px-4 py-3 border-b hover:bg-red-50 hover:text-red-500"
              >
                IT Consulting
              </a>
              <a
                href="#"
                className="block px-4 py-3 hover:bg-red-50 hover:text-red-500"
              >
                IT Resourcing
              </a>
            </div>
          </div>

          {/* Training dropdown */}
          <div className="relative group flex items-center space-x-1 hover:text-red-500 cursor-pointer">
            <span>03 - Training</span>
            <ChevronDown className="h-3 w-3" />
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform -translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
              <a
                href="#"
                className="block px-4 py-3 border-b hover:bg-red-50 hover:text-red-500"
              >
                Training / Internships
              </a>
              <a
                href="#"
                className="block px-4 py-3 border-b hover:bg-red-50 hover:text-red-500"
              >
                Real Time Internships
              </a>
              <a
                href="#"
                className="block px-4 py-3 hover:bg-red-50 hover:text-red-500"
              >
                Corporate Training
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-red-500">
            04 - Jobs
          </a>
          <a href="#" className="hover:text-red-500">
            05 - Support
          </a>
        </nav>
      </header>

      <main className="flex flex-1 relative">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center px-8 py-16">
          <div className="max-w-7xl w-full text-center">
            <h1 className="text-6xl leading-tight text-gray-800 mb-6">
              Innovative{" "}
              <span className="text-red-500">Corporate Solutions</span>
              <br />
              & <span className="text-red-500">Strategic Growth</span>
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-4xl mx-auto">
              Everyone that is part of Genexcorp is passionate about how IT can
              help transform your business...
            </p>

            <div className="flex items-center justify-center space-x-8 mb-16">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md">
                Get Started
              </Button>
              <a
                href="#"
                className="flex items-center text-red-500 hover:text-red-600"
              >
                <ArrowRight className="mr-2 h-4 w-4" /> See Our Services
              </a>
            </div>

            {/* Slider */}
            <div className="relative w-full max-w-full mx-auto mb-16">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ImageWithFallback
                      src={slide.image}
                      alt={`Corporate slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white px-8 max-w-4xl text-center">
                      <h2 className="text-4xl mb-6">{slide.title}</h2>
                      <p className="text-xl text-gray-300">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide ? "bg-red-500" : "bg-white/50"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg text-left">
                <h3 className="text-xl mb-4 text-gray-800">Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Since we understand your delivery, your participants 
                  will be ready to take any challenge in Analytics within 
                  few days after training, with the curriculum we created, 
                  for experienced BI guys and relatively new one to understand.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-left">
                <h3 className="text-xl mb-4 text-gray-800">Trainings / Internships</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nobody would believe what is called need based training approach 
                  unless experienced. If you are really looking to take your 
                  career into BI and Analytics, this is the right place for you 
                  to get adopted with the foundational understanding.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-left">
                <h3 className="text-xl mb-4 text-gray-800">Consulting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leadership with Passion for Analytics –We change the way Organizations 
                  looks at their Business. With the ever growing need of Comprehensive 
                  Business Intelligence, organizations need to have talent which 
                  is cost effective. We are the one of those rare, 
                  who can solve analytic issues.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-left">
                <h3 className="text-xl mb-4 text-gray-800">Product Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Do you feel the HEAT from continuous change in Business Blueprint 
                  & Reporting? In the current dynamic digital environment, 
                  where opinions / needs keep changing, are you doing enough 
                  with right approach, for your Business to take inform decision? 
                  Are you aware that these days BI approach is 
                  “AGILE”. Walk-in to see how we can help.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white border-l-4 border-red-500 pl-6 text-left max-w-4xl mx-auto">
              <h3 className="text-2xl mb-4 text-gray-800">Why Choose GenexCorp?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete ETL tool with proprietary database capabilities</li>
                <li>• Role-based and AD-based security</li>
                <li>• Data compression to save resources</li>
                <li>• Complete analysis across systems</li>
                <li>• Embedded mapping objects for visualization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right-side Social Icons with Full Scroll */}
        <div
          className="flex flex-col items-center space-y-6 bg-red-500 p-6 rounded-lg shadow-lg z-50"
          style={{
            position: "fixed",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)", // keeps it centered vertically
            }}
        >
          <a href="#" className="text-white hover:text-red-100">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-100">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-100">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-100">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 text-gray-800 mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-8 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-lg mb-3">GENEXCORP CORPORATE SERVICES PVT LTD</h2>
            <p className="text-sm text-gray-600">
              Some believe in the power of numbers. Some 
              believe in the power of technology. We believe 
              in the power of people, power of human touch 
              which brings best out of the best and the impact 
              people can have on technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-red-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Trainings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <p>📍 VT Plaza, 4th Floor, KPHB Colony, 
              Kukatpally, Road  1, Hyderabad - 500085, 
              Telangana, India</p>
            <p>📧 hr@genexcorp.com</p>
            <p>📞 +91-9920779995</p>
          </div>
        </div>
        <div className="bg-gray-100 text-center py-4 text-xs text-gray-500 border-t">
          © {new Date().getFullYear()} GenexCorp Corporate Services Pvt Ltd. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}