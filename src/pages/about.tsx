import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Truck, Award, ArrowUpRight } from "lucide-react";
import warehouse from "@/assets/about-warehouse.jpg";

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative container-px mx-auto max-w-7xl py-32 md:py-40">
          <Reveal>
            <p className="eyebrow text-primary-glow">About</p>
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl leading-[1.02] text-balance">
              A focused export house for <span className="italic font-display text-primary-glow">TVS KING</span> spare parts.
            </h1>
            <p className="mt-8 max-w-2xl text-white/65 text-lg leading-relaxed">
              We exist to do one thing exceptionally well — supply genuine TVS KING three-wheeler parts to dealers and distributors worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-28 grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-6">
          <img src={warehouse} alt="" loading="lazy" className="rounded-3xl w-full h-[560px] object-cover shadow-elegant" />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6">
          <p className="eyebrow text-primary">What We Do</p>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-balance">
            Engineered for export, built on trust.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sparx Auto International specialises in genuine TVS KING three-wheeler spare parts, with a deep focus on CNG and LPG autorickshaw applications. We supply dealers, distributors and wholesalers in international markets where reliability and consistent supply are non-negotiable.
            </p>
            <p>
              We don&apos;t sell generic — we specialise. That means every distributor we work with gets depth of catalogue, technical support, and reliable supply to scale their business.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-subtle-gradient border-y border-border">
        <div className="container-px mx-auto max-w-7xl py-28">
          <Reveal>
            <p className="eyebrow text-primary">Principles</p>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-balance max-w-3xl">
              What sets us apart.
            </h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              { i: ShieldCheck, t: "OE-grade quality", d: "Original equipment standard across every category." },
              { i: Users, t: "Dealer-first", d: "Margin-protected pricing for distributors." },
              { i: Truck, t: "Global logistics", d: "End-to-end export and freight handling." },
              { i: Award, t: "Specialist focus", d: "TVS KING three-wheelers, nothing else." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="bg-card p-8 h-full group hover:bg-charcoal hover:text-white transition-colors duration-500">
                  <f.i className="h-7 w-7 text-primary group-hover:text-primary-glow transition-colors" strokeWidth={1.5} />
                  <h3 className="mt-10 font-display font-semibold">{f.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground group-hover:text-white/60 transition-colors">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary-gradient text-primary-foreground p-12 md:p-16 flex flex-col md:flex-row gap-8 md:items-center justify-between shadow-elegant">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Partner with Sparx Auto.
              </h3>
              <p className="mt-3 opacity-90">Become an authorised distributor in your region.</p>
            </div>
            <Button asChild size="lg" className="h-12 px-7 rounded-full bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Talk to our team <ArrowUpRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
