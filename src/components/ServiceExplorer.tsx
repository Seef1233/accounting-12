"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { iconMap } from "@/components/icons";
import { services } from "@/lib/site-data";

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = iconMap[current.icon];

  return (
    <div className="grid grid-cols-1 gap-x-16 md:grid-cols-12">
      <div className="md:col-span-5">
        {services.map((s, i) => {
          const isActive = i === active;
          return (
            <div key={s.slug} className="border-b hairline last:border-b-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="relative flex w-full items-baseline gap-5 py-5 text-left"
              >
                {isActive && (
                  <motion.span
                    layoutId="service-indicator"
                    className="absolute -left-4 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="font-mono text-[13px] text-ink-faint">{s.number}</span>
                <span
                  className={`font-serif text-[20px] transition-colors sm:text-[22px] ${
                    isActive ? "text-ink" : "text-ink-faint hover:text-ink-soft"
                  }`}
                >
                  {s.title}
                </span>
              </button>

              {/* mobile inline panel */}
              <div className="md:hidden">
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[52ch] pb-6 pl-[3.2rem] text-[14.5px] leading-relaxed text-ink-soft">
                        {s.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 hidden md:col-span-7 md:mt-0 md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <Icon className="h-12 w-12 text-accent" />
            <h3 className="mt-6 font-serif text-[28px] leading-tight text-ink">{current.title}</h3>
            <p className="mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-ink-soft">
              {current.body}
            </p>
            <Link
              href={`/diensten#${current.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-[14px] text-accent underline decoration-accent-soft underline-offset-4 hover:decoration-accent"
            >
              Meer over deze dienst →
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
