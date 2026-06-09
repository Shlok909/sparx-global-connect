import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cog, Disc3, Settings2, CircleDot, Waypoints, Zap, Compass, Fuel, Search, ArrowRight, MessageCircle } from "lucide-react";
import { CATEGORIES, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Categories — Sparx Auto International" },
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
      <section className="bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative container-px mx-auto max-w-7xl py-20 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">Catalogue</p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl text-balance">
              TVS KING spare parts categories
            </h1>
            <p className="mt-5 max-w-2xl text-white/70 text-lg">
              Eight categories. Hundreds of part numbers. Built for CNG &amp; LPG three-wheelers.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                placeholder="Search categories or parts..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-11 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
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
                    <div className="relative h-40 bg-primary-gradient overflow-hidden">
                      <div className="absolute inset-0 grid-bg opacity-25" />
                      <div className="absolute inset-0 grid place-items-center">
                        <Icon className="h-16 w-16 text-white/95 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{c.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                      <div className="mt-5 flex gap-2">
                        <Button asChild size="sm" className="bg-primary-gradient text-primary-foreground">
                          <Link to="/inquiry">Inquire <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                        </Button>
                        <Button asChild size="sm" variant="outline">
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
