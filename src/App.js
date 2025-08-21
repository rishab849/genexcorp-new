import { useState, useEffect } from 'react';
import OurObjective from './OurObjective';
import Portfolio from './Portfolio';
import ProductDevelopment from './ProductDevelopment';
import ITConsulting from './ITConsulting';
import ITResourcing from './ITResourcing';
import TrainingPage from './TrainingPage';
import CorporateTraining from './CorporateTraining';
import RealTimeInternships from './RealTimeInternships';
import Jobs from './Jobs';
import Support from './Support';
import Header from './Header';
import Footer from './Footer';
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Mail,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [isSocialSidebarOpen, setIsSocialSidebarOpen] = useState(false); // For mobile sidebar toggle

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=1200&h=600&crop=center",
      title: "How we Conduct Training?",
      subtitle:
        "Onsite at a stretch of 5 Days for Designer and Developer Technical, Fundamental and Business Oriented case study based on training schedule.",
      redirect: 'corporatetraining',
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=1200&h=600&crop=center",
      title: "Strategic IT Consulting Solutions",
      subtitle:
        "Everyone that is a part of Genexcoro is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do.",
      redirect: 'itconsulting',
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      title: "Build your Career in Analytics ",
      subtitle:
        "People who are having hands on experience in any technology .NET, JAVA, any Database, SQL can take this course. Online composite 50 hours classroom training, including Practical Business cases.",
      redirect: 'training',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideNavigation = (page) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.documentElement.scrollHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log('Current page updated to:', currentPage);
  }, [currentPage]);

  const maxScroll = documentHeight - windowHeight;
  const translateY = Math.min(scrollPosition * 0.5, maxScroll);

  let content;
  switch (currentPage) {
    case 'objective':
      content = <OurObjective />;
      break;
    case 'portfolio':
      content = <Portfolio />;
      break;
    case 'productdevelopment':
      content = <ProductDevelopment />;
      break;
    case 'itconsulting':
      content = <ITConsulting />;
      break;
    case 'itresourcing':
      content = <ITResourcing />;
      break;
    case 'training':
      content = <TrainingPage handleLogoClick={handleLogoClick} />;
      break;
    case 'realtimeinternships':
      content = <RealTimeInternships handleLogoClick={handleLogoClick} />;
      break;
    case 'corporatetraining':
      content = <CorporateTraining handleLogoClick={handleLogoClick} />;
      break;
    case 'jobs':
      content = <Jobs />;
      break;
    case 'support':
      content = <Support />;
      break;
    default:
      content = (
        <main className="flex flex-1 relative">
          <div className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl w-full text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-gray-800 mb-4 sm:mb-6">
                Innovative <span className="text-red-500">Corporate Solutions</span>
                <br />
                & <span className="text-red-500">Strategic Growth</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 sm:mb-8 max-w-4xl mx-auto">
                Everyone that is part of Genexcorp is passionate about how IT can
                help transform your business...
              </p>
              <div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-8 sm:mb-12 md:mb-16">
                <Button 
                  className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base"
                  onClick={() => handleSlideNavigation('productdevelopment')}
                >
                  Get Started
                </Button>
              </div>

              {/* Updated Slider */}
              <div className="relative w-full max-w-full mx-auto mb-8 sm:mb-12 md:mb-16">
                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-2000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    >
                      <ImageWithFallback
                        src={slide.image}
                        alt={`Corporate slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
                      
                      {/* Content Container */}
                      <div className="absolute inset-0 flex flex-col sm:flex-row items-center px-4 sm:px-8 md:px-16 py-4 sm:py-6">
                        {/* Title */}
                        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-left leading-tight">
                            {slide.title}
                          </h2>
                        </div>
                        {/* Subtitle and Button */}
                        <div className="w-full sm:w-2/3 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 sm:pl-8">
                          <div className="flex-1 max-w-md">
                            <p className="text-sm sm:text-base md:text-xl text-gray-300 text-center sm:text-left leading-relaxed">
                              {slide.subtitle}
                            </p>
                          </div>
                          <div>
                            {index === 0 && (
                              <Button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base"
                                onClick={() => handleSlideNavigation('corporatetraining')}
                              >
                                Read more
                              </Button>
                            )}
                            {index === 1 && (
                              <Button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base"
                                onClick={() => handleSlideNavigation('itconsulting')}
                              >
                                Read more
                              </Button>
                            )}
                            {index === 2 && (
                              <Button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base"
                                onClick={() => handleSlideNavigation('training')}
                              >
                                Read more
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full"
                  >
                    <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full"
                  >
                    <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${index === currentSlide ? "bg-red-500" : "bg-white/50"}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Four Points with Hyperlinks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-left">
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">
                    <a href="#" onClick={() => handleSlideNavigation('itresourcing')} className="text-red-500 hover:text-red-600">
                      Services
                    </a>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Since we understand your delivery, your participants will be ready to take any challenge in Analytics within few days after training, with the curriculum we created, for experienced BI guys and relatively new one to understand.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-left">
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">
                    <a href="#" onClick={() => handleSlideNavigation('training')} className="text-red-500 hover:text-red-600">
                      Trainings / Internships
                    </a>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Nobody would believe what is called need based training approach unless experienced. If you are really looking to take your career into BI and Analytics, this is the right place for you to get adopted with the foundational understanding.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-left">
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">
                    <a href="#" onClick={() => handleSlideNavigation('itconsulting')} className="text-red-500 hover:text-red-600">
                      Consulting
                    </a>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Leadership with Passion for Analytics –We change the way Organizations looks at their Business. With the ever growing need of Comprehensive Business Intelligence, organizations need to have talent which is cost effective. We are the one of those rare, who can solve analytic issues.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-left">
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">
                    <a href="#" onClick={() => handleSlideNavigation('productdevelopment')} className="text-red-500 hover:text-red-600">
                      Product Development
                    </a>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Do you feel the HEAT from continuous change in Business Blueprint & Reporting? In the current dynamic digital environment, where opinions / needs keep changing, are you doing enough with right approach, for your Business to take inform decision? Are you aware that these days BI approach is "AGILE". Walk-in to see how we can help.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center mb-8 sm:mb-12 md:mb-16">
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Highlights</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Discover our key achievements and offerings that set us apart in the industry.
                </p>
              </div>

              {/* 10 Points Divided in Two Halves */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
                <div className="bg-white border-l-4 border-red-500 pl-4 sm:pl-6 text-left">
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800"></h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                    <li>• Provides self-service business intelligence for informed, innovative decisions</li>
                    <li>• Allows user to explore and create new associations in business data</li>
                    <li>• Combines data from multiple sources into a single, usable, mouldable piece</li>
                    <li>• Offers complete analysis through ERP, CRM, data warehouses and more</li>
                    <li>• Promotes collaboration with colleagues for improved decision-making</li>
                  </ul>
                </div>
                <div className="bg-white border-l-4 border-red-500 pl-4 sm:pl-6 text-left">
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800"></h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                    <li>• Compresses data to save infrastructure resource</li>
                    <li>• No use of Data base, it's a complete ETL tool with power of creating central repository in its proprietary database</li>
                    <li>• Role based security, AD based security enhance the distributed use</li>
                    <li>• Email Distribution and PDF publishing can be handled by QV Publisher, PDF Distributor and N-Printing solution</li>
                    <li>• Embedded Map object enhance the capability of viewing</li>
                  </ul>
                </div>
              </div>

              {/* Gartner Articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
                <div className="bg-white p-4 sm:p-6 rounded-lg text-left">
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Be a pioneer by 2017</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Over the past several years, the BI platform market has grown largely through companies investing in IT-led consolidation projects to standardize IT-centric BI platforms for large-scale systems of record. These have tended to be highly governed and centralized, where IT production reports were pushed out to managers and knowledge workers. Gartner predicts that going forward, companies will shift their future investment away from IT-developed reporting solutions toward business-user-led analysis solutions. IT will focus most of its effort on data modeling and governance. As a result, data discovery will displace IT-authored static reporting as the dominant BI and analytics user interaction paradigm for new implementations by 2015.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">-Ref Gartner article dated November 16, 2013</p>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md text-sm sm:text-base"
                    onClick={() => window.open('https://www.gartner.com/en/newsroom', '_blank')}
                  >
                    Read More
                  </Button>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-lg text-left">
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Data discovery is the new normal, but where do we go from here?</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Smart data discovery has the potential to expand access to sophisticated interactive analysis and insights to business consumers and nontraditional BI users — the approximately 70 percent of users in organizations that currently do not use BI tools or have statistical backgrounds," said Ms. Sallam. "New approaches have the potential to transform how and which users can derive insights from data discovery tools. The potential business benefit will lead to a shift resulting in smart data discovery becoming standard features of most data discovery platforms.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">-Ref Gartner article dated January 27, 2015</p>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md text-sm sm:text-base"
                    onClick={() => window.open('https://www.gartner.com/en/newsroom', '_blank')}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
      break;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Header onNavigate={setCurrentPage} handleLogoClick={handleLogoClick} currentPage={currentPage} />
      <div className="flex flex-1">
        {content}
      </div>
      
      {/* Social Sidebar - Toggleable on mobile */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="lg:flex flex-col items-center space-y-6 bg-red-500 p-4 sm:p-6 rounded-lg shadow-lg hidden lg:block">
          <a href="#" className="text-white hover:text-gray-200">
            <Facebook className="h-5 sm:h-6 w-5 sm:w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <Twitter className="h-5 sm:h-6 w-5 sm:w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <Mail className="h-5 sm:h-6 w-5 sm:w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <Linkedin className="h-5 sm:h-6 w-5 sm:w-6" />
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
            <a href="#" className="text-white hover:text-gray-200">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        )}
      </div>
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}