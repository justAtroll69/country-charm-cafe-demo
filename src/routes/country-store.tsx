import { createFileRoute, Link } from "@tanstack/react-router";
import storeImg from "@/assets/store.jpg";

export const Route = createFileRoute("/country-store")({
  head: () => ({
    meta: [
      { title: "The Country Store in Lutz, FL — Candy, Honey, Gifts & Vintage Finds" },
      { name: "description", content: "Shop old-fashioned candy, local honey, wind chimes, hand-poured gifts and vintage treasures at the Lutz Country Store — beside the café at 19015 US-41." },
      { name: "keywords", content: "country store Lutz FL, old fashioned candy Lutz, local honey Lutz, gift shop Lutz, vintage store Lutz" },
      { property: "og:title", content: "The Country Store — Lutz, FL" },
      { property: "og:description", content: "A little something for everyone: candy, honey, gifts, wind chimes and vintage finds." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/country-store" },
      { property: "og:image", content: storeImg },
      { name: "twitter:title", content: "The Country Store — Lutz Country Store & Café" },
      { name: "twitter:description", content: "Old-fashioned candy, local honey, gifts and vintage finds in Lutz, FL." },
      { name: "twitter:image", content: storeImg },
    ],
    links: [{ rel: "canonical", href: "/country-store" }],
  }),
  component: StorePage,
});

const categories = [
  { title: "Old-Fashioned Candy", body: "Glass jars of rock candy, ribbon candy, root beer barrels, and the classics you grew up on." },
  { title: "Local Honey", body: "Wildflower, orange blossom, and small-batch honey from neighboring apiaries." },
  { title: "Gifts & Goods", body: "Hand-poured candles, kitchen towels, ceramics, and printed cards." },
  { title: "Wind Chimes", body: "Hand-tuned chimes that sound as good as they look on the porch." },
  { title: "Vintage Finds", body: "A rotating shelf of one-of-a-kind pieces with a story." },
  { title: "Seasonal", body: "From summer porch décor to holiday gifts, our shelves change with the year." },
];

function StorePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <img src={storeImg} alt="Interior of the Lutz country store with wooden shelves of candy, honey and vintage gifts" width={1600} height={1024} className="rounded-2xl shadow-warm" />
        <div>
          <p className="eyebrow">The Country Store</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl">A little something for everyone in Lutz.</h1>
          <p className="mt-5 text-foreground/75">
            Tucked beside the café, our country store is part candy shop, part gift shop, part treasure hunt. Wander our wooden shelves and bring a piece of Lutz home with you.
          </p>
          <Link to="/contact" aria-label="Visit the country store — see hours and directions" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">
            Visit us in Lutz
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8" aria-label="Store categories">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="font-display text-xl text-primary">{c.title}</h2>
              <p className="mt-2 text-sm text-foreground/75">{c.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
