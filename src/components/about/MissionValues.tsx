import { Target, Heart, Shield, Users } from 'lucide-react'

export default function MissionValues() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Personal Care",
      description: "We treat every project like we&apos;re helping family, because trust is built through genuine care."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Complete Transparency",
      description: "No surprises, no hidden costs. You get complete visibility into every aspect of your project."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Trusted Network",
      description: "We work only with vetted, reliable professionals who share our commitment to quality."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Results-Focused",
      description: "We measure success by your satisfaction and the quality of the final outcome."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              To bridge the distance between diaspora families and their Kenya interests by providing 
              reliable, transparent, and professional management services that give you complete peace of mind.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gray-900 text-white rounded-2xl p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Vision
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              To become the most trusted partner for diaspora families managing their Kenya interests, 
              known for exceptional service, unwavering reliability, and genuine care for our clients&apos; success.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Trust</div>
                <div className="text-sm text-gray-300">Built through consistent actions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Excellence</div>
                <div className="text-sm text-gray-300">In every project we undertake</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Growth</div>
                <div className="text-sm text-gray-300">Together with our clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}