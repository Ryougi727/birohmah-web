"use client";
import { useState } from "react";

// ============================================================
// TIPE DATA
// ============================================================
type Person = {
  nama: string;
  role: string;
  npm: string;
  fakultas: string;
  prodi: string;
  foto?: string; // nanti isi path foto, misal "/foto/ahmad.jpg"
};

type Departemen = {
  icon: string;
  nama: string;
  deskripsi: string;
  kepala: Person;
  sekdep?: Person;
  sekbir?: Person;
  staff: Person[]; // kosongkan [] untuk Biro
  isBiro?: boolean;
};

// ============================================================
// DATA — GANTI SESUAI DATA ASLI BIROHMAH
// ============================================================
const presidium: Person[] = [
  { nama: "Abdurrahman Aufa", role: "Ketua Umum", npm: "2211011001", fakultas: "FT", prodi: "Teknik Sipil", foto: "/foto pims/rahman.jpg" },
  { nama: "Ghina Shofarina", role: "Wakil Ketua Umum", npm: "2211012002", fakultas: "FK", prodi: "Dokter bedah", foto: "/foto pims/ghina.jpg" },
  { nama: "Nurul Hafiza", role: "Bendahara Umum", npm: "2211013003", fakultas: "FISIP", prodi: "aduh lupa", foto: "/foto pims/nurul.jpg" },
  { nama: "Deka Kusuma Hersa Putra", role: "Sekretaris Jendral", npm: "2315012002", fakultas: "FT", prodi: "Teknik Lingkungan", foto: "/foto pims/deka.jpg" },
];

const biro: Departemen[] = [
  {
    icon: "🗂️",
    nama: "Biro Sekretariat",
    deskripsi: "Mengelola administrasi dan kesekretariatan organisasi",
    isBiro: true,
    kepala: { nama: "Farah Aulia", role: "Kepala Biro Sekretariat", npm: "2211014004", fakultas: "FH", prodi: "Ilmu Hukum" },
    sekbir: { nama: "Nuriffah wullllll", role: "Sekretaris Biro Sekretariat", npm: "2211014005", fakultas: "FH", prodi: "Ilmu Hukum" },
    staff: [],
  },
  {
    icon: "💳",
    nama: "Biro Internal",
    deskripsi: "Mengelola keuangan dan anggaran organisasi",
    isBiro: true,
    kepala: { nama: "M Iqbal Baihaqi", role: "Kepala Biro Internal", npm: "2211015005", fakultas: "FEB", prodi: "Manajemen", foto: "/foto pims/iqbal.jpg" },
    sekbir: { nama: "Kurnia Amalia", role: "Sekretaris Biro Internal", npm: "2211015006", fakultas: "FEB", prodi: "Manajemen", foto: "/foto pims/kurnia.jpg" },
    staff: [],
  },
];

