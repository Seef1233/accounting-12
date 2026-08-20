"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const MotionLink = motion.create(Link);

const variants = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14.5px] tracking-wide text-bg hover:bg-accent-dark hover:shadow-lg",
  link: "inline-flex items-center gap-2 text-[14.5px] tracking-wide text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const motionProps =
    variant === "primary"
      ? { whileHover: { y: -3, scale: 1.02 }, whileTap: { scale: 0.96, y: 0 } }
      : { whileHover: { x: 3 }, whileTap: { scale: 0.97 } };

  return (
    <MotionLink
      href={href}
      {...motionProps}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </MotionLink>
  );
}
