import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MusicSection from "../components/MusicSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-[#c9a24d]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.18),transparent_55%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,162,77,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25)_0%,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="absolute inset-0 bg-noise opacity-25" />

        <div className="relative">
          <MusicSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
