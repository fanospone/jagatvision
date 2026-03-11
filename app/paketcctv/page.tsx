"use client"

import Link from "next/link"
import Image from "next/image"
import products from "@/data/products.json"

export default function PaketCCTV() {

    const brands = Object.keys(products)

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-10">
                Paket CCTV
            </h1>

            {/* Horizontal Scroll Logo List */}
            <div className="overflow-x-auto">
                <div className="flex gap-12 items-center whitespace-nowrap">

                    {brands.map((brand) => (
                        <Link
                            key={brand}
                            href={`/paketcctv/${brand}`}
                            className="flex-shrink-0 transition hover:scale-110"
                        >
                            <Image
                                src={(products as any)[brand].logo}
                                alt={brand}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-[80px] w-auto object-contain mb-4"
                            />
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}