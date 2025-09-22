import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

interface FeaturedPost {
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  trending?: boolean
}

export default function FeaturedPosts() {
  const featuredPosts: FeaturedPost[] = [
    {
      title: "Complete Guide to Buying Land in Kenya as a Diaspora Investor",
      excerpt: "Everything you need to know about purchasing land in Kenya from abroad, including legal requirements, due diligence, and common pitfalls to avoid.",
      category: "Investment Guide",
      readTime: "8 min read",
      date: "March 15, 2025",
      image: "/api/placeholder/600/300",
      trending: true
    },
    {
      title: "Construction Costs in Kenya: 2025 Market Analysis",
      excerpt: "Current construction costs across different regions in Kenya, material prices, labor costs, and budget planning tips for your building project.",
      category: "Market Analysis",
      readTime: "6 min read", 
      date: "March 10, 2025",
      image: "/api/placeholder/600/300"
    },
    {
      title: "Managing Elderly Parents in Kenya While Living Abroad",
      excerpt: "Practical strategies and local resources for ensuring your elderly parents receive proper care and support while you live in the diaspora.",
      category: "Family Support",
      readTime: "5 min read",
      date: "March 5, 2025", 
      image: "/api/placeholder/600/300"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular and valuable content to help you succeed with your Kenya investments and projects.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Featured Image</span>
                </div>
                
                {/* Trending Badge */}
                {post.trending && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Trending
                    </div>
                  </div>
                )}
                
                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}