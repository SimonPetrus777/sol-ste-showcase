import { waLink } from "@/lib/whatsapp";
import { PrimaryButton, GoldArrow } from "./ui";
import c1 from "@/assets/soleste/custom-1.jpg";
import c2 from "@/assets/soleste/custom-2.jpg";
import c3 from "@/assets/soleste/custom-3.jpg";
import collectionCustom from "@/assets/soleste/collection-custom.jpg";

const CHIPS = [
  "Birthday",
  "Wedding",
  "Engagement",
  "Baby Shower",
  "Anniversary",
  "Corporate Event",
];

const STEPS = [
  { n: "01", title: "Share your brief", body: "Tell us your occasion, date, and design direction." },
  { n: "02", title: "Confirm design, size & schedule", body: "We refine details and finalise production." },
  { n: "03", title: "Complete payment", body: "Secure your slot and let us craft your cake." },
];

export function CustomCakeShowcase() {
  return (
    <section id="custom" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={collectionCustom}
              alt="Tiered ivory custom cake with hand-painted gold details and sugar flowers"
              loading="lazy"
              className="col-span-2 h-80 w-full rounded-sm object-cover shadow-[0_30px_60px_-40px_rgba(58,36,24,0.45)]"
            />
            <img
              src={c1}
              alt="Sugar flower detail on a custom cake"
              loading="lazy"
              className="h-56 w-full rounded-sm object-cover"
            />
            <img
              src={c2}
              alt="Pastel custom baby shower cake with piped lace"
              loading="lazy"
              className="h-56 w-full rounded-sm object-cover"
            />
            <img
              src={c3}
              alt="Engagement cake with gold geometric detail and fresh florals"
              loading="lazy"
              className="col-span-2 h-56 w-full rounded-sm object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:pt-6">
          <div className="eyebrow mb-4">Custom Cakes</div>
          <h2 className="font-display text-4xl leading-[1.1] text-chocolate sm:text-5xl">
            Personalised cakes, <span className="italic text-brown">beautifully</span> finished
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mute sm:text-lg">
            Share your occasion, design direction, colour palette, serving size,
            and references. Our team will help shape your custom cake into something
            elegant and memorable.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CHIPS.map((c) => (
              <a
                key={c}
                href={waLink({ product: "Custom Cake", occasion: c })}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-borderSoft bg-ivory px-4 py-2 text-xs tracking-wide text-chocolate transition-all hover:border-gold hover:text-gold"
              >
                {c}
              </a>
            ))}
          </div>

          <ol className="mt-10 space-y-6">
            {STEPS.map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] items-start gap-5">
                <span className="font-display text-3xl text-gold">{s.n}</span>
                <div className="min-w-0">
                  <h4 className="font-display text-lg text-chocolate">{s.title}</h4>
                  <p className="mt-1 text-sm text-mute">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <PrimaryButton
              href={waLink({ product: "Custom Cake Inquiry" })}
              external
            >
              Start Custom Cake Inquiry <GoldArrow />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}