import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react'
import { JSX } from 'react'

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Trust</span>
              <span className="text-yellow-400">Link</span>
              <span className="text-white"> Solutions</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional on-the-ground support for diaspora families managing property, projects, and family needs in Kenya. Your trusted link to home.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>Nairobi, Kenya 🇰🇪</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Our Services</a></li>
              <li><a href="/how-it-works" className="text-gray-300 hover:text-yellow-400 transition-colors">How It Works</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Client Stories</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-gray-300">+254 700 095 477</div>
                  <div className="text-sm text-gray-400">Kenya Time (EAT)</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <div>
                  <div className="text-gray-300">WhatsApp Available</div>
                  <div className="text-sm text-gray-400">Quick responses</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-gray-300">info@trustlinksolutions.co.ke</div>
                  <div className="text-sm text-gray-400">24hr response time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-center">Our Service Areas</h4>
          <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
            <div className="text-gray-300">Property Management</div>
            <div className="text-gray-300">Home Renovations</div>
            <div className="text-gray-300">Vendor Coordination</div>
            <div className="text-gray-300">Project Oversight</div>
            <div className="text-gray-300">Family Support</div>
            <div className="text-gray-300">Investment Management</div>
            <div className="text-gray-300">Emergency Response</div>
            <div className="text-gray-300">Custom Solutions</div>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-gray-300">Follow us:</span>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <span>© 2025 TrustLink Solutions. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}