import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Cog } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CATEGORIES } from "@/lib/site";
import "./telematics.css";
export default function CataloguePage() {
  return (
    <SiteLayout>
      <section className="bg-charcoal text-white">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <p className="eyebrow text-primary-glow">Catalogue</p>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            Find your next solution.
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl">
            Explore the Intangles product brochure or request spare part information tailored to
            your vehicle specifications.
          </p>
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="rounded-2xl border border-emerald-900/15 bg-emerald-50 p-7 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <img
              src="/images/intangles/logo.png"
              alt="Intangles — A Digital Twin Company"
              width={285}
              height={88}
              className="w-52 h-auto rounded mb-6"
            />
            <h2 className="text-3xl font-bold">Advanced telematics brochure</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Compare InSight, InGenious and InVision+. View or download all four brochure pages.
            </p>
          </div>
          <Link className="fleet-button shrink-0" to="/products/telematics#brochure">
            <BookOpen size={19} /> View brochure
          </Link>
        </div>
        <h2 className="mt-16 mb-4 text-3xl font-bold">Spare parts catalogue requests</h2>
        <p className="mb-8 text-muted-foreground">
          Choose a category and share your requirements with our export team.
        </p>
        <div className="parts-grid">
          {CATEGORIES.map((part) => (
            <article className="parts-card" key={part.slug}>
              <Cog aria-hidden="true" />
              <h3>{part.name}</h3>
              <p>{part.desc}</p>
              <Link to={"/inquiry?category=" + part.slug}>
                Request catalogue
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
