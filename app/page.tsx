import Navigation from './components/Navigation'
import Hero from './components/Hero'
import StoryPreview from './components/StoryPreview'
import PortfolioPreview from './components/PortfolioPreview'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StoryPreview />
      <PortfolioPreview />
    </main>
  )
}