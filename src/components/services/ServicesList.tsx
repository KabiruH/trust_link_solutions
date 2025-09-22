//components/services/servicesList
import { Home, Users, Truck, Settings, Wrench, Shield } from 'lucide-react'

interface Service {
  icon: React.ReactElement
  title: string
  description: string
  features: string[]
  pricing: string
}

export default function ServicesList() {
  const services: Service[] = [
    {
      icon: <Home className="h-10 w-10 text-blue-600" />,
      title: "Property & Home Management",
      description: "Complete oversight and maintenance of your property investments and family homes throughout Kenya.",
      features: [
        "Regular property inspections and reports",
        "Maintenance coordination and oversight",
        "Security system management and monitoring",
        "Landscaping and groundskeeping supervision",
        "Utility management and bill payments",
        "Tenant management and rent collection",
        "Emergency repair coordination",
        "Property improvement project management"
      ],
      pricing: "From KES 15,000/month"
    },
    {
      icon: <Wrench className="h-10 w-10 text-green-600" />,
      title: "Renovation & Construction",
      description: "Professional project management for renovations, extensions, and new construction projects.",
      features: [
        "Architectural plan review and approval",
        "Contractor vetting and selection",
        "Daily construction supervision",
        "Quality control inspections",
        "Material procurement and delivery",
        "Progress photo and video updates",
        "Budget tracking and cost control",
        "Final handover and documentation"
      ],
      pricing: "5-10% of project value"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Vendor Coordination",
      description: "Access to our trusted network of local service providers and contractors across Kenya.",
      features: [
        "Pre-vetted contractor database",
        "Competitive quote comparison",
        "Service provider negotiations",
        "Work quality supervision",
        "Payment processing and verification",
        "Performance monitoring and reviews",
        "Dispute resolution support",
        "Long-term vendor relationships"
      ],
      pricing: "10-15% service fee"
    },
    {
      icon: <Truck className="h-10 w-10 text-orange-600" />,
      title: "Errands & Logistics",
      description: "Handle all your local tasks and administrative needs with precision and reliability.",
      features: [
        "Government office procedures",
        "Banking and financial services",
        "Document collection and delivery",
        "Shopping and procurement",
        "Medical appointment coordination",
        "Transportation arrangements",
        "Emergency response services",
        "Personal assistance tasks"
      ],
      pricing: "KES 3,000-8,000 per task"
    },
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Family Support Services",
      description: "Comprehensive care and support for your family members residing in Kenya.",
      features: [
        "Elder care coordination and monitoring",
        "Medical appointment scheduling",
        "Prescription pickup and delivery",
        "Emergency medical response",
        "Regular wellness check-ins",
        "Transportation for appointments",
        "Home healthcare coordination",
        "Family communication facilitation"
      ],
      pricing: "KES 20,000-50,000/month"
    },
    {
      icon: <Settings className="h-10 w-10 text-indigo-600" />,
      title: "Custom Solutions",
      description: "Tailored support services designed around your unique requirements and circumstances.",
      features: [
        "Business operation oversight",
        "Investment property management",
        "Agricultural project supervision",
        "Legal document processing",
        "Educational institution liaison",
        "Immigration assistance support",
        "Estate planning coordination",
        "Specialized project management"
      ],
      pricing: "Custom quote based on scope"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From property management to family support, we provide end-to-end solutions for all your Kenya-based needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-1 text-sm">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-500">Starting from</div>
                  <div className="text-lg font-semibold text-blue-600">{service.pricing}</div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Every client&apos;s needs are unique. We&apos;ll work with you to create a personalized service package that fits your specific requirements and budget.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
              Discuss Custom Package
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}