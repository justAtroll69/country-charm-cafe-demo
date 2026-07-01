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

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Lutz Country Store & Café" },
      { name: "description", content: "Homemade breakfasts, burgers, sandwiches, soups, sweets and coffee at Lutz Country Store & Café." },
      { property: "og:title", content: "Menu — Lutz Country Store & Café" },
      { property: "og:description", content: "Browse our full menu of homemade favorites." },
      { property: "og:image", content: burgerImg },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <div className="eyebrow">The Menu</div>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl">Homemade, fresh, all day.</h1>
      <p className="mt-4 max-w-2xl text-foreground/75">
        Served Thursday through Tuesday. Breakfast and lunch all day, with coffee, desserts and soft serve available throughout. Closed Wednesdays.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://www.toasttab.com/local/order/lutz-country-store-19015-us-41" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-sage-dark">
          Order Online on Toast →
        </a>
        <a href="tel:+18137244515" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted">
          Call (813) 724-4515
        </a>
      </div>

      <div className="mt-14 space-y-14">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-2xl text-primary sm:text-3xl">{s.title}</h2>
            <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
              {s.items.map(([name, desc, price]) => (
                <div key={name} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 p-5">
                  <div className="min-w-0">
                    <div className="font-display text-lg text-foreground">{name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
                  </div>
                  <div className="shrink-0 font-display text-lg text-sage-dark">{price === "Market" ? price : `$${price}`}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
