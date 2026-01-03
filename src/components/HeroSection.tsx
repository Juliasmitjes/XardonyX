import { Link } from "react-router-dom";
import heroBg from "../../public/heroBg.png";
import optie2 from "../../public/optie2.png";

const featuredLinks = [
  {
    id: "01",
    title: "Singles",
    href: "/singles",
    image: optie2,
    imageClassName: "object-[center_35%]",
  },
  {
    id: "02",
    title: "Interviews",
    href: "/interviews",
    image: heroBg,
    imageClassName: "object-[center_25%]",
  },
  {
    id: "03",
    title: "Albums",
    href: "/albums",
    image: heroBg,
    imageClassName: "object-[center_70%]",
  },
];

const highlights = [
  {
    title: "Grammy - Space of Commotion",
    meta: "Mar 20, 2023 · 2 min read",
    excerpt:
      "Short, punchy sentences that summarize the story and invite the reader to continue.",
    image: heroBg,
    imageClassName: "object-[center_45%]",
  },
  {
    title: "Emil Bjarni - The Aesi",
    meta: "Mar 16, 2023 · 3 min read",
    excerpt:
      "A focused teaser for the article, keeping the rhythm minimal and sharp.",
    image: optie2,
    imageClassName: "object-[center_30%]",
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
                <span className="text-xs uppercase tracking-[0.4em] text-foreground/70">
                  {item.id}
                </span>
                <span className="mt-2 h-px w-12 bg-foreground/70" />
                <h3 className="mt-4 font-display text-3xl tracking-wide text-foreground">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 space-y-12">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="grid items-start gap-6 border-b border-foreground/10 pb-12 md:grid-cols-[260px_1fr]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-48 w-full object-cover md:h-56 ${item.imageClassName}`}
                />
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {item.meta}
                </p>
                <h4 className="font-display text-2xl tracking-wide text-foreground">
                  {item.title}
                </h4>
                <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
                  {item.excerpt}
                </p>
                <div className="pt-3">
                  <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                    <span className="h-px w-10 bg-foreground/40" />
                    Continue reading
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
