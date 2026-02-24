import Image from "next/image";

export default function Pricing() {
  return (
    <section className="bg-blue-700 text-white py-20 px-16">
      <div className="mb-12">
        <span className="text-sm text-blue-200">Paket</span>
        <h2 className="text-3xl font-bold mt-2">
          Harga Paket <br /> Instalasi CCTV
        </h2>
        <p className="text-blue-200 mt-3">
          Berikut penawaran harga dengan jasa pasang.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        
        {/* Card 1 */}
        <div className="bg-white text-black rounded-xl p-6 shadow-lg">
          <Image
            src="/paket1.jpg"
            alt="Paket 1"
            width={300}
            height={200}
            className="mx-auto"
          />
          <h3 className="text-center font-bold mt-4">C6N 1080P</h3>
          <p className="text-center text-blue-600 font-semibold mt-4">
            IDR. 1.065.000
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-xl p-6 shadow-lg border-b-4 border-red-500">
          <Image
            src="/paket2.jpg"
            alt="Paket 2"
            width={300}
            height={200}
            className="mx-auto"
          />
          <h3 className="text-center font-bold mt-4">2 Channel Hikvision</h3>
          <p className="text-center text-red-600 font-semibold mt-4">
            IDR. 3.599.000
          </p>
        </div>

      </div>

      <div className="mt-10">
        <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
          Paket Lainnya
        </button>
      </div>
    </section>
  );
}