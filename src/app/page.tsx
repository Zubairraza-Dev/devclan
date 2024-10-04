import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import DevelopmentJourneyIcon from "@/components/Journey/DevelopmentJourneyIcon";
import Journey from "@/components/Journey/Journey";
import PencilAnimation from "@/components/PencilAnimationJson/PencilAnimation";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Technologies from "@/components/Technologies/Technologies";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Technologies />
      <Services />
      <Journey />
      {/* <DevelopmentJourneyIcon/> */}
      <Testimonials />
      {/* <Contact /> */}
    </div>
  );
}
