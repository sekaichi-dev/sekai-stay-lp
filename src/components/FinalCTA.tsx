"use client";

import { useScrollFade } from "@/hooks/useScrollFade";
import Image from "next/image";

export default function FinalCTA() {
  const ref = useScrollFade();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="fade-in bg-charcoal rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <Image
            src="/images/logo-symbol.png"
            alt=""
            width={200}
            height={267}
            className="absolute -bottom-8 -right-8 h-40 w-auto opacity-5 invert object-contain"
          />

          <p className="text-xs text-gray-mid tracking-widest font-bold mb-4">
            先着10オーナー 移行コスト無料キャンペーン中
          </p>

          <h2 className="text-2xl font-bold mb-2 leading-tight">
            田中さんは、<br className="sm:hidden" />年間<span className="text-teal-bright">50万円</span>を取り戻しました。
          </h2>
          <p className="text-lg sm:text-xl text-white font-bold mb-2">
            次は、あなたの番です。
          </p>
          <p className="text-base text-gray-mid mb-6">
            夏のハイシーズン前に切り替えて、今年の収益を最大化しませんか？
          </p>

          <a
            href="#contact-form"
            className="group inline-flex items-center justify-center bg-accent text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-full hover:bg-accent-hover transition-all cta-glow cta-breath hover:-translate-y-0.5"
          >
            無料で診断レポートをもらう
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="text-xs text-gray-mid mt-4">
            ※ キャンペーンは予告なく終了する場合があります
          </p>
        </div>
      </div>
    </section>
  );
}
