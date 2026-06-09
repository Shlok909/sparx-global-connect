import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cog, Disc3, Settings2, CircleDot, Waypoints, Zap, Compass, Fuel, Search, ArrowUpRight, MessageCircle } from "lucide-react";
import { CATEGORIES, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Sparx Auto International" },
      { name: "description", content: "Browse TVS KING spare parts categories: engine, clutch, gearbox, brake, suspension, electrical, steering and fuel system parts." },
      { property: "og:title", content: "TVS KING Spare Parts Categories" },
      { property: "og:description", content: "Complete TVS KING three-wheeler spare parts range." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const ICONS: Record<string, any> = { Cog, Disc3, Settings2, CircleDot, Waypoints, Zap, Compass, Fuel };

function ProductsPage() {
  const [q, setQ] = useState("");
  const filtered = CATEGORIES.filter(
    (c) => c.name.toLowerCase().includes(q.toLowerCase()) || c.desc.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <SiteLayout>
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative container-px mx-auto max-w-7xl py-28 md:py-36">
          <Reveal>
            <p className="eyebrow text-primary-glow">Products</p>
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl leading-[1.02] text-balance">
              TVS KING spare parts categories.
            </h1>
            <p className="mt-6 max-w-2xl text-white/65 text-lg">
              Eight categories. Hundreds of part numbers. Built for CNG &amp; LPG three-wheelers.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                placeholder="Search categories..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-11 h-12 rounded-full bg-white/10 border-white/15 text-white placeholder:text-white/50 focus-visible:ring-primary-glow"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No categories match your search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => {
              const Icon = ICONS[c.icon];
              return (
                <Reveal key={c.slug} delay={i * 60}>
                  <div className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover-lift">
                    <div className="relative h-44 bg-charcoal overflow-hidden">
                      <div className="absolute inset-0 bg-mesh opacity-80" />
                      <div className="absolute inset-0 grid-bg opacity-20" />
                      <div className="absolute inset-0 grid place-items-center">
                        <Icon className="h-16 w-16 text-white/90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" strokeWidth={1.25} />
                      </div>
                      <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-white/60">
                        0{i + 1}
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-display font-semibold">{c.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                      <div className="mt-6 flex gap-2">
                        <Button asChild size="sm" className="rounded-full bg-primary-gradient text-primary-foreground">
                          <Link to="/inquiry">Inquire <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="rounded-full">
                          <a href={whatsappLink(`Hello, I need a quote for ${c.name}.`)} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-1.5 h-3.5 w-3.5" /> WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
