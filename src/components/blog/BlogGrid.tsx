import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  views: string
  author: string
}

export default function BlogGrid() {
  const blogPosts: BlogPost[] = [
    {
      title: "How to Vet Contractors in Kenya from Abroad",
      excerpt: "Essential steps to verify contractor credentials, check references, and ensure quality work when you can't be there in person.",
      category: "Construction Tips",
      readTime: "7 min read",
      date: "March 12, 2025",
      views: "1.2k",
      author: "TrustLink Team"
    },
    {
      title: "Nairobi vs Mombasa: Property Investment Comparison",
      excerpt: "Detailed analysis of investment opportunities, market trends, and ROI potential in Kenya's two major cities.",
      category: "Market Analysis",
      readTime: "10 min read",
      date: "March 8, 2025",
      views: "2.1k",
      author: "TrustLink Team"
    },
    {
      title: "Understanding Kenya's Property Ownership Laws",
      excerpt: "Navigate the legal requirements for foreigners buying property in Kenya, including leasehold vs freehold options.",
      category: "Legal Guide",
      readTime: "12 min read",
      date: "March 5, 2025",
      views: "1.8k",
      author: "TrustLink Team"
    },
    {
      title: "Setting Up Utilities for Your Kenya Property",
      excerpt: "Step-by-step guide to connecting electricity, water, internet, and other essential services to your property.",
      category: "Property Management",
      readTime: "6 min read",
      date: "March 2, 2025",
      views: "950",
      author: "TrustLink Team"
    },
    {
      title: "Building Material Costs in Kenya: Q1 2025 Update",
      excerpt: "Current prices for cement, steel, roofing materials, and other construction essentials across different regions.",
      category: "Construction Costs",
      readTime: "8 min read",
      date: "February 28, 2025",
      views: "1.5k",
      author: "TrustLink Team"
    },
    {
      title: "Creating a Home Healthcare Plan for Elderly Parents",
      excerpt: "Comprehensive guide to arranging medical care, emergency response, and daily support for aging parents in Kenya.",
      category: "Family Support",
      readTime: "9 min read",
      date: "February 25, 2025",
      views: "1.1k",
      author: "TrustLink Team"
    },
    {
      title: "Top 5 Mistakes Diaspora Investors Make in Kenya",
      excerpt: "Learn from common pitfalls including inadequate due diligence, poor contractor selection, and budget miscalculations.",
      category: "Investment Tips",
      readTime: "11 min read",
      date: "February 22, 2025",
      views: "2.3k",
      author: "TrustLink Team"
    },
    {
      title: "Seasonal Construction Planning in Kenya",
      excerpt: "How weather patterns affect construction schedules and why timing your project launch matters for success.",
      category: "Construction Planning",
      readTime: "5 min read",
      date: "February 18, 2025",
      views: "876",
      author: "TrustLink Team"
    },
    {
      title: "Securing Your Property Investment: Insurance Options",
      excerpt: "Overview of property insurance options available in Kenya, coverage types, and protection strategies for diaspora investors.",
      category: "Risk Management",
      readTime: "7 min read",
      date: "February 15, 2025",
      views: "1.3k",
      author: "TrustLink Team"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and market analysis to help you succeed with your Kenya investments.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Article Image</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category and Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Eye className="h-3 w-3" />
                    {post.views}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By {post.author}</span>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}