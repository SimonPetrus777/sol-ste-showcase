import { waLink } from "@/lib/whatsapp";
import { PrimaryButton, SecondaryButton, GoldArrow } from "./ui";
import hampersImg from "@/assets/soleste/hampers-feature.jpg";

export function Hampers() {
  return (
    <section
      id="hampers"
      className="relative py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #e8d8c3 0%, #f1e7d8 100%)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-champagne/40 blur-3xl" />
          <img
            src={hampersImg}
            alt="Premium Soléste hamper box with silk ribbon and dried floral detail"
            loading="lazy"
            className="h-[460px] w-full rounded-sm object-cover shadow-[0_40px_80px_-40px_rgba(58,36,24,0.45)] sm:h-[560px]"
          />
        </div>

        <div>
          <div className="eyebrow mb-4">Hampers</div>
          <h2 className="font-display text-4xl leading-[1.1] text-chocolate sm:text-5xl">
            Premium hampers for{" "}
            <span className="italic text-brown">thoughtful</span> gifting
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Curated for festive seasons, corporate appreciation, and meaningful personal
            gifts — Soléste hampers combine refined presentation with delightful taste.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-ink/80">
            {[
              "Seasonal collections for Lebaran, Christmas, and New Year",
              "Corporate gifting with custom branding available",
              "Bulk orders with dedicated coordination",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-px w-6 shrink-0 bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryButton href={waLink({ product: "Hampers" })} external>
              Explore Hampers <GoldArrow />
            </PrimaryButton>
            <SecondaryButton
              href={waLink({ product: "Corporate Gift Proposal" })}
              external
            >
              Request Corporate Proposal
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}