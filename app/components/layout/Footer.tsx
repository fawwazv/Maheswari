import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface-container-low border-t border-white/10 pt-space-3xl pb-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl w-fit backdrop-blur-sm border border-white/10">
              <Image alt="Maheswari Enterprise" className="h-9 w-auto object-contain brightness-0 invert" src="/assets/branding/logo-nav.png" width={120} height={36} />
              <span className="font-headline-sm text-headline-sm text-on-primary">Maheswari</span>
            </div>
            <p className="font-display-lg text-headline-sm text-secondary-fixed italic font-normal">Lebih dari Sekadar Wedding Organizer - Jagonya Wedding</p>
            <p className="font-body-sm text-body-sm text-white/60 max-w-sm">Menghadirkan orkestrasi perhelatan pernikahan berstandar korporat dengan sentuhan kemewahan personal. Memastikan ketenangan, keanggunan, dan kesempurnaan setiap detik perayaan Anda.</p>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-label-lg text-label-lg text-on-primary uppercase tracking-wider text-secondary-fixed">Navigasi Cepat</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-white/60">
              <li><a className="hover:text-secondary-fixed transition-colors" href="#tentang">Tentang Kami</a></li>
              <li><a className="hover:text-secondary-fixed transition-colors" href="#paket-layanan">Layanan & Paket</a></li>
              <li><a className="hover:text-secondary-fixed transition-colors" href="#supercrew">Supercrew & Konsultan</a></li>
              <li><a className="hover:text-secondary-fixed transition-colors" href="#portofolio">Galeri Portofolio</a></li>
              <li><a className="hover:text-secondary-fixed transition-colors" href="#alur-booking">Alur Booking</a></li>
              <li><a className="hover:text-secondary-fixed transition-colors" href="#faq">Pusat Bantuan (FAQ)</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-lg text-label-lg text-on-primary uppercase tracking-wider text-secondary-fixed">Jaringan Vendor Partner</h3>
            <p className="font-body-sm text-body-sm text-white/60 mb-1">Kurasi mitra venue, dekorasi, katering, dan dokumentasi prestisius:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Majalengka</span>
              <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Cirebon</span>
              <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Kuningan</span>
              <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Indramayu</span>
              <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Bandung</span>
            </div>
            <div className="mt-2 p-3 rounded bg-tertiary-container/60 border border-white/10 text-white/60 font-label-sm text-label-sm">Tersedia layanan koordinasi lintas wilayah & destination wedding.</div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-label-lg text-label-lg text-on-primary uppercase tracking-wider text-secondary-fixed">Executive Office</h3>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-white/60">
              <p className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-0.5" aria-hidden>location_on</span><span>Office Gallery Maheswari, Wilayah III Cirebon & Jawa Barat</span></p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-secondary-fixed" aria-hidden>call</span><span>+62 812-XXXX-XXXX</span></p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-secondary-fixed" aria-hidden>mail</span><span>concierge@maheswarienterprise.com</span></p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-secondary-fixed" aria-hidden>schedule</span><span>Senin - Minggu: 09.00 - 20.00 WIB</span></p>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label-md text-label-md text-white/50 text-center sm:text-left">© 2024 Maheswari Enterprise. Seluruh Hak Cipta Dilindungi. Orkestrasi Pernikahan Terpadu & Berkelas.</p>
          <div className="flex items-center gap-4 font-label-md text-label-md text-white/50">
            <a className="hover:text-on-primary transition-colors" href="#">Privasi</a>
            <span className="text-white/20">•</span>
            <a className="hover:text-on-primary transition-colors" href="#">Syarat & Ketentuan</a>
            <span className="text-white/20">•</span>
            <a className="hover:text-on-primary transition-colors" href="#">Protokol Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
