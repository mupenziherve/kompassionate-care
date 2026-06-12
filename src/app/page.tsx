import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustBar from "./components/home/TrustBar";
import WhyFamiliesTrust from "./components/home/WhyFamiliesTrust";
import AboutPreview from "./components/home/AboutPreview";
import CareApproach from "./components/home/CareApproach";
import ServicesSection from "./components/home/ServicesSection";
import OurHomePreview from "./components/home/OurHomePreview";
import GalleryPreview from "./components/home/GalleryPreview";
import TeamPreview from "./components/home/TeamPreview";
import TestimonialsSection from "./components/home/TestimonialsSection";
import FAQPreview from "./components/home/FAQPreview";
import FinalCTA from "./components/home/FinalCTA";
import MapSection from "./components/home/MapSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustBar />

      <WhyFamiliesTrust />

      <AboutPreview />

      <CareApproach />

      <ServicesSection />

      <OurHomePreview />

      <GalleryPreview />

      <TeamPreview />

      <TestimonialsSection />

      <FAQPreview />

      <FinalCTA />

      <MapSection />

      <ContactSection />

      <Footer />
    </>
  );
}
