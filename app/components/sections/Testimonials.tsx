export function Testimonials() {
  return (
    <section id="testimoni" className="py-space-3xl bg-surface-muted">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Cerita Nyata</span>
          <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">Kesan Hangat dari Pengantin Maheswari</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Bagi kami, keberhasilan sebuah pesta pernikahan diukur dari ketenangan hati pengantin dan kebahagiaan seluruh keluarga.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "SELMI & MUSA", loc: "Intimate Garden Wedding • Majalengka", text: "“Terima kasih untuk tim Maheswari Enterprise yang sudah membantu acara kami berjalan dengan sangat rapi. Dari awal konsultasi sampai hari H, semuanya terasa lebih tenang karena tim sangat responsif, detail, dan benar-benar membantu kami di setiap proses.”" },
            { name: "PUTRI & ADIT", loc: "Grand Ballroom Reception • Cirebon", text: "“Kami merasa sangat terbantu dengan koordinasi vendor dan technical meeting yang disiapkan Maheswari. Banyak hal yang awalnya membuat kami bingung jadi lebih jelas dan terarah. Hasilnya, acara berjalan lancar dan kami bisa menikmati momen tanpa terlalu stres.”" },
            { name: "KARIN & PRIMA", loc: "Traditional Akad & Reception • Kuningan", text: "“Salah satu hal yang paling kami suka adalah cara tim Maheswari mendampingi kami dengan sabar dan terstruktur. Pilihan paketnya fleksibel, koordinasinya bagus, dan pada hari acara semua terasa lebih tertib, nyaman, dan berkesan.”" },
          ].map((t) => (
            <div key={t.name} className="bg-surface-default p-8 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60">
              <div>
                <div className="flex items-center gap-1 text-secondary mb-3" aria-hidden>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-text-charcoal italic leading-relaxed my-4">{t.text}</p>
              </div>
              <div className="pt-4 border-t border-border-refined">
                <h4 className="font-headline-sm text-headline-sm text-primary-container">{t.name}</h4>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{t.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
