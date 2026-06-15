import { SectionHeading, GoldDivider } from "./ui";

const STEPS = [
  { n: "01", title: "Choose or brief", body: "Pick a product or submit a custom design brief." },
  { n: "02", title: "Confirm details", body: "Our admin confirms design, size, and schedule." },
  { n: "03", title: "Secure payment", body: "Complete payment to lock your production slot." },
  { n: "04", title: "Crafted with care", body: "Your cake is baked and finished on schedule." },
  { n: "05", title: "Delivered", body: "Carefully delivered to your chosen location." },
];

export function HowToOrder() {
  return (
    <section
      id="how"
      className="relative py-24 sm:py-32"
      style={{ background: "#3a2418", color: "#f8f3ec" }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">How to Order</div>
          <h2 className="font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
            A simple, considered process
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
            From the first message to the final delivery, every step is handled with the
            same warmth and attention.
          </p>
        </div>

        <GoldDivider className="mt-14" />

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <div key={s.n}>
              <div className="font-display text-4xl text-gold">{s.n}</div>
              <div className="mt-3 h-px w-10 bg-gold/60" />
              <h3 className="mt-4 font-display text-xl text-ivory">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-sm border border-gold/30 bg-ivory/[0.04] p-6 sm:p-8">
          <div className="eyebrow mb-3" style={{ color: "var(--color-champagne)" }}>
            Please Note
          </div>
          <ul className="grid grid-cols-1 gap-3 text-sm leading-relaxed text-ivory/80 sm:grid-cols-2">
            <li>· Pre-order is recommended at least 7 days in advance.</li>
            <li>· Rush orders depend on availability and may include an additional fee.</li>
            <li>· Delivery fee is confirmed by admin based on location and schedule.</li>
            <li>· Custom designs require complete details and confirmation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}