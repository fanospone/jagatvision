"use client"

import { useState } from "react"
import Image from "next/image"
import accesscontrol from "@/data/accesscontrol.json"

export default function PaketAksesKontrol() {

  const brands = Object.keys(accesscontrol)

  const [activeBrand, setActiveBrand] = useState(brands[0])

  const brandData = (accesscontrol as any)[activeBrand]

  return (
    <>
      {/* HERO */}
      <div className="relative w-full h-[300px] md:h-[380px]">
        <Image
          src="/images/banner/akses-kontrol-banner.jpg"
          alt="Akses Kontrol"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Paket Akses Kontrol
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* BRAND LOGO LIST */}
        <div className="flex gap-8 items-center mb-14">

          {brands.map((brand) => {

            const isActive = brand === activeBrand

            return (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-6 py-3 rounded-md transition 
                ${isActive ? "bg-blue-600" : "bg-gray-100 hover:bg-gray-200"}`}
              >

                <Image
                  src={(accesscontrol as any)[brand].logo}
                  alt={brand}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[32px] w-auto object-contain"
                />

              </button>
            )
          })}

        </div>

        {/* TITLE */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold">
            Harga Paket Instalasi Akses Kontrol {activeBrand.toUpperCase()}
          </h2>

          <p className="text-gray-600 mt-2">
            Berikut penawaran harga unit only.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {brandData.products.map((product: any) => (

            <div key={product.id} className="group">

              <div className="bg-gray-100 rounded-lg p-6 mb-4">

                <div className="relative h-[200px] w-full">

                  <Image
                    src={product.picture}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />

                </div>

              </div>

              <h3 className="font-semibold mb-1">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {product.desc}
              </p>

              <p className="font-bold mb-3">
                Rp. {product.price.toLocaleString("id-ID")}
              </p>

              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
                Lihat Detail
              </button>

            </div>

          ))}

        </div>

      </div>
    </>
  )
}