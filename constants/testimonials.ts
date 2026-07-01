import bahriaUniversityLogo from "../images/testimonialLogos/bahria-university-logo.png";
import britishCouncilLogo from "../images/testimonialLogos/britishCouncil.png";
import statebankLogo from "../images/testimonialLogos/statebank.svg";
import unhcrLogo from "../images/testimonialLogos/unhcr.png";

export const clientLogos = [
  {
    name: "Bahria University",
    src: bahriaUniversityLogo,
  },
  {
    name: "British Council",
    src: britishCouncilLogo,
  },
  {
    name: "State Bank of Pakistan",
    src: statebankLogo,
  },
  {
    name: "UNHCR",
    src: unhcrLogo,
  },
] as const;

/** Seconds for one full logo marquee loop — lower = faster */
export const LOGO_MARQUEE_DURATION = 50;
