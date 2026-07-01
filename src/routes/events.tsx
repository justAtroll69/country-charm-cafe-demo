import { createFileRoute } from "@tanstack/react-router";
import { Music, Coffee, Utensils, Store } from "lucide-react";
import outdoorImg from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Lutz Country Store & Café" },
      { name: "description", content: "Live music, community gatherings, seasonal specials and holiday events at Lutz Country Store & Café." },
      { property: "og:title", content: "Events at Lutz Country Store & Café" },
      { property: "og:description", content: "Live music, community gatherings, and seasonal celebrations." },
      { property: "og:image", content: outdoorImg },
    ],
  }),
  component: EventsPage,
});

const events = [
  { icon: Music, title: "Live Music Fridays", when: "Every Friday · 6 – 9pm", body: "Local musicians on the patio. Family-friendly, always free." },
  { icon: Coffee, title: "Saturday Coffee Cupping", when: "First Saturday · 10am", body: "Taste the new roast with our baristas before it hits the menu." },
  { icon: Utensils, title: "Seasonal Tasting Menus", when: "Spring · Summer · Fall · Winter", body: "Limited menus that follow the local harvest." },
  { icon: Store, title: "Holiday Market", when: "December", body: "Local makers, hot cider, and seasonal gifts in the store." },
];

function EventsPage() {
  return (
    <div>
      <section className="relative">
        <img src={outdoorImg} alt="" className="h-[45vh] w-full object-cover" />
        <div className="absolute inset-0 bg-wood-dark/50" />
        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-end px-5 pb-12 lg:px-8">
          <div className="eyebrow !text-honey">On the Calendar</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">Something is always happening on the patio.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {events.map((e) => (
            <article key={e.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <e.icon className="h-6 w-6 text-sage-dark" />
              <h2 className="mt-3 font-display text-xl">{e.title}</h2>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{e.when}</div>
              <p className="mt-3 text-sm text-foreground/75">{e.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
