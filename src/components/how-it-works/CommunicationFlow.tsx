//components/how-it-works/CommunicationFlow

import { MessageCircle, Phone, Mail, Camera, Clock, AlertTriangle } from 'lucide-react'

interface CommunicationMethod {
  icon: React.ReactElement
  title: string
  description: string
  frequency: string
  use_cases: string[]
}

export default function CommunicationFlow() {
  const communicationMethods: CommunicationMethod[] = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "WhatsApp Updates",
      description: "Quick daily updates and instant communication",
      frequency: "Daily",
      use_cases: [
        "Daily progress photos",
        "Quick status updates",
        "Immediate questions",
        "Urgent notifications"
      ]
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Scheduled Calls",
      description: "Regular video/phone calls for detailed discussions",
      frequency: "Weekly",
      use_cases: [
        "Weekly progress reviews",
        "Decision-making discussions",
        "Problem-solving sessions",
        "Planning next steps"
      ]
    },
    {
      icon: <Mail className="h-8 w-8 text-purple-600" />,
      title: "Detailed Reports",
      description: "Comprehensive written reports with documentation",
      frequency: "Weekly",
      use_cases: [
        "Comprehensive progress reports",
        "Financial summaries",
        "Quality inspection reports",
        "Project milestone updates"
      ]
    },
    {
      icon: <Camera className="h-8 w-8 text-yellow-600" />,
      title: "Photo/Video Documentation",
      description: "Visual progress tracking and quality verification",
      frequency: "Daily",
      use_cases: [
        "Before/during/after photos",
        "Quality inspection videos",
        "Problem identification",
        "Completion verification"
      ]
    }
  ]

  const emergencyProtocol = [
    "Immediate WhatsApp notification",
    "Follow-up phone call within 1 hour", 
    "Detailed email report within 24 hours",
    "Action plan and resolution steps"
  ]

  const timeZones = [
    { region: "Kenya (EAT)", time: "UTC+3", availability: "24/7" },
    { region: "USA East Coast", time: "UTC-5", availability: "6 AM - 10 PM EAT" },
    { region: "USA West Coast", time: "UTC-8", availability: "9 AM - 1 AM EAT" },
    { region: "UK/Europe", time: "UTC+0", availability: "3 AM - 9 PM EAT" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Communication & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed every step of the way with our multi-channel communication system designed for diaspora clients.
          </p>
        </div>

        {/* Communication Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communicationMethods.map((method, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {method.description}
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200 mb-4">
                <div className="text-xs text-gray-500 uppercase font-medium">Frequency</div>
                <div className="font-semibold text-gray-900">{method.frequency}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-medium mb-2">Use Cases</div>
                <ul className="space-y-1">
                  {method.use_cases.map((useCase, useCaseIndex) => (
                    <li key={useCaseIndex} className="text-xs text-gray-700 flex items-start gap-1">
                      <span className="text-green-500 font-bold mt-0.5">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Timeline */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Typical Communication Timeline
          </h3>
          
          <div className="grid md:grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-semibold text-gray-900 mb-2">{day}</div>
                  <div className="space-y-2">
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      WhatsApp Update
                    </div>
                    {(index === 0 || index === 4) && (
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Weekly Call
                      </div>
                    )}
                    {index === 6 && (
                      <div className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        Weekly Report
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Communication */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Emergency Protocol */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-900">Emergency Communication</h3>
            </div>
            <p className="text-red-700 mb-4">
              For urgent issues requiring immediate attention, our emergency protocol ensures rapid response.
            </p>
            <ul className="space-y-2">
              {emergencyProtocol.map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-red-800 text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Time Zone Coordination */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900">Time Zone Coordination</h3>
            </div>
            <p className="text-blue-700 mb-4">
              We work across time zones to ensure convenient communication for our global clients.
            </p>
            <div className="space-y-3">
              {timeZones.map((zone, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-blue-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-blue-900 text-sm">{zone.region}</div>
                      <div className="text-blue-600 text-xs">{zone.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-blue-600">Available</div>
                      <div className="font-semibold text-blue-900 text-xs">{zone.availability}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="bg-gray-900 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Customize Your Communication
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We adapt to your preferences. Choose how and when you want to receive updates based on your schedule and communication style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <MessageCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Frequency</h4>
              <p className="text-gray-300 text-sm">Daily, weekly, or milestone-based updates</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Timing</h4>
              <p className="text-gray-300 text-sm">Choose your preferred times for calls and updates</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Channels</h4>
              <p className="text-gray-300 text-sm">Select your preferred communication methods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}