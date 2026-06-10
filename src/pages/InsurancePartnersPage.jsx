import { Link } from "react-router-dom";
import { PageBanner } from "@/components/site/PageBanner";
import { insuranceLogos } from "@/data/insuranceLogos";
import { site } from "@/data/site";
import { usePageMeta } from "@/lib/usePageMeta";
import heroHospital from "@/assets/images/moryahplushospital.png";

export function InsurancePartnersPage() {
  usePageMeta(
    "Insurance & Cashless Partners | Moryaplus Hospital Kunjirwadi Pune",
    `Browse insurance and cashless support partners available through ${site.shortName}.`,
  );

  return (
    <>
      <PageBanner
        title="Insurance & Cashless Partners"
        subtitle="Explore the insurers whose logos are currently listed with our hospital support desk."
        image={heroHospital}
        imageClassName="object-cover object-[72%_center]"
        crumbs={[{ label: "Insurance Partners" }]}
      />

      <section className="container-x py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            Cashless Support
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Supported Insurance Company partners
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our team assists patients with documentation, coordination, and cashless treatment
            guidance for listed providers, subject to policy approval and hospital processes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {insuranceLogos.map((logo) => (
            <article
              key={logo.name}
              className={`flex min-h-40 flex-col items-center justify-center rounded-3xl border p-6 shadow-card ${
                logo.cardClassName ||
                (logo.needsDarkSurface
                  ? "border-slate-800/80 bg-slate-900"
                  : "border-border/70 bg-white")
              }`}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`max-h-20 w-full object-contain ${logo.imageClassName}`}
                loading="lazy"
              />
              <p
                className={`mt-4 text-center text-sm font-medium leading-relaxed ${
                  logo.cardClassName || logo.needsDarkSurface ? "text-white/90" : "text-foreground/80"
                }`}
              >
                {logo.name}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full gradient-brand px-6 py-3 font-semibold text-white"
          >
            Contact Insurance Desk
          </Link>
        </div>
      </section>
    </>
  );
}
