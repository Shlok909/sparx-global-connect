import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, ZoomIn, X, ArrowUpRight } from "lucide-react";
import { CATEGORIES, DIAGRAMS } from "@/lib/site";

export default function CataloguePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [zoom, setZoom] = useState<typeof DIAGRAMS[number] | null>(null);

  const filtered = DIAGRAMS.filter(
    (f) => (cat === "all" || f.category === cat) && f.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <SiteLayout>
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative container-px mx-auto max-w-7xl py-28 md:py-36">
          <Reveal>
            <p className="eyebrow text-primary-glow">Technical Catalogue</p>
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl leading-[1.02] text-balance">
              Exploded diagrams &amp; part references.
            </h1>
            <p className="mt-6 max-w-2xl text-white/65 text-lg">
              Search, filter and explore the complete TVS KING three-wheeler spare parts catalogue with numbered technical views.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-7 rounded-full bg-white text-charcoal hover:bg-white/90">
              <Link to="/inquiry"><Download className="mr-2 h-4 w-4" /> Request Full Catalogue</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-10 sticky top-20 z-30 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 rounded-2xl">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search diagrams..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-11 h-11 rounded-full" />
          </div>
          <div className="flex flex-wrap gap-1.5 overflow-x-auto -mx-1 px-1">
            <FilterPill active={cat === "all"} onClick={() => setCat("all")}>All</FilterPill>
            {CATEGORIES.map((c) => (
              <FilterPill key={c.slug} active={cat === c.slug} onClick={() => setCat(c.slug)}>
                {c.name.replace(" Parts", "")}
              </FilterPill>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No diagrams match your filters.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((f, i) => (
              <Reveal key={f.id} delay={i * 80}>
                <button
                  onClick={() => setZoom(f)}
                  className="group text-left rounded-2xl border border-border bg-card overflow-hidden hover-lift w-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <img
                      src={f.src}
                      alt={f.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] font-semibold bg-charcoal/90 text-white px-2.5 py-1 rounded-full">
                      {f.figure}
                    </div>
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-charcoal/90 text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-all">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                      {CATEGORIES.find((c) => c.slug === f.category)?.name}
                    </p>
                    <h3 className="mt-1.5 font-display font-semibold">{f.title}</h3>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-20 p-10 md:p-14 rounded-3xl border border-border bg-subtle-gradient grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="eyebrow text-primary">Need Specific Parts?</p>
            <h3 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Send us your part number — get a quote in 24 hours.
            </h3>
          </div>
          <div className="md:justify-self-end">
            <Button asChild size="lg" className="h-12 px-7 rounded-full bg-primary-gradient text-primary-foreground">
              <Link to="/inquiry">Start an Inquiry <ArrowUpRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {zoom && (
        <div
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-sm grid place-items-center p-4 animate-fade-in"
        >
          <button
            onClick={() => setZoom(null)}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white text-charcoal grid place-items-center hover:scale-110 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl overflow-hidden">
              <img src={zoom.src} alt={zoom.title} className="w-full h-auto object-contain max-h-[80vh]" />
            </div>
            <div className="mt-4 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">{zoom.figure}</p>
              <h3 className="mt-2 text-xl font-display font-semibold">{zoom.title}</h3>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all whitespace-nowrap ${
        active
          ? "bg-charcoal text-white border-charcoal"
          : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
      }`}
    >
      {children}
    </button>
  );
}
