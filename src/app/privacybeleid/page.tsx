import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van Professional Accounting.",
};

const sections = [
  {
    title: "1. Wie wij zijn",
    body: `${company.name}, gevestigd aan ${company.addressLine1}, ${company.addressLine2} (KvK ${company.kvk}), is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.`,
  },
  {
    title: "2. Welke gegevens wij verwerken",
    body: `Wij verwerken de gegevens die u zelf aan ons verstrekt, zoals naam, bedrijfsnaam, KvK-nummer, e-mailadres, telefoonnummer en de inhoud van uw bericht — bijvoorbeeld via het contactformulier op deze website. Voor de uitvoering van onze dienstverlening als accountantskantoor verwerken wij daarnaast financiële en administratieve gegevens die u ons in het kader van de opdracht verstrekt.`,
  },
  {
    title: "3. Waarom wij deze gegevens verwerken",
    body: `Wij gebruiken uw gegevens om contact met u op te nemen naar aanleiding van uw aanvraag, om een offerte of adviesgesprek voor te bereiden, en — na het aangaan van een opdracht — om onze diensten (boekhouding, aangiften, jaarrekening, salarisadministratie en advies) uit te voeren en om te voldoen aan wettelijke verplichtingen, waaronder de Wet ter voorkoming van witwassen en financieren van terrorisme (Wwft).`,
  },
  {
    title: "4. Bewaartermijn",
    body: `Wij bewaren uw gegevens niet langer dan noodzakelijk. Contactformuliergegevens waarop geen opdracht volgt, bewaren wij maximaal 12 maanden. Administratieve en fiscale gegevens in het kader van een opdracht bewaren wij conform de wettelijke bewaartermijnen, doorgaans 7 jaar.`,
  },
  {
    title: "5. Delen met derden",
    body: `Wij delen uw gegevens niet met derden, behalve waar dit noodzakelijk is voor de uitvoering van onze dienstverlening (bijvoorbeeld met de Belastingdienst voor aangiften, of met software zoals Exact Online voor de administratie) of waar dit wettelijk verplicht is.`,
  },
  {
    title: "6. Beveiliging",
    body: `Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.`,
  },
  {
    title: "7. Uw rechten",
    body: `U heeft het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen, en het recht om bezwaar te maken tegen de verwerking. Neem hiervoor contact met ons op via ${company.email}.`,
  },
  {
    title: "8. Cookies",
    body: `Deze website gebruikt geen tracking- of advertentiecookies. Er worden uitsluitend technisch noodzakelijke functies gebruikt om de website correct te laten werken.`,
  },
  {
    title: "9. Contact",
    body: `Vragen over dit privacybeleid kunt u richten aan ${company.email} of ${company.phoneDisplay}.`,
  },
];

export default function PrivacybeleidPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.16em] text-accent">
        Juridisch
      </p>
      <h1 className="font-serif text-[36px] leading-tight text-ink sm:text-[42px]">
        Privacybeleid
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
