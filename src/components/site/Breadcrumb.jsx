import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/80">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-white">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
        </li>
        {items.map((item) => (
          <li
            key={`${item.label}-${item.to || "current"}`}
            className="inline-flex items-center gap-1.5"
          >
            <ChevronRight className="h-3.5 w-3.5 opacity-70" />
            {item.to ? (
              <Link to={item.to} className="hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
