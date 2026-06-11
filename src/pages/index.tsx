import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MessageCircle, Cog, Disc3, Settings2, CircleDot, Waypoints, Zap, Compass, Fuel, ShieldCheck, Globe2, Package, Truck, Network, Wrench, Search, FileText, Send } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CATEGORIES, DIAGRAMS, whatsappLink } from "@/lib/site";
import heroImg from "@/assets/hero-parts.jpg";
import exportBg from "@/assets/export-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const ICONS: Record<string, any> = { Cog, Disc3, Settings2, CircleDot, Waypoints, Zap, Compass, Fuel };

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <About />
      <Categories />
      <CataloguePreview />
      <WhyUs />
      <ExportSection />
      <Process />
      <ContactCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white min-h-[82vh] flex items-start pt-10 md:pt-14">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-55" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" />
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      <div className="relative container-px mx-auto max-w-7xl w-full py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <Reveal className="eyebrow text-primary-glow">Exporting Worldwide</Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.02] text-balance">
                Global Exporter of <br className="hidden md:block" />
                <span className="italic font-display text-primary-glow">TVS KING</span> Spare Parts
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl text-lg text-white/65 leading-relaxed">
                A specialist supplier of CNG &amp; LPG three-wheeler components — engineered for dealers, distributors and international buyers who demand genuine quality.
              </p>
            </Reveal>
            <Reveal delay={360} className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-charcoal hover:bg-white/90 rounded-full h-12 px-7 text-base font-semibold group">
                <Link to="/catalogue">
                  View Catalogue
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 rounded-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white text-base">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact on WhatsApp
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={400} className="lg:col-span-4 space-y-6">
            <div className="border-l border-white/15 pl-6 space-y-6">
              {[
                { t: "Genuine OE-grade", d: "Original equipment quality across every category." },
                { t: "Dealer-first pricing", d: "Margin-protected supply for distributors and wholesalers." },
                { t: "Worldwide logistics", d: "Complete export documentation and freight handling." },
              ].map((b) => (
                <div key={b.t}>
                  <p className="font-display text-base font-semibold text-white">{b.t}</p>
                  <p className="mt-1 text-sm text-white/55">{b.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "TVS KING CNG", "Three-Wheeler", "OE-Grade Quality", "Export Worldwide",
    "B2B Distribution", "Dealer Network", "LPG Components", "Genuine Parts",
  ];
  return (
    <div className="border-y border-border bg-card overflow-hidden">
      <div className="flex gap-12 py-5 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-7xl py-28 md:py-40 grid lg:grid-cols-12 gap-16 items-start">
      <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
        <p className="eyebrow text-primary">About</p>
        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-[1.05]">
          Built on precision, trusted by exporters.
        </h2>
      </Reveal>
      <div className="lg:col-span-7 space-y-12">
        <Reveal delay={120}>
          <p className="text-xl md:text-2xl text-foreground/85 leading-[1.5] font-display font-medium">
            Sparx Auto International is a focused export house supplying genuine TVS KING three-wheeler spare parts — with deep specialisation in CNG &amp; LPG autorickshaw applications.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We work directly with dealers, distributors and wholesalers in international markets where reliability and consistent supply matter. Every component meets original equipment specification — no compromises, no substitutions.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { i: ShieldCheck, t: "Export quality", d: "OE-grade components only." },
            { i: Package, t: "Genuine parts", d: "Sourced from verified makers." },
            { i: Network, t: "Dealer support", d: "Long-term partnerships." },
            { i: Truck, t: "Worldwide shipping", d: "Trusted freight handling." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={180 + i * 60}>
              <div className="bg-card p-7 h-full group hover:bg-secondary transition-colors">
                <f.i className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="mt-5 font-display font-semibold">{f.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
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
      <div className="container-px mx-auto max-w-7xl py-28 md:py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal>
            <p className="eyebrow text-primary">Catalogue</p>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-[1.05] max-w-2xl">
              The complete TVS&nbsp;KING parts range.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/products" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/40 pb-1 hover:border-primary transition">
              Browse all categories
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <Reveal key={c.slug} delay={i * 50}>
                <Link to="/products" className="group block h-full bg-card p-8 hover:bg-charcoal hover:text-white transition-colors duration-500 relative">
                  <div className="flex items-start justify-between">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors" strokeWidth={1.5} />
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                  <h3 className="mt-8 text-lg font-display font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/65 transition-colors leading-relaxed">
                    {c.desc}
                  </p>
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
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
    <section className="container-px mx-auto max-w-7xl py-28 md:py-40">
      <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-primary">Technical Reference</p>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-[1.05]">
            Exploded diagrams. Every part, indexed.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <p className="text-muted-foreground leading-relaxed">
            Reference the original TVS KING service catalogue with numbered exploded views across engine, transmission, clutch and chassis assemblies — and request the exact part number you need.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-primary-gradient text-primary-foreground rounded-full h-11 px-6 hover-lift">
              <Link to="/catalogue"><FileText className="mr-2 h-4 w-4" /> Open Catalogue</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-6">
              <Link to="/inquiry"><Send className="mr-2 h-4 w-4" /> Request a Part</Link>
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {DIAGRAMS.map((d, i) => (
          <Reveal key={d.id} delay={i * 100}>
            <Link to="/catalogue" className="group block rounded-2xl overflow-hidden border border-border bg-card hover-lift">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={d.src}
                  alt={d.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-foreground/70 bg-white/80 backdrop-blur px-2.5 py-1 rounded-full border border-border">
                  {d.figure}
                </div>
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                    {CATEGORIES.find((c) => c.slug === d.category)?.name}
                  </p>
                  <h3 className="mt-1.5 font-display font-semibold">{d.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { n: "01", i: ShieldCheck, t: "Genuine quality", d: "Every component meets original equipment specifications." },
    { n: "02", i: Globe2, t: "Export support", d: "Complete documentation, certificates and freight handling." },
    { n: "03", i: Package, t: "Bulk orders", d: "Competitive pricing tiers for wholesalers and distributors." },
    { n: "04", i: Truck, t: "Reliable supply", d: "Consistent inventory and predictable lead times." },
    { n: "05", i: Network, t: "Dealer network", d: "Long-term partnerships with margin protection." },
    { n: "06", i: Wrench, t: "Technical range", d: "Full coverage — engine, drivetrain and chassis." },
  ];
  return (
    <section className="relative bg-charcoal text-white overflow-hidden noise">
      <img src={exportBg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="relative container-px mx-auto max-w-7xl py-28 md:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary-glow">Why Sparx Auto</p>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-[1.05]">
            A premium partner built for export-scale business.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {items.map((f, i) => (
            <Reveal key={f.t} delay={i * 60}>
              <div className="bg-charcoal/85 backdrop-blur-sm p-9 h-full group hover:bg-white/[0.04] transition-colors">
                <div className="flex items-start justify-between">
                  <f.i className="h-7 w-7 text-primary-glow" strokeWidth={1.5} />
                  <span className="text-xs font-display tracking-widest text-white/30">{f.n}</span>
                </div>
                <h3 className="mt-10 text-xl font-display font-semibold text-white">{f.t}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExportSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-28 md:py-40">
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow text-primary">Global Reach</p>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-[1.05]">
            Building B2B partnerships across continents.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our network is expanding into emerging markets where TVS KING CNG &amp; LPG three-wheelers are central to urban mobility. We partner with importers and distributors for long-term, exclusive supply.
          </p>
          <Button asChild className="mt-8 rounded-full h-11 px-6 bg-primary-gradient text-primary-foreground">
            <Link to="/contact">Become a Distributor <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          <WorldMap />
        </Reveal>
      </div>
    </section>
  );
}

function WorldMap() {
  const pins = [
    { x: 510, y: 240 }, { x: 560, y: 260 }, { x: 470, y: 235 }, { x: 480, y: 280 },
    { x: 580, y: 320 }, { x: 260, y: 290 }, { x: 600, y: 270 }, { x: 470, y: 200 },
  ];
  return (
    <div className="relative rounded-3xl border border-border bg-card shadow-card-soft p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg viewBox="0 0 1000 500" className="relative w-full h-auto">
        <defs>
          <radialGradient id="pinGlow">
            <stop offset="0%" stopColor="oklch(0.56 0.12 152)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.56 0.12 152)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g fill="oklch(0.36 0.08 156 / 0.28)">
          {Array.from({ length: 1200 }).map((_, i) => {
            const x = (i * 73) % 1000;
            const y = (i * 131) % 500;
            const land =
              (x > 200 && x < 360 && y > 180 && y < 360) ||
              (x > 440 && x < 540 && y > 150 && y < 340) ||
              (x > 540 && x < 700 && y > 130 && y < 330) ||
              (x > 720 && x < 820 && y > 320 && y < 400);
            return land ? <circle key={i} cx={x} cy={y} r={1.6} /> : null;
          })}
        </g>
        {pins.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={22} fill="url(#pinGlow)" />
            <circle cx={p.x} cy={p.y} r={4.5} fill="oklch(0.36 0.08 156)" />
            <circle cx={p.x} cy={p.y} r={4.5} fill="none" stroke="oklch(0.36 0.08 156)" strokeOpacity="0.4">
              <animate attributeName="r" from="5" to="20" dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" from="0.5" to="0" dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
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
      <div className="container-px mx-auto max-w-7xl py-28 md:py-40">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-primary">Inquiry Process</p>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-[1.05]">
            From inquiry to delivery — in four steps.
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <div className="relative h-full p-8 bg-card group hover:bg-charcoal hover:text-white transition-colors duration-500">
                <span className="font-display text-sm tracking-widest text-primary">0{i + 1}</span>
                <s.i className="mt-10 h-7 w-7 text-foreground group-hover:text-primary-glow transition-colors" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-display font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/60 transition-colors">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-charcoal text-white p-12 md:p-20 noise">
          <img src={ctaBg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="absolute inset-0 bg-mesh opacity-60" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="eyebrow text-primary-glow">Let&apos;s Talk</p>
              <h3 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-balance">
                Place your first export order.
              </h3>
              <p className="mt-5 text-white/65 max-w-lg">
                Talk to our export desk — get pricing, MOQ details and lead times within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="h-12 px-7 rounded-full bg-white text-charcoal hover:bg-white/90">
                <Link to="/inquiry">Start Inquiry <ArrowUpRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
