import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [countryCode, setCountryCode] = useState("+31");

  return (
    <main className="min-h-screen bg-[#050505] text-foreground">
      <Navbar hideOnDesktop />
      <div className="container mx-auto px-4 pt-10 pb-24 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="order-first hidden w-full items-center justify-center gap-3 rounded-full border border-primary/30 px-5 py-3 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-primary hover:text-primary sm:order-2 sm:mt-0 sm:inline-flex sm:w-auto sm:border-0 sm:px-0 sm:py-0"
          >
            <span className="hidden h-px w-10 bg-foreground/40 sm:block" />
            Back to home
          </Link>
          <div className="order-2 mt-10 sm:order-1 sm:mt-0">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              Bookings & collabs
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-[0.2em] text-third">
              CONTACT
            </h1>
          </div>
        </div>

        <div className="mt-8 grid gap-12 lg:mt-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="max-w-xl text-base leading-relaxed text-foreground/70">
              For inquiries, bookings, or collaborations, feel free to reach out
              to us. We value your feedback and look forward to connecting with
              you.
            </p>
            <div className="grid gap-4 text-sm text-foreground/70 sm:grid-cols-2">
              <div className="min-w-0 rounded-2xl border border-primary/20 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Email
                </p>
                <p className="mt-2 break-words text-foreground hover:text-primary cursor-pointer">
                  hello@xardonyx.com
                </p>
              </div>
              <div className="min-w-0 rounded-2xl border border-primary/20 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Location
                </p>
                <p className="mt-2 text-foreground">Utrecht, NL</p>
              </div>
            </div>
          </div>

          <form className="w-full max-w-full overflow-hidden rounded-3xl border border-primary/20 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-6">
              <label className="block text-sm uppercase tracking-[0.3em] text-foreground/60">
                Email <span className="text-primary">*</span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <label className="block text-sm uppercase tracking-[0.3em] text-foreground/60">
                Phone
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                  <div className="relative shrink-0">
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
                    <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2" />
                  </div>
                  <input
                    type="tel"
                    placeholder="6 1234 5678"
                    className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                  />
                </div>
              </label>

              <label className="block text-sm uppercase tracking-[0.3em] text-foreground/60">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-3 w-full resize-none rounded-2xl border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl border border-primary/40 bg-primary/10 py-3 text-xs uppercase tracking-[0.4em] text-foreground transition hover:border-primary hover:text-primary hover:shadow-[0_0_24px_hsl(var(--primary)/0.25)] cursor-pointer"
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
