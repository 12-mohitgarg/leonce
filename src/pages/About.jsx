import React from "react";
import { Compass, Eye, ShieldCheck, Target, Award, Users, HardDrive, HelpCircle } from "lucide-react";
import Timeline from "../components/Timeline";

export default function About() {
  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Unyielding Quality",
      desc: "We perform multiple verification loops and electrical testing on all imported PCB/PCBA batches before logistics release."
    },
    {
      icon: <Compass size={28} />,
      title: "Global Compliance",
      desc: "Ensuring all WiFi devices and IoT systems comply strictly with FCC, CE, WPC, and RoHS international certifications."
    },
    {
      icon: <Users size={28} />,
      title: "Wholesale Partnerships",
      desc: "Operating strictly in B2B supply agreements to support distributors, wholesalers, and large-scale infrastructure projects."
    },
    {
      icon: <Award size={28} />,
      title: "Technical Excellence",
      desc: "Delivering fully custom ODM manufacturing channels, backed by in-house engineering and supplier-side review desks."
    }
  ];

  return (
    <div className="about-page page-padding">
      {/* HEADER BANNER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Our Corporate Profile</span>
          <h1 className="section-title">About Leonce Multiventure</h1>
          <p className="section-desc">
            Learn about our path in becoming a premium technology importer, quality auditor, and electronics supplier.
          </p>
        </div>
      </section>

      {/* OVERVIEW & STORY */}
      <section className="section animate-on-scroll">
        <div className="container story-grid">
          <div className="story-content">
            <h2 className="glow-text-gold">Connecting Global Innovation With B2B Networks</h2>
            <p className="lead-text">
              Leonce Multiventure acts as a verified, secure bridge for electronics supply chains, specializing in the bulk importation of high-grade PCBs, custom PCBA, WiFi Routers, and smart communication equipment.
            </p>
            <p>
              By aligning with leading engineering fabs in South Korea, China, and Taiwan, we ensure that domestic retailers, corporate projects, and government contractors receive Tier-1 electronics with fully certified component traces. We manage vendor selection, transport logistics, customs filing, and safety documentation.
            </p>
            
            <div className="philosophy-box glass-card" style={{ marginTop: 25 }}>
              <h4>Business Philosophy</h4>
              <p>
                "We do not merely supply components. We build long-term channels that keep assembly lines operational, networks connected, and digital operations secure."
              </p>
            </div>
          </div>
          <div className="story-stats-panel glass-card">
            <h3>Key Capabilities</h3>
            <ul className="capabilities-list">
              <li>
                <HardDrive size={18} className="cap-icon" />
                <span><strong>Multi-layer HDI PCB:</strong> Sourced up to 32 layers.</span>
              </li>
              <li>
                <Award size={18} className="cap-icon" />
                <span><strong>SMT Assemblies:</strong> High precision 01005 component trace placement.</span>
              </li>
              <li>
                <Compass size={18} className="cap-icon" />
                <span><strong>WPC/WIFI Certifications:</strong> Fully cleared telecom terminal networks.</span>
              </li>
              <li>
                <Users size={18} className="cap-icon" />
                <span><strong>Logistics Hubs:</strong> Customs clearance desks at major ports.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container mv-grid">
          <div className="mv-card glass-card">
            <div className="mv-icon-wrapper"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>
              To establish an unshakeable supply chain of electronics and networking terminals for B2B enterprises. We aim to decrease sourcing bottlenecks, ensure 100% quality verification, and deliver competitive pricing structures to our wholesale distribution partners.
            </p>
          </div>
          <div className="mv-card glass-card">
            <div className="mv-icon-wrapper"><Eye size={32} /></div>
            <h3>Our Vision</h3>
            <p>
              To become the most reliable and premium technology importer in India by 2030, recognized for our compliance checking, customs expertise, and strict alignment with global manufacturing advancements in high-frequency wireless communications.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY TIMELINE (STORY MILESTONES) */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Milestones</span>
            <h2 className="section-title">Our Growth Timeline</h2>
            <p className="section-desc">Trace our key accomplishments, expansion dates, and business achievements since founding.</p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Foundations</span>
            <h2 className="section-title">Core Values We Live By</h2>
            <p className="section-desc">The principles that dictate our procurement choices and corporate relationships.</p>
          </div>
          <div className="values-grid">
            {values.map((val, idx) => (
              <div className="val-card glass-card" key={idx}>
                <div className="val-icon-box">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="section trust-section animate-on-scroll">
        <div className="container text-center">
          <HelpCircle size={40} className="trust-main-icon" />
          <h2 className="section-title">Why Business Partners Trust Us</h2>
          <p className="section-desc" style={{ marginBottom: 30 }}>
            In the B2B tech import market, reliability is the ultimate currency. We reduce hardware failure rates and document issues.
          </p>
          <div className="trust-points-grid">
            <div className="trust-point">
              <h4>Direct Fabs Partnership</h4>
              <p>We eliminate broker markups by contracting directly with global silicon fabs.</p>
            </div>
            <div className="trust-point">
              <h4>End-to-End Customs Filing</h4>
              <p>Our in-house logistics desk handles licenses and customs clearances.</p>
            </div>
            <div className="trust-point">
              <h4>Worry-Free Warranty</h4>
              <p>All bulk orders are backed by a structured RMA hardware replacement policy.</p>
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

        .story-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 600px) {
          .story-grid {
            gap: 30px;
          }
          .story-content {
            order: 2;
          }
          .story-stats-panel {
            order: 1;
          }
        }

        .lead-text {
          font-size: 1.15rem;
          color: var(--text-light);
          margin-bottom: 15px;
          font-weight: 500;
        }

        .story-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .philosophy-box {
          border-left: 3px solid var(--color-gold);
          border-color: var(--border-glass-gold);
          padding: 20px;
          transition: var(--transition-smooth);
        }

        .philosophy-box:hover {
          transform: translateY(-4px);
          box-shadow: var(--border-glow-gold);
        }

        .philosophy-box h4 {
          font-family: var(--font-display);
          color: var(--color-gold-bright);
          margin-bottom: 6px;
        }

        .philosophy-box p {
          font-style: italic;
          color: var(--text-light);
        }

        .story-stats-panel {
          border-color: var(--border-glass-blue);
          padding: 30px;
          transition: var(--transition-smooth);
        }

        .story-stats-panel:hover {
          transform: translateY(-4px);
          border-color: var(--color-gold);
        }

        .story-stats-panel h3 {
          font-size: 1.25rem;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 10px;
        }

        .capabilities-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .capabilities-list li {
          display: flex;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-light);
          transition: var(--transition-smooth);
        }

        .capabilities-list li:hover {
          transform: translateX(8px);
          color: var(--text-white);
        }

        .cap-icon {
          color: var(--color-cyan);
          flex-shrink: 0;
        }

        /* Mission & Vision */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .mv-card {
          padding: 40px;
          transition: var(--transition-smooth);
        }

        .mv-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
        }

        .mv-icon-wrapper {
          color: var(--color-cyan);
          filter: drop-shadow(0 0 5px rgba(0, 225, 255, 0.4));
          margin-bottom: 20px;
        }

        .mv-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
        }

        .mv-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .val-card {
          padding: 30px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .val-icon-box {
          color: var(--color-gold);
          filter: drop-shadow(0 0 4px var(--color-gold));
        }

        .val-card h3 {
          font-size: 1.1rem;
        }

        .val-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .val-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
        }

        /* Trust section */
        .trust-main-icon {
          color: var(--color-cyan);
          margin-bottom: 15px;
          filter: drop-shadow(0 0 8px rgba(0, 225, 255, 0.4));
        }

        .trust-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 900px;
          margin: 40px auto 0 auto;
        }

        .trust-point h4 {
          font-size: 1.1rem;
          color: var(--color-gold-bright);
          margin-bottom: 10px;
        }

        .trust-point p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .trust-point {
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          transition: var(--transition-smooth);
        }

        .trust-point:hover {
          background: rgba(197, 160, 89, 0.05);
          transform: translateY(-4px);
        }

        @media (max-width: 991px) {
          .story-grid {
            grid-template-columns: 1fr;
          }
          .mv-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr 1fr;
          }
          .trust-points-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
