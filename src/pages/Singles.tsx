import { useState } from "react";
import { Link } from "react-router-dom";
import wings from "../../public/takeMyWings.png";

const tracks = [
  { id: 1, title: "Take my Wings", duration: "05:43", embedUrl: "https://open.spotify.com/embed/track/2NLefXn6aMTUHz4zETIg3I?utm_source=generator&theme=0" },
  { id: 2, title: "She Lives in You", duration: "04:52", embedUrl: "https://open.spotify.com/embed/track/29JJlqRB4Wzg7wCijIGoCp?utm_source=generator&theme=0" },
  { id: 3, title: "Handle It - Vocal Edition", duration: "02:58", embedUrl: "https://open.spotify.com/embed/track/19CYCKrvINuc7M5X0YCB7V?utm_source=generator&theme=0" },
  { id: 4, title: "Returning Home", duration: "03:26", embedUrl: "https://open.spotify.com/embed/track/5JvLnbItLT0yX0cfeaWrxM?utm_source=generator&theme=0" },
];

const Singles = () => {
  const [selectedTrackId, setSelectedTrackId] = useState(tracks[0]?.id ?? 0);
  const activeTrack =
    tracks.find((track) => track.id === selectedTrackId) ?? tracks[0];

  return (
    <main className="min-h-screen bg-[#050505] text-foreground">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              Archive
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-[0.2em] text-third">
              SINGLES 
            </h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-primary"
          >
            <span className="h-px w-10 bg-primary/60" />
            Back to home
          </Link>
        </div>

        <section className="mt-12 rounded-3xl border border-primary/20 bg-white/5 p-6 backdrop-blur-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-primary/20 bg-foreground/5">
              <img
                src={wings}
                alt="Album cover"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40" />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-primary/80">
                Featured single
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-primary/70">
                    XARDONYX
                  </p>
                  <h2 className="font-display text-3xl tracking-[0.15em] text-foreground">
                    {activeTrack?.title ?? "Singles"}
                  </h2>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary/70">
                    Single
                  </p>
                </div>
              </div>

              {activeTrack?.embedUrl ? (
                <iframe
                  title={`${activeTrack.title} Spotify player`}
                  src={activeTrack.embedUrl}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ borderRadius: 12 }}
                />
              ) : null}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="divide-y divide-foreground/15 border-t border-primary/30">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`grid grid-cols-[40px_1fr_auto] items-center gap-6 py-6 text-sm text-foreground/80 transition ${
                  track.id === activeTrack?.id
                    ? "bg-primary/10"
                    : "hover:bg-primary/5"
                }`}
              >
                <span className="font-mono text-primary/70">
                  {track.id}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedTrackId(track.id)}
                  className={`text-left font-display text-lg tracking-wide transition ${
                    track.id === activeTrack?.id
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {track.title}
                </button>
                <span className="font-mono text-foreground/60">
                  {track.duration}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Singles;
