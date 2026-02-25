import Link from "next/link"
import products from "@/data/products.json"
import { notFound } from "next/navigation"

type ProductsType = typeof products

export default async function BrandLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ brand: string }>
}) {

  const { brand } = await params
  const brandKey = brand.toLowerCase()

  const brandData =
    (products as ProductsType)[
      brandKey as keyof ProductsType
    ]

  if (!brandData) {
    notFound()
  }

  const categories = Object.keys(brandData)

  return (
  <div className="max-w-7xl mx-auto px-6 py-16">

    <h1 className="text-2xl font-bold mb-8 capitalize">
      {brand}
    </h1>

    {/* CATEGORY PANEL */}
    <div className="flex gap-4 flex-wrap mb-12">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/paketcctv/${brandKey}/${category}`}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition capitalize"
        >
          {category.replace("-", " ")}
        </Link>
      ))}
    </div>

    {children}

  </div>
)
}