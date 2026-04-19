"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function PainPoints() {
  const ref = useScrollFade();

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="fade-in text-center mb-10">
          <p className="text-teal font-bold text-lg tracking-wide mb-2">
            Voice of Owner
          </p>
          <h2 className="text-2xl font-bold text-black leading-tight">
            「<span className="text-teal">15%</span>払ってるのに、<br />この対応？」
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-teal rounded-full" />
        </div>

        {/* Short story */}
        <div className="fade-in bg-charcoal text-white rounded-3xl p-6 sm:p-8 mb-10">
          <p className="text-base leading-relaxed">
            田中さん（56歳・仮名）。相続した物件を<span className="text-teal-bright font-bold">手数料15%</span>で代行会社に委託。
            年間売上720万円のうち<span className="text-teal-bright font-bold text-xl">108万円</span>が手数料で消えていた。
            なのに月次レポートは来ない。清掃品質も見えない。
            <span className="block mt-3 text-xl font-bold">「年間<span className="text-xl">100万円以上</span>払って、この対応か──」</span>
          </p>
        </div>

        {/* Pain cards */}
        <div className="stagger grid sm:grid-cols-2 gap-4">
          {[
            { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: "手数料が重い", desc: "15%で利益が薄い" },
            { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>), title: "状況が見えない", desc: "レポートが来ない" },
            { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: "連絡が遅い", desc: "問い合わせに数日" },
            { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>), title: "品質が不透明", desc: "ユーザー満足度が視覚化されていない" },
          ].map((p, i) => (
            <div key={i} className="fade-in bg-cloud rounded-3xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="text-teal shrink-0">{p.icon}</div>
              <div>
                <p className="text-base font-bold text-black">{p.title}</p>
                <p className="text-sm text-gray-mid">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
