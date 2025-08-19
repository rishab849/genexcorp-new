import { Button } from "./components/ui/button";
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
  TrendingUp, // Added TrendingUp import
} from "lucide-react";

export default function ProductDevelopment() {
  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-12">
            <h1 className="text-5xl text-gray-800 mb-6">
                  Product <span className="text-red-500">Development</span>
                </h1>
            <h2 className="text-3xl text-blue-600 mb-4">
              At GenexCorp, we turn your vision into reality with innovative product development solutions tailored to your business needs
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8 text-gray-700 leading-relaxed">
              {/* Product Development Overview */}
              <div>
                
                <p>
                  At GenexCorp, our product development services are designed to deliver end-to-end solutions that drive business growth and innovation. From ideation to deployment, we partner with you to create scalable, secure, and user-focused products that meet the demands of today’s dynamic digital landscape.
                </p>
                <p>
                  Our agile development approach ensures rapid prototyping, iterative feedback, and seamless integration with your existing systems. Whether you’re building an e-commerce platform, a mobile application, or a custom enterprise solution, our team of experts leverages cutting-edge technologies to deliver measurable results.
                </p>
              </div>

              {/* E-commerce Solutions */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-800 mb-4">E-commerce Solutions</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We build robust e-commerce platforms with seamless user experiences, secure payment gateways, and advanced analytics to drive sales and customer engagement. Our solutions are tailored to your brand and optimized for performance across all devices.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Smartphone className="h-6 w-6 text-green-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Responsive Design</h5>
                    <p className="text-xs text-gray-600">Mobile-first approach for all devices</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <ShieldCheck className="h-6 w-6 text-green-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Secure Payments</h5>
                    <p className="text-xs text-gray-600">Integrated payment gateways</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Analytics Integration</h5>
                    <p className="text-xs text-gray-600">Data-driven business insights</p>
                  </div>
                </div>
              </div>

              {/* Cloud-Based Applications */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-800 mb-4">Cloud-Based Applications</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our cloud-based application development services leverage AWS services like Lambda, Redshift, and RDS to build scalable, secure, and cost-effective solutions. We ensure seamless integration and high availability for your business-critical applications.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Server className="h-6 w-6 text-blue-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">AWS Infrastructure</h5>
                    <p className="text-xs text-gray-600">Scalable cloud architecture</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Database className="h-6 w-6 text-blue-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Data Management</h5>
                    <p className="text-xs text-gray-600">RDS & Redshift solutions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Zap className="h-6 w-6 text-blue-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Serverless Computing</h5>
                    <p className="text-xs text-gray-600">Lambda functions & APIs</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Mail className="h-6 w-6 text-blue-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Communication</h5>
                    <p className="text-xs text-gray-600">Twilio integration services</p>
                  </div>
                </div>
              </div>

              {/* DevOps Automation */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <GitBranch className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-800 mb-4">DevOps Automation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We streamline your development pipeline with automated CI/CD workflows, containerization, and real-time monitoring. Our DevOps solutions reduce operational costs and improve deployment efficiency, ensuring your products are delivered faster and with higher reliability.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Cog className="h-6 w-6 text-purple-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">CI/CD Pipelines</h5>
                    <p className="text-xs text-gray-600">Automated deployment workflows</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <MonitorSpeaker className="h-6 w-6 text-purple-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Monitoring & Alerts</h5>
                    <p className="text-xs text-gray-600">Real-time system monitoring</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Layers className="h-6 w-6 text-purple-600 mb-2" />
                    <h5 className="text-sm text-gray-800 mb-1">Containerization</h5>
                    <p className="text-xs text-gray-600">Docker & Kubernetes solutions</p>
                  </div>
                </div>
              </div>

              {/* Development Process Highlight */}
              <div className="mt-12 bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-lg border border-gray-200">
                <h4 className="text-xl text-gray-800 mb-4">Our Development Process</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-red-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Planning</h5>
                    <p className="text-xs text-gray-600">Requirements analysis and strategic planning</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Development</h5>
                    <p className="text-xs text-gray-600">Agile development with modern technologies</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Testing</h5>
                    <p className="text-xs text-gray-600">Comprehensive testing and quality assurance</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Rocket className="h-6 w-6 text-purple-600" />
                    </div>
                    <h5 className="text-gray-800 mb-2">Deployment</h5>
                    <p className="text-xs text-gray-600">Seamless deployment and ongoing support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Development Stats */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Product Development Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Products Delivered</span>
                      <span className="text-2xl text-green-500">200+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">E-commerce Platforms</span>
                      <span className="text-2xl text-blue-500">150+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cloud Applications</span>
                      <span className="text-2xl text-purple-500">80+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">DevOps Pipelines</span>
                      <span className="text-2xl text-red-500">60+</span>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Technology Stack</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm text-gray-700 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">React</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Angular</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Vue.js</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-700 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Node.js</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Python</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Java</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-700 mb-2">Cloud & DevOps</h5>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">AWS</span>
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Docker</span>
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Kubernetes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg">
                  <div className="text-center">
                    <Code className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-lg mb-2">Ready to Build?</h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Let's discuss your next product development project
                    </p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                      Start Your Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-blue-50 p-12 rounded-lg">
            <h3 className="text-3xl text-gray-800 mb-6">Ready to Build Your Next Product?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with GenexCorp to create innovative, scalable, and user-focused products that drive your business forward.
            </p>
            <div className="flex justify-center space-x-6">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}