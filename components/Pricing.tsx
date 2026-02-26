import Image from "next/image";

export default function Pricing() {
  return (
    <section className="w-full bg-[#1f57c3] py-24 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex justify-between items-start mb-20">

          <div>
            <p className="text-blue-200 mb-4">Paket</p>

            <h2 className="text-4xl font-bold text-white leading-snug mb-4">
              Harga Paket <br /> Instalasi CCTV
            </h2>

            <p className="text-blue-100">
              Berikut penawaran harga dengan jasa pasang.
            </p>
          </div>

          {/* Circle */}
          <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-full border border-blue-200 text-blue-100">
            Harga Terbaik
          </div>

        </div>

        {/* Cards */}
        <div className="flex justify-center gap-16 flex-wrap">

          {/* CARD 1 */}
          <div className="group relative bg-white rounded-xl w-[320px] shadow-lg overflow-hidden transition duration-300 hover:scale-105">

            {/* Content */}
            <div className="relative">

              <div className="relative h-[260px] w-full">
                <Image
                  src="/paket1.jpg"
                  alt="EZVIZ"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold mb-4">
                  C6N 1080P
                </h3>

                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                  <li>✔ 1080P 2MP Max Resolution</li>
                  <li>✔ Smart Infrared Night Vision</li>
                  <li>✔ Smart Tracking Motion</li>
                  <li>✔ Two-way Talk</li>
                </ul>

              </div>

              <div className="bg-[#00a8e8] text-white text-center py-3 font-semibold text-lg">
                IDR. 1.065.000
              </div>

            </div>

            {/* FULL CARD OVERLAY */}
            <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-xl">

              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
                Order
              </button>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group relative bg-white rounded-xl w-[320px] shadow-lg overflow-hidden transition duration-300 hover:scale-105">

            {/* Content */}
            <div className="relative">

              <div className="relative h-[260px] w-full">
                <Image
                  src="/paket2.jpg"
                  alt="EZVIZ"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold mb-4">
                  2 Channel
                </h3>

                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                   <li>✔ Jasa Pasang & Konfigurasi</li>
                <li>✔ Garansi 2 Tahun</li>
                <li>✔ DVR 4 Channel</li>
                <li>✔ Harddisk 500GB</li>
                </ul>

              </div>

              <div className="bg-[#e31b23] text-white text-center py-3 font-semibold text-lg">
              IDR. 3.599.000
            </div>

            </div>

            {/* FULL CARD OVERLAY */}
            <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-xl">

              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
                Order
              </button>

            </div>

          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition">
            Paket Lainnya
          </button>
        </div>

      </div>

    </section>
  );
}