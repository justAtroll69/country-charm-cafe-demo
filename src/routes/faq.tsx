import { createFileRoute, Link } from "@tanstack/react-router";

const faqs = [
  {
    q: "Where is Lutz Country Store & Café located?",
    a: "We're at 19015 US-41, Lutz, FL 33549 — on US-41 in the heart of Lutz, easy to reach from Land O' Lakes, Wesley Chapel and North Tampa.",
  },
  {
    q: "What are your hours?",
    a: "We're open Thursday through Tuesday, 7:30am – 3:00pm on weekdays and 8:00am – 3:00pm on weekends. We're closed on Wednesdays.",
  },
  {
    q: "Do you serve breakfast all day?",
    a: "Yes. Our full breakfast menu — biscuits and gravy, breakfast croissants, country platters and avocado toast — is available every open hour until 3:00pm.",
  },
  {
    q: "Can I order online for pickup?",
    a: "Yes — you can order online any time through our Toast page and pick up at 19015 US-41.",
  },
  {
    q: "Do you have outdoor seating?",
    a: "Yes. Our shaded picnic area with string lights is family- and dog-friendly, and hosts live music on Friday evenings.",
  },
  {
    q: "Do you have vegetarian or lighter options?",
    a: "Yes. Avocado toast, French onion soup, chicken salad, BLTs and specialty coffee are all popular lighter picks alongside our burgers and full breakfasts.",
  },
  {
    q: "Do you take reservations?",
    a: "Seating is first-come, first-served — no reservations needed. Larger groups are welcome; call (813) 724-4515 in advance and we'll do our best to prep a table.",
  },
  {
    q: "What kind of coffee do you serve?",
    a: "Barista-crafted specialty espresso — lattes, cappuccinos, americanos, cold brew, affogato and seasonal drinks — pulled from locally roasted beans.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Hours, Location, Ordering | Lutz Country Store & Café" },
      { name: "description", content: "Answers to common questions about Lutz Country Store & Café: hours, location, online ordering, outdoor seating, vegetarian options and more." },
      { name: "keywords", content: "Lutz café hours, Lutz Country Store FAQ, order online Lutz, café near Land O' Lakes" },
      { property: "og:title", content: "FAQ — Lutz Country Store & Café" },
      { property: "og:description", content: "Hours, location, ordering, seating and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:title", content: "FAQ — Lutz Country Store & Café" },
      { name: "twitter:description", content: "Answers to common questions." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> <span aria-hidden="true">/</span> <span className="text-foreground">FAQ</span>
      </nav>
      <p className="eyebrow mt-4">Frequently Asked</p>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl">Questions we hear the most.</h1>
      <p className="mt-4 max-w-2xl text-foreground/75">
        Everything you need to know before your visit to Lutz Country Store &amp; Café in Lutz, Florida.
      </p>

      <div className="mt-12 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-soft">
            <summary className="cursor-pointer list-none font-display text-lg text-foreground marker:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{f.q}</span>
                <span aria-hidden="true" className="text-sage-dark transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-foreground/75">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-cream p-8 text-center">
        <h2 className="font-display text-2xl">Still have a question?</h2>
        <p className="mt-2 text-sm text-foreground/75">Call us or come say hello at 19015 US-41, Lutz, FL.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href="tel:+18137244515" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">Call (813) 724-4515</a>
          <Link to="/contact" className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">Get directions</Link>
        </div>
      </div>
    </div>
  );
}
