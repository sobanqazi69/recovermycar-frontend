const sections = [
  {
    tag: "h1" as const,
    title: "Cheap Car Recovery UK",
    body: "Looking for reliable and affordable National Breakdown services? Look no further than our nationwide team of agents, situated in every postcode area across the country. Whether you need 24-hour recovery, breakdown assistance, or A-to-B transportation, our network of agents has got you covered. Our instant online quote system allows you to get a quick and easy quote for our cheap car recovery services anywhere in the UK, and our fixed, guaranteed prices ensure that you get the best value for your money. Don't just take our word for it — check out our outstanding breakdown reviews and see why our customers trust us to provide the same high-quality service across all of our agents.",
  },
  {
    tag: "h2" as const,
    title: "Local Recovery Agents",
    body: "Looking for reliable car, van, or 4x4 recovery service that won't break the bank? Look no further than our nationwide team of agents, situated in every postcode area across the country. Our extensive network ensures that wherever you are, we can offer fast, efficient, and cost-effective recovery services. With multiple recovery vehicles at each location, you can expect almost instant service. Trust us to get you back on the road in no time.",
  },
  {
    tag: "h2" as const,
    title: "Quality Car Recovery Service",
    body: "All our agents are fully insured and covered to perform any type of vehicle recovery work that comes their way. Only using professional and reputable companies we can ensure the best quality vehicle recovery service. We guarantee your car is safe with us, we promise.",
  },
  {
    tag: "h2" as const,
    title: "24 Hour Breakdown Cover",
    body: "We understand that breaking down in your car can be a stressful and frustrating experience. That's why we are here to help, regardless of your cover level. Our priority is to get you back on the road as quickly and safely as possible. We believe that everyone should have access to reliable and affordable breakdown recovery services, whether or not they have breakdown cover or they need a home start. That's why we offer our assistance to all drivers who find themselves in need of help. We have the expertise and equipment to handle a wide range of breakdown situations, from flat batteries to engine failures. Our experienced technicians are equipped with the latest tools and diagnostic equipment to quickly identify and resolve the issue. So, whether you have breakdown cover or not, you can rely on us to provide fast and effective breakdown recovery services.",
  },
];

export default function ContentSections() {
  return (
    <main style={{ background: "#ffffff" }}>
      {sections.map((section, i) => {
        const Tag = section.tag;
        return (
          <section
            key={section.title}
            style={{
              background: i % 2 === 0 ? "#ffffff" : "#f8f8f8",
              borderBottom: "1px solid #eeeeee",
              padding: "40px 20px",
            }}
          >
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <Tag
                style={{
                  fontSize: Tag === "h1" ? 28 : 22,
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: 14,
                  paddingBottom: 10,
                  borderBottom: "3px solid #fe8601",
                  display: "inline-block",
                }}
              >
                {section.title}
              </Tag>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "#444444",
                  marginTop: 16,
                }}
              >
                {section.body}
              </p>
            </div>
          </section>
        );
      })}
    </main>
  );
}
