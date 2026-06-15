import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { Wordmark } from "./ui";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Shop", href: "#collections" },
  { label: "Custom Cakes", href: "#custom" },
  { label: "Hampers", href: "#hampers" },
  { label: "Collections", href: "#bestsellers" },
  { label: "About", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-borderSoft/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:grid-cols-[auto_1fr_auto] lg:px-8">
        <a href="#top" className="min-w-0 shrink-0">
          <Wordmark />
        </a>

        <nav className="hidden lg:flex justify-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wide text-ink/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex shrink-0 items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-sm border border-gold bg-gold/10 px-5 py-2.5 text-sm font-medium tracking-wide text-chocolate transition-all hover:bg-gold hover:text-ivory"
          >
            Order via WhatsApp
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden shrink-0 rounded-sm border border-borderSoft bg-ivory/60 p-2 text-chocolate"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ivory lg:hidden">
          <div className="flex items-center justify-between border-b border-borderSoft px-5 py-4">
            <Wordmark />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 text-chocolate">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-6">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-borderSoft/60 py-4 font-display text-2xl text-chocolate"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-chocolate px-5 py-4 text-sm font-medium tracking-wide text-ivory"
            >
              Order via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}