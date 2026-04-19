"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const testimonials = [
  {
    name: "田中 様",
    age: "56歳",
    type: "戸建て1棟 / 東京都",
    years: "オーナー歴3年",
    impact: "-50万円",
    impactSub: "/年",
    impactLabel: "手数料削減額",
    text: "前の会社は15%。それが当たり前だと思っていたから、8%と聞いて最初は疑った。でも管理画面で全部見える化されてるし、対応も早い。「なんで今まであんなに払ってたんだ」が正直な感想です。",
  },
  {
    name: "鈴木 様",
    age: "42歳",
    type: "マンション2室 / 大阪府",
    years: "オーナー歴1年",
    impact: "稼働率2倍",
    impactSub: "",
    impactLabel: "38%→76%",
    text: "副業で始めたけど、自分で運営する時間がなくて稼働率がボロボロだった。SEKAI STAYに任せてからは予約サイトの掲載が見違えた。写真の順番を変えただけで予約が入り始めたのは衝撃的でした。",
  },
  {
    name: "佐藤 様",
    age: "61歳",
    type: "一棟アパート / 福岡県",
    years: "オーナー歴5年",
    impact: "★4.2→4.9",
    impactSub: "",
    impactLabel: "ゲスト評価",
    text: "前の代行がひどくて、レビューに「清掃が汚い」と書かれたこともあった。切り替えてからはそういったこともなく、レビューが改善して単価も上げられるようになった。妻にも「任せてよかったね」と言われました。",
  },
];

export default function Testimonials() {
  const ref = useScrollFade();

  return (
    <section className="py-20 sm:py-28 bg-cloud" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="fade-in text-teal font-bold text-sm tracking-widest mb-3">オーナー様の声</p>
          <h2 className="fade-in text-3xl sm:text-4xl font-bold text-black">
            切り替えた人の、リアルな結果。
          </h2>
        </div>

        <div className="stagger grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="fade-in bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {/* Impact */}
              <div className="bg-charcoal p-6 text-center">
                <p className="text-4xl sm:text-5xl font-bold text-teal-bright leading-none">
                  {t.impact}<span className="text-xl">{t.impactSub}</span>
                </p>
                <p className="text-xs text-gray-mid font-bold tracking-wider mt-2">{t.impactLabel}</p>
              </div>

              <div className="p-5">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-charcoal leading-relaxed mb-3">「{t.text}」</p>

                <div className="pt-3 border-t border-gray-light">
                  <p className="text-sm font-bold text-black">{t.name} <span className="text-xs text-gray-mid font-normal">({t.age})</span></p>
                  <p className="text-xs text-gray-mid">{t.type} / {t.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
