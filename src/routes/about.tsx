import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cafe.jpg";
import outdoorImg from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lutz Country Store & Café" },
      { name: "description", content: "Our story: a family-owned café in Lutz, FL built on homemade food, local coffee, and small-town hospitality." },
      { property: "og:title", content: "About Lutz Country Store & Café" },
      { property: "og:description", content: "A family-owned café built with heart." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <div className="eyebrow">About Us</div>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl">A family-owned café built with heart.</h1>

      <img src={heroImg} alt="Inside the café" className="mt-10 rounded-2xl shadow-warm" />

      <div className="prose mt-12 max-w-none text-foreground/80">
        <p className="text-lg">
          Lutz Country Store &amp; Café started the way most good things do — around a kitchen table, with a stack of recipes and a dream of building somewhere our neighbors would feel at home.
        </p>
        <p className="mt-5">
          We make our food from scratch using fresh ingredients, pour coffee from locally roasted beans, and run our café the way we'd want to be treated when we walk in the door. Service should be warm. The bacon should be crisp. The biscuits should still be a little steamy.
        </p>
        <p className="mt-5">
          Inside, the café opens into a country store stocked with old-fashioned candy, local honey, gifts, and vintage finds. Outside, picnic tables and string lights wait under the trees — perfect for live music on a Friday night or an after-school ice cream cone.
        </p>
        <p className="mt-5">
          Whether you're here for breakfast on the way to work, a long Saturday lunch, or a cup of coffee with a friend, we're glad you stopped in. Welcome to Lutz.
        </p>
      </div>

      <img src={outdoorImg} alt="The outdoor patio" className="mt-12 rounded-2xl shadow-warm" />
    </div>
  );
}
