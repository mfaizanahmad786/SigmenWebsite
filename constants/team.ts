export type TeamMember = {
  /** Display name, as it should appear on the card. */
  name: string;
  /** Shown in the monogram until a photo is supplied. */
  initials: string;
  /** Shown as the card's accent eyebrow, e.g. "CEO" or "Media Manager". */
  title: string;
  /** Optional longer form of the title, shown beneath the name. */
  role?: string;
  /** Optional portrait. The card falls back to a monogram without one. */
  image?: string;
  /** Optional short bio. */
  bio?: string;
};

export const leadership: readonly TeamMember[] = [
  {
    name: "Mr Akram Khurshid",
    initials: "AK",
    title: "CEO",
    role: "Chief Executive Officer",
  },
  {
    name: "Mr Abdur Rehmaan",
    initials: "AR",
    title: "COO",
    role: "Chief Operating Officer",
  },
  {
    name: "Mr Haris Khurshid",
    initials: "HK",
    title: "MD",
    role: "Managing Director",
  },
  {
    name: "Mr Faizan Ahmad",
    initials: "FA",
    title: "CTO",
    role: "Chief Technology Officer",
  },
];

export const generalMembers: readonly TeamMember[] = [
  {
    name: "Emaan Munir Khan",
    initials: "EK",
    title: "Media Manager",
  },
  {
    name: "Muhammad Basil Bhatti",
    initials: "MB",
    title: "IT Officer",
  },
  {
    name: "Abdul Hadi",
    initials: "AH",
    title: "Supply Chain Officer",
  },
];
