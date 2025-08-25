import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-gradient-to-r from-white via-slate-50 to-white border-t border-gray-200 shadow-inner mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About GenexCorp */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">About GenexCorp</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Some believe in the power of numbers. Some believe in the power of technology. We believe in the power of people, power of human touch which brings best out of the best and the impact people can have on technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", page: "home" },
                { label: "Our Objective", page: "objective" },
                { label: "Portfolio", page: "portfolio" },
                { label: "Corporate Training", page: "corporatetraining" },
                { label: "Career Augmentation Training", page: "training" },
                { label: "Jobs", page: "jobs" },
                { label: "Support", page: "support" },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-600 hover:text-red-500 hover:translate-x-1 transform transition-all duration-300 inline-flex items-center"
                  >
                    <span className="mr-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-600 mb-4">
            <p className="hover:text-red-500 transition-colors cursor-pointer">
              📍 VT Plaza, 4th Floor, KPHB Colony,<br />
              Kukatpally, Road #1, Hyderabad - 500085,<br />
              Telangana, India
            </p>
            <p className="hover:text-red-500 transition-colors cursor-pointer">
              📞 +91-9920779095
            </p>
            <a
              href="mailto:hr@genexcorp.com"
              className="hover:text-red-500 transition-colors cursor-pointer block"
            >
              📧 hr@genexcorp.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-600 hover:text-red-500 hover:scale-110 transform transition-all duration-300 p-2 bg-gray-100 hover:bg-red-50 rounded-full shadow-sm"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 text-center py-4 text-sm text-gray-500 border-t border-gray-200">
        © Genexcorp.com, {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
