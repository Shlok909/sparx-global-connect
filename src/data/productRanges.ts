import { Bike, Car, Truck, Wrench, CircuitBoard, Cog } from "lucide-react";

export const PRODUCT_RANGES = [
  {
    name: "2 Wheeler Parts",
    icon: Bike,
    summary: "Engine, braking & electrical",
    note: "Motorcycle components",
    to: "/products#spare-parts",
    keywords: "bike motorcycle two wheels",
    action: "Explore parts",
  },
  {
    name: "3 Wheeler Parts",
    icon: Cog,
    summary: "Powertrain, chassis & suspension",
    note: "Passenger & cargo applications",
    to: "/products#spare-parts",
    keywords: "auto rickshaw three wheels cng lpg petrol electric",
    action: "Explore parts",
  },
  {
    name: "4 Wheeler Parts",
    icon: Car,
    summary: "Everyday service & replacement",
    note: "Passenger vehicle components",
    to: "/inquiry",
    keywords: "four wheels passenger car",
    action: "Enquire about parts",
  },
  {
    name: "Commercial Vehicle Parts",
    icon: Truck,
    summary: "Built around your fleet needs",
    note: "Light & heavy commercial vehicles",
    to: "/inquiry",
    keywords: "truck light commercial vehicle lcv bus",
    action: "Enquire about parts",
  },
  {
    name: "Workshop Equipment",
    icon: Wrench,
    summary: "Tools & garage equipment",
    note: "Service and maintenance solutions",
    to: "/inquiry",
    keywords: "workshop tool garage compressor lift",
    action: "Enquire about equipment",
  },
  {
    name: "Advanced Telematics",
    icon: CircuitBoard,
    summary: "Intangles fleet intelligence",
    note: "For BS-IV & BS-VI vehicles",
    to: "/products/telematics",
    keywords:
      "intangles iot obd predictive vehicle health fuel adblue tracking driver fleet bs iv vi",
    action: "Discover the solution",
  },
] as const;
