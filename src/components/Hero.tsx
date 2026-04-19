"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative">
      {/* Campaign strip */}
      <div className="bg-black text-white text-center py-2 px-4">
        <p className="text-[11px] sm:text-xs font-bold">
          <span className="text-accent">先着10オーナー</span> 移行コスト無料キャンペーン中<span className="hidden sm:inline"> ─ 予告なく終了する場合があります</span>
        </p>
      </div>

      {/* Hero */}
      <div className="bg-charcoal text-white relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />

        {/* Background logo - overflow hidden only for this container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/images/sekai-stay-000_03.png"
            alt=""
            className="absolute -bottom-16 -right-12 sm:-bottom-24 sm:-right-16 w-[18rem] sm:w-[26rem] lg:w-[34rem] opacity-[0.12] select-none"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
          <div className={`text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-teal-bright text-xs sm:text-sm font-bold tracking-[0.2em] mb-6">民泊運用代行</p>

            <h1 className="text-[1.75rem] sm:text-4xl lg:text-6xl font-bold leading-[1.2] mb-6">
              手数料、払いすぎて<br className="sm:hidden" />いませんか。
            </h1>

            {/* 8% - the hero number */}
            <div className="flex items-baseline justify-center mb-3">
              <span
                className="text-[12rem] sm:text-[12rem] lg:text-[16rem] font-bold leading-[1.15] select-none pb-4 px-2"
                style={{
                  background: "linear-gradient(135deg, #54bec3 0%, #259da3 20%, #ffffff 40%, #54bec3 60%, #3ab8bd 80%, #ffffff 100%)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  animation: "hero-flow 14s ease-in-out infinite",
                  textShadow: "0 0 60px rgba(37,157,163,0.5), 0 0 120px rgba(37,157,163,0.2)",
                }}
              >8</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal">%</span>
            </div>
            <p className="text-sm text-white/50 mb-4">+ ¥5,000/部屋/月</p>
            <p className="text-base sm:text-lg text-white/60 mb-8 max-w-md mx-auto">
              ハイシーズン前の切り替えで、<br className="hidden sm:block" />今年の収益を変える。
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 text-[11px] sm:text-xs mb-10">
              <span className="bg-white/10 px-4 py-2 rounded-full border border-white/10">✓ 移行コスト0円</span>
              <span className="bg-white/10 px-4 py-2 rounded-full border border-white/10">✓ 解約手数料0円</span>
              <span className="bg-white/10 px-4 py-2 rounded-full border border-white/10">✓ 最短2週間</span>
            </div>

            <a
              href="#simulator"
              className="group inline-flex items-center justify-center bg-accent text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-4 rounded-full hover:bg-accent-hover transition-all cta-glow hover:-translate-y-0.5"
            >
              あなたの損失額を診断する
              <svg className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Simulator */}
      <div id="simulator" className="bg-cloud py-12 sm:py-16">
        <div className="max-w-md mx-auto px-6">
          <SimulatorCard />
        </div>
      </div>
    </section>
  );
}

function SimulatorCard() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50);

  const annualRevenue = monthlyRevenue * 12;
  const fee15 = Math.round(annualRevenue * 0.15);
  const fee8 = Math.round(annualRevenue * 0.08);
  const annualSavings = fee15 - fee8;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-light/50 overflow-hidden">
      <div className="bg-charcoal text-white px-6 py-4">
        <p className="text-[10px] text-teal-bright font-bold tracking-widest">10秒で完了</p>
        <p className="text-base sm:text-lg font-bold mt-0.5">あなたの物件、年間いくら損してる？</p>
      </div>

      <div className="p-6">
        <label className="block text-sm font-bold text-charcoal mb-1">月間売上は？</label>
        <p className="text-[10px] text-gray-mid mb-3">← スライドして金額を変更</p>
        <div className="flex items-center gap-3 mb-2">
          <input
            type="range" min={10} max={400} step={5}
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            className="flex-1 h-2 bg-gray-light rounded-lg appearance-none cursor-pointer accent-teal"
          />
          <span className="text-2xl font-bold text-teal min-w-[5rem] text-right">
            {monthlyRevenue}<span className="text-xs text-gray-mid ml-0.5">万円</span>
          </span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-mid mb-5">
          <span>10万円</span><span>400万円</span>
        </div>

        <div className="bg-gray-pale rounded-xl p-3 mb-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-[9px] text-gray-mid mb-0.5">他社(20%)</p>
              <p className="text-xs font-bold text-gray-dark line-through decoration-red-400">年{Math.round(annualRevenue * 0.2)}万</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-mid mb-0.5">他社(15%)</p>
              <p className="text-xs font-bold text-gray-dark line-through decoration-red-400">年{fee15}万</p>
            </div>
            <div className="bg-teal-tint rounded-lg py-1">
              <p className="text-[9px] text-teal font-bold mb-0.5">SEKAI STAY</p>
              <p className="text-xs font-bold text-teal">年{fee8}万</p>
            </div>
          </div>
        </div>

        <div className="bg-teal rounded-xl p-4 text-center text-white mb-3">
          <p className="text-[10px] opacity-70 mb-0.5">15%から切り替えた場合</p>
          <p className="text-3xl sm:text-4xl font-bold leading-tight">年間 {annualSavings}万円<span className="text-sm">おトク</span></p>
        </div>

        <a href="#contact-form"
          className="group w-full flex items-center justify-center bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent-hover transition-all cta-glow">
          私の物件を無料診断する
          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
