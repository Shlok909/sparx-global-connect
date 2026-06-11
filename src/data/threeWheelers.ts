import type { Vehicle } from "@/data/twoWheelers";

export const FUEL_CATEGORIES = ["LPG", "CNG", "Petrol", "Electric"] as const;
export type FuelType = (typeof FUEL_CATEGORIES)[number];

export const threeWheelers: Record<FuelType, Vehicle[]> = {
  LPG: [
    {
      id: "tvs-king-lpg",
      name: "TVS King LPG",
      image: "/images/tvs-king-lpg.jpg",
      description: "LPG three-wheeler spare parts catalogue.",
      catalogue: "https://www.scribd.com/document/354570626/TVS-King-Catalogue ",
    },
    {
      id: "bajaj-re-lpg",
      name: "Bajaj RE LPG",
      image: "/images/bajaj-re-lpg.jpg",
      description: "Bajaj RE LPG autorickshaw components.",
      catalogue: "https://www.scribd.com/document/890172668/01-SPC-4S-ALF-MF-BF-OBD2B",
    },
    {
      id: "piaggio-ape-lpg",
      name: "Piaggio Ape LPG",
      image: "/images/piaggio-ape-lpg.jpg",
      description: "Piaggio Ape LPG genuine spare parts.",
      catalogue: "https://www.scribd.com/document/473830798/PIAGGIO-APE-DLX-1-2016",
    },
  ],
  CNG: [
    {
      id: "tvs-king-deluxe-cng",
      name: "TVS King Deluxe CNG",
      image: "/images/tvs-king-deluxe-cng.jpg",
      description: "TVS King Deluxe CNG parts catalogue.",
      catalogue: "https://www.slideshare.net/slideshow/tvs-kingcatalogue/249505736?utm_source=clipboard_share_button&utm_campaign=slideshare_make_sharing_viral_v2&utm_variation=variant&utm_medium=share",
    },
    {
      id: "bajaj-re-cng",
      name: "Bajaj RE CNG",
      image: "/images/bajaj-re-cng.jpg",
      description: "Bajaj RE CNG autorickshaw spare parts.",
      catalogue: "https://www.scribd.com/document/890172668/01-SPC-4S-ALF-MF-BF-OBD2B",
    },
    {
      id: "piaggio-ape-cng",
      name: "Piaggio Ape CNG",
      image: "/images/piaggio-ape-cng.jpg",
      description: "Piaggio Ape CNG three-wheeler components.",
      catalogue: "https://www.scribd.com/document/473830798/PIAGGIO-APE-DLX-1-2016",
    },
  ],
  Petrol: [
    {
      id: "bajaj-re-4s-petrol",
      name: "Bajaj RE 4S Petrol",
      image: "/images/bajaj-re-4s-petrol.jpg",
      description: "Bajaj RE 4-stroke petrol spare parts.",
      catalogue: "https://www.scribd.com/document/409570183/RE-4S-NUEVO-MANUAL-DE-PARTES-pdf",
    },
    {
      id: "tvs-king-deluxe",
      name: "TVS King Deluxe",
      image: "/images/tvs-king-deluxe.jpg",
      description: "TVS King Deluxe petrol components.",
      catalogue: "https://www.slideshare.net/slideshow/tvs-kingcatalogue/249505736?utm_source=clipboard_share_button&utm_campaign=slideshare_make_sharing_viral_v2&utm_variation=variant&utm_medium=share",
    },
    {
      id: "piaggio-ape-city",
      name: "Piaggio Ape City",
      image: "/images/piaggio-ape-city.jpg",
      description: "Piaggio Ape City petrol spare parts range.",
      catalogue: "https://www.scribd.com/document/615148453/6-APE-CITY-PLUS-BS6-NOV-2020",
    },
  ],
  Electric: [
    {
      id: "phoenix-electric-keke",
      name: "Phoenix Electric Keke",
      image: "/images/phoenix-electric-keke.jpg",
      description: "Phoenix electric three-wheeler spare parts.",
      catalogue: "#",
    },
    {
      id: "bajaj-re-electric",
      name: "Bajaj RE Electric",
      image: "/images/bajaj-re-electric.jpg",
      description: "Bajaj RE electric autorickshaw components.",
      catalogue: "https://www.scribd.com/document/890172687/BAJAJ-EV-SPC-Apr-25",
    },
    {
      id: "piaggio-ape-e-city",
      name: "Piaggio Ape E-City",
      image: "/images/piaggio-ape-e-city.jpg",
      description: "Piaggio Ape E-City electric spare parts.",
      catalogue: "https://www.scribd.com/document/615148446/7-PIAGGIO-APE-E-CITY-CATALOGUE",
    },
  ],
};
