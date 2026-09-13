import { governmentCredentials, hasVerifiedGovernmentCredentials } from "@/lib/company";

export function GovernmentCredentials() {
  if (!hasVerifiedGovernmentCredentials()) {
    return null;
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-site">
        <h2 className="text-3xl font-semibold text-navy">Verified credentials</h2>
        <dl className="mt-8 grid gap-6 md:grid-cols-2">
          {governmentCredentials.uei ? (
            <div className="border border-line p-5">
              <dt className="text-sm font-semibold tracking-wide text-muted uppercase">UEI</dt>
              <dd className="mt-2 text-navy">{governmentCredentials.uei}</dd>
            </div>
          ) : null}
          {governmentCredentials.cageCode ? (
            <div className="border border-line p-5">
              <dt className="text-sm font-semibold tracking-wide text-muted uppercase">CAGE code</dt>
              <dd className="mt-2 text-navy">{governmentCredentials.cageCode}</dd>
            </div>
          ) : null}
          {governmentCredentials.samRegistered ? (
            <div className="border border-line p-5">
              <dt className="text-sm font-semibold tracking-wide text-muted uppercase">SAM.gov</dt>
              <dd className="mt-2 text-navy">Registered</dd>
            </div>
          ) : null}
          {governmentCredentials.gsaSchedule ? (
            <div className="border border-line p-5">
              <dt className="text-sm font-semibold tracking-wide text-muted uppercase">GSA Schedule</dt>
              <dd className="mt-2 text-navy">{governmentCredentials.gsaSchedule}</dd>
            </div>
          ) : null}
          {governmentCredentials.socioeconomicDesignations.map((item) => (
            <div key={item} className="border border-line p-5">
              <dt className="text-sm font-semibold tracking-wide text-muted uppercase">
                Socioeconomic designation
              </dt>
              <dd className="mt-2 text-navy">{item}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
