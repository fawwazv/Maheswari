import Image from "next/image";
import { WA_LINKS } from "@/app/lib/constants";

export function Hero() {
  return (
    <section className="relative w-full bg-surface-subtle overflow-hidden py-6 lg:py-8 min-h-[calc(100vh-5rem)] lg:min-h-[calc(100dvh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            <h1 className="font-display-xl text-display-xl lg:text-display-xl text-primary-container tracking-tight mb-space-md leading-[1.1]">
              Perencanaan Pernikahan Impian dengan Sentuhan <span className="italic font-normal text-secondary">Elegan & Profesional</span>
            </h1>
            <p className="font-body-lg text-body-lg text-text-charcoal/80 max-w-xl mb-space-xl leading-relaxed">
              Lebih dari sekadar Wedding Organizer. Menghubungkan pasangan dengan perencanaan personal, vendor terkurasi, dan pendampingan terstruktur bersama Dedicated Wedding Consultant hingga hari H.
            </p>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={WA_LINKS.hero}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary px-7 py-3.5 rounded-full font-label-lg text-label-lg shadow-sm hover:bg-primary transition-all group"
              >
                <span className="material-symbols-outlined text-[20px] text-whatsapp-direct group-hover:scale-110 transition-transform" aria-hidden>chat</span>
                Konsultasi via WhatsApp
              </a>
              <a
                href="#paket-layanan"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-label-lg text-label-lg text-primary-container bg-surface-default hover:bg-surface-muted shadow-sm transition-all border border-border-refined"
              >
                Jelajahi Paket Layanan
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-6 lg:mt-8 bg-surface-default/60 rounded-xl p-4 shadow-sm border border-border-refined/50">
              <div><div className="font-display-lg text-headline-lg text-primary-container font-bold">500+</div><div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Pernikahan</div></div>
              <div><div className="font-display-lg text-headline-lg text-primary-container font-bold">150+</div><div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Mitra Vendor</div></div>
              <div><div className="font-display-lg text-headline-lg text-primary-container font-bold">50+</div><div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Supercrew</div></div>
              <div><div className="font-display-lg text-headline-lg text-secondary font-bold">100%</div><div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Fast Response</div></div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container relative">
                <Image alt="Konsultasi Perencanaan Pernikahan Bersama Maheswari Enterprise" className="w-full h-full object-cover object-center" src="/assets/portfolio/dian-aldi.jpg" fill sizes="(max-width: 1024px) 100vw, 40vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                  <div className="flex items-center gap-2 mb-1 text-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden>verified</span>
                    <span className="font-label-sm text-label-sm tracking-widest uppercase">Executive Service</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary">Konsultasi 24 Jam & Solutif</h3>
                  <p className="font-body-sm text-body-sm text-surface-container-high/90">Diskusi intensif untuk memetakan budget, konsep, dan rundown acara secara presisi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
