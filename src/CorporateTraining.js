import { useState } from "react";
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
  Home,
  ChevronRight as ChevronRightSmall,
  Code,
  Database,
  Cloud,
  Smartphone,
  ShoppingCart,
  Cog,
  CheckCircle,
  Star,
  Zap,
  Building2,
  Truck,
  Factory,
  Heart,
  Shield,
  Landmark,
  Package,
  Layers,
  Server,
  GitBranch,
  Cpu,
  MonitorSpeaker,
  Rocket,
  MessageSquare,
  Bot,
  Settings,
  Network,
  UserPlus,
  Clock,
  Search,
  PieChart,
  Calendar,
  MapPin,
  Phone,
  Send,
  HeadphonesIcon,
  BookOpen,
  GraduationCap,
  Play,
  CheckSquare,
  FileText,
  Monitor,
  Globe2,
  Wrench,
  Download,
  DollarSign,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function CorporateTraining({ handleLogoClick }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSocialSidebarOpen, setIsSocialSidebarOpen] = useState(false); // For mobile social sidebar toggle

  const handleBookTraining = (event) => {
    if (event) event.preventDefault();
    if (isFormOpen) {
      const formData = {
        personName: document.getElementById("personName")?.value || "",
        personEmail: document.getElementById("personEmail")?.value || "",
        phoneNo: document.getElementById("phoneNo")?.value || "",
        course: document.getElementById("course")?.value || "",
        classType: document.querySelector('input[name="classType"]:checked')?.value || "",
        message: document.getElementById("message")?.value || "",
        timestamp: new Date().toISOString(),
      };
      console.log("Booking Form Data:", formData);
      setIsFormOpen(false);
    } else {
      setIsFormOpen(true);
    }
  };

  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8 mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 sm:mb-6">
              Corporate <span className="text-red-500">Training</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3 sm:mb-4">
              At GenexCorp, course is being designed to accelerate your career and for those companies who indeed trying to create a team of own in the arena of in-Memory analytics.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed">
              {/* Course Description */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  QlikView Designer & Developer course are the mixture of demonstrations and hands on exercises of the many QlikView components. Topics covered in this course, include fundamental user interface layout and design best practices. QlikView Designer course focuses on QlikView application, objects such as sheets, list-boxes and charts, working with scripts, best practices, loading data, deploying QlikView applications, integration with Google cluster Maps, use of extension objects.
                </p>
              </div>

              {/* Prerequisites for Designer & Developer */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 sm:p-6 md:p-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">Pre requisites for Designer & Developer:</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      Organization having people on-board to change the technology platform / wanted to in-house QlikView Application, having prior experience in SQL / Database Knowledge / Data Warehousing knowledge, this program is best fit for them.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-green-500 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center">
                      <Database className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* How we conduct training */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6 md:p-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-orange-500 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">How we conduct training:</h3>
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-gray-700">Onsite at a stretch of 5 Days for Designer & Developer Technical.</p>
                      <p className="text-sm sm:text-base text-gray-700">Fundamental and Business Oriented case study based training schedule, which will cover your choice of Business Cases with hand on Experience, which leads to create most of the common day to day functions available inside your application for future reference.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prerequisites for Administrator */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 sm:p-6 md:p-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">Pre requisites for Administrator:</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Prior Experience of Windows Environment, concept of windows error handler, and experience of Database clustering will be an added advantage.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-blue-500 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center">
                      <Settings className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Services/Country */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-4 sm:p-6 md:p-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-teal-500 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center">
                      <Globe2 className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">Services/Country:</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      India, USA, UK, Malaysia, Singapore, Thailand, UAE, South Africa, Kuwait, Bahrain
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Download className="h-4 sm:h-5 w-4 sm:w-5 text-orange-500" />
                  <a 
                    href="https://www.genexcorp.com/images/GeneralCourseOutline.pdf" 
                    className="text-sm sm:text-base text-orange-500 hover:text-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download General Course outline
                  </a>
                </div>
              </div>

              {/* Technology Consulting Arena */}
              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Technology Consulting Arena</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
                  {/* QlikView */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-green-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Database className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">QlikView</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Business Intelligence & Analytics Platform</p>
                  </div>

                  {/* Tableau */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Tableau</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Data Visualization & Analytics</p>
                  </div>

                  {/* Hive */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-yellow-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Code className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Hive</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Big Data Warehouse Software</p>
                  </div>

                  {/* Cloudera */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-purple-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Cloud className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Cloudera</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Enterprise Data Cloud Platform</p>
                  </div>

                  {/* Informatica */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-red-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Cog className="h-6 sm:h-8 w-6 sm:w-8 text-red-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Informatica</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Data Integration & Management</p>
                  </div>

                  {/* SAP NetWeaver */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-indigo-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Building2 className="h-6 sm:h-8 w-6 sm:w-8 text-indigo-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">SAP NetWeaver</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Enterprise Application Platform</p>
                  </div>
                </div>
              </div>

              {/* Functional Consulting Arena */}
              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Functional Consulting Arena</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {/* E-commerce */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <ShoppingCart className="h-8 sm:h-10 w-8 sm:w-10 text-green-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">E-commerce</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Digital Commerce Solutions</p>
                  </div>

                  {/* Manufacturing */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Factory className="h-8 sm:h-10 w-8 sm:w-10 text-blue-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Manufacturing</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Industrial Operations</p>
                  </div>

                  {/* Retail */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Building2 className="h-8 sm:h-10 w-8 sm:w-10 text-red-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Retail</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Customer Experience</p>
                  </div>

                  {/* Life Science */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-purple-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Life Science</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Healthcare & Research</p>
                  </div>

                  {/* Insurance */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-orange-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Insurance</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Risk Management</p>
                  </div>

                  {/* Banking */}
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Landmark className="h-8 sm:h-10 w-8 sm:w-10 text-teal-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Banking</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Financial Services</p>
                  </div>

                  {/* Logistics */}
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Truck className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Logistics</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Supply Chain Management</p>
                  </div>

                  {/* Warehousing */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Package className="h-8 sm:h-10 w-8 sm:w-10 text-gray-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Warehousing</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Inventory Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-8 space-y-4 sm:space-y-6">
                {/* Course Fee */}
                <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Course Fee</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-cyan-500 text-white px-3 sm:px-4 py-2 rounded text-center text-xs sm:text-sm">
                      Web Class
                    </div>
                    <div className="bg-gray-600 text-white px-3 sm:px-4 py-2 rounded text-center text-xs sm:text-sm">
                      Classroom Courses
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">$800 per person</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">$1500 for batch of 5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">$2500 for batch of 10</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">*To avail discount contact sales team</p>
                    </div>
                  </div>
                </div>

                {/* Classes Starting Dates */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Classes Starting Dates</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-cyan-500 text-white px-3 sm:px-4 py-2 rounded text-center text-xs sm:text-sm">
                      Book Your Slot Now
                    </div>
                    <div className="bg-gray-600 text-white px-3 sm:px-4 py-2 rounded text-center text-xs sm:text-sm">
                      Status
                    </div>
                    
                    {/* Virtual Class */}
                    <div className="space-y-2 text-xs sm:text-sm border-b border-gray-200 pb-3">
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="text-gray-600">Virtual Class</span>
                        <span className="text-gray-800">16th Jan, 2021</span>
                        <span className="text-gray-800">24th Jan, 2021</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Open</span>
                      </div>
                    </div>

                    {/* Additional Classes */}
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex flex-wrap justify-between gap-2 items-center">
                        <span className="text-gray-600">Virtual Class</span>
                        <span className="text-gray-800">02nd Mar, 2021</span>
                        <span className="text-gray-800">10th Mar, 2021</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Open</span>
                      </div>
                      <div className="flex flex-wrap justify-between gap-2 items-center">
                        <span className="text-gray-600">Classroom Training</span>
                        <span className="text-gray-800">25th Mar, 2021</span>
                        <span className="text-gray-800">30th Mar, 2021</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Open</span>
                      </div>
                      <div className="flex flex-wrap justify-between gap-2 items-center">
                        <span className="text-gray-600">Classroom Training</span>
                        <span className="text-gray-800">01st June, 2021</span>
                        <span className="text-gray-800">05th June, 2021</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Open</span>
                      </div>
                    </div>

                    <p className="text-xs text-red-500 mt-2 sm:mt-3">**Please talk to sales team for terms and conditions</p>
                  </div>
                </div>

                {/* Book My Training Button */}
                <div className="bg-orange-500 hover:bg-orange-600 transition-colors rounded-lg">
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 sm:py-3 flex items-center justify-center space-x-2 text-sm sm:text-base"
                    onClick={handleBookTraining}
                  >
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span>BOOK MY TRAINING</span>
                  </Button>
                </div>

                {/* Training Features */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Training Features</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Hands-on Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Real Business Cases</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">5-Day Intensive Program</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Expert Instructors</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Global Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Sidebar (toggleable on mobile) */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="hidden lg:flex flex-col items-center space-y-4 sm:space-y-6 bg-red-500 p-4 sm:p-6 rounded-lg shadow-lg">
          <a href="#" className="text-white hover:text-red-100 transition-colors">
            <Facebook className="h-4 sm:h-5 w-4 sm:w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-100 transition-colors">
            <Twitter className="h-4 sm:h-5 w-4 sm:w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-100 transition-colors">
            <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-100 transition-colors">
            <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
          </a>
        </div>
        {/* Mobile toggle button */}
        <button
          className="lg:hidden fixed right-4 top-4 bg-red-500 text-white p-2 rounded-full z-50"
          onClick={() => setIsSocialSidebarOpen(!isSocialSidebarOpen)}
        >
          {isSocialSidebarOpen ? 'Close' : 'Social'}
        </button>
        {isSocialSidebarOpen && (
          <div className="lg:hidden fixed right-4 top-16 bg-red-500 p-4 rounded-lg shadow-lg flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-red-100 transition-colors">
              <Facebook className="h-4 sm:h-5 w-4 sm:w-5" />
            </a>
            <a href="#" className="text-white hover:text-red-100 transition-colors">
              <Twitter className="h-4 sm:h-5 w-4 sm:w-5" />
            </a>
            <a href="#" className="text-white hover:text-red-100 transition-colors">
              <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
            </a>
            <a href="#" className="text-white hover:text-red-100 transition-colors">
              <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
            </a>
          </div>
        )}
      </div>

      {/* Booking Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 border border-blue-200 rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md">
            <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Book My Training</h4>
            <form onSubmit={handleBookTraining} className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label className="block text-xs sm:text-sm text-gray-700 mb-1">Person Name *</label>
                  <input id="personName" type="text" className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm" required />
                </div>
                <div className="flex-1">
                  <label className="block text-xs sm:text-sm text-gray-700 mb-1">Person Email *</label>
                  <input id="personEmail" type="email" className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm" required />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label className="block text-xs sm:text-sm text-gray-700 mb-1">Phone No *</label>
                  <input id="phoneNo" type="tel" className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm" required />
                </div>
                <div className="flex-1">
                  <label className="block text-xs sm:text-sm text-gray-700 mb-1">Select Your Course *</label>
                  <select id="course" className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm">
                    <option value="">-- Select --</option>
                    <option value="Change in Technology">Corporate Training</option>
                    <option value="Fresher">Career Augmentation Training</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 mb-1">Select Your Classes *</label>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="flex items-center text-xs sm:text-sm">
                    <input type="radio" name="classType" value="Change in Technology" className="mr-2" required />
                    Change in Technology - $450 per person
                  </label>
                  <label className="flex items-center text-xs sm:text-sm">
                    <input type="radio" name="classType" value="Fresher" className="mr-2" />
                    Fresher - $500 per person
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 mb-1">Message</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded h-20 sm:h-24 text-xs sm:text-sm"></textarea>
              </div>
              <div className="flex justify-end space-x-3 sm:space-x-4">
                <Button type="button" className="bg-gray-500 hover:bg-gray-600 text-white py-1 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm" onClick={() => setIsFormOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm">
                  Book
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}