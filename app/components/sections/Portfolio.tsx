import Image from "next/image";

const ITEMS = [
  { img: "/assets/portfolio/dian-aldi.jpg", loc: "Ballroom Reception • Majalengka", name: "Dian & Aldi", desc: "Orkestrasi 800 tamu dengan prosesi mapag panganten kontemporer yang khidmat." },
  { img: "/assets/portfolio/karin-prima.jpg", loc: "Sacred Akad Nikah • Cirebon", name: "Karin & Prima", desc: "Ijab kabul syahdu dengan koordinasi flow keluarga inti yang tertib dan damai." },
  { img: "/assets/portfolio/selmi-musa.jpg", loc: "Garden Intimate • Kuningan", name: "Selmi & Musa", desc: "Perayaan intim dengan sentuhan jazz akustik dan tata cahaya sunset hangat." },
  { img: "/assets/portfolio/putri-adit.jpg", loc: "Table Architecture • Indramayu", name: "Putri & Adit", desc: "Detailing dekorasi 8 meter dengan harmoni bunga segar dan pencahayaan LED presisi." },
  { img: "/assets/portfolio/neni-firman.jpg", loc: "Supercrew On Duty", name: "Neni & Firman", desc: "Kedisiplinan waktu rangkaian kirab pengantin dan live feeding tamu tanpa antrean." },
  { img: "/assets/portfolio/viona-syukron.jpg", loc: "Prewedding Editorial", name: "Viona & Syukron", desc: "Sesi foto tematik konsep monokrom editorial sebelum peluncuran undangan digital." },
] as const;

export function Portfolio() {
  return (
    <section id="portofolio" className="py-space-3xl bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Portofolio Maheswari</span>
            <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">Setiap Momen Memiliki Cerita</h2>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant flex-wrap">
            <span className="px-3 py-1 rounded bg-surface-default shadow-sm font-semibold text-primary-container border border-border-refined/50">Akad Nikah</span>
            <span className="px-3 py-1 rounded bg-surface-default shadow-sm border border-border-refined/50">Resepsi Megah</span>
            <span className="px-3 py-1 rounded bg-surface-default shadow-sm border border-border-refined/50">Adat Sunda</span>
            <span className="px-3 py-1 rounded bg-surface-default shadow-sm border border-border-refined/50">Crew on Duty</span>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-thin" role="region" aria-label="Portfolio gallery">
          {ITEMS.map((item) => (
            <div key={item.name} className="shrink-0 w-[85%] sm:w-[340px] lg:w-[360px] snap-start group relative rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-surface-container">
              <Image src={item.img} alt={item.name} fill sizes="(max-width: 640px) 85vw, 360px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">{item.loc}</span>
                <h4 className="font-headline-md text-headline-md text-on-primary mt-1">{item.name}</h4>
                <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
