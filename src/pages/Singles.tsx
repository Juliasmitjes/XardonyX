import { Link } from "react-router-dom";

const Singles = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground">
      <div className="container mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
          Archive
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-[0.2em]">
          Singles
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-foreground/70">
          A dedicated space for upcoming singles. Replace this copy with the
          real track list and media.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-primary"
        >
          <span className="h-px w-10 bg-foreground/40" />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default Singles;
