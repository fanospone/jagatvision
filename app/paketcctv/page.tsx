import Link from "next/link"
import products from "@/data/products.json"

export default function PaketCCTV() {

  const brands = Object.keys(products)

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-10">
        Paket CCTV
      </h1>

      <div className="grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">

        {brands.map((brand) => (
          <Link
            key={brand}
            href={`/paketcctv/${brand}`}
            className="bg-gray-100 hover:bg-blue-600 hover:text-white transition p-6 rounded-lg text-center font-semibold capitalize"
          >
            {brand}
          </Link>
        ))}

      </div>

    </div>
  )
}