import React from "react";
import { 
  Layers, Cpu, Wifi, Compass, Settings, Server, Users, 
  Database, FileText, Globe, Ship, Award, ShieldAlert 
} from "lucide-react";

export default function ImportServices() {
  const services = [
    {
      icon: <Cpu />,
      title: "PCB Import & Supply",
      desc: "Importing advanced rigid, flex, and multi-layer high-TG HDI printed circuit boards designed to meet complex hardware requirements."
    },
    {
      icon: <Layers />,
      title: "PCBA Sourcing & Assembly",
      desc: "Contracting SMT (Surface Mount) and DIP assembly lines, handling everything from component picking to complete functional board testing."
    },
    {
      icon: <Wifi />,
      title: "WiFi Router Import",
      desc: "Bulk supply of custom-branded WiFi 6 and Mesh routers directly from global wireless technology manufacturers."
    },
    {
      icon: <Database />,
      title: "Electronic Component Import",
      desc: "Sourcing hard-to-find active/passive components, microchips, transistors, and diodes via authorized factory lines."
    },
    {
      icon: <Settings />,
      title: "OEM Product Sourcing",
      desc: "Custom product styling, casing molds, and logo branding matching your precise corporate guidelines."
    },
    {
      icon: <Server />,
      title: "ODM Sourcing & Manufacturing",
      desc: "Partnering with manufacturing lines to customize functional code, firmware, and custom circuits from design concepts."
    },
    {
      icon: <Users />,
      title: "Global Supplier Management",
      desc: "Performing deep on-site factory audits, vendor financial assessments, and legal certification inspections."
    },
    {
      icon: <Layers />,
      title: "Bulk Electronics Procurement",
      desc: "Negotiating volume-discounts with global fabs, consolidating invoices, and safeguarding your buying power."
    },
    {
      icon: <FileText />,
      title: "Import Documentation Desk",
      desc: "Preparing accurate HS codes, Certificate of Origins, bills of lading, and telecom compliance certificates."
    },
    {
      icon: <Ship />,
      title: "International Logistics",
      desc: "Managing ocean freight, high-priority air cargo routes, container bookings, and thermal cargo padding."
    },
    {
      icon: <Award />,
      title: "Customs Clearance Handling",
      desc: "Handling WPC licensing, import-duty valuations, customs broker representation, and rapid harbor cargo release."
    },
    {
      icon: <Globe />,
      title: "Product Distribution Network",
      desc: "Direct shipping pipelines linking harbor terminals to client warehouses across various regions."
    },
    {
      icon: <ShieldAlert />,
      title: "B2B Supply Solutions",
      desc: "Structured supply agreements offering buffer inventory, staggered shipping cycles, and local logistics storage."
    }
  ];

  return (
    <div className="services-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Core Expertise</span>
          <h1 className="section-title">B2B Import &amp; Sourcing Services</h1>
          <p className="section-desc">
            We manage the complexity of global supplier management, compliance certificates, and customs clearance so you can focus on building market value.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="services-showcase-grid">
            {services.map((srv, idx) => (
              <div className="service-card glass-card" key={idx}>
                <div className="service-icon-box">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY FLOW DESCRIPTION */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container flow-grid">
          <div className="flow-text">
            <span className="section-subtitle">Workflow Integration</span>
            <h2>Our End-to-End Importing Pipeline</h2>
            <p>
              Importing electronics and telecom hubs requires strict regulatory checks. Here is how we verify safety and speed during each client assignment:
            </p>
            <div className="flow-steps">
              <div className="step-row">
                <span className="step-num">01</span>
                <div>
                  <h4>Requirement Alignment &amp; Fab Audit</h4>
                  <p>We analyze your CAD layout/spec sheet and crosscheck capacity metrics with verified fabs.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">02</span>
                <div>
                  <h4>Sample Verification &amp; Testing</h4>
                  <p>Before initiating bulk runs, we import prototypes to verify circuit and signal trace integrity.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="step-num">03</span>
                <div>
                  <h4>Customs &amp; WPC Logistics Clearance</h4>
                  <p>Our customs brokers manage licensing approvals and clear the shipment upon arrival.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flow-cta-panel glass-card">
            <h3>Ready to Settle a Sourcing Pipeline?</h3>
            <p>Request a consultations session with our import logistics division to estimate tariffs, lead times, and MOQ constraints.</p>
            <a href="/contact" className="btn btn-gold" style={{ marginTop: 15, display: "inline-flex" }}>
              Consult Logistics Desk
            </a>
          </div>
        </div>
      </section>

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

        .services-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .service-icon-box {
          color: var(--color-cyan);
          filter: drop-shadow(0 0 5px rgba(0, 225, 255, 0.3));
        }

        .service-card h3 {
          font-size: 1.2rem;
          color: var(--text-white);
        }

        .service-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
        }

        /* Supply flow pipeline */
        .flow-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .flow-text h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .flow-steps {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-top: 30px;
        }

        .step-row {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: var(--transition-smooth);
        }

        .step-row:hover {
          transform: translateX(8px);
        }

        .step-row:hover .step-num {
          background: rgba(197, 160, 89, 0.15);
          border-color: var(--color-gold);
        }

        .step-num {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-gold);
          border: 1px solid var(--border-glass-gold);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(197, 160, 89, 0.05);
        }

        .step-row h4 {
          font-size: 1.05rem;
          color: var(--text-white);
          margin-bottom: 4px;
        }

        .step-row p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .flow-cta-panel {
          border-color: var(--border-glass-gold);
          padding: 40px;
          text-align: center;
          transition: var(--transition-smooth);
        }

        .flow-cta-panel:hover {
          transform: translateY(-4px);
          box-shadow: var(--border-glow-gold);
        }

        .flow-cta-panel h3 {
          font-size: 1.35rem;
          margin-bottom: 12px;
        }

        .flow-cta-panel p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 991px) {
          .services-showcase-grid {
            grid-template-columns: 1fr 1fr;
          }
          .flow-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .services-showcase-grid {
            grid-template-columns: 1fr;
          }
          .flow-grid {
            gap: 30px;
          }
          .flow-cta-panel {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}
