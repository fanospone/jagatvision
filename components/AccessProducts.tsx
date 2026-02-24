import Image from "next/image";

export default function AccessProducts() {
  const products = [
    { name: "MB20 VL", image: "/zk1.png" },
    { name: "MB20 VL", image: "/zk2.png" },
    { name: "MB20 VL", image: "/zk3.png" },
    { name: "MB20 VL", image: "/zk4.png" },
  ];

  return (
    <section className="bg-gray-100 py-24 px-16 text-center">
      <h2 className="text-3xl font-bold tracking-wide mb-3">
        AKSES KONTROL
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-16 text-sm">
        Adalah mekanisme yang digunakan untuk mengatur siapa yang dapat
        mengakses dan menggunakan sumber daya tertentu dalam sistem.
      </p>

      <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className="relative h-48 w-full mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-3">
              Time Attendance and Access Control Terminal
            </p>
            <p className="text-green-600 font-bold text-sm">ZKTeco</p>
          </div>
        ))}
      </div>

      <button className="mt-16 bg-blue-600 text-white px-8 py-3 text-sm rounded hover:bg-blue-700 transition">
        Paket Lainnya
      </button>
    </section>
  );
}