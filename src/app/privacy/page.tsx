import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | SEKAI STAY",
  description:
    "SEKAI STAYのプライバシーポリシー。個人情報の取扱いについてご説明します。",
};

export default function PrivacyPage() {
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
            プライバシーポリシー
          </h1>
          <p className="text-sm text-gray-dark mb-10">
            最終更新日: 2026年4月4日
          </p>

          <div className="space-y-10 text-sm text-gray-dark leading-relaxed">
            <section>
              <p>
                株式会社セカイチ（以下「当社」）は、SEKAI
                STAY（以下「本サービス」）の提供にあたり、お客様の個人情報の保護を重要な責務と考え、個人情報の保護に関する法律（以下「個人情報保護法」）およびその他関連法令を遵守し、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                1. 取得する個人情報
              </h2>
              <p>当社は、本サービスの提供にあたり、以下の個人情報を取得します。</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>物件情報（所在地、物件種別等）</li>
                <li>お問い合わせ内容</li>
                <li>
                  その他、本サービスの利用に際してお客様が提供する情報
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                2. 利用目的
              </h2>
              <p>
                当社は、取得した個人情報を以下の目的で利用します。
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>本サービスの提供・運営・改善</li>
                <li>お問い合わせへの対応</li>
                <li>本サービスに関するご案内・ご連絡</li>
                <li>契約の締結・履行</li>
                <li>利用状況の分析・統計処理（個人を特定しない形式）</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                3. 第三者提供
              </h2>
              <p>
                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供しません。
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき
                </li>
                <li>
                  公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき
                </li>
                <li>
                  国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                4. 業務委託
              </h2>
              <p>
                当社は、利用目的の達成に必要な範囲内で、個人情報の取扱いを外部に委託する場合があります。その場合、委託先に対して適切な監督を行います。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                5. 安全管理措置
              </h2>
              <p>
                当社は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、組織的、人的、物理的および技術的な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                6. 開示・訂正・削除の請求
              </h2>
              <p>
                お客様は、個人情報保護法に基づき、当社が保有するご自身の個人情報について、開示、訂正、追加、削除、利用停止または第三者提供の停止を請求することができます。ご請求の際は、下記お問い合わせ先までご連絡ください。ご本人確認のうえ、合理的な期間内に対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                7. Cookieの利用
              </h2>
              <p>
                本サービスでは、利便性の向上およびアクセス状況の分析のためにCookieを使用する場合があります。Cookieの使用により個人を特定する情報を収集することはありません。お客様はブラウザの設定によりCookieの受入れを拒否することができますが、一部機能がご利用いただけなくなる場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                8. 本ポリシーの変更
              </h2>
              <p>
                当社は、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-black mb-3">
                9. お問い合わせ先
              </h2>
              <div className="bg-white rounded-lg p-6 mt-2">
                <p className="font-bold text-black mb-2">
                  株式会社セカイチ（SEKAICHI Inc.）
                </p>
                <p>〒150-0021 東京都渋谷区恵比寿西2丁目14-7</p>
                <p>
                  メール:{" "}
                  <a
                    href="mailto:info@sekaichi.org"
                    className="text-teal hover:text-teal-deep transition-colors"
                  >
                    info@sekaichi.org
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
