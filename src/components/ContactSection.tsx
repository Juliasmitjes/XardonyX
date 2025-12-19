import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@xardonyx.com", label: "Email" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-40"
    >
      {/* solid gold statement background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(42_85%_55%),hsl(42_75%_45%))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%)] mix-blend-overlay" />
    
      <div className="absolute inset-0 bg-[#c9a24d]" />
     
      <div className="absolute inset-0 bg-black/60"/>
      <div className="absolute inset-0 bg-noise opacity-35" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* title */}
          <h2 className="font-display text-5xl md:text-6xl tracking-[0.35em] text-foreground">
            CONTACT
          </h2>

          <p className="mt-10 font-body text-lg text-foreground/70">
            Let's connect.
          </p>

          {/* socials */}
          <div className="mt-16 flex justify-center gap-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-border/40 text-foreground/60 transition-colors hover:border-primary"
              >
                <Icon className="h-6 w-6 transition-colors group-hover:text-primary" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.45)] transition" />
              </motion.a>
            ))}
          </div>

          {/* divider */}
          <div className="mx-auto mt-20 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* call to action */}
          <div className="mt-16">
            <Button
              variant="hero"
              size="lg"
              className="tracking-widest cursor-pointer"
            >
              SUBSCRIBE
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
