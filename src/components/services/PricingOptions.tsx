//components/services/PricingOptions.tsx
import { Check, Star, ArrowRight } from 'lucide-react'

interface PricingPlan {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
}

export default function PricingOptions() {
  const plans: PricingPlan[] = [
    {
      name: "Pay-Per-Service",
      description: "Perfect for occasional needs and one-time projects",
      price: "Variable",
      period: "per service",
      features: [
        "No monthly commitment",
        "Pay only for services used",
        "Free initial consultation",
        "Basic progress reporting",
        "Email support",
        "48-hour response time",
        "Quality guarantee"
      ],
      buttonText: "Get Quote",
      buttonVariant: "secondary"
    },
    {
      name: "Monthly Retainer",
      description: "Ideal for ongoing property management and regular support",
      price: "KES 36,000",
      period: "per month",
      features: [
        "Dedicated account manager",
        "Unlimited consultations",
        "Priority service scheduling",
        "Weekly progress reports",
        "24/7 emergency support",
        "Photo/video documentation",
        "Monthly performance review",
        "Discounted service rates"
      ],
      popular: true,
      buttonText: "Start Retainer",
      buttonVariant: "primary"
    },
    {
      name: "Project Management",
      description: "Comprehensive oversight for major renovations and construction",
      price: "5-10%",
      period: "of project value",
      features: [
        "Full project management",
        "Contractor vetting & hiring",
        "Daily site supervision",
        "Budget monitoring & control",
        "Quality control inspections",
        "Real-time photo updates",
        "Material procurement",
        "Final handover documentation"
      ],
      buttonText: "Discuss Project",
      buttonVariant: "secondary"
    }
  ]

  const addOns = [
    { name: "Emergency Response Service", price: "KES 5,000/month", description: "24/7 emergency response guarantee" },
    { name: "Weekly Video Calls", price: "KES 8,000/month", description: "Regular video updates and consultations" },
    { name: "Document Management", price: "KES 3,000/month", description: "Digital filing and document organization" },
    { name: "Family Support Services", price: "KES 15,000/month", description: "Elder care and family assistance" }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible Pricing Options
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the pricing structure that works best for your needs. No hidden fees, complete transparency.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-gradient-to-b from-blue-600 to-green-600 shadow-2xl scale-105' 
                : 'bg-gray-800 shadow-lg'
            }`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  {plan.period}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-yellow-400' : 'text-green-400'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.buttonVariant === 'primary'
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                  : plan.popular
                    ? 'bg-white text-blue-900 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Optional Add-on Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">{addon.name}</h4>
                <div className="text-yellow-400 font-bold mb-2">{addon.price}</div>
                <p className="text-sm text-gray-300">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every client&apos;s situation is unique. Let&apos;s discuss your specific needs and create a tailored solution that fits your requirements and budget.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2">
            Schedule Custom Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}