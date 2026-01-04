import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ListMusic,
  Pause,
  Play,
  Share2,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import optie2 from "../../public/optie2.png";

const tracks = [
  { id: 1, title: "Track 1 / Artist", duration: "02:51" },
  { id: 2, title: "Track 2 / Artist", duration: "03:16" },
  { id: 3, title: "Track 3 / Artist", duration: "03:19" },
  { id: 4, title: "Track 4 / Artist", duration: "02:43" },
];

const totalSeconds = 171;

const formatTime = (value: number) => {
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const Singles = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1 / totalSeconds;
        if (next >= 1) {
          setIsPlaying(false);
          return 1;
        }
        return next;
      });
    }, 1000);

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying]);

  const currentSeconds = Math.round(progress * totalSeconds);
  const displaySeconds = Math.min(currentSeconds, totalSeconds);
  const progressPercent = Math.min(progress * 100, 100);
  const effectiveVolume = isMuted ? 0 : volume;
  const volumePercent = Math.min(Math.max(effectiveVolume * 100, 0), 100);

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    setProgress(Math.min(Math.max(percent, 0), 1));
  };

  const handleVolumeChange = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (rect.bottom - event.clientY) / rect.height;
    const nextVolume = Math.min(Math.max(percent, 0), 1);
    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
  };

  const nudgeProgress = (deltaSeconds: number) => {
    setProgress((prev) => {
      const nextSeconds = Math.min(
        Math.max(prev * totalSeconds + deltaSeconds, 0),
        totalSeconds
      );
      return nextSeconds / totalSeconds;
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-foreground">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              Archive
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-[0.2em]">
              Singles
            </h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-primary"
          >
            <span className="h-px w-10 bg-foreground/40" />
            Back to home
          </Link>
        </div>

        <section className="mt-12 rounded-3xl border border-foreground/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-foreground/15 bg-foreground/5">
              <img
                src={optie2}
                alt="Album cover"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40" />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-foreground/70">
                Demo album
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                    Artist
                  </p>
                  <h2 className="font-display text-3xl tracking-[0.15em] text-foreground">
                    Track 1
                  </h2>
                  <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
                    Album 1
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/20 text-foreground/70 transition hover:border-primary/60 hover:text-primary">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="rounded-xl border border-foreground/20 px-5 py-3 text-xs uppercase tracking-[0.3em] text-foreground/70 transition hover:border-primary/60 hover:text-primary">
                    Album €9.99
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-pressed={isPlaying}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-foreground/30 text-foreground transition hover:border-primary/60 hover:text-primary"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 translate-x-[2px]" />
                  )}
                </button>

                <div className="flex flex-1 flex-wrap items-center gap-6">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => nudgeProgress(-10)}
                      className="text-foreground/70 transition hover:text-primary"
                    >
                      <SkipBack className="h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => nudgeProgress(10)}
                      className="text-foreground/70 transition hover:text-primary"
                    >
                      <SkipForward className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="flex min-w-[220px] flex-1 items-center gap-4">
                    <div
                      role="presentation"
                      onClick={handleSeek}
                      className="relative h-1 w-full cursor-pointer rounded-full bg-foreground/15"
                    >
                      <span
                        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-primary/40"
                        style={{ width: `${progressPercent}%` }}
                      />
                      <span
                        className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.6)]"
                        style={{ left: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs text-foreground/60">
                      {formatTime(displaySeconds)} / {formatTime(totalSeconds)}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-24 w-12 items-center justify-center rounded-xl border border-foreground/15 bg-foreground/5">
                      <div
                        role="presentation"
                        onClick={handleVolumeChange}
                        className="relative h-16 w-1 cursor-pointer rounded-full bg-foreground/15"
                      >
                        <span
                          className="absolute bottom-0 left-0 w-full rounded-full bg-primary/50"
                          style={{ height: `${volumePercent}%` }}
                        />
                        <span
                          className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"
                          style={{ bottom: `${volumePercent}%` }}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsMuted((prev) => !prev)}
                      className="text-foreground/70 transition hover:text-primary"
                    >
                      {isMuted || effectiveVolume === 0 ? (
                        <VolumeX className="h-6 w-6" />
                      ) : (
                        <Volume2 className="h-6 w-6" />
                      )}
                    </button>
                    <button className="text-foreground/70 transition hover:text-primary">
                      <ListMusic className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="divide-y divide-foreground/15 border-t border-foreground/15">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="grid grid-cols-[40px_1fr_auto] items-center gap-6 py-6 text-sm text-foreground/80"
              >
                <span className="font-mono text-foreground/60">
                  {track.id}
                </span>
                <span className="font-display text-lg tracking-wide text-foreground">
                  {track.title}
                </span>
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
