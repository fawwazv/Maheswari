import Image from "next/image";
import { WA_LINKS } from "@/app/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-default/90 backdrop-blur-xl border-b border-border-refined shadow-[0_1px_12px_rgba(11,30,54,0.04)]">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            alt="Maheswari Enterprise"
            className="h-8 w-auto object-contain"
            src="/assets/branding/logo-nav.png"
            width={150}
            height={72}
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="font-headline-sm text-headline-sm text-primary-container tracking-tight group-hover:text-secondary transition-colors">
              Maheswari
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-secondary">Enterprise</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-6" aria-label="Primary">
          <a href="#tentang" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Tentang Kami</a>
          <a href="#supercrew" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Supercrew & Konsultan</a>
          <a href="#paket-layanan" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Layanan & Paket</a>
          <a href="#portofolio" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Portofolio</a>
          <a href="#alur-booking" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Alur Booking</a>
          <a href="#testimoni" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Testimoni</a>
          <a href="#faq" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary hover:bg-primary transition-all px-5 py-2.5 rounded-full font-label-md text-label-md shadow-sm border border-secondary/20 hover:shadow-md"
          >
            <span className="material-symbols-outlined text-[18px] text-whatsapp-direct" aria-hidden>chat</span>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
