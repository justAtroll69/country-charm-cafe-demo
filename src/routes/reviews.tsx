import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

const reviews = [
  { quote: "This has quickly become a favorite...you can tell this place was built with a lot of heart.", author: "Emily" },
  { quote: "The chicken salad sandwich and smoked salmon sandwich live in my dreams now.", author: "Liz B" },
  { quote: "Exactly what Lutz needed! Friendly service, impressive breakfast, and tasty coffee.", author: "Jonathan Keenan" },
  { quote: "Amazing coffee! Some of the best we've had from a local spot.", author: "Delaney Moody" },
  { quote: "This restaurant gives you that down-home vibe...they learn your name.", author: "M L" },
  { quote: "The biscuits and gravy were phenomenal. The staff make the dining experience extra special.", author: "Lauren" },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Lutz Country Store & Café",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: reviews.length,
    bestRating: "5",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    reviewBody: r.quote,
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  })),
};

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — What Customers Say | Lutz Country Store & Café" },
      { name: "description", content: "Read real customer reviews of Lutz Country Store & Café: 5-star coffee, smash burgers, homemade breakfast and the friendliest staff in Lutz, FL." },
      { name: "keywords", content: "Lutz Country Store reviews, best café Lutz FL, top rated coffee Lutz" },
      { property: "og:title", content: "Reviews — Lutz Country Store & Café" },
      { property: "og:description", content: "Real 5-star reviews from the Lutz community." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:title", content: "Reviews — Lutz Country Store & Café" },
      { name: "twitter:description", content: "See what customers are saying about our café in Lutz, FL." },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(reviewSchema) }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="text-center">
        <p className="eyebrow">Reviews</p>
        <h1 className="mt-3 font-display text-4xl sm:text-6xl">Loved by the Lutz community.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-foreground/75">
          We're grateful for every kind word — here are a few we've especially loved.
        </p>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.author} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex gap-0.5 text-honey" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />)}
            </div>
            <blockquote className="mt-4 font-display text-xl text-foreground">"{r.quote}"</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">— {r.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
