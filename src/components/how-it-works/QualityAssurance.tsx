//components//how-it-works/QualityAssuarance

import { Shield, CheckCircle, Star, Award, Camera, FileText } from 'lucide-react'

interface QualityMeasure {
  icon: React.ReactElement
  title: string
  description: string
  details: string[]
}

export default function QualityAssurance() {
  const qualityMeasures: QualityMeasure[] = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Multi-Point Inspections",
      description: "Regular quality checks throughout the project lifecycle",
      details: [
        "Pre-work site assessment",
        "Daily progress inspections", 
        "Weekly quality reviews",
        "Final completion inspection"
      ]
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "Photo Documentation",
      description: "Comprehensive visual documentation of all work",
      details: [
        "Before work begins photos",
        "Daily progress documentation",
        "Problem identification photos",
        "Final completion gallery"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Detailed Reporting",
      description: "Written reports tracking progress and quality metrics",
      details: [
        "Daily activity summaries",
        "Quality assessment reports",
        "Issue identification logs",
        "Final project documentation"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Satisfaction Guarantee",
      description: "We stand behind our work with comprehensive guarantees",
      details: [
        "100% satisfaction guarantee",
        "Free corrections if needed",
        "Extended warranty support",
        "Ongoing maintenance guidance"
      ]
    }
  ]

  const satisfactionMetrics = [
    { metric: "Client Satisfaction", value: "98%", description: "Based on post-project surveys" },
    { metric: "On-Time Completion", value: "95%", description: "Projects completed on schedule" },
    { metric: "Budget Adherence", value: "97%", description: "Projects within approved budget" },
    { metric: "Repeat Clients", value: "100%", description: "Clients who return for more services" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Assurance & Guarantees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards through systematic quality controls and comprehensive satisfaction guarantees.
          </p>
        </div>

        {/* Quality Measures */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityMeasures.map((measure, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {measure.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {measure.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {measure.description}
              </p>
              <ul className="space-y-2">
                {measure.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Our Quality Standards
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Standards */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Guarantee</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Work Quality</div>
                    <div className="text-sm text-gray-600">All work meets or exceeds industry standards and client specifications</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Timeline Adherence</div>
                    <div className="text-sm text-gray-600">Projects completed within agreed timeframes or early completion bonuses</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Budget Control</div>
                    <div className="text-sm text-gray-600">No surprise costs - all expenses approved in advance</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Communication</div>
                    <div className="text-sm text-gray-600">Regular updates and 24/7 availability for urgent matters</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Process */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quality Control Process</h4>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="font-medium text-gray-900">Initial Assessment</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">Detailed evaluation before work begins</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="font-medium text-gray-900">Ongoing Monitoring</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">Daily inspections and progress tracking</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="font-medium text-gray-900">Milestone Reviews</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">Comprehensive checks at key project stages</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="font-medium text-gray-900">Final Verification</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">Complete inspection before project handover</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              Our Track Record
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              These metrics reflect our commitment to excellence and client satisfaction across hundreds of completed projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {satisfactionMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold mb-2">{metric.metric}</div>
                <div className="text-sm text-blue-100">{metric.description}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-blue-100">
              Rated 4.9/5 stars by our clients • Certified quality management processes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}