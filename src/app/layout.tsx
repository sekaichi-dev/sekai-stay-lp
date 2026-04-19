import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEKAI STAY | 手数料8%の民泊運用代行",
  description:
    "独自の仕組みで手数料8%を実現。OTA掲載管理・ゲスト対応・清掃手配・価格調整まで、民泊運営のすべてをお任せください。",
  openGraph: {
    title: "SEKAI STAY | 手数料8%の民泊運用代行",
    description:
      "手数料、払いすぎていませんか。SEKAI STAYなら8%で高品質な運営を実現。",
    type: "website",
    images: ["/images/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
