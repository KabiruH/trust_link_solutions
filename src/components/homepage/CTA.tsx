import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import { JSX } from 'react'

export default function CTA(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Peace of Mind?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Join dozens of diaspora families who trust TrustLink Solutions to manage their most important assets in Kenya. 
            Start with a free consultation today.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">FREE</div>
                <div className="text-sm">Initial Consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">24HR</div>
                <div className="text-sm">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm">Transparent Process</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-300 mb-4">Quick response via WhatsApp</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full">
              Message on WhatsApp
            </button>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone Call</h3>
            <p className="text-gray-300 mb-4">Schedule a consultation call</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Schedule Call
            </button>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300 mb-4">Send us your requirements</p>
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors w-full">
              Send Email
            </button>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <button className="bg-yellow-400 text-black px-10 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition-colors shadow-2xl flex items-center gap-3 mx-auto">
            Get Your Free Consultation
            <ArrowRight className="h-6 w-6" />
          </button>
          <p className="text-gray-300 mt-4 text-sm">
            No obligation • 30-minute consultation • Immediate response
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center bg-red-600/20 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-200 mb-2">
            Emergency Support Available 24/7
          </h3>
          <p className="text-red-100">
            For urgent property or family matters requiring immediate attention
          </p>
        </div>
      </div>
    </section>
  )
}