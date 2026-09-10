import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SparxWordmark } from "@/components/SparxWordmark";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/inquiry", label: "Inquiry" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-card-soft border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20 md:h-24">
        <Link
          to="/"
          aria-label={`${SITE.name} home`}
          className="flex items-center gap-2 shrink-0"
          onClick={() => setOpen(false)}
        >
          <span
            className={cn(
              "inline-flex items-center rounded-full transition-all",
              scrolled ? "bg-transparent p-0" : "bg-white/95 shadow-card-soft px-4 py-2",
            )}
          >
            <SparxWordmark compact />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 rounded-full glass px-1.5 py-1.5 border border-border/50">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-colors",
                  isActive
                    ? "text-primary-foreground bg-charcoal"
                    : "text-foreground/65 hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-charcoal text-white px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-primary transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in shadow-lg">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-sm font-medium border-b border-border/60 last:border-0",
                    isActive ? "text-primary" : "",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
