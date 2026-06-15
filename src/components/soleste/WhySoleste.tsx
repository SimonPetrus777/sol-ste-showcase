import { Sparkles, Palette, Clock4, MessageCircle, Gift } from "lucide-react";
import { SectionHeading, GoldDivider } from "./ui";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Premium Ingredients",
    body: "Sourced from trusted suppliers and selected for taste, texture, and aroma.",
  },
  {
    icon: Palette,
    title: "Elegant Design",
    body: "Refined finishes, restrained palettes, and details considered with care.",
  },
  {
    icon: Clock4,
    title: "Made to Order",
    body: "Every cake is baked fresh on schedule — never sat on a shelf.",
  },
  {
    icon: MessageCircle,
    title: "Personal Consultation",
    body: "A real conversation to shape your design, serving size, and occasion.",
  },
  {
    icon: Gift,
    title: "Thoughtful Packaging",
    body: "Boxed, ribboned, and finished with our signature gold detail.",
  },
];

export function WhySoleste() {
  return (
    <section id="why" className="relative py-24 sm:py-32" style={{ background: "#f1e7d8" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Soléste"
          title={<>Crafted with quiet care, for moments that matter</>}
          description="Every detail is crafted to feel personal, refined, and worthy of your most meaningful celebrations."
        />

        <GoldDivider className="mt-14" />

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center lg:text-left">
              <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-ivory text-gold lg:mx-0">
                <Icon className="h-5 w-5" strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-xl text-chocolate">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}