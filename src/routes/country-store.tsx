import { createFileRoute } from "@tanstack/react-router";
import storeImg from "@/assets/store.jpg";

export const Route = createFileRoute("/country-store")({
  head: () => ({
    meta: [
      { title: "Country Store — Lutz Country Store & Café" },
      { name: "description", content: "Old-fashioned candy, local honey, gifts, wind chimes, vintage finds and seasonal merchandise." },
      { property: "og:title", content: "The Country Store" },
      { property: "og:description", content: "A little something for everyone." },
      { property: "og:image", content: storeImg },
    ],
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
        <img src={storeImg} alt="Country store interior" className="rounded-2xl shadow-warm" />
        <div>
          <div className="eyebrow">The Country Store</div>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl">A little something for everyone.</h1>
          <p className="mt-5 text-foreground/75">
            Tucked beside the café, our country store is part candy shop, part gift shop, part treasure hunt. Wander our wooden shelves and bring a piece of Lutz home with you.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
