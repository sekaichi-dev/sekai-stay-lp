import { notFound } from "next/navigation";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import {
  calculateReport,
  formatJpy,
  formatManEn,
  getLead,
} from "@/lib/leads";

type PageProps = { params: Promise<{ hash: string }> };

export default function ReportPage({ params }: PageProps) {
  return (
    <>
      <main className="bg-cloud min-h-screen">
        <Suspense fallback={<Loading />}>
          <ReportContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center text-gray-mid">
      レポートを読み込んでいます...
    </div>
  );
}

async function ReportContent({ params }: PageProps) {
  const { hash } = await params;
  const lead = await getLead(hash);
  if (!lead) notFound();

  const report = calculateReport(lead);
  const propertyTitle = lead.propertyName || "ご入力の物件";

  return (
    <>
      {/* Header bar */}
      <div className="bg-charcoal text-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-teal-bright tracking-widest font-bold">
              PERSONALIZED REPORT
            </p>
            <p className="text-sm font-bold">SEKAI STAY 診断レポート</p>
          </div>
          <p className="text-[11px] text-white/50">
            作成日 {new Date(lead.createdAt).toLocaleDateString("ja-JP")}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14 space-y-8">
        {/* タイトル */}
        <div className="text-center">
          <p className="text-xs text-teal font-bold tracking-widest mb-2">
            {lead.name} 様 専用
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold text-black leading-tight">
            {propertyTitle} の<br />
            診断結果
          </h1>
        </div>

        {/* 結論サマリ */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-6 sm:p-10">
          <p className="text-center text-xs text-red-600 font-bold tracking-widest mb-4">
            結論：あなたは損しています
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
              <p className="text-[11px] text-gray-mid mb-1">
                過去 {lead.pastYears} 年の累計損失
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-red-600">
                {report.pastLoss.toLocaleString()}
                <span className="text-base ml-0.5">万円</span>
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm">
              <p className="text-[11px] text-gray-mid mb-1">
                今後 {lead.futureYears} 年で失うお金
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-red-600">
                {report.futureLoss.toLocaleString()}
                <span className="text-base ml-0.5">万円</span>
              </p>
            </div>
          </div>
          <div className="bg-red-600 text-white rounded-xl p-5 text-center">
            <p className="text-[11px] opacity-80 mb-1">合計損失額</p>
            <p className="text-4xl sm:text-5xl font-bold">
              {(report.pastLoss + report.futureLoss).toLocaleString()}
              <span className="text-lg ml-1">万円</span>
            </p>
          </div>
          <p className="text-center text-xs text-gray-dark mt-4">
            ※ 手数料差分 {Math.round(lead.currentFeeRate * 100)}% − 8% を
            月間売上 {lead.monthlyRevenue}万円 に適用した試算
          </p>
        </section>

        {/* 比較表 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
            他社 vs SEKAI STAY｜節約額シミュレーション
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-light">
                <th className="text-left text-xs text-gray-mid font-bold py-3">
                  期間
                </th>
                <th className="text-right text-xs text-gray-mid font-bold py-3">
                  現状
                </th>
                <th className="text-right text-xs text-teal font-bold py-3">
                  SEKAI STAY
                </th>
                <th className="text-right text-xs text-accent font-bold py-3">
                  差額
                </th>
              </tr>
            </thead>
            <tbody>
              <Row
                period="月額"
                current={report.currentMonthlyFee}
                sekai={report.sekaiMonthlyFee}
                diff={report.monthlySaving}
              />
              <Row
                period="年間"
                current={report.currentMonthlyFee * 12}
                sekai={report.sekaiMonthlyFee * 12}
                diff={report.annualSaving}
              />
              <Row
                period="5年累計"
                current={report.currentMonthlyFee * 60}
                sekai={report.sekaiMonthlyFee * 60}
                diff={report.fiveYearSaving}
                highlight
              />
            </tbody>
          </table>
          <p className="text-[11px] text-gray-mid mt-4">
            ※ SEKAI STAY: 手数料8% ＋ ¥5,000/部屋/月（部屋数{lead.rooms}部屋）で計算
          </p>
        </section>

        {/* OTA診断（Phase 1 は汎用チェックリスト） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
            OTA掲載の改善ポイント
          </h2>
          <p className="text-sm text-gray-dark mb-5">
            あなたの物件を SEKAI STAY が担当する場合、最初の1ヶ月で以下を最適化します。
          </p>
          <ul className="space-y-3 text-sm text-charcoal">
            {[
              "タイトルを検索キーワードに最適化（毎月見直し）",
              "写真の順序・サムネイルをA/Bテストで改善",
              "日・英・中・韓の4言語で説明文を書き直し",
              "レビュー返信を24時間以内に自動化",
              "需要連動で価格を毎日自動調整（数万件データで最適化）",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-tint text-teal flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 社長動画プレースホルダ */}
        <section className="bg-charcoal text-white rounded-3xl p-6 sm:p-10">
          <p className="text-xs text-teal-bright tracking-widest font-bold mb-2">
            社長からのメッセージ
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            {lead.name} 様へ、直接お話しさせてください
          </h2>
          <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center border border-white/10">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-8 h-8 text-white/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xs text-white/50">社長動画（準備中）</p>
            </div>
          </div>
        </section>

        {/* 72h特典 */}
        <CountdownBanner deadlineAt={report.deadlineAt} />

        {/* CTA */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
            72時間以内にミーティングを設定すると
          </h2>
          <p className="text-sm text-gray-dark mb-6">
            初期費用¥100,000が無料になり、<br className="sm:hidden" />
            切り替え期間中の並行運用までサポートします。
          </p>
          <a
            href="https://timerex.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-accent-hover transition-all cta-glow"
          >
            ミーティングを予約する
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <p className="text-[11px] text-gray-mid mt-4">
            ※ Phase 2 で TimeRex 埋め込みに差し替え予定
          </p>
        </section>

        <p className="text-xs text-gray-mid text-center pt-4">
          このレポートは {lead.name} 様専用です。URLを他人に共有しないでください。
        </p>
      </div>
    </>
  );
}

function Row({
  period,
  current,
  sekai,
  diff,
  highlight,
}: {
  period: string;
  current: number;
  sekai: number;
  diff: number;
  highlight?: boolean;
}) {
  return (
    <tr
      className={`border-b border-gray-light/60 ${
        highlight ? "bg-teal-tint/40" : ""
      }`}
    >
      <td className="text-sm font-bold text-charcoal py-4">{period}</td>
      <td className="text-right text-sm text-gray-mid line-through py-4">
        ¥{formatJpy(current)}
      </td>
      <td className="text-right text-sm font-bold text-teal py-4">
        ¥{formatJpy(sekai)}
      </td>
      <td
        className={`text-right text-sm font-bold py-4 ${
          highlight ? "text-accent text-lg" : "text-accent"
        }`}
      >
        {formatManEn(diff)}
      </td>
    </tr>
  );
}

function CountdownBanner({ deadlineAt }: { deadlineAt?: string }) {
  if (!deadlineAt) {
    return (
      <section className="bg-accent text-white rounded-3xl p-6 sm:p-8 text-center">
        <p className="text-xs tracking-widest font-bold opacity-80 mb-1">
          LIMITED OFFER
        </p>
        <p className="text-xl sm:text-2xl font-bold">
          72時間限定｜初期費用¥0 特典
        </p>
        <p className="text-xs mt-2 opacity-80">
          レポート公開後、タイマーが始まります
        </p>
      </section>
    );
  }

  return (
    <section className="bg-accent text-white rounded-3xl p-6 sm:p-8 text-center">
      <p className="text-xs tracking-widest font-bold opacity-80 mb-1">
        LIMITED OFFER
      </p>
      <p className="text-xl sm:text-2xl font-bold mb-2">
        72時間限定｜初期費用¥0 特典
      </p>
      <p className="text-xs opacity-80">
        締切: {new Date(deadlineAt).toLocaleString("ja-JP")}
      </p>
    </section>
  );
}
