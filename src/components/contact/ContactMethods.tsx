import { MessageCircle, Phone, Mail, Clock, Globe, Shield } from 'lucide-react'

export default function ContactMethods() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-12 w-12 text-green-600" />,
      title: "WhatsApp",
      subtitle: "Fastest Response",
      description: "Send us a message on WhatsApp for instant communication. Perfect for quick questions, photo sharing, and real-time updates.",
      number: "+254 700 095 477",
      action: "Message on WhatsApp",
      link: "https://wa.me/254700095477",
      features: [
        "Instant messaging",
        "Photo and video sharing", 
        "Voice messages",
        "Read receipts",
        "Available 24/7"
      ],
      responseTime: "Within 1 hour",
      color: "green"
    },
    {
      icon: <Phone className="h-12 w-12 text-blue-600" />,
      title: "Phone Call",
      subtitle: "Direct Conversation",
      description: "Call us directly for detailed discussions, consultations, and immediate assistance with your projects.",
      number: "+254 700 095 477",
      action: "Call Now",
      link: "tel:+254700095477",
      features: [
        "Voice consultations",
        "Detailed discussions",
        "Immediate assistance",
        "Project planning",
        "Emergency support"
      ],
      responseTime: "Immediate",
      color: "blue"
    },
    {
      icon: <Mail className="h-12 w-12 text-purple-600" />,
      title: "Email",
      subtitle: "Detailed Inquiries",
      description: "Send us an email for comprehensive project details, documentation, quotes, and formal communications.",
      number: "info@trustlinksolutions.co.ke",
      action: "Send Email",
      link: "mailto:info@trustlinksolutions.co.ke",
      features: [
        "Detailed project discussions",
        "Document sharing",
        "Formal quotes",
        "Written records",
        "File attachments"
      ],
      responseTime: "Within 24 hours",
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'border-green-200 hover:border-green-300 hover:shadow-green-100',
      blue: 'border-blue-200 hover:border-blue-300 hover:shadow-blue-100',
      purple: 'border-purple-200 hover:border-purple-300 hover:shadow-purple-100'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getButtonClasses = (color: string) => {
    const colors = {
      green: 'bg-green-600 hover:bg-green-700',
      blue: 'bg-blue-600 hover:bg-blue-700', 
      purple: 'bg-purple-600 hover:bg-purple-700'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer multiple ways to connect with us. Pick the method that works best for your needs and communication style.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className={`bg-white border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${getColorClasses(method.color)}`}>
              {/* Icon and Header */}
              <div className="text-center mb-6">
                <div className="inline-flex p-4 bg-gray-50 rounded-2xl mb-4">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {method.title}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {method.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {method.description}
              </p>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Contact:</div>
                  <div className="font-semibold text-gray-900 break-all">
                    {method.number}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Response time: {method.responseTime}
                </span>
              </div>

              {/* CTA Button */}
              <a
                href={method.link}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className={`w-full text-white px-6 py-4 rounded-xl font-semibold transition-colors text-center block ${getButtonClasses(method.color)}`}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose TrustLink Solutions?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">We respond to all inquiries promptly, typically within 1 hour for WhatsApp messages</p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Global Availability</h4>
              <p className="text-gray-600 text-sm">We work across time zones to accommodate our diaspora clients worldwide</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Secure Communication</h4>
              <p className="text-gray-600 text-sm">All your information is handled with complete confidentiality and security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}