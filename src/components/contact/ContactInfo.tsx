import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from 'lucide-react'

export default function ContactInfo() {
  const timeZones = [
    { region: "Kenya (EAT)", time: "UTC+3", localTime: "Business Hours: 8 AM - 6 PM" },
    { region: "USA East Coast", time: "UTC-5", localTime: "Available: 6 AM - 10 PM EAT" },
    { region: "USA West Coast", time: "UTC-8", localTime: "Available: 9 AM - 1 AM EAT" },
    { region: "UK/Europe", time: "UTC+0", localTime: "Available: 3 AM - 9 PM EAT" }
  ]

  const officeInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      label: "Service Area",
      value: "Nationwide Coverage in Kenya",
      description: "Nairobi headquarters with service coverage across all 47 counties"
    },
    {
      icon: <Phone className="h-5 w-5 text-green-600" />,
      label: "Phone & WhatsApp",
      value: "+254 700 095 477",
      description: "Available for calls and WhatsApp messages 24/7"
    },
    {
      icon: <Mail className="h-5 w-5 text-purple-600" />,
      label: "Email Address", 
      value: "info@trustlinksolutions.co.ke",
      description: "Detailed inquiries and project discussions"
    },
    {
      icon: <Globe className="h-5 w-5 text-orange-600" />,
      label: "Emergency Support",
      value: "24/7 Availability",
      description: "Urgent matters and emergency response services"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              {officeInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="font-medium text-gray-700 mb-1">{info.value}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/254700095477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a
                  href="tel:+254700095477"
                  className="flex items-center gap-2 p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Time Zone Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Global Availability
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Time Zone Coordination
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand that our diaspora clients are spread across different time zones. 
                Here&apos;s when you can reach us based on your location:
              </p>
              
              <div className="space-y-4">
                {timeZones.map((zone, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{zone.region}</h4>
                        <p className="text-sm text-gray-600">{zone.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-600">{zone.localTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Promise */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Our Service Promise</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span className="text-sm">WhatsApp messages answered within 1 hour during business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span className="text-sm">Phone calls returned within 2 hours if missed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span className="text-sm">Email responses within 24 hours maximum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span className="text-sm">Emergency support available 24/7 for urgent matters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Contact Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don&apos;t wait - reach out today and let&apos;s discuss how we can help you achieve your goals in Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254700095477"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp: +254 700 095 477
              </a>
              <a
                href="tel:+254700095477"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call: +254 700 095 477
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}