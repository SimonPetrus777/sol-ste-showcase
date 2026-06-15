import { waLink } from "@/lib/whatsapp";
import { PrimaryButton, SecondaryButton, GoldArrow } from "./ui";
import heroCake from "@/assets/soleste/hero-cake.jpg";

const TRUST = [
  "Made to order with care",
  "Jakarta delivery",
  "Custom cake consultation",
  "Premium gifting experience",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(226,201,143,0.35), transparent 55%), linear-gradient(to bottom, #f8f3ec 0%, #f1e7d8 100%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28">
        <div className="order-2 lg:order-1">
          <div className="eyebrow mb-5">Soléste · Jakarta Patisserie</div>
          <h1 className="font-display text-[44px] leading-[1.05] text-chocolate sm:text-6xl lg:text-7xl">
            Elegant Cakes for{" "}
            <span className="italic text-brown">Unforgettable</span> Moments
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Discover beautifully crafted cakes, pralines, and hampers made with
            premium ingredients, elegant details, and a personal touch for every
            celebration.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryButton href="#collections">
              Shop Collection <GoldArrow />
            </PrimaryButton>
            <SecondaryButton
              href={waLink({ product: "Custom Cake Consultation" })}
              external
            >
              Consult Custom Cake
            </SecondaryButton>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t} className="flex flex-col gap-2">
                <span className="h-px w-10 bg-gold/60" />
                <span className="text-xs leading-snug text-ink/75">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-champagne/40 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-gold lg:block" />
            <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b border-r border-gold lg:block" />
            <img
              src={heroCake}
              alt="Soléste Cakes signature two-tier chocolate cake with gold leaf and fresh berries on a marble cake stand"
              width={1080}
              height={1350}
              className="relative h-[460px] w-full rounded-sm object-cover shadow-[0_40px_80px_-40px_rgba(58,36,24,0.45)] sm:h-[560px] lg:h-[640px]"
            />
            <div className="absolute bottom-4 left-4 hidden rounded-sm bg-ivory/90 px-4 py-3 backdrop-blur-sm sm:block">
              <div className="eyebrow mb-1">Signature</div>
              <div className="font-display text-lg text-chocolate">Chocolate Praline · Gold Leaf</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}