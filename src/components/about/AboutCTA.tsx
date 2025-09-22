import { ArrowRight, Phone, MessageCircle, Calendar, Heart } from 'lucide-react'

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Become Part of Our Story?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Join the growing family of diaspora clients who trust TrustLink Solutions with their most important investments. 
            Let&apos;s write the next chapter together.
          </p>
        </div>

        {/* Story Connection */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <Heart className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              From Friend to Friend
            </h3>
            <p className="text-blue-100 leading-relaxed">
              What started as helping one friend in 2017 has grown into a trusted network of satisfied clients worldwide. 
              When you work with us, you&apos;re not just hiring a service - you&apos;re joining a community built on trust, 
              transparency, and genuine care for your success.
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Start with a Call</h3>
            <p className="text-gray-300 text-sm mb-4">
              Let&apos;s have a conversation about your Kenya interests and how we can help
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full font-semibold">
              Schedule Call
            </button>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quick Message</h3>
            <p className="text-gray-300 text-sm mb-4">
              Send us a WhatsApp message and we&apos;ll respond within hours
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full font-semibold">
              Message Us
            </button>
          </div>

          {/* Meeting */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Calendar className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Book Meeting</h3>
            <p className="text-gray-300 text-sm mb-4">
              Schedule a detailed consultation at a time that works for you
            </p>
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors w-full font-semibold">
              Book Now
            </button>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-12">
          <button className="bg-yellow-400 text-black px-10 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition-colors shadow-2xl flex items-center gap-3 mx-auto">
            Start Your Journey with Us
            <ArrowRight className="h-6 w-6" />
          </button>
          <p className="text-gray-300 mt-4 text-sm">
            Free consultation • No obligations • Same personal care since 2017
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Join Our Growing Family
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">2017</div>
              <div className="font-semibold mb-1">Our Beginning</div>
              <div className="text-sm text-gray-300">Started with one friend&apos;s project</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="font-semibold mb-1">Projects Completed</div>
              <div className="text-sm text-gray-300">Each one treated like family</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="font-semibold mb-1">Referral Growth</div>
              <div className="text-sm text-gray-300">Every client came through referrals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">Global</div>
              <div className="font-semibold mb-1">Reach</div>
              <div className="text-sm text-gray-300">Serving diaspora worldwide</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <h4 className="text-lg font-semibold mb-4">Ready to Learn More About Our Story?</h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-400" />
              <span>+254 700 095 477</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-yellow-400" />
              <span>info@trustlinksolutions.co.ke</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-yellow-400" />
              <span>Building trust since 2017</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}