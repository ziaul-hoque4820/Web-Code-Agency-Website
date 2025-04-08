import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'

function Home() {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <Services />
    </div>
  )
}

export default Home