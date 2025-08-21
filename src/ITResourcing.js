import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Users,
  Search,
  UserPlus,
  Clock,
  PieChart,
  CheckCircle,
  Star,
  Zap,
  Award,
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
} from "lucide-react";

export default function ITResourcing() {
  const [metrics, setMetrics] = useState({
    activeResources: '...',
    talentPool: '...',
    clientCompanies: '...',
    avgPlacementTime: '...',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log('Fetching IT resourcing metrics...');
        
        const [activeResources, talentPool, clientCompanies, avgPlacementTime] = await Promise.all([
          fetch('https://csrng.net/csrng/csrng.php?min=200&max=300')
            .then(res => {
              if (!res.ok) throw new Error('API response not OK');
              return res.json();
            })
            .then(data => {
              if (!data[0]?.random) throw new Error('Invalid API response');
              console.log('Active Resources data:', data);
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=1000&max=1500')
            .then(res => {
              if (!res.ok) throw new Error('API response not OK');
              return res.json();
            })
            .then(data => {
              if (!data[0]?.random) throw new Error('Invalid API response');
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=50&max=100')
            .then(res => {
              if (!res.ok) throw new Error('API response not OK');
              return res.json();
            })
            .then(data => {
              if (!data[0]?.random) throw new Error('Invalid API response');
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=5&max=10')
            .then(res => {
              if (!res.ok) throw new Error('API response not OK');
              return res.json();
            })
            .then(data => {
              if (!data[0]?.random) throw new Error('Invalid API response');
              return data[0].random;
            }),
        ]);

        console.log('Fetched resourcing values:', { activeResources, talentPool, clientCompanies, avgPlacementTime });

        setMetrics({
          activeResources,
          talentPool,
          clientCompanies,
          avgPlacementTime: `${avgPlacementTime} Days`,
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching resourcing metrics:', error.message);
        setMetrics({
          activeResources: Math.floor(Math.random() * 100) + 200,
          talentPool: Math.floor(Math.random() * 500) + 1000,
          clientCompanies: Math.floor(Math.random() * 50) + 50,
          avgPlacementTime: `${Math.floor(Math.random() * 5) + 5} Days`,
        });
        setIsLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <main className="flex flex-1">
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8 mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 sm:mb-6">
              IT <span className="text-red-500">Resourcing</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3 sm:mb-4">
              Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base">
                  Our team includes a range of technical, functional and business analyst specialists such as business blueprint (BPM) creators, 
                  Business Analyst (KPI designers), developers for specific tools, user interface designers and support engineers. We also have 
                  a very experienced team of IT consultants from different industry verticals one step away from your call to understand, 
                  explain, create fast prototypes and set up your team and make it a pleasant space where business jigsaws are come into solvency.
                </p>
                <p className="text-sm sm:text-base">
                  We want to develop trusting and valued relationships with you. Our methods aren't focused on us, they are focused on you. 
                  We adopt a consultative, clear thinking approach, taking the time to help understand your business objectives before we 
                  define the best solutions for you.
                </p>
                <p className="text-sm sm:text-base">
                  We can work collaboratively with your internal IT / Functional Business Drivers, any of your external suppliers and even 
                  with any other IT providers you work with. Our consultants have a proven track record of creating strong strategic partnerships 
                  with their clients to help them make the most of their IT.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Our IT Resourcing Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <Search className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                      <h4 className="text-base sm:text-lg text-gray-800">Talent Acquisition</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">Expert recruitment services to find the right technical talent for your specific requirements and project needs.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <UserPlus className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                      <h4 className="text-base sm:text-lg text-gray-800">Team Augmentation</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">Seamlessly integrate skilled professionals into your existing teams to scale capacity and accelerate project delivery.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 sm:p-6 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />
                      <h4 className="text-base sm:text-lg text-gray-800">Contract Staffing</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">Flexible contract-based staffing solutions for short-term projects and specialized skill requirements.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-6 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <PieChart className="h-6 sm:h-8 w-6 sm:w-8 text-orange-600" />
                      <h4 className="text-base sm:text-lg text-gray-800">Resource Optimization</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">Strategic resource planning and allocation to maximize efficiency and minimize costs across your projects.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Technology Consulting Arena</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-green-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Database className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">QlikView</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Business Intelligence & Analytics Platform</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Tableau</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Data Visualization & Analytics</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-yellow-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Code className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Hive</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Big Data Warehouse Software</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-purple-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Cloud className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Cloudera</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Enterprise Data Cloud Platform</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-red-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Cog className="h-6 sm:h-8 w-6 sm:w-8 text-red-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Informatica</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Data Integration & Management</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-indigo-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Building2 className="h-6 sm:h-8 w-6 sm:w-8 text-indigo-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">SAP NetWeaver</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Enterprise Application Platform</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Functional Consulting Arena</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <ShoppingCart className="h-8 sm:h-10 w-8 sm:w-10 text-green-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">E-commerce</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Digital Commerce Solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Factory className="h-8 sm:h-10 w-8 sm:w-10 text-blue-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Manufacturing</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Industrial Operations</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Building2 className="h-8 sm:h-10 w-8 sm:w-10 text-red-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Retail</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Customer Experience</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-purple-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Life Science</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Healthcare & Research</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-orange-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Insurance</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Risk Management</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Landmark className="h-8 sm:h-10 w-8 sm:w-10 text-teal-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Banking</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Financial Services</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Truck className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Logistics</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Supply Chain Management</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                    <Package className="h-8 sm:h-10 w-8 sm:w-10 text-gray-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Warehousing</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Inventory Management</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-lg">
                <h4 className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">Our Resourcing Advantage</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  We understand that finding the right talent is crucial for project success. Our extensive network of skilled professionals, 
                  combined with our deep understanding of industry requirements, ensures that we deliver resources that not only meet your 
                  technical specifications but also align with your organizational culture and project goals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Search className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Rigorous Screening</h5>
                    <p className="text-xs sm:text-sm text-gray-600">Comprehensive technical and cultural assessments</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Clock className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Quick Deployment</h5>
                    <p className="text-xs sm:text-sm text-gray-600">Rapid resource allocation and onboarding</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Users className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Ongoing Support</h5>
                    <p className="text-xs sm:text-sm text-gray-600">Continuous engagement and performance monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-8 space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Resourcing Metrics</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Active Resources</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-blue-500">{isLoading ? 'Loading...' : metrics.activeResources}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Talent Pool</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-green-500">{isLoading ? 'Loading...' : metrics.talentPool}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Client Companies</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-purple-500">{isLoading ? 'Loading...' : metrics.clientCompanies}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Avg. Placement Time</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-red-500">{isLoading ? 'Loading...' : metrics.avgPlacementTime}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Skill Categories</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs">Full-Stack Developers</span>
                    <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs">Data Engineers</span>
                    <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs">DevOps Engineers</span>
                    <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full text-xs">Cloud Architects</span>
                    <span className="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs">Business Analysts</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-1 rounded-full text-xs">Project Managers</span>
                    <span className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs">QA Engineers</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Resource Types</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-700">Contract Resources</span>
                      <span className="text-xs sm:text-sm text-blue-600">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                      <div className="bg-blue-500 h-2 sm:h-3 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-700">Permanent Placements</span>
                      <span className="text-xs sm:text-sm text-green-600">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                      <div className="bg-green-500 h-2 sm:h-3 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-700">Project-Based</span>
                      <span className="text-xs sm:text-sm text-orange-600">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                      <div className="bg-orange-500 h-2 sm:h-3 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Success Metrics</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">95% Client Retention Rate</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Star className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">4.8/5 Average Rating</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Zap className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">24/7 Support Coverage</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Award className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Industry Certified Professionals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}