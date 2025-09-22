//components/how-it-works/ProcessOverview
import { MessageCircle, ClipboardList, Wrench, CheckCircle, ArrowRight } from 'lucide-react'

interface ProcessStep {
  number: string
  icon: React.ReactElement
  title: string
  description: string
  duration: string
}

export default function ProcessOverview() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Initial Consultation",
      description: "We discuss your needs and create a customized plan",
      duration: "30-60 mins"
    },
    {
      number: "02", 
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      title: "Planning & Setup",
      description: "Detailed planning with vendor selection and scheduling",
      duration: "1-3 days"
    },
    {
      number: "03",
      icon: <Wrench className="h-8 w-8 text-white" />,
      title: "Execution",
      description: "Professional oversight with regular progress updates",
      duration: "Ongoing"
    },
    {
      number: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Completion",
      description: "Final inspection, documentation, and handover",
      duration: "1-2 days"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that ensures quality results while keeping you informed every step of the way.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 rounded-full"></div>
          
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Duration */}
                    <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      Duration: {step.duration}
                    </div>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Clear Communication</h4>
              <p className="text-gray-600 text-sm">Regular updates ensure you&apos;re always informed about progress and any decisions needed.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Detailed Planning</h4>
              <p className="text-gray-600 text-sm">Thorough preparation prevents issues and keeps projects on time and within budget.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">Multiple checkpoints ensure work meets your standards before final completion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}