const departemen: Departemen[] = [
  {
    icon: "📚",
    nama: "Kaderisasi",
    deskripsi: "Pembinaan karakter & rekrutmen anggota baru Birohmah",
    kepala: { nama: "M Hanif Abdurrahman", role: "Kepala Dept. Kaderisasi", npm: "2211016006", fakultas: "FKIP", prodi: "Pendidikan Matematika", foto: "/foto pims/hanif.jpg" },
    sekdep: { nama: "Luthfiya Dzakiyah", role: "Sekretaris Dept. Kaderisasi", npm: "2211016007", fakultas: "FKIP", prodi: "Pendidikan Matematika" },
    staff: [
      { nama: "Rina Safitri", role: "Staff", npm: "2221011010", fakultas: "FMIPA", prodi: "Biologi" },
      { nama: "Bagas Wicaksono", role: "Staff", npm: "2221012011", fakultas: "FT", prodi: "Teknik Sipil" },
    ],
  },
  {
    icon: "🕌",
    nama: "Kajian Islam dan Ilmu Keumatan",
    deskripsi: "Menyelenggarakan kajian, seminar, dan syiar dakwah kampus",
    kepala: { nama: "Akram Mardani", role: "Kepala Dept. KIIK", npm: "---", fakultas: "---", prodi: "---", foto: "/foto pims/akram.jpg" },
    sekdep: { nama: "Nur Aida", role: "Sekretaris Dept. KIIK", npm: "2211017008", fakultas: "FK", prodi: "Ilmu Sejarah", foto: "/foto pims/aida.jpg" },
    staff: [
      { nama: "Nama Staff 1", role: "Staff", npm: "---", fakultas: "---", prodi: "---" },
    ],
  },
  {
    icon: "📸",
    nama: "Media dan Branding",
    deskripsi: "Mengelola konten digital, desain, dan dokumentasi kegiatan",
    kepala: { nama: "Adam Khalid", role: "Kepala Dept. Media dan Branding", npm: "---", fakultas: "---", prodi: "---", foto: "/foto pims/adam.jpg" },
    sekdep: { nama: "Nadila Nur Hanifa", role: "Sekretaris Dept. Media dan Branding", npm: "2211017009", fakultas: "FK", prodi: "Ilmu Komunikasi" },
    staff: [],
  },
  {
    icon: "💼",
    nama: "Bisnis dan Mitra",
    deskripsi: "Mengembangkan kemandirian ekonomi dan kemitraan strategis",
    kepala: { nama: "Haris Munandara", role: "Kepala Dept. Bisnis dan Mitra", npm: "---", fakultas: "---", prodi: "---", foto: "/foto pims/haris.jpg" },
    sekdep: { nama: "Khatamul", role: "Sekretaris Dept. Bisnis dan Mitra", npm: "2211017010", fakultas: "FEB", prodi: "Manajemen", foto: "/foto pims/tamul.jpg" },
    staff: [],
  },
  {
    icon: "🏆",
    nama: "Akademik dan Prestasi",
    deskripsi: "Mendorong prestasi akademik & non-akademik anggota",
    kepala: { nama: "M Abdul Hadi A", role: "Kepala Dept. Akademik dan Prestasi", npm: "---", fakultas: "---", prodi: "---", foto: "/foto pims/hadi.jpg" },
    sekdep: { nama: "Fadhilla Aulia Mucharam", role: "Sekretaris Dept. Akademik dan Prestasi", npm: "2211017011", fakultas: "FISIP", prodi: "Psikologi" },
    staff: [],
  },
  {
    icon: "🤝",
    nama: "Hubungan Masyarakat",
    deskripsi: "Menjalin relasi eksternal & kegiatan bakti sosial kemasyarakatan",
    kepala: { nama: "Faisal Abdurrafi", role: "Kepala Dept. Hubungan Masyarakat", npm: "---", fakultas: "---", prodi: "---", foto: "/foto pims/faisall.jpg" },
    sekdep: { nama: "Eva", role: "Sekretaris Dept. Hubungan Masyarakat", npm: "2211017012", fakultas: "FISIP", prodi: "Ilmu Sosial", foto: "/foto pims/eva.jpg" },
    staff: [],
  },
  {
    icon: "📖",
    nama: "Pembinaan, Pengembangan, Potensi Baca Al-Quran dan Seni Islam",
    deskripsi: "Pembinaan tilawah, tahfidz, dan pengembangan seni budaya Islam",
    kepala: { nama: "Syeiikh Yahya", role: "Kepala Dept. P3Q-SI", npm: "---", fakultas: "---", prodi: "---", foto: "/foto pims/yahya.jpg" },
    sekdep: { nama: "Qurrotuain Mufidah", role: "Sekretaris Dept. P3Q-SI", npm: "2211017013", fakultas: "FK", prodi: "Ilmu Sejarah", foto: "/foto pims/ain.jpg" },
    staff: [],
  },
  {
    icon: "🧕",
    nama: "Kemuslimahan",
    deskripsi: "Pembinaan muslimah & penyelenggaraan kegiatan keperempuanan Islam",
    kepala: { nama: "Ana Asma Rita Bakti", role: "Kepala Dept. Kemuslimahan", npm: "2211017007", fakultas: "FK", prodi: "Kedokteran", foto: "/foto pims/ana.jpg" },
    sekdep: { nama: "Euis", role: "Sekretaris Dept. Kemuslimahan", npm: "2211017014", fakultas: "FK", prodi: "Ilmu Sejarah", foto: "/foto pims/euis.jpg" },
    staff: [
      { nama: "Putri Ayu Lestari", role: "Staff", npm: "2221013012", fakultas: "FEB", prodi: "Ekonomi Pembangunan" },
    ],
  },
];

