import React from "react";
import { Briefcase, Ship, Layers, MapPin, Award } from "lucide-react";

export default function Portfolio() {
  const achievements = [
    {
      metric: "500k+ Units",
      title: "WiFi Devices Sourced",
      desc: "Successfully imported and certified high-speed WiFi 6 routers for enterprise office complexes and hotel network distributions."
    },
    {
      metric: "2.4M Trace Runs",
      title: "PCB Layer Verification",
      desc: "Delivered HDI multilayer circuit boards for telecom infrastructure developers, maintaining zero signal trace failures."
    },
    {
      metric: "12 Major Fabs",
      title: "Contracted Silicon Lines",
      desc: "Active supply contracts with microchip fabrication facilities ensuring consistent pricing stability for local manufacturers."
    },
    {
      metric: "99.2% rate",
      title: "On-Time Customs Clearance",
      desc: "Achieved harbor release times under 48 hours for regular air/ocean freight containers using automated filing workflows."
    }
  ];

  const caseStudies = [
    {
      title: "B2B Telecom Network Expansion",
      client: "NetLink Solutions",
      scope: "Imported 12,000 dual-band routers with custom housing prints (OEM), cleared customs documents, and distributed to 4 logistics centers.",
      result: "Achieved 20% savings compared to standard reseller rates, with WPC certification cleared."
    },
    {
      title: "Automotive Smart Dash PCBA Sourcing",
      client: "Apex Engine Controls",
      scope: "Audited China pick-and-place fabs, verified lead-free reflow profile specs, and organized temperature-controlled container shipments.",
      result: "Supplied 45,000 certified PCBA modules, ensuring alignment with ISO 9001 compliance standards."
    }
  ];

  return (
    <div className="portfolio-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Track Record</span>
          <h1 className="section-title">Corporate Portfolio</h1>
          <p className="section-desc">
            Explore our importing accomplishments, bulk distribution volumes, and details of successful B2B client solutions.
          </p>
        </div>
      </section>

      {/* METRIC ACHIEVEMENTS */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="portfolio-metrics-grid">
            {achievements.map((ach, idx) => (
              <div className="metric-portfolio-card glass-card" key={idx}>
                <div className="metric-value-title glow-text-gold">{ach.metric}</div>
                <h3>{ach.title}</h3>
                <p>{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Case Solutions</span>
            <h2 className="section-title">Sourcing Projects Summary</h2>
            <p className="section-desc">Review details on how we negotiate, verify, clear, and distribute custom electronics hardware.</p>
          </div>

          <div className="case-studies-list">
            {caseStudies.map((cs, idx) => (
              <div className="case-card glass-card" key={idx}>
                <div className="case-badge"><Briefcase size={16} /> Case Solution</div>
                <h3>{cs.title}</h3>
                <span className="case-client">Client: {cs.client}</span>
                <div className="case-details-row">
                  <div>
                    <h4>Sourcing Scope</h4>
                    <p>{cs.scope}</p>
                  </div>
                  <div>
                    <h4>Business Outcome</h4>
                    <p>{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {styleStyle}
    </div>
  );
}

const styleStyle = (
  <style>{`
    .page-padding {
      padding-top: 100px;
    }

    .page-header {
      padding: 80px 24px;
      text-align: center;
      background: linear-gradient(180deg, var(--bg-deep-navy) 0%, var(--bg-dark-obsidian) 100%);
      border-bottom: 1px solid var(--border-glass-blue);
    }

    .portfolio-metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .metric-portfolio-card {
      text-align: center;
      padding: 30px 20px;
    }

    .metric-value-title {
      font-family: var(--font-display);
      font-size: 2.25rem;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .metric-portfolio-card h3 {
      font-size: 1.1rem;
      margin-bottom: 8px;
      color: var(--text-white);
    }

    .metric-portfolio-card p {
      font-size: 0.8rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* Case Studies */
    .case-studies-list {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-top: 40px;
    }

    .case-card {
      padding: 40px;
      border-color: var(--border-glass-blue);
    }

    .case-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(0, 225, 255, 0.1);
      border: 1px solid var(--border-glass-blue);
      color: var(--color-cyan);
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 10px;
      border-radius: 4px;
      margin-bottom: 15px;
    }

    .case-card h3 {
      font-size: 1.5rem;
      color: var(--text-white);
      margin-bottom: 4px;
    }

    .case-client {
      font-size: 0.85rem;
      color: var(--color-gold-bright);
      font-weight: 600;
      display: block;
      margin-bottom: 25px;
    }

    .case-details-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 20px;
    }

    .case-details-row h4 {
      font-size: 1rem;
      color: var(--text-white);
      margin-bottom: 6px;
    }

    .case-details-row p {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    @media (max-width: 991px) {
      .portfolio-metrics-grid {
        grid-template-columns: 1fr 1fr;
      }
      .case-details-row {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

    @media (max-width: 600px) {
      .portfolio-metrics-grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>
);
