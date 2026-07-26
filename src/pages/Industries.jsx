import React from "react";
import { 
  Radio, Cpu, Smartphone, Settings, Home, Shield, 
  GraduationCap, Briefcase, Building, Landmark, ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Industries() {
  const industriesList = [
    {
      icon: <Radio size={32} />,
      title: "Telecommunications",
      desc: "Providing high-frequency HDI circuit boards and custom network modules for telecom base stations and signal nodes."
    },
    {
      icon: <Cpu size={32} />,
      title: "Networking Devices",
      desc: "Bulk importing WiFi 6 routers, fiber switches, and mesh hardware for enterprise network deployments."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Consumer Electronics",
      desc: "Supplying lead-free pick-and-place PCBA batches for appliances, smart peripherals, and portable devices."
    },
    {
      icon: <Settings size={32} />,
      title: "Industrial Automation",
      desc: "Sourcing ruggedized controller boards, diagnostic displays, and sensor components for factory lines."
    },
    {
      icon: <Home size={32} />,
      title: "Smart Home",
      desc: "Procuring wireless Zigbee gateways, BLE sensor relays, and automation controller hubs."
    },
    {
      icon: <Shield size={32} />,
      title: "Security Systems",
      desc: "Importing IP camera processor boards, DVR motherboard circuitry, and biometric scanner modules."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Educational Institutions",
      desc: "Supplying development boards, microprocessors, and custom electronic kits for engineering fabs."
    },
    {
      icon: <Landmark size={32} />,
      title: "Government Projects",
      desc: "Handling high-security, custom-spec telecom component procurement matching national regulatory codes."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Corporate Businesses",
      desc: "Delivering complete mesh solutions, office routing setups, and custom office branding (OEM)."
    },
    {
      icon: <Building size={32} />,
      title: "Manufacturing Industries",
      desc: "Supplying bulk electronic components, connectors, and sub-assemblies to keep factory assembly lines operational."
    }
  ];

  return (
    <div className="industries-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Target Sectors</span>
          <h1 className="section-title">Industries We Serve</h1>
          <p className="section-desc">
            We deliver verified technology hardware and custom electronics across multiple commercial, corporate, and public industries.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="industries-showcase-grid">
            {industriesList.map((ind, idx) => (
              <div className="industry-sector-card glass-card" key={idx}>
                <div className="sector-icon-box">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B ALLIANCES CTA */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container center-cta-wrapper glass-card">
          <h2>Specialized Industry Specifications?</h2>
          <p>
            Whether your project requires custom impedance-controlled PCB layering for telemetry or custom firmware configurations for WiFi mesh routing, our factory partners can accommodate specific requirements.
          </p>
          <div style={{ marginTop: 25 }}>
            <Link to="/contact" className="btn btn-gold">
              Submit Industry RfQ <ChevronRight size={14} />
            </Link>
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

        .industries-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .industry-sector-card {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .sector-icon-box {
          color: var(--color-cyan);
          filter: drop-shadow(0 0 5px rgba(0, 225, 255, 0.3));
        }

        .industry-sector-card h3 {
          font-size: 1.2rem;
          color: var(--text-white);
        }

        .industry-sector-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .industry-sector-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
        }

        /* Center box */
        .center-cta-wrapper {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          border-color: var(--border-glass-gold);
          transition: var(--transition-smooth);
        }

        .center-cta-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: var(--border-glow-gold);
        }

        .center-cta-wrapper h2 {
          font-size: 1.8rem;
          margin-bottom: 12px;
        }

        .center-cta-wrapper p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 991px) {
          .industries-showcase-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .industries-showcase-grid {
            grid-template-columns: 1fr;
          }
          .center-cta-wrapper {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}
