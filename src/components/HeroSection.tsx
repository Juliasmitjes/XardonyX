import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import Butterfly from "./Butterfly";
import heroBg from "../../public/heroBg.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Xardonyx background"
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.25),transparent_55%)]" />
      </div>

      {/* NOISE */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />

      {/* BUTTERFLIES (meer betekenisvol geplaatst) */}
      <Butterfly className="top-[18%] left-[12%]" size={70} delay={0} />
      <Butterfly className="top-[32%] right-[14%]" size={50} delay={1.5} />
      <Butterfly className="bottom-[20%] left-[20%]" size={60} delay={3} />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

        {/* TITLE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative z-20"
        >

          <h1
            className="
              font-display
              whitespace-nowrap
              text-[4.5rem]
              leading-none
              tracking-[0.22em]
              sm:text-[6rem]
              md:text-[8rem]
              lg:text-[10rem]
              xl:text-[11rem]
              text-gradient-gold
              glow-text mt-30
            "
          >
            XARDONYX
          </h1>

          <div className="mx-auto mt-4 h-px w-48 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </motion.div>

        {/* RITUAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
          className="relative mt-24 w-full max-w-xl"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl border border-primary/20 shadow-[0_0_120px_rgba(212,175,55,0.18)]" />

          <div className="relative p-14">
            <p className="font-display text-xs uppercase tracking-[0.5em] text-primary/70">
              New Era
            </p>

            <p className="mt-6 font-display text-4xl leading-tight text-foreground">
              Hier komt <br />
              een slogan
            </p>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <p className="mt-8 font-body text-sm tracking-wide text-foreground/55">
              Descend. Listen. Transform.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 pb-20"
        >
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen Now
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
