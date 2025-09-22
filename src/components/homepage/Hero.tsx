import { ArrowRight, MapPin, Shield, Users } from 'lucide-react'
import { JSX } from 'react'

export default function Hero(): JSX.Element {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full text-center pt-24 pb-12">
          {/* Brand */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Trust</span>
              <span className="text-yellow-400">Link</span>
              <span className="text-white"> Solutions</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg flex-wrap">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>Reliable Local Management & Support Services in Kenya</span>
              <span className="text-2xl">🇰🇪</span>
            </div>
          </div>

          {/* Main Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 leading-relaxed">
              Professional on-the-ground support to ensure your property, projects, and family needs in Kenya run smoothly while you're abroad
            </h2>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 justify-center md:justify-center">
                <Shield className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg">Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-center">
                <Users className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg">Strong Local Network</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-center">
                <MapPin className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                <span className="text-lg">Trusted by Diaspora</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 shadow-lg">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}