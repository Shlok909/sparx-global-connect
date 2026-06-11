import { Reveal } from "@/components/Reveal";
import { VehicleCard } from "@/components/VehicleCard";
import type { Vehicle } from "@/data/twoWheelers";

interface TwoWheelersSectionProps {
  vehicles: Vehicle[];
}

export function TwoWheelersSection({ vehicles }: TwoWheelersSectionProps) {
  if (vehicles.length === 0) {
    return null;
  }

  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      {/* Section header */}
      <Reveal>
        <div className="mb-14">
          <p className="eyebrow text-primary">Two Wheelers</p>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-balance leading-[1.05]">
            Two Wheelers
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Select vehicle models to explore spare parts catalogues.
          </p>
        </div>
      </Reveal>

      {/* Vehicle cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle, i) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
        ))}
      </div>
    </section>
  );
}
