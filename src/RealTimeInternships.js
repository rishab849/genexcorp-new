import React, { useState, useEffect } from 'react';
import { Button } from "./components/ui/button";
import { ArrowRight, ChevronDown, Users, Target, Award, ChevronLeft, ChevronRight, Briefcase, TrendingUp, Globe, Home, ChevronRight as ChevronRightSmall, Code, Database, Cloud, Smartphone, ShoppingCart, Cog, CheckCircle, Star, Zap, Building2, Truck, Factory, Heart, Shield, Landmark, Package, Layers, Server, GitBranch, Cpu, MonitorSpeaker, Rocket, MessageSquare, Bot, Settings, Network, UserPlus, Clock, Search, PieChart, Calendar, MapPin, Phone, Send, HeadphonesIcon, BookOpen, GraduationCap, Play, CheckSquare, FileText, Monitor, Globe2, Wrench } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import genexcorpLogo from './assets/genexcorp-logo.png';

export default function InternshipPage({ handleLogoClick, onNavigate }) {
  const [metrics, setMetrics] = useState({
    internship: {
      totalInternships: '...',
      technologies: '...',
      placementRate: '...',
      duration: '...',
    }
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log('Fetching metrics...');
        
        const [internships, technologies, placement, duration] = await Promise.all([
          fetch('https://csrng.net/csrng/csrng.php?min=100&max=200')
            .then(res => {
              console.log('Total Internships response status:', res.status);
              return res.json();
            })
            .then(data => {
              console.log('Total Internships data:', data);
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=20&max=30')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=85&max=95')
            .then(res => res.json())
            .then(data => data[0].random + '%'),
          fetch('https://csrng.net/csrng/csrng.php?min=3&max=6')
            .then(res => res.json())
            .then(data => data[0].random + ' months'),
        ]);

        console.log('Fetched values:', { internships, technologies, placement, duration });

        setMetrics({
          internship: {
            totalInternships: internships,
            technologies: technologies,
            placementRate: placement,
            duration: duration,
          }
        });
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setMetrics({
          internship: {
            totalInternships: Math.floor(Math.random() * 100) + 100,
            technologies: Math.floor(Math.random() * 10) + 20,
            placementRate: Math.floor(Math.random() * 10) + 85 + '%',
            duration: Math.floor(Math.random() * 4) + 3 + ' months',
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 sm:mb-6">
              Real-Time <span className="text-red-500">Internships</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3 sm:mb-4">
              Gain hands-on experience through real-time internships that connect academic learning with industry challenges. Build skills that drive innovation.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Our Internship Programs</h3>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-green-500 p-2 sm:p-3 rounded-lg">
                    <Database className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-xl text-gray-800">Splunk Internship</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  Join our real-time Splunk internship to work on live projects. We seek candidates with:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span>Proactive mindset and ability to research independently</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span>Access to an AWS Free Tier account</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span>Basic knowledge of Splunk, including SPL and admin commands</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg">
                    <GitBranch className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-xl text-gray-800">DevOps Internship</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span>Jenkins CI/CD pipelines</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span>Docker containerization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span>Kubernetes orchestration</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <GitBranch className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span>GitLab or GitHub Actions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cog className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span>Ansible automation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-purple-500 p-2 sm:p-3 rounded-lg">
                    <Code className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-xl text-gray-800">FullStack Internship</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 sm:h-5 w-4 sm:w-5 text-purple-600" />
                      <span>MERN stack development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 sm:h-5 w-4 sm:w-5 text-purple-600" />
                      <span>Python backend</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 sm:h-5 w-4 sm:w-5 text-purple-600" />
                      <span>MongoDB databases</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 sm:h-5 w-4 sm:w-5 text-purple-600" />
                      <span>Firebase/Firestore integration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-orange-500 p-2 sm:p-3 rounded-lg">
                    <Globe2 className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-xl text-gray-800">Web Development Internship</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 sm:h-5 w-4 sm:w-5 text-orange-600" />
                      <span>HTML5/CSS3</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 sm:h-5 w-4 sm:w-5 text-orange-600" />
                      <span>JavaScript (ES6+)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 sm:h-5 w-4 sm:w-5 text-orange-600" />
                      <span>ReactJS with hooks</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Network className="h-4 sm:h-5 w-4 sm:w-5 text-orange-600" />
                      <span>RESTful APIs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 sm:h-5 w-4 sm:w-5 text-orange-600" />
                      <span>Node.js/Express.js</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-teal-500 p-2 sm:p-3 rounded-lg">
                    <FileText className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-xl text-gray-800">ServiceNow Internship</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
                    <span>Incident management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Network className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
                    <span>ServiceNow APIs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
                    <span>Workflow automation</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-indigo-500 p-2 sm:p-3 rounded-lg">
                    <Bot className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-xl text-gray-800">ChatBot Internship</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600" />
                      <span>Enterprise chatbot solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600" />
                      <span>Azure Free Tier access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe2 className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600" />
                      <span>Web-based chatbot development</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600" />
                      <span>Multi-channel integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600" />
                      <span>Microsoft LUIS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5 text-indigo-600" />
                      <span>QnA Maker</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="bg-yellow-500 p-2 sm:p-3 rounded-lg">
                    <Cloud className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-xl text-gray-800">AWS Internship</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Globe2 className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>CloudFront CDN</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>S3 storage solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>EC2 instance management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>UserData scripting</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>IAM roles and policies</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>Lambda functions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Network className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>API Gateway integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-600" />
                      <span>AWS Developer Tools</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Technology Consulting Internships</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-green-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Database className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">QlikView Internship</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Work on BI and analytics projects</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Tableau Internship</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Create impactful data visualizations</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-yellow-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Code className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Hive Internship</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Big data processing and analytics</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-purple-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Cloud className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Cloudera Internship</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Enterprise data cloud solutions</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-red-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Cog className="h-6 sm:h-8 w-6 sm:w-8 text-red-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">Informatica Internship</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Data integration projects</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="bg-indigo-100 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Building2 className="h-6 sm:h-8 w-6 sm:w-8 text-indigo-600" />
                    </div>
                    <h4 className="text-base sm:text-lg text-gray-800 mb-2">SAP NetWeaver Internship</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Enterprise application development</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Functional Consulting Internships</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <ShoppingCart className="h-8 sm:h-10 w-8 sm:w-10 text-green-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">E-commerce Internship</h4>
                    <p className="text-xs text-gray-600">Develop digital commerce platforms</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <Factory className="h-8 sm:h-10 w-8 sm:w-10 text-blue-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Manufacturing Internship</h4>
                    <p className="text-xs text-gray-600">Optimize industrial operations</p>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <Building2 className="h-8 sm:h-10 w-8 sm:w-10 text-red-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Retail Internship</h4>
                    <p className="text-xs text-gray-600">Enhance customer experiences</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-purple-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Life Science Internship</h4>
                    <p className="text-xs text-gray-600">Support healthcare innovations</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-orange-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Insurance Internship</h4>
                    <p className="text-xs text-gray-600">Improve risk management systems</p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <Landmark className="h-8 sm:h-10 w-8 sm:w-10 text-teal-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Banking Internship</h4>
                    <p className="text-xs text-gray-600">Advance financial services</p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <Truck className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Logistics Internship</h4>
                    <p className="text-xs text-gray-600">Streamline supply chains</p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow text-center">
                    <Package className="h-8 sm:h-10 w-8 sm:w-10 text-gray-600 mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base text-gray-800 mb-2">Warehousing Internship</h4>
                    <p className="text-xs text-gray-600">Optimize inventory systems</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-red-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-lg text-center">
                <h4 className="text-base sm:text-lg md:text-xl text-blue-800 mb-2 sm:mb-3">Why Choose Our Internships?</h4>
                <p className="text-xs sm:text-sm text-blue-700 leading-relaxed mb-3 sm:mb-4">
                  Our real-time internships offer practical experience on live industry projects, 
                  mentorship from experts, and the chance to build a professional portfolio to kickstart your career.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <BookOpen className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Real-World Projects</h5>
                    <p className="text-xs text-gray-600">Work on live industry challenges</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Users className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Expert Mentorship</h5>
                    <p className="text-xs text-gray-600">Guidance from industry leaders</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <GraduationCap className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Career Boost</h5>
                    <p className="text-xs text-gray-600">Build a professional portfolio</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-8 space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Internship Programs</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Total Internships</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-blue-500">{metrics.internship.totalInternships}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Technologies Covered</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-green-500">{metrics.internship.technologies}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Placement Rate</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-purple-500">{metrics.internship.placementRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Duration</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-red-500">{metrics.internship.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Popular Internship Technologies</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs">AWS</span>
                    <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs">Docker</span>
                    <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs">React</span>
                    <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full text-xs">Jenkins</span>
                    <span className="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs">Kubernetes</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-1 rounded-full text-xs">Splunk</span>
                    <span className="bg-indigo-100 text-indigo-700 px-2 sm:px-3 py-1 rounded-full text-xs">ChatBot</span>
                    <span className="bg-pink-100 text-pink-700 px-2 sm:px-3 py-1 rounded-full text-xs">ServiceNow</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Internship Requirements</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Enthusiastic and self-motivated</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Ability to learn independently</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Familiarity with online resources</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Access to cloud platforms</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Basic coding skills</span>
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