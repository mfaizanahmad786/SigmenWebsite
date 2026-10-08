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
      "Complete elevator or lift installation for homes, offices and commercial buildings, built with safety and code compliance.",
    summary:
      "A lift has to fit the building it goes into, not the other way around. We survey the shaft size required, the number of floors, the frequency of use and the traffic the building actually sees, then install it with as little disruption to the people using the place as we can manage.",
    highlights: [
      "Shaft survey and feasibility check before you commit",
      "Machine room (MR) and machine room less (MRL) options",
      "Passenger, Cargo and Home lifts",
      "Safety testing and compliance paperwork/keys on handover",
      "Lift basic and rescue operational training for staff and users",
    ],
    image: "/images/service-residential.jpg",
  },
  {
    id: "02",
    slug: "maintenance",
    title: "Maintenance",
    description:
      "Planned Preventive Maintenance contracts that keep lifts running smoothly and catch faults before they become breakdowns.",
    summary:
      "Most lift failures give warning long before they strand anyone. A planned visit schedule catches wear while it is still cheap to fix and it keeps the paperwork in order for the buildings that need to show it.",
    highlights: [
      "Fixed visit schedules, monthly or quarterly",
      "Ropes, brakes, doors, oil, guides and mechanical parts checked on each visit",
      "All electrical safeties, alarms, intercom and lift operation checked",
      "Out-of-hours servicing to avoid downtime",
      "Written service record after every call",
      "Overall status of the lift reported, with any parts needing replacement",
    ],
    image: "/images/service-commercial.jpg",
  },
  {
    id: "03",
    slug: "modernization",
    title: "Modernization",
    description:
      "Control upgradation, cabin refurbishment and energy efficiency improvements that renew an ageing lift.",
    summary:
      "An ageing lift rarely needs replacing outright. Upgrading the controller, drive and associated parts usually costs a fraction of a new installation and it buys back reliability, ride quality and running cost without rebuilding or replacing the complete shaft material.",
    highlights: [
      "Main controller and motor drive upgrades for older systems",
      "COP and LOP with a new door operator if required",
      "Energy efficiency with an emergency rescue system, not fitted to older lifts",
      "Phased work so the lift stays in service where possible",
      "Modernization of this kind can extend a lift's life by up to 75%",
    ],
    image: "/images/service-modernization-car.jpg",
  },
  {
    id: "04",
    slug: "repair",
    title: "Repair / Rescue",
    description:
      "Rapid response for breakdowns, entrapments and safety faults with technicians on call around the clock.",
    summary:
      "A stopped lift is an access problem and, if someone is inside it, a safety issue. Our callout line is staffed around the clock and our technicians carry the parts that account for most faults, so the majority of visits end in a fix rather than a follow-up.",
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
      "Whether you are taking over a building, renewing insurance, want a second opinion, need a third party to verify that a new installation has every safety fitted to lift standards or want a pre-installation check, an inspection tells you what condition the lift is really in. You get a plain report of what is sound, what is wearing and what needs attention first.",
    highlights: [
      "Full safety circuits, load of cabin against counterweight and brake testing",
      "Condition report on ropes, door tracks and all mechanical parts",
      "Condition report on the control panel, motor, ARD and all other electrical parts",
      "Earthing of all electrical parts, cabin and motor base verified for secure connection",
      "Findings ranked by urgency, not just listed",
      "Handover inspections for any of the above purposes",
    ],
    image: "/images/service-inspection.jpg",
  },
  {
    id: "06",
    slug: "consultation",
    title: "Consultation",
    description:
      "Specification and design advice for architects, developers and owners planning a lift.",
    summary:
      "The cheapest time to get a lift right is before anything is built. Bring us the drawings and we will advise on shaft sizing, traffic capacity and system type, including the correct cabin and door sizes for the passenger capacity, so the specification you tender is one that will actually work in the finished building with every safety and standard it needs.",
    highlights: [
      "Shaft sizing and traffic analysis from drawings",
      "System type and capacity recommendations",
      "Budget guidance before you go to tender",
      "Review of specifications you have already been given",
      "Finding the right place for the lift, rather than wherever space happens to be free",
    ],
    image: "/images/service-consultation.jpg",
  },
] as const satisfies readonly Service[];
