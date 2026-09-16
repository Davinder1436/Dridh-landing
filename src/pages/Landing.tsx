import Hero from '../components/Hero'
import LiveDemo from '../components/LiveDemo'
import Automation from '../components/Automation'
import CentralIntelligence from '../components/CentralIntelligence'
import AiSystems from '../components/AiSystems'
import GuestComms from '../components/GuestComms'
import Product from '../components/Product'
import ReadingOverview from '../components/ReadingOverview'
import Contact from '../components/Contact'

export default function Landing() {
  return (
    <main>
      <Hero />
      <LiveDemo />
      <Automation />
      <CentralIntelligence />
      <AiSystems />
      <GuestComms />
      <Product />
      <ReadingOverview />
      <Contact />
    </main>
  )
}
