import { Home, TrendingUp, Users, MapPin, Wrench, Shield } from 'lucide-react'

interface Category {
  name: string
  description: string
  postCount: number
  icon: React.ReactElement
  color: string
}

export default function BlogCategories() {
  const categories: Category[] = [
    {
      name: "Property Investment",
      description: "Land acquisition, property development, and investment strategies",
      postCount: 8,
      icon: <Home className="h-6 w-6" />,
      color: "blue"
    },
    {
      name: "Construction & Renovation",
      description: "Building projects, materials, costs, and management tips",
      postCount: 6,
      icon: <Wrench className="h-6 w-6" />,
      color: "green"
    },
    {
      name: "Market Analysis",
      description: "Kenya real estate trends, pricing, and market insights",
      postCount: 5,
      icon: <TrendingUp className="h-6 w-6" />,
      color: "purple"
    },
    {
      name: "Family Support", 
      description: "Elder care, family assistance, and support services",
      postCount: 4,
      icon: <Users className="h-6 w-6" />,
      color: "yellow"
    },
    {
      name: "Legal & Regulations",
      description: "Property law, permits, documentation, and compliance",
      postCount: 3,
      icon: <Shield className="h-6 w-6" />,
      color: "red"
    },
    {
      name: "Location Guides",
      description: "Regional insights, area analysis, and location-specific advice",
      postCount: 4,
      icon: <MapPin className="h-6 w-6" />,
      color: "indigo"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
      red: 'bg-red-100 text-red-600 hover:bg-red-200',
      indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exactly what you&apos;re looking for with our organized content categories covering all aspects of diaspora property management.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className={`inline-flex p-3 rounded-lg mb-4 ${getColorClasses(category.color)} transition-colors`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {category.postCount} articles
                </span>
                <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}