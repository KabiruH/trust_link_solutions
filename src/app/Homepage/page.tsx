
import Hero from '../../components/homepage/Hero'
import ServicesOverview from '../../components/homepage/ServicesOverview'
import WhyChooseUs from '../../components/homepage/WhyChooseUs'
import HowItWorks from '../../components/homepage/HowItWorks'
import Testimonials from '../../components/homepage/Testimonials'
import CTA from '../../components/homepage/CTA'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
     
            <Hero />
            <WhyChooseUs />
            <ServicesOverview />
            <HowItWorks />
            <Testimonials />
            <CTA />
      
        </div>
    )
}