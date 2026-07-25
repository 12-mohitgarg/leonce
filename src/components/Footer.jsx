import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Column 1: Info */}
          <div className="footer-col info-col">
            <div className="footer-brand">
              <span className="brand-text-primary">LEONCE</span>
              <span className="brand-text-secondary">MULTIVENTURE</span>
            </div>
            <p className="footer-desc">
              Premier technology importer and electronics distribution enterprise. Connecting global manufacturers with wholesale distributors and B2B projects.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://leonce.com" target="_blank" rel="noreferrer" aria-label="Website"><Globe size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Company</Link></li>
              <li><Link to="/md">Managing Director</Link></li>
              <li><Link to="/portfolio">Corporate Portfolio</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/contact">Reach Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="footer-col">
            <h3 className="footer-heading">Product Range</h3>
            <ul className="footer-links">
              <li><Link to="/products?category=PCB">HDI PCB Boards</Link></li>
              <li><Link to="/products?category=PCBA">SMT PCBA Assemblies</Link></li>
              <li><Link to="/products?category=WiFi Routers">WiFi 6 Routers</Link></li>
              <li><Link to="/products?category=IoT Devices">IoT Gateways &amp; Hubs</Link></li>
              <li><Link to="/products?category=Communication Devices">Telecommunications</Link></li>
              <li><Link to="/products?category=Embedded Hardware">Embedded Modules</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col contact-col">
            <h3 className="footer-heading">Corporate Office</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={20} className="contact-icon" />
                <span>Leonce Multiventure, Suite 402, Technology Square, Mumbai, MH 400051, India</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+912288884444">+91 22 8888 4444</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@leonce-multiventure.com">info@leonce-multiventure.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} LEONCE MULTIVENTURE. All Rights Reserved. Designed by Faizan.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} /> Top
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: #03060f;
          border-top: 1px solid var(--border-glass-blue);
          color: var(--text-muted);
          position: relative;
        }

        .footer-top {
          padding: 80px 24px 60px 24px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
          width: 100%;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-text-primary {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 3px;
          color: var(--text-white);
        }

        .brand-text-secondary {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--color-gold);
        }

        .footer-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass-blue);
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .footer-socials a:hover {
          color: var(--color-gold-bright);
          border-color: var(--color-gold);
          background: rgba(197, 160, 89, 0.1);
          transform: translateY(-3px);
          box-shadow: var(--border-glow-gold);
        }

        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-white);
          position: relative;
          padding-bottom: 8px;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background: var(--color-gold);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-gold-bright);
          padding-left: 5px;
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-list li {
          display: flex;
          gap: 12px;
          font-size: 0.9rem;
        }

        .contact-icon {
          color: var(--color-cyan);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-contact-list a:hover {
          color: var(--color-cyan);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding: 30px 24px;
          background: #02040a;
        }

        .footer-bottom-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: 0.85rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 10px;
        }

        .footer-bottom-links a:hover {
          color: var(--text-white);
        }

        .divider {
          color: rgba(255, 255, 255, 0.1);
        }

        .back-to-top {
          background: rgba(197, 160, 89, 0.1);
          border: 1px solid var(--border-glass-gold);
          color: var(--color-gold-bright);
          padding: 6px 14px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          transition: var(--transition-smooth);
        }

        .back-to-top:hover {
          background: var(--color-gold-gradient);
          color: var(--bg-dark-obsidian);
          box-shadow: var(--border-glow-gold);
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
