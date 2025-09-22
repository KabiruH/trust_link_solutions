import { MapPin, Heart, Shield, Clock } from 'lucide-react'

export default function WhyWeExist() {
  const challenges = [
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      challenge: "Distance Makes Everything Harder",
      description: "Managing property and projects from thousands of miles away creates uncertainty and stress."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      challenge: "Finding Trustworthy People",
      description: "Without local connections, it&apos;s difficult to find reliable contractors and service providers."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      challenge: "Time Zone Complications",
      description: "Coordinating across different time zones makes communication and project management challenging."
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      challenge: "Family Responsibilities",
      description: "Caring for elderly parents or managing family properties while living abroad creates emotional strain."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why We Exist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through our own journey and countless client experiences, we&apos;ve identified the real challenges 
            diaspora families face when managing interests back home.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {challenges.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.challenge}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Solution */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              We Bridge the Distance
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold mb-4">What We Understand</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <span>The anxiety of not knowing what&apos;s happening with your investments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <span>The frustration of unreliable communication and poor quality work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <span>The responsibility of caring for family while building your life abroad</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">How We Help</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <span>Provide complete transparency with regular photo and video updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <span>Connect you with our trusted network of verified professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold mt-1">•</span>
                    <span>Give you peace of mind so you can focus on your life and career</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}