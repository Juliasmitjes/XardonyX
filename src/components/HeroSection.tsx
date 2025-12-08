import { Button } from "../components/ui/button";
import Butterfly from "./Butterfly";
import heroBg from '../../public/heroBg.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Stone texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Floating butterflies */}
      <Butterfly className="top-[15%] left-[10%]" size={50} delay={0} />
      <Butterfly className="top-[25%] right-[15%]" size={35} delay={2} />
      <Butterfly className="bottom-[30%] left-[20%]" size={45} delay={4} />
      <Butterfly className="top-[40%] right-[25%]" size={30} delay={1} />
      <Butterfly className="bottom-[20%] right-[10%]" size={55} delay={3} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <p className="font-body text-lg md:text-xl italic text-foreground/70 mb-4 tracking-wide">
            Where darkness meets melody
          </p>
        </div>

        <h1 className="animate-fade-up delay-200 font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] text-gradient-gold glow-text mb-6">
          XARDONYX
        </h1>

        <div className="animate-fade-up delay-300">
          <p className="font-body text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ethereal pop forged in obsidian depths
          </p>
        </div>

        <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Listen Now
          </Button>
          <Button variant="gold" size="lg">
            Explore
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
