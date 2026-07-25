import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Cpu, Wifi, Globe, Shield, Ship, CheckSquare, 
  Users, Briefcase, Zap, Star, Phone, MessageSquare, ChevronRight 
} from "lucide-react";
import InteractiveLogo from "../components/InteractiveLogo";
import ClientSlider from "../components/ClientSlider";
import ContactForm from "../components/ContactForm";

// Custom Hook for Animated Counters
function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Leonce Multiventure has streamlined our entire routers supply chain. Their custom ODM solutions and customs clearance handling are second to none.",
      author: "Vikas Mehra",
      role: "Procurement Director, NetLink Technologies Ltd",
      rating: 5
    },
    {
      quote: "The quality verification and compliance check they perform on PCB and PCBA shipments gives us complete peace of mind. Truly a premium import partner.",
      author: "Aditi Sen",
      role: "VP of Operations, SmartGrid Systems India",
      rating: 5
    },
    {
      quote: "Outstanding support, fair pricing, and exact delivery tracking. They sourced custom microcontrollers for us in record time.",
      author: "Richard Branson",
      role: "Founder, IoT Connective UK",
      rating: 5
    }
  ];

  const categories = [
    { name: "PCB (Printed Circuit Boards)", desc: "High-density multilayer HDI, rigid-flex, and high-frequency FR4 boards.", icon: <Cpu /> },
    { name: "PCBA Assemblies", desc: "Advanced SMT/DIP assemblies, AOI inspected & functionally tested.", icon: <LayersIcon /> },
    { name: "WiFi Routers & Network Devices", desc: "Enterprise WiFi 6, Mesh nodes, and high-power router units.", icon: <Wifi /> },
    { name: "IoT & Smart Devices", desc: "Edge computing gateways, Zigbee switches, and custom sensors.", icon: <Zap /> }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO BANNER SECTION */}
      <section className="hero-banner">
        <div className="hero-grid container">
          <div className="hero-text-content">
            <span className="hero-badge">Technology Importer &amp; Distributor</span>
            <h1 className="hero-title">
              Importing Technology.<br />
              <span className="glow-text-gold">Connecting Possibilities.</span>
            </h1>
            <p className="hero-desc">
              Leonce Multiventure is a premier B2B corporate partner sourcing premium electronics, high-speed WiFi routers, high-density PCBs, and PCBA solutions directly from verified global manufacturers.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gold">
                B2B Sourcing Enquiry <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="btn btn-secondary">
                View Catalog
              </Link>
            </div>
          </div>
          <div className="hero-visual-content">
            <div className="hero-logo-glowing-wrapper">
              <InteractiveLogo width="90%" animate={true} />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER LOGO TICKER */}
      <ClientSlider />

      {/* 2. COMPANY INTRODUCTION SECTION */}
      <section className="section intro-section animate-on-scroll">
        <div className="container intro-grid">
          <div className="intro-visual glass-card">
            <InteractiveLogo width="50%" animate={false} />
            <div className="intro-years">
              <span className="big-year">Est. 2019</span>
              <p>Delivering high-reliability sourcing channels to major manufacturers and distributors.</p>
            </div>
          </div>
          <div className="intro-text">
            <span className="section-subtitle">Corporate Profile</span>
            <h2 className="section-title">Global Procurement Pioneers</h2>
            <p>
              Founded in 2019, <strong>Leonce Multiventure</strong> has established itself as India's premier B2B electronics and technology importer. We act as a critical logistics and verification bridge between state-of-the-art silicon fabrication plants worldwide and domestic engineering corporations.
            </p>
            <p style={{ marginTop: 15, color: "var(--text-muted)" }}>
              We specialize in custom importing structures, taking care of initial supplier audits, international logistics paperwork, customs clearance, and quality assurance inspections so our clients can focus strictly on assembly and retail.
            </p>
            <div className="intro-highlights">
              <div className="highlight-item">
                <Shield className="hl-icon" />
                <div>
                  <h4>100% Quality Inspected</h4>
                  <p>All batches undergo strict functional checks before cargo sealing.</p>
                </div>
              </div>
              <div className="highlight-item">
                <Globe className="hl-icon" />
                <div>
                  <h4>Global Network</h4>
                  <p>Direct sourcing channels across Taiwan, South Korea, EU, and China.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS OVERVIEW SECTION */}
      <section className="section bg-alt-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">B2B Import &amp; Distribution Operations</h2>
            <p className="section-desc">We leverage our network to import high-end components, assemblies, and complete networking products in bulk.</p>
          </div>
          <div className="business-overview-grid">
            <div className="overview-card glass-card">
              <div className="card-icon-wrapper"><Cpu size={32} /></div>
              <h3>PCB &amp; PCBA Sourcing</h3>
              <p>HDI multi-layer printed circuit boards, custom copper weight trace routing, SMT/DIP pick and place, and lead-free wave soldering assembly.</p>
              <Link to="/services" className="card-link">Learn More <ChevronRight size={14} /></Link>
            </div>
            <div className="overview-card glass-card">
              <div className="card-icon-wrapper"><Wifi size={32} /></div>
              <h3>Networking Terminals</h3>
              <p>Bulk import of high-capacity WiFi 6 routers, telecommunication switches, embedded network modules, and custom fiber optic terminal devices.</p>
              <Link to="/services" className="card-link">Learn More <ChevronRight size={14} /></Link>
            </div>
            <div className="overview-card glass-card">
              <div className="card-icon-wrapper"><Zap size={32} /></div>
              <h3>IoT &amp; Embedded Solutions</h3>
              <p>Edge sensor networks, industrial microprocessors, custom IoT hubs, and secure wireless gateways conforming to strict global certification norms.</p>
              <Link to="/services" className="card-link">Learn More <ChevronRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Portfolios</span>
            <h2 className="section-title">Specialized Product Verticals</h2>
            <p className="section-desc">Filtering our primary imported technology aggregates customized for B2B procurement pipelines.</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat, idx) => (
              <div className="cat-card glass-card" key={idx}>
                <div className="cat-icon-container">{cat.icon}</div>
                <h4>{cat.name}</h4>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="center-actions">
            <Link to="/products" className="btn btn-gold">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & BUSINESS STATISTICS */}
      <section className="section bg-gradient-section animate-on-scroll">
        <div className="container stats-grid">
          <div className="stats-text">
            <span className="section-subtitle">Performance Excellence</span>
            <h2 className="section-title">Why Leading Brands Trust Leonce</h2>
            <p>
              Our deep industry relationships, robust customs clearance workflows, and tech-driven procurement guarantee absolute supply chain resilience.
            </p>
            <ul className="bullets-list">
              <li>Verified global manufacturing channels</li>
              <li>Complete import certifications and customs paperwork handling</li>
              <li>Cost optimization with direct bulk-buying parity</li>
              <li>Dedicated technical support and warranty management</li>
            </ul>
          </div>
          <div className="stats-counters-grid">
            <div className="counter-box glass-card">
              <div className="counter-val"><CountUp end={50} suffix="+" /></div>
              <div className="counter-lbl">Certified Global Suppliers</div>
            </div>
            <div className="counter-box glass-card">
              <div className="counter-val"><CountUp end={100} suffix="%" /></div>
              <div className="counter-lbl">Quality Inspection Guaranteed</div>
            </div>
            <div className="counter-box glass-card">
              <div className="counter-val"><CountUp end={500} suffix="k+" /></div>
              <div className="counter-lbl">Batches Successfully Sourced</div>
            </div>
            <div className="counter-box glass-card">
              <div className="counter-val"><CountUp end={15} suffix="+" /></div>
              <div className="counter-lbl">B2B Industry Verticals Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Market Sectors</span>
            <h2 className="section-title">Sourcing Solutions for Key Sectors</h2>
            <p className="section-desc">Distributing premium components and hardware across major commercial and industrial segments.</p>
          </div>
          <div className="industries-slider">
            <div className="industry-pill">Telecommunications</div>
            <div className="industry-pill">Industrial Automation</div>
            <div className="industry-pill">Consumer Electronics</div>
            <div className="industry-pill">Smart Home IoT</div>
            <div className="industry-pill">Security &amp; Surveillance</div>
            <div className="industry-pill">Medical Devices</div>
            <div className="industry-pill">Automotive Tech</div>
            <div className="industry-pill">Defense Electronics</div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="section bg-alt-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Reviews</span>
            <h2 className="section-title">B2B Partner Testimonials</h2>
            <p className="section-desc">Hear from procurement heads and manufacturing directors about our importing speed and logistics quality.</p>
          </div>
          <div className="testimonial-slider-container">
            <div className="testimonial-card glass-card">
              <div className="stars-row">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>
              <p className="testimonial-quote">"{testimonials[activeTestimonial].quote}"</p>
              <h5 className="testimonial-author">{testimonials[activeTestimonial].author}</h5>
              <span className="testimonial-role">{testimonials[activeTestimonial].role}</span>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`dot-btn ${activeTestimonial === idx ? "active-dot" : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION & CONTACT PREVIEW */}
      <section className="section cta-section animate-on-scroll">
        <div className="container cta-grid">
          <div className="cta-info">
            <h2 className="cta-title">Establish Your Sourcing Pipe Today</h2>
            <p>
              Looking to import premium WiFi Routers, PCBs, PCBA, or require specialized OEM electronic sourcing? Get in touch with our desk and request our printable corporate catalog.
            </p>
            <div className="cta-contacts">
              <div className="cta-contact-item">
                <Phone size={18} className="cta-icon" />
                <div>
                  <span>Direct Desk Line</span>
                  <h4>+91 22 8888 4444</h4>
                </div>
              </div>
              <div className="cta-contact-item">
                <MessageSquare size={18} className="cta-icon" />
                <div>
                  <span>Email Inquiries</span>
                  <h4>info@leonce-multiventure.com</h4>
                </div>
              </div>
            </div>
            <div className="cta-downloads-wrapper" style={{ marginTop: 30 }}>
              <a href="#download" onClick={() => alert("Company Profile and Product Catalogue are currently being dynamically bundled for download. Feel free to contact our support desk for instant B2B delivery.")} className="btn btn-secondary">
                Download Company Profile PDF
              </a>
            </div>
          </div>
          <div className="cta-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <style>{`
        /* Hero Banner */
        .hero-banner {
          padding: 160px 24px 100px 24px;
          background: radial-gradient(circle at 80% 20%, rgba(0, 114, 255, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(197, 160, 89, 0.05) 0%, transparent 50%);
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .hero-badge {
          display: inline-block;
          font-family: var(--font-display);
          color: var(--color-cyan);
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          border: 1px solid var(--border-glass-blue);
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(0, 225, 255, 0.03);
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 24px;
          font-weight: 800;
        }

        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 35px;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          gap: 15px;
        }

        .hero-logo-glowing-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-logo-glowing-wrapper::before {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(0, 225, 255, 0.08) 0%, transparent 70%);
          z-index: -1;
        }

        /* Intro Section */
        .intro-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: center;
        }

        .intro-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px;
          border-color: var(--border-glass-gold);
        }

        .intro-years {
          margin-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 25px;
        }

        .big-year {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-gold-bright);
          display: block;
          margin-bottom: 10px;
        }

        .intro-years p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .intro-highlights {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 30px;
        }

        .highlight-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .hl-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .highlight-item h4 {
          font-size: 1rem;
          color: var(--text-white);
          margin-bottom: 4px;
        }

        .highlight-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Business Overview Card */
        .business-overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .overview-card {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .card-icon-wrapper {
          color: var(--color-cyan);
          filter: drop-shadow(0 0 5px rgba(0, 225, 255, 0.3));
          margin-bottom: 5px;
        }

        .overview-card h3 {
          font-size: 1.25rem;
        }

        .overview-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          flex-grow: 1;
        }

        .card-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-gold-bright);
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .card-link:hover {
          color: var(--text-white);
        }

        /* Categories Vertical */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .cat-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .cat-icon-container {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 225, 255, 0.05);
          color: var(--color-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-glass-blue);
        }

        .cat-card h4 {
          font-size: 1rem;
        }

        .cat-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .center-actions {
          text-align: center;
          margin-top: 40px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .bullets-list {
          list-style: none;
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bullets-list li {
          position: relative;
          padding-left: 25px;
          font-size: 0.95rem;
        }

        .bullets-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-gold-bright);
          font-weight: 700;
        }

        .stats-counters-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .counter-box {
          text-align: center;
          padding: 24px;
        }

        .counter-val {
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--color-cyan);
          margin-bottom: 6px;
        }

        .counter-lbl {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Industries Slider Pill Layout */
        .industries-slider {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          max-width: 900px;
          margin: 0 auto;
        }

        .industry-pill {
          padding: 10px 22px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass-blue);
          border-radius: 30px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .industry-pill:hover {
          border-color: var(--color-gold);
          color: var(--color-gold-bright);
          background: rgba(197, 160, 89, 0.08);
          transform: translateY(-2px);
          box-shadow: var(--border-glow-gold);
        }

        /* Testimonials Slider */
        .testimonial-slider-container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .stars-row {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-bottom: 20px;
        }

        .testimonial-quote {
          font-size: 1.25rem;
          font-style: italic;
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .testimonial-author {
          font-size: 1.05rem;
          color: var(--text-white);
          margin-bottom: 4px;
        }

        .testimonial-role {
          font-size: 0.85rem;
          color: var(--color-cyan);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 30px;
        }

        .dot-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .active-dot {
          background: var(--color-gold);
          transform: scale(1.2);
          box-shadow: var(--border-glow-gold);
        }

        /* CTA & Form Preview */
        .cta-section {
          background: radial-gradient(circle at 10% 50%, rgba(197, 160, 89, 0.06) 0%, transparent 60%);
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .cta-title {
          font-size: 2.25rem;
          margin-bottom: 20px;
        }

        .cta-contacts {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 30px;
        }

        .cta-contact-item {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .cta-icon {
          color: var(--color-cyan);
          width: 40px;
          height: 40px;
          border-radius: 4px;
          background: rgba(0, 225, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-glass-blue);
        }

        .cta-contact-item span {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .cta-contact-item h4 {
          font-size: 1.1rem;
          color: var(--text-white);
        }

        /* Page backgrounds & alt colors */
        .bg-alt-section {
          background-color: var(--bg-deep-navy);
        }

        .bg-gradient-section {
          background: linear-gradient(180deg, var(--bg-dark-obsidian) 0%, var(--bg-deep-navy) 100%);
        }

        /* Media Queries */
        @media (max-width: 991px) {
          .hero-grid, .intro-grid, .stats-grid, .cta-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-text-content {
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-title {
            font-size: 2.75rem;
          }
          .business-overview-grid {
            grid-template-columns: 1fr 1fr;
          }
          .categories-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .business-overview-grid, .categories-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .stats-counters-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

// Inline temporary components to avoid importing missing files
function LayersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polygon points="2 17 12 22 22 17" />
      <polygon points="2 12 12 17 22 12" />
    </svg>
  );
}
