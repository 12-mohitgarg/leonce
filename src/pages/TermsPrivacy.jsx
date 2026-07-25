import React from "react";

export default function TermsPrivacy() {
  return (
    <div className="legal-page page-padding">
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Legal Framework</span>
          <h1 className="section-title">Terms &amp; Privacy Policies</h1>
          <p className="section-desc">
            Please review our corporate terms of services, bulk order agreements, and data privacy policies.
          </p>
        </div>
      </section>

      <section className="section animate-on-scroll">
        <div className="container legal-max-width">
          <div className="legal-block glass-card">
            <h2>1. Privacy Policy &amp; Data Sourcing</h2>
            <p>
              Leonce Multiventure is committed to protecting B2B client details. The information submitted via our Contact Sourcing form (including Name, Email, phone numbers, and company specifications) is strictly processed to draft tariff calculations and vendor coordinates.
            </p>
            <p>
              We do not distribute, lease, or resell client database lists to marketing entities. All logs are stored securely using standard database safety filters.
            </p>
            
            <h3>Cookies &amp; Local Logs</h3>
            <p>
              Our web services use cookies and local storage tokens to preserve active admin sessions and remember filtering tab profiles to optimize client browsing.
            </p>
          </div>

          <div className="legal-block glass-card" style={{ marginTop: 30 }}>
            <h2>2. Terms of Services &amp; Bulk Procurement</h2>
            <p>
              All importing contracts, pricing quotes, and shipping schedules are subject to finalized B2B agreements:
            </p>
            <ul className="legal-bullets">
              <li><strong>RMA Replacement:</strong> Defective semiconductor components or hardware boards must be logged within 14 days of port delivery to claim RMA vendor credits.</li>
              <li><strong>Regulatory Clearances:</strong> Leonce Multiventure handles WPC clearances, customs clearances, and HS coding; clients remain responsible for local operating licenses.</li>
              <li><strong>Jurisdiction:</strong> Sourcing agreements are governed by the commercial laws of Mumbai, India.</li>
            </ul>
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

    .legal-max-width {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .legal-block {
      padding: 40px;
      border-color: var(--border-glass-blue);
    }

    .legal-block h2 {
      font-size: 1.4rem;
      color: var(--text-white);
      margin-bottom: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 10px;
    }

    .legal-block h3 {
      font-size: 1.15rem;
      color: var(--color-gold-bright);
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .legal-block p {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 15px;
    }

    .legal-bullets {
      list-style: none;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .legal-bullets li {
      font-size: 0.9rem;
      color: var(--text-muted);
      position: relative;
      padding-left: 20px;
      line-height: 1.5;
    }

    .legal-bullets li::before {
      content: '■';
      position: absolute;
      left: 0;
      color: var(--color-gold);
      font-size: 0.75rem;
      top: 3px;
    }
  `}</style>
);
