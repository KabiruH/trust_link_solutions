import { MessageCircle, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Start Your Journey Together
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Take the first step towards successful property management in Kenya. 
            Our team is ready to provide the support and expertise you need.
          </p>
        </div>

        {/* Main Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
            <MessageCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">WhatsApp Chat</h3>
            <p className="text-gray-300 mb-6">
              Start an instant conversation. Share photos, ask questions, and get immediate responses.
            </p>
            <div className="text-xl font-bold text-yellow-400 mb-4">
              +254 700 095 477
            </div>
            <a
              href="https://wa.me/254700095477"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Open WhatsApp
            </a>
          </div>

          {/* Phone Call */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
            <Phone className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Direct Phone Call</h3>
            <p className="text-gray-300 mb-6">
              Speak directly with our team for detailed consultations and immediate assistance.
            </p>
            <div className="text-xl font-bold text-yellow-400 mb-4">
              +254 700 095 477
            </div>
            <a
              href="tel:+254700095477"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
            <Mail className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Email Discussion</h3>
            <p className="text-gray-300 mb-6">
              Send detailed project information and receive comprehensive proposals and documentation.
            </p>
            <div className="text-lg font-bold text-yellow-400 mb-4 break-all">
              info@trustlinksolutions.co.ke
            </div>
            <a
              href="mailto:info@trustlinksolutions.co.ke"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">What Happens Next?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here&apos;s what you can expect when you reach out to us:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold mb-2">Immediate Response</h4>
              <p className="text-gray-300 text-sm">We acknowledge your message within 1 hour and schedule a convenient time to discuss your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold mb-2">Free Consultation</h4>
              <p className="text-gray-300 text-sm">We provide a detailed consultation to understand your project and offer expert recommendations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold mb-2">Custom Proposal</h4>
              <p className="text-gray-300 text-sm">You receive a detailed proposal with timeline, pricing, and our recommended approach within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Contact Guarantee */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Our Contact Guarantee</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">No pressure sales</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Free consultation</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Expert guidance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing family of diaspora clients who trust TrustLink Solutions with their Kenya investments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254700095477"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-10 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              Start WhatsApp Chat
              <ArrowRight className="h-6 w-6" />
            </a>
            <a
              href="tel:+254700095477"
              className="border-2 border-white text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-3"
            >
              <Phone className="h-6 w-6" />
              Call +254 700 095 477
            </a>
          </div>
        </div>

        {/* Contact Information Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-1">WhatsApp & Phone</div>
              <div className="text-gray-300">+254 700 095 477</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-gray-300">info@trustlinksolutions.co.ke</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Response Time</div>
              <div className="text-gray-300">Within 1 hour</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}