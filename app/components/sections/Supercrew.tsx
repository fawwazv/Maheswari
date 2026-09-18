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

        {/* Mobile: 1 baris horizontal scroll (swipe), Desktop: 5 kolom 1 baris grid */}
        <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-thin xl:grid xl:grid-cols-5 xl:overflow-visible xl:pb-0 -mx-gutter-mobile px-gutter-mobile lg:mx-0 lg:px-0">
          {[
            { initials: "AA", jadwal: "Sen, Rab, Jum", name: "Arki Aji Pangestu, S.T., M.T.", role: "Senior Consultant & MC Pro", spec: "Luxury Grand Ballroom & Upacara Formal", photo: "/assets/consultants/arki.jpg" },
            { initials: "DH", jadwal: "Sel - Ming", name: "Didit Hardiyanto, S.Pd.", role: "Senior Wedding Consultant", spec: "Intimate & Rustic Garden Concept", photo: "/assets/consultants/didit.jpg" },
            { initials: "RN", jadwal: "Jum - Sel", name: "Rifa Nurfalah, S.Kom.", role: "Consultant & Coordinator", spec: "Tech-Driven Rundown & Creative Content", photo: "/assets/consultants/rifa.jpg" },
            { initials: "DW", jadwal: "Sen - Jum", name: "Dedi Wardul Qoryah, S.P.", role: "Production & Vendor Lead", spec: "Tenda Megah & Rigging Production", photo: "/assets/consultants/dedi.jpg" },
            { initials: "AT", jadwal: "Rab - Sab", name: "Agung Tamrin, S.Ap.", role: "F&B & Protocol Lead", spec: "VIP Protocol & Precision Catering Flow", photo: "/assets/consultants/agung.jpg" },
          ].map((c) => (
            <div
              key={c.initials}
              className="shrink-0 snap-start w-[78%] sm:w-[280px] xl:w-auto xl:shrink bg-surface-default rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden border border-border-refined/60 group"
            >
              <div className="relative w-full aspect-[1/1.05] bg-white overflow-hidden">
                <Image
                  alt={c.name}
                  src={c.photo}
                  fill
                  sizes="(max-width: 640px) 78vw, 280px"
                  className="object-contain object-top pt-3 group-hover:scale-[1.02] transition-transform duration-500"
                  priority={c.initials === "RN" || c.initials === "DW" || c.initials === "AT"}
                />
                <div className="absolute bottom-0 left-0 right-0 h-[18%] bg-white" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0", transform: "scaleX(1.4)" }} aria-hidden />
              </div>
              <div className="flex flex-col items-center text-center px-4 pt-3 pb-5 flex-1">
                <h4 className="font-headline-sm text-headline-sm text-primary-container font-semibold leading-tight">{c.name}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{c.jadwal}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-wider mt-2 line-clamp-1">{c.role}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant/70 italic mt-1 leading-snug line-clamp-2">Spesialisasi: {c.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
