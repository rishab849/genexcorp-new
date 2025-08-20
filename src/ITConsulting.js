import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Users,
  GitBranch,
  Zap,
  Layers,
  Bot,
  Cloud,
  Database,
  TrendingUp,
  Code,
  Cog,
  ShoppingCart,
  Factory,
  Heart,
  Shield,
  Landmark,
  Truck,
  Target,
  Rocket,
  Settings,
} from "lucide-react";

export default function ITConsulting() {
  const [metrics, setMetrics] = useState({
    activeConsultants: '...',
    technologyPartners: '...',
    industryDomains: '...',
    consultingProjects: '...',
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log('Fetching IT consulting metrics...');
        
        const [consultants, partners, domains, projects] = await Promise.all([
          fetch('https://csrng.net/csrng/csrng.php?min=40&max=60')
            .then(res => {
              console.log('Consultants response status:', res.status);
              return res.json();
            })
            .then(data => {
              console.log('Consultants data:', data);
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=5&max=10')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=6&max=12')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=100&max=150')
            .then(res => res.json())
            .then(data => data[0].random),
        ]);

        console.log('Fetched consulting values:', { consultants, partners, domains, projects });

        setMetrics({
          activeConsultants: consultants,
          technologyPartners: partners,
          industryDomains: domains,
          consultingProjects: projects,
        });
      } catch (error) {
        console.error('Error fetching consulting metrics:', error);
        // Set fallback random values if API fails
        setMetrics({
          activeConsultants: Math.floor(Math.random() * 20) + 40,
          technologyPartners: Math.floor(Math.random() * 5) + 5,
          industryDomains: Math.floor(Math.random() * 6) + 6,
          consultingProjects: Math.floor(Math.random() * 50) + 100,
        });
      }
    };

    fetchMetrics();
  }, []);

  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-12">
            <h1 className="text-5xl text-gray-800 mb-6">
                  IT <span className="text-red-500">Consulting</span>
                </h1>
            <h2 className="text-3xl text-blue-600 mb-4">
              Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8 text-gray-700 leading-relaxed">
              {/* IT Consulting Overview */}
              <div>
                
                <p>
                  At GenexCorp, our IT consulting services empower businesses to achieve their goals through strategic technology solutions. We combine deep industry expertise with cutting-edge tools to deliver tailored consulting services that drive efficiency, innovation, and growth.
                </p>
                <p>
                  Our team of technical, functional, and business analyst specialists works closely with you to understand your objectives, design robust solutions, and implement transformative strategies. From DevOps to AI-driven chatbots, we provide end-to-end consulting to navigate the complexities of today's digital landscape.
                </p>
              </div>

              {/* IT Consulting Services */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <GitBranch className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-800 mb-4">IT Consulting Services</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We provide comprehensive IT consulting across multiple domains, ensuring your business leverages the latest technologies for optimal performance and scalability.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Zap className="h-6 w-6 text-blue-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Spark Development</h5>
                    <p className="text-xs text-gray-600">Big data analytics with Apache Spark</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Layers className="h-6 w-6 text-blue-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">FullStack Development</h5>
                    <p className="text-xs text-gray-600">End-to-end application solutions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Bot className="h-6 w-6 text-blue-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">ChatBot Development</h5>
                    <p className="text-xs text-gray-600">AI-driven automation solutions</p>
                  </div>
                </div>
              </div>

              {/* Technology Consulting Arena */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-800 mb-4">Technology Consulting Arena</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our expertise in leading BI and analytics platforms ensures data-driven decision-making and operational efficiency for your business.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <TrendingUp className="h-6 w-6 text-purple-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Tableau</h5>
                    <p className="text-xs text-gray-600">Data visualization and analytics</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Code className="h-6 w-6 text-purple-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Hive</h5>
                    <p className="text-xs text-gray-600">Big data warehousing</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Cog className="h-6 w-6 text-purple-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Informatica</h5>
                    <p className="text-xs text-gray-600">Data integration solutions</p>
                  </div>
                </div>
              </div>

              {/* Functional Consulting Arena */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-800 mb-4">Functional Consulting Arena</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We provide specialized consulting across key industries, delivering tailored solutions to address unique business challenges.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Factory className="h-6 w-6 text-green-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Manufacturing</h5>
                    <p className="text-xs text-gray-600">Industrial operations optimization</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Heart className="h-6 w-6 text-green-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Life Science</h5>
                    <p className="text-xs text-gray-600">Healthcare and research solutions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Landmark className="h-6 w-6 text-green-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Banking</h5>
                    <p className="text-xs text-gray-600">Financial services consulting</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Truck className="h-6 w-6 text-green-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Logistics</h5>
                    <p className="text-xs text-gray-600">Supply chain management</p>
                  </div>
                </div>
              </div>

              {/* Consulting Methodology */}
              <div className="mt-12 bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-lg border border-gray-200">
                <h4 className="text-xl text-gray-800 mb-4">Our Consulting Methodology</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-red-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Discovery</h5>
                    <p className="text-xs text-gray-600">Understand business objectives</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Analysis</h5>
                    <p className="text-xs text-gray-600">Assess systems and processes</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Settings className="h-6 w-6 text-green-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Solution Design</h5>
                    <p className="text-xs text-gray-600">Craft tailored strategies</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Rocket className="h-6 w-6 text-purple-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Implementation</h5>
                    <p className="text-xs text-gray-600">Execute and optimize solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Consulting Stats */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Consulting Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Consultants</span>
                      <span className="text-2xl text-blue-500">{metrics.activeConsultants}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Technology Partners</span>
                      <span className="text-2xl text-green-500">{metrics.technologyPartners}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Industry Domains</span>
                      <span className="text-2xl text-purple-500">{metrics.industryDomains}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Consulting Projects</span>
                      <span className="text-2xl text-red-500">{metrics.consultingProjects}</span>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Service Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">DevOps</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Big Data</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">FullStack</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Web Dev</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs">ServiceNow</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">ChatBots</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">AWS</span>
                  </div>
                </div>

                {/* Expertise Levels */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Expertise Levels</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Senior Consultants</span>
                      <span className="text-sm text-blue-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Mid-Level Consultants</span>
                      <span className="text-sm text-green-600">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Junior Consultants</span>
                      <span className="text-sm text-orange-600">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '5%' }}></div>
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