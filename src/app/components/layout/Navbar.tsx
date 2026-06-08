import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">Kompassionate Care</h1>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="bg-[#DD844B] text-white px-5 py-3 rounded-lg">
          Schedule Tour
        </button>
      </div>
    </header>
  );
}
