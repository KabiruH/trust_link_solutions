//components/about/OurStory
import { Calendar, Home, Users, TrendingUp } from 'lucide-react'

export default function OurStory() {
  const milestones = [
    {
      year: "2017",
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "It All Started with a Friend",
      description: "A friend reached out for help with a house construction project back home in Kenya. What seemed like a simple favor became the foundation of something much bigger."
    },
    {
      year: "2018",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Word Spread Naturally",
      description: "That first successful project led to another request, then another. Friends and family members began asking for the same reliable, transparent support for their Kenya investments."
    },
    {
      year: "2019-2020",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Referrals Grew Our Network",
      description: "Satisfied clients referred us to their networks. Each successful project built our reputation and expanded our understanding of what diaspora families really needed."
    },
    {
      year: "2021-2025",
      icon: <Calendar className="h-6 w-6 text-yellow-600" />,
      title: "A Trusted Business Emerges",
      description: "What began as helping one friend has grown into TrustLink Solutions - a comprehensive service trusted by diaspora families across the globe for their Kenya interests."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple favor between friends to a trusted business serving diaspora families worldwide - 
            here&apos;s how TrustLink Solutions came to be.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-600 via-green-600 to-yellow-600"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <div className={`bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                      {index % 2 === 0 ? (
                        <>
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            {milestone.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                        </>
                      ) : (
                        <>
                          <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            {milestone.icon}
                          </div>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Continuation */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              The Heart of Our Story
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              What makes our story special isn&apos;t just the growth - it&apos;s that we&apos;ve never forgotten where we started. 
              Every client we serve gets the same personal attention and care that we gave to that first friend back in 2017. 
              We understand the challenges of managing important projects from thousands of miles away because we&apos;ve been 
              solving those exact problems from day one.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, TrustLink Solutions serves families across the United States, Canada, United Kingdom, and beyond. 
              But our approach remains the same: treat every project like we&apos;re helping a friend, because in many ways, we are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}