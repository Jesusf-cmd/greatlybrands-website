type Bucket = { timestamps: number[] };

const windows = new Map<string, Bucket>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 8;

export function getClientIp(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return headers.get("x-real-ip") || "local";
}

export function isRateLimited(key: string) {
  const now = Date.now();
  const bucket = windows.get(key) ?? { timestamps: [] };
  bucket.timestamps = bucket.timestamps.filter((time) => now - time < WINDOW_MS);

  if (bucket.timestamps.length >= MAX_REQUESTS) {
    windows.set(key, bucket);
    return true;
  }

  bucket.timestamps.push(now);
  windows.set(key, bucket);
  return false;
}
