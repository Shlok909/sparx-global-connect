import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, CATEGORIES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 mt-24">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="bg-white/95 inline-flex rounded-md p-3">
            <img src={logo} alt={SITE.name} className="h-14 w-auto" />
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Global exporter of genuine TVS KING three-wheeler spare parts. Trusted by dealers and distributors worldwide.
          </p>
          <div className="flex gap-3 pt-2">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-md bg-white/5 hover:bg-primary/30 transition-colors" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/catalogue", label: "Catalogue" },
              { to: "/inquiry", label: "Inquiry" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 hover:text-primary-glow transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/products" className="text-white/60 hover:text-primary-glow transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />{SITE.address}</li>
            {SITE.contacts.map((c) => (
              <li key={c.name} className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.name}: {c.phone}</a></li>
            ))}
            {SITE.emails.map((email) => (
              <li key={email} className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" /><a href={`mailto:${email}`} className="min-w-0 break-words">{email}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Genuine quality • Export worldwide • B2B partnerships</p>
        </div>
      </div>
    </footer>
  );
}
