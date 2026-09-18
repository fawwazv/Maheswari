"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WA_LINKS } from "@/app/lib/constants";

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#supercrew", label: "Supercrew & Konsultan" },
  { href: "#paket-layanan", label: "Layanan & Paket" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#alur-booking", label: "Alur Booking" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll saat overlay full screen
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-default/90 backdrop-blur-xl border-b border-border-refined shadow-[0_1px_12px_rgba(11,30,54,0.04)]">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
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

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Primary">
            <a href="#tentang" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Tentang Kami</a>
            <a href="#supercrew" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Supercrew & Konsultan</a>
            <a href="#paket-layanan" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Layanan & Paket</a>
            <a href="#portofolio" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Portofolio</a>
            <a href="#alur-booking" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Alur Booking</a>
            <a href="#testimoni" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">Testimoni</a>
            <a href="#faq" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">FAQ</a>
          </nav>

          {/* Desktop WhatsApp — hidden di mobile, masuk ke drawer */}
          <div className="hidden xl:flex items-center gap-2">
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

          {/* Mobile hamburger 3 garis — animasi rotate */}
          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-muted border border-border-refined hover:bg-surface-container transition-colors"
          >
            <span
              className={`material-symbols-outlined text-[26px] text-primary-container transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
              aria-hidden
            >
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Full screen overlay drawer — mobile only */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`xl:hidden fixed inset-0 z-40 bg-surface-default/95 backdrop-blur-xl transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        style={{ paddingTop: "5rem" }}
      >
        {/* Backdrop click to close */}
        <button aria-label="Tutup menu" className="absolute inset-0 -z-10" onClick={() => setOpen(false)} tabIndex={-1} />

        <nav className={`flex flex-col h-[calc(100dvh-5rem)] px-6 py-6 overflow-y-auto transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-4"}`} aria-label="Mobile">
          <div className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 px-4 rounded-xl font-label-lg text-label-lg text-primary-container hover:bg-surface-muted hover:text-secondary transition-colors border border-transparent hover:border-border-refined/50 flex items-center justify-between group"
              >
                {l.label}
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 transition-all" aria-hidden>arrow_forward</span>
              </a>
            ))}
          </div>

          {/* WhatsApp masuk navbar mobile */}
          <div className="pt-6 mt-2 border-t border-border-refined">
            <a
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary px-6 py-4 rounded-full font-label-lg text-label-lg shadow-md hover:bg-primary transition-all"
            >
              <span className="material-symbols-outlined text-[20px] text-whatsapp-direct" aria-hidden>chat</span>
              WhatsApp — Konsultasi Gratis
            </a>
            <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-3">Senin - Minggu: 09.00 - 20.00 WIB</p>
          </div>
        </nav>
      </div>
    </>
  );
}
