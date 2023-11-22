import Image from 'next/image'
import HeroSection from '/components/HeroSection'
import NavBar from '/components/NavBar'
import FeaturesSection from '/components/FeaturesSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      
      <HeroSection />

      <FeaturesSection />
   
    </main>
  )
}
