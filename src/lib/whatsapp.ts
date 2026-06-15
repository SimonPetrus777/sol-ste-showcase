export const WA_NUMBER = "6281234567890"; // replace with real Soléste WhatsApp number

export interface WaPrefill {
  product?: string;
  occasion?: string;
  note?: string;
}

export function waLink(prefill: WaPrefill = {}) {
  const lines = [
    "Hi Soléste Cakes, I would like to inquire about an order.",
    `Product / Collection: ${prefill.product ?? ""}`,
    `Occasion: ${prefill.occasion ?? ""}`,
    "Delivery date:",
    "Delivery area:",
    `Notes: ${prefill.note ?? ""}`,
    "Thank you.",
  ];
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}