import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

// ---------- types ----------

export type Lead = {
  hash: string;
  createdAt: string; // ISO
  publishedAt?: string; // ISO（レポート公開時刻 = 72hカウントダウンの起点）

  // contact
  name: string;
  email: string;
  phone?: string;

  // property
  propertyName?: string;
  propertyType: string;
  area: string;
  rooms: number;

  // current state
  currentManager: string;
  currentFeeRate: number; // e.g. 0.20
  monthlyRevenue: number; // 万円
  pastYears: number;
  futureYears: number;
  otaUrls?: string;

  // extended property info
  propertySource?: "airbnb" | "booking";
  airbnbUrl?: string;
  bookingUrl?: string;
  peakRevenue?: number; // 万円
  offpeakRevenue?: number; // 万円

  // meta
  note?: string;
  temperature?: string;
};

export type ReportData = {
  lead: Lead;
  pastLoss: number; // 万円
  futureLoss: number; // 万円
  monthlySaving: number; // 円
  annualSaving: number; // 円
  fiveYearSaving: number; // 円
  currentMonthlyFee: number;
  sekaiMonthlyFee: number;
  sekaiFeeRate: number;
  deadlineAt?: string; // ISO - publishedAt + 72h
};

// ---------- storage（Phase 1 は JSON ファイル） ----------

const DATA_DIR = path.join(process.cwd(), ".data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function ensureFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(LEADS_FILE);
  } catch {
    await fs.writeFile(LEADS_FILE, "[]", "utf-8");
  }
}

async function readAll(): Promise<Lead[]> {
  await ensureFile();
  const raw = await fs.readFile(LEADS_FILE, "utf-8");
  try {
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function writeAll(leads: Lead[]) {
  await ensureFile();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function createLead(
  input: Omit<Lead, "hash" | "createdAt">,
): Promise<Lead> {
  const hash = crypto.randomBytes(12).toString("hex");
  const lead: Lead = {
    ...input,
    hash,
    createdAt: new Date().toISOString(),
  };
  const all = await readAll();
  all.push(lead);
  await writeAll(all);
  return lead;
}

export async function getLead(hash: string): Promise<Lead | null> {
  const all = await readAll();
  return all.find((l) => l.hash === hash) ?? null;
}

export async function publishLead(hash: string): Promise<Lead | null> {
  const all = await readAll();
  const i = all.findIndex((l) => l.hash === hash);
  if (i < 0) return null;
  all[i].publishedAt = new Date().toISOString();
  await writeAll(all);
  return all[i];
}

// ---------- calculation ----------

export const SEKAI_FEE_RATE = 0.08;
export const SEKAI_PER_ROOM_JPY = 5000; // 月額/部屋

/**
 * 入力は全て「万円」「年」「小数比率 (0.20)」。
 * 返り値の金額系は円ベース。pastLoss/futureLoss のみ表示利便で万円。
 */
export function calculateReport(lead: Lead): ReportData {
  const monthlyRevenueJpy = lead.monthlyRevenue * 10_000;
  const annualRevenueJpy = monthlyRevenueJpy * 12;

  const feeDiff = Math.max(0, lead.currentFeeRate - SEKAI_FEE_RATE);

  // 過去累計損失（現手数料 - 8%） × 年売上 × 過去年数
  const pastLossJpy = annualRevenueJpy * feeDiff * lead.pastYears;
  // 今後想定損失
  const futureLossJpy = annualRevenueJpy * feeDiff * lead.futureYears;

  const currentMonthlyFee = Math.round(monthlyRevenueJpy * lead.currentFeeRate);
  const sekaiMonthlyFee =
    Math.round(monthlyRevenueJpy * SEKAI_FEE_RATE) +
    SEKAI_PER_ROOM_JPY * lead.rooms;
  const monthlySaving = Math.max(0, currentMonthlyFee - sekaiMonthlyFee);
  const annualSaving = monthlySaving * 12;
  const fiveYearSaving = annualSaving * 5;

  const deadlineAt = lead.publishedAt
    ? new Date(
        new Date(lead.publishedAt).getTime() + 72 * 60 * 60 * 1000,
      ).toISOString()
    : undefined;

  return {
    lead,
    pastLoss: Math.round(pastLossJpy / 10_000),
    futureLoss: Math.round(futureLossJpy / 10_000),
    monthlySaving,
    annualSaving,
    fiveYearSaving,
    currentMonthlyFee,
    sekaiMonthlyFee,
    sekaiFeeRate: SEKAI_FEE_RATE,
    deadlineAt,
  };
}

// ---------- format helpers ----------

export function formatJpy(v: number): string {
  return v.toLocaleString("ja-JP");
}

export function formatManEn(jpy: number): string {
  const man = Math.round(jpy / 10_000);
  return `${man.toLocaleString("ja-JP")}万円`;
}
