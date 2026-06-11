import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MessageCircle, Bike } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import type { Vehicle } from "@/data/twoWheelers";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
  return (
    <Reveal delay={index * 80}>
      <div className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover-lift">
        {/* Image container */}
        <div className="relative h-52 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-80" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Vehicle image — falls back to icon placeholder */}
          {vehicle.image && vehicle.image !== "/images/" ? (
            <img
              src={vehicle.image}
              alt={vehicle.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Hide broken image, show placeholder icon instead
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const sibling = e.currentTarget.nextElementSibling;
                if (sibling) (sibling as HTMLElement).style.display = "grid";
              }}
            />
          ) : null}

          {/* Placeholder icon (shown when image is missing or fails to load) */}
          <div
            className="absolute inset-0 place-items-center"
            style={{ display: "grid" }}
          >
            <Bike
              className="h-16 w-16 text-white/90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700"
              strokeWidth={1.25}
            />
          </div>

          {/* Card index badge */}
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-white/60">
            0{index + 1}
          </div>

          {/* Subtle bottom gradient for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="text-xl font-display font-semibold">{vehicle.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {vehicle.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary-gradient text-primary-foreground"
            >
              <a
                href={vehicle.catalogue}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Catalogue{" "}
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="rounded-full">
              <a
                href={whatsappLink(
                  `Hello, I need spare parts information for ${vehicle.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
