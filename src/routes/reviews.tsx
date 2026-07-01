import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Lutz Country Store & Café" },
      { name: "description", content: "What customers are saying about Lutz Country Store & Café: coffee, smash burgers, family atmosphere, and friendly staff." },
      { property: "og:title", content: "Reviews — Lutz Country Store & Café" },
      { property: "og:description", content: "Real reviews from the Lutz community." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { quote: "Exactly what Lutz needed.", author: "Marisa K." },
  { quote: "The best local coffee — I'm there every morning before work.", author: "Tom R." },
  { quote: "Amazing family atmosphere. The kids love the picnic area.", author: "The Bennetts" },
  { quote: "The smash burgers are incredible. Crispy edges, melted cheese, perfect bun.", author: "Devon P." },
  { quote: "The friendliest staff around. They remember your name and your order.", author: "Carla M." },
  { quote: "Hidden gem. The country store is half the charm.", author: "Janelle S." },
  { quote: "Cuban sandwich is the real deal. Crusty, pressed, exactly right.", author: "Hector L." },
  { quote: "French onion soup on a cool evening on the patio — perfect.", author: "Renee F." },
];

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="text-center">
        <div className="eyebrow">Reviews</div>
        <h1 className="mt-3 font-display text-4xl sm:text-6xl">Loved by the Lutz community.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-foreground/75">
          We're grateful for every kind word — here are a few we've especially loved.
        </p>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.author} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex gap-0.5 text-honey">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="mt-4 font-display text-xl text-foreground">"{r.quote}"</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">— {r.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
