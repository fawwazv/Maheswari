"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"wo" | "allin">("wo");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-default/90 backdrop-blur-xl border-b border-border-refined shadow-[0_1px_12px_rgba(11,30,54,0.04)]">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              alt="Maheswari Enterprise"
              className="h-8 w-auto object-contain"
              src="/assets/branding/logo-nav.png"
              width={150}
              height={72}
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-headline-sm text-headline-sm text-primary-container tracking-tight group-hover:text-secondary transition-colors">
                Maheswari
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-secondary">
                Enterprise
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-6">
            <a href="#tentang" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">
              Tentang Kami
            </a>
            <a href="#supercrew" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">
              Supercrew & Konsultan
            </a>
            <a href="#paket-layanan" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">
              Layanan & Paket
            </a>
            <a href="#portofolio" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">
              Portofolio
            </a>
            <a href="#alur-booking" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">
              Alur Booking
            </a>
            <a href="#testimoni" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">
              Testimoni
            </a>
            <a href="#faq" className="py-1 font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors tracking-wide">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Maheswari%2C%20saya%20ingin%20konsultasi%20pernikahan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary hover:bg-primary transition-all px-5 py-2.5 rounded-full font-label-md text-label-md shadow-sm border border-secondary/20 hover:shadow-md"
            >
              <span className="material-symbols-outlined text-[18px] text-whatsapp-direct">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <section className="relative w-full bg-surface-subtle overflow-hidden py-6 lg:py-8 min-h-[calc(100vh-5rem)] lg:min-h-[calc(100dvh-5rem)] flex items-center">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col items-start justify-center">
                  <h1 className="font-display-xl text-display-xl lg:text-display-xl text-primary-container tracking-tight mb-space-md leading-[1.1]">
                    Perencanaan Pernikahan Impian dengan Sentuhan{" "}
                    <span className="italic font-normal text-secondary">Elegan & Profesional</span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-text-charcoal/80 max-w-xl mb-space-xl leading-relaxed">
                    Lebih dari sekadar Wedding Organizer. Menghubungkan pasangan dengan perencanaan personal,
                    vendor terkurasi, dan pendampingan terstruktur bersama Dedicated Wedding Consultant hingga hari H.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary px-7 py-3.5 rounded-full font-label-lg text-label-lg shadow-sm hover:bg-primary transition-all group"
                    >
                      <span className="material-symbols-outlined text-[20px] text-whatsapp-direct group-hover:scale-110 transition-transform">
                        chat
                      </span>
                      Konsultasi via WhatsApp
                    </a>
                    <a
                      href="#paket-layanan"
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-label-lg text-label-lg text-primary-container bg-surface-default hover:bg-surface-muted shadow-sm transition-all border border-border-refined"
                    >
                      Jelajahi Paket Layanan
                    </a>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-6 lg:mt-8 bg-surface-default/60 rounded-xl p-4 shadow-sm border border-border-refined/50">
                    <div>
                      <div className="font-display-lg text-headline-lg text-primary-container font-bold">500+</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Pernikahan</div>
                    </div>
                    <div>
                      <div className="font-display-lg text-headline-lg text-primary-container font-bold">150+</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Mitra Vendor</div>
                    </div>
                    <div>
                      <div className="font-display-lg text-headline-lg text-primary-container font-bold">50+</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Supercrew</div>
                    </div>
                    <div>
                      <div className="font-display-lg text-headline-lg text-secondary font-bold">100%</div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Fast Response</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="relative w-full max-w-md lg:max-w-none">
                    <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container relative">
                      <Image
                        alt="Konsultasi Perencanaan Pernikahan Bersama Maheswari Enterprise"
                        className="w-full h-full object-cover object-center"
                        src="/assets/portfolio/dian-aldi.jpg"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                        <div className="flex items-center gap-2 mb-1 text-secondary-fixed">
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                          <span className="font-label-sm text-label-sm tracking-widest uppercase">Executive Service</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-primary">Konsultasi 24 Jam & Solutif</h3>
                        <p className="font-body-sm text-body-sm text-surface-container-high/90">
                          Diskusi intensif untuk memetakan budget, konsep, dan rundown acara secara presisi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4 PILLARS */}
          <section id="tentang" className="py-space-3xl bg-surface-default">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-4">
                <div className="max-w-2xl">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                    Kenapa Maheswari
                  </span>
                  <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                    Dedikasi Penuh untuk Hari Bersejarah Anda
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Orkestrasi pesta pernikahan dengan manajemen terpadu, menghilangkan kebingungan dan menghadirkan kepastian di
                  setiap langkah persiapan.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: "design_services",
                    title: "Perencanaan Personal",
                    desc: "Setiap konsep disusun berdasarkan gaya otentik, lokasi impian, skala tamu, dan prioritas finansial setiap pasangan.",
                    label: "01 — Personalisasi",
                  },
                  {
                    icon: "verified_user",
                    title: "Vendor Terkurasi",
                    desc: "Koneksi terpercaya di Majalengka, Cirebon, Kuningan, Indramayu, hingga Bandung dengan standar mutu tinggi dan negosiasi transparan.",
                    label: "02 — Kurasi Selektif",
                  },
                  {
                    icon: "hub",
                    title: "Koordinasi Terintegrasi",
                    desc: "Rundown menit-ke-menit, technical meeting, tata letak flow tamu, dan kepatuhan waktu terorkestrasi dalam satu protokol terpadu.",
                    label: "03 — Satu Komando",
                  },
                  {
                    icon: "support_agent",
                    title: "Pendampingan Responsif",
                    desc: "Wedding Consultant sigap memandu setiap keputusan persiapan, memberi solusi jernih kapan pun calon pengantin menghadapi kebuntuan.",
                    label: "04 — Ketenangan Jiwa",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-surface-subtle p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-transparent hover:border-border-refined"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary-container mb-2">{item.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-6 pt-2 text-secondary font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SUPERCREW */}
          <section id="supercrew" className="py-space-3xl bg-surface-muted">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-space-2xl">
                <div className="lg:col-span-7">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                    Maheswari Supercrew
                  </span>
                  <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                    Wedding Consultant & Komposisi Supercrew
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl">
                    Kalian tidak harus memikirkan seluruh detail teknis sendirian. Satu Wedding Consultant terdedikasi menjadi
                    penghubung utama, diperkuat oleh supercrew berpengalaman di lapangan.
                  </p>
                </div>
                <div className="lg:col-span-5 bg-surface-default p-6 rounded-xl shadow-sm border border-border-refined/60">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-secondary text-[24px]">groups</span>
                    <h4 className="font-headline-sm text-headline-sm text-primary-container">Komposisi Crew Profesional</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">
                      Senior Captain
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">
                      Assistant Bride
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">
                      Assistant Parents
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">
                      Stage & Flow Officer
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-primary-container font-medium">
                      F&B Coordinator
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-muted font-label-sm text-label-sm text-secondary font-semibold">
                      Content Creator (iPhone 17 Pro)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-10 bg-surface-default rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 border border-border-refined/60">
                <div className="lg:col-span-7 h-72 lg:h-auto overflow-hidden relative min-h-[288px]">
                  <Image
                    alt="Technical Meeting Maheswari Supercrew"
                    className="object-cover"
                    src="/assets/keunggulan/technial-meeting.png"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className="lg:col-span-5 p-8 flex flex-col justify-center">
                  <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold tracking-wider">
                    Quality Assurance
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container mt-1 mb-3">
                    Technical Meeting Komprehensif
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                    Sebelum hari H, seluruh vendor (dekor, katering, foto-video, MUA, sound system) dikumpulkan dalam satu meja
                    bersama pengantin dan keluarga untuk simulasi menit ke menit.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary-container font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      Guidebook Fisik & Digital Rundown
                    </div>
                    <div className="flex items-center gap-2 text-primary-container font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      Sistem Komunikasi HT Real-time seluruh kru
                    </div>
                    <div className="flex items-center gap-2 text-primary-container font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                      Protokol Mitigasi Cuaca & Waktu Jam Katering
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {[
                  {
                    initials: "AA",
                    jadwal: "Sen, Rab, Jum",
                    name: "Arki Aji Pangestu, S.T., M.T.",
                    role: "Senior Consultant & MC Pro",
                    spec: "Luxury Grand Ballroom & Upacara Formal",
                    photo: "/assets/consultants/arki.jpg",
                  },
                  {
                    initials: "DH",
                    jadwal: "Sel - Ming",
                    name: "Didit Hardiyanto, S.Pd.",
                    role: "Senior Wedding Consultant",
                    spec: "Intimate & Rustic Garden Concept",
                    photo: "/assets/consultants/didit.jpg",
                  },
                  {
                    initials: "RN",
                    jadwal: "Jum - Sel",
                    name: "Rifa Nurfalah, S.Kom.",
                    role: "Consultant & Coordinator",
                    spec: "Tech-Driven Rundown & Creative Content",
                    photo: "/assets/consultants/rifa.jpg",
                  },
                  {
                    initials: "DW",
                    jadwal: "Sen - Jum",
                    name: "Dedi Wardul Qoryah, S.P.",
                    role: "Production & Vendor Lead",
                    spec: "Tenda Megah & Rigging Production",
                    photo: "/assets/consultants/dedi.jpg",
                  },
                  {
                    initials: "AT",
                    jadwal: "Rab - Sab",
                    name: "Agung Tamrin, S.Ap.",
                    role: "F&B & Protocol Lead",
                    spec: "VIP Protocol & Precision Catering Flow",
                    photo: "/assets/consultants/agung.jpg",
                  },
                ].map((c) => (
                  <div
                    key={c.initials}
                    className="bg-surface-default p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-border-refined/60"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-primary-container flex items-center justify-center mb-4 ring-1 ring-border-refined">
                        <Image
                          alt={c.name}
                          src={c.photo}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="inline-block px-2 py-0.5 rounded bg-surface-muted text-secondary font-label-sm text-label-sm mb-2">
                        Jadwal: {c.jadwal}
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-primary-container font-medium leading-tight">{c.name}</h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">{c.role}</p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-border-refined">
                      <span className="font-body-sm text-body-sm text-on-surface-variant italic">Spesialisasi: {c.spec}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PAKET LAYANAN */}
          <section id="paket-layanan" className="py-space-3xl bg-surface-default">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                  Paket Transparan & Komprehensif
                </span>
                <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                  Pilih Cara Kami Mendampingi Pernikahanmu
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Pilihan fleksibel bagi pasangan yang ingin tim profesional mengoordinasikan seluruh alur acara tanpa celah di
                  hari bahagia.
                </p>
                <div className="inline-flex p-1 bg-surface-muted rounded-xl mt-6 border border-border-refined/60">
                  <button
                    onClick={() => setActiveTab("wo")}
                    className={`px-5 py-2 rounded-lg font-label-md text-label-md transition-all ${
                      activeTab === "wo"
                        ? "bg-primary-container text-on-primary shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    WO Only (Hari H Coordination)
                  </button>
                  <button
                    onClick={() => setActiveTab("allin")}
                    className={`px-5 py-2 rounded-lg font-label-md text-label-md transition-all ${
                      activeTab === "allin"
                        ? "bg-primary-container text-on-primary shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    All In Package (Rumah & Gedung)
                  </button>
                </div>
              </div>

              {activeTab === "wo" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60 hover:shadow-md transition-all">
                    <div>
                      <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                        Tier Coordination
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary-container mt-1">LEGISEU</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                        Pendampingan esensial 4 wedding crew untuk koordinasi vendor dan flow acara.
                      </p>
                      <div className="py-3 border-t border-border-refined mb-4">
                        <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary font-semibold block mb-2">
                          Spesifikasi Utama
                        </span>
                        <ul className="space-y-2 text-body-sm font-body-sm text-text-charcoal">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>4 Wedding Crew
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>4 Wedding
                            Guidebook Eksklusif
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>Technical
                            Meeting Online
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>Akad Nikah Kit
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>HT & Confetti
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20tertarik%20Paket%20LEGISEU"
                      target="_blank"
                      className="w-full text-center py-2.5 rounded bg-surface-default text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined"
                    >
                      Konsultasikan Legiseu
                    </a>
                  </div>

                  <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60 hover:shadow-md transition-all">
                    <div>
                      <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                        Recommended Scale
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary-container mt-1">NISKALA</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                        Koordinasi acara yang lebih luas dengan 6 wedding crew dan technical meeting offline.
                      </p>
                      <div className="py-3 border-t border-border-refined mb-4">
                        <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary font-semibold block mb-2">
                          Spesifikasi Utama
                        </span>
                        <ul className="space-y-2 text-body-sm font-body-sm text-text-charcoal">
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>6 Wedding Crew
                            & 3 Officer
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>6 Guidebook &
                            Rundown PDF
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>Technical
                            Meeting Tatap Muka
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>Dummy Buku
                            Nikah
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>Content Creator
                            iPhone 13 Pro
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20tertarik%20Paket%20NISKALA"
                      target="_blank"
                      className="w-full text-center py-2.5 rounded bg-surface-default text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined"
                    >
                      Konsultasikan Niskala
                    </a>
                  </div>

                  <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60 hover:shadow-md transition-all">
                    <div>
                      <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
                        With Master of Ceremony
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary-container mt-1">ABIMANA</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                        Pendampingan komplit termasuk MC Wedding Professional untuk akad & resepsi.
                      </p>
                      <div className="py-3 border-t border-border-refined mb-4">
                        <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary font-semibold block mb-2">
                          Spesifikasi Utama
                        </span>
                        <ul className="space-y-2 text-body-sm font-body-sm text-text-charcoal">
                          <li className="flex items-center gap-2 font-semibold text-primary-container">
                            <span className="material-symbols-outlined text-[18px] text-secondary">stars</span>MC Wedding Professional
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>6 Wedding Crew
                            stylish uniform
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>Content Creator
                            — iPhone 17
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary-container">done</span>Confetti,
                            Flashmob & HT Full
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20tertarik%20Paket%20ABIMANA"
                      target="_blank"
                      className="w-full text-center py-2.5 rounded bg-surface-default text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined"
                    >
                      Konsultasikan Abimana
                    </a>
                  </div>

                  <div className="bg-primary-container text-on-primary p-6 rounded-xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
                      Flagship
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                        Full Wedding Management
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-primary mt-1">ADILUHUNG</h3>
                      <p className="font-body-sm text-body-sm text-surface-container-high/90 mt-1 mb-4">
                        Protokol eksekutif lengkap dengan MC Profesional dan 8 wedding crew khusus.
                      </p>
                      <div className="py-3 border-t border-white/20 mb-4">
                        <span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary-fixed font-semibold block mb-2">
                          Fitur Eksklusif
                        </span>
                        <ul className="space-y-2 text-body-sm font-body-sm text-surface-container-low">
                          <li className="flex items-center gap-2 text-secondary-fixed font-semibold">
                            <span className="material-symbols-outlined text-[18px]">workspace_premium</span>MC Pro + 8 Supercrew
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-secondary-fixed">done</span>Senior Captain &
                            F&B Coordinator
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-secondary-fixed">done</span>Assistant Parents
                            & VIP Handling
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-secondary-fixed">done</span>Perencanaan
                            Anggaran Sejak Awal
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20tertarik%20Paket%20ADILUHUNG"
                      target="_blank"
                      className="w-full text-center py-2.5 rounded bg-secondary text-white font-label-md text-label-md hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all font-semibold"
                    >
                      Konsultasikan Adiluhung
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60">
                    <div>
                      <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
                        Solusi Rumah Lengkap
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary-container mt-1">Paket Rumah Elegan</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                        Solusi lengkap untuk pesta di kediaman tanpa repot mengurus vendor terpisah.
                      </p>
                      <div className="space-y-3 py-3 border-t border-border-refined font-body-sm text-body-sm">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">chair</span>
                          <span>
                            <strong>Dekorasi Pelaminan 8m:</strong> Sofa, 2 kotak uang, pergola, 7 lokal tenda & 100 kursi cover
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">photo_camera</span>
                          <span>
                            <strong>Foto & Video Sinematik:</strong> 2 Fotografer, 1 Videografer (10 Jam), Album Hardcover
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">styler</span>
                          <span>
                            <strong>MUA & Attire:</strong> 2 Busana Pengantin + Sunda Siger/Melati, Busana Orang Tua & Pagar Ayu
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">groups</span>
                          <span>
                            <strong>WO & MC:</strong> MC Akad-Resepsi, 6 Kru Maheswari, Guidebook & Akad Kit
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20tertarik%20Paket%20All%20In%20Rumah"
                      target="_blank"
                      className="mt-6 w-full text-center py-2.5 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all"
                    >
                      Konsultasi Paket Rumah
                    </a>
                  </div>

                  <div className="bg-surface-subtle p-6 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60">
                    <div>
                      <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
                        Ballroom & Convention
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary-container mt-1">Paket Gedung / Ballroom</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                        Dirancang untuk venue hotel atau gedung serbaguna dengan skala tamu besar.
                      </p>
                      <div className="space-y-3 py-3 border-t border-border-refined font-body-sm text-body-sm">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">apartment</span>
                          <span>
                            <strong>Koordinasi Venue:</strong> Loading in/out, sound system gedung, teknikal panggung & lighting
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">mic</span>
                          <span>
                            <strong>Live Entertainment:</strong> Mahes Music akustik/full band, sound 3000W & saxophone
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">theater_comedy</span>
                          <span>
                            <strong>Upacara Adat Mapag Panganten:</strong> Penari Baksa, sinden live, Lengser & Ambu tradisi Sunda
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">volunteer_activism</span>
                          <span>
                            <strong>Bonus Eksklusif:</strong> Content Creator iPhone 17 Pro, Nail art henna & Balon helium
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20tertarik%20Paket%20Gedung"
                      target="_blank"
                      className="mt-6 w-full text-center py-2.5 rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all"
                    >
                      Konsultasi Paket Gedung
                    </a>
                  </div>

                  <div className="bg-surface-default p-6 rounded-xl shadow-sm border border-border-refined flex flex-col justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                        Layanan Tambahan Opsional
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary-container mt-1">Custom Special Effects</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4">
                        Perkuat momen dramatis resepsi Anda dengan elemen visual berkelas.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm">
                        <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50">
                          <div className="font-semibold text-primary-container">Dry Ice System</div>
                          <div className="text-on-surface-variant text-label-sm">Efek kabut awan entrance</div>
                        </div>
                        <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50">
                          <div className="font-semibold text-primary-container">Moving Beam (4 Unit)</div>
                          <div className="text-on-surface-variant text-label-sm">Pencahayaan dinamis</div>
                        </div>
                        <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50">
                          <div className="font-semibold text-primary-container">Electric Confetti</div>
                          <div className="text-on-surface-variant text-label-sm">Penutup spektakuler</div>
                        </div>
                        <div className="p-2.5 rounded bg-surface-muted border border-border-refined/50">
                          <div className="font-semibold text-primary-container">Violin / Saxophone</div>
                          <div className="text-on-surface-variant text-label-sm">Instrumental penyambutan</div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20ingin%20tanya%20Add-on"
                      target="_blank"
                      className="mt-6 w-full text-center py-2.5 rounded bg-surface-muted text-primary-container font-label-md text-label-md hover:bg-surface-container transition-all border border-border-refined"
                    >
                      Diskusikan Kebutuhan Tambahan
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* LAYANAN TAMBAHAN — scraped from live addons */}
          <section className="py-space-2xl bg-surface-subtle border-y border-border-refined/40">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                  Layanan Tambahan
                </span>
                <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                  Special Effects & Hiburan Opsional
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Tambahkan sentuhan dramatis dari koleksi asli Maheswari — tidak termasuk paket WO Only, tersedia sebagai add-on.
                </p>
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

          {/* GALLERY */}
          <section id="portofolio" className="py-space-3xl bg-surface-subtle">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                    Portofolio Maheswari
                  </span>
                  <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                    Setiap Momen Memiliki Cerita
                  </h2>
                </div>
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant flex-wrap">
                  <span className="px-3 py-1 rounded bg-surface-default shadow-sm font-semibold text-primary-container border border-border-refined/50">
                    Akad Nikah
                  </span>
                  <span className="px-3 py-1 rounded bg-surface-default shadow-sm border border-border-refined/50">Resepsi Megah</span>
                  <span className="px-3 py-1 rounded bg-surface-default shadow-sm border border-border-refined/50">Adat Sunda</span>
                  <span className="px-3 py-1 rounded bg-surface-default shadow-sm border border-border-refined/50">Crew on Duty</span>
                </div>
              </div>
              <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-thin">
                {[
                  {
                    img: "/assets/portfolio/dian-aldi.jpg",
                    loc: "Ballroom Reception • Majalengka",
                    name: "Dian & Aldi",
                    desc: "Orkestrasi 800 tamu dengan prosesi mapag panganten kontemporer yang khidmat.",
                  },
                  {
                    img: "/assets/portfolio/karin-prima.jpg",
                    loc: "Sacred Akad Nikah • Cirebon",
                    name: "Karin & Prima",
                    desc: "Ijab kabul syahdu dengan koordinasi flow keluarga inti yang tertib dan damai.",
                  },
                  {
                    img: "/assets/portfolio/selmi-musa.jpg",
                    loc: "Garden Intimate • Kuningan",
                    name: "Selmi & Musa",
                    desc: "Perayaan intim dengan sentuhan jazz akustik dan tata cahaya sunset hangat.",
                  },
                  {
                    img: "/assets/portfolio/putri-adit.jpg",
                    loc: "Table Architecture • Indramayu",
                    name: "Putri & Adit",
                    desc: "Detailing dekorasi 8 meter dengan harmoni bunga segar dan pencahayaan LED presisi.",
                  },
                  {
                    img: "/assets/portfolio/neni-firman.jpg",
                    loc: "Supercrew On Duty",
                    name: "Neni & Firman",
                    desc: "Kedisiplinan waktu rangkaian kirab pengantin dan live feeding tamu tanpa antrean.",
                  },
                  {
                    img: "/assets/portfolio/viona-syukron.jpg",
                    loc: "Prewedding Editorial",
                    name: "Viona & Syukron",
                    desc: "Sesi foto tematik konsep monokrom editorial sebelum peluncuran undangan digital.",
                  },
                ].map((item) => (
                  <div key={item.name} className="shrink-0 w-[85%] sm:w-[340px] lg:w-[360px] snap-start group relative rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-surface-container">
                    <Image
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
                        {item.loc}
                      </span>
                      <h4 className="font-headline-md text-headline-md text-on-primary mt-1">{item.name}</h4>
                      <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1 line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ALUR BOOKING */}
          <section id="alur-booking" className="py-space-3xl bg-surface-default">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                  Tata Cara Reservasi
                </span>
                <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                  6 Langkah Terarah Menuju Hari Bahagia
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Mulai dari impian awal, kami merangkumnya menjadi langkah nyata yang terjadwal rapi dan transparan.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    num: "01",
                    title: "Konsultasi Awal",
                    desc: "Hubungi concierge via WhatsApp. Sampaikan tanggal, lokasi acara, jumlah undangan, serta konsep yang kalian impikan.",
                  },
                  {
                    num: "02",
                    title: "Pilih Paket Sesuai Kebutuhan",
                    desc: "Pilih antara WO Only (Legiseu, Niskala, Abimana, Adiluhung) atau All In Package sesuai dengan kebutuhan venue kalian.",
                  },
                  {
                    num: "03",
                    title: "Konfirmasi Booking & DP 10%",
                    desc: "Pengisian formulir resmi dan penguncian tanggal acara di kalender Maheswari Enterprise melalui DP ringan 10%.",
                  },
                  {
                    num: "04",
                    title: "Pilih Wedding Consultant",
                    desc: "Kalian akan dipasangkan dengan Wedding Consultant terdedikasi yang akan menjadi pemandu utama penyusunan konsep dan budget.",
                  },
                  {
                    num: "05",
                    title: "Technical Meeting Terpadu",
                    desc: "Pertemuan finalisasi bersama seluruh vendor rekanan, keluarga besar, dan kru teknis guna mengunci rundown menit ke menit.",
                  },
                  {
                    num: "06",
                    title: "Hari H Tanpa Khawatir",
                    desc: "Supercrew Maheswari bertugas mengawal seluruh momen dari subuh hingga tuntas. Pengantin dan keluarga tinggal tersenyum bahagia.",
                  },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="bg-surface-subtle p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-border-refined"
                  >
                    <div className="text-secondary font-display-lg text-headline-md font-bold mb-3">{step.num}</div>
                    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-2">{step.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONI */}
          <section id="testimoni" className="py-space-3xl bg-surface-muted">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                  Cerita Nyata
                </span>
                <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                  Kesan Hangat dari Pengantin Maheswari
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Bagi kami, keberhasilan sebuah pesta pernikahan diukur dari ketenangan hati pengantin dan kebahagiaan seluruh
                  keluarga.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "SELMI & MUSA",
                    loc: "Intimate Garden Wedding • Majalengka",
                    text: "“Terima kasih untuk tim Maheswari Enterprise yang sudah membantu acara kami berjalan dengan sangat rapi. Dari awal konsultasi sampai hari H, semuanya terasa lebih tenang karena tim sangat responsif, detail, dan benar-benar membantu kami di setiap proses.”",
                    photo: "/assets/testimonials/selmi-musa.jpg",
                  },
                  {
                    name: "PUTRI & ADIT",
                    loc: "Grand Ballroom Reception • Cirebon",
                    text: "“Kami merasa sangat terbantu dengan koordinasi vendor dan technical meeting yang disiapkan Maheswari. Banyak hal yang awalnya membuat kami bingung jadi lebih jelas dan terarah. Hasilnya, acara berjalan lancar dan kami bisa menikmati momen tanpa terlalu stres.”",
                    photo: "/assets/testimonials/putri-adit.jpg",
                  },
                  {
                    name: "KARIN & PRIMA",
                    loc: "Traditional Akad & Reception • Kuningan",
                    text: "“Salah satu hal yang paling kami suka adalah cara tim Maheswari mendampingi kami dengan sabar dan terstruktur. Pilihan paketnya fleksibel, koordinasinya bagus, dan pada hari acara semua terasa lebih tertib, nyaman, dan berkesan.”",
                    photo: "/assets/testimonials/karin-prima.jpg",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="bg-surface-default p-8 rounded-xl shadow-sm flex flex-col justify-between border border-border-refined/60"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-muted ring-1 ring-border-refined shrink-0">
                          <Image alt={t.name} src={t.photo} width={40} height={40} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center gap-0.5 text-secondary">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                              star
                            </span>
                          ))}
                        </div>
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

          {/* JARINGAN VENDOR */}
          <section className="py-space-3xl bg-surface-default">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                    Jaringan Mitra & Wilayah
                  </span>
                  <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                    Mitra Terpercaya di Setiap Sudut Jawa Barat
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                    Anda bebas memilih vendor preferensi pribadi atau menggunakan rekanan pilihan kami. Seluruhnya akan kami kelola
                    dalam satu pintu komunikasi yang rapi.
                  </p>
                  <div className="mt-6">
                    <span className="font-label-sm text-label-sm uppercase tracking-wide text-primary-container font-semibold block mb-2">
                      Cakupan Wilayah Layanan:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-surface-muted text-primary-container font-label-md text-label-md border border-border-refined/50">
                        Majalengka
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-surface-muted text-primary-container font-label-md text-label-md border border-border-refined/50">
                        Cirebon Kota & Kab
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-surface-muted text-primary-container font-label-md text-label-md border border-border-refined/50">
                        Kuningan
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-surface-muted text-primary-container font-label-md text-label-md border border-border-refined/50">
                        Indramayu
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-surface-muted text-primary-container font-label-md text-label-md border border-border-refined/50">
                        Bandung Raya
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-surface-muted text-primary-container font-label-md text-label-md border border-border-refined/50">
                        Sumedang & Ciamis
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-surface-subtle shadow-sm border border-border-refined/50">
                      <div className="font-label-md text-label-md font-bold text-primary-container mb-1">Pilihan Venue</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Islamic Center, Fieris Hotel, Metland Smara, Fitra Hotel
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-subtle shadow-sm border border-border-refined/50">
                      <div className="font-label-md text-label-md font-bold text-primary-container mb-1">MUA & Attire</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Adi Rustana, Veny Fadila, Umam Makeup, Caesar Jumantri
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-subtle shadow-sm border border-border-refined/50">
                      <div className="font-label-md text-label-md font-bold text-primary-container mb-1">Dekorasi</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Edelweis Decoration, Honey Decor, Sena Decor, Retno Maulani
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-subtle shadow-sm border border-border-refined/50">
                      <div className="font-label-md text-label-md font-bold text-primary-container mb-1">Dokumentasi</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Lintas Visual, Lumaeterna, Ari Okto Lima Puluh Art, TNS
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-subtle shadow-sm border border-border-refined/50">
                      <div className="font-label-md text-label-md font-bold text-primary-container mb-1">Entertainment</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Mahes Music, Sound 3.000W, Saxophonist & Traditional Mapag
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-subtle shadow-sm border border-border-refined/50">
                      <div className="font-label-md text-label-md font-bold text-primary-container mb-1">Master of Ceremony</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Arki Aji Pangestu, Dymas Chandra, Ridwan One MC, Rudi Erlangga
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-space-3xl bg-surface-subtle">
            <div className="max-w-4xl mx-auto px-gutter-mobile lg:px-gutter">
              <div className="text-center mb-10">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-2">
                  Pusat Informasi
                </span>
                <h2 className="font-display-lg text-display-lg text-primary-container font-medium tracking-tight">
                  Hal yang Sering Ditanyakan
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    q: "Apa perbedaan mendasar WO Only dan All-in Package?",
                    a: "WO Only ditujukan bagi pasangan yang telah menentukan mayoritas vendor utama dan membutuhkan tim profesional untuk menyusun alur rundown, memandu technical meeting, serta mengoordinasikan eksekusi hari H. Sedangkan All-in Package adalah solusi lengkap mencakup dekorasi, MUA, dokumentasi, entertainment, hingga katering yang dirangkum dalam satu kesatuan kontrak dan pengawasan terpadu.",
                  },
                  {
                    q: "Apakah kami diperbolehkan membawa vendor sendiri di luar rekanan?",
                    a: "Tentu saja. Maheswari Enterprise sangat terbuka untuk berkolaborasi dengan vendor mana pun pilihan Anda. Wedding Consultant kami akan langsung berkoordinasi secara profesional dengan vendor pilihan Anda pada saat penyusunan rundown dan technical meeting.",
                  },
                  {
                    q: "Berapa bulan sebelum acara idealnya melakukan booking?",
                    a: "Kami menyarankan 6 hingga 12 bulan sebelum hari pelaksanaan, terutama bagi pasangan yang membidik tanggal cantik atau musim pernikahan (wedding season). Namun demikian, kami juga siap mendampingi persiapan cepat dengan timeline 2-3 bulan jika jadwal kru masih tersedia.",
                  },
                  {
                    q: "Apakah Maheswari menyediakan pendampingan upacara adat?",
                    a: "Ya, kami memiliki divisi khusus tata upacara adat, terutama prosesi adat Sunda Mapag Panganten (Lengkap dengan Penari Baksa, Sinden Kawih, Kendang, Lengser & Ambu) maupun koordinasi siraman dan sungkeman dengan pemandu adat berpengalaman.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-surface-default rounded-xl shadow-sm overflow-hidden border border-border-refined/60">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 lg:p-6 flex items-center justify-between font-headline-sm text-headline-sm text-primary-container focus:outline-none"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <span className={`material-symbols-outlined text-secondary transition-transform shrink-0 ${openFaq === idx ? "rotate-180" : ""}`}>
                        expand_more
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 lg:px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed border-t border-border-refined pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BANNER */}
          <section className="py-space-3xl bg-primary-container text-on-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest mb-4 border border-white/10">
                  Langkah Pertama Menuju Resepsi Berkelas
                </span>
                <h2 className="font-display-xl text-display-xl text-on-primary font-medium tracking-tight mb-4 leading-tight">
                  Sudah Punya Tanggal? Mari Susun Langkah Pertamanya Bersama Kami.
                </h2>
                <p className="font-body-lg text-body-lg text-surface-container-high max-w-xl mx-auto mb-8 leading-relaxed">
                  Ceritakan lokasi, tanggal, dan gambaran acara impian Anda. Tim Wedding Consultant Maheswari siap membantu
                  memetakan solusi paket terbaik untuk Anda dan keluarga.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Maheswari,%20saya%20sudah%20punya%20tanggal%20pernikahan%20dan%20ingin%20konsultasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-whatsapp-direct text-white px-8 py-4 rounded font-label-lg text-label-lg shadow-lg hover:opacity-90 transition-all font-semibold"
                  >
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                    Konsultasi WhatsApp Langsung
                  </a>
                  <a
                    href="#paket-layanan"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded font-label-lg text-label-lg bg-white/10 text-on-primary hover:bg-white/20 transition-all border border-white/20"
                  >
                    Review Pilihan Paket
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-primary-container text-surface-container-low border-t border-white/10 pt-space-3xl pb-space-xl">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl w-fit backdrop-blur-sm border border-white/10">
                <Image
                  alt="Maheswari Enterprise"
                  className="h-9 w-auto object-contain brightness-0 invert"
                  src="/assets/branding/logo-nav.png"
                  width={120}
                  height={58}
                />
                <span className="font-headline-sm text-headline-sm text-on-primary">Maheswari</span>
              </div>
              <p className="font-display-lg text-headline-sm text-secondary-fixed italic font-normal">
                Lebih dari Sekadar Wedding Organizer - Jagonya Wedding
              </p>
              <p className="font-body-sm text-body-sm text-white/60 max-w-sm">
                Menghadirkan orkestrasi perhelatan pernikahan berstandar korporat dengan sentuhan kemewahan personal. Memastikan
                ketenangan, keanggunan, dan kesempurnaan setiap detik perayaan Anda.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h3 className="font-label-lg text-label-lg text-on-primary uppercase tracking-wider text-secondary-fixed">Navigasi Cepat</h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-white/60">
                <li><a className="hover:text-secondary-fixed transition-colors" href="#tentang">Tentang Kami</a></li>
                <li><a className="hover:text-secondary-fixed transition-colors" href="#paket-layanan">Layanan & Paket</a></li>
                <li><a className="hover:text-secondary-fixed transition-colors" href="#supercrew">Supercrew & Konsultan</a></li>
                <li><a className="hover:text-secondary-fixed transition-colors" href="#portofolio">Galeri Portofolio</a></li>
                <li><a className="hover:text-secondary-fixed transition-colors" href="#alur-booking">Alur Booking</a></li>
                <li><a className="hover:text-secondary-fixed transition-colors" href="#faq">Pusat Bantuan (FAQ)</a></li>
              </ul>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h3 className="font-label-lg text-label-lg text-on-primary uppercase tracking-wider text-secondary-fixed">
                Jaringan Vendor Partner
              </h3>
              <p className="font-body-sm text-body-sm text-white/60 mb-1">Kurasi mitra venue, dekorasi, katering, dan dokumentasi prestisius:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Majalengka</span>
                <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Cirebon</span>
                <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Kuningan</span>
                <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Indramayu</span>
                <span className="px-2.5 py-1 rounded bg-tertiary-container border border-white/10 font-label-sm text-label-sm text-surface-container-high">Bandung</span>
              </div>
              <div className="mt-2 p-3 rounded bg-tertiary-container/60 border border-white/10 text-white/60 font-label-sm text-label-sm">
                Tersedia layanan koordinasi lintas wilayah & destination wedding.
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h3 className="font-label-lg text-label-lg text-on-primary uppercase tracking-wider text-secondary-fixed">Executive Office</h3>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-white/60">
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed mt-0.5">location_on</span>
                  <span>Office Gallery Maheswari, Wilayah III Cirebon & Jawa Barat</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">call</span>
                  <span>+62 812-XXXX-XXXX</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">mail</span>
                  <span>concierge@maheswarienterprise.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">schedule</span>
                  <span>Senin - Minggu: 09.00 - 20.00 WIB</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-label-md text-label-md text-white/50 text-center sm:text-left">
              © 2024 Maheswari Enterprise. Seluruh Hak Cipta Dilindungi. Orkestrasi Pernikahan Terpadu & Berkelas.
            </p>
            <div className="flex items-center gap-4 font-label-md text-label-md text-white/50">
              <a className="hover:text-on-primary transition-colors" href="#">Privasi</a>
              <span className="text-white/20">•</span>
              <a className="hover:text-on-primary transition-colors" href="#">Syarat & Ketentuan</a>
              <span className="text-white/20">•</span>
              <a className="hover:text-on-primary transition-colors" href="#">Protokol Layanan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-whatsapp-direct text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-label-md text-label-md"
      >
        <span className="material-symbols-outlined text-[20px]">chat</span>
        <span className="hidden sm:inline">Konsultasi Gratis</span>
      </a>
    </div>
  );
}
