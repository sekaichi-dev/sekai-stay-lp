"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[52px]" />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-2.5"
            : "bg-white/80 backdrop-blur-sm py-2.5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/logo-symbol.png"
              alt="SEKAI STAY"
              width={24}
              height={32}
              className="h-6 w-auto object-contain"
            />
            <Image
              src="/images/logo-text.png"
              alt="SEKAI STAY"
              width={100}
              height={13}
              className="h-3 w-auto object-contain"
            />
          </a>
          <a
            href="#contact-form"
            className="bg-accent text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-accent-hover transition-all"
          >
            無料診断
          </a>
        </div>
      </header>
    </>
  );
}
