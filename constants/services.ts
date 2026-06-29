export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "01",
    title: "Residential Installation",
    description:
      "Complete home elevator installation and lift system setup to ensure safety, reliability, and code compliance.",
    image: "/images/services1.png",
  },
  {
    id: "02",
    title: "Emergency Repairs",
    description:
      "24/7 rapid response service for urgent elevator issues including breakdowns, entrapments, and safety faults.",
    image: "/images/services2.png",
  },
  {
    id: "03",
    title: "Commercial Service",
    description:
      "Professional elevator system design, installation, and maintenance for offices, retail spaces, and industrial facilities.",
    image: "/images/hero-main.jpg",
  },
  {
    id: "04",
    title: "Modernization",
    description:
      "Creative and functional lift modernization solutions including control upgrades, cabin refurbishment, and energy efficiency improvements.",
    image: "/images/services1.png",
  },
];
