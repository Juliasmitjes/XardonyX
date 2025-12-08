import { Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
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
          
          <div className="text-center">
            <p className="font-display text-sm tracking-widest text-muted-foreground uppercase">
              Xardonyx
            </p>
            <p className="mt-2 font-body text-sm text-muted-foreground/60">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
