"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const steps = [
  {
    step: "STEP 1",
    title: "無料診断を申し込む",
    duration: "30秒",
    description: "フォームから物件情報を入力するだけ。30秒で完了します。",
  },
  {
    step: "STEP 2",
    title: "物件確認・収益シミュレーション",
    duration: "3〜5日",
    description: "物件を確認し、収益予測と最適な運営プランをご提案。納得いただけなければ、ここで終了してOKです。",
  },
  {
    step: "STEP 3",
    title: "契約・運営開始",
    duration: "1〜2週間",
    description: "契約後、OTA掲載の最適化と運営体制の構築を行い、最短2週間で運営をスタートします。",
  },
];

export default function Flow() {
  const ref = useScrollFade();

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-in text-teal font-bold text-sm tracking-widest mb-3">
            ご利用の流れ
          </p>
          <h2 className="fade-in text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
            最短<span className="text-teal text-3xl sm:text-4xl">2週間</span>で切り替え完了。
          </h2>
          <p className="fade-in text-gray-dark text-sm sm:text-base">
            他社からの引き継ぎもお任せ。既存の予約・ゲスト対応も途切れなく移行します。
          </p>
          <p className="fade-in text-xs text-gray-mid mt-2 italic">
            ── 田中さんも、申し込みから2週間で運営がスタートしました。
          </p>
        </div>

        <div className="stagger relative">
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-0.5 bg-gray-light hidden sm:block" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="fade-in flex gap-6 items-start relative">
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] bg-teal-tint rounded-full flex items-center justify-center shrink-0">
                  <span className="text-teal font-bold text-lg">{i + 1}</span>
                </div>
                <div className="pt-1 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-teal tracking-widest">
                      {s.step}
                    </span>
                    <span className="text-xs bg-teal-tint text-teal-deep px-2 py-0.5 rounded-full font-bold">
                      {s.duration}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-dark leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in mt-12 text-center">
          <a
            href="#contact-form"
            className="group inline-flex items-center justify-center bg-accent text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-full hover:bg-accent-hover transition-all cta-glow hover:-translate-y-0.5"
          >
            私の物件を無料診断する
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
