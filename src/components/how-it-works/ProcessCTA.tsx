//components/how-it-works/ProcessCTA
import { ArrowRight, Phone, Calendar, MessageCircle, CheckCircle } from 'lucide-react'

export default function ProcessCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Our Process?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Join dozens of satisfied diaspora clients who trust our proven process to manage their Kenya interests with complete transparency and professional excellence.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-yellow-400">FREE</div>
                <div className="text-sm">Consultation</div>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-yellow-400">NO</div>
                <div className="text-sm">Obligations</div>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-yellow-400">24HR</div>
                <div className="text-sm">Response</div>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-yellow-400">100%</div>
                <div className="text-sm">Transparent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">1. Schedule Consultation</h3>
            <p className="text-gray-300 mb-4">
              Book your free 30-minute consultation to discuss your specific needs and get expert recommendations.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full font-semibold">
              Book Free Call
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <Calendar className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">2. Get Custom Plan</h3>
            <p className="text-gray-300 mb-4">
              Receive a detailed proposal with timeline, pricing, and our recommended approach for your project.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full font-semibold">
              Review Process
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <MessageCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">3. Start Your Project</h3>
            <p className="text-gray-300 mb-4">
              Begin with confidence knowing every step is planned, monitored, and reported with complete transparency.
            </p>
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors w-full font-semibold">
              Get Started
            </button>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-12">
          <button className="bg-yellow-400 text-black px-10 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition-colors shadow-2xl flex items-center gap-3 mx-auto">
            Start Your Free Consultation Today
            <ArrowRight className="h-6 w-6" />
          </button>
          <p className="text-gray-300 mt-4 text-sm">
            No pressure, no commitment • Expert guidance • Custom solution design
          </p>
        </div>

        {/* Process Benefits Summary */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Why Clients Choose Our Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="font-semibold mb-1">Satisfaction Rate</div>
              <div className="text-sm text-gray-300">Clients rate our process as excellent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="font-semibold mb-1">Projects Completed</div>
              <div className="text-sm text-gray-300">Successful projects using our process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="font-semibold mb-1">Support Available</div>
              <div className="text-sm text-gray-300">Always available when you need us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="font-semibold mb-1">Transparent</div>
              <div className="text-sm text-gray-300">Complete visibility into progress</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <h4 className="text-lg font-semibold mb-4">Have Questions About Our Process?</h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-400" />
              <span>+254 700 095 477</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-yellow-400" />
              <span>Available on WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-yellow-400" />
              <span>Schedule at your convenience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}