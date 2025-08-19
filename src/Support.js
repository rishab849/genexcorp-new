import {
  ArrowRight,
  Users,
  Clock,
  CheckCircle,
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
  Mail,
  Phone,
  MessageSquare,
  Globe,
  HeadphonesIcon,
  MapPin,
  Send,
} from "lucide-react";

export default function Support() {
  return (
    <main className="flex flex-1">
      {/* Content Area */}
      <div className="flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Blue Quote Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-12">
            <h1 className="text-5xl text-gray-800 mb-6">
                  <span className="text-red-500">Support</span>
                </h1>
            <h2 className="text-3xl text-blue-600 mb-4">
              Learn to get in touch with the silence within yourself, and know that everything in life has purpose. There are no mistakes, no coincidences, all events are blessings given to us to learn from.
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8 text-gray-700 leading-relaxed">
              {/* Contact Form Section */}
              <div className="space-y-6">
                <h3 className="text-2xl text-gray-800 mb-8">Get in Touch</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <form className="space-y-6">
                    {/* First Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                        <input
                          id="name"
                          placeholder="Enter your full name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation *</label>
                        <input
                          id="designation"
                          placeholder="Enter your job title"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                          id="company"
                          placeholder="Enter your company name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry Vertical</label>
                        <input
                          id="industry"
                          placeholder="e.g., Technology, Healthcare, Finance"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Third Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No *</label>
                        <input
                          id="mobile"
                          placeholder="Enter your mobile number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your requirements or questions..."
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-start">
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2 rounded-md flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Submit</span>
                      </button>
                    </div>
                  </form>
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

              {/* Support Commitment */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                <h4 className="text-xl text-gray-800 mb-3">Our Support Commitment</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We believe in building lasting relationships with our clients through exceptional support and service. Our dedicated support team 
                  is committed to understanding your unique challenges and providing tailored solutions that drive your business forward.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">24/7 Support</h5>
                    <p className="text-xs text-gray-600">Round-the-clock assistance when you need it</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <HeadphonesIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Expert Team</h5>
                    <p className="text-xs text-gray-600">Experienced professionals ready to help</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <h5 className="text-sm text-gray-800 mb-1">Quick Response</h5>
                    <p className="text-xs text-gray-600">Fast resolution times and proactive support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Corporate Office */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Corporate Office:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div className="text-sm text-gray-700">
                        VT Plaza, 4th Floor, KPHB Colony,<br />
                        Kukatpally, Road # 1, Hyderabad - 500085,<br />
                        Telangana, India
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">+91-9920779095</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-700">hr@genexcorp.com</span>
                    </div>
                  </div>
                </div>

                {/* Support Statistics */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Support Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="text-xl text-blue-500">&lt; 2 Hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Resolution Rate</span>
                      <span className="text-xl text-green-500">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Client Satisfaction</span>
                      <span className="text-xl text-purple-500">4.9/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Support Channels</span>
                      <span className="text-xl text-red-500">5+</span>
                    </div>
                  </div>
                </div>

                {/* Support Channels */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Support Channels</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Email Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Phone Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Live Chat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">On-site Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Remote Support</span>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h4 className="text-lg text-gray-800 mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency Only</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-green-200">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-600">24/7 Critical Support Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-lg">
                  <div className="text-center">
                    <HeadphonesIcon className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                    <h4 className="text-lg mb-2">Need Immediate Help?</h4>
                    <p className="text-sm text-gray-300 mb-4">
                      Contact our support team for instant assistance
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 text-white w-full px-4 py-2 rounded-md">
                      Contact Support
                    </button>
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