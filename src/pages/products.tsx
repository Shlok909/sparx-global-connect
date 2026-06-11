import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { twoWheelers } from "@/data/twoWheelers";
import { threeWheelers, FUEL_CATEGORIES } from "@/data/threeWheelers";
import { TwoWheelersSection } from "@/components/TwoWheelersSection";
import { ThreeWheelersSection } from "@/components/ThreeWheelersSection";

export default function ProductsPage() {
  const [q, setQ] = useState("");

  const lowerQ = q.toLowerCase();

  const filteredTwoWheelers = twoWheelers.filter(
    (v) =>
      v.name.toLowerCase().includes(lowerQ) ||
      v.description.toLowerCase().includes(lowerQ)
  );

  const filteredThreeWheelers = FUEL_CATEGORIES.map((fuelType) => {
    const matchesFuelType = fuelType.toLowerCase().includes(lowerQ);

    const vehicles = threeWheelers[fuelType].filter(
      (v) =>
        matchesFuelType ||
        v.name.toLowerCase().includes(lowerQ) ||
        v.description.toLowerCase().includes(lowerQ)
    );

    return { type: fuelType, vehicles };
  }).filter((c) => c.vehicles.length > 0);

  const noResults = filteredTwoWheelers.length === 0 && filteredThreeWheelers.length === 0;

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
              Spare parts by vehicle model.
            </h1>
            <p className="mt-6 max-w-2xl text-white/65 text-lg">
              Choose your vehicle to explore the complete spare parts catalogue.
              Two wheelers, three wheelers and beyond.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                placeholder="Search vehicles or fuel types..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-11 h-12 rounded-full bg-white/10 border-white/15 text-white placeholder:text-white/50 focus-visible:ring-primary-glow"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {noResults ? (
        <section className="container-px mx-auto max-w-7xl py-20">
          <p className="text-center text-muted-foreground py-20">
            No vehicles match your search.
          </p>
        </section>
      ) : (
        <>
          <TwoWheelersSection vehicles={filteredTwoWheelers} />
          <ThreeWheelersSection categories={filteredThreeWheelers} />
        </>
      )}
    </SiteLayout>
  );
}
