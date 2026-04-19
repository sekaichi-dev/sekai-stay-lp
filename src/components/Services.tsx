"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function Services() {
  const ref = useScrollFade();

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="fade-in text-teal font-bold text-sm tracking-widest mb-3">サービス内容</p>
          <h2 className="fade-in text-3xl sm:text-4xl font-bold text-black">
            「安い」だけじゃない。<br className="hidden sm:block" />仕組みが違う。
          </h2>
        </div>

        <div className="space-y-6">
          {/* Row 1: OTA + Pricing */}
          <div className="stagger grid sm:grid-cols-2 gap-6">
            {/* OTA */}
            <div className="fade-in bg-charcoal rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
                </div>
                <span className="text-xs text-teal-bright font-bold tracking-widest">OTA最適化</span>
              </div>
              <h3 className="text-xl font-bold mb-3">プロが作り込む<br />掲載クオリティ</h3>
              <p className="text-sm text-white/60 mb-4">Airbnb・Booking.comなど主要OTAのアルゴリズムを熟知したチームが、タイトル・説明文・写真の順番まで最適化。</p>
              <ul className="text-sm text-white/70 space-y-1.5 mb-4">
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> SEO最適化されたタイトルと説明文</li>
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> ゲスト心理を捉えたコピーライティング</li>
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> 多言語対応（日・英・中・韓）</li>
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> 写真のクオリティ・並び順・枚数の最適化</li>
              </ul>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/10 rounded-lg py-2">
                  <p className="text-lg font-bold text-teal-bright">+42%</p>
                  <p className="text-[10px] text-white/50">クリック率</p>
                </div>
                <div className="bg-white/10 rounded-lg py-2">
                  <p className="text-lg font-bold text-teal-bright">+28%</p>
                  <p className="text-[10px] text-white/50">予約転換率</p>
                </div>
                <div className="bg-white/10 rounded-lg py-2">
                  <p className="text-lg font-bold text-teal-bright">Top3</p>
                  <p className="text-[10px] text-white/50">検索順位</p>
                </div>
              </div>
            </div>

            {/* SEKAI Engine */}
            <div className="fade-in bg-charcoal rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <span className="text-xs text-teal-bright font-bold tracking-widest">価格最適化</span>
              </div>
              <h3 className="text-xl font-bold mb-3">数万件のデータをもとに<br />最適な価格を毎日設定</h3>
              <p className="text-sm text-white/60 mb-4">周辺エリアの競合・季節変動・イベント・曜日別需要をリアルタイムで分析。専任スタッフが最終確認し、収益を最大化する価格を設定します。</p>
              <ul className="text-sm text-white/70 space-y-1.5 mb-4">
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> 数万件の過去宿泊データを学習</li>
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> 競合物件の価格をリアルタイムモニタリング</li>
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> イベント・祝日・天候まで考慮した需要予測</li>
                <li className="flex items-start gap-2"><span className="text-teal-bright">→</span> 稼働率と単価のバランスを最適化</li>
              </ul>
              {/* Mini chart */}
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-[10px] text-white/40 mb-2">価格推移イメージ（30日間）</p>
                <div className="flex items-end gap-[2px] h-12">
                  {[40,55,45,70,85,60,75,90,65,80,95,70,85,60,50,75,88,92,78,85,90,68,72,88,95,82,75,90,85,78].map((h, i) => (
                    <div key={i} className="flex-1 bg-teal/50 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Dashboard */}
          <div className="fade-in bg-cloud rounded-2xl p-6 sm:p-8 grid lg:grid-cols-2 gap-8 items-center border border-gray-light">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-tint rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <span className="text-xs text-teal font-bold tracking-widest">管理画面</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">「今どうなってる？」が<br />いつでもスマホで確認</h3>
              <p className="text-sm text-gray-dark mb-4">月次レポートを待つ必要はありません。専用ダッシュボードで収益・稼働率・ゲスト評価・予約状況をリアルタイムで。</p>
              <ul className="text-sm text-gray-dark space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-teal font-bold">→</span> 収益・稼働率をリアルタイム表示</li>
                <li className="flex items-start gap-2"><span className="text-teal font-bold">→</span> 予約カレンダーと価格推移</li>
                <li className="flex items-start gap-2"><span className="text-teal font-bold">→</span> ゲストレビュー・評価の一覧</li>
              </ul>
            </div>
            {/* Dashboard mockup */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-light">
              <div className="bg-charcoal text-white px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs font-bold">Owner Dashboard</span>
                <span className="text-[10px] text-teal-bright">● LIVE</span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-teal-tint rounded-lg p-3 text-center">
                    <p className="text-lg font-bold text-teal">¥482K</p>
                    <p className="text-[10px] text-gray-mid">今月の収益</p>
                  </div>
                  <div className="bg-gray-pale rounded-lg p-3 text-center">
                    <p className="text-lg font-bold text-charcoal">67%</p>
                    <p className="text-[10px] text-gray-mid">稼働率</p>
                  </div>
                </div>
                <div className="bg-gray-pale rounded-lg p-3 mb-3">
                  <p className="text-[10px] text-gray-dark mb-1.5 font-bold">直近の予約</p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between"><span>John D. (USA)</span><span className="text-teal font-bold">4/5-4/8</span></div>
                    <div className="flex justify-between"><span>Kim S. (KOR)</span><span className="text-teal font-bold">4/10-4/12</span></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-pale rounded p-2"><p className="text-xs font-bold">★4.95</p><p className="text-[8px] text-gray-mid">評価</p></div>
                  <div className="bg-gray-pale rounded p-2"><p className="text-xs font-bold">23件</p><p className="text-[8px] text-gray-mid">レビュー</p></div>
                  <div className="bg-gray-pale rounded p-2"><p className="text-xs font-bold">¥32.4K</p><p className="text-[8px] text-gray-mid">平均単価</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Other services */}
          <div className="stagger grid sm:grid-cols-3 gap-4">
            <div className="fade-in bg-cloud rounded-xl p-6 border border-gray-light hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-tint rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h4 className="text-base font-bold text-black mb-1">24時間ゲスト対応</h4>
              <p className="text-xs text-gray-mid">日・英・中・韓の4か国語で24時間対応。チェックインからトラブルまで全て代行。</p>
            </div>
            <div className="fade-in bg-cloud rounded-xl p-6 border border-gray-light hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-tint rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h4 className="text-base font-bold text-black mb-1">清掃・品質管理</h4>
              <p className="text-xs text-gray-mid">独自チェックリストに基づく清掃・点検。写真付きの完了報告で品質を見える化。</p>
            </div>
            <div className="fade-in bg-cloud rounded-xl p-6 border border-gray-light hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-tint rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h4 className="text-base font-bold text-black mb-1">物件管理サポート</h4>
              <p className="text-xs text-gray-mid">備品補充、設備トラブル、近隣対応まで。物件に関わる雑務を全て引き受けます。</p>
            </div>
          </div>

          {/* Why 8% - integrated */}
          <div className="fade-in bg-charcoal rounded-2xl p-6 sm:p-8 text-center mt-2">
            <p className="text-xs text-gray-mid tracking-widest font-bold mb-2">なぜ8%で実現できるのか</p>
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              独自の運営システムが、<br className="hidden sm:block" />コストと品質を両立する。
            </p>
            <p className="text-sm text-gray-mid max-w-lg mx-auto mb-6">
              人件費ではなく、仕組みでカバーするから手数料を下げられる。
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-teal-bright font-bold mb-1">効率化</p>
                <p className="text-sm text-white/70">独自システムと専任チームの連携で、ムダなコストを徹底的に削減。</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-teal-bright font-bold mb-1">品質維持</p>
                <p className="text-sm text-white/70">仕組み化で人的ミスを排除。コストを下げても品質は上がる。</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-teal-bright font-bold mb-1">直接取引</p>
                <p className="text-sm text-white/70">中間マージンを排除。オーナーとダイレクトにつながるシンプルな体制。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
