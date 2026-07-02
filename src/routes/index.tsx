import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Utensils, Store, Music, MapPin, Clock, Phone, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import burgerImg from "@/assets/burger.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import storeImg from "@/assets/store.jpg";
import outdoorImg from "@/assets/outdoor.jpg";
import icecreamImg from "@/assets/icecream.jpg";
import sandwichImg from "@/assets/sandwich.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lutz Country Store & Café | Breakfast, Burgers & Coffee in Lutz, FL" },
      { name: "description", content: "Family-owned café in Lutz, FL. Homemade breakfast, smash burgers, fresh sandwiches, specialty coffee & soft serve. Open Thu–Tue 7:30am–3pm. Order online today." },
      { name: "keywords", content: "Lutz café, Lutz FL breakfast, coffee shop Lutz, best burgers Lutz, country store Lutz, restaurants Lutz FL" },
      { property: "og:title", content: "Lutz Country Store & Café — Homemade Food & Coffee in Lutz, FL" },
      { property: "og:description", content: "Where great coffee, homemade food, and small-town hospitality meet in Lutz, Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: "Lutz Country Store & Café" },
      { name: "twitter:description", content: "Homemade breakfast, burgers, and specialty coffee in Lutz, FL." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as unknown as { rel: string; href: string },
    ],
  }),
  component: Home,
});

const favorites = [
  { name: "Bacon, Egg & Cheese Croissant", tag: "Breakfast", img: breakfastImg, alt: "Bacon, egg and cheese croissant breakfast sandwich served at Lutz Country Store & Café" },
  { name: "Smash Burger", tag: "Burgers", img: burgerImg, alt: "Double smash burger with melted American cheese on a toasted brioche bun" },
  { name: "Cuban Sandwich", tag: "Sandwiches", img: sandwichImg, alt: "Pressed Cuban sandwich with roast pork, ham, Swiss cheese and pickles" },
  { name: "Specialty Latte", tag: "Coffee", img: coffeeImg, alt: "Handcrafted specialty latte with rosetta latte art in a ceramic cup" },
  { name: "Soft Serve Ice Cream", tag: "Sweets", img: icecreamImg, alt: "Vanilla soft serve ice cream cone from the Lutz Country Store" },
  { name: "French Onion Soup", tag: "Homemade Soups", img: outdoorImg, alt: "Families enjoying homemade soups at the outdoor picnic tables" },
];

