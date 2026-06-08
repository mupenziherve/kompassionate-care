import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-[#035346]">
            Kompassionate Care
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link href="/" className="hover:text-[#DD844B] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#DD844B] transition">
            About
          </Link>

          <Link href="/services" className="hover:text-[#DD844B] transition">
            Services
          </Link>

          <Link href="/gallery" className="hover:text-[#DD844B] transition">
            Gallery
          </Link>

          <Link href="/contact" className="hover:text-[#DD844B] transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#DD844B] hover:opacity-90 transition text-white px-5 py-3 rounded-xl font-medium">
          Schedule Tour
        </button>
      </div>
    </header>
  );
}
