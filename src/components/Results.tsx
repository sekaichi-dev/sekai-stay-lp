"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const eased = 1 - Math.pow(1 - step / steps, 3);
            setValue(Math.round(target * eased * 10) / 10);
            if (step >= steps) { setValue(target); clearInterval(interval); }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-teal leading-none">
      {Number.isInteger(value) ? value : value.toFixed(1)}
      <span className="text-lg sm:text-xl ml-0.5">{suffix}</span>
    </div>
  );
}

export default function Results() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-bold text-sm tracking-widest mb-3">管理実績</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            数字が、実力を証明する。
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: 3.6, suffix: "年", label: "スタッフ平均運営歴" },
            { value: 4.9, suffix: "", label: "ゲスト満足度" },
            { value: 62, suffix: "%", label: "平均稼働率" },
            { value: 97, suffix: "%", label: "オーナー継続率" },
          ].map((s, i) => (
            <div key={i} className="bg-cloud rounded-2xl p-5 sm:p-8 text-center">
              <AnimatedNumber target={s.value} suffix={s.suffix} />
              <p className="text-xs sm:text-sm text-gray-dark mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Portfolio */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-gray-mid tracking-widest mb-2">PORTFOLIO</p>
          <h3 className="text-2xl font-bold text-black">弊社管理物件例</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {/* Lake House */}
          <a href="https://www.airbnb.jp/rooms/1064989642336319017" target="_blank" rel="noopener noreferrer"
            className="group rounded-2xl overflow-hidden bg-white border border-gray-light hover:shadow-xl transition-all">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/property-villa.jpg" alt="Lake House Nojiriko" fill
                className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full">高級ヴィラ</span>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-lg text-black group-hover:text-teal transition-colors">Lake House Nojiriko</p>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-bold">4.86</span>
                </div>
              </div>
              <p className="text-xs text-gray-mid mb-3">220㎡ / 1日1組限定</p>
              {/* Before/After */}
              <div className="bg-cloud rounded-lg p-3 grid grid-cols-2 gap-2 text-xs text-center">
                <div>
                  <p className="text-gray-mid">導入前</p>
                  <p className="font-bold text-charcoal">稼働率 32%</p>
                </div>
                <div>
                  <p className="text-teal font-bold">導入後</p>
                  <p className="font-bold text-teal">稼働率 67% <span className="text-[10px]">(+35pt)</span></p>
                </div>
              </div>
            </div>
          </a>

          {/* Lake Side INN */}
          <a href="https://www.airbnb.jp/rooms/1368667345163152634" target="_blank" rel="noopener noreferrer"
            className="group rounded-2xl overflow-hidden bg-white border border-gray-light hover:shadow-xl transition-all">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/property-cabin.jpg" alt="The Lake Side INN" fill
                className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-teal text-white text-[10px] font-bold px-3 py-1 rounded-full">全4棟のトレーラーハウス</span>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-lg text-black group-hover:text-teal transition-colors">The Lake Side INN</p>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-bold">4.97</span>
                </div>
              </div>
              <p className="text-xs text-gray-mid mb-3">全4棟 / ペットOK</p>
              {/* Before/After */}
              <div className="bg-cloud rounded-lg p-3 grid grid-cols-2 gap-2 text-xs text-center">
                <div>
                  <p className="text-gray-mid">導入前</p>
                  <p className="font-bold text-charcoal">レビュー 19件</p>
                </div>
                <div>
                  <p className="text-teal font-bold">導入後</p>
                  <p className="font-bold text-teal">レビュー 61件 <span className="text-[10px]">(3倍↑)</span></p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
