import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Professional Accounting.",
};

const sections = [
  {
    title: "1. Toepasselijkheid",
    body: `Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten tussen ${company.name} (KvK ${company.kvk}) en haar opdrachtgevers, tenzij schriftelijk anders is overeengekomen.`,
  },
  {
    title: "2. Totstandkoming van de opdracht",
    body: `Een opdracht komt tot stand op het moment dat de opdrachtgever een door ${company.name} uitgebrachte offerte of opdrachtbevestiging schriftelijk of per e-mail heeft aanvaard.`,
  },
  {
    title: "3. Uitvoering van de opdracht",
    body: `${company.name} voert de opdracht naar beste kunnen uit, met de zorgvuldigheid die van een redelijk handelend en redelijk bekwaam accountantskantoor mag worden verwacht. De opdrachtgever is gehouden alle gegevens die voor een correcte uitvoering van de opdracht van belang zijn, tijdig en volledig aan te leveren.`,
  },
  {
    title: "4. Tarieven en facturatie",
    body: `Tenzij anders overeengekomen, worden werkzaamheden gefactureerd op basis van het in de offerte of opdrachtbevestiging genoemde tarief. Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan.`,
  },
  {
    title: "5. Aansprakelijkheid",
    body: `De aansprakelijkheid van ${company.name} voor schade als gevolg van een toerekenbare tekortkoming in de uitvoering van de opdracht is beperkt tot het bedrag dat in het desbetreffende geval door de beroepsaansprakelijkheidsverzekering wordt uitgekeerd, vermeerderd met het eigen risico.`,
  },
  {
    title: "6. Geheimhouding",
    body: `${company.name} behandelt alle gegevens van de opdrachtgever vertrouwelijk en zal deze niet aan derden verstrekken, behalve waar dit noodzakelijk is voor de uitvoering van de opdracht of waar dit wettelijk verplicht is.`,
  },
  {
    title: "7. Beëindiging",
    body: `Beide partijen kunnen een opdracht voor onbepaalde tijd te allen tijde schriftelijk opzeggen, met inachtneming van een redelijke opzegtermijn en met vergoeding van de tot dan toe verrichte werkzaamheden.`,
  },
  {
    title: "8. Toepasselijk recht",
    body: `Op alle overeenkomsten tussen ${company.name} en haar opdrachtgevers is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar ${company.name} is gevestigd.`,
  },
  {
    title: "9. Contact",
    body: `Voor vragen over deze algemene voorwaarden kunt u contact opnemen via ${company.email}.`,
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
        Juridisch
      </p>
      <h1 className="font-serif text-[36px] leading-tight text-ink sm:text-[42px]">
        Algemene voorwaarden
      </h1>
      <p className="mt-3 text-[14px] text-ink-faint">Laatst bijgewerkt: augustus 2026</p>

      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-serif text-[19px] text-ink">{s.title}</h2>
            <p className="mt-2.5 max-w-[68ch] text-[15px] leading-relaxed text-ink-soft">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
