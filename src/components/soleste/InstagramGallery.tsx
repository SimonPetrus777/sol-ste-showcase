import { Instagram } from "lucide-react";
import { SectionHeading } from "./ui";
import ig1 from "@/assets/soleste/ig-1.jpg";
import ig2 from "@/assets/soleste/ig-2.jpg";
import ig3 from "@/assets/soleste/ig-3.jpg";
import ig4 from "@/assets/soleste/ig-4.jpg";
import ig5 from "@/assets/soleste/ig-5.jpg";
import ig6 from "@/assets/soleste/ig-6.jpg";

const IMAGES = [ig1, ig2, ig3, ig4, ig5, ig6];

export function InstagramGallery() {
  return (
    <section id="instagram" className="py-24 sm:py-32" style={{ background: "#f1e7d8" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="@solestecakes"
          title={<>From our sweet moments</>}
          description="Explore our latest creations and curated cake moments."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {IMAGES.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={src}
                alt={`Soléste Cakes creation ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-chocolate/0 transition-colors duration-300 group-hover:bg-chocolate/40">
                <Instagram className="h-6 w-6 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm tracking-[0.2em] uppercase text-chocolate transition-colors hover:text-gold"
          >
            <Instagram className="h-4 w-4" /> Follow Soléste Cakes
          </a>
        </div>
      </div>
    </section>
  );
}