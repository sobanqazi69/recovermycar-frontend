export type RegionData = {
  slug: string;
  name: string;
  intro: string;
  citySlugs: string[];
};

export const regions: RegionData[] = [
  {
    slug: "west-midlands",
    name: "West Midlands",
    intro: "The West Midlands is one of the UK's most densely populated regions, centred on the M6, M5, M42, and M54 motorway network. Our recovery agents cover every corner of the region — from Birmingham city centre and Coventry to Wolverhampton, Worcester, and Shrewsbury. Fast fixed-price recovery, 24/7.",
    citySlugs: ["birmingham", "coventry", "wolverhampton", "worcester", "shrewsbury"],
  },
  {
    slug: "yorkshire",
    name: "Yorkshire",
    intro: "Yorkshire is the UK's largest county, spanning from the Humber estuary to the Pennines. Our recovery agents cover the M1, M62, A1(M), and all major Yorkshire routes — serving Leeds, Sheffield, Bradford, Hull, York, Doncaster, and Wakefield. Whether it's the Trans-Pennine Expressway or a quiet dale road, we're there.",
    citySlugs: ["leeds", "sheffield", "bradford", "hull", "york", "doncaster", "wakefield"],
  },
  {
    slug: "north-west-england",
    name: "North West England",
    intro: "North West England is home to the UK's second and third largest cities, connected by the M6, M60, M62, and M56. Our agents cover Manchester, Liverpool, Chester, Lancaster, Carlisle, Wigan, and Warrington — providing rapid recovery across the full region, day or night.",
    citySlugs: ["manchester", "liverpool", "chester", "lancaster", "carlisle", "wigan", "warrington"],
  },
  {
    slug: "south-wales",
    name: "South Wales",
    intro: "South Wales is served by the M4 corridor and the A470 heading into the valleys. Our Welsh recovery agents cover Cardiff, Swansea, and the surrounding communities — from the Valleys to the Vale of Glamorgan and Gower Peninsula. Fixed prices, instant SMS quotes, available 24/7.",
    citySlugs: ["cardiff", "swansea"],
  },
  {
    slug: "scotland",
    name: "Scotland",
    intro: "Our Scottish recovery network covers the central belt and beyond. From Glasgow and Edinburgh to Dundee and Aberdeen, our agents serve the M8, M74, M90, A9, and A96 corridors. The same transparent fixed pricing applies across Scotland as anywhere else in the UK.",
    citySlugs: ["glasgow", "edinburgh", "dundee", "aberdeen"],
  },
  {
    slug: "east-midlands",
    name: "East Midlands",
    intro: "The East Midlands sits at the heart of the UK motorway network — the M1, A1(M), A42, A46, and A50 all pass through the region. Our agents cover Nottingham, Leicester, Derby, Peterborough, and Milton Keynes, providing fast recovery across all East Midlands postcodes.",
    citySlugs: ["nottingham", "leicester", "derby", "peterborough", "milton-keynes"],
  },
  {
    slug: "south-west-england",
    name: "South West England",
    intro: "The South West is one of the UK's most geographically varied regions — from the M5 and A30 to remote Devon and Cornwall lanes. Our agents cover Bristol, Plymouth, Exeter, Bournemouth, Gloucester, and Swindon, providing professional recovery wherever your car lets you down.",
    citySlugs: ["bristol", "plymouth", "exeter", "bournemouth", "gloucester", "swindon"],
  },
  {
    slug: "south-east-england",
    name: "South East England",
    intro: "The South East is the UK's busiest region for road traffic, with the M3, M27, M23, M25, and A3 carrying millions of journeys daily. Our agents cover Southampton, Portsmouth, Reading, Oxford, Brighton, and Luton — providing instant quotes and rapid recovery across the region.",
    citySlugs: ["southampton", "portsmouth", "reading", "oxford", "brighton", "luton"],
  },
  {
    slug: "north-east-england",
    name: "North East England",
    intro: "The North East's road network is centred on the A1(M), A19, and A66 — key routes connecting Newcastle, Middlesbrough, and Sunderland with the rest of the UK. Our agents cover the full Tyne and Wear and Teesside area, providing fast, affordable recovery whatever time of day.",
    citySlugs: ["newcastle", "middlesbrough"],
  },
  {
    slug: "east-of-england",
    name: "East of England",
    intro: "The East of England stretches from the Fens to the Essex coast, served by the A14, A12, M11, and A1. Our agents cover Cambridge, Norwich, Ipswich, Colchester, and Peterborough — serving both major city routes and the quieter roads of Norfolk, Suffolk, and Cambridgeshire.",
    citySlugs: ["cambridge", "norwich", "ipswich", "colchester", "peterborough"],
  },
];

export function getRegionBySlug(slug: string): RegionData | undefined {
  return regions.find((r) => r.slug === slug);
}
