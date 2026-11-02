import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CircuitBoard,
  Download,
  Fuel,
  MapPinned,
  MessageCircle,
  Radar,
  Route,
  ShieldCheck,
  Truck,
  Users,
  Video,
  ZoomIn,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SITE, whatsappLink } from "@/lib/site";
import "./telematics.css";

const FEATURES = [
  {
    icon: Activity,
    title: "Predictive vehicle health",
    text: "Identify emerging vehicle issues and plan maintenance around the health of your fleet.",
  },
  {
    icon: CircuitBoard,
    title: "OBD & fault-code insights",
    text: "Make on-board diagnostics and DTC fault codes easier to understand with actionable vehicle insights.",
  },
  {
    icon: Users,
    title: "Driving behaviour",
    text: "Understand driving patterns, profile drivers and support better practices through scorecards.",
  },
  {
    icon: Fuel,
    title: "Fuel + AdBlue monitoring",
    text: "Monitor consumption and identify opportunities to improve efficiency and manage operating costs.",
  },
  {
    icon: MapPinned,
    title: "Vehicle tracking",
    text: "See vehicle locations and use trip, route and geofencing insights to coordinate your operations.",
  },
  {
    icon: Video,
    title: "Video-led safety",
    text: "Explore AI-powered video telematics, driver alerts and incident evidence with the InVision+ tier.",
  },
];
const PLANS = [
  {
    name: "InSight",
    line: "Monitor. Measure. Manage.",
    audience: "For fleets moving beyond basic GPS.",
    icon: MapPinned,
    features: [
      "Real-time location tracking",
      "DTC fault-code visibility",
      "Fuel consumption data",
      "Guided repair strategies",
    ],
    outcome: "Visibility & everyday control",
  },
  {
    name: "InGenious",
    line: "Predict. Prevent. Prosper.",
    audience: "For fleets that need proactive control.",
    icon: Activity,
    features: [
      "Predictive vehicle health",
      "Comprehensive fuel management",
      "Driver profiling",
      "Trip management & operations automation",
    ],
    outcome: "Uptime & cost control",
  },
  {
    name: "InVision+",
    line: "Observe. Alert. Protect.",
    audience: "For fleets that need to see more and act faster.",
    icon: Video,
    features: [
      "AI-powered video telematics",
      "Driver monitoring & ADAS",
      "In-cabin voice alerts",
      "Incident playback & evidence",
    ],
    outcome: "Safety & accountability",
  },
];
const BROCHURES = [
  "Platform overview",
  "Explore the three tiers",
  "Capability comparison",
  "Benefits & choosing a plan",
];

