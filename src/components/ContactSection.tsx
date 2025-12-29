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
      {/* background handled by parent wrapper */}

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
            {socialLinks.map(({ icon: Icon, href, label }, index) => {
              const shouldAnimate = index % 2 === 0;
              const sharedProps = {
                key: label,
                href,
                "aria-label": label,
                className:
                  "group relative flex h-16 w-16 items-center justify-center rounded-full border border-border/40 text-foreground/60 transition-colors hover:border-primary",
              };

              if (!shouldAnimate) {
                return (
                  <a {...sharedProps}>
                    <Icon className="h-6 w-6 transition-colors group-hover:text-primary" />
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.45)] transition" />
                  </a>
                );
              }

              return (
                <motion.a
                  {...sharedProps}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-6 w-6 transition-colors group-hover:text-primary" />
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.45)] transition" />
                </motion.a>
              );
            })}
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
