import products from "@/data/products.json"
import { notFound } from "next/navigation"
import Image from "next/image"

type ProductItem = {
  id: number
  name: string
  price: number
  picture: string
}

type ProductsType = typeof products

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ brand: string; category: string }>
}) {

  const { brand, category } = await params   // 🔥 WAJIB await

  const brandKey = brand.toLowerCase()
  const categoryKey = category.toLowerCase()

  const brandData =
    (products as ProductsType)[
      brandKey as keyof ProductsType
    ]

  if (!brandData) {
    notFound()
  }

  const items = brandData[
    categoryKey as keyof typeof brandData
  ] as ProductItem[] | undefined

  if (!items) {
    notFound()
  }

 return (
  <div className="grid grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
    {items.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
      >
        <div className="relative w-full h-48">
          <Image
            src={item.picture}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold mb-2">
            {item.name}
          </h3>

          <p className="text-blue-600 font-bold">
            Rp {item.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    ))}
  </div>
)
}