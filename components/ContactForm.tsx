"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { contactReasons } from "@/lib/company";
import { isValidEmail, isValidPhone, sanitizeText } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
  website: "",
};

export function ContactForm({
  defaultReason = "",
  inquiryType = "contact",
  submitLabel = "Send message",
}: {
  defaultReason?: string;
  inquiryType?: "contact" | "government";
  submitLabel?: string;
}) {
  const [values, setValues] = useState({ ...initial, reason: defaultReason });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);

  function onStart() {
    if (started) return;
    setStarted(true);
    if (inquiryType === "government" || values.reason === "Government Purchasing") {
      trackEvent("government_inquiry_start", { form: "government" });
    } else {
      trackEvent("contact_form_start", { form: "contact" });
    }
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!sanitizeText(values.name, 120)) next.name = "Enter your name.";
    if (!sanitizeText(values.email, 254) || !isValidEmail(values.email)) {
      next.email = "Enter a valid business email.";
    }
    if (values.phone && !isValidPhone(values.phone)) next.phone = "Enter a valid phone number.";
    if (!values.reason) next.reason = "Select a reason for contacting us.";
    if (!sanitizeText(values.message, 5000)) next.message = "Enter a brief message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      trackEvent("contact_form_submit", { form: "contact", reason: values.reason });
      if (inquiryType === "government" || values.reason === "Government Purchasing") {
        trackEvent("government_inquiry_submit", { form: "contact" });
      }
      setStatus("success");
      setValues({ ...initial, reason: defaultReason });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-sm border border-line bg-paper p-5 text-navy" role="status">
        Thank you. Your inquiry has been received.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" onFocus={onStart}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name} required>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <input
            id="contact-company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
          />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" error={errors.email} required>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </Field>
      </div>
      <Field label="Reason for Contact" error={errors.reason} required>
        <select
          id="contact-reason"
          name="reason"
          value={values.reason}
          onChange={(e) => setValues({ ...values, reason: e.target.value })}
        >
          <option value="">Select an option</option>
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={errors.message} required>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
      </Field>
      <p className="sr-only" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValues({ ...values, website: e.target.value })}
        />
      </p>
      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          The form could not be submitted. Please try again or call 918-321-0104.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 items-center justify-center rounded-sm bg-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactElement<{ id?: string; className?: string; required?: boolean; "aria-invalid"?: boolean }>;
  error?: string;
  required?: boolean;
}) {
  const id = children.props.id;
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {required ? <span className="text-blue"> *</span> : null}
      </label>
      {children && (
        <div className="[&_input]:w-full [&_select]:w-full [&_textarea]:w-full [&_input]:rounded-sm [&_select]:rounded-sm [&_textarea]:rounded-sm [&_input]:border [&_select]:border [&_textarea]:border [&_input]:border-line [&_select]:border-line [&_textarea]:border-line [&_input]:bg-white [&_select]:bg-white [&_textarea]:bg-white [&_input]:px-3 [&_select]:px-3 [&_textarea]:px-3 [&_input]:py-2.5 [&_select]:py-2.5 [&_textarea]:py-2.5">
          {children}
        </div>
      )}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
