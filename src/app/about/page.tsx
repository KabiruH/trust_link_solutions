import AboutHero from '../../components/about/AboutHero'
import OurStory from '../../components/about/OurStory'
import WhyWeExist from '../../components/about/WhyWeExist'
import MissionValues from '../../components/about/MissionValues'
import TeamApproach from '../../components/about/TeamApproach'
import AboutCTA from '../../components/about/AboutCTA'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <OurStory />
      <WhyWeExist />
      <MissionValues />
      <TeamApproach />
      <AboutCTA />
    </div>
  )
}