import { Home, Users, Truck, Settings } from 'lucide-react'
import { JSX } from 'react'

interface Service {
  icon: JSX.Element
  title: string
  description: string
  features: string[]
}

export default function ServicesOverview(): JSX.Element {
  const services: Service[] = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Property & Home Management",
      description: "Complete oversight of your property investments and family homes",
      features: [
        "Repairs & maintenance coordination",
        "Security & fencing projects", 
        "Renovations & improvements",
        "Regular property inspections"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Vendor Coordination",
      description: "Access to our trusted network of local service providers",
      features: [
        "Vetted contractors & artisans",
        "Competitive price negotiations",
        "Quality supervision",
        "Project timeline management"
      ]
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-600" />,
      title: "Errands & Logistics",
      description: "Handle all your local tasks with precision and reliability",
      features: [
        "Bill payments & banking",
        "Deliveries & collections",
        "Government office visits",
        "Emergency response coordination"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Tailored Solutions",
      description: "Custom support designed around your unique requirements",
      features: [
        "Family support services",
        "Investment project management",
        "Market research & sourcing",
        "Personal assistance needs"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed specifically for diaspora clients managing interests in Kenya
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}