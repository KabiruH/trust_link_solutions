//components/services/ServiceProcess
import { MessageCircle, FileText, PlayCircle, CheckCircle } from 'lucide-react'

interface ProcessStep {
  icon: React.ReactElement
  title: string
  description: string
  duration: string
  details: string[]
}

export default function ServiceProcess() {
  const steps: ProcessStep[] = [
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Initial Consultation",
      description: "We understand your needs and develop a customized approach",
      duration: "30-60 minutes",
      details: [
        "Free initial consultation call",
        "Detailed needs assessment",
        "Service recommendation",
        "Custom proposal creation"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Service Agreement",
      description: "Clear terms, transparent pricing, and formal service agreement",
      duration: "1-2 business days",
      details: [
        "Detailed service contract",
        "Transparent pricing structure",
        "Communication protocols",
        "Performance standards"
      ]
    },
    {
      icon: <PlayCircle className="h-8 w-8 text-white" />,
      title: "Service Execution",
      description: "Professional service delivery with regular updates and monitoring",
      duration: "Ongoing",
      details: [
        "Professional service delivery",
        "Regular progress updates",
        "Photo/video documentation",
        "24/7 emergency support"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Quality Assurance",
      description: "Continuous monitoring, reporting, and service optimization",
      duration: "Continuous",
      details: [
        "Quality control inspections",
        "Client satisfaction surveys",
        "Service performance reviews",
        "Continuous improvement"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, systematic approach to delivering exceptional service quality and ensuring complete client satisfaction.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Duration */}
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Duration: {step.duration}
                    </div>
                    
                    {/* Details */}
                    <ul className="text-left space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 font-bold mt-0.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Quality Guarantee
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              We stand behind our work with comprehensive quality assurance measures and a satisfaction guarantee. 
              Your peace of mind is our priority.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">48hr</div>
                <div className="text-gray-700">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
