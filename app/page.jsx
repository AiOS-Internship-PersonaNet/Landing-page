import Header from "../components/Header";
import Hero from "../components/Hero";
import EmotionalBanking from "../components/EmotionalBanking";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import AIFeatures from "../components/AIFeatures";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import SocialProof from "../components/SocialProof";
import AnnouncementBanner from "@/components/AnnouncementBar";
import PersonaChat from "@/components/PersonaChat";

export default function Home() {
  return (
    <>
      <Header />
      <AnnouncementBanner />
      <main>
        <Hero />
        <PersonaChat />
        <EmotionalBanking />
        <Features />
        <HowItWorks />
        <AIFeatures />
        <Results />
        <Testimonials />
        <SocialProof />
        <CallToAction />
      </main>
    </>
  );
}
