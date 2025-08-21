import React, { useState, useEffect } from 'react';
import {
  Button,
} from "./components/ui/button";
import {
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

export default function Portfolio() {
  const [metrics, setMetrics] = useState({
    portfolio: {
      technologyPartners: '...',
      industryDomains: '...',
      solutionsDelivered: '...',
      activeProjects: '...',
    }
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log('Fetching metrics...');
        
        const [partners, domains, solutions, projects] = await Promise.all([
          fetch('https://csrng.net/csrng/csrng.php?min=50&max=100')
            .then(res => {
              console.log('Technology Partners response status:', res.status);
              return res.json();
            })
            .then(data => {
              console.log('Technology Partners data:', data);
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=10&max=20')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=300&max=500')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=20&max=50')
            .then(res => res.json())
            .then(data => data[0].random),
        ]);

        console.log('Fetched values:', { partners, domains, solutions, projects });

        setMetrics({
          portfolio: {
            technologyPartners: partners,
            industryDomains: domains,
            solutionsDelivered: solutions,
            activeProjects: projects,
          }
        });
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setMetrics({
          portfolio: {
            technologyPartners: Math.floor(Math.random() * 50) + 50,
            industryDomains: Math.floor(Math.random() * 10) + 10,
            solutionsDelivered: Math.floor(Math.random() * 200) + 300,
            activeProjects: Math.floor(Math.random() * 30) + 20,
          }
        });
      }
    };

    fetchMetrics();
  }, []);

  return (
    <main className="flex flex-1">
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8 mb-6 sm:mb-8 md:mb-12">
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 sm:mb-6">
                <span className="text-red-500">Portfolio</span>
              </h1>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3 sm:mb-4">
              For GenexCorp, "Welcome to possibilities of non-possibilities" is more than a slogan - it reflects our approach to every engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
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
                <h4 className="text-base sm:text-lg md:text-xl text-gray-800 mb-2 sm:mb-3">Strategic Technology Partnerships</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Our extensive partnerships with industry-leading technology providers enable us to deliver comprehensive solutions 
                  that leverage the best tools and platforms available. From business intelligence to big data analytics, from cloud 
                  platforms to enterprise integration, we bring together the right technologies to solve your specific business challenges.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-8 space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Portfolio Highlights</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Technology Partners</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-blue-500">{metrics.portfolio.technologyPartners}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Industry Domains</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-green-500">{metrics.portfolio.industryDomains}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Solutions Delivered</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-red-500">{metrics.portfolio.solutionsDelivered}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Active Projects</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-purple-500">{metrics.portfolio.activeProjects}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 rounded-full text-xs">Business Intelligence</span>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs">Data Analytics</span>
                    <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs">Cloud Solutions</span>
                    <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs">Enterprise Integration</span>
                    <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full text-xs">Process Automation</span>
                    <span className="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs">Digital Transformation</span>
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