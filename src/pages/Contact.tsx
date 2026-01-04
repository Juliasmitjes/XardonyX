import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Contact = () => {
  const [countryCode, setCountryCode] = useState("+31");

  return (
    <main className="min-h-screen bg-[#050505] text-foreground">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              Bookings & collabs
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-[0.2em]">
              Contact
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

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="max-w-xl text-base leading-relaxed text-foreground/70">
              For inquiries, bookings, or collaborations, feel free to reach out
              to us. We value your feedback and look forward to connecting with
              you.
            </p>
            <div className="grid gap-4 text-sm text-foreground/70 sm:grid-cols-2">
              <div className="rounded-2xl border border-foreground/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Email
                </p>
                <p className="mt-2 text-foreground">hello@xardonyx.com</p>
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Location
                </p>
                <p className="mt-2 text-foreground">Amsterdam, NL</p>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-foreground/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <label className="block text-sm uppercase tracking-[0.3em] text-foreground/60">
                Email <span className="text-primary">*</span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <label className="block text-sm uppercase tracking-[0.3em] text-foreground/60">
                Phone
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground">
                  <div className="relative">
                    <select
                      value={countryCode}
                      onChange={(event) => setCountryCode(event.target.value)}
                      className="appearance-none rounded-lg bg-[#050505] px-2 py-1 pr-8 text-foreground focus:outline-none"
                      aria-label="Country code"
                    >
                      <option value="+31">+31 NL</option>
                      <option value="+32">+32 BE</option>
                      <option value="+49">+49 DE</option>
                      <option value="+44">+44 UK</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/70" />
                  </div>
                  <input
                    type="tel"
                    placeholder="6 1234 5678"
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                  />
                </div>
              </label>

              <label className="block text-sm uppercase tracking-[0.3em] text-foreground/60">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell us about the project..."
                  className="mt-3 w-full resize-none rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl border border-foreground/20 bg-foreground/10 py-3 text-xs uppercase tracking-[0.4em] text-foreground transition hover:border-primary/60 hover:text-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
