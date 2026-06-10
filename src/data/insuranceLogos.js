const logoModules = import.meta.glob(
  "../assets/official_insurance_company_logos/*.{png,jpg,jpeg,svg,gif,webp}",
  {
    eager: true,
    import: "default",
  },
);

function toDisplayName(filePath) {
  const fileName = filePath.split("/").pop() ?? "";
  const withoutExtension = fileName.replace(/\.[^.]+$/, "");

  return withoutExtension.replaceAll("_", " ");
}

const darkSurfaceLogoNames = new Set([
  "Galaxy Health Insurance Company Limited",
  "IFFCO Tokio General Insurance Company Limited",
  "National Insurance Company Limited",
  "Universal Sompo General Insurance Company Limited",
  "Zurich Kotak General Insurance Company India Limited",
]);

const logoPresentation = {
  "Aditya Birla Health Insurance Company Limited": {
    cardClassName: "border-slate-800/80 bg-slate-900",
  },
  "ICICI Lombard General Insurance": {
    imageClassName: "scale-[1.75]",
  },
  "New India Assurance Company Limited": {
    cardClassName: "border-slate-800/80 bg-slate-900",
  },
  "The Oriental Insurance Company Limited": {
    cardClassName: "border-slate-800/80 bg-slate-900",
  },
};

const seenNames = new Set();

export const insuranceLogos = Object.entries(logoModules)
  .map(([path, src]) => {
    const name = toDisplayName(path);

    return {
      name,
      src,
      needsDarkSurface: darkSurfaceLogoNames.has(name),
      imageClassName: logoPresentation[name]?.imageClassName ?? "",
      cardClassName: logoPresentation[name]?.cardClassName ?? "",
    };
  })
  .filter((logo) => {
    if (seenNames.has(logo.name)) {
      return false;
    }

    seenNames.add(logo.name);
    return true;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const featuredInsuranceLogos = insuranceLogos.slice(0, 8);
