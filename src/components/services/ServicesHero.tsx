//components/services/servicesHero
import { MapPin, Phone } from 'lucide-react'

export default function ServicesHero() {
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
              <MapPin className="h-4 w-4 text-yellow-400" />
              <span>Comprehensive Services Across Kenya</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Professional property management and support services designed specifically for diaspora families managing interests in Kenya
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <div className="text-sm text-gray-200">Active Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-gray-200">Support Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">5+</div>
              <div className="text-sm text-gray-200">Years Experience</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 shadow-lg">
              <Phone className="h-5 w-5" />
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Pricing Options
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}