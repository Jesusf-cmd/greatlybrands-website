import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type StoredInquiry = {
  id: string;
  receivedAt: string;
  type: "contact" | "supplier" | "government";
  payload: Record<string, string>;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "inquiries.json");

export async function storeInquiry(
  type: StoredInquiry["type"],
  payload: Record<string, string>,
) {
  const inquiry: StoredInquiry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    receivedAt: new Date().toISOString(),
    type,
    payload,
  };

  await mkdir(DATA_DIR, { recursive: true });

  let existing: StoredInquiry[] = [];
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    existing = JSON.parse(raw) as StoredInquiry[];
  } catch {
    existing = [];
  }

  existing.push(inquiry);
  await writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf8");

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "greatlybrands.com",
          event:
            type === "supplier"
              ? "supplier_form_submit"
              : type === "government"
                ? "government_inquiry_submit"
                : "contact_form_submit",
          inquiry,
        }),
      });
    } catch (error) {
      console.error("CRM webhook delivery failed", error);
    }
  }

  return inquiry;
}
