import { NextResponse } from "next/server";
import { createLead, type Lead } from "@/lib/leads";
import { sendThanksMail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<Lead>;

    // バリデーション（最低限）
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "name and email are required" },
        { status: 400 },
      );
    }

    const lead = await createLead({
      name: String(body.name),
      email: String(body.email),
      phone: body.phone ? String(body.phone) : undefined,
      propertyName: body.propertyName ? String(body.propertyName) : undefined,
      propertyType: String(body.propertyType ?? ""),
      area: String(body.area ?? ""),
      rooms: Number(body.rooms ?? 1),
      currentManager: String(body.currentManager ?? ""),
      currentFeeRate: Number(body.currentFeeRate ?? 0.2),
      monthlyRevenue: Number(body.monthlyRevenue ?? 0),
      pastYears: Number(body.pastYears ?? 0),
      futureYears: Number(body.futureYears ?? 0),
      otaUrls: body.otaUrls ? String(body.otaUrls) : undefined,
      temperature: body.temperature ? String(body.temperature) : undefined,
      note: body.note ? String(body.note) : undefined,
      propertySource:
        body.propertySource === "airbnb" || body.propertySource === "booking"
          ? body.propertySource
          : undefined,
      airbnbUrl: body.airbnbUrl ? String(body.airbnbUrl) : undefined,
      bookingUrl: body.bookingUrl ? String(body.bookingUrl) : undefined,
      peakRevenue:
        body.peakRevenue !== undefined ? Number(body.peakRevenue) : undefined,
      offpeakRevenue:
        body.offpeakRevenue !== undefined
          ? Number(body.offpeakRevenue)
          : undefined,
    });

    // Phase 1 のメール基盤は未確定。送信はログのみのスタブ。
    await sendThanksMail(lead);

    return NextResponse.json({ hash: lead.hash });
  } catch (e) {
    console.error("[switch-form]", e);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
