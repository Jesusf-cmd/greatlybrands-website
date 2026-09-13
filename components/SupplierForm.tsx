"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { productCategories } from "@/lib/categories";
import {
  nationwideRightsOptions,
  supplierRelationships,
} from "@/lib/company";
import { isValidEmail, isValidPhone, isValidWebsite, sanitizeText } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const initial = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  websiteUrl: "",
  categories: "",
  brands: "",
  relationship: "",
  minimumOrder: "",
  nationwideRights: "",
  message: "",
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
    trackEvent("form_start", { form: "supplier" });
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
    if (!values.relationship) next.relationship = "Select the supplier relationship type.";
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
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      trackEvent("form_submit", { form: "supplier" });
      trackEvent("supplier_form_submit", { form: "supplier" });
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-md border border-line bg-paper p-5 text-navy" role="status">
        Thank you. Your supplier inquiry has been received. A Greatly Brands team
        member will review the information and follow up if there is a potential fit.
      </p>
    );
  }

  const fieldClass =
    "w-full rounded-sm border border-line bg-white px-3 py-2.5";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" onFocus={onStart}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-company" className="text-sm font-medium text-navy">
            Company name <span className="text-blue">*</span>
          </label>
          <input
            id="supplier-company"
            className={fieldClass}
            value={values.companyName}
            onChange={(e) => setValues({ ...values, companyName: e.target.value })}
          />
          {errors.companyName ? <p className="text-sm text-red-700">{errors.companyName}</p> : null}
        </div>
        <div className="grid gap-2">
          <label htmlFor="supplier-contact" className="text-sm font-medium text-navy">
            Contact name <span className="text-blue">*</span>
          </label>
          <input
            id="supplier-contact"
            className={fieldClass}
            autoComplete="name"
            value={values.contactName}
            onChange={(e) => setValues({ ...values, contactName: e.target.value })}
          />
          {errors.contactName ? <p className="text-sm text-red-700">{errors.contactName}</p> : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-email" className="text-sm font-medium text-navy">
            Business email <span className="text-blue">*</span>
          </label>
          <input
            id="supplier-email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          {errors.email ? <p className="text-sm text-red-700">{errors.email}</p> : null}
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
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
          {errors.phone ? <p className="text-sm text-red-700">{errors.phone}</p> : null}
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="supplier-website" className="text-sm font-medium text-navy">
          Website
        </label>
        <input
          id="supplier-website"
          className={fieldClass}
          inputMode="url"
          placeholder="https://"
          value={values.websiteUrl}
          onChange={(e) => setValues({ ...values, websiteUrl: e.target.value })}
        />
        {errors.websiteUrl ? <p className="text-sm text-red-700">{errors.websiteUrl}</p> : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-categories" className="text-sm font-medium text-navy">
            Product categories
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
        <div className="grid gap-2">
          <label htmlFor="supplier-relationship" className="text-sm font-medium text-navy">
            Distributor / manufacturer relationship <span className="text-blue">*</span>
          </label>
          <select
            id="supplier-relationship"
            className={fieldClass}
            value={values.relationship}
            onChange={(e) => setValues({ ...values, relationship: e.target.value })}
          >
            <option value="">Select a relationship</option>
            {supplierRelationships.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.relationship ? <p className="text-sm text-red-700">{errors.relationship}</p> : null}
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="supplier-brands" className="text-sm font-medium text-navy">
          Brands represented
        </label>
        <input
          id="supplier-brands"
          className={fieldClass}
          value={values.brands}
          onChange={(e) => setValues({ ...values, brands: e.target.value })}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="supplier-moq" className="text-sm font-medium text-navy">
            Minimum order requirements
          </label>
          <input
            id="supplier-moq"
            className={fieldClass}
            value={values.minimumOrder}
            onChange={(e) => setValues({ ...values, minimumOrder: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="supplier-rights" className="text-sm font-medium text-navy">
            Nationwide distribution rights, if applicable
          </label>
          <select
            id="supplier-rights"
            className={fieldClass}
            value={values.nationwideRights}
            onChange={(e) => setValues({ ...values, nationwideRights: e.target.value })}
          >
            <option value="">Select an option</option>
            {nationwideRightsOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
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
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
        {errors.message ? <p className="text-sm text-red-700">{errors.message}</p> : null}
      </div>
      <p className="hidden" aria-hidden="true">
        <label htmlFor="supplier-fax">Fax</label>
        <input
          id="supplier-fax"
          tabIndex={-1}
          autoComplete="off"
          value={values.fax}
          onChange={(e) => setValues({ ...values, fax: e.target.value })}
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
        className="inline-flex items-center justify-center rounded-sm bg-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit supplier inquiry"}
      </button>
    </form>
  );
}
