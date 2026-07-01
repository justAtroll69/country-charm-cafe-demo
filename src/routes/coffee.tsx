import { createFileRoute, Link } from "@tanstack/react-router";
import coffeeImg from "@/assets/coffee.jpg";

export const Route = createFileRoute("/coffee")({
  head: () => ({
    meta: [
      { title: "Coffee Bar — Lutz Country Store & Café" },
      { name: "description", content: "Specialty lattes, cappuccinos, americanos, cold brew, affogato and locally roasted beans." },
      { property: "og:title", content: "Coffee Bar — Lutz Country Store & Café" },
      { property: "og:description", content: "Crafted espresso drinks and locally roasted beans." },
      { property: "og:image", content: coffeeImg },
    ],
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
      <section className="relative">
        <img src={coffeeImg} alt="" className="h-[50vh] w-full object-cover" />
        <div className="absolute inset-0 bg-wood-dark/45" />
        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-end px-5 pb-12 lg:px-8">
          <div className="eyebrow !text-honey">The Coffee Bar</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-cream sm:text-6xl">Crafted espresso. Locally roasted beans.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <p className="max-w-2xl text-lg text-foreground/75">
          Every drink starts with locally roasted beans, fresh milk, and unhurried hands. We rotate roasters seasonally and grind to order.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {drinks.map(([name, desc]) => (
            <div key={name} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="font-display text-xl text-foreground">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">
            See the full food menu
          </Link>
        </div>
      </section>
    </div>
  );
}
