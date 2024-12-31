"use client";
import HeroSection from '/components/HeroSection'
import NavBar from '/components/NavBar'
import FeaturesSection from '/components/FeaturesSection'
import Footer from '/components/Footer'
import BenfitsSection from '/components/BenfitsSection'
import OppoScroll from '/components/OppoScroll';








export default function Home() {
  


  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
    
          
      <h1>
        TEST
         </h1>
      
      <HeroSection />
      <OppoScroll/>
      <FeaturesSection />
      
     
     
      <BenfitsSection/>
      
     
      <Footer />


      
     
      
   
    </main>
  )
}