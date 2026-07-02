import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-sage-dark"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-sage-dark"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "CafeOrCoffeeShop", "LocalBusiness"],
  "@id": "/#restaurant",
  name: "Lutz Country Store & Café",
  alternateName: "Lutz Country Store and Cafe",
  description:
    "Family-owned café and country store in Lutz, FL serving homemade breakfast, smash burgers, sandwiches, homemade soups, specialty coffee and soft serve.",
  url: "/",
  telephone: "+1-813-724-4515",
  priceRange: "$$",
  servesCuisine: ["American", "Breakfast", "Burgers", "Sandwiches", "Coffee"],
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19015 US-41",
    addressLocality: "Lutz",
    addressRegion: "FL",
    postalCode: "33549",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.1631,
    longitude: -82.4626,
  },
  hasMap: "https://www.google.com/maps?q=19015+US-41,+Lutz,+FL+33549",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Saturday"], opens: "08:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"], opens: "07:30", closes: "15:00" },
  ],
  menu: "/menu",
  hasMenu: "/menu",
  acceptsReservations: "False",
  potentialAction: {
    "@type": "OrderAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.toasttab.com/local/order/lutz-country-store-19015-us-41",
      inLanguage: "en-US",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet", "http://purl.org/goodrelations/v1#DeliveryModePickUp"],
  },
  areaServed: [
    { "@type": "City", name: "Lutz" },
    { "@type": "City", name: "Land O' Lakes" },
    { "@type": "City", name: "Tampa" },
    { "@type": "City", name: "Wesley Chapel" },
  ],
  sameAs: [] as string[],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lutz Country Store & Café | Breakfast, Burgers & Coffee in Lutz, FL" },
      { name: "description", content: "Family-owned café in Lutz, FL serving homemade breakfast, burgers, sandwiches, specialty coffee & soft serve — plus a charming country store." },
      { name: "author", content: "Lutz Country Store & Café" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "US-FL" },
      { name: "geo.placename", content: "Lutz" },
      { name: "geo.position", content: "28.1631;-82.4626" },
      { name: "ICBM", content: "28.1631, -82.4626" },
      { property: "og:site_name", content: "Lutz Country Store & Café" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#5a6b4a" },
      { property: "og:title", content: "Lutz Country Store & Café | Breakfast, Burgers & Coffee in Lutz, FL" },
      { name: "twitter:title", content: "Lutz Country Store & Café | Breakfast, Burgers & Coffee in Lutz, FL" },
      { property: "og:description", content: "Family-owned café in Lutz, FL serving homemade breakfast, burgers, sandwiches, specialty coffee & soft serve — plus a charming country store." },
      { name: "twitter:description", content: "Family-owned café in Lutz, FL serving homemade breakfast, burgers, sandwiches, specialty coffee & soft serve — plus a charming country store." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b070d791-1201-4afb-957b-ebe9a910011b/id-preview-4d4e5c45--d13af597-9f1f-40b3-931c-bd2133d4947d.lovable.app-1783011467101.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b070d791-1201-4afb-957b-ebe9a910011b/id-preview-4d4e5c45--d13af597-9f1f-40b3-931c-bd2133d4947d.lovable.app-1783011467101.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Nunito+Sans:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(restaurantSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
