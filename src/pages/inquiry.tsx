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

export default function InquiryPage() {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (slug: string) =>
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  return (
    <SiteLayout>
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative container-px mx-auto max-w-7xl py-28 md:py-36">
          <Reveal>
            <p className="eyebrow text-primary-glow">Inquiry</p>
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl leading-[1.02] text-balance">
              Request a quotation.
            </h1>
            <p className="mt-6 max-w-2xl text-white/65 text-lg">
              Tell us what parts you need — we&apos;ll reply within 24 hours with pricing, MOQ and lead time.
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
            className="p-8 md:p-12 rounded-3xl border border-border bg-card shadow-card-soft space-y-10"
          >
            <div className="space-y-5">
              <p className="eyebrow text-primary">01 — Your Details</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Input required name="name" placeholder="Full name *" className="h-11" />
                <Input required name="company" placeholder="Company *" className="h-11" />
                <Input required type="email" name="email" placeholder="Email *" className="h-11" />
                <Input required name="phone" placeholder="Phone / WhatsApp *" className="h-11" />
                <Input required name="country" placeholder="Country *" className="h-11" />
                <Input name="city" placeholder="City" className="h-11" />
              </div>
            </div>

            <div className="space-y-5">
              <p className="eyebrow text-primary">02 — Categories of Interest</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {CATEGORIES.map((c) => (
                  <label
                    key={c.slug}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      selected.includes(c.slug)
                        ? "border-primary bg-primary/5 shadow-card-soft"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    <Checkbox checked={selected.includes(c.slug)} onCheckedChange={() => toggle(c.slug)} />
                    <div>
                      <p className="text-sm font-display font-semibold">{c.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="eyebrow text-primary">03 — Requirement Details</p>
              <Input name="partNumbers" placeholder="Specific part numbers (optional)" className="h-11" />
              <Textarea required name="message" rows={5} placeholder="Describe quantities, target price, expected delivery..." />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit" size="lg" disabled={loading} className="h-12 px-7 rounded-full bg-primary-gradient text-primary-foreground hover-lift">
                {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Submit Inquiry</>}
              </Button>
              <Button asChild type="button" variant="outline" size="lg" className="h-12 px-7 rounded-full">
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
