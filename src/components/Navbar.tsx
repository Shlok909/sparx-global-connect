import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
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
        scrolled ? "glass shadow-card-soft border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className={cn(
            "inline-flex items-center rounded-full transition-all",
            scrolled ? "bg-transparent p-0" : "bg-white/95 shadow-card-soft px-3 py-1.5"
          )}>
            <img src={logo} alt={SITE.name} className="h-11 md:h-14 w-auto" />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 rounded-full glass px-1.5 py-1.5 border border-border/50">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-foreground/65 hover:text-foreground rounded-full transition-colors"
              activeProps={{ className: "text-primary-foreground bg-charcoal" }}
            >
              {item.label}
            </Link>
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
        <div className="lg:hidden glass border-t border-border animate-fade-in">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-border/60 last:border-0"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
