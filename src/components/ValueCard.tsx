"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function ValueCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5 border-t hairline pt-6">
      <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 350, damping: 18 }}>
        <div className="text-accent">{icon}</div>
      </motion.div>
      <div>
        <h3 className="font-serif text-[20px] text-ink">{title}</h3>
        <p className="mt-2 max-w-[40ch] text-[14.5px] leading-relaxed text-ink-soft">{body}</p>
      </div>
    </div>
  );
}
