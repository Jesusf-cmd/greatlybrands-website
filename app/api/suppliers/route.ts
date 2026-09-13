import { NextResponse } from "next/server";
import { storeInquiry } from "@/lib/inquiries";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import {
  isHoneypotFilled,
  isValidEmail,
  isValidPhone,
  isValidWebsite,
  sanitizeText,
} from "@/lib/validation";
import { nationwideRightsOptions, supplierRelationships } from "@/lib/company";

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  if (isRateLimited(`supplier:${ip}`)) {
    return NextResponse.json({ ok: false, error: "Too many submissions." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (isHoneypotFilled(body.fax)) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    companyName: sanitizeText(body.companyName, 160),
    contactName: sanitizeText(body.contactName, 120),
    email: sanitizeText(body.email, 254).toLowerCase(),
    phone: sanitizeText(body.phone, 30),
    websiteUrl: sanitizeText(body.websiteUrl, 300),
    categories: sanitizeText(body.categories, 120),
    brands: sanitizeText(body.brands, 400),
    relationship: sanitizeText(body.relationship, 80),
    minimumOrder: sanitizeText(body.minimumOrder, 200),
    nationwideRights: sanitizeText(body.nationwideRights, 40),
    message: sanitizeText(body.message, 5000),
  };

  if (!payload.companyName || !payload.contactName || !isValidEmail(payload.email) || !payload.message) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }

  if (payload.phone && !isValidPhone(payload.phone)) {
    return NextResponse.json({ ok: false, error: "Enter a valid phone number." }, { status: 400 });
  }

  if (payload.websiteUrl && !isValidWebsite(payload.websiteUrl)) {
    return NextResponse.json({ ok: false, error: "Enter a valid website." }, { status: 400 });
  }

  if (!supplierRelationships.includes(payload.relationship as (typeof supplierRelationships)[number])) {
    return NextResponse.json({ ok: false, error: "Select a valid supplier relationship." }, { status: 400 });
  }

  if (
    payload.nationwideRights &&
    !nationwideRightsOptions.includes(
      payload.nationwideRights as (typeof nationwideRightsOptions)[number],
    )
  ) {
    return NextResponse.json({ ok: false, error: "Select a valid distribution-rights option." }, { status: 400 });
  }

  await storeInquiry("supplier", payload);
  return NextResponse.json({ ok: true });
}
