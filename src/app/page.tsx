import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhyExists from "@/components/sections/WhyExists";
import WhoAndWhat from "@/components/sections/WhoAndWhat";
import TechStackCloud from "@/components/sections/TechStackCloud";
import Myths from "@/components/sections/Myths";
import Curriculum from "@/components/sections/Curriculum";
import Instructor from "@/components/sections/Instructor";
import ProcessSteps from "@/components/sections/ProcessSteps";
import SummaryCard from "@/components/sections/SummaryCard";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/sections/Footer";
import StickyBar from "@/components/sections/StickyBar";

export default function Home() {
  return (
    <div className="flex flex-col bg-background pb-12">
      <Header />
      <Hero />
      <Instructor />
      <WhyExists />
      <WhoAndWhat />
      <TechStackCloud />
      <Myths />
      <Curriculum />
      <ProcessSteps />
      <SummaryCard />
      <Testimonial />
      <FAQ />
      <BottomCTA />
      <Footer />
      <StickyBar />
    </div>
  );
}
