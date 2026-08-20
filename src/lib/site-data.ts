export const company = {
  name: "Professional Accounting",
  shortName: "Professional Accounting",
  claim: "Boekhouding die klopt. Advies waar u iets aan heeft.",
  email: "info@pro-accounting.nl",
  phone: "+31 68 44 14 101",
  phoneDisplay: "+31 (0)68 44 14 101",
  addressLine1: "Bik en Arnoldkade 50",
  addressLine2: "1975 CJ IJmuiden",
  kvk: "93219695",
  vat: "NL005006503B83",
  hours: "Ma – vr: 10:00 – 17:30",
  mapsQuery: "Bik en Arnoldkade 50, 1975CJ IJmuiden",
};

export const stats = [
  { value: "15+", label: "jaar ervaring in de Nederlandse boekhouding" },
  { value: "500+", label: "ondernemers die wij maandelijks ontzorgen" },
  { value: "100%", label: "klanttevredenheid, aangiftes op tijd de deur uit" },
];

export const services = [
  {
    number: "01",
    slug: "boekhouding",
    title: "Boekhouding",
    short: "Uw complete administratie, maandelijks bijgewerkt.",
    body:
      "Van inkoop- en verkoopfacturen tot bankreconciliatie: wij houden uw administratie actueel en overzichtelijk, zodat u altijd weet waar u financieel staat — zonder er zelf tijd in te hoeven steken.",
    icon: "ledger",
  },
  {
    number: "02",
    slug: "btw-en-ib-aangifte",
    title: "BTW- en IB-aangifte",
    short: "Aangiften die kloppen en op tijd binnen zijn.",
    body:
      "Wij verzorgen uw btw-aangifte en inkomstenbelasting volgens de actuele Nederlandse regelgeving. Geen verrassingen achteraf, geen gemiste termijnen.",
    icon: "percent",
  },
  {
    number: "03",
    slug: "jaarrekening",
    title: "Jaarrekening",
    short: "Een jaarrekening die voldoet én die u begrijpt.",
    body:
      "Wij stellen uw jaarrekening op conform de Nederlandse wet- en regelgeving en lichten de cijfers in gewone taal toe, zodat u weet wat er staat en waarom.",
    icon: "folder",
  },
  {
    number: "04",
    slug: "belastingadvies",
    title: "Belastingadvies",
    short: "Advies dat verder gaat dan de aangifte alleen.",
    body:
      "Wij denken actief mee over uw fiscale positie: van ondernemingsvorm tot investeringen. Praktisch advies, gericht op wat voor uw situatie werkt.",
    icon: "bulb",
  },
  {
    number: "05",
    slug: "salarisadministratie",
    title: "Salarisadministratie",
    short: "Salarissen en loonaangiften, correct verwerkt.",
    body:
      "Complete verwerking van uw loonadministratie, inclusief loonaangiften en jaaropgaven — op tijd en zonder fouten, elke maand weer.",
    icon: "wallet",
  },
  {
    number: "06",
    slug: "ondernemingsadvies",
    title: "Ondernemingsadvies",
    short: "Advies op maat bij belangrijke bedrijfskeuzes.",
    body:
      "Van startende zzp'er tot groeiende BV: wij adviseren over structuur, financiering en groei, afgestemd op de fase waarin uw onderneming zich bevindt.",
    icon: "compass",
  },
] as const;

export const audiences = [
  "Zelfstandig ondernemers",
  "Aannemers en bouwbedrijven",
  "Winkeliers",
  "Horecaondernemers",
  "Groothandels en distributeurs",
];

export const values = [
  {
    title: "Integriteit",
    body: "Wij zijn direct en transparant — ook als het antwoord niet is wat u had gehoopt.",
    icon: "shield",
  },
  {
    title: "Vakkennis",
    body: "Diepgaande kennis van de Nederlandse fiscale wetgeving, continu bijgehouden.",
    icon: "mortarboard",
  },
  {
    title: "Vernieuwing",
    body: "Wij werken met moderne, digitale oplossingen — waaronder Exact Online — om uw administratie te vereenvoudigen.",
    icon: "spark",
  },
  {
    title: "Persoonlijke aandacht",
    body: "Geen standaardoplossingen: wij kennen uw onderneming en denken daar concreet in mee.",
    icon: "handshake",
  },
] as const;

export const mission =
  "Wij nemen ondernemers het financiële werk uit handen, zodat zij zich kunnen richten op waar ze zelf goed in zijn.";

export const vision =
  "Heldere uitleg, praktische oplossingen en betrouwbare ondersteuning — niet in jargon, maar in gewone taal. Zo bouwen we aan langdurige relaties, gebaseerd op vertrouwen en kwaliteit.";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export const serviceOptions = [
  "Boekhouding",
  "BTW- en IB-aangifte",
  "Jaarrekening",
  "Belastingadvies",
  "Salarisadministratie",
  "Ondernemingsadvies",
  "Anders / weet ik nog niet",
];
