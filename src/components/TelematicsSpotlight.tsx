import { Link } from "react-router-dom";
import { ArrowUpRight, Activity, MapPinned, Fuel } from "lucide-react";
import "@/pages/telematics.css";

export function TelematicsSpotlight() {
  return (
    <section
      className="fleet-spotlight"
      id="fleet-solutions"
      aria-labelledby="fleet-spotlight-title"
    >
      <div className="fleet-spotlight-copy">
        <p className="fleet-eyebrow">A NEW DIMENSION OF MOBILITY</p>
        <h2 id="fleet-spotlight-title">
          Better insight.
          <br />
          <em>Smarter fleets.</em>
        </h2>
        <p>
          Advanced telematics solutions for BS-IV and BS-VI stage vehicles. Understand vehicle
          health, fuel use and driving behaviour, all in one connected fleet platform.
        </p>
        <Link className="fleet-button" to="/products/telematics">
          Explore advanced telematics <ArrowUpRight size={19} />
        </Link>
      </div>
      <div className="fleet-spotlight-partner">
        <div className="fleet-partner-lockup">
          <img
            src="/images/intangles/logo.png"
            alt="Intangles — A Digital Twin Company"
            width="285"
            height="88"
            loading="lazy"
          />
          <span>
            SPARX · Authorized channel partner
            <br />
            Intangles Lab Pvt. Ltd.
          </span>
        </div>
        <div className="fleet-spotlight-features">
          <span>
            <Activity />
            Predictive health
          </span>
          <span>
            <Fuel />
            Fuel + AdBlue
          </span>
          <span>
            <MapPinned />
            Vehicle tracking
          </span>
        </div>
        <p>Turn vehicle data into actionable insights.</p>
      </div>
    </section>
  );
}
