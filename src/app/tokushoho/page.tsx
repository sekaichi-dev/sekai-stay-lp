import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | SEKAI STAY",
  description:
    "SEKAI STAYの特定商取引法に基づく表記。サービス内容・料金等をご確認いただけます。",
};

export default function TokushohoPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-light">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-symbol.png"
              alt="SEKAI STAY"
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <Image
              src="/images/logo-text.png"
              alt="SEKAI STAY"
              width={100}
              height={13}
              className="h-4 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-teal hover:text-teal-deep transition-colors"
          >
            トップへ戻る
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-cloud py-16 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-black mb-2">
            特定商取引法に基づく表記
          </h1>
          <p className="text-sm text-gray-dark mb-10">
            最終更新日: 2026年4月4日
          </p>

          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full text-sm text-gray-dark">
              <tbody className="divide-y divide-gray-light">
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    販売事業者
                  </th>
                  <td className="px-6 py-4">
                    株式会社セカイチ（SEKAICHI Inc.）
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    法人番号
                  </th>
                  <td className="px-6 py-4">4011001162956</td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    代表者
                  </th>
                  <td className="px-6 py-4">劉 添毅、明神 洸次郎</td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    所在地
                  </th>
                  <td className="px-6 py-4">
                    〒150-0021 東京都渋谷区恵比寿西2丁目14-7
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    連絡先
                  </th>
                  <td className="px-6 py-4">
                    メール:{" "}
                    <a
                      href="mailto:info@sekaichi.org"
                      className="text-teal hover:text-teal-deep transition-colors"
                    >
                      info@sekaichi.org
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    サービス名
                  </th>
                  <td className="px-6 py-4">SEKAI STAY（民泊運用代行サービス）</td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    サービス内容
                  </th>
                  <td className="px-6 py-4 leading-relaxed">
                    民泊・宿泊施設の運用代行サービス。OTA掲載管理、ゲスト対応、清掃手配、価格調整等の運営業務全般を代行します。
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    料金
                  </th>
                  <td className="px-6 py-4 leading-relaxed">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>運用代行手数料: 売上の8%</li>
                      <li>月額管理費: 5,000円（税別）/ 部屋</li>
                    </ul>
                    <p className="mt-2 text-xs text-gray-mid">
                      ※ 詳細はご契約時にお見積りいたします。
                    </p>
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    支払方法
                  </th>
                  <td className="px-6 py-4">銀行振込</td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    支払時期
                  </th>
                  <td className="px-6 py-4">
                    月末締め、翌月末払い
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    サービス提供時期
                  </th>
                  <td className="px-6 py-4">
                    契約締結後、準備期間を経て開始（詳細は個別にご案内）
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    契約期間
                  </th>
                  <td className="px-6 py-4">
                    契約書に定めるとおり（詳細は個別にご案内）
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    解約条件
                  </th>
                  <td className="px-6 py-4 leading-relaxed">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>解約希望日の2ヶ月前までに書面にて通知</li>
                      <li>解約手数料: 0円</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-6 py-4 w-1/3 align-top bg-gray-pale">
                    返金・キャンセル
                  </th>
                  <td className="px-6 py-4 leading-relaxed">
                    サービスの性質上、提供済みのサービスに対する返金は原則として行いません。詳細は契約書に定めるとおりとします。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
