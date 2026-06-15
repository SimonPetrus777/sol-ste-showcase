import { SectionHeading, GoldArrow } from "./ui";
import signature from "@/assets/soleste/collection-signature.jpg";
import custom from "@/assets/soleste/collection-custom.jpg";
import hampers from "@/assets/soleste/collection-hampers.jpg";
import praline from "@/assets/soleste/collection-praline.jpg";

const ITEMS = [
  {
    name: "Signature Cakes",
    blurb: "Our most-loved cakes, finished with refined detail.",
    img: signature,
  },
  {
    name: "Custom Cakes",
    blurb: "Personalised designs crafted around your moment.",
    img: custom,
  },
  {
    name: "Premium Hampers",
    blurb: "Curated dessert boxes for thoughtful gifting.",
    img: hampers,
  },
  {
    name: "Praline & Cookies",
    blurb: "Delicate bites in elegant boxed presentations.",
    img: praline,
  },
];

export function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Collections"
          title={<>The Soléste Patisserie</>}
          description="Four curated worlds — from signature cakes to thoughtful hampers — each piece made to order with the same quiet attention to detail."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {ITEMS.map((item, i) => (
            <a
              key={item.name}
              href={i === 1 ? "#custom" : i === 2 ? "#hampers" : "#bestsellers"}
              className="card-soft group block overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(58,36,24,0.35)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-chocolate">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                  Explore Collection <GoldArrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}