import HowItWorksHero from '../../components/how-it-works/HowItWorksHero'
import ProcessOverview from '../../components/how-it-works/ProcessOverview'
import DetailedSteps from '../../components/how-it-works/DetailedSteps'
import CommunicationFlow from '../../components/how-it-works/CommunicationFlow'
import QualityAssurance from '../../components/how-it-works/QualityAssurance'
import ProcessCTA from '../../components/how-it-works/ProcessCTA'


export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">

      <HowItWorksHero />
      <ProcessOverview />
      <DetailedSteps />
      <CommunicationFlow />
      <QualityAssurance />
      <ProcessCTA />

    </div>
  )
}