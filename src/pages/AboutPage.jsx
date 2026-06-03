import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Counter } from "@/components/site/Counter";
import { PageBanner } from "@/components/site/PageBanner";
import { site, stats, whyChooseUs } from "@/data/site";
import { usePageMeta } from "@/lib/usePageMeta";
import heroDoctors from "@/assets/images/hero-doctors.jpg";
import aboutBanner from "@/assets/images/WhatsApp Image 2026-05-26 at 5.41.24 PM.jpeg";

export function AboutPage() {
  usePageMeta(
    "About Us | Moryaplus Multi Speciality Hospital, Kunjirwadi Pune",
    `Learn about ${site.name} - our vision, mission, and commitment to compassionate, affordable healthcare in Kunjirwadi, Pune.`,
  );

  return (
    <>
      <PageBanner
        title="About Morya Plus Hospital"
        subtitle="A patient-first multispeciality hospital on the Pune-Solapur Highway, dedicated to ethical and affordable healthcare."
        image={aboutBanner}
        crumbs={[{ label: "About" }]}
      />

      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <img
          src={heroDoctors}
          alt="Doctors at Morya Plus"
          className="rounded-3xl shadow-soft"
          loading="lazy"
        />
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Who we are
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Healing with compassion, treating with excellence
          </h2>
          <p className="mt-4 text-foreground/80">
            Morya Plus Multispeciality Hospital is committed to providing high-quality, affordable,
            and patient-centered healthcare services with advanced medical facilities and
            experienced healthcare professionals. The hospital focuses on compassionate care,
            accurate diagnosis, and effective treatment under one roof.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "11+ Specialities",
              "24x7 Emergency, ICU & Ambulance",
              "In-house Diagnostics & Pharmacy",
              "Experienced Consultant Doctors",
              "Modern Modular OT",
              "Transparent & Affordable Pricing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-soft py-14">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-card">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Vision
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold">
              A trusted destination for healthcare
            </h3>
            <p className="mt-3 text-foreground/75">
              To become a trusted healthcare destination by delivering ethical, affordable, and
              advanced medical care to every patient.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-card">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal">
              Mission
            </span>
            <ul className="mt-3 space-y-2 text-foreground/75">
              <li>To provide quality healthcare services with compassion.</li>
              <li>To ensure patient safety and satisfaction.</li>
              <li>To offer advanced diagnostic and treatment facilities.</li>
              <li>To build a healthier community through preventive healthcare.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x grid grid-cols-2 gap-4 py-14 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border/70 bg-white p-6 text-center shadow-card"
          >
            <div className="font-display text-3xl font-bold gradient-text md:text-4xl">
              <Counter value={item.value} suffix={item.suffix} />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </section>

      <section className="container-x pb-16">
        <h2 className="text-center font-display text-3xl font-bold">
          Why families trust Morya Plus
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-white p-6 text-center shadow-card"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-soft">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 font-semibold text-white shadow-soft"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
