import { Reveal } from "@/components/Reveal";
import { FuelCategorySection } from "@/components/FuelCategorySection";
import type { FuelType } from "@/data/threeWheelers";
import type { Vehicle } from "@/data/twoWheelers";

interface ThreeWheelersSectionProps {
  categories: { type: FuelType; vehicles: Vehicle[] }[];
}

export function ThreeWheelersSection({ categories }: ThreeWheelersSectionProps) {
  const hasVehicles = categories.some((c) => c.vehicles.length > 0);

  if (!hasVehicles) {
    return null;
  }

  return (
    <section className="container-px mx-auto max-w-7xl py-20 border-t border-border mt-10">
      {/* Section header */}
      <Reveal>
        <div className="mb-14">
          <p className="eyebrow text-primary">Three Wheelers</p>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-balance leading-[1.05]">
            Three Wheelers
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Browse spare parts catalogues based on fuel system variants.
          </p>
        </div>
      </Reveal>

      {/* Fuel Categories */}
      <div className="space-y-16">
        {categories.map(({ type, vehicles }) => (
          <FuelCategorySection key={type} title={type} vehicles={vehicles} />
        ))}
      </div>
    </section>
  );
}
