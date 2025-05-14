// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center shadow-md bg-white">
        <div className="flex items-center gap-2">
          <Image src="/images/nawy-logo.svg" alt="Nawy Logo" width={100} height={100} />
        </div>
        <div className="flex gap-6 text-[#bf9745]">
          <Link href="/">Home</Link>
          <Link href="/sell">Sell</Link>
        </div>
      </nav>
    );
  }
  
