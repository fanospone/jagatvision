export default function Footer() {
  return (
    <footer className="bg-[#1E56C5] text-white pt-16 pb-10 px-16">
      
      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        
        <div>
          <h3 className="font-bold text-lg mb-6">Contact Us</h3>
          <p className="text-sm mb-2">📧 jagatvisionstore@gmail.com</p>
          <p className="text-sm">📱 080808080808</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">
            Follow Our Social Media
          </h3>
          <div className="flex gap-4 flex-wrap">
            <span className="bg-black px-4 py-2 rounded-full text-sm">Instagram</span>
            <span className="bg-black px-4 py-2 rounded-full text-sm">Youtube</span>
            <span className="bg-black px-4 py-2 rounded-full text-sm">Facebook</span>
            <span className="bg-black px-4 py-2 rounded-full text-sm">LinkedIn</span>
            <span className="bg-black px-4 py-2 rounded-full text-sm">TikTok</span>
          </div>
        </div>
      </div>

      <hr className="border-white/30 mb-6" />

      {/* BOTTOM */}
      <div className="flex justify-between text-sm text-white/80">
        <p>Copyright © 2026 Jagatvision Store</p>
        <div className="flex gap-6">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}