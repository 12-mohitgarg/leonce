import React from "react";
import { Cpu, Globe, Share2, Compass, Radio, Shield, Server, Layers } from "lucide-react";

export default function ClientSlider() {
  const partners = [
    { icon: <Cpu />, name: "IntelSourcing" },
    { icon: <Globe />, name: "GlobalNet Hub" },
    { icon: <Compass />, name: "AsiaProcure" },
    { icon: <Layers />, name: "ApexChip Ltd" },
    { icon: <Server />, name: "ServerCore Tech" },
    { icon: <Radio />, name: "TelecomAlliance" },
    { icon: <Shield />, name: "SecureLogistics" },
    { icon: <Share2 />, name: "ProtoManufacture" }
  ];

  // Double the array to make the infinite scrolling smooth
  const doublePartners = [...partners, ...partners];

  return (
    <div className="slider-wrapper">
      <div className="slider-gradient-left"></div>
      <div className="infinite-slider-track">
        {doublePartners.map((partner, index) => (
          <div className="partner-logo-card" key={index}>
            <div className="partner-icon">{partner.icon}</div>
            <span className="partner-name">{partner.name}</span>
          </div>
        ))}
      </div>
      <div className="slider-gradient-right"></div>

      <style>{`
        .slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 30px 0;
          background: rgba(4, 7, 18, 0.4);
          border-top: 1px solid var(--border-glass-blue);
          border-bottom: 1px solid var(--border-glass-blue);
          display: flex;
          align-items: center;
        }

        .partner-logo-card {
          width: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--text-muted);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .partner-logo-card:hover {
          color: var(--color-gold-bright);
          text-shadow: var(--border-glow-gold);
        }

        .partner-icon {
          color: var(--color-cyan);
          display: flex;
          align-items: center;
        }

        .partner-logo-card:hover .partner-icon {
          color: var(--color-gold-bright);
          filter: drop-shadow(0 0 5px var(--color-gold));
        }

        .partner-name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Gradient mask for smooth edge fade-out */
        .slider-gradient-left, .slider-gradient-right {
          position: absolute;
          top: 0;
          width: 15%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .slider-gradient-left {
          left: 0;
          background: linear-gradient(90deg, var(--bg-dark-obsidian) 0%, transparent 100%);
        }

        .slider-gradient-right {
          right: 0;
          background: linear-gradient(-90deg, var(--bg-dark-obsidian) 0%, transparent 100%);
        }
      `}</style>
    </div>
  );
}
