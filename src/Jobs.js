import React, { useState, useEffect, useRef } from "react";
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
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [metrics, setMetrics] = useState({
    jobs: {
      totalPositions: '...',
      developmentRoles: '...',
      cloudDevOpsRoles: '...',
      experienceLevel: '...',
    }
  });
  const jobOpeningsRef = useRef(null);

  const jobs = [
    {
      title: "Full Stack Developer",
      icon: Code,
      gradientFrom: "blue-50",
      gradientTo: "indigo-50",
      borderColor: "blue-200",
      iconBg: "blue-500",
      buttonBg: "blue-500",
      buttonHover: "blue-600",
      description: "Looking for a 2-3 year experience Full Stack Developer, experienced with developing Payments, Messaging, Notification and good performance feature apps.",
      tags: [
        { text: "Full Stack", bg: "blue-100", textColor: "blue-700" },
        { text: "Payments", bg: "green-100", textColor: "green-700" },
        { text: "Messaging", bg: "purple-100", textColor: "purple-700" },
        { text: "Notifications", bg: "orange-100", textColor: "orange-700" },
      ],
      details: {
        salary: "$80,000 - $120,000 per year",
        incentives: [
          "Comprehensive health insurance",
          "401(k) matching program",
          "Performance-based bonuses up to 15%",
          "Flexible remote work options",
          "Annual professional development stipend of $2,000",
          "Stock options for eligible employees",
        ],
        responsibilities: [
          "Develop and maintain full-stack web applications using modern technologies",
          "Implement secure payment processing systems and integrate with gateways",
          "Build real-time messaging and notification features",
          "Optimize application performance and ensure scalability",
          "Collaborate with cross-functional teams to deliver high-quality features",
        ],
        requirements: [
          "2-3 years of experience in full-stack development",
          "Proficiency in React, Node.js, and related frameworks",
          "Experience with payment systems (e.g., Stripe, PayPal)",
          "Strong understanding of database technologies (SQL/NoSQL)",
          "Excellent problem-solving and communication skills",
        ],
      },
    },
    {
      title: "AWS Cloud Engineer",
      icon: Cloud,
      gradientFrom: "orange-50",
      gradientTo: "amber-50",
      borderColor: "orange-200",
      iconBg: "orange-500",
      buttonBg: "orange-500",
      buttonHover: "orange-600",
      description: "Looking for a 2-3 year experience Cloud Engineer experienced with AWS Cloud Operations.",
      tags: [
        { text: "AWS", bg: "orange-100", textColor: "orange-700" },
        { text: "Cloud Operations", bg: "blue-100", textColor: "blue-700" },
        { text: "Infrastructure", bg: "green-100", textColor: "green-700" },
        { text: "DevOps", bg: "purple-100", textColor: "purple-700" },
      ],
      details: {
        salary: "$90,000 - $130,000 per year",
        incentives: [
          "Comprehensive health insurance",
          "401(k) matching program",
          "Performance-based bonuses up to 15%",
          "Flexible remote work options",
          "Annual professional development stipend of $2,000",
          "Stock options for eligible employees",
        ],
        responsibilities: [
          "Design, implement, and manage AWS cloud infrastructure",
          "Optimize cloud operations for cost-efficiency and performance",
          "Implement security best practices and compliance standards",
          "Automate deployment and scaling processes",
          "Monitor and troubleshoot cloud environments",
        ],
        requirements: [
          "2-3 years of experience with AWS cloud services",
          "AWS certifications (e.g., Solutions Architect, SysOps Administrator) preferred",
          "Strong knowledge of cloud operations and infrastructure as code",
          "Proficiency in scripting languages (e.g., Python, Bash)",
          "Experience with monitoring tools and CI/CD pipelines",
        ],
      },
    },
    {
      title: "DevOps Engineer",
      icon: GitBranch,
      gradientFrom: "green-50",
      gradientTo: "emerald-50",
      borderColor: "green-200",
      iconBg: "green-500",
      buttonBg: "green-500",
      buttonHover: "green-600",
      description: "Looking for a 2-3 year experience DevOps Engineer.",
      tags: [
        { text: "DevOps", bg: "green-100", textColor: "green-700" },
        { text: "CI/CD", bg: "blue-100", textColor: "blue-700" },
        { text: "Automation", bg: "purple-100", textColor: "purple-700" },
        { text: "Monitoring", bg: "gray-100", textColor: "gray-700" },
      ],
      details: {
        salary: "$85,000 - $125,000 per year",
        incentives: [
          "Comprehensive health insurance",
          "401(k) matching program",
          "Performance-based bonuses up to 15%",
          "Flexible remote work options",
          "Annual professional development stipend of $2,000",
          "Stock options for eligible employees",
        ],
        responsibilities: [
          "Implement and maintain CI/CD pipelines for efficient deployments",
          "Automate infrastructure provisioning and configuration management",
          "Monitor system performance and implement scaling solutions",
          "Collaborate with development teams to improve DevOps practices",
          "Ensure system reliability and quick incident response",
        ],
        requirements: [
          "2-3 years of experience in DevOps roles",
          "Proficiency with tools like Jenkins, Docker, Kubernetes",
          "Strong scripting and automation skills",
          "Experience with cloud platforms (AWS preferred)",
          "Knowledge of monitoring and logging tools",
        ],
      },
    },
  ];

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should contain only letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else {
      const validExtensions = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validExtensions.includes(formData.resume.type)) {
        newErrors.resume = "Resume must be a PDF or Word document (.pdf, .doc, .docx)";
      } else if (formData.resume.size > 5 * 1024 * 1024) {
        newErrors.resume = "Resume file size must not exceed 5MB";
      }
    }

    if (formData.coverLetter.trim() && formData.coverLetter.trim().length < 50) {
      newErrors.coverLetter = "Cover letter should be at least 50 characters long if provided";
    }

    return newErrors;
  };

  const handleScrollToJobs = () => {
    jobOpeningsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      console.log("Application Submitted:", {
        jobTitle: selectedJob.title,
        ...formData,
        resume: formData.resume ? formData.resume.name : "No file uploaded",
      });
      setSuccessMessage("Application submitted successfully!");
      setFormData({ name: "", email: "", resume: null, coverLetter: "" });
      setErrors({});
      setIsModalOpen(false);
      setSelectedJob(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({ name: "", email: "", resume: null, coverLetter: "" });
    setErrors({});
    setSuccessMessage("");
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedJob(null);
  };

  return (
    <main className="flex flex-1">
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8 mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 sm:mb-6">
              <span className="text-red-500">Jobs</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3 sm:mb-4">
              Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed">
              <div className="space-y-4 sm:space-y-6" ref={jobOpeningsRef}>
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-6 sm:mb-8">Current Job Openings</h3>
                {jobs.map((job, index) => (
                  <div
                    key={job.title}
                    className={`bg-gradient-to-br from-${job.gradientFrom} to-${job.gradientTo} p-4 sm:p-6 rounded-lg border border-${job.borderColor} hover:shadow-md transition-shadow cursor-pointer`}
                    onClick={() => {
                      setSelectedJob(job);
                      setIsDetailsOpen(true);
                    }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className={`bg-${job.iconBg} p-2 rounded-lg`}>
                          <job.icon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg md:text-xl text-gray-800">{index + 1}. {job.title}</h4>
                          <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 sm:h-5 w-4 sm:w-5" />
                              <span>Start Date: Immediate</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className={`mt-3 sm:mt-0 bg-${job.buttonBg} hover:bg-${job.buttonHover} text-white px-3 sm:px-4 py-2 text-xs sm:text-sm`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJob(job);
                          setIsModalOpen(true);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
                      {job.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`bg-${tag.bg} text-${tag.textColor} px-2 sm:px-3 py-1 rounded-full text-xs`}
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow">
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
                <h4 className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">Why Work With GenexCorp?</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Join a passionate team dedicated to transforming businesses through innovative IT solutions. We offer competitive compensation, 
                  excellent benefits, opportunities for professional growth, and the chance to work on cutting-edge technologies with industry-leading clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <TrendingUp className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Career Growth</h5>
                    <p className="text-xs sm:text-sm text-gray-600">Continuous learning and advancement opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Users className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Great Team</h5>
                    <p className="text-xs sm:text-sm text-gray-600">Collaborative and supportive work environment</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-10 sm:w-12 h-10 sm:w-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Rocket className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Innovation Focus</h5>
                    <p className="text-xs sm:text-sm text-gray-600">Work with latest technologies and methodologies</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 md:mt-16 text-center bg-gradient-to-r from-red-50 to-blue-50 p-6 sm:p-8 md:p-12 rounded-lg">
                <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-4 sm:mb-6">Ready to Join Our Team?</h3>
                <p className="text-sm sm:text-base md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                  Start your career with GenexCorp and work on innovative IT projects with top-tier professionals.
                </p>
                <div className="flex justify-center">
                  <Button 
                    className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                    onClick={handleScrollToJobs}
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-8 space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Current Openings</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Total Positions</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-blue-500">{metrics.jobs.totalPositions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Development Roles</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-green-500">{metrics.jobs.developmentRoles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Cloud/DevOps Roles</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-purple-500">{metrics.jobs.cloudDevOpsRoles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Experience Level</span>
                      <span className="text-base sm:text-lg md:text-xl text-red-500">{metrics.jobs.experienceLevel}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Skills in Demand</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs">Full Stack Development</span>
                    <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full text-xs">AWS Cloud</span>
                    <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs">DevOps</span>
                    <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs">Payments Systems</span>
                    <span className="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs">Messaging</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-1 rounded-full text-xs">Notifications</span>
                    <span className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs">CI/CD</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Application Process</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-600">1</span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">Submit Application</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-green-600">2</span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">Initial Screening</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-purple-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-purple-600">3</span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">Technical Interview</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-orange-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-orange-600">4</span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">Final Interview</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="bg-red-100 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-xs text-red-600">5</span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">Job Offer</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Contact HR</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Mail className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">hr@genexcorp.com</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Briefcase className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Human Resources</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" />
                      <span className="text-xs sm:text-sm text-gray-700">Response within 24-48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDetailsOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div
            className={`bg-gradient-to-br from-${selectedJob.gradientFrom} to-${selectedJob.gradientTo} p-4 sm:p-6 md:p-8 rounded-lg max-w-sm sm:max-w-md md:max-w-lg w-full max-h-[80vh] overflow-y-auto m-4`}
          >
            <h3 className="text-xl sm:text-2xl text-gray-800 mb-4 sm:mb-6">{selectedJob.title} - Job Details</h3>
            <div className="space-y-4 sm:space-y-6 text-gray-700 text-xs sm:text-sm">
              <div>
                <strong className="block mb-2 font-medium">Description:</strong>
                <p>{selectedJob.description}</p>
              </div>
              <div>
                <strong className="block mb-2 font-medium">Salary:</strong>
                <p>{selectedJob.details.salary}</p>
              </div>
              <div>
                <strong className="block mb-2 font-medium">Incentives:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedJob.details.incentives.map((incentive, i) => (
                    <li key={i}>{incentive}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong className="block mb-2 font-medium">Responsibilities:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedJob.details.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong className="block mb-2 font-medium">Requirements:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedJob.details.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-end space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              <Button
                variant="outline"
                className="border-gray-500 text-gray-500 hover:bg-gray-50 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                onClick={handleCloseDetails}
              >
                Close
              </Button>
              <Button
                className={`bg-${selectedJob.buttonBg} hover:bg-${selectedJob.buttonHover} text-white px-3 sm:px-4 py-2 text-xs sm:text-sm`}
                onClick={() => {
                  setIsDetailsOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-gradient-to-br from-${selectedJob.gradientFrom} to-${selectedJob.gradientTo} p-4 sm:p-6 md:p-8 rounded-lg max-w-sm sm:max-w-md md:max-w-lg w-full`}>
            <h3 className="text-xl sm:text-2xl text-gray-800 mb-4 sm:mb-6">
              Apply for {selectedJob.title}
            </h3>
            {successMessage && (
              <div className="mb-4 p-3 sm:p-4 bg-green-100 text-green-700 rounded-md flex items-center text-xs sm:text-sm">
                <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                {successMessage}
              </div>
            )}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-600">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm`}
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-600">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm`}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-600">Resume *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${errors.resume ? "border-red-500" : "border-gray-300"} rounded-lg text-xs sm:text-sm`}
                  accept=".pdf,.doc,.docx"
                  required
                />
                {errors.resume && <p className="text-red-500 text-xs">{errors.resume}</p>}
              </div>
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-600">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${errors.coverLetter ? "border-red-500" : "border-gray-300"} rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none text-xs sm:text-sm`}
                  placeholder="Enter your cover letter"
                  rows="4"
                />
                {errors.coverLetter && <p className="text-red-500 text-xs">{errors.coverLetter}</p>}
              </div>
              <div className="flex justify-end space-x-3 sm:space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-500 hover:bg-gray-50 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                  onClick={handleCloseModal}
                >
                  Cancel
                </Button>
                <Button
                  className={`bg-${selectedJob.buttonBg} hover:bg-${selectedJob.buttonHover} text-white px-3 sm:px-4 py-2 text-xs sm:text-sm`}
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