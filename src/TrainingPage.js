import { Button } from "./components/ui/button";
import { ArrowRight, ChevronDown, Users, Target, Award, ChevronLeft, ChevronRight, Briefcase, TrendingUp, Globe, Home, ChevronRight as ChevronRightSmall, Code, Database, Cloud, Smartphone, ShoppingCart, Cog, CheckCircle, Star, Zap, Building2, Truck, Factory, Heart, Shield, Landmark, Package, Layers, Server, GitBranch, Cpu, MonitorSpeaker, Rocket, MessageSquare, Bot, Settings, Network, UserPlus, Clock, Search, PieChart, Calendar, MapPin, Phone, Send, HeadphonesIcon, BookOpen, GraduationCap, Play, CheckSquare, FileText, Monitor, Globe2, Wrench } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import genexcorpLogo from './assets/genexcorp-logo.png';
import { metrics } from './metrics';

export default function TrainingPage({ handleLogoClick, onNavigate }) {
  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-12">
            <h1 className="text-5xl text-gray-800 mb-6">
                  Training <span className="text-red-500">Program</span>
                </h1>
            <h2 className="text-3xl text-blue-600 mb-4">
              Empowering minds through comprehensive training programs that bridge the gap between learning and real-world application. Every skill mastered today shapes tomorrow's innovations.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8 text-gray-700 leading-relaxed">
              {/* Training Programs Header */}
              <div>
                <h3 className="text-2xl text-gray-800 mb-8">Our Training Programs</h3>
              </div>

              {/* Splunk Development */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl text-gray-800">Splunk Development</h4>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Conducting Specialized / Real Time Splunk Workshop. Looking for candidates with following qualities:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Self Starter, Proactive, Ability to Google and YouTube</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Have an AWS Account (Free Tier)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Undergone Splunk Training, Basic Knowledge of SPL commands and Admin Commands.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DevOps Development */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <GitBranch className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl text-gray-800">DevOps Development</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4 text-blue-600" />
                      <span>Jenkins</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="h-4 w-4 text-blue-600" />
                      <span>Docker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-4 w-4 text-blue-600" />
                      <span>Kubernetes</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <GitBranch className="h-4 w-4 text-blue-600" />
                      <span>GitLab / GitActions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cog className="h-4 w-4 text-blue-600" />
                      <span>Ansible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FullStack Development */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl text-gray-800">FullStack Development</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-purple-600" />
                      <span>MERN</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-purple-600" />
                      <span>Python</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-purple-600" />
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-purple-600" />
                      <span>FireStore</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Development */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Globe2 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl text-gray-800">Web Development</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-orange-600" />
                      <span>HTML/CSS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-orange-600" />
                      <span>Javascript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-orange-600" />
                      <span>ReactJS</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Network className="h-4 w-4 text-orange-600" />
                      <span>API</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4 text-orange-600" />
                      <span>ExpressJS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ServiceNow Development */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-teal-500 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl text-gray-800">ServiceNow Development</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-teal-600" />
                    <span>Tickets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Network className="h-4 w-4 text-teal-600" />
                    <span>Rest API</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4 text-teal-600" />
                    <span>WorkFlow</span>
                  </div>
                </div>
              </div>

              {/* ChatBot Development */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-indigo-500 p-2 rounded-lg">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl text-gray-800">ChatBot Development</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-indigo-600" />
                      <span>Professional Bot</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-4 w-4 text-indigo-600" />
                      <span>Have an Azure (Free Tier)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe2 className="h-4 w-4 text-indigo-600" />
                      <span>WebApp ChatBot</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-indigo-600" />
                      <span>Channels Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-indigo-600" />
                      <span>LUIS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-indigo-600" />
                      <span>QNA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AWS Development */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-yellow-500 p-2 rounded-lg">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl text-gray-800">AWS Development</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Globe2 className="h-4 w-4 text-yellow-600" />
                      <span>CloudFront</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-yellow-600" />
                      <span>S3 Bucket</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4 text-yellow-600" />
                      <span>Ec2</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-yellow-600" />
                      <span>UserData</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-yellow-600" />
                      <span>IAM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      <span>Lambda</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Network className="h-4 w-4 text-yellow-600" />
                      <span>API Gateway</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="h-4 w-4 text-yellow-600" />
                      <span>Developer Tools of aws</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Consulting Arena */}
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

              {/* Functional Consulting Arena */}
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

              {/* Training Benefits */}
              <div className="mt-12 bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg text-center">
                <h4 className="text-xl text-blue-800 mb-3">Why Choose Our Training Programs?</h4>
                <p className="text-blue-700 leading-relaxed mb-4">
                  Our training programs are designed to provide hands-on experience with industry-leading technologies. 
                  We focus on practical learning with real-world projects, expert mentorship, and comprehensive skill development 
                  to ensure our trainees are job-ready upon completion.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Hands-on Learning</h5>
                    <p className="text-xs text-gray-600">Practical projects with real-world applications</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Expert Mentorship</h5>
                    <p className="text-xs text-gray-600">Learn from industry professionals</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <GraduationCap className="h-6 w-6 text-purple-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Job Ready Skills</h5>
                    <p className="text-xs text-gray-600">Comprehensive skill development programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Training Statistics */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Training Programs</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Programs</span>
                      <span className="text-2xl text-blue-500">{metrics.training.totalPrograms}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Technologies</span>
                      <span className="text-2xl text-green-500">{metrics.training.technologies}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Success Rate</span>
                      <span className="text-2xl text-purple-500">{metrics.training.successRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Duration</span>
                      <span className="text-lg text-red-500">{metrics.training.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Popular Technologies */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Popular Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">AWS</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Docker</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">React</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Jenkins</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs">Kubernetes</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Splunk</span>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">ChatBot</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs">ServiceNow</span>
                  </div>
                </div>

                {/* Prerequisites */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Prerequisites</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Self Starter Attitude</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Proactive Learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Google & YouTube Skills</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Cloud Account Access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Basic Programming Knowledge</span>
                    </div>
                  </div>
                </div>

                {/* Training Schedule */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Training Schedule</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Weekdays</span>
                      <span>6:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekends</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span>{metrics.training.duration}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-green-200">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-600">Flexible timing available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg">
                  <div className="text-center">
                    <GraduationCap className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-lg mb-2">Ready to Start Learning?</h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Join our comprehensive training programs today
                    </p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                      Enroll Now
                    </Button>
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