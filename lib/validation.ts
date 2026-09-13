const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+().\s-]{7,20}$/;
const URL_PATTERN = /^(https?:\/\/)?[^\s]+\.[^\s]{2,}(\/\S*)?$/i;

export function sanitizeText(value: unknown, max = 2000) {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, max);
}

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value) && value.length <= 254;
}

export function isValidPhone(value: string) {
  if (!value) return true;
  const digits = value.replace(/\D/g, "");
  return PHONE_PATTERN.test(value) && digits.length >= 7 && digits.length <= 15;
}

export function isValidWebsite(value: string) {
  if (!value) return true;
  return URL_PATTERN.test(value) && value.length <= 300;
}

export function isHoneypotFilled(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export type FormErrorMap = Record<string, string>;
