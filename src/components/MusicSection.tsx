import { Play } from "lucide-react";
import { motion } from "framer-motion";

const tracks = [
  { id: 1, title: "She lives in you", duration: "4:52" },
  { id: 2, title: "Take my wings", duration: "5:43" },
  { id: 3, title: "Handle it", duration: "2:58" },
  { id: 4, title: "Until falling", duration: "3:14" },
];

export default function MusicSection() {
  return (
    <section
      id="music"
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* background handled by parent wrapper */}

      <div className="relative container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
          {/* header */}
          <div className="space-y-10 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-6xl tracking-[0.25em] text-foreground"
            >
              MUSIC
            </motion.h2>
            <p className="font-body text-sm tracking-widest text-muted-foreground">
              Focused sound.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground lg:justify-start">
              <span>Latest releases</span>
              <span className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
              <span className="font-mono tracking-[0.2em]">04</span>
            </div>
          </div>

          {/* list */}
          <div className="rounded-2xl border border-border/30 bg-white/5 backdrop-blur-sm">
            <ul className="divide-y divide-border/30">
            {tracks.map((track, index) => {
              const shouldAnimate = index % 2 === 0;
              const sharedProps = {
                key: track.id,
                className:
                  "group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 px-4 md:px-8",
              };

              const content = (
                <>
                  {/* index */}
                  <span className="font-mono text-xs text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* title */}
                  <div className="flex flex-col">
                    <h3 className="font-display text-xl tracking-wide text-foreground transition-colors group-hover:text-primary">
                      {track.title}
                    </h3>
                    <span className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      single
                    </span>
                  </div>

                  {/* controls */}
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {track.duration}
                    </span>
                    <button className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border/40 transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/10">
                      <Play className="h-4 w-4 translate-x-[1px] text-foreground group-hover:text-primary" />
                      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)] transition" />
                    </button>
                  </div>

                  {/* hover line */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </>
              );

              if (!shouldAnimate) {
                return <li {...sharedProps}>{content}</li>;
              }

              return (
                <motion.li
                  {...sharedProps}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  {content}
                </motion.li>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
