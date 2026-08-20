import Image from "next/image";
import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { TiltImage } from "@/components/TiltImage";
import { audiences, company, stats } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b hairline">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent-soft/40 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-12 md:pb-24 md:pt-20">
          <div className="relative md:col-span-6">
            <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
              Accountantskantoor · IJmuiden
            </p>
            <h1 className="text-balance font-serif text-[38px] leading-[1.1] tracking-tight text-ink sm:text-[48px] md:text-[52px]">
              Boekhouding die klopt.
              <br />
              Advies waar u <em className="italic text-accent">iets</em> aan heeft.
            </h1>
            <p className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-ink-soft">
              {company.name} verzorgt de administratie, aangiftes en jaarrekening van meer dan
              500 ondernemers in de regio IJmuiden — zodat u zich weer kunt richten op uw vak.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact">Vraag een kennismaking aan</Button>
              <Button href="/diensten" variant="link">
                Bekijk onze diensten →
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t hairline pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} className="font-serif text-[26px] leading-none text-ink" />
                  <p className="mt-1.5 max-w-[20ch] text-[12.5px] leading-snug text-ink-faint">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative md:col-span-6">
            <TiltImage className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(22,38,31,0.35)] sm:aspect-[5/4]">
              <Image
                src="/images/hero-desk.jpg"
                alt="Bureau met rekenmachine en notitieblok bij Professional Accounting"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </TiltImage>

            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-xl border hairline bg-paper p-5 shadow-xl sm:block">
              <p className="text-[12px] uppercase tracking-wide text-ink-faint">Kantoor</p>
              <p className="mt-1 text-[14px] leading-snug text-ink">
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </p>
              <p className="mt-3 border-t hairline pt-3 text-[13px] text-accent">
                {company.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
              Wat wij doen
            </p>
            <h2 className="max-w-[24ch] font-serif text-[32px] leading-tight text-ink sm:text-[38px]">
              Zes diensten, één aanspreekpunt
            </h2>
          </div>
          <Button href="/diensten" variant="link" className="w-fit">
            Alle diensten in detail →
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <ServiceExplorer />
        </Reveal>
      </section>

      {/* Audiences */}
      <section className="border-y hairline bg-ink text-bg">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.16em] text-accent-soft">
              Voor wie
            </p>
            <h2 className="max-w-[26ch] font-serif text-[30px] leading-tight sm:text-[36px]">
              Wij spreken de taal van uw sector
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <RevealItem key={a}>
                <span className="inline-flex rounded-full border border-bg/25 px-5 py-2.5 text-[14.5px] text-bg/85">
                  {a}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[60ch] text-[15px] leading-relaxed text-bg/60">
              Wij werken met Exact Online, zodat uw administratie altijd actueel en overal
              inzichtelijk is — voor u en voor ons.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[22ch] font-serif text-[32px] leading-tight text-ink sm:text-[40px]">
            Laten we kennismaken.
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-[16px] leading-relaxed text-ink-soft">
            Vrijblijvend en zonder verplichtingen. Binnen één werkdag hoort u van ons.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">Neem contact op</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
