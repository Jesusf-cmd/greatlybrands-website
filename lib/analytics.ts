export type AnalyticsEvent =
  | "contact_form_start"
  | "contact_form_submit"
  | "supplier_form_start"
  | "supplier_form_submit"
  | "government_inquiry_start"
  | "government_inquiry_submit"
  | "phone_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.dispatchEvent(
    new CustomEvent("gb:analytics", { detail: { event, params } }),
  );
}
