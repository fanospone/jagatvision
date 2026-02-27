export default function WhyChooseUs() {
  const leftItems = [
    {
      title: "Garansi Pemasangan 1 Bulan",
      desc: "Dengan adanya garansi pemasangan 1 bulan, Anda dapat yakin bahwa pekerjaan pemasangan akan dilakukan dengan teliti dan profesional. Serta menunjukkan komitmen kami terhadap kepuasan pelanggan."
    },
    {
      title: "Gratis Biaya Pemasangan",
      desc: "Harga paket CCTV yang kami tawarkan sudah termasuk dengan biaya jasa pemasangan dan setting online. Kami menjamin hasil pengerjaan yang rapih, aman, dan sesuai dengan sistem keamanan yang dibutuhkan oleh pelanggan"
    },
    {
      title: "Tim Marketing yang Responsif",
      desc: "Kami menjaga kepercayaan pelanggan dengan pelayanan yang responsif. Dengan memberikan pelayanan yang responsif, pelanggan akan merasa dihargai dan diperhatikan."
    },
    {
      title: "Bantuan Teknis",
      desc: "Tim dukungan kami tersedia untuk memberikan bantuan teknis melalui telepon atau email. Mereka akan membantu Anda menyelesaikan masalah atau pertanyaan yang Anda miliki terkait dengan pengoperasian sistem CCTV."
    },
  ];

  const rightItems = [
    {
      title: "Garansi Produk 1 Tahun",
      desc: "Kami memberikan jaminan bahwa produk yang kami jual adalah original. Garansi yang kami berikan akan memberikan keamanan dan perlindungan kepada konsumen. Dengan garansi ini, konsumen dapat merasa tenang dan yakin bahwa mereka akan mendapatkan dukungan atau penggantian jika terjadi kerusakan atau masalah pada produk selama satu tahun setelah pembelian."
    },
    {
      title: "Free Maintenance",
      desc: "Pemasangan yang telah kami kerjaan tidak luput dari perhatian dan tanggung jawab kami. Kami memberikan 2 kali Free Maintenance diluar dari garansi apabila terjadi masalah atau kendala setelah pemasangan."
    },
    {
      title: "Perbaikan & Pemeliharaan",
      desc: "Tim teknisi kami siap membantu Anda dalam memperbaiki dan merawat sistem CCTV Anda jika terjadi masalah teknis atau kerusakan. Kami akan datang dengan cepat untuk memperbaiki masalah dan memastikan sistem kembali berfungsi dengan baik."
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
          Kami berkomitmen untuk memberikan layanan terbaik kepada pelanggan kami, baik itu sebelum maupun setelah penjualan. 
          Jika Anda memiliki pertanyaan lebih lanjut tentang layanan after sales atau garansi pemasangan kami, jangan ragu untuk menghubungi kami. 
          Kami siap membantu Anda dengan segala kebutuhan keamanan Anda.
        </p>
      </div>

      {/* CIRCLE ELEMENT */}
      <div className="absolute right-24 top-36 w-56 h-56 border border-white/40 rounded-full flex items-center justify-center text-sm text-white/80">
        Komitmen
      </div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-x-20 gap-y-20 max-w-6xl mx-auto">
        
        {/* LEFT COLUMN */}
        <div className="space-y-40">
          {leftItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN (DITURUNKAN) */}
        <div className="space-y-40 md:mt-32">
          {rightItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-3">
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