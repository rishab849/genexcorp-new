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
  Star,
  Award,
} from "lucide-react";
import { Button } from "./components/ui/button";

export default function OurObjective() {
  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-5xl text-gray-800 mb-6">Our <span className="text-red-500">Objective</span></h1>
          </div>

          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-12">
            <h2 className="text-3xl text-blue-600 mb-4">
              At GenexCorp, "Transforming challenges into opportunities" is more than our mission—it's the foundation of every client partnership we build
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
              <p>
                While others focus on the power of <strong>DATA</strong> and the capabilities of <strong>TECHNOLOGY</strong>, 
                we center our approach on something more fundamental.
              </p>
              
              <p>
                We believe in the power of <strong>PEOPLE</strong>—the transformative impact of human insight, creativity, 
                and expertise that turns raw technology into meaningful business solutions.
              </p>

              <p>
                Our foundation is built on the conviction that diverse perspectives and human-centered innovation create 
                exceptional technology organizations. We prioritize <strong>PEOPLE FIRST</strong>, driving our vision to develop 
                technology experts who excel not just in what they deliver, but in their shared passion for organizational success. 
                In today's information-rich landscape, endless possibilities await those ready to harness them. Realizing these 
                opportunities requires more than algorithms or infrastructure—it demands talented professionals who can transform 
                information into strategic advantages. We create solutions that streamline operations, enhance decision-making, 
                and optimize processes while delivering measurable ROI and competitive differentiation.
              </p>

              <p>
                Our commitment centers on collaborative partnerships, working closely with you to develop the advanced analytics 
                and intelligent systems your business deserves. Our consultants immerse themselves in understanding your unique 
                challenges, analyze your market dynamics, and craft strategies that drive sustainable success. Our unified approach 
                focuses entirely on your achievements—we measure our success by the tangible improvements our analytics 
                and solutions bring to your business operations and growth.
              </p>

              <p>
                Our experienced consultants have a proven track record in the technology sector, accelerating growth for 
                multinational corporations, solving complex business challenges, and delivering innovative solutions that 
                provide significant competitive advantages. Our team's specialized expertise spans multiple cutting-edge domains:
              </p>

              {/* Core Specialization Areas */}
              <div className="mt-8">
                <h4 className="text-xl text-gray-800 mb-4">Core Specialization Areas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                    <ShoppingCart className="h-8 w-8 text-orange-500 mb-3 group-hover:text-red-500 transition-colors" />
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">E-commerce Solutions</h5>
                    <p className="text-sm text-gray-600">Complete digital commerce platforms and optimization for seamless online experiences.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                    <Smartphone className="h-8 w-8 text-blue-500 mb-3 group-hover:text-red-500 transition-colors" />
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Mobile & Smart Technology</h5>
                    <p className="text-sm text-gray-600">Next-generation mobile applications and IoT solutions for connected businesses.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                    <Cloud className="h-8 w-8 text-green-500 mb-3 group-hover:text-red-500 transition-colors" />
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Cloud Infrastructure</h5>
                    <p className="text-sm text-gray-600">Scalable cloud architecture and migration services for robust operations.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                    <Database className="h-8 w-8 text-purple-500 mb-3 group-hover:text-red-500 transition-colors" />
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Business Intelligence & Analytics</h5>
                    <p className="text-sm text-gray-600">Data-driven insights and predictive modeling for strategic decision-making.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                    <Cog className="h-8 w-8 text-red-500 mb-3 group-hover:text-red-600 transition-colors" />
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Enterprise Integration (EAI/ERP)</h5>
                    <p className="text-sm text-gray-600">Seamless system integration and process automation for efficiency.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-red-500 border border-gray-200 transition-all duration-200">
                    <Zap className="h-8 w-8 text-yellow-500 mb-3 group-hover:text-red-500 transition-colors" />
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">Digital Transformation</h5>
                    <p className="text-sm text-gray-600">Embracing digital innovation to drive business growth and agility.</p>
                  </div>
                </div>
              </div>

              {/* Our Promise */}
              <div className="mt-8 bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg text-center">
                <ShieldCheck className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-xl text-blue-800 mb-3">Our Promise</h4>
                <p className="text-blue-700">
                  We don't just deliver technology solutions—we forge lasting partnerships that evolve with your business. 
                  Every project is an opportunity to demonstrate how strategic technology implementation can transform your 
                  operations, enhance your market position, and drive sustainable growth.
                </p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Side - Service Showcase */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Technology Expertise */}
                <div className="bg-white border border-gray-200 p-6 rounded-xl mb-6">
                  <h4 className="text-lg text-gray-800 mb-4">Technology Expertise</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">React</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Node.js</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">AWS</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Python</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">MongoDB</span>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">Docker</span>
                  </div>
                  <div className="flex items-center justify-center text-center">
                    <Code className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border hover:border-red-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl text-red-500 mb-1">500+</div>
                        <div className="text-sm text-gray-600">Projects Delivered</div>
                      </div>
                      <CheckCircle className="h-8 w-8 text-red-500" />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border hover:border-blue-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl text-blue-500 mb-1">98%</div>
                        <div className="text-sm text-gray-600">Client Satisfaction</div>
                      </div>
                      <Star className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border hover:border-green-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl text-green-500 mb-1">15+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <Zap className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                </div>

                {/* Client Success Highlight */}
                <div className="mt-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-xl">
                  <div className="text-center">
                    <Award className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-lg mb-2">Client Success</h4>
                    <p className="text-sm text-gray-300">
                      Trusted by leading enterprises worldwide for innovative solutions and exceptional results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-blue-50 p-12 rounded-lg">
            <h3 className="text-3xl text-gray-800 mb-6">Ready to Unlock Your Business Potential?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with GenexCorp to transform your technological challenges into competitive advantages 
              and accelerate your journey toward digital excellence.
            </p>
            <div className="flex justify-center space-x-6">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4">
                Start Your Transformation
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4">
                Schedule a Strategic Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}