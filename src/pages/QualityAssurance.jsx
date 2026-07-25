import React from "react";
import { CheckSquare, ShieldCheck, RefreshCw, Box, Award, Shield } from "lucide-react";

export default function QualityAssurance() {
  const steps = [
    {
      icon: <CheckSquare />,
      title: "Product Testing & AOI",
      desc: "All SMT component traces undergo Automated Optical Inspection (AOI) followed by in-circuit testing (ICT) to eliminate copper bridge defects."
    },
    {
      icon: <Award />,
      title: "Quality Inspection Loops",
      desc: "Our quality teams verify solder thickness, layout impedance, signal attenuation, and high-frequency wireless output."
    },
    {
      icon: <Shield />,
      title: "Manufacturing Standards Compliance",
      desc: "We prioritize fabrication lines operating under ISO 9001, ISO 14001, and UL quality markers, conforming to IPC-A-610 Class III."
    },
    {
      icon: <ShieldCheck />,
      title: "Product Verification Audits",
      desc: "Checking manufacturing batches against certification norms, verifying HS codes, FCC labels, and electrical ratings."
    },
    {
      icon: <Box />,
      title: "Packaging & ESD Standards",
      desc: "Consignments are sealed with anti-static shielding bags, desiccant pouches, and impact-resistant support frames."
    },
    {
      icon: <RefreshCw />,
      title: "Customer RMA Satisfaction",
      desc: "We stand behind our sourcing. Any manufacturing anomalies discovered during incoming audits are backed by a structured RMA replacement."
    }
  ];

  return (
    <div className="qa-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Zero Defect Target</span>
          <h1 className="section-title">Quality Assurance &amp; Verification</h1>
          <p className="section-desc">
            Electronics imports demand strict validation. Review the inspections and packaging guidelines that protect your supply chain from component failures.
          </p>
        </div>
      </section>

      {/* QA BLOCKS */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="qa-showcase-grid">
            {steps.map((step, idx) => (
              <div className="qa-card glass-card" key={idx}>
                <div className="qa-icon-box">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRIC HIGHLIGHT PANEL */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container qa-metric-grid">
          <div className="qa-metric-text">
            <h2>The IPC Class III Standard</h2>
            <p>
              For mission-critical electronics (telecom grids, automated machinery, aerospace components), failure is not an option. Leonce Multiventure ensures that our PCB and PCBA vendors adhere to <strong>IPC-A-610 Class III</strong> guidelines.
            </p>
            <p style={{ marginTop: 15, color: "var(--text-muted)" }}>
              This guarantees that board trace layering, solder joint angles, and dielectric materials are certified to operate continuously under extreme thermal and mechanical stress.
            </p>
          </div>
          <div className="qa-metric-panel glass-card">
            <div className="percentage-circle">
              <span className="percentage">100%</span>
              <span className="percentage-lbl">Pre-Shipment Inspections</span>
            </div>
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

        .qa-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .qa-card {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .qa-icon-box {
          color: var(--color-gold);
          filter: drop-shadow(0 0 5px var(--color-gold));
        }

        .qa-card h3 {
          font-size: 1.2rem;
          color: var(--text-white);
        }

        .qa-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Metric Highlights */
        .qa-metric-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .qa-metric-text h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .qa-metric-panel {
          border-color: var(--border-glass-blue);
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .percentage-circle {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 4px solid var(--color-cyan);
          box-shadow: var(--shadow-neon-blue);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 225, 255, 0.03);
        }

        .percentage {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-white);
        }

        .percentage-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
          max-width: 120px;
        }

        @media (max-width: 991px) {
          .qa-showcase-grid {
            grid-template-columns: 1fr 1fr;
          }
          .qa-metric-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .qa-showcase-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
