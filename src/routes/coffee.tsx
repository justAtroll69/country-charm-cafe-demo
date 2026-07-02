import { createFileRoute, Link } from "@tanstack/react-router";
import coffeeImg from "@/assets/coffee.jpg";

export const Route = createFileRoute("/coffee")({
  head: () => ({
    meta: [
      { title: "Specialty Coffee Bar in Lutz, FL | Lutz Country Store & Café" },
      { name: "description", content: "Specialty lattes, cappuccinos, cold brew, americanos, affogato & locally roasted beans in Lutz, FL. Barista-crafted espresso from Lutz Country Store & Café." },
      { name: "keywords", content: "coffee shop Lutz FL, specialty coffee Lutz, latte Lutz, cold brew Lutz, espresso Lutz Florida" },
      { property: "og:title", content: "Coffee Bar — Specialty Espresso in Lutz, FL" },
      { property: "og:description", content: "Crafted espresso drinks and locally roasted beans in Lutz, Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/coffee" },
      { property: "og:image", content: coffeeImg },
      { name: "twitter:title", content: "Coffee Bar — Lutz Country Store & Café" },
      { name: "twitter:description", content: "Specialty espresso and locally roasted beans in Lutz, FL." },
      { name: "twitter:image", content: coffeeImg },
    ],
    links: [{ rel: "canonical", href: "/coffee" }],
  }),
  component: CoffeePage,
});

const drinks = [
  ["Espresso", "Single or double shot."],
  ["Cappuccino", "Espresso, steamed milk, dry foam."],
  ["Specialty Latte", "Vanilla, caramel, lavender, brown sugar."],
  ["Americano", "Espresso lengthened with hot water."],
  ["Iced Coffee", "Slow-steeped, smooth, never bitter."],
  ["Cold Brew", "12-hour steep, served over ice."],
  ["Affogato", "Espresso poured over vanilla soft serve."],
  ["Hot Chocolate", "Rich cocoa, steamed milk, whipped cream."],
];

function CoffeePage() {
  return (
    <div>
      <section className="relative" aria-label="Coffee bar hero">
        <img src={coffeeImg} alt="Barista pulling espresso shots at the Lutz Country Store & Café coffee bar" width={1600} height={800} className="h-[50vh] w-full object-cover" />
        <div className="absolute inset-0 bg-wood-dark/45" aria-hidden="true" />
        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-end px-5 pb-12 lg:px-8">
          <p className="eyebrow !text-honey">The Coffee Bar</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">Specialty coffee in Lutz, FL — crafted, not rushed.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <p className="max-w-2xl text-lg text-foreground/75">
          Every drink starts with locally roasted beans, fresh milk, and unhurried hands. We rotate roasters seasonally and grind to order.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {drinks.map(([name, desc]) => (
            <article key={name} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h2 className="font-display text-xl text-foreground">{name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/menu" aria-label="See the full food menu at Lutz Country Store & Café" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">
            See the full food menu
          </Link>
          <Link to="/contact" aria-label="Get directions and hours" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
            Visit us in Lutz
          </Link>
        </div>
      </section>
    </div>
  );
}
