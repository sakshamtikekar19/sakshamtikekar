import Link from "next/link";
import Image from "next/image";

const BASE_PATH = '/sakshamtikekar';

export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-8 h-8 mb-4">
          <Image 
            src={`${BASE_PATH}/logo.png`}
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6">
            Digital Architect & Producer
          </p>
          
          <div className="flex gap-8 mb-6 justify-center">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">About</Link>
            <Link href="/projects" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Work</Link>
            <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Contact</Link>
          </div>
          
          <p className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} Saksham Tikekar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
