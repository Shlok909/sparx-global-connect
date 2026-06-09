import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Target, Eye, Award, Users, Truck, ArrowRight } from "lucide-react";
import warehouse from "@/assets/about-warehouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sparx Auto International" },
      { name: "description", content: "Specialist exporter of genuine TVS KING three-wheeler CNG & LPG spare parts with worldwide distribution." },
      { property: "og:title", content: "About Sparx Auto International" },
      { property: "og:description", content: "Specialist exporter of TVS KING spare parts." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="relative container-px mx-auto max-w-7xl py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">About Us</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl text-balance">
              Specialist exporters of TVS KING three-wheeler spare parts
            </h1>
            <p className="mt-6 max-w-2xl text-white/70 text-lg">
              A focused export house serving dealers and distributors with genuine, OE-grade components.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img src={warehouse} alt="Warehouse" loading="lazy" className="rounded-2xl shadow-elegant w-full h-[480px] object-cover" />
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Story</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">Engineered for export, built on trust</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Sparx Auto International was founded with a focused mission: to deliver genuine TVS KING three-wheeler spare parts to international markets where CNG and LPG autorickshaws are critical urban transport. Over the years we have built a tight supply chain, dealer-friendly pricing structure, and an export operation that ships reliably to over 25 countries.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We don&apos;t sell generic — we specialise. That means every distributor we work with gets the depth of catalogue, technical support, and reliable supply that scales their business.
          </p>
        </Reveal>
      </section>

      <section className="bg-subtle-gradient border-y border-border">
        <div className="container-px mx-auto max-w-7xl py-24 grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Mission", d: "Be the most reliable global source for TVS KING three-wheeler parts." },
            { i: Eye, t: "Vision", d: "Power affordable urban mobility across emerging markets." },
            { i: Award, t: "Values", d: "Genuine quality, transparent pricing, long-term partnerships." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 100}>
              <div className="p-8 rounded-2xl bg-card border border-border hover-lift h-full">
                <div className="h-12 w-12 rounded-lg bg-primary-gradient text-primary-foreground grid place-items-center">
                  <b.i className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{b.t}</h3>
                <p className="mt-2 text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-balance max-w-2xl">What sets us apart</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: ShieldCheck, t: "OE Quality", d: "Original equipment grade across every category." },
            { i: Users, t: "Dealer-First", d: "Margin-protected pricing for distributors." },
            { i: Truck, t: "Global Logistics", d: "End-to-end export and freight handling." },
            { i: Award, t: "Trusted Brand", d: "Years of consistent supply and zero compromise." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className="p-6 rounded-xl bg-card border border-border hover-lift">
                <f.i className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 p-10 rounded-2xl bg-primary-gradient text-primary-foreground flex flex-col md:flex-row gap-6 md:items-center justify-between shadow-elegant">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Partner with Sparx Auto</h3>
              <p className="opacity-90 mt-2">Become an authorised distributor in your region.</p>
            </div>
            <Button asChild size="lg" className="h-12 px-6 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Talk to our team <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
