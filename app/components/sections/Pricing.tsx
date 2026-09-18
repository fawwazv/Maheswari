"use client";
import { useState } from "react";
import { WA_LINKS } from "@/app/lib/constants";

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"wo" | "allin">("wo");
  return (
    <section id="paket-layanan" className="py-space-3xl bg-surface-default">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">Paket Transparan & Komprehensif</span>
          <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">Pilih Cara Kami Mendampingi Pernikahanmu</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Pilihan fleksibel bagi pasangan yang ingin tim profesional mengoordinasikan seluruh alur acara tanpa celah di hari bahagia.</p>
          <div className="inline-flex p-1 bg-surface-muted rounded-xl mt-6 border border-border-refined/60" role="tablist">
            <button role="tab" aria-selected={activeTab==="wo"} onClick={() => setActiveTab("wo")} className={`px-5 py-2 rounded-lg font-label-md text-label-md transition-all ${activeTab==="wo" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>WO Only (Hari H Coordination)</button>
            <button role="tab" aria-selected={activeTab==="allin"} onClick={() => setActiveTab("allin")} className={`px-5 py-2 rounded-lg font-label-md text-label-md transition-all ${activeTab==="allin" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}>All In Package (Rumah & Gedung)</button>
          </div>
        </div>

        {activeTab === "wo" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60 hover:shadow-md transition-all">
              <div>
                <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Tier Coordination</div>
                <h3 className="font-headline-md text-headline-md text-primary-container mt-1">LEGISEU</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">Pendampingan esensial 4 wedding crew untuk koordinasi vendor dan flow acara.</p>
                <div className="py-3 border-t border-border-refined mb-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary font-semibold block mb-2">Spesifikasi Utama</span>
                  <ul className="space-y-2 text-body-sm font-body-sm text-text-charcoal">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>4 Wedding Crew</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>4 Wedding Guidebook Eksklusif</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>Technical Meeting Online</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>Akad Nikah Kit</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>HT & Confetti</li>
                  </ul>
                </div>
              </div>
              <a href={WA_LINKS.legiseu} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded bg-surface-default text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined">Konsultasikan Legiseu</a>
            </div>

            <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60 hover:shadow-md transition-all">
              <div>
                <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Recommended Scale</div>
                <h3 className="font-headline-md text-headline-md text-primary-container mt-1">NISKALA</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">Koordinasi acara yang lebih luas dengan 6 wedding crew dan technical meeting offline.</p>
                <div className="py-3 border-t border-border-refined mb-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary font-semibold block mb-2">Spesifikasi Utama</span>
                  <ul className="space-y-2 text-body-sm font-body-sm text-text-charcoal">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>6 Wedding Crew & 3 Officer</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>6 Guidebook & Rundown PDF</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>Technical Meeting Tatap Muka</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>Dummy Buku Nikah</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>Content Creator iPhone 13 Pro</li>
                  </ul>
                </div>
              </div>
              <a href={WA_LINKS.niskala} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded bg-surface-default text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined">Konsultasikan Niskala</a>
            </div>

            <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60 hover:shadow-md transition-all">
              <div>
                <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">With Master of Ceremony</div>
                <h3 className="font-headline-md text-headline-md text-primary-container mt-1">ABIMANA</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">Pendampingan komplit termasuk MC Wedding Professional untuk akad & resepsi.</p>
                <div className="py-3 border-t border-border-refined mb-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary font-semibold block mb-2">Spesifikasi Utama</span>
                  <ul className="space-y-2 text-body-sm font-body-sm text-text-charcoal">
                    <li className="flex items-center gap-2 font-semibold text-primary-container"><span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden>stars</span>MC Wedding Professional</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>6 Wedding Crew stylish uniform</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>Content Creator — iPhone 17</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden>done</span>Confetti, Flashmob & HT Full</li>
                  </ul>
                </div>
              </div>
              <a href={WA_LINKS.abimana} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded bg-surface-default text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined">Konsultasikan Abimana</a>
            </div>

            <div className="bg-primary-container text-on-primary p-6 rounded-xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">Flagship</div>
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">Full Wedding Management</div>
                <h3 className="font-headline-md text-headline-md text-on-primary mt-1">ADILUHUNG</h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mt-1 mb-4">Protokol eksekutif lengkap dengan MC Profesional dan 8 wedding crew khusus.</p>
                <div className="py-3 border-t border-white/20 mb-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary-fixed font-semibold block mb-2">Fitur Eksklusif</span>
                  <ul className="space-y-2 text-body-sm font-body-sm text-surface-container-low">
                    <li className="flex items-center gap-2 text-secondary-fixed font-semibold"><span className="material-symbols-outlined text-[18px]" aria-hidden>workspace_premium</span>MC Pro + 8 Supercrew</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-secondary-fixed" aria-hidden>done</span>Senior Captain & F&B Coordinator</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-secondary-fixed" aria-hidden>done</span>Assistant Parents & VIP Handling</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-secondary-fixed" aria-hidden>done</span>Perencanaan Anggaran Sejak Awal</li>
                  </ul>
                </div>
              </div>
              <a href={WA_LINKS.adiluhung} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded bg-secondary text-white font-label-md text-label-md hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all font-semibold">Konsultasikan Adiluhung</a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60">
              <div>
                <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">Solusi Rumah Lengkap</div>
                <h3 className="font-headline-md text-headline-md text-primary-container mt-1">Paket Rumah Elegan</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">Solusi lengkap untuk pesta di kediaman tanpa repot mengurus vendor terpisah.</p>
                <div className="space-y-3 py-3 border-t border-border-refined font-body-sm text-body-sm">
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>chair</span><span><strong>Dekorasi Pelaminan 8m:</strong> Sofa, 2 kotak uang, pergola, 7 lokal tenda & 100 kursi cover</span></div>
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>photo_camera</span><span><strong>Foto & Video Sinematik:</strong> 2 Fotografer, 1 Videografer (10 Jam), Album Hardcover</span></div>
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>styler</span><span><strong>MUA & Attire:</strong> 2 Busana Pengantin + Sunda Siger/Melati, Busana Orang Tua & Pagar Ayu</span></div>
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>groups</span><span><strong>WO & MC:</strong> MC Akad-Resepsi, 6 Kru Maheswari, Guidebook & Akad Kit</span></div>
                </div>
              </div>
              <a href={WA_LINKS.rumah} target="_blank" rel="noopener noreferrer" className="mt-6 w-full text-center py-2.5 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all">Konsultasi Paket Rumah</a>
            </div>

            <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60">
              <div>
                <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">Ballroom & Convention</div>
                <h3 className="font-headline-md text-headline-md text-primary-container mt-1">Paket Gedung / Ballroom</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">Dirancang untuk venue hotel atau gedung serbaguna dengan skala tamu besar.</p>
                <div className="space-y-3 py-3 border-t border-border-refined font-body-sm text-body-sm">
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>apartment</span><span><strong>Koordinasi Venue:</strong> Loading in/out, sound system gedung, teknikal panggung & lighting</span></div>
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>mic</span><span><strong>Live Entertainment:</strong> Mahes Music akustik/full band, sound 3000W & saxophone</span></div>
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>theater_comedy</span><span><strong>Upacara Adat Mapag Panganten:</strong> Penari Baksa, sinden live, Lengser & Ambu tradisi Sunda</span></div>
                  <div className="flex items-start gap-2"><span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" aria-hidden>volunteer_activism</span><span><strong>Bonus Eksklusif:</strong> Content Creator iPhone 17 Pro, Nail art henna & Balon helium</span></div>
                </div>
              </div>
              <a href={WA_LINKS.gedung} target="_blank" rel="noopener noreferrer" className="mt-6 w-full text-center py-2.5 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all">Konsultasi Paket Gedung</a>
            </div>

            <div className="bg-surface-default p-6 rounded-xl shadow-sm border border-border-refined flex flex-col justify-between">
              <div>
                <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Layanan Tambahan Opsional</div>
                <h3 className="font-headline-md text-headline-md text-primary-container mt-1">Custom Special Effects</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">Perkuat momen dramatis resepsi Anda dengan elemen visual berkelas.</p>
                <div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm">
                  <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50"><div className="font-semibold text-primary-container">Dry Ice System</div><div className="text-on-surface-variant text-label-sm">Efek kabut awan entrance</div></div>
                  <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50"><div className="font-semibold text-primary-container">Moving Beam (4 Unit)</div><div className="text-on-surface-variant text-label-sm">Pencahayaan dinamis</div></div>
                  <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50"><div className="font-semibold text-primary-container">Electric Confetti</div><div className="text-on-surface-variant text-label-sm">Penutup spektakuler</div></div>
                  <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50"><div className="font-semibold text-primary-container">Violin / Saxophone</div><div className="text-on-surface-variant text-label-sm">Instrumental penyambutan</div></div>
                </div>
              </div>
              <a href={WA_LINKS.addon} target="_blank" rel="noopener noreferrer" className="mt-6 w-full text-center py-2.5 rounded bg-surface-muted text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined">Diskusikan Kebutuhan Tambahan</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
