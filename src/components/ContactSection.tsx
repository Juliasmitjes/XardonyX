import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, CirclePlay  } from "lucide-react";
import { Button } from "../components/ui/button";

const socialLinks = [
  { icon: CirclePlay, href: "#", label: "Spotify" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
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
          className="mx-auto grid max-w-5xl items-center gap-12 text-center lg:grid-cols-[1.1fr_0.9fr] lg:text-left"
        >
          <div>
            {/* title */}
            <h2 className="font-display text-5xl md:text-6xl tracking-[0.35em] text-foreground">
              CONTACT
            </h2>

            <p className="mt-10 font-body text-lg text-foreground/70">
              Let's connect.
            </p>

            {/* divider */}
            <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent lg:mx-0" />
          </div>

          <div className="rounded-2xl border border-border/30 bg-white/5 p-8 text-center backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Follow
            </div>

            {/* socials */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {socialLinks.map(({ icon: Icon, href, label }, index) => {
                const shouldAnimate = index % 2 === 0;
                const sharedProps = {
                  key: label,
                  href,
                  "aria-label": label,
                  className:
                    "group flex flex-col items-center gap-3 rounded-xl border border-border/40 px-4 py-5 text-foreground/70 transition-colors hover:border-primary",
                };

                if (!shouldAnimate) {
                  return (
                    <a {...sharedProps}>
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-full">
                        <Icon className="h-6 w-6 transition-colors group-hover:text-primary" />
                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.45)] transition" />
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {label}
                      </span>
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full">
                      <Icon className="h-6 w-6 transition-colors group-hover:text-primary" />
                      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.45)] transition" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {label}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* call to action */}
            <div className="mt-10">
              <Button
                variant="hero"
                size="lg"
                className="w-full tracking-widest cursor-pointer"
              >
                LISTEN
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
