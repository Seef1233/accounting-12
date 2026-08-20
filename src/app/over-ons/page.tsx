import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ValueCard } from "@/components/ValueCard";
import { iconMap } from "@/components/icons";
import { mission, stats, values, vision } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Professional Accounting is een accountantskantoor in IJmuiden met meer dan 15 jaar ervaring in boekhouding, aangiftes en belastingadvies voor ondernemers.",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
              Over ons
            </p>
            <h1 className="max-w-[22ch] font-serif text-[38px] leading-[1.1] text-ink sm:text-[46px]">
              Cijfers zijn ons vak. Rust geven is onze taak.
            </h1>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(22,38,31,0.35)]">
              <Image
                src="/images/handshake.jpg"
                alt="Kennismaking en samenwerking met een ondernemer"
                fill
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
              Onze missie
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-[26px] leading-snug text-ink sm:text-[30px]">
              &ldquo;{mission}&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-1 gap-12 border-t hairline pt-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
              Onze visie
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[58ch] text-[16.5px] leading-relaxed text-ink-soft">{vision}</p>
          </div>
        </Reveal>
      </section>

      <section className="border-y hairline bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-12 text-center sm:px-8">
              <Counter value={s.value} className="font-serif text-[38px] leading-none text-ink" />
              <p className="mx-auto mt-3 max-w-[22ch] text-[13.5px] leading-snug text-ink-soft">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
            Waar wij voor staan
          </p>
          <h2 className="max-w-[22ch] font-serif text-[30px] leading-tight text-ink sm:text-[36px]">
            Vier principes, elke dag toegepast
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map((v) => {
            const Icon = iconMap[v.icon];
            return (
              <RevealItem key={v.title}>
                <ValueCard icon={<Icon className="h-9 w-9" />} title={v.title} body={v.body} />
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] font-serif text-[28px] leading-tight text-ink sm:text-[34px]">
            Benieuwd hoe wij u kunnen ontzorgen?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Neem contact op</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
