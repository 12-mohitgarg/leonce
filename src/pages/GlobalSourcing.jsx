import React from "react";
import { Globe, ShieldAlert, Layers, CheckSquare, Search, Award } from "lucide-react";

export default function GlobalSourcing() {
  const steps = [
    {
      title: "Supplier Discovery & Verification",
      desc: "Our on-ground audit networks review fabrication capacity, chip trace accuracy, legal business certificates, and compliance ratings."
    },
    {
      title: "Quality Verification Check",
      desc: "Electrical testing, thermal camera checks, and impedance measurements are run on sample products before cargo loading."
    },
    {
      title: "Logistics Optimization",
      desc: "Bulk shipments are consolidated at overseas ports and packed with electrostatic shield guards and custom moisture-barrier seals."
    },
    {
      title: "Customs Clearances",
      desc: "We file import declarations, handle HS tariff classifications, and secure WPC licenses for direct B2B releases."
    }
  ];

  return (
    <div className="sourcing-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Supply Chain Integrity</span>
          <h1 className="section-title">Global Sourcing Network</h1>
          <p className="section-desc">
            How we manage overseas supply chain audits, vendor contracts, and shipping protocols to guarantee premium B2B products.
          </p>
        </div>
      </section>

      {/* WORLDWIDE SUPPLIER MAP PREVIEW */}
      <section className="section animate-on-scroll">
        <div className="container map-grid">
          <div className="map-graphics-panel glass-card">
            {/* Elegant Vector Tech Map Visual representation */}
            <div className="vector-world-map">
              <Globe size={100} className="map-globe-icon" />
              <div className="glowing-node node-taiwan"><span>Taiwan</span></div>
              <div className="glowing-node node-korea"><span>South Korea</span></div>
              <div className="glowing-node node-china"><span>Shenzhen</span></div>
              <div className="glowing-node node-germany"><span>Europe</span></div>
              <div className="glowing-node node-india"><span>Mumbai Head Office</span></div>
            </div>
          </div>
          <div className="map-text-panel">
            <span className="section-subtitle">Logistics Reach</span>
            <h2>Connecting Trusted Manufacturing Hubs</h2>
            <p>
              By bypassing intermediary resellers, Leonce Multiventure establishes direct links to prominent manufacturing hubs. This allows us to offer custom PCBA runs, multilayer PCBs, and network routers with direct factory guarantees.
            </p>
            <p style={{ marginTop: 15, color: "var(--text-muted)" }}>
              We maintain active supplier relationships across primary technology zones:
            </p>
            <ul className="sourcing-locations-list" style={{ marginTop: 20 }}>
              <li><strong>East Asia:</strong> High TG PCB raw cores &amp; high-volume SMT PCBA lines.</li>
              <li><strong>Southeast Asia:</strong> Networking equipment components and WiFi microchips.</li>
              <li><strong>Europe:</strong> High-performance industrial controllers and diagnostic relays.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCUREMENT CYCLE STEPS */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Method</span>
            <h2 className="section-title">The Sourcing &amp; Procurement Cycle</h2>
            <p className="section-desc">Four key stages that protect your electronics procurement pipelines from delays and high failure rates.</p>
          </div>
          
          <div className="sourcing-steps-grid">
            {steps.map((stp, idx) => (
              <div className="sourcing-step-card glass-card" key={idx}>
                <div className="step-badge-index">{idx + 1}</div>
                <h3>{stp.title}</h3>
                <p>{stp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENDOR MANAGEMENT POLICY */}
      <section className="section animate-on-scroll">
        <div className="container vendor-policy-box glass-card">
          <div className="policy-icon-wrapper"><CheckSquare size={36} /></div>
          <h2>Our Supplier Verification Criteria</h2>
          <p>
            To become a member of the Leonce Multiventure partner fabrications list, factories must pass annual audits:
          </p>
          <div className="criteria-grid">
            <div className="crit-item">
              <h4>ISO 9001 Alignment</h4>
              <p>Manufacturers must demonstrate functional quality control tracking throughout their fabrication cycle.</p>
            </div>
            <div className="crit-item">
              <h4>RoHS Compliance</h4>
              <p>All component traces and solder alloys must be lead-free and conform to environmental codes.</p>
            </div>
            <div className="crit-item">
              <h4>RMA Assurance</h4>
              <p>Factories must offer a structured RMA credit policy for component defects during assembly audits.</p>
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

        /* Map Section */
        .map-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .map-graphics-panel {
          height: 350px;
          border-color: var(--border-glass-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13, 24, 56, 0.2);
          position: relative;
          overflow: hidden;
        }

        .vector-world-map {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-globe-icon {
          color: var(--color-cyan);
          opacity: 0.15;
          animation: spinGlobe 40s linear infinite;
        }

        /* Glowing locations */
        .glowing-node {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-white);
        }

        .glowing-node::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-cyan);
          box-shadow: 0 0 10px var(--color-cyan);
          display: inline-block;
          animation: pulseNode 2s infinite;
        }

        .node-taiwan { top: 35%; left: 65%; }
        .node-korea { top: 20%; left: 60%; }
        .node-china { top: 40%; left: 55%; }
        .node-germany { top: 25%; left: 25%; }
        .node-india { top: 48%; left: 42%; }
        .node-india::before {
          background: var(--color-gold);
          box-shadow: 0 0 10px var(--color-gold);
        }

        @keyframes pulseNode {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .sourcing-locations-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sourcing-locations-list li {
          font-size: 0.95rem;
          color: var(--text-light);
          position: relative;
          padding-left: 20px;
        }

        .sourcing-locations-list li::before {
          content: '■';
          position: absolute;
          left: 0;
          color: var(--color-gold-bright);
          font-size: 0.75rem;
          top: 3px;
        }

        /* Steps */
        .sourcing-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .sourcing-step-card {
          padding: 30px 20px;
          position: relative;
        }

        .step-badge-index {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1rem;
          color: var(--bg-dark-obsidian);
          background: var(--color-gold-gradient);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          box-shadow: var(--border-glow-gold);
        }

        .sourcing-step-card h3 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--text-white);
        }

        .sourcing-step-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Vendor Policy Box */
        .vendor-policy-box {
          border-color: var(--border-glass-gold);
          padding: 40px;
        }

        .policy-icon-wrapper {
          color: var(--color-gold-bright);
          filter: drop-shadow(0 0 5px var(--color-gold));
          margin-bottom: 15px;
        }

        .vendor-policy-box h2 {
          font-size: 1.8rem;
          margin-bottom: 25px;
        }

        .criteria-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 25px;
        }

        .crit-item h4 {
          font-size: 1.05rem;
          color: var(--color-cyan);
          margin-bottom: 6px;
        }

        .crit-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 991px) {
          .map-grid {
            grid-template-columns: 1fr;
          }
          .sourcing-steps-grid {
            grid-template-columns: 1fr 1fr;
          }
          .criteria-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .sourcing-steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
