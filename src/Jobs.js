import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
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
  GitBranch,
  Rocket,
  Briefcase,
  Calendar,
  Mail,
} from "lucide-react";

export default function Jobs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });
  const [metrics, setMetrics] = useState({
    jobs: {
      totalPositions: '...',
      developmentRoles: '...',
      cloudDevOpsRoles: '...',
      experienceLevel: '...',
    }
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log('Fetching metrics...');
        
        const [positions, devRoles, cloudRoles, experience] = await Promise.all([
          fetch('https://csrng.net/csrng/csrng.php?min=3&max=10')
            .then(res => {
              console.log('Total Positions response status:', res.status);
              return res.json();
            })
            .then(data => {
              console.log('Total Positions data:', data);
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=1&max=5')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=1&max=5')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=2&max=3')
            .then(res => res.json())
            .then(data => data[0].random + ' Years'),
        ]);

        console.log('Fetched values:', { positions, devRoles, cloudRoles, experience });

        setMetrics({
          jobs: {
            totalPositions: positions,
            developmentRoles: devRoles,
            cloudDevOpsRoles: cloudRoles,
            experienceLevel: experience,
          }
        });
      } catch (error) {
        console.error('Error fetching metrics:', error);
        // Set fallback random values if API fails
        setMetrics({
          jobs: {
            totalPositions: Math.floor(Math.random() * 8) + 3,
            developmentRoles: Math.floor(Math.random() * 4) + 1,
            cloudDevOpsRoles: Math.floor(Math.random() * 4) + 1,
            experienceLevel: Math.floor(Math.random() * 2) + 2 + ' Years',
          }
        });
      }
    };

    fetchMetrics();
  }, []);

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock receiver: Log the application data to console
    console.log("Application Submitted:", {
      jobTitle: selectedJob,
      ...formData,
      resume: formData.resume ? formData.resume.name : "No file uploaded",
    });
    // Reset form and close modal
    setFormData({ name: "", email: "", resume: null, coverLetter: "" });
    setIsModalOpen(false);
    setSelectedJob(null);
    alert("Application submitted successfully! (Check console for details)");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({ name: "", email: "", resume: null, coverLetter: "" });
  };

  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-12">
            <h1 className="text-5xl text-gray-800 mb-6">
              <span className="text-red-500">Jobs</span>
            </h1>
            <h2 className="text-3xl text-blue-600 mb-4">
              Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8 text-gray-700 leading-relaxed">
              {/* Current Job Openings */}
              <div className="space-y-6">
                <h3 className="text-2xl text-gray-800 mb-8">Current Job Openings</h3>
                
                {/* Job 1: Full Stack Developer */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl text-gray-800">1. Full Stack Developer</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Start Date: Immediate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => handleApplyClick("Full Stack Developer")}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Looking for a 2-3 year experience Full Stack Developer, experienced with developing Payments, Messaging, Notification and good performance feature apps.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Full Stack</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Payments</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Messaging</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Notifications</span>
                  </div>
                </div>

                {/* Job 2: AWS Cloud Engineer */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <Cloud className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl text-gray-800">2. AWS Cloud Engineer</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Start Date: Immediate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => handleApplyClick("AWS Cloud Engineer")}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Looking for a 2-3 year experience Cloud Engineer experienced with AWS Cloud Operations.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">AWS</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Cloud Operations</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Infrastructure</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">DevOps</span>
                  </div>
                </div>

                {/* Job 3: DevOps Engineer */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500 p-2 rounded-lg">
                        <GitBranch className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl text-gray-800">3. DevOps Engineer</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Start Date: Immediate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => handleApplyClick("DevOps Engineer")}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Looking for a 2-3 year experience DevOps Engineer.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">DevOps</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">CI/CD</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Automation</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Monitoring</span>
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

              {/* Why Work With Us */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                <h4 className="text-xl text-gray-800 mb-3">Why Work With GenexCorp?</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Join a passionate team dedicated to transforming businesses through innovative IT solutions. We offer competitive compensation, 
                  excellent benefits, opportunities for professional growth, and the chance to work on cutting-edge technologies with industry-leading clients.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Career Growth</h5>
                    <p className="text-xs text-gray-600">Continuous learning and advancement opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Great Team</h5>
                    <p className="text-xs text-gray-600">Collaborative and supportive work environment</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Rocket className="h-6 w-6 text-purple-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Innovation Focus</h5>
                    <p className="text-xs text-gray-600">Work with latest technologies and methodologies</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-blue-50 p-12 rounded-lg">
                <h3 className="text-3xl text-gray-800 mb-6">Ready to Join Our Team?</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Start your career with GenexCorp and work on innovative IT projects with top-tier professionals.
                </p>
                <div className="flex justify-center space-x-6">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4">
                    Contact HR
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Job Statistics */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Current Openings</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Positions</span>
                      <span className="text-2xl text-blue-500">{metrics.jobs.totalPositions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Development Roles</span>
                      <span className="text-2xl text-green-500">{metrics.jobs.developmentRoles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cloud/DevOps Roles</span>
                      <span className="text-2xl text-purple-500">{metrics.jobs.cloudDevOpsRoles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Experience Level</span>
                      <span className="text-lg text-red-500">{metrics.jobs.experienceLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Skills in Demand */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Skills in Demand</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Full Stack Development</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">AWS Cloud</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">DevOps</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Payments Systems</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs">Messaging</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Notifications</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">CI/CD</span>
                  </div>
                </div>

                {/* Application Process */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Application Process</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-600">1</span>
                      </div>
                      <span className="text-sm text-gray-700">Submit Application</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-green-600">2</span>
                      </div>
                      <span className="text-sm text-gray-700">Initial Screening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-purple-600">3</span>
                      </div>
                      <span className="text-sm text-gray-700">Technical Interview</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-orange-600">4</span>
                      </div>
                      <span className="text-sm text-gray-700">Final Interview</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-red-600">5</span>
                      </div>
                      <span className="text-sm text-gray-700">Job Offer</span>
                    </div>
                  </div>
                </div>

                {/* Contact HR */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Contact HR</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">hr@genexcorp.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Human Resources</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Response within 24-48 hours</span>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg">
                  <div className="text-center">
                    <Briefcase className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-lg mb-2">Ready to Join Us?</h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Start your career journey with GenexCorp today
                    </p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                      View All Jobs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl text-gray-800 mb-6">
              Apply for {selectedJob}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your cover letter"
                  rows="4"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-500 hover:bg-gray-50"
                  onClick={handleCloseModal}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={handleSubmit}
                >
                  Submit Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}