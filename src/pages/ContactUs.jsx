import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  const officeDetails = [
    {
      icon: <MapPin className="contact-card-icon" />,
      title: "Corporate Headquarters",
      details: "OFFICE 523D, SWASTIK DISHA CORPORATE PARK, KOHINOOR COMPOUND, LBS MARG, GHATKOPAR WEST OPP SHREYAS CINEMA, Mumbai, Mumbai, Mumbai, Maharashtra, India, 400086"
    },
    {
      icon: <Mail className="contact-card-icon" />,
      title: "Support Email",
      details: "support@leoncemultiventure.com"
    },
    {
      icon: <Mail className="contact-card-icon" />,
      title: "Banking Email",
      details: "banking@leoncemultiventure.com"
    },
    {
      icon: <Clock className="contact-card-icon" />,
      title: "Business Hours",
      details: "Monday - Saturday: 09:00 AM - 06:00 PM IST (Closed Sundays)"
    }
  ];

  return (
    <div className="contact-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Reach Our Team</span>
          <h1 className="section-title">Contact Leonce Multiventure</h1>
          <p className="section-desc">
            Get in touch with our global logistics and product verification desk. Submit an RfQ for high-speed routers, PCBs, or custom manufacturing.
          </p>
        </div>
      </section>

      {/* CORE DETAILS & FORM GRID */}
      <section className="section animate-on-scroll">
        <div className="container contact-main-grid">
          {/* Left Panel: Contact Cards & Info */}
          <div className="contact-info-panel">
            <h2 className="glow-text-gold">Sourcing Inquiries</h2>
            <p className="contact-panel-intro">
              Whether you are a wholesaler looking to distribute WiFi products or a manufacturer requiring PCB panels, our specialists are ready to advise you.
            </p>

            <div className="contact-cards-list">
              {officeDetails.map((det, idx) => (
                <div className="contact-detail-card glass-card" key={idx}>
                  <div className="contact-detail-icon-box">{det.icon}</div>
                  <div>
                    <h4>{det.title}</h4>
                    <p>{det.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social linkages */}
            <div className="socials-contact-block" style={{ marginTop: 30 }}>
              <h4>Follow Corporate Announcements</h4>
              <div className="contact-social-row">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS INTERACTIVE SIMULATION */}
      <section className="section bg-deep-navy animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Location Map</span>
            <h2 className="section-title">Our Office Coordinates</h2>
            <p className="section-desc">Located at the central technology hub of Mumbai, India for rapid client logistics coordination.</p>
          </div>

          {/* Map box */}
          <div className="mock-maps-container glass-card">
            <div className="mock-maps-grid-overlay">
              <MapPin size={48} className="map-pin-pulse" />
              <div className="mock-maps-popup glass-card">
                <h4>Leonce Multiventure</h4>
                <p>OFFICE 523D, SWASTIK DISHA CORPORATE PARK, GHATKOPAR WEST, Mumbai 400086</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-map-link">Open in Google Maps</a>
              </div>
            </div>
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

    .contact-main-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 60px;
      align-items: flex-start;
    }

    .contact-info-panel {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .contact-info-panel h2 {
      font-size: 2rem;
    }

    .contact-panel-intro {
      font-size: 0.95rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .contact-cards-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .contact-detail-card {
      display: flex;
      gap: 15px;
      align-items: center;
      padding: 20px;
      border-color: var(--border-glass-blue);
    }

    .contact-detail-icon-box {
      color: var(--color-cyan);
      filter: drop-shadow(0 0 4px rgba(0, 225, 255, 0.3));
    }

    .contact-detail-card h4 {
      font-size: 0.95rem;
      color: var(--text-white);
      margin-bottom: 4px;
    }

    .contact-detail-card p {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    .contact-detail-card:hover {
      transform: translateY(-4px);
      border-color: var(--color-gold);
    }

    /* Social row */
    .socials-contact-block h4 {
      font-size: 0.9rem;
      color: var(--text-white);
      text-transform: uppercase;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }

    .contact-social-row {
      display: flex;
      gap: 15px;
    }

    .contact-social-row a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: var(--text-muted);
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-glass-blue);
      padding: 8px 16px;
      border-radius: 4px;
      transition: var(--transition-smooth);
    }

    .contact-social-row a:hover {
      border-color: var(--color-gold);
      color: var(--color-gold-bright);
      box-shadow: var(--border-glow-gold);
    }

    /* Mock maps */
    .mock-maps-container {
      height: 400px;
      border-color: var(--border-glass-gold);
      position: relative;
      background: linear-gradient(135deg, #090f23 0%, #03050c 100%);
      overflow: hidden;
      transition: var(--transition-smooth);
    }

    .mock-maps-container:hover {
      box-shadow: var(--border-glow-gold);
    }

    .mock-maps-grid-overlay {
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(0, 225, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 225, 255, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .map-pin-pulse {
      color: var(--color-gold-bright);
      filter: drop-shadow(0 0 10px var(--color-gold));
      animation: bounce 2s infinite;
      z-index: 10;
    }

    .mock-maps-popup {
      position: absolute;
      bottom: 40px;
      background: var(--bg-deep-navy);
      border-color: var(--border-glass-blue);
      padding: 20px;
      text-align: center;
      max-width: 280px;
      box-shadow: var(--shadow-premium);
      z-index: 20;
      transition: var(--transition-smooth);
    }

    .mock-maps-popup:hover {
      transform: translateY(-4px);
      border-color: var(--color-gold);
    }

    .mock-maps-popup h4 {
      font-size: 1.05rem;
      color: var(--text-white);
      margin-bottom: 4px;
    }

    .mock-maps-popup p {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 12px;
    }

    .btn-map-link {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-cyan);
      text-transform: uppercase;
    }

    .btn-map-link:hover {
      color: var(--text-white);
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @media (max-width: 991px) {
      .contact-main-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 600px) {
      .page-header {
        padding: 60px 16px;
      }
      .contact-main-grid {
        gap: 30px;
      }
      .contact-detail-card {
        padding: 15px;
        gap: 12px;
      }
      .contact-social-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
      .contact-social-row a {
        padding: 8px 12px;
        font-size: 0.8rem;
        justify-content: center;
      }
      .mock-maps-container {
        height: 280px;
      }
      .mock-maps-popup {
        bottom: 20px;
        left: 10px;
        right: 10px;
        max-width: calc(100% - 20px);
        padding: 15px;
      }
    }
  `}</style>
);
