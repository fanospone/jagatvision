import Image from "next/image";

export default function UsagePanel() {
  const items = [
    { title: "Rumah", image: "/usage1.jpg" },
    { title: "Pabrik", image: "/usage2.jpg" },
    { title: "Gudang", image: "/usage3.jpg" },
    { title: "Dan Lain lain", image: "/usage4.jpg" },
  ];

  return (
<section className="w-full bg-[#c9d3e3] py-24">

      <div className="max-w-7xl mx-auto px-8 flex gap-16">

        {/* LEFT CONTENT */}
        <div className="w-[30%]">

          <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-6">
            Dimana <br />
            Menggunakan <br />
            Smart CCTV
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed text-sm">
            Pelanggan kami menggunakan produk yang mendukung Smart CCTV
            untuk berbagai aplikasi perumahan dan bisnis. Pelanggan saat ini
            menggunakan teknologi AcuSense untuk melindungi area dalam dan
            luar ruangan di:
          </p>

          <button className="border border-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-800 hover:text-white transition">
            Explore More
          </button>

        </div>

        {/* RIGHT IMAGE PANELS */}
        <div className="flex gap-6 w-[70%]">

          {[
            { id: "01", title: "Rumah", img: "/usage1.jpg" },
            { id: "02", title: "Pabrik", img: "/usage2.jpg" },
            { id: "03", title: "Gudang", img: "/usage3.jpg" },
            { id: "04", title: "Dan Lain lain", img: "/usage4.jpg" },
          ].map((item) => (

            <div
              key={item.id}
              className="relative group w-1/4 h-[500px] overflow-hidden"
            >

              {/* IMAGE */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* TOP GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

              {/* TEXT OVERLAY */}
              <div className="absolute top-0 left-0 w-full bg-[color-mix(in_oklab,_#ffffff78_80%,_transparent)] backdrop-blur-sm p-6 z-10">

                <p className="text-xs tracking-wider mb-2 text-gray-600">
                  {item.id} — Indoor / Outdoor
                </p>

                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
      );
}