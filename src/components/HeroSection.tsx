import { Link } from "react-router-dom";

const featuredLinks = [
  {
    id: "01",
    title: "Video",
    href: "/video",
    image: `${import.meta.env.BASE_URL}licht.png`,
    imageClassName: "object-[center_35%]",
  },
  {
    id: "02",
    title: "Singles",
    href: "/singles",
    image: `${import.meta.env.BASE_URL}takeMyWings.png`,
    imageClassName: "object-[center_25%]",
  },
  {
    id: "03",
    title: "Contact",
    href: "/contact",
    image: `${import.meta.env.BASE_URL}vlinderZoom.png`,
    imageClassName: "object-[center_70%]",
  },
];

const artistHighlights = [
  {
    title: "Take my wings",
    type: "Single",
    year: "2025",
  },
  {
    title: "She lives in you",
    type: "Single",
    year: "2020",
  },
  {
    title: "Returning home",
    type: "Single",
    year: "2019",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#050505] text-foreground">
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
          {featuredLinks.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="group relative overflow-hidden"
            >
              <img
                src={item.image}
                alt={`${item.title} cover`}
                className={`h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[360px] lg:h-[420px] ${item.imageClassName}`}
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
                  {item.id}
                </span>
                <span className="mt-2 h-px w-12 bg-primary/70" />
                <h3 className="mt-4 font-display text-3xl tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative overflow-hidden border border-foreground/15">
            <img
              src={`${import.meta.env.BASE_URL}voorbeeldArtiest.png`}
              alt="Artist portrait"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-foreground/70">
                Artist profile
              </p>
              <h4 className="font-display text-3xl tracking-[0.15em] text-third">
                XARDONYX
              </h4>
              <p className="text-sm leading-relaxed text-foreground/70">
                A cinematic techno project shaped by ritual, light, and long-form
                builds. The sound moves between industrial tension and luminous
                breaks, grounded by a minimalist live setup.
              </p>
            </div>

            <div className="grid gap-6 border-y border-foreground/10 py-6 text-sm text-foreground/70 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Origin
                </p>
                <p className="mt-2 text-foreground">Utrecht</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Genre
                </p>
                <p className="mt-2 text-foreground">Pop / Rock</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Active
                </p>
                <p className="mt-2 text-foreground">xxx - Now</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                Selected releases
              </p>
              <div className="space-y-3">
                {artistHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between border-b border-foreground/10 pb-3 text-sm"
                  >
                    <div>
                      <p className="text-foreground">{item.title}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                        {item.type}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <Link to="/video" className="hover:text-primary">
                  View live
                </Link>
                <Link to="/singles" className="hover:text-primary">
                  Listen
                </Link>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
