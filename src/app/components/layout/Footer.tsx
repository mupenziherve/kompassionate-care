import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#035346] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        
          <div>
            <img
              src="/images/logo2.png"
              alt="Kompassionate Care"
              className="h-50 w-auto"
            />

            <p className="mt-4 text-gray-200">
              Compassionate, professional, and family-centered care in a safe
              and comfortable home environment.
            </p>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <div className="space-y-2">
              <Link href="/">Home</Link>
              <br />
              <Link href="/about">About</Link>
              <br />
              <Link href="/services">Services</Link>
              <br />
              <Link href="/gallery">Gallery</Link>
              <br />
              <Link href="/contact">Contact</Link>
            </div>
          </div>

      
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>

            <div className="space-y-2 text-gray-200">
              <p>24-Hour Care</p>
              <p>Memory Care</p>
              <p>Hospice Support</p>
              <p>Behavioral Health</p>
              <p>Therapy Support</p>
            </div>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>

            <div className="space-y-3 text-gray-200">
              <p>5110 SE Drake Rd</p>
              <p>Hillsboro OR, 97123</p>
              <p>+1 (971) 371-1444</p>
              <p>info@kompassionatecare.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-300">
          © 2026 Kompassionate Care. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
