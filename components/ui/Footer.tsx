import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2248] text-slate-400 text-sm px-8 pt-10 pb-5">
      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <p className="text-white font-bold text-base mb-1">BIROHMAH UNILA</p>
          <p className="text-blue-400 text-xs mb-3">Bina Rohani Mahasiswa Islam</p>
          <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
            Organisasi kemahasiswaan Islam di Universitas Lampung yang berfokus
            pada dakwah dan pembinaan karakter.
          </p>
        </div>

        {/* Menu */}
        <div>
          <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">Menu</p>
          <ul className="flex flex-col gap-2">
            {["Beranda", "Divisi", "Berita", "Galeri", "Prestasi", "Daftar Anggota"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-xs text-slate-500 hover:text-blue-300 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">Kontak</p>
          <ul className="flex flex-col gap-2 text-xs text-slate-500">
            <li>📍 Universitas Lampung</li>
            <li>📸 @birohmah_unila</li>
            <li>📧 birohmah@unila.ac.id</li>
          </ul>
        </div>
      </div>

      <hr className="border-[#1e3054] mb-4" />
      <div className="flex justify-between text-xs text-slate-600">
        <span>© 2025 Birohmah Unila · All rights reserved</span>
        <span>Made with ❤️ untuk dakwah</span>
      </div>
    </footer>
  );
}