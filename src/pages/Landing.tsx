import Hero from '../components/Hero'
import Impact from '../components/Impact'
import LiveDemo from '../components/LiveDemo'
import AiSystems from '../components/AiSystems'
import ReadingOverview from '../components/ReadingOverview'
import Automation from '../components/Automation'
import Product from '../components/Product'
import Contact from '../components/Contact'

export default function Landing() {
  return (
    <main>
      <Hero />
      <LiveDemo />
      <Impact />
      <Automation />
      <AiSystems />
      <Product />
      <ReadingOverview />
      <Contact />
    </main>
  )
}
