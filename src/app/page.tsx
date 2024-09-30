import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Journey from "@/components/Journey/Journey";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Technologies from "@/components/Technologies/Technologies";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies />
      <Services />
      <Journey />
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
}
