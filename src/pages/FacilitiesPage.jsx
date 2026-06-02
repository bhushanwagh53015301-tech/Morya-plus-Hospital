import { PageBanner } from "@/components/site/PageBanner";
import { facilities } from "@/data/site";
import { usePageMeta } from "@/lib/usePageMeta";
import facilityDiagnostic from "@/assets/images/facility-diagnostic.jpg";
import facilityIcu from "@/assets/images/facility-icu.jpg";
import facilityOt from "@/assets/images/facility-ot.jpg";
import facilityPharmacy from "@/assets/images/facility-pharmacy.jpg";
import facilityReception from "@/assets/images/facility-reception.jpg";
import facilityRoom from "@/assets/images/facility-room.jpg";
import heroHospital from "@/assets/images/hero-hospital.jpg";

const images = {
  icu: facilityIcu,
  ot: facilityOt,
  diagnostic: facilityDiagnostic,
  pharmacy: facilityPharmacy,
  reception: facilityReception,
  room: facilityRoom,
};

export function FacilitiesPage() {
  usePageMeta(
    "Facilities | Moryaplus Multi Speciality Hospital Kunjirwadi",
    "Modern facilities at Morya Plus Hospital - ICU, modular OT, diagnostics, pharmacy, private rooms and 24x7 ambulance.",
  );

  return (
    <>
      <PageBanner
        title="Our Facilities"
        subtitle="World-class infrastructure designed around patient comfort and clinical excellence."
        image={heroHospital}
        crumbs={[{ label: "Facilities" }]}
      />
      <section className="container-x py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <article
              key={facility.name}
              className="overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[facility.img]}
                  alt={facility.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-1 text-lg font-semibold">{facility.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{facility.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
