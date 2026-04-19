import type { Lead } from "./leads";

/**
 * Phase 1 ではメール基盤未定のため、console にログするのみ。
 * 実装時は Resend / SendGrid / HubSpot 等を lib/email.ts にラップして差し替える。
 *
 * 呼び出し例：
 *   await sendThanksMail(lead);        // フォーム送信直後
 *   await sendReportReadyMail(lead);   // /admin/reports で公開ボタン押下時
 */

function stub(subject: string, lead: Lead, body: string) {
  console.log("[email:stub]", {
    to: lead.email,
    subject,
    preview: body.slice(0, 120),
  });
}

export async function sendThanksMail(lead: Lead) {
  const body = `
${lead.name} 様

この度は SEKAI STAY の診断フォームにご入力いただき、ありがとうございます。
担当者が次営業日中にパーソナライズ診断レポートをお送りします。

SEKAI STAY
`.trim();
  stub("【SEKAI STAY】診断レポート制作開始のお知らせ", lead, body);
}

export async function sendReportReadyMail(lead: Lead) {
  const body = `
${lead.name} 様

お待たせしました。${lead.name} 様専用の診断レポートが完成しました。
下記のURLからご覧ください（72時間限定特典あり）。

SEKAI STAY
`.trim();
  stub("【◯◯様専用】診断レポートが完成しました", lead, body);
}
