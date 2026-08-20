import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Professional Accounting in IJmuiden voor boekhouding, aangiftes en belastingadvies.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
            Contact
          </p>
          <h1 className="max-w-[22ch] font-serif text-[40px] leading-[1.1] text-ink sm:text-[50px]">
            Laten we kennismaken
          </h1>
          <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-ink-soft">
            Vul het formulier in of neem rechtstreeks contact op. Wij reageren binnen één
            werkdag.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <div className="rounded-2xl border hairline bg-paper p-7 font-mono text-[13px] leading-relaxed text-ink-soft">
              <div className="border-b hairline pb-3 text-[12px] uppercase tracking-[0.14em] text-ink-faint">
                Kantoorgegevens
              </div>
              <dl className="space-y-4 pt-4">
                <div>
                  <dt className="text-ink-faint">Adres</dt>
                  <dd className="mt-1 text-ink">
                    {company.addressLine1}
                    <br />
                    {company.addressLine2}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Telefoon</dt>
                  <dd className="mt-1">
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-ink">
                      {company.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-faint">E-mail</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${company.email}`} className="text-ink">
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Openingstijden</dt>
                  <dd className="mt-1 text-ink">{company.hours}</dd>
                </div>
                <div className="border-t hairline pt-4">
                  <dt className="text-ink-faint">KvK</dt>
                  <dd className="mt-1 text-ink">{company.kvk}</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">BTW-nummer</dt>
                  <dd className="mt-1 text-ink">{company.vat}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border hairline grayscale transition-[filter] hover:grayscale-0">
              <iframe
                title="Kantoorlocatie op de kaart"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  company.mapsQuery
                )}&output=embed`}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
