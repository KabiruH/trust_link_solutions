import { Star, Quote, Users } from 'lucide-react'

export default function TestimonialsHero() {
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
              <Star className="h-4 w-4 text-yellow-400" />
              <span>4.9/5 Rating • 100% Client Satisfaction</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Client <span className="text-yellow-400">Stories</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Real experiences from diaspora families who trusted TrustLink Solutions with their most important investments in Kenya.
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Quote className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
              <div className="text-sm text-gray-200">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400 mb-1">4.9</div>
              <div className="text-sm text-gray-200">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400 mb-1">85%</div>
              <div className="text-sm text-gray-200">Return Clients</div>
            </div>
          </div>
          
          {/* Featured Quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <Quote className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
              &quot;TrustLink Solutions didn&apos;t just manage our property - they gave us peace of mind. Every update, every photo, every call showed us we made the right choice.&quot;
            </blockquote>
            <div className="text-center">
              <div className="font-semibold">Sarah K.</div>
              <div className="text-sm text-gray-300">Dallas, TX • Property Renovation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}