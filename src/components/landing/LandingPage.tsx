import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  ChevronDown,
  Check,
  Cog,
  Diamond,
  ExternalLink,
  Globe2,
  Handshake,
  House,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Truck,
  Users,
  X,
} from "lucide-react";
import { twoWheelers } from "@/data/twoWheelers";
import { threeWheelers } from "@/data/threeWheelers";
import { CATEGORIES, SITE, whatsappLink } from "@/lib/site";
import { SparxWordmark as Wordmark } from "@/components/SparxWordmark";
import "./landing.css";

const RANGES = [
  {
    name: "2 Wheeler Parts",
    image: "two-wheeler.webp",
    brands: "TVS · BAJAJ · HERO · HONDA",
    note: "and more",
    to: "/products",
    keywords: "bike motorcycle two wheels",
    action: "Browse vehicles",
  },
  {
    name: "3 Wheeler Parts",
    image: "three-wheeler.webp",
    brands: "BAJAJ RE · TVS KING · PIAGGIO",
    note: "and more",
    to: "/products",
    keywords: "auto rickshaw three wheels cng lpg",
    action: "Browse vehicles",
  },
  {
    name: "4 Wheeler (Car) Parts",
    image: "four-wheeler.webp",
    brands: "MARUTI · HYUNDAI · TATA",
    note: "and more",
    to: "/inquiry",
    keywords: "four wheels passenger car",
    action: "Enquire about parts",
  },
  {
    name: "LCV & Commercial Parts",
    image: "commercial.webp",
    brands: "TATA · ASHOK LEYLAND · MAHINDRA",
    note: "and more",
    to: "/inquiry",
    keywords: "truck light commercial vehicle lcv",
    action: "Enquire about parts",
  },
  {
    name: "Workshop Equipment",
    image: "workshop.webp",
    brands: "TOOLS · GARAGE EQUIPMENT",
    note: "Service solutions",
    to: "/inquiry",
    keywords: "workshop tool garage compressor lift",
    action: "Enquire about equipment",
  },
];

const VEHICLES = [...twoWheelers, ...Object.values(threeWheelers).flat()];
const BRANDS = [
  { name: "TVS", className: "tvs", available: true },
  { name: "BAJAJ", className: "bajaj", available: true },
  { name: "PIAGGIO", className: "piaggio", available: true },
  { name: "TATA", className: "tata", available: false },
  { name: "ASHOK LEYLAND", className: "ashok", available: false },
  { name: "Mahindra", className: "mahindra", available: false },
  { name: "MARUTI SUZUKI", className: "maruti", available: false },
  { name: "HYUNDAI", className: "hyundai", available: false },
];

function ProductSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const term = query.trim().toLowerCase();
  const ranges = term
    ? RANGES.filter((r) => `${r.name} ${r.brands} ${r.keywords}`.toLowerCase().includes(term))
    : [];
  const vehicles = term
    ? VEHICLES.filter((v) => `${v.name} ${v.description}`.toLowerCase().includes(term)).slice(0, 6)
    : [];
  const parts = term
    ? CATEGORIES.filter((c) => `${c.name} ${c.desc}`.toLowerCase().includes(term)).slice(0, 3)
    : [];
  const resultCount = ranges.length + vehicles.length + parts.length;

  useEffect(() => {
    const handleOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target))
        setOpen(false);
    };
    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  function submit(event: FormEvent) {
    event.preventDefault();
    setOpen(true);
    searchInput.current?.focus();
  }

  function closeSearch() {
    searchInput.current?.focus();
    setOpen(false);
  }

  return (
    <div
      className="landing-search"
      ref={container}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          closeSearch();
        }
      }}
    >
      <form role="search" aria-label="Search products" onSubmit={submit}>
        <label className="landing-sr-only" htmlFor="landing-product-search">
          Search products, vehicles or brands
        </label>
        <input
          id="landing-product-search"
          ref={searchInput}
          type="search"
          placeholder="Search products..."
          value={query}
          autoComplete="off"
          onFocus={() => {
            if (query) setOpen(true);
          }}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
        />
        <button
          type="submit"
          aria-label="Find products"
          aria-expanded={open}
          aria-controls={open ? "landing-search-results" : undefined}
        >
          <Search size={17} />
        </button>
      </form>
      {open && (
        <div id="landing-search-results" className="landing-search-results">
          <div className="landing-search-heading">
            <span aria-live="polite">
              {term ? `${resultCount} matching results` : "What are you looking for?"}
            </span>
            <button type="button" aria-label="Close search results" onClick={closeSearch}>
              <X size={17} />
            </button>
          </div>
          {!term && <p>Search a vehicle, brand or part — try “TVS”, “engine” or “workshop”.</p>}
          {term && resultCount === 0 && (
            <div className="landing-no-results">
              <p>No matches for “{query}”. Send us your part number and we’ll help you find it.</p>
              <Link to="/inquiry">
                Request a part <ArrowRight size={16} />
              </Link>
            </div>
          )}
          {resultCount > 0 && (
            <ul>
              {ranges.map((range) => (
                <li key={range.name}>
                  <Link to={range.to}>
                    <span>
                      {range.name}
                      <small>{range.action}</small>
                    </span>
                    <ArrowUpRight size={17} />
                  </Link>
                </li>
              ))}
              {vehicles.map((vehicle) => (
                <li key={vehicle.id}>
                  {vehicle.catalogue.trim().startsWith("https://") ? (
                    <a href={vehicle.catalogue.trim()} target="_blank" rel="noopener noreferrer">
                      <span>
                        {vehicle.name}
                        <small>Parts catalogue · opens in a new tab</small>
                      </span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <Link to="/inquiry">
                      <span>
                        {vehicle.name}
                        <small>Request parts information</small>
                      </span>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </li>
              ))}
              {parts.map((part) => (
                <li key={part.slug}>
                  <Link to="/catalogue">
                    <span>
                      {part.name}
                      <small>Explore the technical catalogue</small>
                    </span>
                    <ArrowRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link className="landing-search-all" to="/products">
            Browse all available vehicles <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const productButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) {
        setProductsOpen(false);
        setMenuOpen(false);
      }
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (productsOpen) {
        setProductsOpen(false);
        productButton.current?.focus();
      } else if (menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 1100px)");
    function resetMenu() {
      setMenuOpen(false);
      setProductsOpen(false);
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", resetMenu);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", resetMenu);
    };
  }, [menuOpen, productsOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };
  return (
    <>
      <header className="landing-masthead landing-container">
        <Link to="/" className="landing-logo-link" aria-label="Sparx home">
          <Wordmark />
        </Link>
        <div className="landing-company">
          <strong>SPARX</strong>
          <span>AUTO INTERNATIONAL PVT. LTD.</span>
        </div>
        <div className="landing-header-contact">
          <div>
            <Phone size={19} />
            <span>
              {SITE.contacts.map((contact, index) => (
                <span key={contact.phone}>
                  {index > 0 && <span className="landing-phone-divider"> / </span>}
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                    {contact.phone.replace("+91 ", "")}
                  </a>
                </span>
              ))}
            </span>
          </div>
          {SITE.emails.map((email) => (
            <a href={`mailto:${email}`} key={email}>
              <Mail size={19} />
              <span>{email}</span>
            </a>
          ))}
          <Link to="/contact">
            <Globe2 size={19} />
            <span>Your global automotive partner</span>
          </Link>
        </div>
      </header>
      <nav className="landing-nav" aria-label="Main navigation" ref={nav}>
        <div className="landing-container landing-nav-inner">
          <button
            ref={menuButton}
            className="landing-mobile-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="landing-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
            <span>Menu</span>
          </button>
          <div id="landing-navigation" className={`landing-nav-links${menuOpen ? " is-open" : ""}`}>
            <Link to="/" className="landing-nav-home" aria-current="page" onClick={closeMenus}>
              <House size={16} fill="currentColor" />
              Home
            </Link>
            <Link to="/about" onClick={closeMenus}>
              About Us
            </Link>
            <div className="landing-product-nav">
              <button
                ref={productButton}
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
                aria-controls="landing-product-menu"
              >
                Products <ChevronDown size={14} className={productsOpen ? "is-rotated" : ""} />
              </button>
              {productsOpen && (
                <div className="landing-product-menu" id="landing-product-menu">
                  {RANGES.map((range) => (
                    <Link to={range.to} key={range.name} onClick={closeMenus}>
                      <span>
                        {range.name}
                        <small>{range.action}</small>
                      </span>
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                  <Link to="/products" onClick={closeMenus}>
                    All available vehicles <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>
            <a href="#brands" onClick={closeMenus}>
              Brands
            </a>
            <a href="#export-markets" onClick={closeMenus}>
              Export Markets
            </a>
            <a href="#why-sparx" onClick={closeMenus}>
              Why SPARX
            </a>
            <Link to="/catalogue" onClick={closeMenus}>
              Catalogue
            </Link>
            <Link to="/inquiry" onClick={closeMenus}>
              Enquiry
            </Link>
            <Link to="/contact" onClick={closeMenus}>
              Contact Us
            </Link>
          </div>
          <ProductSearch />
        </div>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="landing-hero" aria-labelledby="landing-hero-title">
      <img
        className="landing-hero-image"
        src="/images/landing/hero-export.webp"
        alt="Motorcycle, auto rickshaw, car and commercial trucks at an international shipping port"
        width={1902}
        height={827}
        fetchPriority="high"
      />
      <div className="landing-hero-shade" />
      <div className="landing-container landing-hero-inner">
        <div className="landing-hero-copy">
          <h1 id="landing-hero-title">
            AUTO PARTS
            <br />
            <span>BEYOND BORDERS</span>
          </h1>
          <p>
            Reliable Automotive Spare Parts
            <br />
            from India to the World
          </p>
          <div className="landing-hero-values">
            <div>
              <Handshake />
              <span>
                TRUSTED
                <br />
                SOURCING
              </span>
            </div>
            <div>
              <Cog />
              <span>
                WIDE
                <br />
                PRODUCT RANGE
              </span>
            </div>
            <div>
              <Globe2 />
              <span>
                GLOBAL
                <br />
                DELIVERY
              </span>
            </div>
          </div>
          <div className="landing-hero-actions">
            <Link to="/inquiry" className="landing-button">
              Get a Quote <ArrowRight size={21} />
            </Link>
            <Link to="/catalogue" className="landing-hero-catalogue">
              View Catalogue <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <p className="landing-hero-script">
          Keeping
          <br />
          <span>the world moving.</span>
          <i />
        </p>
        <div className="landing-india">
          <span>
            INDIAN QUALITY
            <br />
            FOR A STRONGER
            <br />
            TOMORROW
          </span>
          <span className="landing-tricolor" aria-label="Made in India">
            <i />
            <i />
            <i />
          </span>
        </div>
        <p className="landing-hero-signoff">
          From India.
          <br />
          <span>To global roads.</span>
        </p>
      </div>
    </section>
  );
}

function ProductRange() {
  return (
    <section
      className="landing-products landing-container"
      id="product-range"
      aria-labelledby="landing-products-title"
    >
      <div className="landing-section-heading">
        <h2 id="landing-products-title">OUR PRODUCT RANGE</h2>
        <p>Quality Spare Parts for Every Journey</p>
      </div>
      <div className="landing-range-grid">
        {RANGES.map((range) => (
          <Link
            to={range.to}
            key={range.name}
            className="landing-range-card"
            aria-label={`${range.name} — ${range.action}`}
          >
            <div className="landing-range-image">
              <img
                src={`/images/landing/${range.image}`}
                alt=""
                loading="lazy"
                width={640}
                height={640}
              />
              <span className="landing-range-arrow">
                <ArrowUpRight size={19} />
              </span>
            </div>
            <h3>{range.name}</h3>
            <p>
              {range.brands}
              <br />
              <span>{range.note}</span>
            </p>
            <span className="landing-range-action">
              {range.action} <ArrowRight size={13} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WorldMap() {
  return (
    <div className="landing-world-map">
      <img
        src="/images/landing/world-markets.webp"
        alt="Global shipping routes connecting India with international markets"
        width={880}
        height={401}
        loading="lazy"
      />
      <span className="landing-map-pin">
        <MapPin size={28} fill="#073c6d" color="white" strokeWidth={1.6} />
        <b>INDIA</b>
      </span>
    </div>
  );
}
function Company() {
  const benefits = [
    {
      icon: Diamond,
      label: (
        <>
          Quality
          <br />
          Products
        </>
      ),
    },
    {
      icon: Truck,
      label: (
        <>
          Reliable
          <br />
          Supply Chain
        </>
      ),
    },
    {
      icon: ShieldCheck,
      label: (
        <>
          Competitive
          <br />
          Pricing
        </>
      ),
    },
    {
      icon: Globe2,
      label: (
        <>
          Global
          <br />
          Reach
        </>
      ),
    },
    {
      icon: Users,
      label: (
        <>
          Customer
          <br />
          Focused
        </>
      ),
    },
    {
      icon: ChartNoAxesCombined,
      label: (
        <>
          Long-Term
          <br />
          Partnerships
        </>
      ),
    },
  ];
  return (
    <section
      className="landing-company-section landing-container"
      aria-label="About Sparx and our global reach"
    >
      <div className="landing-about">
        <h2>ABOUT SPARX</h2>
        <p>
          <strong>SPARX AUTO INTERNATIONAL PVT. LTD.</strong> is an India-based export company
          engaged in sourcing and supplying high-quality automotive spare parts for 2-wheelers,
          3-wheelers, cars, LCVs and commercial vehicles to global markets.
        </p>
        <p>
          With a strong network, industry experience and a commitment to customer satisfaction,
          SPARX aims to be a trusted partner for distributors, importers and automotive businesses
          worldwide.
        </p>
        <Link to="/about" className="landing-button">
          Read More <ArrowRight size={20} />
        </Link>
      </div>
      <div className="landing-advantages">
        <div id="why-sparx">
          <h2>WHY CHOOSE SPARX?</h2>
          <div className="landing-benefits">
            {benefits.map(({ icon: Icon, label }, index) => (
              <div className="landing-benefit" key={index}>
                <span>
                  <Icon size={30} strokeWidth={1.8} />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="landing-markets" id="export-markets">
          <div className="landing-markets-copy">
            <h3>
              SERVING
              <br />
              GLOBAL MARKETS
            </h3>
            <p>Bringing Indian Automotive Excellence to Every Corner of the World.</p>
            <Link to="/contact">
              Partner with us <ArrowRight size={14} />
            </Link>
          </div>
          <WorldMap />
          <span className="landing-markets-statement">
            GLOBAL
            <br />
            PRESENCE.
            <br />
            STRONGER
            <br />
            TOMORROW.
          </span>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      className="landing-brands landing-container"
      id="brands"
      aria-labelledby="landing-brands-title"
    >
      <div className="landing-brands-heading">
        <h2 id="landing-brands-title">OUR KEY BRANDS</h2>
        <span />
      </div>
      <div className="landing-brand-row">
        {BRANDS.map((brand) => (
          <Link
            key={brand.name}
            to={brand.available ? "/products" : "/inquiry"}
            className={`landing-brand landing-brand--${brand.className}`}
            aria-label={`${brand.name} — ${brand.available ? "browse vehicles" : "enquire about parts"}`}
          >
            {brand.name === "MARUTI SUZUKI" ? (
              <>
                <span className="landing-suzuki-mark">S</span>
                <span>
                  MARUTI
                  <br />
                  SUZUKI
                </span>
              </>
            ) : (
              brand.name
            )}
          </Link>
        ))}
        <button
          className="landing-outline-button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls="landing-brand-details"
        >
          {expanded ? "Close brands" : "View All Brands"}
          <ChevronDown size={16} className={expanded ? "is-rotated" : ""} />
        </button>
      </div>
      {expanded && (
        <div className="landing-brand-details" id="landing-brand-details">
          <div>
            <h3>Find the right parts for your brand.</h3>
            <p>
              Explore our available vehicle catalogues, or send your brand, model and part number to
              our export team.
            </p>
          </div>
          <div>
            <Link to="/products">
              <Check size={17} /> TVS, Bajaj, Piaggio, Honda, Yamaha &amp; Haojue{" "}
              <ArrowRight size={16} />
            </Link>
            <Link to="/inquiry">
              Enquire about other brands <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-main">
        <div className="landing-container landing-footer-grid">
          <Link to="/" aria-label="Sparx home">
            <Wordmark footer />
          </Link>
          <div className="landing-footer-address">
            <MapPin size={23} />
            <div>
              <span>Office Address</span>
              <p>{SITE.address}</p>
              <Link to="/contact">
                Contact our export desk <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
          <div className="landing-footer-contact">
            {SITE.contacts.map((contact) => (
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} key={contact.phone}>
                <Phone size={17} />
                <span>{contact.phone}</span>
              </a>
            ))}
            {SITE.emails.map((email) => (
              <a href={`mailto:${email}`} key={email}>
                <Mail size={17} />
                <span>{email}</span>
              </a>
            ))}
            <Link to="/catalogue">
              <Globe2 size={17} />
              <span>Explore our parts catalogue</span>
            </Link>
          </div>
          <div className="landing-footer-social">
            <p>Let’s Connect</p>
            <div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="landing-social-whatsapp"
              >
                <MessageCircle size={22} />
              </a>
              <a href={`mailto:${SITE.emails.join(",")}`} aria-label="Email Sparx">
                <Mail size={21} />
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} aria-label="Call Sparx">
                <Phone size={20} />
              </a>
            </div>
            <Link to="/inquiry">
              Send an enquiry <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
      <div className="landing-container landing-footer-bottom">
        <p>
          © {new Date().getFullYear()} SPARX AUTO INTERNATIONAL PVT. LTD.{" "}
          <span>All Rights Reserved.</span>
        </p>
        <p>
          <i>Driving Trust, Powering Global Trade</i>
          <span>
            Made in India for the World{" "}
            <span className="landing-mini-flag" aria-label="Indian flag">
              🇮🇳
            </span>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "SPARX Auto International | Auto Parts Beyond Borders";
    return () => {
      document.title = previousTitle;
    };
  }, []);
  return (
    <div
      className="sparx-home"
      onClickCapture={(event) => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
          return;
        const anchor = event.target instanceof Element ? event.target.closest("a") : null;
        const href = anchor?.getAttribute("href");
        if (!anchor?.target && href?.startsWith("/") && !href.includes("#")) {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
        if (
          href?.startsWith("#") &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          const target = document.getElementById(href.slice(1));
          if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "instant" });
            target.focus({ preventScroll: true });
          }
        }
      }}
    >
      <a className="landing-skip-link" href="#landing-main">
        Skip to content
      </a>
      <Header />
      <main id="landing-main" tabIndex={-1}>
        <Hero />
        <ProductRange />
        <Company />
        <Brands />
      </main>
      <Footer />
      <a
        href={whatsappLink()}
        className="landing-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sparx on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  );
}
