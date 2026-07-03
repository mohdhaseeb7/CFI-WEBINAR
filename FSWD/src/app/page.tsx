import BreakingTicker from "@/components/BreakingTicker";
import FloatingCta from "@/components/FloatingCta";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Receipts from "@/components/sections/Receipts";
import Reframe from "@/components/sections/Reframe";
import Takeaways from "@/components/sections/Takeaways";
import SpeakerAgenda from "@/components/sections/SpeakerAgenda";
import RegisterSection from "@/components/sections/RegisterSection";
import Faq from "@/components/sections/Faq";
import ClosingCta from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <main>
      <BreakingTicker />
      <StickyHeader />
      <FloatingCta />
      <Hero />
      <WhoWeAre />
      <Receipts />
      <Reframe />
      <Takeaways />
      <SpeakerAgenda />
      <RegisterSection />
      <Faq />
      <ClosingCta />
      <Footer />
    </main>
  );
}
