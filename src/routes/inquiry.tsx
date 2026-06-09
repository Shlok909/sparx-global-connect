import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, MessageCircle } from "lucide-react";
import { CATEGORIES, whatsappLink } from "@/lib/site";
import { toast } from "sonner";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Inquiry — Sparx Auto International" },
      { name: "description", content: "Submit a detailed inquiry for TVS KING spare parts — get a quotation within 24 hours." },
      { property: "og:title", content: "Inquiry — Sparx Auto" },
      { property: "og:description", content: "Submit a bulk parts inquiry." },
      { property: "og:url", content: "/inquiry" },
    ],
    links: [{ rel: "canonical", href: "/inquiry" }],
  }),
  component: InquiryPage,
});

function InquiryPage() {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (slug: string) =>
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  return (
    <SiteLayout>
      <section className="bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative container-px mx-auto max-w-7xl py-20 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">Inquiry Form</p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl text-balance">
              Request a quotation
            </h1>
            <p className="mt-5 max-w-2xl text-white/70 text-lg">
              Tell us what parts you need. We&apos;ll reply within 24 hours with pricing, MOQ and lead time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-4xl py-16">
        <Reveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                toast.success("Inquiry received. We'll send a quote within 24 hours.");
                (e.target as HTMLFormElement).reset();
                setSelected([]);
              }, 900);
            }}
            className="p-8 md:p-10 rounded-2xl border border-border bg-card shadow-card-soft space-y-8"
          >
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Your details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input required name="name" placeholder="Full name *" />
                <Input required name="company" placeholder="Company *" />
                <Input required type="email" name="email" placeholder="Email *" />
                <Input required name="phone" placeholder="Phone / WhatsApp *" />
                <Input required name="country" placeholder="Country *" />
                <Input name="city" placeholder="City" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Categories of interest</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {CATEGORIES.map((c) => (
                  <label
                    key={c.slug}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      selected.includes(c.slug) ? "border-primary bg-primary/5" : "border-border hover:bg-accent/50"
                    }`}
                  >
                    <Checkbox checked={selected.includes(c.slug)} onCheckedChange={() => toggle(c.slug)} />
                    <div>
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Requirement details</h2>
              <Input name="partNumbers" placeholder="Specific part numbers (optional)" />
              <Textarea required name="message" rows={5} placeholder="Describe quantities, target price, expected delivery..." />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit" size="lg" disabled={loading} className="h-12 px-6 bg-primary-gradient text-primary-foreground hover-lift">
                {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Submit Inquiry</>}
              </Button>
              <Button asChild type="button" variant="outline" size="lg" className="h-12 px-6">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Inquire on WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
