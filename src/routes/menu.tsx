import { createFileRoute } from "@tanstack/react-router";
import burgerImg from "@/assets/burger.jpg";

const sections = [
  {
    title: "Breakfast",
    items: [
      ["Bacon, Egg & Cheese Croissant", "Flaky butter croissant, crisp bacon, melted cheddar.", "8.50"],
      ["Biscuits & Gravy", "Buttermilk biscuits smothered in homemade sausage gravy.", "7.95"],
      ["Country Breakfast Platter", "Two eggs, bacon or sausage, hash browns, toast.", "10.50"],
      ["Avocado Toast", "Sourdough, smashed avocado, soft egg, chili flakes.", "9.25"],
    ],
  },
  {
    title: "Burgers",
    items: [
      ["Rio Burger", "Pepper jack, fried egg, bacon, chipotle aioli.", "13.95"],
      ["Smash Burger", "Double smashed beef, American cheese, house sauce.", "11.95"],
      ["Mushroom Swiss", "Sautéed mushrooms, Swiss, garlic aioli.", "12.50"],
    ],
  },
  {
    title: "Sandwiches",
    items: [
      ["Cuban Sandwich", "Roast pork, ham, Swiss, pickles, mustard, pressed.", "11.50"],
      ["Chicken Salad Sandwich", "House chicken salad on a buttery croissant.", "10.25"],
      ["BLT", "Thick-cut bacon, lettuce, tomato, mayo on sourdough.", "9.50"],
      ["Pastrami on Rye", "Hand-cut pastrami, Swiss, spicy mustard.", "12.95"],
    ],
  },
  {
    title: "Homemade Soups",
    items: [
      ["Clam Chowder", "New England style, made fresh daily.", "6.50"],
      ["French Onion Soup", "Slow-cooked onions, gruyère, toasted baguette.", "7.50"],
    ],
  },
  {
    title: "Sweets",
    items: [
      ["Soft Serve Ice Cream", "Vanilla, chocolate, or twist.", "4.50"],
      ["Affogato", "Espresso poured over vanilla soft serve.", "5.95"],
      ["Daily Pastries", "Baked fresh in-house.", "Market"],
    ],
  },
];

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Lutz Country Store & Café Menu",
  hasMenuSection: sections.map((s) => ({
    "@type": "MenuSection",
    name: s.title,
    hasMenuItem: s.items.map(([name, desc, price]) => ({
      "@type": "MenuItem",
      name,
      description: desc,
      offers: price === "Market" ? undefined : { "@type": "Offer", price, priceCurrency: "USD" },
    })),
  })),
};

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Homemade Breakfast, Burgers & Sandwiches | Lutz Country Store & Café" },
      { name: "description", content: "Full menu at Lutz Country Store & Café: homemade breakfast, smash burgers, Cuban sandwiches, French onion soup, soft serve & specialty coffee. Order online." },
      { name: "keywords", content: "Lutz café menu, breakfast Lutz FL, smash burger Lutz, Cuban sandwich Lutz, homemade soup Lutz" },
      { property: "og:title", content: "Menu — Lutz Country Store & Café" },
      { property: "og:description", content: "Browse our full menu of homemade favorites and order online." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
      { property: "og:image", content: burgerImg },
      { name: "twitter:title", content: "Menu — Lutz Country Store & Café" },
      { name: "twitter:description", content: "Homemade breakfast, burgers, sandwiches, soups & sweets." },
      { name: "twitter:image", content: burgerImg },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(menuSchema) }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <p className="eyebrow">The Menu</p>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl">Homemade breakfast, burgers &amp; more in Lutz, FL.</h1>
      <p className="mt-4 max-w-2xl text-foreground/75">
        Served Thursday through Tuesday. Breakfast and lunch all day, with coffee, desserts and soft serve available throughout. Closed Wednesdays.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://www.toasttab.com/local/order/lutz-country-store-19015-us-41" target="_blank" rel="noopener noreferrer" aria-label="Order Lutz Country Store & Café online via Toast" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-sage-dark">
          Order Online on Toast →
        </a>
        <a href="tel:+18137244515" aria-label="Call Lutz Country Store & Café at 813-724-4515" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted">
          Call (813) 724-4515
        </a>
      </div>

      <div className="mt-14 space-y-14">
        {sections.map((s) => (
          <section key={s.title} aria-label={s.title}>
            <h2 className="font-display text-2xl text-primary sm:text-3xl">{s.title}</h2>
            <ul className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
              {s.items.map(([name, desc, price]) => (
                <li key={name} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 p-5">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-foreground">{name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                  <div className="shrink-0 font-display text-lg text-sage-dark">{price === "Market" ? price : `$${price}`}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
