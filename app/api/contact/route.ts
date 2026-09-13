import { NextResponse } from "next/server";
import { storeInquiry } from "@/lib/inquiries";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import {
  isHoneypotFilled,
  isValidEmail,
  isValidPhone,
  sanitizeText,
} from "@/lib/validation";
import { contactReasons } from "@/lib/company";

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json({ ok: false, error: "Too many submissions." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (isHoneypotFilled(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitizeText(body.name, 120);
  const companyName = sanitizeText(body.company, 160);
  const email = sanitizeText(body.email, 254).toLowerCase();
  const phone = sanitizeText(body.phone, 30);
  const reason = sanitizeText(body.reason, 80);
  const message = sanitizeText(body.message, 5000);

  if (!name || !isValidEmail(email) || !reason || !message) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }

  if (phone && !isValidPhone(phone)) {
    return NextResponse.json({ ok: false, error: "Enter a valid phone number." }, { status: 400 });
  }

  if (!contactReasons.includes(reason as (typeof contactReasons)[number])) {
    return NextResponse.json({ ok: false, error: "Select a valid inquiry reason." }, { status: 400 });
  }

  await storeInquiry("contact", {
    name,
    company: companyName,
    email,
    phone,
    reason,
    message,
  });

  return NextResponse.json({ ok: true });
}
