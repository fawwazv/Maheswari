import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Pillars } from "@/app/components/sections/Pillars";
import { Supercrew } from "@/app/components/sections/Supercrew";
import { Pricing } from "@/app/components/sections/Pricing";
import { Addons } from "@/app/components/sections/Addons";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { Booking } from "@/app/components/sections/Booking";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { VendorNetwork } from "@/app/components/sections/VendorNetwork";
import { FAQ } from "@/app/components/sections/FAQ";
import { CTA } from "@/app/components/sections/CTA";
import { WA_LINKS } from "@/app/lib/constants";

export default function Home() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <Pillars />
          <Supercrew />
          <Pricing />
          <Addons />
          <Portfolio />
          <Booking />
          <Testimonials />
          <VendorNetwork />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />

      {/* Floating WhatsApp — hardcode sesuai instruksi */}
      <a
        href={WA_LINKS.hero}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi via WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-whatsapp-direct text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-label-md text-label-md"
      >
        <span className="material-symbols-outlined text-[20px]" aria-hidden>chat</span>
        <span className="hidden sm:inline">Konsultasi Gratis</span>
      </a>
    </div>
  );
}
