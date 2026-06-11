export interface Vehicle {
  id: string;
  name: string;
  image: string;
  description: string;
  catalogue: string;
}

export const twoWheelers: Vehicle[] = [
  {
    id: "bajaj-boxer",
    name: "Bajaj Boxer",
    image: "/images/bajaj-boxer.jpg",
    description: "Durable commuter motorcycle spare parts.",
    catalogue: "https://bajaj.club/catalog_file/Boxer-150-X-Off-Roader.pdf?utm_source=chatgpt.com",
  },
  {
    id: "tvs-hlx",
    name: "TVS HLX",
    image: "/images/tvs-hlx.jpg",
    description: "Reliable workhorse motorcycle components.",
    catalogue: "https://www.scribd.com/document/515257366/TVS-Star-HLX150-Parts-Catalogue",
  },
  {
    id: "Haojue Motorcycle",
    name: "Haojue Motorcycle",
    image: "/images/haojue.jpg",
    description: "Two-wheeler powerhouse spare parts range.",
    catalogue: "https://www.scribd.com/document/741542883/HAOJUE-HJ125-16N",
  },
  {
    id: "honda-cg125",
    name: "Honda CG125",
    image: "/images/honda-cg125.jpg",
    description: "Classic commuter genuine replacement parts.",
    catalogue: "https://www.scribd.com/document/958993848/cg125s",
  },
  {
    id: "yamaha-ybr",
    name: "Yamaha YBR",
    image: "/images/yamaha-ybr.jpg",
    description: "Performance motorcycle spare parts catalogue.",
    catalogue: "https://www.scribd.com/doc/232061398/yamaha-ybr-125G-parts-catalogue",
  },
];
