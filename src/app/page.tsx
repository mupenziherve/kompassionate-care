import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustSection from "./components/home/TrustSection";
import AboutPreview from "./components/home/AboutPreview";
import ServicesSection from "./components/home/ServicesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import ContactSection from "./components/home/ContactSection";
import StatsSection from "./components/home/StatsSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <AboutPreview />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
