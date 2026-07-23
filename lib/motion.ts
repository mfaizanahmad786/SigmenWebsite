import type { Transition, Variants } from "framer-motion";

export const smoothEase = [0.22, 1, 0.36, 1] as const;

/** Phase 1: heading + secondary image */
export const heroPhase1Delay = 0.25;

/** Phase 2: subheading + button */
export const heroPhase2Delay = 1.05;

/** Phase 3: main image */
export const heroPhase3Delay = 1.45;

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: smoothEase,
};

export const headingBlurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: smoothEase,
      delay: heroPhase1Delay,
    },
  },
};

export const headingBlurFadeInView: Variants = {
  hidden: { opacity: 0, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: smoothEase },
  },
};

export const fadeInInView: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: smoothEase, delay: 0.15 },
  },
};

export const slideFromBottomInView: Variants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

export const slideFromBottomStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: smoothEase, delay: heroPhase2Delay },
  },
};

export const secondaryImagePop: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 22,
      delay: heroPhase1Delay,
    },
  },
};

export const mainImageSlideFromRight: Variants = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: smoothEase, delay: heroPhase3Delay },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const perspectiveFoldInView: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 75,
    y: 50,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/** About page hero */
export const aboutHeroPhase1Delay = 0.2;
export const aboutHeroPhase2Delay = 0.55;
export const aboutHeroPhase3Delay = 0.85;

export const aboutHeroHeading: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: smoothEase,
      delay: aboutHeroPhase1Delay,
    },
  },
};

export const aboutHeroSubheading: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      delay: aboutHeroPhase2Delay,
    },
  },
};

export const aboutHeroImages: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: aboutHeroPhase3Delay,
    },
  },
};

export const aboutHeroImage: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: smoothEase },
  },
};
