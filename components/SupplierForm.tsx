"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { productCategories } from "@/lib/categories";
import { supplierCompanyTypes } from "@/lib/company";
import { isValidEmail, isValidPhone, isValidWebsite, sanitizeText } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const initial = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  websiteUrl: "",
  companyType: "",
  categories: "",
  brands: "",
  minimumOrder: "",
  message: "",
  authorized: false,
  fax: "",
};

export function SupplierForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);

  function onStart() {
    if (started) return;
    setStarted(true);
    trackEvent("supplier_form_start", { form: "supplier" });
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!sanitizeText(values.companyName, 160)) next.companyName = "Enter your company name.";
    if (!sanitizeText(values.contactName, 120)) next.contactName = "Enter a contact name.";
    if (!isValidEmail(values.email)) next.email = "Enter a valid business email.";
    if (values.phone && !isValidPhone(values.phone)) next.phone = "Enter a valid phone number.";
    if (values.websiteUrl && !isValidWebsite(values.websiteUrl)) {
      next.websiteUrl = "Enter a valid website.";
    }
    if (!values.companyType) next.companyType = "Select a company type.";
    if (!sanitizeText(values.message, 5000)) {
      next.message = "Tell us about the products you would like Greatly Brands to consider.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/suppliers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          authorized: values.authorized ? "yes" : "no",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      trackEvent("supplier_form_submit", { form: "supplier" });
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-sm border border-line bg-paper p-5 text-navy" role="status">
        Thank you. Your supplier inquiry has been received for review.
      </p>
    );
  }

  const fieldClass = "w-full rounded-sm border border-line bg-white px-3 py-2.5";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" onFocus={onStart}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-company" className="text-sm font-medium text-navy">
            Company Name <span className="text-blue">*</span>
          </label>
          <input
            id="supplier-company"
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? "supplier-company-error" : undefined}
            value={values.companyName}
            onChange={(e) => setValues({ ...values, companyName: e.target.value })}
          />
          {errors.companyName ? <p id="supplier-company-error" className="text-sm text-red-700" role="alert">{errors.companyName}</p> : null}
        </div>
        <div className="grid gap-2">
          <label htmlFor="supplier-contact" className="text-sm font-medium text-navy">
            Contact Name <span className="text-blue">*</span>
          </label>
          <input
            id="supplier-contact"
            className={fieldClass}
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.contactName)}
            aria-describedby={errors.contactName ? "supplier-contact-error" : undefined}
            value={values.contactName}
            onChange={(e) => setValues({ ...values, contactName: e.target.value })}
          />
          {errors.contactName ? <p id="supplier-contact-error" className="text-sm text-red-700" role="alert">{errors.contactName}</p> : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-email" className="text-sm font-medium text-navy">
            Business Email <span className="text-blue">*</span>
          </label>
          <input
            id="supplier-email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "supplier-email-error" : undefined}
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          {errors.email ? <p id="supplier-email-error" className="text-sm text-red-700" role="alert">{errors.email}</p> : null}
        </div>
        <div className="grid gap-2">
          <label htmlFor="supplier-phone" className="text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="supplier-phone"
            type="tel"
            className={fieldClass}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "supplier-phone-error" : undefined}
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
          {errors.phone ? <p id="supplier-phone-error" className="text-sm text-red-700" role="alert">{errors.phone}</p> : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-website" className="text-sm font-medium text-navy">
            Website
          </label>
          <input
            id="supplier-website"
            className={fieldClass}
            inputMode="url"
            placeholder="https://"
            aria-invalid={Boolean(errors.websiteUrl)}
            aria-describedby={errors.websiteUrl ? "supplier-website-error" : undefined}
            value={values.websiteUrl}
            onChange={(e) => setValues({ ...values, websiteUrl: e.target.value })}
          />
          {errors.websiteUrl ? <p id="supplier-website-error" className="text-sm text-red-700" role="alert">{errors.websiteUrl}</p> : null}
        </div>
        <div className="grid gap-2">
          <label htmlFor="supplier-type" className="text-sm font-medium text-navy">
            Company Type <span className="text-blue">*</span>
          </label>
          <select
            id="supplier-type"
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.companyType)}
            aria-describedby={errors.companyType ? "supplier-type-error" : undefined}
            value={values.companyType}
            onChange={(e) => setValues({ ...values, companyType: e.target.value })}
          >
            <option value="">Select a company type</option>
            {supplierCompanyTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.companyType ? <p id="supplier-type-error" className="text-sm text-red-700" role="alert">{errors.companyType}</p> : null}
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="supplier-categories" className="text-sm font-medium text-navy">
          Product Categories
        </label>
        <select
          id="supplier-categories"
          className={fieldClass}
          value={values.categories}
          onChange={(e) => setValues({ ...values, categories: e.target.value })}
        >
          <option value="">Select a primary category</option>
          {productCategories.map((category) => (
            <option key={category.slug} value={category.name}>
              {category.name}
            </option>
          ))}
          <option value="Multiple categories">Multiple categories</option>
        </select>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-brands" className="text-sm font-medium text-navy">
            Brands Represented
          </label>
          <input
            id="supplier-brands"
            className={fieldClass}
            value={values.brands}
            onChange={(e) => setValues({ ...values, brands: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="supplier-moq" className="text-sm font-medium text-navy">
            Minimum Order Requirements
          </label>
          <input
            id="supplier-moq"
            className={fieldClass}
            value={values.minimumOrder}
            onChange={(e) => setValues({ ...values, minimumOrder: e.target.value })}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="supplier-message" className="text-sm font-medium text-navy">
          Message <span className="text-blue">*</span>
        </label>
          <textarea
            id="supplier-message"
            rows={6}
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "supplier-message-error" : undefined}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
          {errors.message ? <p id="supplier-message-error" className="text-sm text-red-700" role="alert">{errors.message}</p> : null}
      </div>
      <div className="flex items-start gap-3">
        <input
          id="supplier-authorized"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded-sm border-line"
          checked={values.authorized}
          onChange={(e) => setValues({ ...values, authorized: e.target.checked })}
        />
        <label htmlFor="supplier-authorized" className="text-sm text-muted">
          I confirm that I am authorized to discuss the products or brands referenced in this inquiry.
        </label>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="supplier-fax">Fax</label>
        <input
          id="supplier-fax"
          hidden
          tabIndex={-1}
          autoComplete="off"
          value={values.fax}
          onChange={(e) => setValues({ ...values, fax: e.target.value })}
        />
      </div>
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
        {status === "submitting" ? "Sending..." : "Submit supplier inquiry"}
      </button>
    </form>
  );
}
