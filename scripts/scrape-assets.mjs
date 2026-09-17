#!/usr/bin/env node
// Scrapes assets from maheswarienterprise.com -> public/assets
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public", "assets");

const ASSETS = [
  // Branding 2024/01
  { url: "https://maheswarienterprise.com/wp-content/uploads/2024/01/logo-nav-300x144.png", dest: "branding/logo-nav.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2024/01/cropped-logo-nav-32x32.png", dest: "branding/favicon-32.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2024/01/cropped-logo-nav-192x192.png", dest: "branding/favicon-192.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2024/01/cropped-logo-nav-180x180.png", dest: "branding/apple-touch-icon.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2024/01/cropped-logo-nav-270x270.png", dest: "branding/mstile-270.png" },

  // Keunggulan 2026/04 (P0)
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/keunggulan-technial-meeting.png", dest: "keunggulan/technial-meeting.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/keunggulan-konsultasi-24jam.png", dest: "keunggulan/konsultasi-24jam.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/keunggulan-promo-vendor.png", dest: "keunggulan/promo-vendor.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/keunggulan-paket-lebih-fleksibel.png", dest: "keunggulan/paket-lebih-fleksibel.png" },

  // Consultants 2026/09 (P0)
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/09/xxarki.jpg", dest: "consultants/arki.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/09/xxDidit.jpg", dest: "consultants/didit.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/09/xxrifa.jpg", dest: "consultants/rifa.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/09/xxdedi.jpg", dest: "consultants/dedi.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/09/xxagung.jpg", dest: "consultants/agung.jpg" },

  // Testimonials 2026/05 (P0)
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/TESTIMONI-SELMI-MUSA.jpg", dest: "testimonials/selmi-musa.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/TESTIMONI-PUTRI-ADIT.jpg", dest: "testimonials/putri-adit.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/TESTIMONI-NENI-FIRMAN.jpg", dest: "testimonials/neni-firman.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/TESTIMONI-KARIN-PRIMA.jpg", dest: "testimonials/karin-prima.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/TESTIMONI-DIAN-ALDI.jpg", dest: "testimonials/dian-aldi.jpg" },

  // Portfolio Wedding 2026/05 (P0)
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/weeding-DIAN-ALDI.jpg", dest: "portfolio/dian-aldi.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/wedding-KARIN-PRIMA.jpg", dest: "portfolio/karin-prima.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/weeding-NENI-FIRMAN.jpg", dest: "portfolio/neni-firman.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/weeding-PUTRI-ADIT.jpg", dest: "portfolio/putri-adit.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/weeding-SELMI-MUSA.jpg", dest: "portfolio/selmi-musa.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/weeding-VIONA-SYUKRON.jpg", dest: "portfolio/viona-syukron.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/05/prewed-DIAN-ALDI.jpg", dest: "portfolio/prewed-dian-aldi.jpg" },

  // Addons 2026/04 (P1)
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/firework.jpg", dest: "addons/firework.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/beam4.jpg", dest: "addons/beam4.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/violin.png", dest: "addons/violin.png" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/balon.jpg", dest: "addons/balon.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/dry-ice.jpg", dest: "addons/dry-ice.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/mahes-music.jpg", dest: "addons/mahes-music.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/upacara-adat.jpg", dest: "addons/upacara-adat.jpg" },
  { url: "https://maheswarienterprise.com/wp-content/uploads/2026/04/mahes-ayu-1.png", dest: "addons/mahes-ayu.png" },
];

async function downloadOne({ url, dest }, retries = 3) {
  const outPath = path.join(PUBLIC, dest);
  await mkdir(path.dirname(outPath), { recursive: true });
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (MaheswariScraper/1.0)" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 500) throw new Error(`Too small: ${buf.length}`);
      // basic magic check
      const isPng = buf[0] === 0x89 && buf[1] === 0x50;
      const isJpg = buf[0] === 0xff && buf[1] === 0xd8;
      if (!isPng && !isJpg) {
        console.warn(`⚠️  ${dest} not PNG/JPG magic, first bytes: ${buf.slice(0,4).toString("hex")}`);
      }
      await writeFile(outPath, buf);
      console.log(`✅ ${dest} ← ${url} (${(buf.length/1024).toFixed(1)} KB)`);
      return { dest, ok: true, bytes: buf.length };
    } catch (e) {
      console.warn(`⏳ ${dest} attempt ${attempt}/${retries} failed: ${e.message}`);
      if (attempt === retries) return { dest, ok: false, error: e.message, url };
      await new Promise(r => setTimeout(r, 500 * attempt));
    }
  }
}

async function main() {
  console.log(`Scraping ${ASSETS.length} assets → ${PUBLIC}\n`);
  const results = [];
  // concurrency 5
  const queue = [...ASSETS];
  const workers = Array.from({ length: 5 }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      results.push(await downloadOne(item));
      await new Promise(r => setTimeout(r, 150));
    }
  });
  await Promise.all(workers);
  const ok = results.filter(r => r.ok).length;
  const fail = results.filter(r => !r.ok);
  console.log(`\nDone: ${ok}/${ASSETS.length} success, ${fail.length} failed`);
  if (fail.length) {
    console.log("Failed:");
    fail.forEach(f => console.log(` - ${f.dest}: ${f.error} (${f.url})`));
    process.exitCode = 1;
  }
  // attribution
  const attribution = `# Scraped Assets Attribution
Source: https://maheswarienterprise.com/
Date: ${new Date().toISOString()}
Count: ${ok}/${ASSETS.length}

All assets belong to Maheswari Enterprise. Mirrored for local use in this repo.
URLs:
${ASSETS.map(a => `- ${a.url} → ${a.dest} ${results.find(r=>r.dest===a.dest)?.ok ? "✅" : "❌"}`).join("\n")}
`;
  await writeFile(path.join(PUBLIC, "ATTRIBUTION.md"), attribution);
  console.log("\nWrote public/assets/ATTRIBUTION.md");
}

main().catch(e => { console.error(e); process.exit(1); });
