import Link from "next/link"
import products from "@/data/products.json"
import { notFound } from "next/navigation"

type ProductsType = typeof products

export default function BrandPage() {
  return (
    <div className="text-gray-500">
      Silakan pilih kategori.
    </div>
  )
}