const reviews = [
 { quote: "This has quickly become a favorite...you can tell this place was built with a lot of heart.", author: "Emily" },
 { quote: "The chicken salad sandwich and smoked salmon sandwich live in my dreams now.", author: "Liz B" },
 { quote: "Exactly what Lutz needed! Friendly service, impressive breakfast, and tasty coffee.", author: "Jonathan Keenan" },
 { quote: "Amazing coffee! Some of the best we've had from a local spot.", author: "Delaney Moody" },
 { quote: "This restaurant gives you that down-home vibe...they learn your name.", author: "M L" },
 { quote: "The biscuits and gravy were phenomenal. The staff make the dining experience extra special.", author: "Lauren" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden" aria-label="Welcome">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Warm, rustic interior of Lutz Country Store & Café with wooden shelves and cozy seating" width={1920} height={1280} fetchPriority="high" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/55 via-wood-dark/35 to-background" />
        </div>
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-end gap-8 px-5 pb-20 pt-32 lg:px-8 lg:pt-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-honey" /> Lutz, Florida
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              Homemade breakfast, burgers &amp; specialty coffee in Lutz, FL.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-cream/85 sm:text-lg">
              Handcrafted breakfasts, fresh sandwiches, juicy smash burgers, homemade soups, specialty coffee, soft serve ice cream, and a charming country store in the heart of Lutz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.toasttab.com/local/order/lutz-country-store-19015-us-41" target="_blank" rel="noopener noreferrer" aria-label="Order online from Lutz Country Store & Café on Toast" className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3 text-sm font-semibold text-wood-dark shadow-warm transition hover:brightness-95">
                Order Online <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link to="/menu" aria-label="View the full breakfast and lunch menu" className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition hover:bg-cream/20">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS BAR */}
      <section className="border-y border-border bg-cream" aria-label="Hours, location and phone">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 text-sm text-foreground/80 sm:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-sage-dark" aria-hidden="true" /> Open Thu–Tue · 7:30am – 3pm · Closed Wed</div>
          <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sage-dark" aria-hidden="true" /> 19015 US-41, Lutz, FL 33549</div>
          <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-sage-dark" aria-hidden="true" /> <a href="tel:+18137244515" className="hover:text-primary">(813) 724-4515</a></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8" aria-labelledby="about-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={outdoorImg} alt="Families enjoying the outdoor picnic area at Lutz Country Store & Café under string lights" loading="lazy" width={1600} height={1024} className="rounded-2xl shadow-warm" />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-soft sm:block">
              <div className="font-display text-2xl text-primary">Family-Owned</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Homemade Daily</div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 id="about-heading" className="mt-3 font-display text-3xl sm:text-5xl">A family-owned Lutz café built with heart.</h2>
            <p className="mt-5 text-foreground/75">
              We started Lutz Country Store &amp; Café with a simple idea — a welcoming place where neighbors gather over an honest plate of homemade food and a really good cup of coffee. Everything we make starts with fresh ingredients, local roasts, and a whole lot of love.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              {["Homemade food", "Fresh ingredients", "Locally roasted coffee", "Friendly service", "Indoor & outdoor seating", "Charming country store"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-honey" aria-hidden="true" /> {t}</li>
              ))}
            </ul>
            <Link to="/about" aria-label="Read more about the Lutz Country Store & Café story" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              More about us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAVORITES */}
      <section className="bg-muted/60 py-24" aria-labelledby="favorites-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Popular Favorites</p>
              <h2 id="favorites-heading" className="mt-3 font-display text-3xl sm:text-5xl">Made fresh. Loved daily.</h2>
            </div>
            <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">See full menu →</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((f) => (
              <article key={f.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={f.img} alt={f.alt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="eyebrow">{f.tag}</p>
                  <h3 className="mt-2 font-display text-xl text-foreground">{f.name}</h3>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Also on the menu: Biscuits &amp; Gravy · Rio Burger · Chicken Salad Sandwich · BLT · Pastrami on Rye · Clam Chowder · Cappuccinos · Affogato
          </p>
        </div>
      </section>

      {/* COFFEE */}
      <section className="relative overflow-hidden py-24" aria-labelledby="coffee-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">The Coffee Bar</p>
            <h2 id="coffee-heading" className="mt-3 font-display text-3xl sm:text-5xl">Crafted espresso. Locally roasted beans.</h2>
            <p className="mt-5 text-foreground/75">
              Specialty lattes, cappuccinos, americanos, iced coffee, hot chocolate, and a rotating selection of locally roasted beans — pulled with care by baristas who know your order.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Lattes", "Cappuccinos", "Americanos", "Cold Brew", "Affogato", "Hot Chocolate"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground/80">{t}</span>
              ))}
            </div>
            <Link to="/coffee" aria-label="Explore the full coffee bar menu" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">
              Explore the coffee menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <img src={coffeeImg} alt="Barista-crafted specialty latte with rosetta art at Lutz Country Store & Café" loading="lazy" width={1600} height={1024} className="rounded-2xl shadow-warm" />
        </div>
      </section>

      {/* STORE */}
      <section className="bg-sage/10 py-24" aria-labelledby="store-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <img src={storeImg} alt="Wooden shelves stocked with old-fashioned candy, local honey and gifts inside the country store" loading="lazy" width={1600} height={1024} className="order-2 rounded-2xl shadow-warm lg:order-1" />
          <div className="order-1 lg:order-2">
            <p className="eyebrow">The Country Store</p>
            <h2 id="store-heading" className="mt-3 font-display text-3xl sm:text-5xl">A little something for everyone.</h2>
            <p className="mt-5 text-foreground/75">
              Wander our wooden shelves stocked with old-fashioned candy, jars of local honey, hand-poured gifts, wind chimes, vintage finds, and a seasonal collection that changes with the year.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {["Old-fashioned candy", "Local honey", "Gifts", "Wind chimes", "Vintage finds", "Seasonal"].map((t) => (
                <div key={t} className="rounded-lg border border-border bg-card px-3 py-2 text-foreground/80">{t}</div>
              ))}
            </div>
            <Link to="/country-store" aria-label="Browse the Lutz country store" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Visit the country store <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">Loved by the neighborhood</p>
            <h2 id="reviews-heading" className="mt-3 font-display text-3xl sm:text-5xl">What folks are saying</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-10 text-center">
            <Link to="/reviews" className="text-sm font-semibold text-primary hover:underline">Read more customer reviews →</Link>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="relative overflow-hidden bg-wood-dark text-cream" aria-labelledby="events-heading">
        <div className="absolute inset-0 opacity-30">
          <img src={outdoorImg} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-wood-dark/70 to-wood-dark/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <p className="eyebrow !text-honey">On the Calendar</p>
            <h2 id="events-heading" className="mt-3 font-display text-3xl sm:text-5xl">Live music. Community. Seasons.</h2>
            <p className="mt-5 text-cream/80">Bring the family — there's almost always something happening on the patio.</p>
            <Link to="/events" aria-label="See all upcoming café events" className="mt-7 inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-wood-dark hover:brightness-95">
              See all events <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2">
            {[
              { icon: Music, title: "Live Music Fridays", body: "Local musicians on the patio every Friday evening." },
              { icon: Coffee, title: "Saturday Coffee Cupping", body: "Taste the new roast before it hits the menu." },
              { icon: Utensils, title: "Seasonal Specials", body: "Limited menus that follow the harvest." },
              { icon: Store, title: "Holiday Market", body: "Local makers, hot cider, and seasonal gifts." },
            ].map((e) => (
              <article key={e.title} className="rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur">
                <e.icon className="h-6 w-6 text-honey" aria-hidden="true" />
                <h3 className="mt-3 font-display text-xl">{e.title}</h3>
                <p className="mt-2 text-sm text-cream/75">{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8" aria-labelledby="gallery-heading">
        <p className="eyebrow">Gallery</p>
        <h2 id="gallery-heading" className="mt-3 font-display text-3xl sm:text-5xl">A taste of the place.</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { src: breakfastImg, alt: "Homemade breakfast plate with eggs, bacon and hash browns" },
            { src: burgerImg, alt: "Juicy smash burger with cheese and house sauce" },
            { src: coffeeImg, alt: "Specialty latte with heart-shaped latte art" },
            { src: sandwichImg, alt: "Pressed Cuban sandwich cut in half" },
            { src: icecreamImg, alt: "Soft serve ice cream cone" },
            { src: storeImg, alt: "Interior of the Lutz country store with vintage goods" },
            { src: outdoorImg, alt: "Outdoor picnic tables under string lights" },
            { src: heroImg, alt: "Rustic modern café interior with wooden accents" },
          ].map((g, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-square h-full w-full object-cover transition hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8" aria-labelledby="visit-heading">
        <div className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-cream shadow-warm lg:grid-cols-2">
          <div className="p-10 lg:p-14">
            <p className="eyebrow">Come Visit</p>
            <h2 id="visit-heading" className="mt-3 font-display text-3xl sm:text-4xl">We saved you a seat.</h2>
            <p className="mt-4 text-foreground/75">Breakfast &amp; lunch served daily. Coffee, desserts, and ice cream all day long.</p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-sage-dark" aria-hidden="true" /> 19015 US-41, Lutz, FL 33549</div>
              <div className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-sage-dark" aria-hidden="true" /> <a href="tel:+18137244515" className="hover:text-primary">(813) 724-4515</a></div>
              <div className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 text-sage-dark" aria-hidden="true" /> Open Thu–Tue 7:30am – 3pm (Closed Wed)</div>
            </address>
            <Link to="/contact" aria-label="Get directions to Lutz Country Store & Café" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">
              Get directions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="min-h-[280px]">
            <iframe
              title="Google Map showing Lutz Country Store & Café at 19015 US-41, Lutz, FL"
              src="https://www.google.com/maps?q=19015+US-41,+Lutz,+FL+33549&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
