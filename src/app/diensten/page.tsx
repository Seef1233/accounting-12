import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { iconMap } from "@/components/icons";
import { audiences, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Boekhouding, BTW- en IB-aangifte, jaarrekening, belastingadvies, salarisadministratie en ondernemingsadvies voor ondernemers in IJmuiden.",
};

export default function DienstenPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
              Diensten
            </p>
            <h1 className="max-w-[20ch] font-serif text-[38px] leading-[1.1] text-ink sm:text-[46px]">
              Eén partij voor uw hele financiële administratie
            </h1>
            <p className="mt-6 max-w-[54ch] text-[16.5px] leading-relaxed text-ink-soft">
              Van dagelijkse boekhouding tot strategisch belastingadvies. Onze zes diensten dekken
              wat een ondernemer nodig heeft — los te vragen of als vast pakket.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(22,38,31,0.35)]">
              <Image
                src="/images/services-desk.jpg"
                alt="Modern bureau met laptop, notitieboek en administratie"
                fill
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <RevealGroup className="divide-y hairline border-t hairline">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <RevealItem key={s.slug}>
                <div
                  id={s.slug}
                  className="grid scroll-mt-24 grid-cols-1 gap-4 py-12 sm:grid-cols-12 sm:gap-8"
                >
                  <div className="flex items-center gap-4 sm:col-span-4">
                    <Icon className="h-10 w-10 shrink-0 text-accent" />
                    <div>
                      <span className="font-mono text-[12px] text-ink-faint">{s.number}</span>
                      <h2 className="font-serif text-[23px] leading-tight text-ink">{s.title}</h2>
                    </div>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                    {i === services.length - 1 && (
                      <Button
                        href="/contact"
                        variant="link"
                        className="mt-4 text-accent decoration-accent-soft hover:decoration-accent"
                      >
                        Bespreek uw situatie →
                      </Button>
                    )}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      <section className="border-t hairline bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
              Voor wie
            </p>
            <h2 className="max-w-[26ch] font-serif text-[28px] leading-tight text-ink sm:text-[34px]">
              Actief in uw sector, thuis in uw cijfers
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <RevealItem key={a}>
                <span className="inline-flex rounded-full border hairline px-5 py-2.5 text-[14.5px] text-ink-soft">
                  {a}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] font-serif text-[30px] leading-tight text-ink sm:text-[36px]">
            Niet zeker welke dienst u nodig heeft?
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[15.5px] leading-relaxed text-ink-soft">
            Neem contact op — wij denken graag mee over wat voor uw onderneming het beste past.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Neem contact op</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
