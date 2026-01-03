import { Instagram, Youtube, CirclePlay } from "lucide-react";

const socialLinks = [
  { icon: CirclePlay, href: "#", label: "Spotify" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
