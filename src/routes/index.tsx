import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Cog, Disc3, Settings2, CircleDot, Waypoints, Zap, Compass, Fuel, ShieldCheck, Globe2, Package, Truck, Network, Wrench, Search, FileText, Send, MapPin, Quote } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CATEGORIES, whatsappLink } from "@/lib/site";
import heroImg from "@/assets/hero-parts.jpg";
import warehouseImg from "@/assets/about-warehouse.jpg";
import catalogueImg from "@/assets/catalogue-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparx Auto International — Global Exporter of TVS KING Spare Parts" },
      { name: "description", content: "Reliable supplier of TVS KING CNG & LPG three-wheeler spare parts to dealers, distributors and wholesalers worldwide." },
      { property: "og:title", content: "Sparx Auto International" },
      { property: "og:description", content: "Global exporter of genuine TVS KING three-wheeler spare parts." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const ICONS: Record<string, any> = { Cog, Disc3, Settings2, CircleDot, Waypoints, Zap, Compass, Fuel };

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Categories />
      <CataloguePreview />
      <WhyUs />
      <ExportSection />
      <Process />
      <Testimonials />
      <ContactCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-55" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero-gradient mix-blend-multiply" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      </div>
      <div className="relative container-px mx-auto max-w-7xl py-28 md:py-40 lg:py-48">
        <Reveal className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          Exporting Worldwide
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance max-w-4xl leading-[1.05]">
            Global Exporter of <span className="text-primary-glow">TVS KING</span> Spare Parts
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            Reliable CNG &amp; LPG three-wheeler spare parts supplier — built for dealers, distributors and international buyers who demand genuine quality.
          </p>
        </Reveal>
        <Reveal delay={360} className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground shadow-elegant hover-lift rounded-md h-12 px-6 text-base font-semibold">
            <Link to="/catalogue"><span>View Catalogue</span><ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-6 rounded-md border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white text-base">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Contact on WhatsApp
            </a>
          </Button>
        </Reveal>

        <Reveal delay={500} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden glass-dark max-w-3xl">
          {[
            { v: "500+", l: "SKUs in catalogue" },
            { v: "25+", l: "Countries served" },
            { v: "100%", l: "Genuine quality" },
            { v: "24/7", l: "Dealer support" },
          ].map((s) => (
            <div key={s.l} className="bg-charcoal/60 px-5 py-5">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary-glow">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-white/55 mt-1">{s.l}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-7xl py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <Reveal className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
          <img src={warehouseImg} alt="Sparx Auto warehouse" loading="lazy" className="w-full h-[420px] md:h-[520px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col bg-primary-gradient text-primary-foreground rounded-xl shadow-glow p-6 w-56">
          <span className="text-4xl font-display font-bold">10+</span>
          <span className="text-sm opacity-90 mt-1">Years of export-grade supply</span>
        </div>
      </Reveal>
      <div>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About the Company</p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Built on precision, trusted by exporters worldwide
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sparx Auto International is a specialist exporter of genuine TVS KING three-wheeler spare parts, with deep focus on CNG &amp; LPG autorickshaw applications. We supply dealers, distributors and wholesalers across emerging markets with parts that meet original equipment quality.
          </p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {[
            { i: ShieldCheck, t: "Export Quality", d: "OE-grade components, fully inspected." },
            { i: Package, t: "Genuine Parts", d: "Sourced from verified manufacturers." },
            { i: Network, t: "Dealer Support", d: "Bulk pricing & long-term partnerships." },
            { i: Truck, t: "Worldwide Shipping", d: "Trusted freight and documentation." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={150 + i * 80}>
              <div className="flex gap-3 p-4 rounded-lg border border-border bg-card hover-lift">
                <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center shrink-0">
                  <f.i className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{f.t}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="bg-subtle-gradient border-y border-border">
      <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Product Categories</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-2xl">
              Complete spare parts range for TVS KING
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Browse all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <Link to="/products" className="group block h-full rounded-xl bg-card border border-border p-6 hover-lift relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-lg bg-primary-gradient text-primary-foreground grid place-items-center shadow-card-soft">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{c.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    <div className="mt-5 inline-flex items-center text-xs font-semibold text-primary uppercase tracking-wider">
                      Explore <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CataloguePreview() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <Reveal className="order-2 lg:order-1">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Interactive Catalogue</p>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          Technical exploded diagrams at your fingertips
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
          Browse engine, transmission, clutch and chassis assemblies with detailed part references. Find the exact part by number — or download the full PDF catalogue for offline reference.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground hover-lift rounded-md h-12 px-6">
            <Link to="/catalogue"><FileText className="mr-2 h-4 w-4" /> Open Catalogue</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-6 rounded-md">
            <a href="#" download><Search className="mr-2 h-4 w-4" /> Download PDF</a>
          </Button>
        </div>
      </Reveal>
      <Reveal delay={120} className="order-1 lg:order-2">
        <div className="relative group rounded-2xl overflow-hidden border border-border shadow-elegant bg-card">
          <img src={catalogueImg} alt="Catalogue technical preview" loading="lazy" className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">Figure 01</p>
              <p className="font-semibold mt-1">Engine Assembly — TVS KING CNG</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-white/15 backdrop-blur">Zoom on hover</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function WhyUs() {
  const items = [
    { i: ShieldCheck, t: "Genuine Quality Parts", d: "Every component meets original equipment specifications." },
    { i: Globe2, t: "Export Support", d: "Complete documentation, certificates and freight handling." },
    { i: Package, t: "Bulk Orders", d: "Competitive pricing tiers for wholesalers and distributors." },
    { i: Truck, t: "Reliable Supply", d: "Consistent inventory and predictable lead times." },
    { i: Network, t: "Dealer Network", d: "Long-term partnerships with margin protection." },
    { i: Wrench, t: "Technical Range", d: "Full coverage across engine, drivetrain and chassis." },
  ];
  return (
    <section className="relative bg-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      <div className="relative container-px mx-auto max-w-7xl py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">Why Sparx Auto</p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            A premium partner built for export-scale business
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {items.map((f, i) => (
            <Reveal key={f.t} delay={i * 60}>
              <div className="bg-charcoal p-8 h-full hover:bg-white/[0.03] transition-colors group">
                <div className="h-12 w-12 rounded-lg glass-dark grid place-items-center text-primary-glow group-hover:scale-110 transition-transform">
                  <f.i className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{f.t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExportSection() {
  const regions = ["Africa", "Middle East", "South Asia", "Southeast Asia", "Latin America", "East Europe"];
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <Reveal className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Global Export</p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Building B2B partnerships across continents
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our network is expanding into new markets where TVS KING CNG &amp; LPG three-wheelers are growing fast. We work with importers and distributors to build long-term, exclusive partnerships.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {regions.map((r) => (
              <span key={r} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">{r}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          <WorldMap />
        </Reveal>
      </div>
    </section>
  );
}

function WorldMap() {
  // Approx pins (lat/lng -> svg coords on equirectangular 1000x500)
  const pins = [
    { x: 510, y: 240, label: "India" },
    { x: 560, y: 260, label: "Bangladesh" },
    { x: 470, y: 235, label: "UAE" },
    { x: 480, y: 280, label: "Kenya" },
    { x: 580, y: 320, label: "Indonesia" },
    { x: 260, y: 290, label: "Peru" },
    { x: 600, y: 270, label: "Philippines" },
    { x: 470, y: 200, label: "Egypt" },
  ];
  return (
    <div className="relative rounded-2xl border border-border bg-card shadow-card-soft p-6 md:p-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg viewBox="0 0 1000 500" className="relative w-full h-auto">
        <defs>
          <radialGradient id="pinGlow">
            <stop offset="0%" stopColor="oklch(0.62 0.14 152)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.62 0.14 152)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Dotted continents approximation */}
        <g fill="oklch(0.38 0.09 155 / 0.25)">
          {Array.from({ length: 1200 }).map((_, i) => {
            const x = (i * 73) % 1000;
            const y = ((i * 131) % 500);
            // crude landmass mask
            const land =
              (x > 200 && x < 360 && y > 180 && y < 360) || // Americas
              (x > 440 && x < 540 && y > 150 && y < 340) || // EU/Africa
              (x > 540 && x < 700 && y > 130 && y < 330) || // Asia
              (x > 720 && x < 820 && y > 320 && y < 400); // Oceania
            return land ? <circle key={i} cx={x} cy={y} r={1.6} /> : null;
          })}
        </g>
        {pins.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={22} fill="url(#pinGlow)" />
            <circle cx={p.x} cy={p.y} r={5} fill="oklch(0.62 0.14 152)" />
            <circle cx={p.x} cy={p.y} r={5} fill="none" stroke="oklch(0.62 0.14 152)" strokeOpacity="0.4">
              <animate attributeName="r" from="5" to="18" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" from="0.5" to="0" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Process() {
  const steps = [
    { i: Search, t: "Browse Parts", d: "Find what you need across our full catalogue." },
    { i: Send, t: "Send Inquiry", d: "Share part numbers and quantity requirements." },
    { i: FileText, t: "Get Quotation", d: "Receive a competitive quote with lead time." },
    { i: Globe2, t: "Worldwide Delivery", d: "Doorstep delivery with export documentation." },
  ];
  return (
    <section className="bg-subtle-gradient border-y border-border">
      <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Inquiry Process</p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            From inquiry to delivery in 4 simple steps
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <div className="relative h-full p-7 rounded-xl bg-card border border-border hover-lift">
                <span className="absolute top-4 right-5 text-6xl font-display font-bold text-primary/10 leading-none">0{i + 1}</span>
                <div className="h-11 w-11 rounded-lg bg-primary-gradient text-primary-foreground grid place-items-center shadow-card-soft">
                  <s.i className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Consistent quality on every shipment. Sparx is our default supplier for TVS KING parts.", a: "Distributor, East Africa" },
    { q: "Fast quotations and clean export paperwork. Easy to scale with.", a: "Wholesaler, Middle East" },
    { q: "CNG kit components arrived perfectly packed. Customers very happy.", a: "Dealer, South Asia" },
  ];
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Trusted Partners</p>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          What our partners say
        </h2>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <figure className="h-full p-8 rounded-2xl border border-border bg-card hover-lift relative">
              <Quote className="h-7 w-7 text-primary/30" />
              <blockquote className="mt-4 text-foreground/85 leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">{t.a}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white p-10 md:p-16 shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Ready to place your first export order?
              </h3>
              <p className="mt-4 text-white/70 max-w-lg">
                Talk to our export desk — get pricing, MOQ details and lead times within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="h-12 px-6 bg-primary-gradient text-primary-foreground hover-lift">
                <Link to="/inquiry">Start Inquiry <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
