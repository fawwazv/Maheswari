export function Pillars() {
  return (
    <section id="tentang" className="py-space-3xl bg-surface-default">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-4">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Kenapa Maheswari</span>
            <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">Dedikasi Penuh untuk Hari Bersejarah Anda</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Orkestrasi pesta pernikahan dengan manajemen terpadu, menghilangkan kebingungan dan menghadirkan kepastian di setiap langkah persiapan.</p>
        </div>
        {/* Mobile: 2 kolom (2x2) biar hemat vertikal, desktop tetap 4 kolom */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {[
            { icon: "design_services", title: "Perencanaan Personal", desc: "Setiap konsep disusun berdasarkan gaya otentik, lokasi impian, skala tamu, dan prioritas finansial setiap pasangan.", label: "01 — Personalisasi" },
            { icon: "verified_user", title: "Vendor Terkurasi", desc: "Koneksi terpercaya di Majalengka, Cirebon, Kuningan, Indramayu, hingga Bandung dengan standar mutu tinggi dan negosiasi transparan.", label: "02 — Kurasi Selektif" },
            { icon: "hub", title: "Koordinasi Terintegrasi", desc: "Rundown menit-ke-menit, technical meeting, tata letak flow tamu, dan kepatuhan waktu terorkestrasi dalam satu protokol terpadu.", label: "03 — Satu Komando" },
            { icon: "support_agent", title: "Pendampingan Responsif", desc: "Wedding Consultant sigap memandu setiap keputusan persiapan, memberi solusi jernih kapan pun calon pengantin menghadapi kebuntuan.", label: "04 — Ketenangan Jiwa" },
          ].map((item) => (
            <div key={item.title} className="bg-surface-subtle p-5 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-transparent hover:border-border-refined">
              <div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container mb-4 lg:mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px] lg:text-[24px]" aria-hidden>{item.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-1.5 lg:mb-2 leading-tight">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-4 lg:line-clamp-none">{item.desc}</p>
              </div>
              <div className="mt-4 lg:mt-6 pt-2 text-secondary font-label-sm text-label-sm font-semibold tracking-wider uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
