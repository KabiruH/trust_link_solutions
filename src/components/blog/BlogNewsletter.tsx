import { Mail, CheckCircle, TrendingUp, Users } from 'lucide-react'

export default function BlogNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <Mail className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Informed with Our Newsletter
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Get expert insights, market updates, and practical tips delivered to your inbox. 
              Join 500+ diaspora investors who rely on our weekly updates.
            </p>
          </div>

          {/* Newsletter Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Market Updates</h3>
              <p className="text-sm text-gray-300">Latest property prices, trends, and investment opportunities in Kenya</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Tips</h3>
              <p className="text-sm text-gray-300">Practical advice on property management, construction, and family support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Success Stories</h3>
              <p className="text-sm text-gray-300">Real client experiences and lessons learned from diaspora investments</p>
            </div>
          </div>

          {/* Newsletter Signup Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">Subscribe to Weekly Updates</h3>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-xs text-gray-300 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>

          {/* Newsletter Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
              <div className="text-sm text-gray-300">Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">Weekly</div>
              <div className="text-sm text-gray-300">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">Free</div>
              <div className="text-sm text-gray-300">Always</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <blockquote className="text-lg italic mb-4">
              &quot;The weekly newsletter has become essential reading. The market updates help me time my investments perfectly, and the tips have saved me thousands.&quot;
            </blockquote>
            <div className="text-center">
              <div className="font-semibold">Patricia K.</div>
              <div className="text-sm text-gray-300">Subscriber since 2023 • Chicago, IL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}