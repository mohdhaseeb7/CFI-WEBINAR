import { ChevronDown } from "lucide-react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Schedule from "@/components/sections/Schedule";
import WhyExists from "@/components/sections/WhyExists";
import WhoAndWhat from "@/components/sections/WhoAndWhat";
import Myths from "@/components/sections/Myths";
import Curriculum from "@/components/sections/Curriculum";
import Instructor from "@/components/sections/Instructor";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import StickyBar from "@/components/sections/StickyBar";

const Cue = () => (
  <div className="flex justify-center py-6 bg-transparent">
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 bg-white shadow-sm shadow-violet-500/5">
      <ChevronDown className="h-4 w-4 animate-bounce text-violet-500" />
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col bg-background pb-20">
      <Header />
      <Hero />
      <Schedule />
      <Instructor />
      <Cue />
      <WhyExists />
      <WhoAndWhat />
      <Myths />
      <Cue />
      <Curriculum />
      <Cue />
      <Testimonial />
      <FAQ />
      <Footer />
      <StickyBar />
    </div>
  );
}
