import { Button } from "../components/ui/button";
import { Instagram, Youtube, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@xardonyx.com", label: "Email" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-[0.15em] text-gradient-gold mb-4">
            CONNECT
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          
          <p className="font-body text-lg text-foreground/70 mb-12">
            Follow the metamorphosis. Join the journey into the shadows.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-14 h-14 rounded-full border border-border/50 flex items-center justify-center text-foreground/60 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(42_75%_55%/0.3)] hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <Button variant="hero" size="lg">
            Subscribe for Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
