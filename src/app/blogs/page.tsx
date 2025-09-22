
import BlogHero from '../../components/blog/BlogHero'
import FeaturedPosts from '../../components/blog/FeaturedPosts'
import BlogGrid from '../../components/blog/BlogGrid'
import BlogCategories from '../../components/blog/BlogCategories'
import BlogNewsletter from '../../components/blog/BlogNewsletter'


export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <FeaturedPosts />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
  
    </div>
  )
}