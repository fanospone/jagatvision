import Image from "next/image";

export default function AccessControl() {
  return (
    <section className="bg-[#E6ECF5] py-20 px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Access <br /> Kontrol
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
            Sistem keamanan yang mencegah, membatasi, dan
            memverifikasi pengguna untuk memasuki akses tertentu
            dengan identifikasi yang aman serta autentikasi digital terbaru.
          </p>

          <button className="border border-gray-400 px-6 py-3 text-sm font-medium hover:bg-gray-200 transition">
            Explore More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/access-control.jpg"
            alt="Access Control"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}