export default function WhyChooseUs() {
  const leftItems = [
    {
      title: "Garansi Pemasangan 1 Bulan",
      desc: "Kami memberikan garansi pemasangan selama 1 bulan untuk memastikan sistem berjalan dengan baik."
    },
    {
      title: "Gratis Biaya Pemasangan",
      desc: "Harga paket CCTV sudah termasuk biaya pemasangan dengan teknisi profesional."
    },
    {
      title: "Tim Marketing yang Responsif",
      desc: "Tim kami siap membantu dan memberikan solusi terbaik sesuai kebutuhan Anda."
    },
    {
      title: "Bantuan Teknis",
      desc: "Kami menyediakan layanan bantuan teknis melalui remote atau onsite."
    },
  ];

  const rightItems = [
    {
      title: "Garansi Produk 1 Tahun",
      desc: "Semua produk resmi bergaransi 1 tahun untuk menjamin kualitas dan keamanan investasi Anda."
    },
    {
      title: "Free Maintenance",
      desc: "Kami memberikan layanan maintenance berkala untuk menjaga performa sistem."
    },
    {
      title: "Perbaikan & Pemeliharaan",
      desc: "Kami siap membantu perbaikan dan pemeliharaan jika terjadi kendala."
    },
  ];

  return (
    <section className="bg-[#1E56C5] text-white py-28 px-16 relative overflow-hidden">
      
      {/* TOP TITLE */}
      <div className="max-w-6xl mx-auto mb-20">
        <span className="text-red-400 text-sm">Trust</span>
        <h2 className="text-4xl font-bold mt-3">
          Kenapa Harus Pilih Kami ?
        </h2>
        <p className="text-blue-200 max-w-xl mt-4 text-sm">
          Kami berkomitmen untuk memberikan layanan terbaik kepada pelanggan kami,
          baik sebelum maupun setelah penjualan.
        </p>
      </div>

      {/* CIRCLE ELEMENT */}
      <div className="absolute right-24 top-36 w-56 h-56 border border-white/40 rounded-full flex items-center justify-center text-sm text-white/80">
        Komitmen
      </div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        
        {/* LEFT */}
        <div className="space-y-12">
          {leftItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="space-y-12">
          {rightItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}