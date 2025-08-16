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
} from "lucide-react";

export default function ITResourcing() {
  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-12">
            <h2 className="text-3xl text-blue-600 mb-4">
              Everyone that is part of GenexCorp is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8 text-gray-700 leading-relaxed">
              {/* IT Resourcing Introduction */}
              <div className="space-y-6">
                <h1 className="text-5xl text-gray-800 mb-6">
                  IT <span className="text-red-500">Resourcing</span>
                </h1>
                <p>
                  Our team includes a range of technical, functional and business analyst specialists such as business blueprint (BPM) creators, 
                  Business Analyst (KPI designers), developers for specific tools, user interface designers and support engineers. We also have 
                  a very experienced team of IT consultants from different industry verticals one step away from your call to understand, 
                  explain, create fast prototypes and set up your team and make it a pleasant space where business jigsaws are come into solvency.
                </p>
                
                <p>
                  We want to develop trusting and valued relationships with you. Our methods aren't focused on us, they are focused on you. 
                  We adopt a consultative, clear thinking approach, taking the time to help understand your business objectives before we 
                  define the best solutions for you.
                </p>

                <p>
                  We can work collaboratively with your internal IT / Functional Business Drivers, any of your external suppliers and even 
                  with any other IT providers you work with. Our consultants have a proven track record of creating strong strategic partnerships 
                  with their clients to help them make the most of their IT.
                </p>
              </div>

              {/* Resourcing Services */}
              <div className="mt-12">
                <h3 className="text-2xl text-gray-800 mb-8">Our IT Resourcing Services</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Talent Acquisition */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <Search className="h-8 w-8 text-blue-600" />
                      <h4 className="text-lg text-gray-800">Talent Acquisition</h4>
                    </div>
                    <p className="text-sm text-gray-600">Expert recruitment services to find the right technical talent for your specific requirements and project needs.</p>
                  </div>

                  {/* Team Augmentation */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <UserPlus className="h-8 w-8 text-green-600" />
                      <h4 className="text-lg text-gray-800">Team Augmentation</h4>
                    </div>
                    <p className="text-sm text-gray-600">Seamlessly integrate skilled professionals into your existing teams to scale capacity and accelerate project delivery.</p>
                  </div>

                  {/* Contract Staffing */}
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="h-8 w-8 text-purple-600" />
                      <h4 className="text-lg text-gray-800">Contract Staffing</h4>
                    </div>
                    <p className="text-sm text-gray-600">Flexible contract-based staffing solutions for short-term projects and specialized skill requirements.</p>
                  </div>

                  {/* Resource Optimization */}
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <PieChart className="h-8 w-8 text-orange-600" />
                      <h4 className="text-lg text-gray-800">Resource Optimization</h4>
                    </div>
                    <p className="text-sm text-gray-600">Strategic resource planning and allocation to maximize efficiency and minimize costs across your projects.</p>
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

              {/* Resourcing Value Proposition */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                <h4 className="text-xl text-gray-800 mb-3">Our Resourcing Advantage</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We understand that finding the right talent is crucial for project success. Our extensive network of skilled professionals, 
                  combined with our deep understanding of industry requirements, ensures that we deliver resources that not only meet your 
                  technical specifications but also align with your organizational culture and project goals.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Search className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Rigorous Screening</h5>
                    <p className="text-xs text-gray-600">Comprehensive technical and cultural assessments</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Quick Deployment</h5>
                    <p className="text-xs text-gray-600">Rapid resource allocation and onboarding</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Ongoing Support</h5>
                    <p className="text-xs text-gray-600">Continuous engagement and performance monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Resourcing Stats */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Resourcing Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Resources</span>
                      <span className="text-2xl text-blue-500">200+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Talent Pool</span>
                      <span className="text-2xl text-green-500">1000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Client Companies</span>
                      <span className="text-2xl text-purple-500">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Placement Time</span>
                      <span className="text-2xl text-red-500">7 Days</span>
                    </div>
                  </div>
                </div>

                {/* Skill Categories */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Skill Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Full-Stack Developers</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Data Engineers</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">DevOps Engineers</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Cloud Architects</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs">Business Analysts</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Project Managers</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">QA Engineers</span>
                  </div>
                </div>

                {/* Resource Types */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Resource Types</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Contract Resources</span>
                      <span className="text-sm text-blue-600">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Permanent Placements</span>
                      <span className="text-sm text-green-600">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Project-Based</span>
                      <span className="text-sm text-orange-600">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '10%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Success Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">95% Client Retention Rate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">4.8/5 Average Rating</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">24/7 Support Coverage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Industry Certified Professionals</span>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg">
                  <div className="text-center">
                    <UserPlus className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-lg mb-2">Need IT Resources?</h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Connect with our talent acquisition specialists to find your perfect match
                    </p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white w-full">
                      Request Resources
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-blue-50 p-12 rounded-lg">
            <h3 className="text-3xl text-gray-800 mb-6">Ready to Scale Your Team?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with GenexCorp for reliable IT resourcing solutions that empower your projects with top-tier talent.
            </p>
            <div className="flex justify-center space-x-6">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4">
                Request Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}