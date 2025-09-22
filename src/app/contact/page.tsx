import ContactHero from '../../components/contact/ContactHero'
import ContactMethods from '../../components/contact/ContactMethods'
import ContactInfo from '../../components/contact/ContactInfo'
import ContactCTA from '../../components/contact/ContactCTA'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">

      <ContactHero />
      <ContactMethods />
      <ContactInfo />
      <ContactCTA />

    </div>
  )
}