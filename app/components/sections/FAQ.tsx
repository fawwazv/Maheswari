"use client";
import { useState } from "react";

const FAQS = [
  { q: "Apa perbedaan mendasar WO Only dan All-in Package?", a: "WO Only ditujukan bagi pasangan yang telah menentukan mayoritas vendor utama dan membutuhkan tim profesional untuk menyusun alur rundown, memandu technical meeting, serta mengoordinasikan eksekusi hari H. Sedangkan All-in Package adalah solusi lengkap mencakup dekorasi, MUA, dokumentasi, entertainment, hingga katering yang dirangkum dalam satu kesatuan kontrak dan pengawasan terpadu." },
  { q: "Apakah kami diperbolehkan membawa vendor sendiri di luar rekanan?", a: "Tentu saja. Maheswari Enterprise sangat terbuka untuk berkolaborasi dengan vendor mana pun pilihan Anda. Wedding Consultant kami akan langsung berkoordinasi secara profesional dengan vendor pilihan Anda pada saat penyusunan rundown dan technical meeting." },
  { q: "Berapa bulan sebelum acara idealnya melakukan booking?", a: "Kami menyarankan 6 hingga 12 bulan sebelum hari pelaksanaan, terutama bagi pasangan yang membidik tanggal cantik atau musim pernikahan (wedding season). Namun demikian, kami juga siap mendampingi persiapan cepat dengan timeline 2-3 bulan jika jadwal kru masih tersedia." },
  { q: "Apakah Maheswari menyediakan pendampingan upacara adat?", a: "Ya, kami memiliki divisi khusus tata upacara adat, terutama prosesi adat Sunda Mapag Panganten (Lengkap dengan Penari Baksa, Sinden Kawih, Kendang, Lengser & Ambu) maupun koordinasi siraman dan sungkeman dengan pemandu adat berpengalaman." },
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-space-3xl bg-surface-subtle">
      <div className="max-w-4xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center mb-10">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Pusat Informasi</span>
          <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">Hal yang Sering Ditanyakan</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-surface-default rounded-xl shadow-sm overflow-hidden border border-border-refined/60">
              <button onClick={() => setOpen(open === idx ? null : idx)} aria-expanded={open === idx} className="w-full text-left p-5 lg:p-6 flex items-center justify-between font-headline-sm text-headline-sm text-primary-container focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/20">
                <span className="pr-4">{faq.q}</span>
                <span className={`material-symbols-outlined text-secondary transition-transform shrink-0 ${open === idx ? "rotate-180" : ""}`} aria-hidden>expand_more</span>
              </button>
              {open === idx && <div className="px-5 lg:px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed border-t border-border-refined pt-3">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
