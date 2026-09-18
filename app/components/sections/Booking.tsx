export function Booking() {
  return (
    <section id="alur-booking" className="py-space-3xl bg-surface-default">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Tata Cara Reservasi</span>
          <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">6 Langkah Terarah Menuju Hari Bahagia</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Mulai dari impian awal, kami merangkumnya menjadi langkah nyata yang terjadwal rapi dan transparan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Konsultasi Awal", desc: "Hubungi concierge via WhatsApp. Sampaikan tanggal, lokasi acara, jumlah undangan, serta konsep yang kalian impikan." },
            { num: "02", title: "Pilih Paket Sesuai Kebutuhan", desc: "Pilih antara WO Only (Legiseu, Niskala, Abimana, Adiluhung) atau All In Package sesuai dengan kebutuhan venue kalian." },
            { num: "03", title: "Konfirmasi Booking & DP 10%", desc: "Pengisian formulir resmi dan penguncian tanggal acara di kalender Maheswari Enterprise melalui DP ringan 10%." },
            { num: "04", title: "Pilih Wedding Consultant", desc: "Kalian akan dipasangkan dengan Wedding Consultant terdedikasi yang akan menjadi pemandu utama penyusunan konsep dan budget." },
            { num: "05", title: "Technical Meeting Terpadu", desc: "Pertemuan finalisasi bersama seluruh vendor rekanan, keluarga besar, dan kru teknis guna mengunci rundown menit ke menit." },
            { num: "06", title: "Hari H Tanpa Khawatir", desc: "Supercrew Maheswari bertugas mengawal seluruh momen dari subuh hingga tuntas. Pengantin dan keluarga tinggal tersenyum bahagia." },
          ].map((step) => (
            <div key={step.num} className="bg-surface-subtle p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-border-refined">
              <div className="text-secondary font-display-lg text-headline-md font-bold mb-3">{step.num}</div>
              <h3 className="font-headline-sm text-headline-sm text-primary-container mb-2">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
