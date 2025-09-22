//components/how-it-works/DetailedSteps
import { MessageCircle, ClipboardList, Wrench, CheckCircle, Phone, Camera, FileText, Users } from 'lucide-react'

interface DetailedStep {
  number: string
  icon: React.ReactElement
  title: string
  description: string
  duration: string
  activities: string[]
  deliverables: string[]
  yourRole: string[]
}

export default function DetailedSteps() {
  const steps: DetailedStep[] = [
    {
      number: "01",
      icon: <MessageCircle className="h-10 w-10 text-white" />,
      title: "Initial Consultation & Assessment",
      description: "We start with a comprehensive discussion to understand your exact needs, timeline, and budget.",
      duration: "30-60 minutes",
      activities: [
        "Free consultation call via phone/video",
        "Detailed needs assessment questionnaire",
        "Property/project site evaluation (if needed)",
        "Budget and timeline discussion",
        "Service recommendation development"
      ],
      deliverables: [
        "Detailed service proposal",
        "Transparent pricing breakdown",
        "Project timeline estimate", 
        "Communication plan"
      ],
      yourRole: [
        "Share your specific requirements",
        "Provide property/project details",
        "Set expectations and preferences",
        "Ask any questions you have"
      ]
    },
    {
      number: "02",
      icon: <ClipboardList className="h-10 w-10 text-white" />,
      title: "Planning & Preparation",
      description: "Detailed project planning with vendor selection, scheduling, and all necessary preparations.",
      duration: "1-3 business days",
      activities: [
        "Site assessment and documentation",
        "Vendor vetting and quote comparison",
        "Material sourcing and procurement",
        "Permit applications (if required)",
        "Detailed project schedule creation",
        "Risk assessment and mitigation planning"
      ],
      deliverables: [
        "Comprehensive project plan",
        "Vendor selection and contracts",
        "Material specifications and costs",
        "Detailed timeline with milestones",
        "Quality control checklist"
      ],
      yourRole: [
        "Review and approve project plan",
        "Make final vendor selections",
        "Provide any additional requirements",
        "Sign service agreement"
      ]
    },
    {
      number: "03",
      icon: <Wrench className="h-10 w-10 text-white" />,
      title: "Execution & Management",
      description: "Professional project oversight with daily supervision and regular communication.",
      duration: "Varies by project scope",
      activities: [
        "Daily on-site supervision",
        "Quality control inspections",
        "Vendor coordination and management",
        "Problem solving and decision making",
        "Progress documentation",
        "Budget monitoring and reporting"
      ],
      deliverables: [
        "Daily photo/video updates",
        "Weekly progress reports",
        "Quality inspection reports",
        "Expense tracking and receipts",
        "Issue resolution updates"
      ],
      yourRole: [
        "Review progress updates",
        "Approve major decisions",
        "Provide feedback and direction",
        "Stay available for urgent matters"
      ]
    },
    {
      number: "04",
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Completion & Handover",
      description: "Final inspection, comprehensive documentation, and formal project handover.",
      duration: "1-2 business days",
      activities: [
        "Comprehensive final inspection",
        "Quality assurance verification",
        "Documentation compilation",
        "Vendor payment finalization",
        "Warranty collection and organization",
        "Maintenance recommendations"
      ],
      deliverables: [
        "Final inspection report",
        "Complete photo documentation",
        "All receipts and warranties",
        "Maintenance schedule",
        "Vendor contact information",
        "Project completion certificate"
      ],
      yourRole: [
        "Review final deliverables",
        "Provide project feedback",
        "Approve final payments",
        "Plan ongoing maintenance (if needed)"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Process Breakdown
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here&apos;s exactly what happens at each stage of your project, what you can expect from us, and what we&apos;ll need from you.
          </p>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Step Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex-grow text-white">
                    <div className="text-sm font-medium opacity-90">Step {step.number}</div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-blue-100 mt-1">{step.description}</p>
                  </div>
                  <div className="text-right text-white">
                    <div className="text-sm opacity-90">Duration</div>
                    <div className="font-semibold">{step.duration}</div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* What We Do */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">What We Do</h4>
                    </div>
                    <ul className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-blue-600 font-bold mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You Get */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">What You Get</h4>
                    </div>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-600 font-bold mt-1">•</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Your Role */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="h-5 w-5 text-yellow-600" />
                      <h4 className="font-semibold text-gray-900">Your Role</h4>
                    </div>
                    <ul className="space-y-2">
                      {step.yourRole.map((role, roleIndex) => (
                        <li key={roleIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-yellow-600 font-bold mt-1">•</span>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <Camera className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              Complete Transparency Guarantee
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Every step of our process is documented with photos, reports, and regular communication. 
              You&apos;ll never wonder what&apos;s happening with your project - complete visibility is guaranteed.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">Daily</div>
                <div className="text-sm">Photo Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">Weekly</div>
                <div className="text-sm">Progress Reports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm">Communication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}