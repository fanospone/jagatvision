import Image from "next/image";

export default function SmartHome() {
  const products = [
    { name: "C6N 1080P", price: "IDR. 1.065.000", image: "/paketSH1.jpg" },
    { name: "REX 2D", price: "IDR. 1.499.000", image: "/paketSH2.jpg" },
    { name: "2 Channel", price: "IDR. 3.599.000", image: "/paketSH3.jpg" },
    { name: "2 Channel", price: "IDR. 2.899.000", image: "/paketSH4.jpg" },
  ];

  return (
    <section className="bg-gray-100 py-20 px-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Smart Home Security</h2>
      <p className="text-gray-600 mb-10">
        Dengan aplikasi EZVIZ & IMOU, Anda dapat melindungi,
        mengambil gambar, menyimpan, dan berbagi semua yang bernilai bagi Anda.
      </p>

      {/* ICONS */}
      <div className="flex justify-center flex-wrap gap-8 mb-14 text-sm text-gray-600">
        <span>🎥 Tampilan Langsung</span>
        <span>🔔 Notification Alarm</span>
        <span>📱 Pantau via Aplikasi</span>
        <span>☁ Penyimpanan Cloud</span>
        <span>✔ Smart Home</span>
      </div>

      {/* PRODUCTS */}
      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={150}
              className="mx-auto"
            />
            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <p className="mt-3 text-blue-600 font-bold">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-10 border px-6 py-3 hover:bg-gray-200 transition">
        Paket Lainnya
      </button>
    </section>
  );
}