"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const images = [
    "/gal1.jpg",
    "/gal2.jpg",
    "/gal3.jpg",
    "/gal4.jpg",
    "/gal5.jpg",
    "/gal6.jpg",
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-[#DCE6F5] py-20 px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Galeri</h2>
        <p className="text-gray-600 mt-2">
          Berikut foto-foto pemasangan, maintenance, dan dengan client kami
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-52 cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelected(img)}
          >
            <Image
              src={img}
              alt="galeri"
              fill
              className="object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* OVERLAY */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[80%] h-[80%]">
            <Image
              src={selected}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}