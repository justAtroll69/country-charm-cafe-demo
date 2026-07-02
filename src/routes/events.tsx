import { createFileRoute } from "@tanstack/react-router";
import { Music, Coffee, Utensils, Store } from "lucide-react";
import outdoorImg from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Live Music & Community in Lutz, FL | Lutz Country Store & Café" },
      { name: "description", content: "Live music Fridays, Saturday coffee cuppings, seasonal tasting menus and holiday markets on the patio at Lutz Country Store & Café in Lutz, FL." },
      { name: "keywords", content: "live music Lutz FL, events Lutz café, Friday music Lutz, holiday market Lutz" },
      { property: "og:title", content: "Events at Lutz Country Store & Café" },
      { property: "og:description", content: "Live music, community gatherings, and seasonal celebrations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
      { property: "og:image", content: outdoorImg },
      { name: "twitter:title", content: "Events at Lutz Country Store & Café" },
      { name: "twitter:description", content: "Live music, community gatherings and seasonal celebrations in Lutz, FL." },
      { name: "twitter:image", content: outdoorImg },
    ],
    links: [{ rel: "canonical", href: "/events" }],
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
      <section className="relative" aria-label="Events hero">
        <img src={outdoorImg} alt="Outdoor patio with string lights ready for live music at Lutz Country Store & Café" width={1600} height={720} className="h-[45vh] w-full object-cover" />
        <div className="absolute inset-0 bg-wood-dark/50" aria-hidden="true" />
        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-end px-5 pb-12 lg:px-8">
          <p className="eyebrow !text-honey">On the Calendar</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">Live music &amp; community events in Lutz, FL.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {events.map((e) => (
            <article key={e.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <e.icon className="h-6 w-6 text-sage-dark" aria-hidden="true" />
              <h2 className="mt-3 font-display text-xl">{e.title}</h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{e.when}</p>
              <p className="mt-3 text-sm text-foreground/75">{e.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
