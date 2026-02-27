"use client";

import Image from "next/image";

export default function Clients() {
  const logos = [
    "/brands/APIK.png",
    "/brands/aulia-cosmetic.png",
    "/brands/Indomaret.png",
    "/brands/Mall_Cipinang_Indah.png",
    "/brands/TIMEKINGDOM.png",
    "/brands/Watsons.svg",
    "/brands/selis.png",
    "/brands/semen_tiga_roda.jpg",
    "/brands/wang_residence.png",
  ];

  const logos2 = [
    "/brands/citra_baru.png",
    "/brands/Richeese.png", 
    "/brands/AIS.png",
    "/brands/artaboga.png",
    "/brands/BRI.png",
    "/brands/Burger_King.png",
    "/brands/idealand.jpeg",
    "/brands/Kino_Indonesia_logo.svg",
  ];

  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">KLIEN KAMI</h2>
        <p className="text-gray-600 mt-2 text-sm">
          berikut klien-klien kami yang sudah mempercayakan produk yang kami jual
        </p>
      </div>

      {/* ROW 1 - kanan ke kiri */}
      <div className="relative overflow-hidden whitespace-nowrap mb-10">
        <div className="flex animate-scroll-left gap-16">
          {[...logos, ...logos].map((logo, i) => (
            <Image key={i} src={logo} alt="brand" width={0} height={0} sizes="100vw" className="h-16 w-auto object-contain"/>
          ))}
        </div>
      </div>

      {/* ROW 2 - kiri ke kanan */}
      <div className="relative overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll-right gap-16">
          {[...logos2, ...logos2].map((logo, i) => (
            <Image key={i} src={logo} alt="brand" width={0} height={0} sizes="100vw" className="h-16 w-auto object-contain"/>
          ))}
        </div>
      </div>
    </section>
  );
}