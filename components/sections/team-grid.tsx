"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { generalMembers, leadership, type TeamMember } from "@/constants/team";
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
      className="group flex w-full flex-col sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-6rem)/4)]"
      variants={slideFromBottomInView}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-[16px] border border-border md:rounded-[18px]">
        <MemberPortrait member={member} />
      </div>

      <p className="mt-5 font-mono text-sm font-bold uppercase tracking-wide text-accent">
        {member.title}
      </p>

      <h3 className="mt-1.5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-primary md:text-xl">
        {member.name}
      </h3>

      {member.role ? (
        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
          {member.role}
        </p>
      ) : null}

      {member.bio ? (
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {member.bio}
        </p>
      ) : null}
    </motion.article>
  );
}

type MemberSectionProps = {
  /** Eyebrow number, which runs in page order. */
  index: string;
  label: string;
  heading: string;
  members: readonly TeamMember[];
  className?: string;
};

function MemberSection({
  index,
  label,
  heading,
  members,
  className,
}: MemberSectionProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-max px-5 md:px-8 lg:px-[30px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xl font-bold uppercase tracking-wide">
            <span className="text-accent">{index}.</span>{" "}
            <span className="text-primary">{label}</span>
          </p>

          <motion.h2
            className="mt-4 font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-primary"
            variants={headingBlurFadeInView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {heading}
          </motion.h2>
        </div>

        {/* Flex rather than grid: cards keep the width of a four-up row, and
            a row with fewer than four centres instead of hugging the left. */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-10 md:mt-16 md:gap-y-12 lg:mt-20"
          variants={slideFromBottomStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function TeamGrid() {
  return (
    <>
      <MemberSection
        index="01"
        label="Leadership"
        heading="The People Behind Sigmen"
        members={leadership}
        className="bg-background pt-20 pb-14 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24"
      />

      <MemberSection
        index="02"
        label="General members"
        heading="The Wider Team"
        members={generalMembers}
        className="bg-background pb-20 md:pb-28 lg:pb-32"
      />
    </>
  );
}
