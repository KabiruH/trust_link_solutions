
import ServicesHero from '../../components/services/ServicesHero'
import ServicesList from '../../components/services/ServicesList'
import ServiceProcess from '../../components/services/ServiceProcess'
import PricingOptions from '../../components/services/PricingOptions'
import ServiceAreas from '../../components/services/ServiceAreas'
import ServicesCTA from '../../components/services/ServiceCTA'


export default function Services() {
  return (
    <div className="min-h-screen bg-white">
  
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <PricingOptions />
      <ServiceAreas />
      <ServicesCTA />
    
    </div>
  )
}