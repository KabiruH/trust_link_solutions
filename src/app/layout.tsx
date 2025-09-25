import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/common/Header'
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Improves font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://trustlinksolutions.co.ke'),
  title: {
    default: 'TrustLink Solutions - Reliable Local Management & Support Services in Kenya',
    template: '%s | TrustLink Solutions'
  },
  description: 'Professional on-the-ground support for diaspora families managing property, projects, and family needs in Kenya. Transparent reporting, trusted local network, flexible pricing.',
  keywords: [
    'Kenya property management',
    'diaspora services Kenya',
    'property management Nairobi',
    'Kenya construction oversight',
    'remote property management',
    'family support services Kenya',
    'vendor coordination Kenya',
    'diaspora investment management',
    'Kenya project management',
    'property maintenance Kenya'
  ],
  authors: [{ name: 'TrustLink Solutions' }],
  creator: 'TrustLink Solutions',
  publisher: 'TrustLink Solutions',
  category: 'Property Management Services',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://trustlinksolutions.co.ke',
    siteName: 'TrustLink Solutions',
    title: 'TrustLink Solutions - Reliable Local Management & Support Services in Kenya',
    description: 'Professional on-the-ground support for diaspora families managing property, projects, and family needs in Kenya.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrustLink Solutions - Property Management Services in Kenya',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@trustlinksolutions',
    creator: '@trustlinksolutions',
    title: 'TrustLink Solutions - Property Management Services in Kenya',
    description: 'Professional support for diaspora families managing interests in Kenya. Transparent, reliable, trusted.',
    images: ['/twitter-image.jpg'],
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Geographic targeting
  other: {
    'geo.region': 'KE',
    'geo.placename': 'Kenya',
    'geo.position': '-1.286389;36.817223', // Nairobi coordinates
  },
  
  // Verification tags (add your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// Viewport configuration for mobile-first
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1E40AF' },
    { media: '(prefers-color-scheme: dark)', color: '#1E40AF' }
  ],
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags for mobile optimization */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TrustLink Solutions" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TrustLink Solutions",
              "description": "Professional on-the-ground support for diaspora families managing property, projects, and family needs in Kenya.",
              "url": "https://trustlinksolutions.co.ke",
              "telephone": "+254-700-095-477",
              "email": "info@trustlinksolutions.co.ke",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.286389",
                "longitude": "36.817223"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "serviceType": [
                "Property Management",
                "Construction Management",
                "Family Support Services",
                "Vendor Coordination"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Su 00:00-23:59",
              "sameAs": [
                "https://facebook.com/trustlinksolutions",
                "https://twitter.com/trustlinksolutions",
                "https://linkedin.com/company/trustlinksolutions"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900`}
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Mobile-specific optimizations */}
        <noscript>
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 text-center">
            Please enable JavaScript for the best experience on our website.
          </div>
        </noscript>
      </body>
    </html>
  );
}