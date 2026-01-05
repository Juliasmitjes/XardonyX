import { Link } from "react-router-dom";

const Video = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="order-first -mt-14 inline-flex w-full items-center justify-center gap-3 rounded-full border border-primary/30 px-5 py-3 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-primary hover:text-primary sm:order-2 sm:mt-0 sm:w-auto sm:border-0 sm:px-0 sm:py-0"
          >
            <span className="hidden h-px w-10 bg-primary/60 sm:block" />
            Back to home
          </Link>
          <div className="order-2 mt-10 sm:order-1 sm:mt-0">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              Live performance
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-[0.2em] text-third">
              VIDEO
            </h1>
          </div>
        </div>

        <section className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-6">
            <div className="-mx-6 overflow-hidden bg-black/40 sm:mx-0 sm:rounded-3xl sm:border sm:border-primary/20">
              <div className="relative aspect-video">
                <video
                  controls
                  poster={`${import.meta.env.BASE_URL}licht.png`}
                  className="h-full w-full object-cover"
                >
                  <source
                    src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">
              Featured set
            </p>
            <h2 className="font-display text-3xl tracking-[0.15em] text-foreground">
              Live Television Session
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
              A live performance captured in a single take, built on long
              tension arcs and luminous breaks. The set showcases a blend of
              atmospheric melodies and driving rhythms, creating an immersive
              experience that captivates the audience from start to finish.
            </p>
          </div>

          <aside className="space-y-6 rounded-3xl border border-primary/20 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                Release
              </p>
              <p className="mt-2 text-lg text-foreground">2025</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                Duration
              </p>
              <p className="mt-2 text-lg text-foreground">09:56</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                Location
              </p>
              <p className="mt-2 text-lg text-foreground">Utrecht</p>
            </div>
            <button
              type="button"
              className="w-full rounded-2xl border border-primary/40 bg-primary/10 py-3 text-xs uppercase tracking-[0.4em] text-foreground transition hover:border-primary hover:text-primary hover:shadow-[0_0_24px_hsl(var(--primary)/0.25)] cursor-pointer"
            >
              Watch full set
            </button>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Video;
