type SiteConfig = {
  url: string;
  name: string;
  shortName: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  hour24Title: string;
  hour24Desc: string;
  cheapNearMeTitle: string;
  cheapNearMeDesc: string;
  phone: string;
  phoneDisplay: string;
  ratingValue: string;
  reviewCount: string;
  logoWords: [string, string, string];
  cityTitleFn: (city: string) => string;
  cityDescFn: (city: string, region: string) => string;
};

const isCheap = process.env.NEXT_PUBLIC_SITE === "cheapcarsrecovery";

export const siteConfig: SiteConfig = isCheap
  ? {
      url: "https://cheapcarsrecovery.co.uk",
      name: "Cheap Car Recovery",
      shortName: "cheapcarsrecovery",
      defaultTitle: "Cheap Car Recovery UK | 24/7 Breakdown & Recovery Service",
      titleTemplate: "%s | Cheap Car Recovery UK",
      defaultDescription:
        "Get instant quotes for cheap car recovery anywhere in the UK. Nationwide 24/7 breakdown recovery. Fast, reliable, affordable. Get a quote now.",
      keywords: [
        "cheap car recovery",
        "cheapest car recovery UK",
        "car breakdown recovery",
        "cheap breakdown recovery",
        "affordable car recovery",
        "24 hour car recovery UK",
      ],
      ogTitle: "Cheap Car Recovery UK | 24/7 Breakdown Service",
      ogDescription:
        "Nationwide cheap car recovery. Get instant fixed-price quotes online.",
      hour24Title: "24 Hour Cheap Car Recovery UK | 24/7 Breakdown Service",
      hour24Desc:
        "Need 24 hour car recovery? We provide cheap 24/7 breakdown recovery across the UK. Instant quotes, fixed prices, fast response — day or night.",
      cheapNearMeTitle: "Cheap Car Recovery Near Me | Instant UK Quotes",
      cheapNearMeDesc:
        "Find cheap car recovery near you anywhere in the UK. Instant fixed-price quotes online. 24/7 nationwide coverage. Get a quote in seconds.",
      // Replace with your actual phone number
      phone: "08001234567",
      phoneDisplay: "0800 123 4567",
      ratingValue: "4.8",
      reviewCount: "1247",
      logoWords: ["Cheap", "Car", "Recovery"],
      cityTitleFn: (city) =>
        `Cheap Car Recovery ${city} | 24/7 Breakdown Service`,
      cityDescFn: (city, region) =>
        `Need cheap car recovery in ${city}? We cover all of ${city} & ${region} 24/7. Instant quotes, fixed prices, fast response.`,
    }
  : {
      url: "https://recovermycar.uk",
      name: "Recover My Car",
      shortName: "recovermycar",
      defaultTitle: "Recover My Car | UK Car Recovery & Breakdown Service",
      titleTemplate: "%s | Recover My Car UK",
      defaultDescription:
        "Need to recover your car? Get instant quotes for UK car recovery. Nationwide 24/7 breakdown service. Fast, professional, fixed prices.",
      keywords: [
        "recover my car",
        "car recovery UK",
        "car recovery service",
        "vehicle recovery",
        "breakdown recovery UK",
        "car recovery near me",
      ],
      ogTitle: "Recover My Car | UK Car Recovery Service",
      ogDescription:
        "Nationwide car recovery service. Get instant quotes and recover your car fast.",
      hour24Title: "24 Hour Car Recovery UK | Recover My Car Anytime",
      hour24Desc:
        "Need car recovery at any hour? Recover My Car operates 24/7 across the UK. Instant quotes, professional service, fast response — day or night.",
      cheapNearMeTitle: "Car Recovery Near Me | Find Local Recovery UK",
      cheapNearMeDesc:
        "Looking for car recovery near you? Recover My Car covers the whole UK. Find local recovery agents with instant online quotes and fixed pricing.",
      // Replace with your actual phone number
      phone: "08001234568",
      phoneDisplay: "0800 123 4568",
      ratingValue: "4.9",
      reviewCount: "893",
      logoWords: ["Recover", "My", "Car"],
      cityTitleFn: (city) =>
        `Car Recovery ${city} | Recover My Car`,
      cityDescFn: (city, region) =>
        `Need to recover your car in ${city}? We cover all of ${city} & ${region} 24/7. Instant quotes, fixed prices.`,
    };
