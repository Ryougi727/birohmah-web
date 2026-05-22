"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/divisi", label: "Divisi" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
  { href: "/prestasi", label: "Prestasi" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1a3a6b] px-8 flex items-center justify-between h-16 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
          <img
            src="/Birohmah.png"
            alt="Logo Birohmah"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-sm tracking-wide leading-tight">
            BIROHMAH
          </span>
          <span className="text-blue-300 text-[10px] leading-tight">
            Bina Rohani Mahasiswa Islam · Unila
          </span>
        </div>
      </Link>

      {/* Menu */}
      <ul className="flex items-center gap-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                pathname === link.href
                  ? "bg-white/20 text-white"
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/daftar"
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-md transition-colors"
          >
            Daftar Anggota
          </Link>
        </li>
      </ul>

      {/* Accent line bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300" />
    </nav>
  );
}