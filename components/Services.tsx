import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Instalasi Kamera Pengawasan",
      image: "/service1.jpg",
      desc :"Layanan ini mencakup perawatan rutin dan perbaikan jika diperlukan untuk memastikan bahwa sistem keamanan berfungsi dengan baik sepanjang waktu.",
    },
    {
      title: "Instalasi Akses Kontrol",
      image: "/service2.jpg",
      desc :"Mencakup pemasangan sistem keamanan pintu dan pengaturan terkait untuk memastikan hanya orang yang berwenang yang dapat masuk ke area tertentu.",
    },
    {
      title: "Instalasi Alarm Keamanan",
      image: "/service3.jpg",
      desc :"Layanan ini mencakup pemasangan sistem alarm keamanan yang terhubung ke sistem pemantauan untuk memberikan peringatan awal jika terjadi insiden keamanan.",
    },
    {
      title: "Maintenance",
      image: "/service4.jpg",
      desc :"Layanan ini mencakup perawatan rutin dan perbaikan jika diperlukan untuk memastikan bahwa sistem keamanan berfungsi dengan baik sepanjang waktu.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">Layanan Kami</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Dengan pengalaman bertahun-tahun dalam industri ini, kami menyediakan
          layanan pemasangan yang profesional dan hasil yang memuaskan untuk menjaga aset Anda.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow  overflow-hidden duration-300 hover:shadow-lg transition"          >
            <div className="relative">
              <div className="relative w-full h-[600px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center font-medium">
                {service.title}
              </div>
          </div>
          <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-start p-4 rounded-xl">
            <p className="text-white text-sm">
              {service.desc}
            </p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}