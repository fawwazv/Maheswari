import { WA_LINKS } from "@/app/lib/constants";

export function CTA() {
  return (
    <section className="py-space-3xl bg-primary-container text-on-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest mb-4 border border-white/10">Langkah Pertama Menuju Resepsi Berkelas</span>
          <h2 className="font-display-xl text-display-xl text-on-primary font-medium tracking-tight mb-4 leading-tight">Sudah Punya Tanggal? Mari Susun Langkah Pertamanya Bersama Kami.</h2>
          <p className="font-body-lg text-body-lg text-surface-container-high max-w-xl mx-auto mb-8 leading-relaxed">Ceritakan lokasi, tanggal, dan gambaran acara impian Anda. Tim Wedding Consultant Maheswari siap membantu memetakan solusi paket terbaik untuk Anda dan keluarga.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={WA_LINKS.cta} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-whatsapp-direct text-white px-8 py-4 rounded font-label-lg text-label-lg shadow-lg hover:opacity-90 transition-all font-semibold">
              <span className="material-symbols-outlined text-[22px]" aria-hidden>chat</span>
              Konsultasi WhatsApp Langsung
            </a>
            <a href="#paket-layanan" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded font-label-lg text-label-lg bg-white/10 text-on-primary hover:bg-white/20 transition-all border border-white/20">Review Pilihan Paket</a>
          </div>
        </div>
      </div>
    </section>
  );
}
