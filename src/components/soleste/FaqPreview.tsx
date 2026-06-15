import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, GoldArrow } from "./ui";

const FAQ = [
  {
    q: "How early should I place an order?",
    a: "We recommend placing your order at least 7 days in advance. Rush orders may be available depending on schedule and complexity.",
  },
  {
    q: "Can I request a custom design?",
    a: "Yes. Please submit your design brief, occasion, colour palette, serving size, and reference images through our custom cake inquiry flow.",
  },
  {
    q: "Do you deliver outside Jakarta?",
    a: "Delivery availability depends on distance and product type. Please contact our team for confirmation.",
  },
  {
    q: "Is payment required before production?",
    a: "Yes. Payment is required to confirm your order and secure the production schedule.",
  },
];

export function FaqPreview() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Good to know</>}
        />

        <Accordion type="single" collapsible className="mt-12">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-borderSoft"
            >
              <AccordionTrigger className="py-6 text-left font-display text-xl text-chocolate hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-mute">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <a
            href="#faq"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold"
          >
            Read Full FAQ <GoldArrow />
          </a>
        </div>
      </div>
    </section>
  );
}