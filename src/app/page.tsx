import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustSection from "./components/home/TrustSection";
import AboutPreview from "./components/home/AboutPreview";
import ServicesSection from "./components/home/ServicesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import ContactSection from "./components/home/ContactSection";
import StatsSection from "./components/home/StatsSection";
import Footer from "./components/layout/Footer";
import MapSection from "./components/home/MapSection";
import OurTeamSection from "./components/home/OurTeamSection";





export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <AboutPreview />
      <ServicesSection />
      <OurTeamSection/>
      <StatsSection />
      
    <TestimonialsSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
}
