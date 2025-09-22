import { Camera, FileText, Network, DollarSign, Clock, Shield } from 'lucide-react'

interface Benefit {
  icon: React.ReactElement
  title: string
  description: string
}

export default function WhyChooseUs() {
  const benefits: Benefit[] = [
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "Transparent Reporting",
      description: "Regular photo updates, detailed receipts, and comprehensive progress reports for complete visibility into your projects."
    },
    {
      icon: <Network className="h-8 w-8 text-green-600" />,
      title: "Strong Local Network",
      description: "Established relationships with trusted contractors, service providers, and vendors across Kenya for quality results."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-600" />,
      title: "Flexible Pricing",
      description: "Commission-based or monthly retainer options available. Pay only for services you need, when you need them."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Diaspora Trusted",
      description: "Proven track record with clients in the U.S., Canada, UK, and other countries. We understand your unique challenges."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Timely Communication",
      description: "Regular updates and quick response times. We work across time zones to keep you informed and involved."
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Detailed Documentation",
      description: "Comprehensive records of all activities, expenses, and communications for your peace of mind and records."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TrustLink Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges of managing property and projects from abroad. Here's why diaspora clients trust us with their most important assets.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Trusted by Diaspora Families Worldwide
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Properties Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}