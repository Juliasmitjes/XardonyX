import { Play } from "lucide-react";

const tracks = [
  {
    id: 1,
    title: "Obsidian Dreams",
    duration: "3:42",
  },
  {
    id: 2,
    title: "Wings of Midnight",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Stone Heart",
    duration: "3:58",
  },
  {
    id: 4,
    title: "Metamorphosis",
    duration: "5:01",
  },
];

const MusicSection = () => {
  return (
    <section id="music" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-[0.15em] text-gradient-gold mb-4">
            MUSIC
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="group flex items-center justify-between py-6 border-b border-border/30 transition-all duration-300 hover:border-primary/50 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_hsl(42_75%_55%/0.3)]">
                  <Play className="h-4 w-4 text-primary ml-0.5" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-foreground group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                </div>
              </div>
              <span className="font-body text-muted-foreground">
                {track.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
