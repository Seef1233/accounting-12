import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32">
      <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-accent">404</span>
      <h1 className="mt-4 font-serif text-[36px] leading-tight text-ink sm:text-[44px]">
        Deze pagina staat niet in de boeken.
      </h1>
      <p className="mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-ink-soft">
        De pagina die u zoekt bestaat niet (meer). Ga terug naar de homepage of neem contact met
        ons op.
      </p>
      <Button href="/" className="mt-8">
        Terug naar home
      </Button>
    </section>
  );
}
