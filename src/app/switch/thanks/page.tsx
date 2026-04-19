import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLead } from "@/lib/leads";

type PageSearchParams = Promise<{ id?: string }>;

export default function ThanksPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  return (
    <>
      <Header />
      <main className="bg-cloud min-h-screen">
        <Suspense fallback={<Loading />}>
          <ThanksContent searchParams={searchParams} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function Loading() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center text-gray-mid">
      読み込み中...
    </div>
  );
}

async function ThanksContent({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const { id } = await searchParams;
  const lead = id ? await getLead(id) : null;

  // 次営業日の18時をレポート送付予定として表示
  const deadline = nextBusinessDayEvening();
  const deadlineLabel = `${deadline.getMonth() + 1}月${deadline.getDate()}日（${
    ["日", "月", "火", "水", "木", "金", "土"][deadline.getDay()]
  }）18:00`;

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
      {/* Hero check */}
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm text-center mb-8">
        <div className="w-16 h-16 bg-teal-tint rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
          診断を受け付けました
        </h1>
        {lead && (
          <p className="text-sm text-gray-dark mb-4">
            {lead.name} 様、ご入力ありがとうございました。
          </p>
        )}

        {/* 期日コミット */}
        <div className="bg-charcoal text-white rounded-xl p-5 mt-6">
          <p className="text-[11px] text-teal-bright tracking-widest font-bold mb-1">
            レポートお届け予定
          </p>
          <p className="text-2xl sm:text-3xl font-bold">{deadlineLabel} まで</p>
          <p className="text-xs text-white/60 mt-2">
            専任担当者が、あなたの物件のデータから詳細レポートを作成します。
          </p>
        </div>
      </div>

      {/* 期待値煽り */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
        <p className="text-xs text-accent font-bold tracking-widest mb-2">
          レポートに含まれる内容
        </p>
        <h2 className="text-lg sm:text-xl font-bold text-black mb-4">
          あなたの物件、いくら損してたか。<br />
          数字で見ると結構ショックです。
        </h2>
        <ul className="space-y-2 text-sm text-gray-dark">
          <li className="flex gap-2">
            <span className="text-teal font-bold">✓</span>
            過去◯年の累計損失額（手数料差分から自動算出）
          </li>
          <li className="flex gap-2">
            <span className="text-teal font-bold">✓</span>
            今後◯年で失うお金の予測
          </li>
          <li className="flex gap-2">
            <span className="text-teal font-bold">✓</span>
            他社 vs SEKAI STAY の月次・5年累計比較
          </li>
          <li className="flex gap-2">
            <span className="text-teal font-bold">✓</span>
            OTA掲載の改善ポイント
          </li>
          <li className="flex gap-2">
            <span className="text-teal font-bold">✓</span>
            72時間限定の特典（初期費用¥0）
          </li>
        </ul>
      </div>

      {/* 読み物への誘導（Phase 2 予定：7つの共通点記事） */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <p className="text-xs text-teal font-bold tracking-widest mb-2">
          レポートが届くまでに
        </p>
        <h3 className="text-lg font-bold text-black mb-3">
          民泊代行で損している人の、共通点
        </h3>
        <p className="text-sm text-gray-dark mb-4">
          レポートをお待ちいただく間に、他のオーナー様が陥りがちなパターンをご覧ください。
          あなたの物件に当てはまるものがあれば、レポートを受け取ったときの納得感が変わります。
        </p>
        <a
          href="/switch#failure"
          className="inline-flex items-center text-sm font-bold text-accent hover:underline"
        >
          記事を読む
          <svg
            className="ml-1 w-4 h-4"
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
      </div>
    </div>
  );
}

function nextBusinessDayEvening(): Date {
  const now = new Date();
  const d = new Date(now);
  d.setDate(d.getDate() + 1);
  while (d.getDay() === 0 || d.getDay() === 6) {
    d.setDate(d.getDate() + 1);
  }
  d.setHours(18, 0, 0, 0);
  return d;
}
