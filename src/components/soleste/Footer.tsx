import { waLink } from "@/lib/whatsapp";
import { Wordmark, GoldDivider } from "./ui";

const SHOP = ["Signature Cakes", "Custom Cakes", "Hampers", "Praline & Cookies"];
const COMPANY = ["About", "FAQ", "Terms & Conditions"];

export function Footer() {
  return (
    <footer className="bg-chocolate text-ivory/80">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark variant="light" className="h-20" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
              Premium cakes, custom creations, and elegant hampers crafted for
              meaningful celebrations.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4" style={{ color: "var(--color-champagne)" }}>
              Shop
            </div>
            <ul className="space-y-3 text-sm">
              {SHOP.map((s) => (
                <li key={s}>
                  <a href="#collections" className="text-ivory/75 transition-colors hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4" style={{ color: "var(--color-champagne)" }}>
              Company
            </div>
            <ul className="space-y-3 text-sm">
              {COMPANY.map((s) => (
                <li key={s}>
                  <a href="#faq" className="text-ivory/75 transition-colors hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4" style={{ color: "var(--color-champagne)" }}>
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/75 transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/75 transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/75 transition-colors hover:text-gold"
                >
                  TikTok
                </a>
              </li>
              <li className="pt-3 text-ivory/55">Operating Hours · 09:00 – 17:00</li>
              <li className="text-ivory/55">Jakarta and surrounding areas</li>
            </ul>
          </div>
        </div>

        <GoldDivider className="mt-16" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-ivory/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Soléste Cakes. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Crafted in Jakarta</span>
        </div>
      </div>
    </footer>
  );
}