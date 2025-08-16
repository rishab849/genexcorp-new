import { Button } from "./components/ui/button";
import {
  Facebook,
  Twitter,
  Mail,
  ChevronDown,
  Linkedin,
  Database,
  TrendingUp,
  Code,
  Cloud,
  Cog,
  Building2,
  ShoppingCart,
  Factory,
  Heart,
  Shield,
  Landmark,
  Truck,
  Package,
  Briefcase,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function Portfolio({ onNavigate }) {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full bg-slate-50 border-b border-gray-200 px-8 py-6 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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

        <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-500">
          <div className="relative group flex items-center space-x-1 text-red-500 cursor-pointer">
            <span>Home</span>
            <ChevronDown className="h-3 w-3" />
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

          <div className="relative group flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
            <span>Services</span>
            <ChevronDown className="h-3 w-3" />
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <button
                onClick={() => {/* Handle navigation */}}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                Product Development
              </button>
              <button
                onClick={() => {/* Handle navigation */}}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                IT Consulting
              </button>
              <button
                onClick={() => {/* Handle navigation */}}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                IT Resourcing
              </button>
            </div>
          </div>

          <div className="relative group flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
            <span>Training</span>
            <ChevronDown className="h-3 w-3" />
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <button
                onClick={() => {/* Handle navigation */}}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                Training / Internships
              </button>
              <button
                onClick={() => {/* Handle navigation */}}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-100"
              >
                Real Time Internships
              </button>
              <button
                onClick={() => {/* Handle navigation */}}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                Corporate Training
              </button>
            </div>
          </div>

          <button className="hover:text-red-500 transition-colors">Jobs</button>
          <button className="hover:text-red-500 transition-colors">Support</button>
        </nav>
        </div>
      </header>

      <main className="flex flex-1">
        <div className="flex-1 px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="border-l-4 border-blue-500 pl-8 mb-12">
              <h2 className="text-3xl text-blue-600 mb-4">
                For GenexCorp, "Welcome to possibilities of non-possibilities" is more than a slogan - it reflects our approach to every engagement
              </h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our team includes a range of technical, functional and business analyst specialists such as business blueprint (BPM) creators, 
                  Business Analyst (KPI designers), developers for specific tools, user interface designers and support engineers. We also have 
                  a very experienced team of IT consultants from different industry verticals one step away from your call to understand, 
                  explain, create fast prototypes and set up your team and make it a pleasant space where business jigsaws are come into solvency.
                </p>
                
                <p>
                  We want to develop trusting and valued relationships with you. Our methods aren't focused on us, they are focused on you. 
                  We adopt a consultative, clear thinking approach, taking the time to help understand your business objectives before we 
                  define the best solutions for you.
                </p>

                <p>
                  We can work collaboratively with your internal IT / Functional Business Drivers, any of your external suppliers and even 
                  with any other IT providers you work with. Our consultants have a proven track record of creating strong strategic partnerships 
                  with their clients to help them make the most of their IT.
                </p>

                <div className="mt-12">
                  <h3 className="text-2xl text-gray-800 mb-8">Technology Consulting Arena</h3>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="text-lg text-gray-800 mb-2">QlikView</h4>
                      <p className="text-sm text-gray-600">Business Intelligence & Analytics Platform</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="text-lg text-gray-800 mb-2">Tableau</h4>
                      <p className="text-sm text-gray-600">Data Visualization & Analytics</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-center">
                      <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code className="h-8 w-8 text-yellow-600" />
                      </div>
                      <h4 className="text-lg text-gray-800 mb-2">Hive</h4>
                      <p className="text-sm text-gray-600">Big Data Warehouse Software</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cloud className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="text-lg text-gray-800 mb-2">Cloudera</h4>
                      <p className="text-sm text-gray-600">Enterprise Data Cloud Platform</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-center">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cog className="h-8 w-8 text-red-600" />
                      </div>
                      <h4 className="text-lg text-gray-800 mb-2">Informatica</h4>
                      <p className="text-sm text-gray-600">Data Integration & Management</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="text-lg text-gray-800 mb-2">SAP NetWeaver</h4>
                      <p className="text-sm text-gray-600">Enterprise Application Platform</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl text-gray-800 mb-8">Functional Consulting Arena</h3>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <ShoppingCart className="h-10 w-10 text-green-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">E-commerce</h4>
                      <p className="text-xs text-gray-600">Digital Commerce Solutions</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <Factory className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">Manufacturing</h4>
                      <p className="text-xs text-gray-600">Industrial Operations</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <Building2 className="h-10 w-10 text-red-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">Retail</h4>
                      <p className="text-xs text-gray-600">Customer Experience</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <Heart className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">Life Science</h4>
                      <p className="text-xs text-gray-600">Healthcare & Research</p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <Shield className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">Insurance</h4>
                      <p className="text-xs text-gray-600">Risk Management</p>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <Landmark className="h-10 w-10 text-teal-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">Banking</h4>
                      <p className="text-xs text-gray-600">Financial Services</p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <Truck className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">Logistics</h4>
                      <p className="text-xs text-gray-600">Supply Chain Management</p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                      <Package className="h-10 w-10 text-gray-600 mx-auto mb-3" />
                      <h4 className="text-gray-800 mb-2">Warehousing</h4>
                      <p className="text-xs text-gray-600">Inventory Management</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                  <h4 className="text-xl text-gray-800 mb-3">Strategic Technology Partnerships</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our extensive partnerships with industry-leading technology providers enable us to deliver comprehensive solutions 
                    that leverage the best tools and platforms available. From business intelligence to big data analytics, from cloud 
                    platforms to enterprise integration, we bring together the right technologies to solve your specific business challenges.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h4 className="text-lg text-gray-800 mb-4">Portfolio Highlights</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Technology Partners</span>
                        <span className="text-2xl text-blue-500">6+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Industry Domains</span>
                        <span className="text-2xl text-green-500">8+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Solutions Delivered</span>
                        <span className="text-2xl text-red-500">200+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Active Projects</span>
                        <span className="text-2xl text-purple-500">50+</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg text-gray-800 mb-4">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">Business Intelligence</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Data Analytics</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Cloud Solutions</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Enterprise Integration</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Process Automation</span>
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs">Digital Transformation</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg">
                    <div className="text-center">
                      <Briefcase className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                      <h4 className="text-lg mb-2">Ready to Partner?</h4>
                      <p className="text-sm text-gray-300 mb-4">
                        Explore how our portfolio of solutions can transform your business
                      </p>
                      <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                        View Case Studies
                      </Button>
                    </div>
                  </div>
                </div>
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

      <footer className="bg-slate-50 text-gray-800 mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-8 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-lg text-gray-900 mb-3">About GenexCorp</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Some believe in the power of numbers. Some believe in the power of technology. We believe 
              in the power of people, power of human touch which brings best out of the best and the impact 
              people can have on technology.
            </p>
          </div>

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
                <button 
                  onClick={() => {/* Handle navigation */}} 
                  className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block"
                >
                  Corporate Training
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {/* Handle navigation */}} 
                  className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block"
                >
                  Career Augmentation Training
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {/* Handle navigation */}} 
                  className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block"
                >
                  Jobs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {/* Handle navigation */}} 
                  className="text-gray-600 hover:text-red-500 transition-all duration-200 inline-block"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

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
              <button 
                onClick={() => window.open('https://facebook.com', '_blank')} 
                className="text-gray-600 hover:text-red-500 hover:scale-110 transform transition-all duration-200 p-2 hover:bg-red-50 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://twitter.com', '_blank')} 
                className="text-gray-600 hover:text-red-500 hover:scale-110 transform transition-all duration-200 p-2 hover:bg-red-50 rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com', '_blank')} 
                className="text-gray-600 hover:text-red-500 hover:scale-110 transform transition-all duration-200 p-2 hover:bg-red-50 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </button>
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