export default function TelematicsPage() {
  const [brochure, setBrochure] = useState<number | null>(null);
  const [plan, setPlan] = useState("Help me choose");
  const [draftReady, setDraftReady] = useState(false);
  useEffect(() => {
    const previous = document.title;
    document.title = "Advanced Telematics | SPARX × Intangles";
    return () => {
      document.title = previous;
    };
  }, []);

  function prepareMeeting(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = [
      "Hello SPARX team,",
      "",
      "I would like to arrange a discussion about Intangles advanced telematics for BS-IV / BS-VI vehicles.",
      "",
      `Name: ${values.get("name")}`,
      `Company: ${values.get("company")}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone")}`,
      `Fleet size: ${values.get("fleet") || "To discuss"}`,
      `Vehicle stage: ${values.get("stage")}`,
      `Plan: ${plan}`,
      `Preferred meeting time and time zone: ${values.get("time")}`,
      `Meeting location / format: ${values.get("location") || "To discuss"}`,
      "",
      `Requirements: ${values.get("message") || "Please help us choose a suitable solution."}`,
      "",
      "Please confirm a suitable time to meet.",
    ].join("\n");
    window.location.href = `mailto:${SITE.emails.join(",")}?subject=${encodeURIComponent("Intangles telematics — meeting request")}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  }

  return (
    <SiteLayout>
      <div className="fleet-page">
        <section className="fleet-hero">
          <div className="fleet-wrap">
            <nav className="fleet-breadcrumb" aria-label="Breadcrumb">
              <Link to="/products">Products</Link>
              <span>/</span>
              <span>Advanced telematics</span>
            </nav>
            <div className="fleet-hero-grid">
              <div>
                <div className="fleet-partner-badge">
                  <span /> Authorized channel partner · Intangles Lab Pvt. Ltd.
                </div>
                <h1>
                  A healthier fleet.
                  <br />
                  <em>A clearer road ahead.</em>
                </h1>
                <p className="fleet-product-name">
                  Advanced Telematics Solutions
                  <br />
                  for BS-IV and BS-VI stage vehicles
                </p>
                <p className="fleet-intro">
                  IoT-based fleet management that connects vehicle performance, health and
                  operations. Turn everyday data into decisions that help reduce costs and uncover
                  revenue opportunities.
                </p>
                <div className="fleet-actions">
                  <a className="fleet-button" href="#meeting">
                    Schedule a discussion <ArrowUpRight size={19} />
                  </a>
                  <a className="fleet-text-link" href="#brochure">
                    View brochure <ArrowRight size={17} />
                  </a>
                </div>
              </div>
              <div
                className="fleet-system"
                aria-label="Connected vehicle intelligence: health, diagnostics, fuel and tracking"
              >
                <div className="fleet-system-top">
                  <img
                    src="/images/intangles/logo.png"
                    alt="Intangles — A Digital Twin Company"
                    width="285"
                    height="88"
                  />
                  <span>FLEET INTELLIGENCE</span>
                </div>
                <div className="fleet-system-core">
                  <span className="fleet-orbit" />
                  <Truck size={83} strokeWidth={1.2} />
                  <span className="fleet-signal">
                    <Radar size={21} />
                  </span>
                </div>
                <div className="fleet-system-nodes">
                  <span>
                    <Activity /> Vehicle health
                  </span>
                  <span>
                    <CircuitBoard /> OBD insights
                  </span>
                  <span>
                    <Fuel /> Fuel + AdBlue
                  </span>
                  <span>
                    <MapPinned /> Location tracking
                  </span>
                </div>
                <p>One connected view of your fleet.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="fleet-strip">
          <div className="fleet-wrap">
            <span>
              <ShieldCheck /> Health & performance
            </span>
            <span>
              <Route /> Operational visibility
            </span>
            <span>
              <Users /> Driver insights
            </span>
          </div>
        </div>
        <section className="fleet-wrap fleet-section" aria-labelledby="fleet-capabilities">
          <div className="fleet-section-heading">
            <div>
              <p className="fleet-eyebrow">CONNECTED INSIGHTS. PRACTICAL OUTCOMES.</p>
              <h2 id="fleet-capabilities">
                Know more.
                <br />
                Act sooner.
              </h2>
            </div>
            <p>
              Focus on both the performance and health of your mobility assets, with insights your
              team can use every day.
            </p>
          </div>
          <div className="fleet-feature-grid">
            {FEATURES.map(({ icon: Icon, title, text }, i) => (
              <article key={title}>
                <div className="fleet-feature-top">
                  <Icon size={28} strokeWidth={1.5} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="fleet-plans-section" id="plans" aria-labelledby="fleet-plans-title">
          <div className="fleet-wrap fleet-section">
            <div className="fleet-section-heading">
              <div>
                <p className="fleet-eyebrow">THREE TIERS. ONE PLATFORM FAMILY.</p>
                <h2 id="fleet-plans-title">
                  Choose your level
                  <br />
                  of fleet intelligence.
                </h2>
              </div>
              <p>
                Start with the visibility you need today. Explore predictive control and video-led
                intelligence as your fleet evolves.
              </p>
            </div>
            <div className="fleet-plan-grid">
              {PLANS.map(({ name, line, audience, icon: Icon, features, outcome }, i) => (
                <article className={`fleet-plan fleet-plan-${i}`} key={name}>
                  <div className="fleet-plan-kicker">
                    TIER 0{i + 1}
                    <Icon size={25} />
                  </div>
                  <h3>{name}</h3>
                  <strong>{line}</strong>
                  <p>{audience}</p>
                  <ul>
                    {features.map((feature) => (
                      <li key={feature}>
                        <Check size={17} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="fleet-plan-outcome">{outcome}</div>
                  <a href="#meeting" className="fleet-plan-link" onClick={() => setPlan(name)}>
                    Discuss {name}
                    <ArrowUpRight size={18} />
                  </a>
                </article>
              ))}
            </div>
            <p className="fleet-note">
              Plan highlights are based on the supplied Intangles brochure. Our team will confirm
              vehicle compatibility, hardware and feature availability for your fleet.
            </p>
          </div>
        </section>
        <section
          className="fleet-wrap fleet-section"
          id="brochure"
          aria-labelledby="fleet-brochure-title"
        >
          <div className="fleet-section-heading">
            <div>
              <p className="fleet-eyebrow">EXPLORE THE DETAILS</p>
              <h2 id="fleet-brochure-title">The Intangles brochure.</h2>
            </div>
            <p>
              Read the original product information, compare capabilities and find the right
              starting point for your fleet.
            </p>
          </div>
          <div className="fleet-brochure-grid">
            {BROCHURES.map((title, i) => (
              <article key={title}>
                <button
                  type="button"
                  onClick={() => setBrochure(i)}
                  aria-label={`View brochure page ${i + 1}: ${title}`}
                >
                  <img
                    src={`/images/intangles/brochure-${i + 1}.png`}
                    alt={`Intangles brochure: ${title}`}
                    loading="lazy"
                  />
                  <span>
                    <ZoomIn size={18} /> View page {i + 1}
                  </span>
                </button>
                <h3>{title}</h3>
                <a
                  href={`/images/intangles/brochure-${i + 1}.png`}
                  download={`Intangles-brochure-page-${i + 1}.png`}
                >
                  <Download size={15} /> Download page
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="fleet-meeting" id="meeting" aria-labelledby="fleet-meeting-title">
          <div className="fleet-wrap fleet-meeting-grid">
            <div>
              <p className="fleet-eyebrow">LET’S TALK ABOUT YOUR FLEET</p>
              <h2 id="fleet-meeting-title">
                A conversation.
                <br />
                <em>A smarter next step.</em>
              </h2>
              <p>
                We would welcome an in-person discussion about your fleet’s needs. Share a suitable
                time and location, and the SPARX team will coordinate with you.
              </p>
              <div className="fleet-meeting-contact">
                <CalendarDays size={26} />
                <span>
                  Discuss your vehicles, priorities
                  <br />
                  and the right solution for your operations.
                </span>
              </div>
              <a
                className="fleet-text-link"
                href={whatsappLink(
                  "Hello SPARX, I would like to arrange a meeting to discuss Intangles advanced telematics for BS-IV / BS-VI vehicles. My preferred time and location are: ",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} /> Discuss on WhatsApp
              </a>
            </div>
            <form className="fleet-meeting-form" onSubmit={prepareMeeting}>
              <div className="fleet-form-grid">
                <label>
                  Full name *<input required name="name" autoComplete="name" />
                </label>
                <label>
                  Company *<input required name="company" autoComplete="organization" />
                </label>
                <label>
                  Email *<input required name="email" type="email" autoComplete="email" />
                </label>
                <label>
                  Phone *<input required name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  Fleet size
                  <input
                    name="fleet"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Number of vehicles"
                  />
                </label>
                <label>
                  Vehicle stage
                  <select name="stage">
                    <option>BS-IV and BS-VI</option>
                    <option>BS-IV</option>
                    <option>BS-VI</option>
                    <option>Help me check compatibility</option>
                  </select>
                </label>
              </div>
              <label>
                Interested in
                <select value={plan} onChange={(event) => setPlan(event.target.value)}>
                  <option>Help me choose</option>
                  {PLANS.map((item) => (
                    <option key={item.name}>{item.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Preferred meeting time & time zone *
                <input name="time" required placeholder="e.g. 12 November, 11 AM IST" />
              </label>
              <label>
                Meeting location or format
                <input name="location" placeholder="Your office / SPARX office / video call" />
              </label>
              <label>
                What would you like to improve?
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Vehicle health, fuel costs, tracking, driver safety…"
                />
              </label>
              <button className="fleet-button" type="submit">
                Prepare meeting request <ArrowUpRight size={19} />
              </button>
              <p className="fleet-form-help" role="status">
                {draftReady
                  ? "Your email draft is ready. Send it from your email app to request the meeting. If no app opened, use the WhatsApp link."
                  : "Opens an email draft to the SPARX team. Send it from your email app; the meeting is confirmed only after our team replies."}
              </p>
            </form>
          </div>
        </section>
      </div>
      <Dialog
        open={brochure !== null}
        onOpenChange={(open) => {
          if (!open) setBrochure(null);
        }}
      >
        <DialogContent className="max-w-4xl w-[calc(100%-24px)] max-h-[92dvh] overflow-y-auto">
          <DialogTitle>
            {brochure !== null ? BROCHURES[brochure] : "Intangles brochure"}
          </DialogTitle>
          <DialogDescription>
            Original Intangles product brochure. Use the download link to keep a copy.
          </DialogDescription>
          {brochure !== null && (
            <>
              <img
                className="max-h-[65dvh] w-full object-contain"
                src={`/images/intangles/brochure-${brochure + 1}.png`}
                alt={BROCHURES[brochure]}
              />
              <div className="flex flex-wrap gap-4 justify-between">
                <button
                  type="button"
                  disabled={brochure === 0}
                  onClick={() => setBrochure(brochure - 1)}
                  className="disabled:opacity-40"
                >
                  Previous page
                </button>
                <a href={`/images/intangles/brochure-${brochure + 1}.png`} download>
                  Download page {brochure + 1}
                </a>
                <button
                  type="button"
                  disabled={brochure === 3}
                  onClick={() => setBrochure(brochure + 1)}
                  className="disabled:opacity-40"
                >
                  Next page
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
