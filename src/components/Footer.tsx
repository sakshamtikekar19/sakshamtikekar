import Link from "next/link";
import NextImage from "next/image";

const BASE_PATH = '/sakshamtikekar';

export default function Footer() {
  return (
    <footer className="py-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black mb-4">
            Digital Architect, Designer & AI Specialist
          </p>
          
          <div className="flex gap-8 mb-4 justify-center">
            <Link key="footer-home" href="/" className="text-[10px] font-black uppercase tracking-widest text-black hover:text-blue-600 transition-colors font-space">Home</Link>
            <Link key="footer-about" href="/about" className="text-[10px] font-black uppercase tracking-widest text-black hover:text-blue-600 transition-colors font-space">About</Link>
            <Link key="footer-projects" href="/projects" className="text-[10px] font-black uppercase tracking-widest text-black hover:text-blue-600 transition-colors font-space">Work</Link>
            <Link key="footer-contact" href="/contact" className="text-[10px] font-black uppercase tracking-widest text-black hover:text-blue-600 transition-colors font-space">Contact</Link>
          </div>
          
          <p className="text-xs text-black/60 font-medium">
            © {new Date().getFullYear()} Saksham Tikekar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
