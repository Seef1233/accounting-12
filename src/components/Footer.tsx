import Link from "next/link";
import { company, nav, services } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <span className="font-serif text-[20px]">Professional Accounting</span>
            <p className="mt-4 max-w-[24ch] text-[14px] leading-relaxed text-bg/60">
              Boekhouding, aangiftes en advies voor ondernemers in IJmuiden en omstreken.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.14em] text-bg/45">Navigatie</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-bg/75 hover:text-bg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.14em] text-bg/45">Diensten</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href={`/diensten#${s.slug}`} className="text-[14px] text-bg/75 hover:text-bg">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.14em] text-bg/45">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-bg/75">
              <li>{company.addressLine1}</li>
              <li>{company.addressLine2}</li>
              <li className="pt-1">
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-bg">
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-bg">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bg/15 pt-6 text-[12.5px] text-bg/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Professional Accounting · KVK {company.kvk} · BTW {company.vat}
          </p>
          <div className="flex gap-6">
            <Link href="/privacybeleid" className="hover:text-bg/80">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden" className="hover:text-bg/80">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
