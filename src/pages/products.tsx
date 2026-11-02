import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, Cog } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { TelematicsSpotlight } from "@/components/TelematicsSpotlight";
import { PRODUCT_RANGES } from "@/data/productRanges";
import { CATEGORIES } from "@/lib/site";
import "./telematics.css";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const ranges = PRODUCT_RANGES.filter((item) =>
    (item.name + " " + item.summary + " " + item.keywords).toLowerCase().includes(term),
  );
  const parts = CATEGORIES.filter((item) =>
    (item.name + " " + item.desc).toLowerCase().includes(term),
  );
  return (
    <SiteLayout>
      <section className="bg-charcoal text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <p className="eyebrow text-primary-glow">Our products</p>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Parts that move you.
            <br />
            Insights that keep you moving.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Explore automotive spare parts, workshop equipment and advanced telematics for connected
            fleets.
          </p>
          <label className="mt-9 max-w-xl flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4">
            <Search size={20} />
            <span className="sr-only">Search products and parts</span>
            <input
              className="w-full bg-transparent py-4 outline-none focus-visible:ring-2 focus-visible:ring-primary-glow"
              type="search"
              placeholder="Search parts, telematics, fuel monitoring…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
      </section>
      {!term && <TelematicsSpotlight />}
      <section className="container-px mx-auto max-w-7xl py-16" aria-label="Product ranges">
        <h2 className="text-3xl font-bold mb-8">Explore our range</h2>
        <p className="sr-only" role="status">
          {ranges.length + parts.length} matching products and categories
        </p>
        <div className="parts-grid">
          {ranges.map(({ name, icon: Icon, summary, note, to, action }) => (
            <article className="parts-card" key={name}>
              <Icon aria-hidden="true" />
              <h3>{name}</h3>
              <p>{summary}</p>
              <p>{note}</p>
              <Link to={to}>
                {action}
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
        {ranges.length === 0 && (
          <p className="text-muted-foreground">No product ranges match this search.</p>
        )}
      </section>
      <section className="container-px mx-auto max-w-7xl py-12 scroll-mt-28" id="spare-parts">
        <h2 className="text-3xl font-bold mb-3">Spare parts by category</h2>
        <p className="text-muted-foreground mb-8">
          Share your vehicle specifications, part numbers and quantities so we can help identify the
          right components.
        </p>
        <div className="parts-grid">
          {parts.map((part) => (
            <article className="parts-card" key={part.slug}>
              <Cog aria-hidden="true" />
              <h3>{part.name}</h3>
              <p>{part.desc}</p>
              <Link to={"/inquiry?category=" + part.slug}>
                Request a quote
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
        {parts.length === 0 && (
          <p className="text-muted-foreground">
            No spare part categories match this search.{" "}
            <Link className="underline" to="/inquiry">
              Ask our team for help.
            </Link>
          </p>
        )}
      </section>
    </SiteLayout>
  );
}
