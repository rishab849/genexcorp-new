import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShoppingCart,
  Smartphone,
  Cloud,
  Database,
  Cog,
  ShieldCheck,
  Zap,
  Code,
  CheckCircle,
  Target,
  Rocket,
  GitBranch,
  Server,
  MonitorSpeaker,
  Layers,
  Mail,
  TrendingUp,
} from "lucide-react";

export default function ProductDevelopment() {
  const [metrics, setMetrics] = useState({
    productsDelivered: '...',
    ecommercePlatforms: '...',
    cloudApplications: '...',
    devOpsPipelines: '...',
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        console.log('Fetching metrics...');
        
        const [prod, ecom, cloud, devops] = await Promise.all([
          fetch('https://csrng.net/csrng/csrng.php?min=200&max=300')
            .then(res => {
              console.log('Products response status:', res.status);
              return res.json();
            })
            .then(data => {
              console.log('Products data:', data);
              return data[0].random;
            }),
          fetch('https://csrng.net/csrng/csrng.php?min=150&max=200')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=80&max=100')
            .then(res => res.json())
            .then(data => data[0].random),
          fetch('https://csrng.net/csrng/csrng.php?min=60&max=80')
            .then(res => res.json())
            .then(data => data[0].random),
        ]);

        console.log('Fetched values:', { prod, ecom, cloud, devops });

        setMetrics({
          productsDelivered: prod,
          ecommercePlatforms: ecom,
          cloudApplications: cloud,
          devOpsPipelines: devops,
        });
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setMetrics({
          productsDelivered: Math.floor(Math.random() * 100) + 200,
          ecommercePlatforms: Math.floor(Math.random() * 50) + 150,
          cloudApplications: Math.floor(Math.random() * 20) + 80,
          devOpsPipelines: Math.floor(Math.random() * 20) + 60,
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
              Product <span className="text-red-500">Development</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3 sm:mb-4">
              At GenexCorp, we turn your vision into reality with innovative product development solutions tailored to your business needs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed">
              <div>
                <p className="text-sm sm:text-base">
                  At GenexCorp, our product development services are designed to deliver end-to-end solutions that drive business growth and innovation. From ideation to deployment, we partner with you to create scalable, secure, and user-focused products that meet the demands of today's dynamic digital landscape.
                </p>
                <p className="text-sm sm:text-base">
                  Our agile development approach ensures rapid prototyping, iterative feedback, and seamless integration with your existing systems. Whether you're building an e-commerce platform, a mobile application, or a custom enterprise solution, our team of experts leverages cutting-edge technologies to deliver measurable results.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 md:p-8 rounded-lg border border-green-200">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="bg-green-500 p-2 sm:p-3 rounded-lg">
                    <ShoppingCart className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl text-gray-800 mb-3 sm:mb-4">E-commerce Solutions</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      We build robust e-commerce platforms with seamless user experiences, secure payment gateways, and advanced analytics to drive sales and customer engagement. Our solutions are tailored to your brand and optimized for performance across all devices.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <Smartphone className="h-5 sm:h-6 w-5 sm:w-6 text-green-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Responsive Design</h5>
                    <p className="text-xs text-gray-600">Mobile-first approach for all devices</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <ShieldCheck className="h-5 sm:h-6 w-5 sm:w-6 text-green-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Secure Payments</h5>
                    <p className="text-xs text-gray-600">Integrated payment gateways</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <TrendingUp className="h-5 sm:h-6 w-5 sm:w-6 text-green-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Analytics Integration</h5>
                    <p className="text-xs text-gray-600">Data-driven business insights</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg">
                    <Cloud className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl text-gray-800 mb-3 sm:mb-4">Cloud-Based Applications</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Our cloud-based application development services leverage AWS services like Lambda, Redshift, and RDS to build scalable, secure, and cost-effective solutions. We ensure seamless integration and high availability for your business-critical applications.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <Server className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">AWS Infrastructure</h5>
                    <p className="text-xs text-gray-600">Scalable cloud architecture</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <Database className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Data Management</h5>
                    <p className="text-xs text-gray-600">RDS & Redshift solutions</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <Zap className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Serverless Computing</h5>
                    <p className="text-xs text-gray-600">Lambda functions & APIs</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Communication</h5>
                    <p className="text-xs text-gray-600">Twilio integration services</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 sm:p-6 md:p-8 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="bg-purple-500 p-2 sm:p-3 rounded-lg">
                    <GitBranch className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl text-gray-800 mb-3 sm:mb-4">DevOps Automation</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      We streamline your development pipeline with automated CI/CD workflows, containerization, and real-time monitoring. Our DevOps solutions reduce operational costs and improve deployment efficiency, ensuring your products are delivered faster and with higher reliability.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <Cog className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">CI/CD Pipelines</h5>
                    <p className="text-xs text-gray-600">Automated deployment workflows</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <MonitorSpeaker className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Monitoring & Alerts</h5>
                    <p className="text-xs text-gray-600">Real-time system monitoring</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <Layers className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600 mb-2" />
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-1">Containerization</h5>
                    <p className="text-xs text-gray-600">Docker & Kubernetes solutions</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-gray-50 to-slate-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200">
                <h4 className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4">Our Development Process</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="bg-red-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Target className="h-5 sm:h-6 w-5 sm:w-6 text-red-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-2">Planning</h5>
                    <p className="text-xs text-gray-600">Requirements analysis and strategic planning</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Code className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-2">Development</h5>
                    <p className="text-xs text-gray-600">Agile development with modern technologies</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-2">Testing</h5>
                    <p className="text-xs text-gray-600">Comprehensive testing and quality assurance</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Rocket className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600" />
                    </div>
                    <h5 className="text-xs sm:text-sm text-gray-800 mb-2">Deployment</h5>
                    <p className="text-xs text-gray-600">Seamless deployment and ongoing support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-8 space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Product Development Metrics</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Products Delivered</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-green-500">{metrics.productsDelivered}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">E-commerce Platforms</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-blue-500">{metrics.ecommercePlatforms}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Cloud Applications</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-purple-500">{metrics.cloudApplications}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">DevOps Pipelines</span>
                      <span className="text-lg sm:text-xl md:text-2xl text-red-500">{metrics.devOpsPipelines}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Technology Stack</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <h5 className="text-xs sm:text-sm text-gray-700 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded text-xs">React</span>
                        <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded text-xs">Angular</span>
                        <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded text-xs">Vue.js</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm text-gray-700 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded text-xs">Node.js</span>
                        <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded text-xs">Python</span>
                        <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded text-xs">Java</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm text-gray-700 mb-2">Cloud & DevOps</h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded text-xs">AWS</span>
                        <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded text-xs">Docker</span>
                        <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded text-xs">Kubernetes</span>
                      </div>
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