// ============================================================
// HELPER
// ============================================================
function getInisial(nama: string) {
  return nama.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

// ============================================================
// KOMPONEN KARTU ORANG
// ============================================================
function PersonCard({ person, onClick, size = "md" }: { person: Person; onClick: () => void; size?: "sm" | "md" }) {
  const isSmall = size === "sm";
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-slate-200 hover:border-blue-400 hover:-translate-y-1
        hover:shadow-lg transition-all cursor-pointer rounded-2xl text-center w-full
        ${isSmall ? "p-4" : "p-6"}`}
    >
      <div className={`rounded-full bg-gradient-to-br from-blue-100 to-blue-50
        flex items-center justify-center font-bold text-blue-800 mx-auto mb-3 border-2 border-blue-100 overflow-hidden
        ${isSmall ? "w-20 h-20 text-xl" : "w-28 h-28 text-2xl"}`}>
        {person.foto
          ? <img src={person.foto} alt={person.nama} className="w-full h-full object-cover" />
          : getInisial(person.nama)
        }
      </div>
      <p className={`font-semibold text-slate-900 leading-snug mb-1 ${isSmall ? "text-sm" : "text-base"}`}>
        {person.nama}
      </p>
      <p className={`text-blue-500 font-medium leading-tight ${isSmall ? "text-xs" : "text-sm"}`}>
        {person.role}
      </p>
    </div>
  );
}

// ============================================================
// KOMPONEN MODAL
// ============================================================
function Modal({ person, onClose }: { person: Person; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-[#0f2248]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl p-6 w-72 text-center shadow-xl animate-in zoom-in-90 duration-150">
        <button onClick={onClose} className="absolute top-3 right-4 text-slate-400 hover:text-slate-600 text-xl leading-none">✕</button>

        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]
          flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 border-4 border-blue-100">
          {person.foto
            ? <img src={person.foto} alt={person.nama} className="w-full h-full object-cover rounded-full" />
            : getInisial(person.nama)
          }
        </div>

        <h3 className="font-bold text-slate-900 text-base leading-snug mb-1">{person.nama}</h3>
        <p className="text-blue-500 text-xs font-semibold mb-4">{person.role}</p>

        <div className="bg-slate-50 rounded-xl p-3 text-left space-y-2">
          {[
            { label: "NPM", value: person.npm },
            { label: "Fakultas", value: person.fakultas },
            { label: "Prodi", value: person.prodi },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-start border-b border-slate-100 pb-2 last:border-0 last:pb-0">
              <span className="text-slate-400 text-xs">{row.label}</span>
              <span className="text-slate-900 text-xs font-medium text-right max-w-[160px]">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// KOMPONEN SECTION GRUP
// ============================================================
function GroupDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

// ============================================================
// HALAMAN UTAMA
// ============================================================
export default function DivisiPage() {
  const [selected, setSelected] = useState<Person | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Modal */}
      {selected && <Modal person={selected} onClose={() => setSelected(null)} />}

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f2248] to-[#1d4ed8] text-center py-14 px-6">
        <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">Struktur Organisasi</p>
        <h1 className="text-3xl font-extrabold text-white mb-2">Pimpinan & Divisi</h1>
        <p className="text-blue-300 text-sm">Birohmah Unila · Periode 2026/2027</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">

        {/* PRESIDIUM */}
        <GroupDivider label="Presidium" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {presidium.map((p) => (
                <PersonCard key={p.npm} person={p} onClick={() => setSelected(p)} />
            ))}
        </div>

        {/* BIRO */}
        <GroupDivider label="Biro" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {biro.flatMap((b) => [
            b.kepala,
            ...(b.sekbir ? [b.sekbir] : []),
          ]).map((person) => (
            <PersonCard key={person.npm} person={person} onClick={() => setSelected(person)} />
          ))}
        </div>

        {/* DEPARTEMEN */}
        <GroupDivider label="Departemen" />
        <div className="flex flex-col gap-4">
          {departemen.map((dept) => (
            <div key={dept.nama} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              {/* Header Departemen */}
              <div className="flex items-center gap-3 px-5 py-4 bg-slate-50 border-b border-slate-100">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {dept.icon}
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">{dept.nama}</h2>
                  <p className="text-slate-500 text-xs mt-0.5">{dept.deskripsi}</p>
                </div>
              </div>

              <div className="px-5 py-4">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">Pimpinan</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <PersonCard person={dept.kepala} onClick={() => setSelected(dept.kepala)} size="sm" />
                  {dept.sekdep && (
                    <PersonCard person={dept.sekdep} onClick={() => setSelected(dept.sekdep!)} size="sm" />
                  )}
                </div>

                {/* Staff — hanya departemen, bukan biro */}
                {!dept.isBiro && (
                  <>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Anggota Staff
                    </p>
                    {dept.staff.length === 0 ? (
                      <p className="text-xs text-slate-300 italic">Belum ada data staff</p>
                    ) : (
                      <div className="flex flex-col gap-2">
                        {dept.staff.map((s) => (
                          <div
                            key={s.npm}
                            onClick={() => setSelected(s)}
                            className="flex items-center gap-3 px-3 py-2 bg-slate-50
                              hover:bg-blue-50 rounded-xl cursor-pointer transition-colors"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-50
                              flex items-center justify-center text-blue-800 text-xs font-bold flex-shrink-0">
                              {s.foto
                                ? <img src={s.foto} alt={s.nama} className="w-full h-full object-cover rounded-full" />
                                : getInisial(s.nama)
                              }
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-900">{s.nama}</p>
                              <p className="text-[10px] text-slate-400">{s.fakultas} · {s.prodi}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}