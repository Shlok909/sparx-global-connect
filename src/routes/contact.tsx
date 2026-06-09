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
      <section className="bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative container-px mx-auto max-w-7xl py-20 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">Get In Touch</p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl text-balance">
              Talk to our export desk
            </h1>
            <p className="mt-5 max-w-2xl text-white/70 text-lg">
              We respond to every inquiry within 24 hours, worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2 space-y-4">
          {[
            { i: Phone, t: "Phone", v: SITE.phone, href: `tel:${SITE.phone}` },
            { i: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { i: MessageCircle, t: "WhatsApp", v: "Chat with our team", href: whatsappLink() },
            { i: MapPin, t: "Address", v: SITE.address },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex gap-4 p-5 rounded-xl border border-border bg-card hover-lift"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                <c.i className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.t}</p>
                <p className="mt-0.5 font-semibold">{c.v}</p>
              </div>
            </a>
          ))}
          <div className="rounded-xl overflow-hidden border border-border h-64 bg-muted grid place-items-center text-muted-foreground text-sm">
            {/* Map placeholder */}
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto text-primary" />
              <p className="mt-2">Google Maps integration placeholder</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                toast.success("Inquiry sent! We'll be in touch within 24 hours.");
                (e.target as HTMLFormElement).reset();
              }, 800);
            }}
            className="p-8 md:p-10 rounded-2xl border border-border bg-card shadow-card-soft space-y-5"
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input required name="name" placeholder="Full name" />
              <Input required name="company" placeholder="Company" />
              <Input required type="email" name="email" placeholder="Email" />
              <Input required name="country" placeholder="Country" />
            </div>
            <Input name="subject" placeholder="Subject" />
            <Textarea required name="message" placeholder="Tell us what parts you need..." rows={6} />
            <Button type="submit" size="lg" disabled={loading} className="h-12 px-6 bg-primary-gradient text-primary-foreground hover-lift">
              {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Inquiry</>}
            </Button>
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
