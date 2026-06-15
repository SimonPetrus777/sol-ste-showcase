import { waLink } from "@/lib/whatsapp";
import { SectionHeading, GoldArrow } from "./ui";
import chocolate from "@/assets/soleste/product-chocolate.jpg";
import berry from "@/assets/soleste/product-berry.jpg";
import hamper from "@/assets/soleste/product-hamper.jpg";
import buttercream from "@/assets/soleste/product-buttercream.jpg";

const PRODUCTS = [
  {
    name: "Signature Chocolate Praline Cake",
    tag: "Elegant birthday cake",
    price: "Starts from Rp417.000",
    lead: "Pre-order 7 days recommended",
    img: chocolate,
  },
  {
    name: "Elegant Berry Cream Cake",
    tag: "Perfect for anniversary",
    price: "Starts from Rp485.000",
    lead: "Pre-order 7 days recommended",
    img: berry,
  },
  {
    name: "Premium Dessert Hampers",
    tag: "Thoughtful gifting",
    price: "Starts from Rp885.000",
    lead: "Seasonal pre-order available",
    img: hamper,
  },
  {
    name: "Classic Buttercream Custom Cake",
    tag: "Personalized design",
    price: "Starts from consultation",
    lead: "Lead time depends on design",
    img: buttercream,
  },
];

export function BestSellers() {
  return (
    <section id="bestsellers" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Best Sellers"
          title={<>Most loved this season</>}
          description="A small selection of pieces our clients return to again and again — for birthdays, anniversaries, and quiet acts of gifting."
        />

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="card-soft group flex flex-col overflow-hidden">
              <div className="relative h-64 overflow-hidden bg-beige/30">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-chocolate backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl leading-tight text-chocolate">{p.name}</h3>
                <p className="mt-3 text-sm text-brown">{p.price}</p>
                <p className="mt-1 text-xs text-mute">{p.lead}</p>
                <div className="mt-auto pt-5">
                  <a
                    href={waLink({ product: p.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold"
                  >
                    View Details <GoldArrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}