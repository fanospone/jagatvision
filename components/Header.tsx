"use client";

import Link from "next/link";
import { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="w-full bg-[#E6ECF5] px-16 py-5 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">📹</span>
        <div>
          <h1 className="text-lg font-bold tracking-wide text-black">
            JAGATVISION CCTV
          </h1>
          <p className="text-xs text-gray-500">store.</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex gap-10 text-sm font-medium text-gray-700">

        <Link 
          href="/" 
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Home
        </Link>

        <Link 
          href="/paketcctv" 
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Paket CCTV
        </Link>

        <Link 
          href="/paketakseskontrol" 
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Paket Akses Kontrol
        </Link>

        <Link 
          href="/tentang" 
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Tentang Kami
        </Link>

      </nav>

    </header>
  );
}