import Butterfly from "./Butterfly";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Decorative butterflies */}
      <Butterfly className="top-[10%] right-[5%]" size={40} delay={1} />
      <Butterfly className="bottom-[15%] left-[8%]" size={35} delay={3} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image placeholder with stone-like styling */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-stone/30 to-secondary/30 rounded-sm overflow-hidden border border-border/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-4xl text-gradient-gold">X</span>
                  </div>
                  <p className="font-body italic text-muted-foreground text-sm">Artist Photo</p>
                </div>
              </div>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-primary/50" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-primary/50" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-[0.15em] text-gradient-gold mb-8">
              ABOUT
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/80">
              <p>
                Emerging from the shadows, Xardonyx crafts ethereal soundscapes 
                that blend the delicate beauty of butterflies with the raw power 
                of obsidian stone.
              </p>
              <p>
                Her music is a metamorphosis—transforming darkness into 
                something hauntingly beautiful. Each note carries the weight of 
                ancient mysteries while floating with gossamer lightness.
              </p>
              <p className="italic text-primary/80">
                "I create music for those who find beauty in the shadows."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
