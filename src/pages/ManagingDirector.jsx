import React from "react";
import { User, Quote, Shield, Award, Calendar, Lightbulb, PenTool } from "lucide-react";

export default function ManagingDirector() {
  const experiences = [
    { title: "15+ Years", desc: "Active experience in global component distribution & supply chain logistics." },
    { title: "WPC & Telecom clearance", desc: "Expertise in managing wireless product certificates and customs codes." },
    { title: "B2B Partnership desk", desc: "Orchestrated delivery networks with top electronics OEMs." }
  ];

  return (
    <div className="md-page page-padding">
      {/* BANNER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Leadership Message</span>
          <h1 className="section-title">Managing Director's Desk</h1>
          <p className="section-desc">
            Direct communication from our Founder &amp; MD outlining our technology imports direction and vision.
          </p>
        </div>
      </section>

      {/* CORE PROFILE SECTION */}
      <section className="section animate-on-scroll">
        <div className="container md-grid">
          {/* Left: MD Photo Panel */}
          <div className="md-photo-panel glass-card">
            <div className="md-avatar-container">
              {/* Premium Tech Avatar Visual */}
              <User size={120} className="md-avatar-icon" />
              <div className="avatar-glow"></div>
            </div>
            <div className="md-meta-text">
              <h3>Mohammad Faizan</h3>
              <span className="designation">Founder &amp; Managing Director</span>
              <p className="organization">Leonce Multiventure</p>
            </div>
            
            <div className="experiences-grid">
              {experiences.map((exp, idx) => (
                <div className="exp-badge" key={idx}>
                  <div className="exp-title">{exp.title}</div>
                  <div className="exp-desc">{exp.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Message & Vision */}
          <div className="md-content-panel">
            <div className="quote-intro">
              <Quote className="quote-icon" size={32} />
              <h2>"Importing high-precision technology elements with absolute quality verification and delivery transparency."</h2>
            </div>

            <div className="md-story">
              <h3>Dear Valued Business Partners, Wholesalers &amp; Clients,</h3>
              <p>
                Welcome to Leonce Multiventure. Since our founding in 2019, our trajectory has been driven by a single guiding objective: <strong>to simplify, audit, and secure technology sourcing channels.</strong>
              </p>
              <p>
                The modern electronics industry moves at a rapid pace. High-density PCB boards, SMT component trace assemblies, WiFi routers, and IoT terminals are building blocks for automation, smart cities, and communication systems. However, sourcing these components at scale without quality degradation or customs logjams requires specialized expertise.
              </p>
              <p>
                At Leonce Multiventure, we have invested years in streamlining vendor verification, bulk custom pricing, and shipping safety checks. We act as your on-site quality control agents, ensuring that every shipment arriving at your warehouse matches IPC standards.
              </p>
            </div>

            <div className="vision-bullets">
              <div className="v-bullet">
                <Shield size={20} className="v-bullet-icon" />
                <div>
                  <h4>Zero-Defect Commitment</h4>
                  <p>Implementing pre-shipment tests so B2B consignments reach assembly lines without failures.</p>
                </div>
              </div>
              <div className="v-bullet">
                <Lightbulb size={20} className="v-bullet-icon" />
                <div>
                  <h4>Future Business Goals</h4>
                  <p>Expanding direct imports of multi-protocol WiFi 6 mesh terminals, IoT arrays, and sub-assembly modules to support upcoming smart-city infrastructures.</p>
                </div>
              </div>
            </div>

            {/* Signature representation */}
            <div className="signature-container">
              <div className="signature-line">
                <span className="cursive-signature">M. Faizan</span>
                <PenTool size={16} className="signature-tool-icon" />
              </div>
              <span className="signature-lbl">Mohammad Faizan</span>
              <span className="signature-sub">Managing Director, Leonce Multiventure</span>
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

        .md-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }

        /* Left Photo Panel */
        .md-photo-panel {
          text-align: center;
          padding: 40px 30px;
          border-color: var(--border-glass-gold);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .md-avatar-container {
          position: relative;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: var(--bg-deep-navy);
          border: 3px solid var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          overflow: hidden;
          box-shadow: var(--shadow-neon-gold);
        }

        .md-avatar-icon {
          color: var(--text-muted);
          z-index: 2;
        }

        .avatar-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(197, 160, 89, 0.2) 0%, transparent 70%);
          z-index: 1;
        }

        .md-meta-text h3 {
          font-size: 1.5rem;
          color: var(--text-white);
          margin-bottom: 5px;
        }

        .md-meta-text .designation {
          font-size: 0.9rem;
          color: var(--color-gold-bright);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .md-meta-text .organization {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .experiences-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 25px;
        }

        .exp-badge {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-glass-blue);
          border-radius: 4px;
          padding: 12px;
          text-align: left;
        }

        .exp-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-cyan);
          margin-bottom: 4px;
        }

        .exp-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Right Content Panel */
        .md-content-panel {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .quote-intro {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-left: 4px solid var(--color-gold);
          padding-left: 24px;
        }

        .quote-icon {
          color: var(--color-gold-bright);
        }

        .quote-intro h2 {
          font-size: 1.6rem;
          line-height: 1.4;
          font-weight: 600;
          color: var(--text-light);
        }

        .md-story {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .md-story h3 {
          font-size: 1.25rem;
          color: var(--text-white);
        }

        .md-story p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .vision-bullets {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .v-bullet {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          transition: var(--transition-smooth);
        }

        .v-bullet:hover {
          transform: translateX(8px);
        }

        .v-bullet:hover .v-bullet-icon {
          color: var(--color-gold-bright);
        }

        .v-bullet-icon {
          color: var(--color-cyan);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .v-bullet h4 {
          font-size: 1.05rem;
          color: var(--text-white);
          margin-bottom: 4px;
        }

        .v-bullet p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .signature-container {
          margin-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 25px;
          max-width: 300px;
        }

        .signature-line {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 8px;
        }

        .cursive-signature {
          font-family: 'Georgia', cursive, serif;
          font-size: 2.25rem;
          font-style: italic;
          color: var(--color-gold-bright);
          letter-spacing: 1px;
        }

        .signature-tool-icon {
          color: var(--text-muted);
          opacity: 0.5;
        }

        .signature-lbl {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-white);
          display: block;
        }

        .signature-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .md-photo-panel:hover {
          transform: translateY(-4px);
          box-shadow: var(--border-glow-gold);
        }

        @media (max-width: 991px) {
          .md-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .md-photo-panel {
            padding: 30px 20px;
          }
          .md-avatar-container {
            width: 150px;
            height: 150px;
          }
          .md-avatar-icon {
            width: 100px;
            height: 100px;
          }
          .quote-intro h2 {
            font-size: 1.3rem;
          }
          .signature-container {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
