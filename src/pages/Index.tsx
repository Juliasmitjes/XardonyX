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
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0b0f17]/90 to-[#c9a24d]/12" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(80,140,210,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,hsl(var(--primary)/0.16),transparent_55%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(201,162,77,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,transparent_35%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 bg-noise opacity-20" />

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
