import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-rainbow-rose">Rainbow</span>
              <span className="text-rainbow-gold ml-1">Insurance</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fort Worth's trusted insurance agency since 1993. Providing comprehensive coverage with personalized service.
            </p>
            <div className="space-y-4">
              <a href="tel:817-922-8031" className="flex items-center gap-3 hover:text-rainbow-rose transition-colors">
                <Phone className="w-5 h-5 text-rainbow-rose" />
                <span>817-922-8031</span>
              </a>
              <a href="mailto:rainbowins@hotmail.com" className="flex items-center gap-3 hover:text-rainbow-rose transition-colors">
                <Mail className="w-5 h-5 text-rainbow-rose" />
                <span>rainbowins@hotmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rainbow-rose mt-1 flex-shrink-0" />
                <span>2209 8th Ave, Fort Worth, TX 76110</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-rainbow-rose transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-rainbow-rose transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-rainbow-rose transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-rainbow-rose transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Insurance Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Insurance</h4>
            <ul className="space-y-3">
              <li><Link to="/fort-worth-car-insurance" className="text-gray-400 hover:text-rainbow-rose transition-colors">Car Insurance</Link></li>
              <li><Link to="/fort-worth-home-insurance" className="text-gray-400 hover:text-rainbow-rose transition-colors">Home Insurance</Link></li>
              <li><Link to="/fort-worth-business-insurance" className="text-gray-400 hover:text-rainbow-rose transition-colors">Business Insurance</Link></li>
              <li><Link to="/fort-worth-sr22" className="text-gray-400 hover:text-rainbow-rose transition-colors">SR-22 Filing</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Office Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between"><span>Mon, Wed, Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Tue, Thu:</span> <span>9:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rainbow Insurance Agency. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:underline ml-2">Terms of Service</Link> | 
            <Link to="/sitemap" className="hover:underline ml-2">Sitemap</Link>
          </p>
          <p className="mt-2">Serving Fort Worth, Dallas, Arlington, and the surrounding DFW area.</p>
        </div>
      </div>
    </footer>
  );
}
