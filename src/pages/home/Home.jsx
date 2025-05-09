import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from '../blogs/Blogs'
import TeamSection from './TeamSection'
import Pricing from './Pricing'
import FAQs from './FAQs'
import Newsletter from './Newsletter'

function Home() {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <Services />
      <Testimonials />
      <Blogs />
      <TeamSection />
      <Pricing />
      <FAQs />
      <Newsletter />
    </div>
  )
}

export default Home