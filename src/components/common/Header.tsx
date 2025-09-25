'use client'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleGetQuote = () => {
    window.open('https://wa.me/254700095477?text=Hi%20TrustLink%20Solutions,%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20services.', '_blank')
  }

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+254700095477" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+254 700 095 477</span>
              </a>
              <a href="mailto:info@trustlinksolutions.co.ke" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@trustlinksolutions.co.ke</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Trusted by diaspora clients across the globe 🌍</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className="text-blue-900">Trust</span>
              <span className="text-yellow-500">Link</span>
              <span className="text-blue-900"> Solutions</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleGetQuote}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Quote
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={handleGetQuote}
              className="w-full bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  )
}