import Image from "next/image";

export function Addons() {
  return (
    <section className="py-space-2xl bg-surface-subtle border-y border-border-refined/40">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Layanan Tambahan</span>
          <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">Special Effects & Hiburan Opsional</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Tambahkan sentuhan dramatis dari koleksi asli Maheswari — tidak termasuk paket WO Only, tersedia sebagai add-on.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/assets/addons/firework.jpg", label: "Firework & Electric Confetti", desc: "Entrance & penutup spektakuler" },
            { src: "/assets/addons/beam4.jpg", label: "Moving Beam - 4 Unit", desc: "Pencahayaan dinamis panggung" },
            { src: "/assets/addons/violin.png", label: "Saxophone / Violin", desc: "Instrumental penyambutan tamu" },
            { src: "/assets/addons/balon.jpg", label: "Balon Helium", desc: "Dekoratif & pelepasan balon" },
            { src: "/assets/addons/dry-ice.jpg", label: "Dry Ice", desc: "Efek kabut entrance pengantin" },
            { src: "/assets/addons/mahes-music.jpg", label: "Mahes Music", desc: "Live band & hiburan" },
            { src: "/assets/addons/upacara-adat.jpg", label: "Upacara Adat", desc: "Mapag Panganten & tradisi Sunda" },
            { src: "/assets/addons/mahes-ayu.png", label: "Mahes Ayu", desc: "Prosesi & rias adat" },
          ].map((a) => (
            <div key={a.label} className="group bg-surface-default rounded-xl overflow-hidden shadow-sm border border-border-refined/50 hover:shadow-md transition-all">
              <div className="aspect-[4/3] relative overflow-hidden bg-surface-muted">
                <Image src={a.src} alt={a.label} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3">
                <div className="font-label-md text-label-md text-primary-container font-semibold leading-tight">{a.label}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
