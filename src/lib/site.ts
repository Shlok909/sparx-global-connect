export const SITE = {
  name: "Sparx Auto International",
  short: "Sparx Auto",
  tagline: "Automotive Spare Parts & Advanced Telematics",
  contacts: [
    { name: "Alta Shah", phone: "+91 9405023595" },
    { name: "Deepak Sane", phone: "+91 8484803595" },
  ],
  phone: "+91 9405023595",
  whatsapp: "919405023595",
  emails: ["deepaksane@sparxaipl.com", "altafkshah@sparxaipl.com"],
  address: "Nagpur, Maharashtra, India",
};

export const whatsappLink = (
  msg = "Hello, I would like to inquire about your spare parts and fleet telematics solutions.",
) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const CATEGORIES = [
  {
    slug: "engine",
    name: "Engine Parts",
    icon: "Cog",
    desc: "Crankshafts, pistons, cylinders, gaskets and complete engine assemblies.",
  },
  {
    slug: "clutch",
    name: "Clutch Parts",
    icon: "Disc3",
    desc: "Clutch plates, pressure plates, release bearings and full kits.",
  },
  {
    slug: "gearbox",
    name: "Gearbox Parts",
    icon: "Settings2",
    desc: "Gears, shafts, synchronizers and complete transmission components.",
  },
  {
    slug: "brake",
    name: "Brake Parts",
    icon: "CircleDot",
    desc: "Brake shoes, drums, master cylinders, cables and hydraulic kits.",
  },
  {
    slug: "suspension",
    name: "Suspension Parts",
    icon: "Waypoints",
    desc: "Shock absorbers, leaf springs, bushes and suspension assemblies.",
  },
  {
    slug: "electrical",
    name: "Electrical Parts",
    icon: "Zap",
    desc: "Starter motors, alternators, switches, wiring harnesses and CDI units.",
  },
  {
    slug: "steering",
    name: "Steering Parts",
    icon: "Compass",
    desc: "Steering columns, tie rods, drag links and complete steering kits.",
  },
  {
    slug: "fuel",
    name: "Fuel System Parts",
    icon: "Fuel",
    desc: "CNG & LPG kits, regulators, injectors, fuel pumps and filters.",
  },
] as const;
