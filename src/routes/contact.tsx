import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Hours & Directions | Lutz Country Store & Café" },
      { name: "description", content: "Visit Lutz Country Store & Café at 19015 US-41, Lutz, FL 33549. Call (813) 724-4515. Open Thu–Tue 7:30am–3pm, closed Wednesdays. Get directions." },
      { name: "keywords", content: "Lutz Country Store address, Lutz café hours, directions to Lutz café, contact Lutz Country Store" },
      { property: "og:title", content: "Visit Lutz Country Store & Café" },
      { property: "og:description", content: "Open Thu–Tue 7:30am – 3pm. 19015 US-41, Lutz, FL 33549." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: "Visit Lutz Country Store & Café" },
      { name: "twitter:description", content: "Address, hours, phone and directions." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <p className="eyebrow">Visit</p>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl">Visit Lutz Country Store &amp; Café.</h1>
      <p className="mt-4 max-w-2xl text-foreground/75">
        Breakfast &amp; lunch served daily in Lutz, FL. Coffee, desserts, and ice cream available throughout the day.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <address className="space-y-6 not-italic">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft" aria-labelledby="addr-h">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sage-dark" aria-hidden="true" />
              <div>
                <h2 id="addr-h" className="font-display text-lg">Address</h2>
                <p className="mt-1 text-sm text-foreground/75">19015 US-41<br />Lutz, FL 33549</p>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft" aria-labelledby="hours-h">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-sage-dark" aria-hidden="true" />
              <div>
                <h2 id="hours-h" className="font-display text-lg">Hours</h2>
                <ul className="mt-1 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm text-foreground/75">
                  <li>Sunday</li><li>8:00am – 3:00pm</li>
                  <li>Mon – Tue</li><li>7:30am – 3:00pm</li>
                  <li>Wednesday</li><li>Closed</li>
                  <li>Thu – Fri</li><li>7:30am – 3:00pm</li>
                  <li>Saturday</li><li>8:00am – 3:00pm</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft" aria-labelledby="phone-h">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-sage-dark" aria-hidden="true" />
              <div>
                <h2 id="phone-h" className="font-display text-lg">Phone</h2>
                <a href="tel:+18137244515" aria-label="Call Lutz Country Store & Café" className="mt-1 block text-sm text-foreground/75 hover:text-primary">(813) 724-4515</a>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft" aria-labelledby="social-h">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-sage-dark" aria-hidden="true" />
              <div>
                <h2 id="social-h" className="font-display text-lg">Stay in touch</h2>
                <div className="mt-2 flex gap-2">
                  <a href="#" aria-label="Follow Lutz Country Store & Café on Facebook" className="rounded-full border border-border p-2 hover:bg-muted"><Facebook className="h-4 w-4" aria-hidden="true" /></a>
                  <a href="#" aria-label="Follow Lutz Country Store & Café on Instagram" className="rounded-full border border-border p-2 hover:bg-muted"><Instagram className="h-4 w-4" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </section>
        </address>
        <div className="min-h-[420px] overflow-hidden rounded-2xl border border-border shadow-soft">
          <iframe
            title="Google Map — Lutz Country Store & Café, 19015 US-41, Lutz, FL 33549"
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
