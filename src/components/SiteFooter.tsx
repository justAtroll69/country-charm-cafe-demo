import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-wood-dark text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-display text-2xl">Lutz Country Store & Café</div>
          <p className="mt-3 text-sm text-cream/75">
            Family owned. Fresh homemade food. Specialty coffee. Proudly serving Lutz.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-cream/30 p-2 transition hover:bg-cream/10"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-cream/30 p-2 transition hover:bg-cream/10"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="eyebrow !text-honey">Visit</div>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey" /> 19015 US-41, Lutz, FL 33549</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-honey" /> (813) 724-4515</li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-honey" /> Thu–Tue 7:30am – 3pm</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow !text-honey">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link to="/menu" className="hover:text-honey">Menu</Link></li>
            <li><Link to="/coffee" className="hover:text-honey">Coffee</Link></li>
            <li><Link to="/country-store" className="hover:text-honey">Country Store</Link></li>
            <li><Link to="/events" className="hover:text-honey">Events</Link></li>
            <li><Link to="/about" className="hover:text-honey">About Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow !text-honey">Newsletter</div>
          <p className="mt-3 text-sm text-cream/80">Seasonal specials and event news, straight to your inbox.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:border-honey focus:outline-none"
            />
            <button className="rounded-full bg-honey px-4 py-2 text-sm font-semibold text-wood-dark hover:brightness-95">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-cream/60 lg:px-8">
          © {new Date().getFullYear()} Lutz Country Store & Café · Family Owned • Fresh Homemade Food • Specialty Coffee • Proudly Serving Lutz
        </p>
      </div>
    </footer>
  );
}
