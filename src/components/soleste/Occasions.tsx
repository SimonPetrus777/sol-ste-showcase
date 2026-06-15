import { waLink } from "@/lib/whatsapp";
import { SectionHeading } from "./ui";

const OCCASIONS = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Engagement",
  "Baby Shower",
  "Corporate Gift",
  "Lebaran",
  "Christmas",
  "New Year",
  "Thank You Gift",
  "Romantic Gift",
  "Family Celebration",
];

export function Occasions() {
  return (
    <section id="occasions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="By Occasion"
          title={<>Find the perfect cake by occasion</>}
          description="A refined shortcut to the moment you're celebrating — we'll suggest the right cake and finish."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {OCCASIONS.map((o) => (
            <a
              key={o}
              href={waLink({ occasion: o })}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-borderSoft bg-ivory px-5 py-2.5 text-sm tracking-wide text-chocolate transition-all hover:border-gold hover:bg-gold/10"
            >
              {o}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}