"use client";

import { useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";
import SectionHead from "./switch/deco/SectionHead";

const propertyTypes = [
  { label: "戸建て", icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>) },
  { label: "マンション", icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>) },
  { label: "アパート一棟", icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>) },
  { label: "その他", icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>) },
];

export default function ContactForm() {
  const ref = useScrollFade();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [timeline, setTimeline] = useState("");
  const [currentManager, setCurrentManager] = useState("");

  const totalSteps = 3;

  if (submitted) {
    return (
      <section id="contact-form" className="py-24 sm:py-32 bg-cloud" ref={ref}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-sm">
            <div className="w-16 h-16 bg-teal-tint rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">診断を受け付けました</h3>
            <p className="text-sm text-gray-dark mb-6">結果は1営業日以内にメールでお届けします。</p>

            {/* Optional: temperature survey */}
            <div className="bg-cloud rounded-xl p-5 text-left">
              <p className="text-sm font-bold text-charcoal mb-3">よろしければ教えてください（任意）</p>
              <div className="space-y-2 mb-4">
                {[
                  { label: "すぐにでも切り替えたい", value: "urgent" },
                  { label: "1〜2ヶ月以内に検討中", value: "soon" },
                  { label: "まずは情報収集", value: "research" },
                ].map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTimeline(t.value)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all ${
                      timeline === t.value
                        ? "border-teal bg-teal-tint text-teal-deep font-bold"
                        : "border-gray-light hover:border-teal/30 bg-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "他社で代行中", value: "other" },
                  { label: "自主管理中", value: "self" },
                  { label: "これから始める", value: "new" },
                  { label: "休止中", value: "paused" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCurrentManager(opt.value)}
                    className={`px-3 py-2 rounded-lg border text-xs transition-all ${
                      currentManager === opt.value
                        ? "border-teal bg-teal-tint text-teal-deep font-bold"
                        : "border-gray-light hover:border-teal/30 bg-white text-gray-dark"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 sm:py-32 bg-cloud" ref={ref}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="fade-in mb-8">
          <SectionHead
            enLabel="Free Diagnosis"
            jaTitle={<>私の物件の収益を診断する</>}
            subtitle="30秒で完了。"
          />
        </div>

        {/* Urgency */}
        <div className="fade-in bg-charcoal text-white rounded-xl px-5 py-3 mb-8 text-center">
          <p className="text-sm font-bold">
            <span className="text-teal-bright">先着10オーナー</span> 移行コスト無料キャンペーン中
          </p>
          <p className="text-xs text-gray-mid mt-1">予告なく終了する場合があります</p>
        </div>

        {/* Progress bar */}
        <div className="fade-in mb-8">
          <div className="flex items-center justify-between text-xs text-gray-mid mb-2">
            <span className={step >= 1 ? "text-teal font-bold" : ""}>①物件タイプ</span>
            <span className={step >= 2 ? "text-teal font-bold" : ""}>②エリア・部屋数</span>
            <span className={step >= 3 ? "text-teal font-bold" : ""}>③連絡先</span>
          </div>
          <div className="h-2 bg-gray-light rounded-full overflow-hidden">
            <div
              className="h-full bg-teal rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div className="fade-in bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
          {/* Step 1: Property type */}
          {step === 1 && (
            <div>
              <p className="text-base font-bold text-charcoal mb-4">物件のタイプを教えてください</p>
              <div className="grid grid-cols-2 gap-3">
                {propertyTypes.map((type) => (
                  <button
                    key={type.label}
                    onClick={() => { setSelectedType(type.label); setStep(2); }}
                    className={`py-5 px-3 rounded-xl border-2 text-center transition-all hover:border-teal hover:bg-teal-tint/30 ${
                      selectedType === type.label ? "border-teal bg-teal-tint/30" : "border-gray-light bg-white"
                    }`}
                  >
                    <div className="text-teal flex justify-center mb-3">{type.icon}</div>
                    <span className="text-xs font-bold text-charcoal block">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Area & rooms */}
          {step === 2 && (
            <div>
              <p className="text-base font-bold text-charcoal mb-4">物件の情報を教えてください</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1.5">主な物件エリア</label>
                  <select value={area} onChange={(e) => setArea(e.target.value)}
                    className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-teal">
                    <option value="">選択してください</option>
                    <option value="tokyo">東京都</option>
                    <option value="osaka">大阪府</option>
                    <option value="kyoto">京都府</option>
                    <option value="fukuoka">福岡県</option>
                    <option value="hokkaido">北海道</option>
                    <option value="okinawa">沖縄県</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1.5">部屋数</label>
                  <select value={rooms} onChange={(e) => setRooms(e.target.value)}
                    className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-teal">
                    <option value="">選択してください</option>
                    <option value="1">1部屋</option>
                    <option value="2-3">2〜3部屋</option>
                    <option value="4-10">4〜10部屋</option>
                    <option value="11+">11部屋以上</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="px-4 py-3 text-sm text-gray-dark border border-gray-light rounded-lg hover:bg-gray-pale transition-colors">← 戻る</button>
                <button onClick={() => area && rooms && setStep(3)}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${area && rooms ? "bg-teal text-white hover:bg-teal-deep" : "bg-gray-light text-gray-mid cursor-not-allowed"}`}>
                  次へ →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact info */}
          {step === 3 && (
            <div>
              <p className="text-base font-bold text-charcoal mb-1">あと少しで完了です</p>
              <p className="text-sm text-gray-mid mb-4">診断結果をお届けします。</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1.5">お名前</label>
                  <input type="text" placeholder="山田 太郎"
                    className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-teal" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1.5">メールアドレス <span className="text-accent text-xs">*必須</span></label>
                  <input type="email" placeholder="example@email.com"
                    className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-teal" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1.5">電話番号 <span className="text-xs text-gray-mid font-normal">（任意）</span></label>
                  <input type="tel" placeholder="090-0000-0000"
                    className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-teal" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1.5">ご相談内容・気になること <span className="text-xs text-gray-mid font-normal">（任意）</span></label>
                  <textarea placeholder="例：現在の代行会社からの切り替えを検討しています" rows={3}
                    className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-teal resize-none" />
                </div>
              </div>
              <p className="text-xs text-gray-mid mt-2">※ 入力情報は診断結果のご連絡にのみ使用します</p>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="px-4 py-3 text-sm text-gray-dark border border-gray-light rounded-lg hover:bg-gray-pale transition-colors">← 戻る</button>
                <button onClick={() => setSubmitted(true)}
                  className="flex-1 group bg-accent text-white font-bold text-base py-4 rounded-xl hover:bg-accent-hover transition-all cta-glow">
                  私の物件を無料診断する
                  <svg className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
