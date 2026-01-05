import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Video", href: "/video" },
  { label: "Singles", href: "/singles" },
  { label: "Contact", href: "/contact" },
];

type NavbarProps = {
  hideOnDesktop?: boolean;
};

const Navbar = ({ hideOnDesktop = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hideOnDesktop ? "sm:hidden" : ""
      } ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="font-display text-4xl tracking-[0.3em] text-transparent bg-gradient-to-r from-primary via-fourth to-primary/45 bg-clip-text transition-colors hover:text-primary"
          >
            XARDONYX
          </Link>

          <button
            className="text-foreground p-2 cursor-pointer hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-8 left-1/2 -translate-x-1/2 text-foreground p-2 cursor-pointer hover:text-primary"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-7 w-7" />
        </button>

        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                onClick={() => setIsOpen(false)}
                className={`font-display text-2xl tracking-wider transition-colors ${
                  label === "Home"
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
