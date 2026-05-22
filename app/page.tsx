import Link from "next/link";

// Data departemen — nanti bisa dipindah ke database
const departemen = [
  { icon: "📚", nama: "Kaderisasi", deskripsi: "Pembinaan & rekrutmen anggota baru" },
  { icon: "🎙️", nama: "Kajian Islam dan Ilmu Keumatan", deskripsi: "Kajian, seminar, dan dakwah kampus" },
  { icon: "📸", nama: "Media dan Brandinng", deskripsi: "Konten digital & dokumentasi" },
  { icon: "💰", nama: "Bisnis dan Mitra", deskripsi: "Kemandirian ekonomi anggota" },
  { icon: "🏆", nama: "Akademik dan Prestasi", deskripsi: "Kegiatan fisik & kesehatan" },
  { icon: "🤝", nama: "Hubungan Masyarakat", deskripsi: "Bakti sosial & kemasyarakatan" },
  { icon: "📖", nama: "Pembinaan, Pengembangan, Potensi Baca Alquran dan Seni Islam", deskripsi: "Bakti sosial & kemasyarakatan" },
  { icon: "🧕", nama: "Kemuslimahan", deskripsi: "Bakti sosial & kemasyarakatan" },
];

const berita = [
  { tag: "Kajian", judul: "Kajian Tafsir Al-Quran Bersama Ustadz Faisal", tanggal: "15 Mei 2025", icon: "🕌" },
  { tag: "Prestasi", judul: "Juara 1 MTQ Tingkat Provinsi Lampung 2025", tanggal: "10 Mei 2025", icon: "🏆" },
  { tag: "Event", judul: "Open Recruitment Anggota Baru Birohmah 2025", tanggal: "1 Mei 2025", icon: "🌙" },
];

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#0f2248] via-[#1a3a6b] to-[#1d4ed8] px-8 py-16 text-center relative overflow-hidden">
        {/* Dekorasi lingkaran */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/[0.03] rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/[0.03] rounded-full" />

        <div className="relative z-10 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 text-blue-300 text-xs px-4 py-1.5 rounded-full border border-white/10 mb-5">
            ☪ UKM Universitas Lampung
          </span>
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-3">
            Bina Rohani <br />
            <span className="text-blue-400">Mahasiswa Islam</span>
          </h1>
          <p className="text-blue-300 text-sm leading-relaxed mb-8">
            Menebar Dakwah, Merajut Ukhuwah.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            <Link
              href="/daftar"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
            >
              Daftar Anggota →
            </Link>
            <Link
              href="/tentang"
              className="border border-white/25 text-white text-sm px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Kenal Birohmah
            </Link>
          </div>

         
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="px-8 py-14 text-center">
        <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">Tentang Kami</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Mengapa Bergabung dengan Birohmah?</h2>
        <div className="w-10 h-0.5 bg-blue-500 rounded mx-auto mb-8" />
        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
          {[
            { icon: "📖", judul: "Kajian Ilmu", deskripsi: "Kajian rutin Al-Quran, hadits, dan ilmu keislaman bersama ustadz berpengalaman." },
            { icon: "🤝", judul: "Ukhuwah Islamiyah", deskripsi: "Mempererat persaudaraan antar mahasiswa muslim di lingkungan kampus." },
            { icon: "🎯", judul: "Pengembangan Diri", deskripsi: "Pelatihan kepemimpinan, public speaking, dan soft skill untuk masa depan." },
            { icon: "🌙", judul: "Dakwah Kampus", deskripsi: "Aktif berdakwah melalui event, media sosial, dan kegiatan sosial." },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.judul}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== departemen ===== */}
      <section className="bg-slate-50 px-8 py-14 text-center">
        <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">Struktur Organisasi</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">departemen Birohmah</h2>
        <div className="w-10 h-0.5 bg-blue-500 rounded mx-auto mb-8" />
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          {departemen.map((d, i) => (
            <div key={i} className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-4 transition-colors">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-xl mx-auto mb-3">
                {d.icon}
              </div>
              <h3 className="font-semibold text-slate-900 text-xs mb-1">{d.nama}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{d.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BERITA ===== */}
      <section className="px-8 py-14 text-center">
        <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">Update Terbaru</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Berita & Kegiatan</h2>
        <div className="w-10 h-0.5 bg-blue-500 rounded mx-auto mb-8" />
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
          {berita.map((b, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden text-left hover:border-blue-300 transition-colors">
              <div className="h-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center text-3xl">
                {b.icon}
              </div>
              <div className="p-3">
                <span className="text-[10px] text-blue-500 font-semibold uppercase tracking-wide">{b.tag}</span>
                <h3 className="text-xs font-semibold text-slate-900 mt-1 mb-2 leading-snug">{b.judul}</h3>
                <p className="text-[10px] text-slate-400">{b.tanggal}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/berita" className="text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors">
          Lihat semua berita →
        </Link>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-br from-[#1a3a6b] to-[#1d4ed8] px-8 py-14 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Bergabunglah Bersama Kami</h2>
        <p className="text-blue-300 text-sm mb-7 max-w-md mx-auto leading-relaxed">
          Jadilah bagian dari keluarga besar Birohmah Unila dan berkontribusi dalam dakwah kampus
        </p>
        <Link
          href="/daftar"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors"
        >
          Daftar Sekarang →
        </Link>
      </section>
    </main>
  );
}