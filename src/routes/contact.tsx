import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours — Lutz Country Store & Café" },
      { name: "description", content: "Visit us in Lutz, FL. Address, hours, phone, directions and social media." },
      { property: "og:title", content: "Visit Lutz Country Store & Café" },
      { property: "og:description", content: "Open Thu–Tue 7:30am – 3pm. Closed Wednesdays." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="eyebrow">Visit</div>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl">Come see us.</h1>
      <p className="mt-4 max-w-2xl text-foreground/75">
        Breakfast &amp; lunch served daily. Coffee, desserts, and ice cream available throughout the day.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sage-dark" />
              <div>
                <div className="font-display text-lg">Address</div>
                <div className="mt-1 text-sm text-foreground/75">19015 US-41<br />Lutz, FL 33549</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-sage-dark" />
              <div>
                <div className="font-display text-lg">Hours</div>
                <ul className="mt-1 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm text-foreground/75">
                  <li>Sunday</li><li>8:00am – 3:00pm</li>
                  <li>Mon – Tue</li><li>7:30am – 3:00pm</li>
                  <li>Wednesday</li><li>Closed</li>
                  <li>Thu – Fri</li><li>7:30am – 3:00pm</li>
                  <li>Saturday</li><li>8:00am – 3:00pm</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-sage-dark" />
              <div>
                <div className="font-display text-lg">Phone</div>
                <a href="tel:+18137244515" className="mt-1 block text-sm text-foreground/75 hover:text-primary">(813) 724-4515</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-sage-dark" />
              <div>
                <div className="font-display text-lg">Stay in touch</div>
                <div className="mt-2 flex gap-2">
                  <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 hover:bg-muted"><Facebook className="h-4 w-4" /></a>
                  <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 hover:bg-muted"><Instagram className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden rounded-2xl border border-border shadow-soft">
          <iframe
            title="Map to Lutz Country Store & Café"
            src="https://www.google.com/maps?q=19015+US-41,+Lutz,+FL+33549&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
