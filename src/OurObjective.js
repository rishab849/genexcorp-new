import {
  ArrowRight,
  Facebook,
  Twitter,
  Mail,
  Linkedin,
  ShoppingCart,
  Smartphone,
  Cloud,
  Database,
  Cog,
  ShieldCheck,
  Zap,
  Code,
  CheckCircle,
  Star,
  Award,
  ChevronDown,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function OurObjective({ onNavigate }) {
  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Services with dropdown */}
          <div className="relative group flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
            <span>Services</span>
            <ChevronDown className="h-3 w-3" />
            {/* Services Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                Product Development
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                IT Consulting
              </a>
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
      </header>

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Content Area */}
        <div className="flex-1 px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-16">
              <h1 className="text-5xl text-gray-800 mb-6">Our <span className="text-red-500">Objective</span></h1>
            </div>

            {/* Blue Quote Section */}
            <div className="border-l-4 border-blue-500 pl-8 mb-12">
              <h2 className="text-3xl text-blue-600 mb-4">
                At GenexCorp, "Transforming challenges into opportunities" is more than our mission—it's the foundation of every client partnership we build
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  While others focus on the power of <strong>DATA</strong> and the capabilities of <strong>TECHNOLOGY</strong>, 
                  we center our approach on something more fundamental.
                </p>
                
                <p>
                  We believe in the power of <strong>PEOPLE</strong>—the transformative impact of human insight, creativity, 
                  and expertise that turns raw technology into meaningful business solutions.
                </p>

                <p>
                  Our foundation is built on the conviction that diverse perspectives and human-centered innovation create 
                  exceptional technology organizations. We prioritize <strong>PEOPLE FIRST</strong>, driving our vision to develop 
                  technology experts who excel not just in what they deliver, but in their shared passion for organizational success. 
                  In today's information-rich landscape, endless possibilities await those ready to harness them. Realizing these 
                  opportunities requires more than algorithms or infrastructure—it demands talented professionals who can transform 
                  information into strategic advantages. We create solutions that streamline operations, enhance decision-making, 
                  and optimize processes while delivering measurable ROI and competitive differentiation.
                </p>

                <p>
                  Our commitment centers on collaborative partnerships, working closely with you to develop the advanced analytics 
                  and intelligent systems your business deserves. Our consultants immerse themselves in understanding your unique 
                  challenges, analyze your market dynamics, and craft strategies that drive sustainable success. Our unified approach 
                  focuses entirely on your achievements—we measure our success by the tangible improvements our analytics 
                  and solutions bring to your business operations and growth.
                </p>

                <p>
                  Our experienced consultants have a proven track record in the technology sector, accelerating growth for 
                  multinational corporations, solving complex business challenges, and delivering innovative solutions that 
                  provide significant competitive advantages. Our team's specialized expertise spans multiple cutting-edge domains:
                </p>

                {/* Core Specialization Areas */}
                <div className="mt-8">
                  <h4 className="text-xl text-gray-800 mb-4">Core Specialization Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                      <ShoppingCart className="h-8 w-8 text-orange-500 mb-3 group-hover:text-red-500 transition-colors" />
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">E-commerce Solutions</h5>
                      <p className="text-sm text-gray-600">Complete digital commerce platforms and optimization for seamless online experiences.</p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                      <Smartphone className="h-8 w-8 text-blue-500 mb-3 group-hover:text-red-500 transition-colors" />
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">Mobile & Smart Technology</h5>
                      <p className="text-sm text-gray-600">Next-generation mobile applications and IoT solutions for connected businesses.</p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                      <Cloud className="h-8 w-8 text-green-500 mb-3 group-hover:text-red-500 transition-colors" />
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Cloud Infrastructure</h5>
                      <p className="text-sm text-gray-600">Scalable cloud architecture and migration services for robust operations.</p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                      <Database className="h-8 w-8 text-purple-500 mb-3 group-hover:text-red-500 transition-colors" />
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">Business Intelligence & Analytics</h5>
                      <p className="text-sm text-gray-600">Data-driven insights and predictive modeling for strategic decision-making.</p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                      <Cog className="h-8 w-8 text-red-500 mb-3 group-hover:text-red-600 transition-colors" />
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Integration (EAI/ERP)</h5>
                      <p className="text-sm text-gray-600">Seamless system integration and process automation for efficiency.</p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                      <Zap className="h-8 w-8 text-yellow-500 mb-3 group-hover:text-red-500 transition-colors" />
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">Digital Transformation</h5>
                      <p className="text-sm text-gray-600">Embracing digital innovation to drive business growth and agility.</p>
                    </div>
                  </div>
                </div>

                {/* Our Promise */}
                <div className="mt-8 bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg text-center">
                  <ShieldCheck className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="text-xl text-blue-800 mb-3">Our Promise</h4>
                  <p className="text-blue-700">
                    We don't just deliver technology solutions—we forge lasting partnerships that evolve with your business. 
                    Every project is an opportunity to demonstrate how strategic technology implementation can transform your 
                    operations, enhance your market position, and drive sustainable growth.
                  </p>
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right Side - Service Showcase */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  {/* Technology Expertise */}
                  <div className="bg-white border border-gray-200 p-6 rounded-xl mb-6">
                    <h4 className="text-lg text-gray-800 mb-4">Technology Expertise</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">React</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Node.js</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">AWS</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Python</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">MongoDB</span>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">Docker</span>
                    </div>
                    <div className="flex items-center justify-center text-center">
                      <Code className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border hover:border-red-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl text-red-500 mb-1">500+</div>
                          <div className="text-sm text-gray-600">Projects Delivered</div>
                        </div>
                        <CheckCircle className="h-8 w-8 text-red-500" />
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border hover:border-blue-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl text-blue-500 mb-1">98%</div>
                          <div className="text-sm text-gray-600">Client Satisfaction</div>
                        </div>
                        <Star className="h-8 w-8 text-blue-500" />
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border hover:border-green-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl text-green-500 mb-1">15+</div>
                          <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                        <Zap className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Client Success Highlight */}
                  <div className="mt-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-xl">
                    <div className="text-center">
                      <Award className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                      <h4 className="text-lg mb-2">Client Success</h4>
                      <p className="text-sm text-gray-300">
                        Trusted by leading enterprises worldwide for innovative solutions and exceptional results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-blue-50 p-12 rounded-lg">
              <h3 className="text-3xl text-gray-800 mb-6">Ready to Unlock Your Business Potential?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Partner with GenexCorp to transform your technological challenges into competitive advantages 
                and accelerate your journey toward digital excellence.
              </p>
              <div className="flex justify-center space-x-6">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4">
                  Start Your Transformation
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4">
                  Schedule a Strategic Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Sidebar */}
        <div
          className="flex flex-col items-center space-y-6 bg-red-500 p-6 rounded-lg shadow-lg z-50"
          style={{
            position: "fixed",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
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
          {/* Logo & About - About GenexCorp */}
          <div>
            <h2 className="text-lg text-gray-900 mb-3">About GenexCorp</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Some believe in the power of numbers. Some believe in the power of technology. We believe 
              in the power of people, power of human touch which brings best out of the best and the impact 
              people can have on technology.
            </p>
          </div>

          {/* Quick Links - GenexCorp Quick Links */}
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
                <a href="#" className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block">
                  Portfolio
                </a>
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
    </div>
  );
}