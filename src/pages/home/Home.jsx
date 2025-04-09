import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from '../blogs/Blogs'

function Home() {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <Services />
      <Testimonials />
      <Blogs />
    </div>
  )
}

export default Home