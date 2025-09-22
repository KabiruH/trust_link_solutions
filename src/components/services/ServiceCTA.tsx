//components/services/ServiceCTA

import { ArrowRight, Phone, Mail, MessageCircle, Calendar } from 'lucide-react'

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Let's discuss your specific needs and create a customized service plan that gives you complete peace of mind about your Kenya interests.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">FREE</div>
                <div className="text-sm">Initial Consultation</div>
                <div className="text-xs text-gray-300">No obligation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">30min</div>
                <div className="text-sm">Discovery Call</div>
                <div className="text-xs text-gray-300">Understand your needs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">24hr</div>
                <div className="text-sm">Custom Proposal</div>
                <div className="text-xs text-gray-300">Tailored solution</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Call */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone Call</h3>
            <p className="text-gray-300 text-sm mb-4">
              Direct conversation with our team
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-sm font-semibold">
              Call Now
            </button>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-300 text-sm mb-4">
              Quick messaging and updates
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full text-sm font-semibold">
              Message Us
            </button>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm mb-4">
              Detailed project discussions
            </p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors w-full text-sm font-semibold">
              Send Email
            </button>
          </div>

          {/* Schedule Meeting */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Calendar className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Schedule</h3>
            <p className="text-gray-300 text-sm mb-4">
              Book a convenient time slot
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full text-sm font-semibold">
              Book Meeting
            </button>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-12">
          <button className="bg-yellow-400 text-black px-10 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition-colors shadow-2xl flex items-center gap-3 mx-auto">
            Start Your Free Consultation
            <ArrowRight className="h-6 w-6" />
          </button>
          <p className="text-gray-300 mt-4 text-sm">
            No commitment required • Expert guidance • Custom solution design
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-lg font-semibold mb-1">Active Clients</div>
            <div className="text-sm text-gray-300">Trusted by diaspora families worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-lg font-semibold mb-1">Satisfaction Rate</div>
            <div className="text-sm text-gray-300">Consistently exceeding expectations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
            <div className="text-lg font-semibold mb-1">Years Experience</div>
            <div className="text-sm text-gray-300">Proven track record of excellence</div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <h3 className="text-lg font-semibold mb-4">Ready to Talk?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-400" />
              <span>+254 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-400" />
              <span>info@trustlinksolutions.co.ke</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-yellow-400" />
              <span>Available on WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}