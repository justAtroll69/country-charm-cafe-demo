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
      { title: "Lutz Country Store & Café — Coffee, Homemade Food & Hospitality" },
      { name: "description", content: "Handcrafted breakfasts, fresh sandwiches, juicy burgers, specialty coffee, and a country store in the heart of Lutz, FL." },
      { property: "og:title", content: "Lutz Country Store & Café" },
      { property: "og:description", content: "Where great coffee, homemade food, and small-town hospitality meet." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const favorites = [
  { name: "Bacon, Egg & Cheese Croissant", tag: "Breakfast", img: breakfastImg },
  { name: "Smash Burger", tag: "Burgers", img: burgerImg },
  { name: "Cuban Sandwich", tag: "Sandwiches", img: sandwichImg },
  { name: "Specialty Latte", tag: "Coffee", img: coffeeImg },
  { name: "Soft Serve Ice Cream", tag: "Sweets", img: icecreamImg },
  { name: "French Onion Soup", tag: "Homemade Soups", img: outdoorImg },
];

const reviews = [
  { quote: "Exactly what Lutz needed.", author: "Marisa K." },
  { quote: "The best local coffee.", author: "Tom R." },
  { quote: "Amazing family atmosphere.", author: "The Bennetts" },
  { quote: "The smash burgers are incredible.", author: "Devon P." },
  { quote: "The friendliest staff around.", author: "Carla M." },
  { quote: "Hidden gem.", author: "Janelle S." },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Inside the Lutz Country Store & Café" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/55 via-wood-dark/35 to-background" />
        </div>
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-end gap-8 px-5 pb-20 pt-32 lg:px-8 lg:pt-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-honey" /> Lutz, Florida
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              Where great coffee, homemade food &amp; small-town hospitality meet.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-cream/85 sm:text-lg">
              Handcrafted breakfasts, fresh sandwiches, juicy burgers, homemade soups, specialty coffee, soft serve ice cream, and a charming country store in the heart of Lutz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.toasttab.com/local/order/lutz-country-store-19015-us-41" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3 text-sm font-semibold text-wood-dark shadow-warm transition hover:brightness-95">
                Order Online <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition hover:bg-cream/20">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS BAR */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 text-sm text-foreground/80 sm:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-sage-dark" /> Open Thu–Tue · 7:30am – 3pm · Closed Wed</div>
          <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sage-dark" /> 19015 US-41, Lutz, FL 33549</div>
          <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-sage-dark" /> (813) 724-4515</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={outdoorImg} alt="Families enjoying the outdoor picnic area" loading="lazy" width={1600} height={1024} className="rounded-2xl shadow-warm" />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-soft sm:block">
              <div className="font-display text-3xl text-primary">12+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Years in Lutz</div>
            </div>
          </div>
          <div>
            <div className="eyebrow">Our Story</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">A family-owned café built with heart.</h2>
            <p className="mt-5 text-foreground/75">
              We started Lutz Country Store &amp; Café with a simple idea — a welcoming place where neighbors gather over an honest plate of homemade food and a really good cup of coffee. Everything we make starts with fresh ingredients, local roasts, and a whole lot of love.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              {["Homemade food", "Fresh ingredients", "Locally roasted coffee", "Friendly service", "Indoor & outdoor seating", "Charming country store"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-honey" /> {t}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAVORITES */}
      <section className="bg-muted/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow">Popular Favorites</div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl">Made fresh. Loved daily.</h2>
            </div>
            <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">See full menu →</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((f) => (
              <article key={f.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={f.img} alt={f.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="eyebrow">{f.tag}</div>
                  <h3 className="mt-2 font-display text-xl text-foreground">{f.name}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-muted-foreground">
            Also on the menu: Biscuits &amp; Gravy · Rio Burger · Chicken Salad Sandwich · BLT · Pastrami on Rye · Clam Chowder · Cappuccinos · Affogato
          </div>
        </div>
      </section>

      {/* COFFEE */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="eyebrow">The Coffee Bar</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">Crafted espresso. Locally roasted beans.</h2>
            <p className="mt-5 text-foreground/75">
              Specialty lattes, cappuccinos, americanos, iced coffee, hot chocolate, and a rotating selection of locally roasted beans — pulled with care by baristas who know your order.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Lattes", "Cappuccinos", "Americanos", "Cold Brew", "Affogato", "Hot Chocolate"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground/80">{t}</span>
              ))}
            </div>
            <Link to="/coffee" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">
              Explore the coffee menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={coffeeImg} alt="Specialty latte with rosetta art" loading="lazy" width={1600} height={1024} className="rounded-2xl shadow-warm" />
        </div>
      </section>

      {/* STORE */}
      <section className="bg-sage/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <img src={storeImg} alt="Inside the country store" loading="lazy" width={1600} height={1024} className="order-2 rounded-2xl shadow-warm lg:order-1" />
          <div className="order-1 lg:order-2">
            <div className="eyebrow">The Country Store</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">A little something for everyone.</h2>
            <p className="mt-5 text-foreground/75">
              Wander our wooden shelves stocked with old-fashioned candy, jars of local honey, hand-poured gifts, wind chimes, vintage finds, and a seasonal collection that changes with the year.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {["Old-fashioned candy", "Local honey", "Gifts", "Wind chimes", "Vintage finds", "Seasonal"].map((t) => (
                <div key={t} className="rounded-lg border border-border bg-card px-3 py-2 text-foreground/80">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <div className="eyebrow">Loved by the neighborhood</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">What folks are saying</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* EVENTS */}
      <section className="relative overflow-hidden bg-wood-dark text-cream">
        <div className="absolute inset-0 opacity-30">
          <img src={outdoorImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-wood-dark/70 to-wood-dark/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <div className="eyebrow !text-honey">On the Calendar</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">Live music. Community. Seasons.</h2>
            <p className="mt-5 text-cream/80">Bring the family — there's almost always something happening on the patio.</p>
            <Link to="/events" className="mt-7 inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-wood-dark hover:brightness-95">
              See all events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2">
            {[
              { icon: Music, title: "Live Music Fridays", body: "Local musicians on the patio every Friday evening." },
              { icon: Coffee, title: "Saturday Coffee Cupping", body: "Taste the new roast before it hits the menu." },
              { icon: Utensils, title: "Seasonal Specials", body: "Limited menus that follow the harvest." },
              { icon: Store, title: "Holiday Market", body: "Local makers, hot cider, and seasonal gifts." },
            ].map((e) => (
              <div key={e.title} className="rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur">
                <e.icon className="h-6 w-6 text-honey" />
                <h3 className="mt-3 font-display text-xl">{e.title}</h3>
                <p className="mt-2 text-sm text-cream/75">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="eyebrow">Gallery</div>
        <h2 className="mt-3 font-display text-3xl sm:text-5xl">A taste of the place.</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[breakfastImg, burgerImg, coffeeImg, sandwichImg, icecreamImg, storeImg, outdoorImg, heroImg].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt="" loading="lazy" className="aspect-square h-full w-full object-cover transition hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-cream shadow-warm lg:grid-cols-2">
          <div className="p-10 lg:p-14">
            <div className="eyebrow">Come Visit</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">We saved you a seat.</h2>
            <p className="mt-4 text-foreground/75">Breakfast &amp; lunch served daily. Coffee, desserts, and ice cream all day long.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-sage-dark" /> 19015 US-41, Lutz, FL 33549</li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-sage-dark" /> (813) 724-4515</li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 text-sage-dark" /> Open Thu–Tue 7:30am – 3pm (Closed Wed)</li>
            </ul>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark">
              Get directions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="min-h-[280px]">
            <iframe
              title="Map to Lutz Country Store & Café"
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
