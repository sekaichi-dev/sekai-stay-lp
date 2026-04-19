"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const nearBottom = scrollY + window.innerHeight >= document.body.scrollHeight - 200;
      setVisible(scrollY > 600 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-black text-white text-center py-1.5 px-4 text-[11px] font-bold">
        <span className="text-teal-bright">先着10オーナー</span> 移行コスト無料キャンペーン中
      </div>
      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-light px-4 py-3">
        <a
          href="#contact-form"
          className="block w-full text-center bg-accent text-white font-bold py-3.5 rounded-full text-sm hover:bg-accent-hover transition-colors cta-glow"
        >
          私の物件を無料診断する →
        </a>
      </div>
    </div>
  );
}
