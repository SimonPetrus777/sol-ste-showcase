import { waLink } from "@/lib/whatsapp";
import { PrimaryButton, SecondaryButton, GoldArrow, GoldDivider } from "./ui";

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(226,201,143,0.6), transparent 60%), linear-gradient(180deg, #f1e7d8 0%, #e8d8c3 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <div className="eyebrow mb-5">Let's Bake Something Beautiful</div>
        <h2 className="font-display text-4xl leading-[1.05] text-chocolate sm:text-5xl lg:text-6xl">
          Let us craft something beautiful for your{" "}
          <span className="italic text-brown">next celebration</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
          Whether you are planning a birthday, wedding, corporate gift, or intimate
          family moment, Soléste Cakes is here to create an elegant cake experience
          made with care.
        </p>

        <GoldDivider className="mx-auto mt-10 max-w-xs" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PrimaryButton href="#collections">
            Shop Collection <GoldArrow />
          </PrimaryButton>
          <SecondaryButton href={waLink()} external>
            Consult via WhatsApp
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}