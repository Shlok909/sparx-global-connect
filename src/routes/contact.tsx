import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sparx Auto International" },
      { name: "description", content: "Get in touch with Sparx Auto International for TVS KING spare parts inquiries, dealership and bulk orders." },
      { property: "og:title", content: "Contact Sparx Auto International" },
      { property: "og:description", content: "Talk to our export desk." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <SiteLayout>
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative container-px mx-auto max-w-7xl py-28 md:py-36">
          <Reveal>
            <p className="eyebrow text-primary-glow">Contact</p>
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl leading-[1.02] text-balance">
              Talk to our export desk.
            </h1>
            <p className="mt-6 max-w-2xl text-white/65 text-lg">
              We respond to every inquiry within 24 hours, worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-3">
          {[
            { i: Phone, t: "Phone", v: SITE.phone, href: `tel:${SITE.phone}` },
            { i: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { i: MessageCircle, t: "WhatsApp", v: "Chat with our team", href: whatsappLink() },
            { i: MapPin, t: "Address", v: SITE.address },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <a
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex gap-5 p-6 rounded-2xl border border-border bg-card hover:bg-secondary transition-colors group"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.i className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{c.t}</p>
                  <p className="mt-1 font-display font-semibold">{c.v}</p>
                </div>
              </a>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <div className="rounded-2xl overflow-hidden border border-border h-56 bg-secondary grid place-items-center text-muted-foreground text-sm noise">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto text-primary" strokeWidth={1.5} />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] font-semibold">Map embed</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                toast.success("Inquiry sent. We'll be in touch within 24 hours.");
                (e.target as HTMLFormElement).reset();
              }, 800);
            }}
            className="p-8 md:p-10 rounded-3xl border border-border bg-card shadow-card-soft space-y-5"
          >
            <div>
              <p className="eyebrow text-primary">Get in touch</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">Send us a message</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input required name="name" placeholder="Full name" className="h-11" />
              <Input required name="company" placeholder="Company" className="h-11" />
              <Input required type="email" name="email" placeholder="Email" className="h-11" />
              <Input required name="country" placeholder="Country" className="h-11" />
            </div>
            <Input name="subject" placeholder="Subject" className="h-11" />
            <Textarea required name="message" placeholder="Tell us what parts you need..." rows={6} />
            <Button type="submit" size="lg" disabled={loading} className="h-12 px-7 rounded-full bg-primary-gradient text-primary-foreground hover-lift">
              {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Inquiry</>}
            </Button>
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
