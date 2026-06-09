import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, ZoomIn } from "lucide-react";
import { CATEGORIES } from "@/lib/site";
import preview from "@/assets/catalogue-preview.jpg";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Sparx Auto International" },
      { name: "description", content: "Browse the Sparx Auto catalogue of TVS KING spare parts with technical exploded diagrams. Download the full PDF." },
      { property: "og:title", content: "Sparx Auto Catalogue" },
      { property: "og:description", content: "Technical PDF catalogue of TVS KING three-wheeler spare parts." },
      { property: "og:url", content: "/catalogue" },
    ],
    links: [{ rel: "canonical", href: "/catalogue" }],
  }),
  component: CataloguePage,
});

const FIGURES = [
  { id: 1, title: "Engine Assembly — Crank Case & Crankshaft", category: "engine" },
  { id: 2, title: "Clutch Assembly & Drive Plates", category: "clutch" },
  { id: 3, title: "Transmission & Gear Train", category: "gearbox" },
  { id: 4, title: "Brake System — Front & Rear", category: "brake" },
  { id: 5, title: "Front Suspension & Steering", category: "steering" },
  { id: 6, title: "CNG Fuel System Components", category: "fuel" },
];

function CataloguePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const filtered = FIGURES.filter(
    (f) => (cat === "all" || f.category === cat) && f.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <SiteLayout>
      <section className="bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative container-px mx-auto max-w-7xl py-20 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">Technical Catalogue</p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl text-balance">
              Exploded diagrams &amp; part references
            </h1>
            <p className="mt-5 max-w-2xl text-white/70 text-lg">
              Search, filter and download the complete TVS KING three-wheeler spare parts catalogue.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-primary-gradient text-primary-foreground hover-lift">
              <a href="#" download><Download className="mr-2 h-4 w-4" /> Download Full PDF Catalogue</a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-8">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search diagrams..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-10 h-11" />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCat("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${cat === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCat(c.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${cat === c.slug ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}
              >
                {c.name.replace(" Parts", "")}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No diagrams match your filters.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((f, i) => (
              <Reveal key={f.id} delay={i * 60}>
                <div className="group rounded-2xl border border-border bg-card overflow-hidden hover-lift">
                  <div className="relative overflow-hidden h-56">
                    <img src={preview} alt={f.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                    <div className="absolute top-3 left-3 text-xs text-white/80 font-semibold uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-full backdrop-blur">Figure {String(f.id).padStart(2, "0")}</div>
                    <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur grid place-items-center text-white opacity-0 group-hover:opacity-100 transition">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                      {CATEGORIES.find((c) => c.slug === f.category)?.name}
                    </p>
                    <h3 className="mt-1.5 font-semibold">{f.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-16 p-8 md:p-10 rounded-2xl border border-border bg-subtle-gradient text-center">
          <h3 className="text-2xl font-bold">Need a specific part number?</h3>
          <p className="mt-2 text-muted-foreground">Send us the part reference and we&apos;ll quote within 24 hours.</p>
          <Button asChild size="lg" className="mt-6 h-12 px-6 bg-primary-gradient text-primary-foreground hover-lift">
            <a href="/inquiry">Start an Inquiry</a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
