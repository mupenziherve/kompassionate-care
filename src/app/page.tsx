import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustSection from "./components/home/TrustSection";
import AboutPreview from "./components/home/AboutPreview";
import ServicesSection from "./components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <AboutPreview />
      <ServicesSection />
    </>
  );
}
