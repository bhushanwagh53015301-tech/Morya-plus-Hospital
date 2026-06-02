import { Breadcrumb } from "./Breadcrumb";

export function PageBanner({ title, subtitle, crumbs, image }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-brand" />
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay"
        />
      ) : null}
      <div className="relative container-x py-16 text-white md:py-24">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-4 font-display text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-2xl text-white/85">{subtitle}</p> : null}
      </div>
    </section>
  );
}
