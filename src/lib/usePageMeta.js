import { useEffect } from "react";
import { site } from "@/data/site";

export function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(document.createElement("meta"));

    metaDescription.setAttribute("name", "description");

    document.title = title;
    metaDescription.setAttribute("content", description || site.description);

    return () => {
      document.title = previousTitle;
      metaDescription.setAttribute("content", site.description);
    };
  }, [description, title]);
}
