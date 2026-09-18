import Image from "next/image";

export function Supercrew() {
  return (
    <section id="supercrew" className="py-space-3xl bg-surface-muted">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-space-2xl">
          <div className="lg:col-span-7">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Maheswari Supercrew</span>
            <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">Wedding Consultant & Komposisi Supercrew</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl">Kalian tidak harus memikirkan seluruh detail teknis sendirian. Satu Wedding Consultant terdedikasi menjadi penghubung utama, diperkuat oleh supercrew berpengalaman di lapangan.</p>
          </div>
          <div className="lg:col-span-5 bg-surface-default p-6 rounded-xl shadow-sm border border-border-refined/60">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-secondary text-[24px]" aria-hidden>groups</span>
              <h4 className="font-headline-sm text-headline-sm text-primary-container">Komposisi Crew Profesional</h4>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">Senior Captain</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">Assistant Bride</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">Assistant Parents</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">Stage & Flow Officer</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">F&B Coordinator</span>
              <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-secondary font-semibold">Content Creator (iPhone 17 Pro)</span>
            </div>
          </div>
        </div>

        <div className="mb-10 bg-surface-default rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 border border-border-refined/60">
          <div className="lg:col-span-7 h-72 lg:h-auto overflow-hidden relative min-h-[288px]">
            <Image alt="Technical Meeting Maheswari Supercrew" className="object-cover" src="/assets/keunggulan/technial-meeting.png" fill sizes="(max-width: 1024px) 100vw, 58vw" />
          </div>
          <div className="lg:col-span-5 p-8 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold tracking-wider">Quality Assurance</span>
            <h3 className="font-headline-md text-headline-md text-primary-container mt-1 mb-3">Technical Meeting Komprehensif</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">Sebelum hari H, seluruh vendor (dekor, katering, foto-video, MUA, sound system) dikumpulkan dalam satu meja bersama pengantin dan keluarga untuk simulasi menit ke menit.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-container font-body-sm text-body-sm"><span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden>check_circle</span>Guidebook Fisik & Digital Rundown</div>
              <div className="flex items-center gap-2 text-primary-container font-body-sm text-body-sm"><span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden>check_circle</span>Sistem Komunikasi HT Real-time seluruh kru</div>
              <div className="flex items-center gap-2 text-primary-container font-body-sm text-body-sm"><span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden>check_circle</span>Protokol Mitigasi Cuaca & Waktu Jam Katering</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {[
            { initials: "AA", jadwal: "Sen, Rab, Jum", name: "Arki Aji Pangestu, S.T., M.T.", role: "Senior Consultant & MC Pro", spec: "Luxury Grand Ballroom & Upacara Formal", photo: "/assets/consultants/arki.jpg" },
            { initials: "DH", jadwal: "Sel - Ming", name: "Didit Hardiyanto, S.Pd.", role: "Senior Wedding Consultant", spec: "Intimate & Rustic Garden Concept", photo: "/assets/consultants/didit.jpg" },
            { initials: "RN", jadwal: "Jum - Sel", name: "Rifa Nurfalah, S.Kom.", role: "Consultant & Coordinator", spec: "Tech-Driven Rundown & Creative Content", photo: "/assets/consultants/rifa.jpg" },
            { initials: "DW", jadwal: "Sen - Jum", name: "Dedi Wardul Qoryah, S.P.", role: "Production & Vendor Lead", spec: "Tenda Megah & Rigging Production", photo: "/assets/consultants/dedi.jpg" },
            { initials: "AT", jadwal: "Rab - Sab", name: "Agung Tamrin, S.Ap.", role: "F&B & Protocol Lead", spec: "VIP Protocol & Precision Catering Flow", photo: "/assets/consultants/agung.jpg" },
          ].map((c) => (
            <div key={c.initials} className="bg-surface-default p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-refined/60">
              <div>
                <div className="w-14 h-14 rounded-full overflow-hidden bg-primary-container flex items-center justify-center mb-4 ring-1 ring-border-refined">
                  <Image alt={c.name} src={c.photo} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div className="inline-block px-2 py-0.5 rounded bg-surface-muted text-secondary font-label-sm text-label-sm mb-2">Jadwal: {c.jadwal}</div>
                <h4 className="font-headline-sm text-headline-sm text-primary-container font-medium leading-tight">{c.name}</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">{c.role}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-refined"><span className="font-body-sm text-body-sm text-on-surface-variant italic">Spesialisasi: {c.spec}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
