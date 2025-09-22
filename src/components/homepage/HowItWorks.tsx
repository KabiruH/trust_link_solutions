import { MessageCircle, ClipboardList, Wrench, FileCheck } from 'lucide-react'

interface Step {
  number: string
  icon: React.ReactElement
  title: string
  description: string
  details: string[]
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: "01",
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Initial Consultation",
      description: "We discuss your specific needs and develop a customized plan",
      details: [
        "Free 30-minute consultation call",
        "Assess your property/project requirements",
        "Discuss timeline and budget expectations",
        "Create detailed service proposal"
      ]
    },
    {
      number: "02",
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      title: "Planning & Preparation",
      description: "Detailed project planning with vendor selection and scheduling",
      details: [
        "Site assessment and documentation",
        "Vendor vetting and price comparison",
        "Create detailed project timeline",
        "Secure necessary permits/approvals"
      ]
    },
    {
      number: "03",
      icon: <Wrench className="h-8 w-8 text-white" />,
      title: "Execution & Management",
      description: "Professional oversight of all work with regular progress updates",
      details: [
        "Daily project supervision",
        "Photo/video progress updates",
        "Quality control inspections",
        "Real-time communication"
      ]
    },
    {
      number: "04",
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: "Completion & Documentation",
      description: "Final inspection, documentation, and handover of completed work",
      details: [
        "Comprehensive final inspection",
        "Complete photo documentation",
        "All receipts and warranties",
        "Maintenance recommendations"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures your projects are completed to your exact specifications, on time and within budget.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0 flex items-center gap-6">
                <div className="text-6xl font-bold text-gray-700">
                  {step.number}
                </div>
                <div className="bg-blue-600 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  {step.description}
                </p>
                <ul className="grid md:grid-cols-2 gap-2 max-w-2xl mx-auto lg:mx-0">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-400 flex items-start gap-2">
                      <span className="text-yellow-400 font-bold mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-100 mb-6">
              Schedule your free consultation today and see how we can help manage your Kenya interests.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}