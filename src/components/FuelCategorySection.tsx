import { Reveal } from "@/components/Reveal";
import { VehicleCard } from "@/components/VehicleCard";
import type { Vehicle } from "@/data/twoWheelers";

interface FuelCategorySectionProps {
  title: string;
  vehicles: Vehicle[];
}

export function FuelCategorySection({ title, vehicles }: FuelCategorySectionProps) {
  if (vehicles.length === 0) return null;

  return (
    <div className="mt-16 first:mt-0">
      <Reveal>
        <div className="flex items-center gap-6 mb-10">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle, i) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
        ))}
      </div>
    </div>
  );
}
