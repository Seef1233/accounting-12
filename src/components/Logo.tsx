import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-2 shrink-0"
      aria-label="Professional Accounting — naar home"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg font-serif text-[17px] leading-none ${
          inverted ? "bg-bg text-ink" : "bg-ink text-bg"
        }`}
      >
        PA
      </span>
      <span
        className={`font-serif text-[19px] leading-none tracking-tight ${
          inverted ? "text-bg" : "text-ink"
        }`}
      >
        Professional
        <span className="hidden sm:inline"> Accounting</span>
      </span>
    </Link>
  );
}
