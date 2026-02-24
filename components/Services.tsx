import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Instalasi Kamera Pengawasan",
      image: "/service1.jpg",
    },
    {
      title: "Instalasi Akses Kontrol",
      image: "/service2.jpg",
    },
    {
      title: "Instalasi Alarm Keamanan",
      image: "/service3.jpg",
    },
    {
      title: "Maintenance",
      image: "/service4.jpg",
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
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-60">
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
        ))}
      </div>
    </section>
  );
}