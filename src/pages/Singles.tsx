import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const tracks = [
  {
    id: 1,
    title: "Take my Wings",
    duration: "05:43",
    embedUrl:
      "https://open.spotify.com/embed/track/2NLefXn6aMTUHz4zETIg3I?utm_source=generator&theme=0",
  },
  {
    id: 2,
    title: "She Lives in You",
    duration: "04:52",
    embedUrl:
      "https://open.spotify.com/embed/track/29JJlqRB4Wzg7wCijIGoCp?utm_source=generator&theme=0",
  },
  {
    id: 3,
    title: "Handle It - Vocal Edition",
    duration: "02:58",
    embedUrl:
      "https://open.spotify.com/embed/track/19CYCKrvINuc7M5X0YCB7V?utm_source=generator&theme=0",
  },
  {
    id: 4,
    title: "Returning Home",
    duration: "03:26",
    embedUrl:
      "https://open.spotify.com/embed/track/5JvLnbItLT0yX0cfeaWrxM?utm_source=generator&theme=0",
  },
];

const Singles = () => {
  const [selectedTrackId, setSelectedTrackId] = useState(tracks[0]?.id ?? 0);
  const [isSwitching, setIsSwitching] = useState(false);
  const activeTrack =
    tracks.find((track) => track.id === selectedTrackId) ?? tracks[0];

  useEffect(() => {
    setIsSwitching(true);
    const timeoutId = window.setTimeout(() => {
      setIsSwitching(false);
    }, 180);

    return () => window.clearTimeout(timeoutId);
  }, [activeTrack?.id]);

  return (
    <main className="min-h-screen bg-[#050505] text-foreground">
      <Navbar hideOnDesktop />
      <div className="container mx-auto px-6 pt-10 pb-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="order-first hidden w-full items-center justify-center gap-3 rounded-full border border-primary/30 px-5 py-3 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-primary hover:text-primary sm:order-2 sm:mt-0 sm:inline-flex sm:w-auto sm:border-0 sm:px-0 sm:py-0"
          >
            <span className="hidden h-px w-10 bg-primary/60 sm:block" />
            Back to home
          </Link>
          <div className="order-2 mt-10 sm:order-1 sm:mt-0">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              Archive
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-[0.2em] text-third">
              SINGLES 
            </h1>
          </div>
        </div>

        <section className="mt-12 rounded-3xl border border-primary/20 bg-white/5 p-8 backdrop-blur-sm md:p-10">
          <div className="space-y-10">
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
              <div
                className="mt-2 transition-opacity duration-200 sm:mt-2 sm:rounded-2xl sm:border sm:border-primary/20 sm:bg-foreground/5 sm:p-4"
                style={{ opacity: isSwitching ? 0 : 1 }}
              >
                <div className="-mx-8 rounded-3xl bg-black/40 px-4 pb-0 pt-2 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.9)] sm:mx-0 sm:rounded-2xl sm:bg-transparent sm:p-0 sm:shadow-none">
                  <iframe
                    title={`${activeTrack.title} Spotify player`}
                    src={activeTrack.embedUrl}
                    width="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ borderRadius: 18 }}
                    className="h-[400px] w-full sm:h-[352px] sm:shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mt-12">
          <div className="divide-y divide-foreground/15 border-t border-primary/30">
            {tracks.map((track) => (
              <button
                type="button"
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`grid w-full grid-cols-[40px_1fr_auto] items-center gap-6 py-6 text-left text-sm text-foreground/80 transition pl-4 cursor-pointer ${
                  track.id === activeTrack?.id
                    ? "bg-primary/10"
                    : "hover:bg-primary/5"
                }`}
              >
                <span className="font-mono text-primary/70">
                  {track.id}
                </span>
                <span
                  className={`font-display text-lg tracking-wide transition ${
                    track.id === activeTrack?.id
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {track.title}
                </span>
                <span className="font-mono text-foreground/60 pr-4">
                  {track.duration}
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Singles;
