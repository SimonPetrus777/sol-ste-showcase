import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/soleste/Navbar";
import { Hero } from "@/components/soleste/Hero";
import { FeaturedCollections } from "@/components/soleste/FeaturedCollections";
import { WhySoleste } from "@/components/soleste/WhySoleste";
import { BestSellers } from "@/components/soleste/BestSellers";
import { CustomCakeShowcase } from "@/components/soleste/CustomCakeShowcase";
import { Hampers } from "@/components/soleste/Hampers";
import { Occasions } from "@/components/soleste/Occasions";
import { HowToOrder } from "@/components/soleste/HowToOrder";
import { Testimonials } from "@/components/soleste/Testimonials";
import { InstagramGallery } from "@/components/soleste/InstagramGallery";
import { FaqPreview } from "@/components/soleste/FaqPreview";
import { FinalCta } from "@/components/soleste/FinalCta";
import { Footer } from "@/components/soleste/Footer";
import { StickyWhatsApp } from "@/components/soleste/StickyWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soléste Cakes — Elegant Cakes & Hampers, Jakarta" },
      {
        name: "description",
        content:
          "Soléste Cakes crafts premium cakes, custom creations, and elegant hampers for meaningful celebrations in Jakarta. Made to order with care.",
      },
      { property: "og:title", content: "Soléste Cakes — Elegant Cakes & Hampers" },
      {
        property: "og:description",
        content:
          "Elegant cakes, pralines, and premium hampers crafted for unforgettable moments. Jakarta delivery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <WhySoleste />
        <BestSellers />
        <CustomCakeShowcase />
        <Hampers />
        <Occasions />
        <HowToOrder />
        <Testimonials />
        <InstagramGallery />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
