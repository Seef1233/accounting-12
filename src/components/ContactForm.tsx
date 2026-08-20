"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { company, serviceOptions } from "@/lib/site-data";

const fieldClass =
  "w-full border-0 border-b hairline bg-transparent py-2.5 text-[15px] text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Bedrijfsnaam: ${data.get("company")}`,
      `KvK-nummer: ${data.get("kvk")}`,
      `Contactpersoon: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Telefoon: ${data.get("phone")}`,
      `Gewenste dienst: ${data.get("service")}`,
      "",
      `Bericht:`,
      `${data.get("message") || "—"}`,
    ].join("\n");

    const subject = encodeURIComponent(
      `Contactaanvraag via website — ${data.get("company") || data.get("name")}`
    );
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="rounded-2xl border hairline bg-paper p-8"
        >
          <p className="font-serif text-[20px] text-ink">Bijna klaar.</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Uw e-mailprogramma is geopend met de ingevulde gegevens. Verstuur het bericht om uw
            aanvraag bij ons in te dienen — reageert dit niet, mail dan rechtstreeks naar{" "}
            <a href={`mailto:${company.email}`} className="text-accent underline underline-offset-2">
              {company.email}
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-7"
        >
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-1.5 block text-[12.5px] uppercase tracking-wide text-ink-faint">
                Bedrijfsnaam *
              </label>
              <input id="company" name="company" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="kvk" className="mb-1.5 block text-[12.5px] uppercase tracking-wide text-ink-faint">
                KvK-nummer *
              </label>
              <input id="kvk" name="kvk" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-[12.5px] uppercase tracking-wide text-ink-faint">
                Contactpersoon *
              </label>
              <input id="name" name="name" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-[12.5px] uppercase tracking-wide text-ink-faint">
                E-mailadres *
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-[12.5px] uppercase tracking-wide text-ink-faint">
                Telefoonnummer *
              </label>
              <input id="phone" name="phone" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="service" className="mb-1.5 block text-[12.5px] uppercase tracking-wide text-ink-faint">
                Gewenste dienst *
              </label>
              <select id="service" name="service" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Kies een dienst
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-[12.5px] uppercase tracking-wide text-ink-faint">
              Bericht (optioneel)
            </label>
            <textarea id="message" name="message" rows={4} className={fieldClass} />
          </div>

          <label className="flex items-start gap-3 text-[13.5px] leading-relaxed text-ink-soft">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-accent" />
            <span>
              Ik ga akkoord met de verwerking van mijn gegevens conform het{" "}
              <a href="/privacybeleid" className="text-accent underline underline-offset-2">
                privacybeleid
              </a>
              . *
            </span>
          </label>

          <motion.button
            type="submit"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14.5px] tracking-wide text-bg hover:bg-accent-dark hover:shadow-lg"
          >
            Aanvraag versturen
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
