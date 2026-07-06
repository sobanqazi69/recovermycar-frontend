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
        "Get instant quotes for cheap car recovery across the UK — Birmingham, London, Manchester & more. 24/7 nationwide breakdown recovery. Fixed prices, no hidden fees.",
      keywords: [
        "cheap car recovery",
        "cheap car recovery UK",
        "cheap car recovery near me",
        "cheap car recovery Birmingham",
        "cheap car recovery London",
        "cheap car recovery Manchester",
        "cheap car recovery Leeds",
        "cheap car recovery Sheffield",
        "cheap car recovery Liverpool",
        "cheap car recovery Bristol",
        "cheap car recovery Glasgow",
        "cheap car recovery Edinburgh",
        "cheap car recovery Coventry",
        "cheap car recovery Leicester",
        "cheap car recovery Nottingham",
        "cheap car recovery Newcastle",
        "cheapest car recovery UK",
        "cheapest car recovery near me",
        "cheap breakdown recovery",
        "cheap breakdown recovery UK",
        "affordable car recovery",
        "affordable car recovery UK",
        "affordable breakdown recovery",
        "cheap car towing UK",
        "cheap vehicle recovery",
        "cheap vehicle recovery UK",
        "low cost car recovery",
        "low cost breakdown recovery",
        "budget car recovery UK",
        "cheap 24 hour car recovery",
        "cheap 24 7 car recovery",
        "cheap roadside recovery",
        "cheap roadside recovery UK",
        "cheap recovery truck near me",
        "car recovery cheap",
        "car breakdown cheap",
        "cheap accident recovery",
        "cheap motorway recovery",
        "cheap van recovery UK",
        "car recovery in UK",
        "car recovery in Birmingham",
        "car recovery in London",
        "car recovery in Manchester",
        "24 hour car recovery UK",
        "breakdown recovery near me",
        "car recovery service UK",
      ],
      ogTitle: "Cheap Car Recovery UK | 24/7 Breakdown Service",
      ogDescription:
        "Nationwide cheap car recovery — Birmingham, London, Manchester & beyond. Instant fixed-price quotes online.",
      hour24Title: "24 Hour Cheap Car Recovery UK | 24/7 Breakdown Service",
      hour24Desc:
        "Need cheap 24 hour car recovery? We provide affordable 24/7 breakdown recovery across the UK — Birmingham, London, Manchester & all major cities. Instant quotes, fixed prices, fast response.",
      cheapNearMeTitle: "Cheap Car Recovery Near Me | Instant UK Quotes",
      cheapNearMeDesc:
        "Find cheap car recovery near you anywhere in the UK. Instant fixed-price quotes for affordable breakdown recovery. 24/7 nationwide coverage — no hidden fees.",
      phone: "08001234567",
      phoneDisplay: "0800 123 4567",
      ratingValue: "4.8",
      reviewCount: "1247",
      logoWords: ["Cheap", "Car", "Recovery"],
      cityTitleFn: (city) =>
        `Cheap Car Recovery ${city} | 24/7 Breakdown & Recovery Service`,
      cityDescFn: (city, region) =>
        `Looking for cheap car recovery in ${city}? Get instant fixed-price quotes for affordable 24/7 breakdown recovery in ${city} & across ${region}. Fast response, no hidden fees.`,
    }
  : {
      url: "https://recovermycar.uk",
      name: "Recover My Car",
      shortName: "recovermycar",
      defaultTitle: "Recover My Car | Cheap UK Car Recovery & Breakdown Service",
      titleTemplate: "%s | Recover My Car UK",
      defaultDescription:
        "Get instant quotes for cheap car recovery across the UK — Birmingham, London, Manchester & more. 24/7 nationwide breakdown & recovery service. Fixed prices, fast response.",
      keywords: [
        "recover my car",
        "car recovery UK",
        "car recovery near me",
        "cheap car recovery",
        "cheap car recovery UK",
        "cheap car recovery near me",
        "cheap car recovery Birmingham",
        "cheap car recovery London",
        "cheap car recovery Manchester",
        "cheap car recovery Leeds",
        "cheap car recovery Liverpool",
        "cheap car recovery Bristol",
        "cheap car recovery Sheffield",
        "cheap car recovery Glasgow",
        "cheap car recovery Newcastle",
        "cheap car recovery Coventry",
        "cheap car recovery Leicester",
        "car recovery Birmingham",
        "car recovery London",
        "car recovery Manchester",
        "car recovery Leeds",
        "car recovery Liverpool",
        "car recovery in UK",
        "car recovery in Birmingham",
        "car recovery in London",
        "vehicle recovery UK",
        "breakdown recovery UK",
        "breakdown recovery near me",
        "cheap breakdown recovery",
        "cheap breakdown recovery UK",
        "affordable car recovery",
        "affordable car recovery UK",
        "car recovery service UK",
        "24 hour car recovery",
        "24 hour car recovery UK",
        "roadside recovery UK",
        "car towing service UK",
        "emergency car recovery UK",
        "car recovery quotes",
        "instant car recovery quotes",
        "nationwide car recovery",
        "cheap vehicle recovery UK",
        "low cost car recovery",
      ],
      ogTitle: "Recover My Car | Cheap UK Car Recovery Service",
      ogDescription:
        "Cheap nationwide car recovery service — Birmingham, London, Manchester & beyond. Get instant fixed-price quotes and recover your car fast.",
      hour24Title: "24 Hour Car Recovery UK | Cheap Breakdown Service Anytime",
      hour24Desc:
        "Need cheap car recovery at any hour? Recover My Car operates 24/7 across the UK — Birmingham, London, Manchester & all major cities. Instant quotes, fixed prices, fast response.",
      cheapNearMeTitle: "Cheap Car Recovery Near Me | Find Local Recovery UK",
      cheapNearMeDesc:
        "Looking for cheap car recovery near you? Recover My Car covers the whole UK. Find affordable local recovery with instant online quotes and fixed pricing — no hidden fees.",
      phone: "08001234568",
      phoneDisplay: "0800 123 4568",
      ratingValue: "4.9",
      reviewCount: "893",
      logoWords: ["Recover", "My", "Car"],
      cityTitleFn: (city) =>
        `Cheap Car Recovery ${city} | 24/7 Breakdown Service`,
      cityDescFn: (city, region) =>
        `Need cheap car recovery in ${city}? Get instant fixed-price quotes for 24/7 breakdown recovery in ${city} & across ${region}. Fast response, affordable prices, no hidden fees.`,
    };
