import { Star, Quote, MapPin, Home, Users, Wrench } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  role: string
  project: string
  rating: number
  content: string
  projectType: string
  duration: string
  outcome: string
  icon: React.ReactElement
}

export default function ClientStories() {
  const testimonials: Testimonial[] = [
    {
      name: "Michael O.",
      location: "Toronto, Canada",
      role: "Diaspora Investor",
      project: "Multi-unit Rental Property",
      rating: 5,
      content: "I was skeptical about managing a construction project from Canada, but TrustLink Solutions exceeded every expectation. The daily photos, weekly video calls, and transparent budget tracking made me feel like I was right there overseeing everything myself.",
      projectType: "Construction Management",
      duration: "8 months",
      outcome: "Completed on time and 5% under budget",
      icon: <Home className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Grace M.",
      location: "London, UK",
      role: "Family Representative",
      project: "Elder Care & Property Maintenance",
      rating: 5,
      content: "My elderly parents needed ongoing support in Kisumu while I live in London. TrustLink Solutions became like family - coordinating medical appointments, home repairs, and providing regular check-ins. The peace of mind is priceless.",
      projectType: "Family Support",
      duration: "Ongoing (2+ years)",
      outcome: "Parents well-cared for and happy",
      icon: <Users className="h-6 w-6 text-green-600" />
    },
    {
      name: "James K.",
      location: "Atlanta, GA",
      role: "Property Owner",
      project: "Vacation Home Renovation",
      rating: 5,
      content: "The renovation of our family vacation home in Mombasa was handled flawlessly. TrustLink Solutions coordinated everything - from permits to final inspection. Their network of contractors delivered quality work at fair prices.",
      projectType: "Renovation Management",
      duration: "4 months",
      outcome: "Beautiful renovation, increased property value by 40%",
      icon: <Wrench className="h-6 w-6 text-orange-600" />
    },
    {
      name: "Faith N.",
      location: "Seattle, WA",
      role: "First-time Property Buyer",
      project: "Land Purchase & Development",
      rating: 5,
      content: "As a first-time property buyer in Kenya, I was overwhelmed by the process. TrustLink Solutions guided me through everything - from finding the right land to managing the development. Their expertise saved me from costly mistakes.",
      projectType: "Property Development",
      duration: "12 months",
      outcome: "Successfully developed and ready for rental",
      icon: <MapPin className="h-6 w-6 text-purple-600" />
    },
    {
      name: "David M.",
      location: "Melbourne, Australia",
      role: "Investment Manager",
      project: "Commercial Property Acquisition",
      rating: 5,
      content: "Managing commercial property investments from Australia seemed impossible until I found TrustLink Solutions. Their detailed market analysis, vendor management, and regular reporting helped me make informed decisions and maximize returns.",
      projectType: "Commercial Investment",
      duration: "6 months",
      outcome: "ROI increased by 25% in first year",
      icon: <Home className="h-6 w-6 text-indigo-600" />
    },
    {
      name: "Rose W.",
      location: "Phoenix, AZ",
      role: "Retiree",
      project: "Retirement Home Construction",
      rating: 5,
      content: "Building our retirement home in Kenya while living in Arizona was made stress-free by TrustLink Solutions. Every detail was handled professionally, from architectural approval to final landscaping. We couldn&apos;t be happier with the result.",
      projectType: "New Construction",
      duration: "10 months",
      outcome: "Dream retirement home completed perfectly",
      icon: <Home className="h-6 w-6 text-pink-600" />
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are genuine experiences from diaspora families who trusted us with their Kenya investments. Every story represents real results and lasting relationships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {testimonial.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              {/* Project Details */}
              <div className="border-t pt-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Project:</span>
                    <span className="text-gray-600 ml-1">{testimonial.project}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Duration:</span>
                    <span className="text-gray-600 ml-1">{testimonial.duration}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="font-medium text-gray-900 text-sm">Outcome:</span>
                  <span className="text-green-600 ml-1 text-sm font-medium">{testimonial.outcome}</span>
                </div>
                
                {/* Project Type Badge */}
                <div className="mt-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join these satisfied clients and experience the peace of mind that comes with professional, transparent project management.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}