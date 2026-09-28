export type Service = {
  id: string;
  /** Doubles as the anchor id on the services page and the quote form value. */
  slug: string;
  title: string;
  /** One-line summary, used by the home page slider. */
  description: string;
  /** Longer copy, used on the services page. */
  summary: string;
  /** Scannable detail, used on the services page. */
  highlights: readonly string[];
  image: string;
};

export const services = [
  {
    id: "01",
    slug: "installation",
    title: "Installation",
    description:
      "Complete elevator and lift installation for homes, offices, and commercial buildings, built to safety and code compliance.",
    summary:
      "A lift has to fit the building it goes into, not the other way round. We survey the shaft, size the system to the traffic the building actually sees, and install it with as little disruption to the people using the place as we can manage.",
    highlights: [
      "Shaft survey and feasibility check before you commit",
      "Machine room and machine-room-less options",
      "Passenger, goods and home lifts",
      "Safety testing and compliance paperwork on handover",
    ],
    image: "/images/service-residential.jpg",
  },
  {
    id: "02",
    slug: "maintenance",
    title: "Maintenance",
    description:
      "Planned servicing contracts that keep lifts running smoothly and catch faults before they become breakdowns.",
    summary:
      "Most lift failures give warning long before they strand anyone. A planned visit schedule catches wear while it is still cheap to fix, and it keeps the paperwork in order for the buildings that need to show it.",
    highlights: [
      "Fixed visit schedules, monthly or quarterly",
      "Ropes, brakes, doors and controls checked each visit",
      "Out-of-hours servicing to avoid downtime",
      "Written service record after every call",
    ],
    image: "/images/service-commercial.jpg",
  },
  {
    id: "03",
    slug: "modernization",
    title: "Modernization",
    description:
      "Control upgrades, cabin refurbishment, and energy efficiency improvements that renew an ageing lift.",
    summary:
      "An ageing lift rarely needs replacing outright. Upgrading the controller, drive and cabin usually costs a fraction of a new installation, and it buys back reliability, ride quality and running cost without rebuilding the shaft.",
    highlights: [
      "Controller and drive upgrades for older systems",
      "Cabin refurbishment and new door operators",
      "Energy efficiency and standby power improvements",
      "Phased work so the lift stays in service where possible",
    ],
    image: "/images/service-modernization-car.jpg",
  },
  {
    id: "04",
    slug: "repair",
    title: "Repair",
    description:
      "Rapid response for breakdowns, entrapments, and safety faults, with technicians on call around the clock.",
    summary:
      "A stopped lift is an access problem and, if someone is inside it, a safety one. Our callout line is staffed around the clock, and our technicians carry the parts that account for most faults so the majority of visits end in a fix rather than a follow-up.",
    highlights: [
      "Round-the-clock callout, including weekends",
      "Entrapment release as the first priority",
      "Common spares carried to site",
      "Written fault report after every visit",
    ],
    image: "/images/mission-technician.jpg",
  },
  {
    id: "05",
    slug: "inspection",
    title: "Inspection",
    description:
      "Independent safety inspections and condition reports for lifts already in service.",
    summary:
      "Whether you are taking over a building, renewing insurance or simply want a second opinion, an inspection tells you what condition the lift is really in. You get a plain report of what is sound, what is wearing and what needs attention first.",
    highlights: [
      "Full safety circuit and brake testing",
      "Condition report on ropes, doors and controls",
      "Findings ranked by urgency, not just listed",
      "Handover inspections for building purchases",
    ],
    image: "/images/service-inspection.jpg",
  },
  {
    id: "06",
    slug: "consultation",
    title: "Consultation",
    description:
      "Specification and design advice for architects, developers, and owners planning a lift.",
    summary:
      "The cheapest time to get a lift right is before anything is built. Bring us the drawings and we will advise on shaft sizing, traffic capacity and system type, so the specification you tender is one that will actually work in the finished building.",
    highlights: [
      "Shaft sizing and traffic analysis from drawings",
      "System type and capacity recommendations",
      "Budget guidance before you go to tender",
      "Review of specifications you have already been given",
    ],
    image: "/images/service-consultation.jpg",
  },
] as const satisfies readonly Service[];
