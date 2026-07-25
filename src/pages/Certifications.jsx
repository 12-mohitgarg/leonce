import React from "react";
import { FileCheck, Shield, Award, Landmark, FileText } from "lucide-react";

export default function Certifications() {
  const certificates = [
    {
      icon: <Landmark />,
      title: "Business Registration & Incorporation",
      authority: "Ministry of Corporate Affairs (MCA)",
      details: "Official incorporation license authorizing Leonce Multiventure's trade and commercial import operations."
    },
    {
      icon: <FileText />,
      title: "Import-Export Code (IEC)",
      authority: "Directorate General of Foreign Trade (DGFT)",
      details: "Authorized IEC profile enabling seamless bulk sea and air cargo clearance across all Indian ports."
    },
    {
      icon: <Award />,
      title: "Quality Management System ISO 9001",
      authority: "International Certification Registrar",
      details: "Certified quality management tracking covering sourcing audits, vendor evaluations, and warehouse inspections."
    },
    {
      icon: <Shield />,
      title: "WPC Wireless Equipment Approval",
      authority: "Wireless Planning &amp; Coordination Wing",
      details: "WPC/ETA licenses authorizing importation and distribution of WiFi 6 routers, mesh gateways, and wireless IoT devices."
    },
    {
      icon: <FileCheck />,
      title: "CE & FCC International Compliance",
      authority: "European &amp; American Labs",
      details: "Vendor quality certifications verifying hardware electromagnetic signal compatibility and low-frequency radiation rules."
    },
    {
      icon: <FileCheck />,
      title: "RoHS Environmental Compliance",
      authority: "International Testing Agencies",
      details: "Lead-free trace certification documents verifying component compliance with global environmental standards."
    }
  ];

  return (
    <div className="certifications-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Legal &amp; Regulatory approvals</span>
          <h1 className="section-title">Corporate Certifications</h1>
          <p className="section-desc">
            We operate fully authorized technology importing pipelines. Review our trade, customs, wireless clearance, and environmental certifications.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="certs-grid">
            {certificates.map((cert, idx) => (
              <div className="cert-card glass-card" key={idx}>
                <div className="cert-icon-box">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <span className="cert-authority">{cert.authority}</span>
                <p>{cert.details}</p>
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

    .certs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    .cert-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
      border-color: var(--border-glass-blue);
    }

    .cert-icon-box {
      color: var(--color-cyan);
      filter: drop-shadow(0 0 5px rgba(0, 225, 255, 0.3));
    }

    .cert-card h3 {
      font-size: 1.15rem;
      color: var(--text-white);
    }

    .cert-authority {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-gold-bright);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .cert-card p {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    @media (max-width: 991px) {
      .certs-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 600px) {
      .certs-grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>
);
