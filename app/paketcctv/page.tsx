"use client"

import Link from "next/link"
import Image from "next/image"
import products from "@/data/products.json"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function PaketCCTV() {

    const brands = Object.keys(products)

    return (
        <>

            {/* HERO */}
            <div className="relative w-full h-[320px] md:h-[734px]">
                <Image
                    src="/banner/paket-cctv-banner.jpg"
                    alt="Paket CCTV"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">
                        PAKET CCTV
                    </h1>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16">

                <Swiper
                    spaceBetween={40}
                    slidesPerView="auto"
                    grabCursor={true}
                    freeMode={true}
                >
                    {brands.map((brand) => (
                        <SwiperSlide key={brand} style={{ width: "auto" }}>
                            <Link
                                href={`/paketcctv/${brand}`}
                                className="block transition hover:scale-110"
                            >
                                <Image
                                    src={(products as any)[brand].logo}
                                    alt={brand}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-[80px] w-auto object-contain"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}