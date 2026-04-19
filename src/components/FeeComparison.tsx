"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function FeeComparison() {
  const ref = useScrollFade();

  return (
    <section className="py-20 sm:py-28 bg-cloud" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="fade-in text-teal font-bold text-sm tracking-widest mb-3">料金</p>
          <h2 className="fade-in text-3xl sm:text-4xl font-bold text-black mb-3">
            シンプルな料金。<br className="hidden sm:block" />隠れた費用はゼロ。
          </h2>
        </div>

        {/* Impact number */}
        <div className="fade-in bg-teal rounded-2xl p-8 sm:p-10 text-center text-white mb-10">
          <p className="text-sm opacity-80 mb-2">他社15%から切り替えた場合（月50万売上）</p>
          <p className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-3">
            72<span className="text-3xl sm:text-4xl">万円</span>
          </p>
          <p className="text-xl sm:text-2xl font-bold opacity-90">年間おトク</p>
          <p className="text-2xl sm:text-3xl font-bold mt-4 opacity-90">5年間で最大<span className="text-4xl sm:text-5xl">360</span>万円の差額</p>
          <p className="text-sm opacity-70 mt-3 italic">
            ── 田中さんも、15%→8%の切り替えで年間50万円を手元に取り戻しました。
          </p>
        </div>

        <p className="fade-in text-center text-sm sm:text-base text-gray-dark mb-10">
          この差額を実現する、シンプルな料金体系。
        </p>

        {/* Single plan - centered */}
        <div className="fade-in max-w-md mx-auto">
          <div className="bg-white rounded-2xl border-2 border-teal p-8 sm:p-10 text-center relative shadow-xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md">
              ALL INCLUSIVE
            </div>
            <p className="text-sm text-teal font-bold mb-2">スタンダード</p>
            <div className="flex items-end justify-center gap-1 mb-1">
              <span className="text-7xl font-bold text-teal leading-none">8</span>
              <span className="text-3xl font-bold text-teal pb-1">%</span>
            </div>
            <p className="text-xs text-gray-mid mb-6">+ ¥5,000/部屋/月</p>

            <ul className="text-sm text-charcoal text-left space-y-3 mb-6">
              <li className="flex items-start gap-2"><span className="text-teal font-bold text-lg leading-none">✓</span> 全OTA掲載管理・最適化</li>
              <li className="flex items-start gap-2"><span className="text-teal font-bold text-lg leading-none">✓</span> 多言語ゲスト対応（24h）</li>
              <li className="flex items-start gap-2"><span className="text-teal font-bold text-lg leading-none">✓</span> 清掃手配・品質管理</li>
              <li className="flex items-start gap-2"><span className="text-teal font-bold text-lg leading-none">✓</span> 価格の自動最適化</li>
              <li className="flex items-start gap-2"><span className="text-teal font-bold text-lg leading-none">✓</span> オーナーダッシュボード</li>
            </ul>

            <a href="#contact-form" className="block w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent-hover transition-all text-base cta-glow">
              私の物件を無料診断する
            </a>

            <div className="mt-5 pt-5 border-t border-gray-light text-xs text-gray-mid space-y-1.5">
              <p>解約手数料0円（2ヶ月前通知）</p>
              <p>移行コスト 現在無料（先着10オーナー）</p>
              <p className="text-teal font-bold">今後もオプションサービスを順次拡充予定</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
