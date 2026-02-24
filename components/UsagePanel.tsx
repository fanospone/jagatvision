import Image from "next/image";

export default function UsagePanel() {
  const items = [
    { title: "Rumah", image: "/usage1.jpg" },
    { title: "Pabrik", image: "/usage2.jpg" },
    { title: "Gudang", image: "/usage3.jpg" },
    { title: "Dan Lain lain", image: "/usage4.jpg" },
  ];

  return (
    <section className="bg-[#E6ECF5] py-20 px-16">
      <div className="grid md:grid-cols-5 gap-8 items-center">
        
        {/* LEFT TEXT */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">
            Dimana Menggunakan Smart CCTV
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Pelanggan kami menggunakan produk yang mendukung Smart CCTV
            untuk berbagai aplikasi perumahan dan bisnis.
          </p>

          <button className="border border-gray-400 px-5 py-2 text-sm hover:bg-gray-200 transition">
            Explore More
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="md:col-span-4 grid md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 bg-black/50 text-white w-full p-4 font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}