"use client";

import { useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";
import SectionHead from "./switch/deco/SectionHead";

const faqs = [
  {
    q: "本当に手数料8%だけですか？隠れた費用はありませんか？",
    a: "手数料は売上の8%と、月額5,000円/部屋のみです。それ以外の費用は一切かかりません。清掃費はゲスト負担のため、オーナー様の負担には含まれません。",
  },
  {
    q: "途中で解約できますか？",
    a: "はい、2ヶ月前にご連絡いただくだけで解約可能です。サービスに自信があるため解約手数料はかかりません。予約済みのゲスト対応は最後まで責任を持って行います。",
  },
  {
    q: "物件が遠方でも大丈夫ですか？",
    a: "はい、対応可能です。現地パートナーと連携し、清掃・点検・緊急対応まで一貫してカバーします。対応エリアについてはお気軽にご相談ください。",
  },
  {
    q: "既に他社に委託中ですが、切り替えできますか？",
    a: "はい、最短2週間で切り替え可能です。解約手続きはオーナー様にお願いしますが、すでに入っている予約の精算や引き継ぎ対応は弊社がすべて行います。ゲスト対応の空白期間が生まれないよう、途切れなく移行しますのでご安心ください。",
  },
  {
    q: "なぜ8%で実現できるのですか？",
    a: "予約管理やゲスト対応、価格調整などを独自の仕組みで効率化しているためです。大手にありがちな中間マージンも排除し、オーナー様とダイレクトにつながる体制でコストを抑えています。そもそも民泊運用代行業界は利益率が高く設定されすぎている側面があり、私たちはオーナー様にとって本当に適正な料金体系をつくりたいという想いで運営しています。",
  },
  {
    q: "管理物件が少なくても依頼できますか？",
    a: "もちろんです。1物件からお受けしています。物件の規模やタイプを問わず、最適な運営プランをご提案します。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-light">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base sm:text-lg font-bold text-black pr-4 group-hover:text-teal transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-gray-mid shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-base text-gray-dark leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollFade();

  return (
    <section className="py-24 sm:py-32 bg-cloud" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="fade-in mb-14">
          <SectionHead
            enLabel="FAQ"
            jaTitle={<>乗り換え前に気になるポイント</>}
          />
        </div>

        <div className="fade-in bg-white rounded-3xl px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
