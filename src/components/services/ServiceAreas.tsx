//components/services/ServiceAreas

import { MapPin, Phone, Clock } from 'lucide-react'

interface ServiceArea {
  city: string
  region: string
  description: string
  responseTime: string
  specialties: string[]
}

export default function ServiceAreas() {
  const serviceAreas: ServiceArea[] = [
    {
      city: "Nairobi",
      region: "Central Kenya",
      description: "Our primary hub with the fastest response times and largest team",
      responseTime: "Same day",
      specialties: ["Property Management", "Construction Projects", "Business Services", "Family Support"]
    },
    {
      city: "Mombasa",
      region: "Coastal Kenya",
      description: "Specialized services for coastal properties and tourism investments",
      responseTime: "24 hours",
      specialties: ["Beach Properties", "Tourism Projects", "Import/Export", "Marine Services"]
    },
    {
      city: "Kisumu",
      region: "Western Kenya",
      description: "Agricultural and lakefront property management services",
      responseTime: "48 hours",
      specialties: ["Agricultural Projects", "Lakefront Properties", "Rural Development", "Community Projects"]
    },
    {
      city: "Nakuru",
      region: "Rift Valley",
      description: "Agricultural and manufacturing sector support services",
      responseTime: "48 hours",
      specialties: ["Farm Management", "Industrial Projects", "Logistics", "Regional Development"]
    },
    {
      city: "Eldoret",
      region: "Uasin Gishu",
      description: "Agricultural hub specializing in farming and agribusiness",
      responseTime: "72 hours",
      specialties: ["Large-scale Farming", "Agribusiness", "Equipment Management", "Crop Monitoring"]
    },
    {
      city: "Thika",
      region: "Central Kenya",
      description: "Industrial and residential property management",
      responseTime: "24 hours",
      specialties: ["Industrial Properties", "Residential Management", "Manufacturing Support", "Infrastructure"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Coverage Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage across Kenya with local expertise and established networks in major cities and regions.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{area.city}</h3>
                  <p className="text-gray-600 text-sm">{area.region}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  Response time: {area.responseTime}
                </span>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.specialties.map((specialty, specialtyIndex) => (
                    <span 
                      key={specialtyIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Map Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Nationwide Coverage Network
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              While we have primary offices in key cities, our network extends throughout Kenya. 
              We can coordinate services in remote areas through our trusted partner network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
              <div className="text-gray-700">Counties Covered</div>
              <div className="text-sm text-gray-500">All counties in Kenya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-700">Partner Network</div>
              <div className="text-sm text-gray-500">Trusted local contractors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-700">Emergency Response</div>
              <div className="text-sm text-gray-500">Nationwide coverage</div>
            </div>
          </div>
        </div>

        {/* Remote Area Services */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Need Services in Remote Areas?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We coordinate services throughout Kenya, including remote and rural areas. 
              Our extensive partner network ensures we can support your needs wherever they are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                <Phone className="h-4 w-4 inline mr-2" />
                Discuss Coverage
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Partner Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}