import { Users, Network, Shield, Clock } from 'lucide-react'

export default function TeamApproach() {
  const teamStrengths = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Local Expertise",
      description: "Deep understanding of Kenya&apos;s construction industry, regulations, and cultural nuances.",
      details: ["8+ years in Kenya property management", "Established relationships across major cities", "Knowledge of local regulations and permits"]
    },
    {
      icon: <Network className="h-8 w-8 text-green-600" />,
      title: "Trusted Network",
      description: "Carefully vetted contractors, suppliers, and service providers across Kenya.",
      details: ["200+ verified professionals in our network", "Regular performance monitoring", "Quality-focused partnerships"]
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Diaspora Understanding",
      description: "Personal experience with the challenges of managing projects from abroad.",
      details: ["Understand time zone challenges", "Know the importance of clear communication", "Appreciate the trust you&apos;re placing in us"]
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-600" />,
      title: "Dedicated Support",
      description: "Committed to being available when you need us, across different time zones.",
      details: ["24/7 emergency support available", "Flexible communication schedules", "Multiple contact methods"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine local expertise with global perspective to deliver exceptional results for our diaspora clients.
          </p>
        </div>

        {/* Team Strengths */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamStrengths.map((strength, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {strength.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {strength.description}
                </p>
              </div>
              <ul className="space-y-2">
                {strength.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How We Work */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            How We Work Together
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Commitment to You</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Personal Attention</div>
                    <div className="text-sm text-gray-600">Every project gets dedicated focus, just like we&apos;re helping family</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Clear Communication</div>
                    <div className="text-sm text-gray-600">Regular updates in your preferred format and schedule</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Quality Assurance</div>
                    <div className="text-sm text-gray-600">Multiple checkpoints ensure work meets your standards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What Makes Us Different</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900 mb-2">Organic Growth</div>
                  <div className="text-sm text-gray-600">
                    100% of our growth has come from referrals - a testament to client satisfaction
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900 mb-2">Personal Experience</div>
                  <div className="text-sm text-gray-600">
                    We understand diaspora challenges because we&apos;ve lived and solved them
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-900 mb-2">Long-term Relationships</div>
                  <div className="text-sm text-gray-600">
                    Many clients return for multiple projects - we&apos;re partners, not just vendors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}