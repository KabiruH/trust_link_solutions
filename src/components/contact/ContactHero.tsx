import { Phone, MessageCircle, Mail } from 'lucide-react'

export default function ContactHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="h-4 w-4 text-yellow-400" />
              <span>Available 24/7 • Quick Response Time</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ready to start your project or have questions about our services? We&apos;re here to help. 
            Choose your preferred way to connect with us.
          </p>
          
          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <a 
              href="https://wa.me/254700095477" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors group"
            >
              <MessageCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-lg font-semibold mb-1">WhatsApp</div>
              <div className="text-sm text-gray-200">Instant messaging</div>
            </a>
            
            <a 
              href="tel:+254700095477" 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors group"
            >
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-lg font-semibold mb-1">Call Direct</div>
              <div className="text-sm text-gray-200">Immediate assistance</div>
            </a>
            
            <a 
              href="mailto:info@trustlinksolutions.co.ke" 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors group"
            >
              <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-semibold mb-1">Email Us</div>
              <div className="text-sm text-gray-200">Detailed inquiries</div>
            </a>
          </div>
          
          {/* Main Contact Number */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Direct Contact Number</h3>
              <a 
                href="tel:+254700095477" 
                className="text-2xl md:text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                +254 700 095 477
              </a>
              <p className="text-sm text-gray-300 mt-2">Available for calls and WhatsApp messages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}