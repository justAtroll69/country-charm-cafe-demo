import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cafe.jpg";
import outdoorImg from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Family-Owned Café & Country Store in Lutz, FL" },
      { name: "description", content: "The story behind Lutz Country Store & Café — a family-owned Lutz, FL café built on homemade food, locally roasted coffee, and small-town hospitality." },
      { name: "keywords", content: "about Lutz Country Store, family owned café Lutz FL, local restaurant Lutz story" },
      { property: "og:title", content: "About Lutz Country Store & Café" },
      { property: "og:description", content: "A family-owned Lutz café built with heart." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: "About Lutz Country Store & Café" },
      { name: "twitter:description", content: "Our story — homemade food, local coffee, small-town hospitality." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <p className="eyebrow">About Us</p>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl">A family-owned café built with heart in Lutz, FL.</h1>

      <img src={heroImg} alt="Warm rustic interior of Lutz Country Store & Café with wooden accents and cozy seating" width={1600} height={1024} loading="lazy" className="mt-10 rounded-2xl shadow-warm" />

      <div className="prose mt-12 max-w-none text-foreground/80">
        <p className="text-lg">
          Lutz Country Store &amp; Café started the way most good things do — around a kitchen table, with a stack of recipes and a dream of building somewhere our neighbors would feel at home.
        </p>
        <p className="mt-5">
          We make our food from scratch using fresh ingredients, pour coffee from locally roasted beans, and run our café the way we'd want to be treated when we walk in the door. Service should be warm. The bacon should be crisp. The biscuits should still be a little steamy.
        </p>
        <h2 className="mt-10 font-display text-2xl text-primary sm:text-3xl">More than a café</h2>
        <p className="mt-5">
          Inside, the café opens into a <Link to="/country-store" className="text-primary hover:underline">country store</Link> stocked with old-fashioned candy, local honey, gifts, and vintage finds. Outside, picnic tables and string lights wait under the trees — perfect for <Link to="/events" className="text-primary hover:underline">live music on a Friday night</Link> or an after-school ice cream cone.
        </p>
        <h2 className="mt-10 font-display text-2xl text-primary sm:text-3xl">Come say hello</h2>
        <p className="mt-5">
          Whether you're here for <Link to="/menu" className="text-primary hover:underline">breakfast</Link> on the way to work, a long Saturday lunch, or a <Link to="/coffee" className="text-primary hover:underline">cup of coffee</Link> with a friend, we're glad you stopped in. Welcome to Lutz.
        </p>
      </div>

      <img src={outdoorImg} alt="Outdoor picnic patio at Lutz Country Store & Café with string lights and shade trees" width={1600} height={1024} loading="lazy" className="mt-12 rounded-2xl shadow-warm" />
    </article>
  );
}
