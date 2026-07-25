import React from "react";
import { Star, ShieldCheck, Award, TrendingUp, Radio } from "lucide-react";

export default function Timeline() {
  const milestones = [
    {
      year: "2019",
      title: "Founding & Establishment",
      icon: <Star size={18} />,
      desc: "Leonce Multiventure was founded with a mission to deliver premium-grade electronic imports, bridging global sourcing with local production requirements."
    },
    {
      year: "2021",
      title: "High-Frequency PCB / SMT PCBA Streamlining",
      icon: <Award size={18} />,
      desc: "Standardized imports of multilayer high TG PCB boards and expanded SMT/DIP PCB assembly sourcing partnerships across primary tech manufacturing zones."
    },
    {
      year: "2023",
      title: "OEM & ODM Integration",
      icon: <ShieldCheck size={18} />,
      desc: "Pivoted to offer direct OEM and ODM custom product procurement, ensuring international compliance certificate checks (CE, FCC, RoHS) for bulk B2B clients."
    },
    {
      year: "2025",
      title: "Global Supply Chain Infrastructure",
      icon: <TrendingUp size={18} />,
      desc: "Optimized shipping and logistics channels with automated customs clearance documentation and warehousing centers, achieving 99% fast-delivery timelines."
    },
    {
      year: "2026",
      title: "LEONCE MULTIVENTURE Expansion",
      icon: <Radio size={18} />,
      desc: "Incorporating WiFi 6 routers, enterprise gateway hubs, IoT networks, and custom embedded components into the central import portfolio, becoming India's trusted technology partner."
    }
  ];

  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {milestones.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="timeline-badge">
              {item.icon}
            </div>
            <div className="timeline-panel glass-card">
              <div className="timeline-year">{item.year}</div>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-section {
          padding: 20px 0;
          position: relative;
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Central Line */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--color-cyan) 0%, var(--color-gold) 50%, var(--color-blue) 100%);
          transform: translateX(-50%);
        }

        .timeline-item {
          padding: 20px 40px;
          position: relative;
          width: 50%;
          display: flex;
          justify-content: flex-end;
        }

        .timeline-item.right {
          left: 50%;
          justify-content: flex-start;
        }

        /* Timeline Badge (Circle icon) */
        .timeline-badge {
          position: absolute;
          right: -20px;
          top: 30px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-deep-navy);
          border: 2px solid var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold-bright);
          z-index: 10;
          box-shadow: var(--border-glow-gold);
          transition: var(--transition-smooth);
        }

        .timeline-item.right .timeline-badge {
          left: -20px;
          right: auto;
        }

        .timeline-item:hover .timeline-badge {
          background: var(--color-gold-gradient);
          color: var(--bg-dark-obsidian);
          transform: scale(1.1);
        }

        /* Panel Glass Card customization */
        .timeline-panel {
          width: 85%;
          position: relative;
          padding: 24px;
        }

        .timeline-year {
          display: inline-block;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--color-cyan);
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .timeline-title {
          font-size: 1.15rem;
          margin-bottom: 10px;
          color: var(--text-white);
        }

        .timeline-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Responsive timeline */
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
            transform: none;
          }

          .timeline-item {
            width: 100%;
            left: 0 !important;
            padding-left: 50px;
            padding-right: 0;
            justify-content: flex-start;
          }

          .timeline-badge {
            left: 0px !important;
            right: auto;
          }

          .timeline-panel {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
