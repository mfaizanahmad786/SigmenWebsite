"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers, type TeamMember } from "@/constants/team";
import {
  headingBlurFadeInView,
  slideFromBottomInView,
  slideFromBottomStagger,
} from "@/lib/motion";

function MemberPortrait({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <span
        className="select-none font-heading text-[clamp(2.75rem,6vw,3.75rem)] font-bold uppercase tracking-tight text-primary/25"
        aria-hidden
      >
        {member.initials}
      </span>
    </div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.article
      className="group flex flex-col"
      variants={slideFromBottomInView}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-[16px] border border-border md:rounded-[18px]">
        <MemberPortrait member={member} />
      </div>

      <p className="mt-5 font-mono text-sm font-bold uppercase tracking-wide text-accent">
        {member.abbreviation}
      </p>

      <h3 className="mt-1.5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-primary md:text-xl">
        {member.name}
      </h3>

      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
        {member.role}
      </p>

      {member.bio ? (
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {member.bio}
        </p>
      ) : null}
    </motion.article>
  );
}

export function TeamGrid() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xl font-bold uppercase tracking-wide">
            <span className="text-accent">01.</span>{" "}
            <span className="text-primary">Leadership</span>
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            The People Behind Sigmen
          </motion.h2>
        </div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-16 md:gap-x-6 md:gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-x-8"
          variants={slideFromBottomStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
