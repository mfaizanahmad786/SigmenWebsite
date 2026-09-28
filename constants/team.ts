export type TeamMember = {
  /** Display name, including the honorific. */
  name: string;
  /** Shown in the monogram until a photo is supplied. */
  initials: string;
  /** Short form used as the card's eyebrow. */
  abbreviation: string;
  /** Full title. */
  role: string;
  /** Optional portrait. The card falls back to a monogram without one. */
  image?: string;
  /** Optional short bio. */
  bio?: string;
};

export const teamMembers: readonly TeamMember[] = [
  {
    name: "Mr Akram Khurshid",
    initials: "AK",
    abbreviation: "CEO",
    role: "Chief Executive Officer",
  },
  {
    name: "Mr Abdur Rehmaan",
    initials: "AR",
    abbreviation: "COO",
    role: "Chief Operating Officer",
  },
  {
    name: "Mr Haris Khurshid",
    initials: "HK",
    abbreviation: "MD",
    role: "Managing Director",
  },
  {
    name: "Mr Faizan Ahmad",
    initials: "FA",
    abbreviation: "CTO",
    role: "Chief Technology Officer",
  },
];
