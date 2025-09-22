import { Star, Quote } from 'lucide-react'
import { JSX } from 'react'

interface Testimonial {
  name: string
  location: string
  role: string
  content: string
  rating: number
  project: string
}

export default function Testimonials(): JSX.Element {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah K.",
      location: "Dallas, TX",
      role: "Property Owner",
      content: "TrustLink Solutions transformed how I manage my family property in Nairobi. The regular photo updates and transparent reporting gave me complete peace of mind. They handled everything from major renovations to routine maintenance with exceptional professionalism.",
      rating: 5,
      project: "Complete Home Renovation"
    },
    {
      name: "Michael O.",
      location: "Toronto, Canada",
      role: "Diaspora Investor",
      content: "Finding reliable contractors in Kenya from abroad was my biggest challenge. TrustLink's network of vetted professionals and their hands-on project management saved me both time and money. Every project was completed on schedule and within budget.",
      rating: 5,
      project: "Multi-unit Property Development"
    },
    {
      name: "Grace M.",
      location: "London, UK",
      role: "Family Representative",
      content: "When my elderly parents needed support in Kisumu, TrustLink Solutions stepped in seamlessly. From coordinating medical appointments to home maintenance, they treated my family like their own. I couldn't ask for better care and communication.",
      rating: 5,
      project: "Elder Care Coordination"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what diaspora families are saying about their experience with TrustLink Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Project */}
              <div className="bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full inline-block mb-4">
                {testimonial.project}
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonial.role} • {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Trusted Across the Diaspora
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🇺🇸</div>
              <div className="font-semibold text-gray-900">United States</div>
              <div className="text-sm text-gray-600">25+ Active Clients</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🇨🇦</div>
              <div className="font-semibold text-gray-900">Canada</div>
              <div className="text-sm text-gray-600">15+ Active Clients</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🇬🇧</div>
              <div className="font-semibold text-gray-900">United Kingdom</div>
              <div className="text-sm text-gray-600">12+ Active Clients</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🌍</div>
              <div className="font-semibold text-gray-900">Other Countries</div>
              <div className="text-sm text-gray-600">8+ Active Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}