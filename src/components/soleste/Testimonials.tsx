import { SectionHeading } from "./ui";

const T = [
  {
    quote:
      "Beautifully made and exactly the elegant look I wanted for the celebration.",
    name: "Amira S.",
    occasion: "30th Birthday",
  },
  {
    quote:
      "The packaging felt premium and the cake was perfect for gifting.",
    name: "Ravi & Linn",
    occasion: "Corporate Gift",
  },
  {
    quote:
      "The consultation was clear, helpful, and very personal from start to finish.",
    name: "Stella H.",
    occasion: "Engagement",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title={<>From the people we've baked for</>}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {T.map((t) => (
            <figure key={t.name} className="card-soft flex h-full flex-col p-8">
              <span
                className="font-display text-6xl leading-none text-gold"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 font-display text-xl leading-snug text-chocolate">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <div className="h-px w-10 bg-gold/60" />
                <div className="mt-4 text-sm font-medium text-chocolate">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.22em] text-mute">
                  {t.occasion}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}