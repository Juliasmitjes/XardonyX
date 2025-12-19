import { motion } from "framer-motion";
import Butterfly from "./Butterfly";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_55%)]" />

      {/* subtle motion elements */}
      <Butterfly className="top-[12%] right-[6%] opacity-40" size={32} delay={1.5} />
      <Butterfly className="bottom-[18%] left-[8%] opacity-30" size={28} delay={3.5} />

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* visual block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border/30">
              {/* image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-background" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl tracking-widest text-foreground/30">X</span>
              </div>

              {/* grain overlay */}
              <div className="absolute inset-0 bg-noise opacity-30" />
            </div>

            {/* minimal caption */}
            <div className="mt-4 text-xs tracking-widest text-muted-foreground">
              PORTRAIT — UNPUBLISHED
            </div>
          </motion.div>

          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-display text-5xl md:text-6xl tracking-[0.25em] text-foreground">
              ABOUT
            </h2>

            <div className="mt-10 max-w-xl space-y-8 font-body text-lg leading-relaxed text-foreground/80">
              <p>
                Xardonyx works with restraint. Sound is reduced, shaped, and
                repeated until it begins to carry weight.
              </p>
              <p>
                The music avoids release. Tension is allowed to exist without
                resolution, creating space for interpretation rather than
                explanation.
              </p>
              <p className="text-muted-foreground">
                The result is music that feels deliberate, physical, and
                quietly immersive.
              </p>
            </div>

            {/* divider */}
            <div className="mt-12 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
