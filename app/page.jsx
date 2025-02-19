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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
