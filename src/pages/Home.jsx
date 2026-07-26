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
  const logoWrapperRef = useRef(null);
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
      <section className="hero-banner" style={{ position: "relative", overflow: "hidden" }}>
        {/* Premium Background Glowing Blobs */}
        <div className="glowing-blob-container">
          <div className="glowing-blob glowing-blob-blue" style={{ width: "550px", height: "550px", top: "-15%", left: "-15%" }}></div>
          <div className="glowing-blob glowing-blob-gold" style={{ width: "650px", height: "650px", bottom: "-25%", right: "-15%" }}></div>
        </div>

        {/* High-Tech Interactive Particle Canvas Background */}
        <TechParticleCanvas logoRef={logoWrapperRef} />

        <div className="hero-grid container" style={{ position: "relative", zIndex: 1 }}>
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
            <div ref={logoWrapperRef} className="hero-logo-glowing-wrapper">
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

// High-Tech Interactive Canvas Background Component (Executive Cyber 3D Globe, Glass Panels & HUD Scriptor Matrix)
function TechParticleCanvas({ logoRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    let brainNodes = [];
    let particles = [];
    let shapes = [];
    let binaryRain = [];
    let pcbTracks = [];
    let hexClusters = [];
    
    let time = 0;
    const focalLength = 320;
    let camAngleX = 0;
    let camAngleY = 0;
    const mouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      initBrainNodes();
      initParticles();
      initGlassPanels();
      initBinaryRain();
      initPCBTracks();
      initHexClusters();
    };

    // 3D rotation helpers
    const rotateX = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos
      };
    };

    const rotateY = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: x * cos - z * sin,
        y,
        z: x * sin + z * cos
      };
    };

    const rotateZ = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: x * cos - y * sin,
        y: x * sin + y * cos,
        z
      };
    };

    const initBrainNodes = () => {
      brainNodes = [];
      const nodeCount = 260; // Thousands/hundreds of particles forming the brain
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.12;

      for (let i = 0; i < nodeCount; i++) {
        // Generate coordinates on a wrinkled sphere model represent brain shape
        const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

        const r = baseRadius * (1 + 0.16 * Math.sin(6 * theta) * Math.sin(5 * phi) + 0.05 * Math.sin(18 * phi));
        
        let tx = Math.cos(theta) * Math.sin(phi) * r;
        let ty = Math.sin(theta) * Math.sin(phi) * r * 0.85; // slightly flattened vertically
        let tz = Math.cos(phi) * r * 1.15;              // elongated front-to-back

        // Separate into left and right hemispheres (longitudinal fissure)
        const hemisphere = tx > 0 ? 1 : -1;
        tx += hemisphere * 4.5;

        brainNodes.push({
          startX: (Math.random() - 0.5) * 1000,
          startY: (Math.random() - 0.5) * 800,
          startZ: (Math.random() - 0.5) * 800,
          targetX: tx,
          targetY: ty,
          targetZ: tz,
          color: Math.random() < 0.72 ? "rgba(0, 225, 255," : "rgba(197, 160, 89,"
        });
      }
    };

    const initParticles = () => {
      particles = [];
      const particleCount = canvas.width < 768 ? 40 : 100; // Spark particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() - 0.5) * 700,
          y: (Math.random() - 0.5) * 500,
          z: (Math.random() - 0.5) * 500,
          speed: Math.random() * 0.25 + 0.1,
          angleOffset: Math.random() * Math.PI * 2,
          size: Math.random() * 0.7 + 0.35,
          color: Math.random() < 0.65 ? "rgba(0, 225, 255," : "rgba(168, 85, 247,"
        });
      }
    };

    const initGlassPanels = () => {
      const panelVerts = [
        { x: -50, y: -30, z: 0 },
        { x: 50, y: -30, z: 0 },
        { x: 50, y: 30, z: 0 },
        { x: -50, y: 30, z: 0 }
      ];
      
      const cpuVerts = [
        { x: -16, y: -16, z: 0 }, { x: 16, y: -16, z: 0 }, { x: 16, y: 16, z: 0 }, { x: -16, y: 16, z: 0 }
      ];
      const cpuEdges = [[0, 1], [1, 2], [2, 3], [3, 0]];

      shapes = [
        {
          type: "glass",
          vertices: panelVerts,
          offsetX: -240,
          offsetY: -80,
          offsetZ: 40,
          rotX: 0.1, rotY: -0.2, rotZ: 0.05,
          speedY: 0.002, speedZ: 0.001
        },
        {
          type: "cpu",
          vertices: cpuVerts,
          edges: cpuEdges,
          offsetX: 170,
          offsetY: -110,
          offsetZ: 20,
          rotX: 0.004, rotY: 0.008, rotZ: 0.002,
          speedY: 0.003, speedZ: 0.005
        },
        {
          type: "cpu",
          vertices: cpuVerts,
          edges: cpuEdges,
          offsetX: 190,
          offsetY: 90,
          offsetZ: -30,
          rotX: 0.005, rotY: 0.002, rotZ: 0.007,
          speedY: 0.004, speedZ: 0.001
        }
      ];
    };

    const initBinaryRain = () => {
      binaryRain = [];
      const colWidth = 32;
      const colCount = Math.floor(canvas.width / colWidth);
      for (let i = 0; i < colCount; i += 6) {
        const chars = [];
        const length = Math.floor(Math.random() * 4) + 3;
        for (let j = 0; j < length; j++) {
          chars.push(Math.random() < 0.5 ? "0" : "1");
        }
        binaryRain.push({
          x: i * colWidth + Math.random() * 6,
          y: Math.random() * -canvas.height,
          speed: Math.random() * 1.0 + 0.6,
          chars
        });
      }
    };

    const initPCBTracks = () => {
      pcbTracks = [];
      pcbTracks.push({
        points: [{ x: 50, y: 160 }, { x: 180, y: 160 }, { x: 210, y: 190 }],
        pulse: 0,
        color: "rgba(0, 225, 255,"
      });
    };

    const initHexClusters = () => {
      hexClusters = [];
      const count = 3;
      for (let k = 0; k < count; k++) {
        hexClusters.push({
          x: Math.random() * (canvas.width - 200) + 100,
          y: Math.random() * (canvas.height - 200) + 100,
          size: Math.random() * 18 + 12,
          alpha: 0,
          targetAlpha: Math.random() * 0.12 + 0.03,
          speed: Math.random() * 0.004 + 0.002
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      time += 0.024;

      // Determine logo center coordinates
      let logoX = null;
      let logoY = null;
      if (logoRef && logoRef.current) {
        const logoRect = logoRef.current.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        logoX = logoRect.left - canvasRect.left + logoRect.width / 2;
        logoY = logoRect.top - canvasRect.top + logoRect.height / 2;
      }

      const brainCenterX = logoX !== null ? logoX : (centerX + 260);
      const brainCenterY = logoY !== null ? logoY : (centerY - 60);

      // Shifting background metallic gradients
      const purpleGlowX = centerX + Math.sin(time * 0.1) * 160;
      const purpleGlowY = centerY + Math.cos(time * 0.12) * 120;
      const purpleGlow = ctx.createRadialGradient(purpleGlowX, purpleGlowY, 0, purpleGlowX, purpleGlowY, 440);
      purpleGlow.addColorStop(0, "rgba(168, 85, 247, 0.035)");
      purpleGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = purpleGlow;
      ctx.beginPath();
      ctx.arc(purpleGlowX, purpleGlowY, 440, 0, Math.PI * 2);
      ctx.fill();

      const cyanGlowX = centerX - Math.cos(time * 0.08) * 190;
      const cyanGlowY = centerY - Math.sin(time * 0.14) * 80;
      const cyanGlow = ctx.createRadialGradient(cyanGlowX, cyanGlowY, 0, cyanGlowX, cyanGlowY, 400);
      cyanGlow.addColorStop(0, "rgba(0, 225, 255, 0.035)");
      cyanGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = cyanGlow;
      ctx.beginPath();
      ctx.arc(cyanGlowX, cyanGlowY, 400, 0, Math.PI * 2);
      ctx.fill();

      // Parallax camera tilt angles
      const targetAngleX = mouse.x !== null ? (mouse.y - centerY) * 0.0004 : 0;
      const targetAngleY = mouse.x !== null ? (mouse.x - centerX) * 0.0004 : 0;
      
      camAngleX += (targetAngleX - camAngleX) * 0.05;
      camAngleY += (targetAngleY - camAngleY) * 0.05;

      const finalAngleX = camAngleX + Math.sin(time * 0.08) * 0.015;
      const finalAngleY = camAngleY + time * 0.0015;

      // 1. Digital Brain Self-Assembly & Pulsating Render
      const assemblyProgress = Math.min(1.0, time / 6.0);
      const easeAssembly = 1 - Math.pow(1 - assemblyProgress, 3); // easeOutCubic

      const brainPulse = assemblyProgress >= 1.0 ? 1.0 + 0.035 * Math.sin(time * 1.8) : 1.0;

      const brainProjected = brainNodes.map((p) => {
        // Interpolate between start and wrinkled target positions
        let x = p.startX + (p.targetX - p.startX) * easeAssembly;
        let y = p.startY + (p.targetY - p.startY) * easeAssembly;
        let z = p.startZ + (p.targetZ - p.startZ) * easeAssembly;

        x *= brainPulse;
        y *= brainPulse;
        z *= brainPulse;

        // Apply mouse particle attraction bend
        if (mouse.x !== null && mouse.y !== null) {
          const absoluteX = brainCenterX + x;
          const absoluteY = brainCenterY + y;
          const dx = mouse.x - absoluteX;
          const dy = mouse.y - absoluteY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const pull = (1 - dist / 140) * 8.0;
            x += (dx / Math.max(1, dist)) * pull;
            y += (dy / Math.max(1, dist)) * pull;
          }
        }

        // Apply rotation matrices
        let r = rotateY(x, y, z, finalAngleY * 0.6);
        r = rotateX(r.x, r.y, r.z, finalAngleX);

        // Safe focal division denominator
        const scale = focalLength / Math.max(1, r.z + focalLength);

        return {
          screenX: brainCenterX + r.x * scale,
          screenY: brainCenterY + r.y * scale,
          depthZ: r.z,
          color: p.color,
          scale
        };
      });

      // Render synapses (faint lines between close nodes in the brain)
      ctx.save();
      ctx.lineWidth = 0.5;
      const connectionDist = 18;
      for (let i = 0; i < brainProjected.length; i += 4) {
        const p1 = brainProjected[i];
        for (let j = i + 1; j < brainProjected.length; j += 6) {
          const p2 = brainProjected[j];
          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < connectionDist) {
            ctx.strokeStyle = "rgba(0, 225, 255, " + (0.05 * Math.min(p1.scale, p2.scale)) + ")";
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Render brain particles
      brainProjected.sort((a, b) => b.depthZ - a.depthZ);
      for (let i = 0; i < brainProjected.length; i++) {
        const pt = brainProjected[i];
        ctx.beginPath();
        const rawSize = pt.depthZ <= 0 ? 1.5 * pt.scale : 0.8 * pt.scale;
        const size = Math.max(0.1, rawSize);
        ctx.arc(pt.screenX, pt.screenY, size, 0, Math.PI * 2);
        const opacity = pt.depthZ <= 0 ? 0.45 : 0.12;
        ctx.fillStyle = pt.color + (opacity * pt.scale) + ")";
        ctx.fill();
      }

      // 2. Faint sweeping laser scan planes
      ctx.save();
      const laserY = (time * 80) % (canvas.height + 400) - 200;
      const laserGrad = ctx.createLinearGradient(0, laserY, 0, laserY + 14);
      laserGrad.addColorStop(0, "rgba(0, 225, 255, 0)");
      laserGrad.addColorStop(0.5, "rgba(0, 225, 255, 0.04)");
      laserGrad.addColorStop(1, "rgba(0, 225, 255, 0)");
      ctx.fillStyle = laserGrad;
      ctx.fillRect(0, laserY, canvas.width, 14);
      ctx.restore();

      // 3. Conformal background coordinate grid
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.007)";
      ctx.lineWidth = 0.5;
      const spacing = 80;
      ctx.beginPath();
      for (let x = spacing; x < canvas.width; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = spacing; y < canvas.height; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();
      ctx.restore();

      // 4. Binary code rain columns
      ctx.save();
      ctx.font = "8px monospace";
      for (let i = 0; i < binaryRain.length; i++) {
        const drop = binaryRain[i];
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -80;
          drop.x = Math.random() * canvas.width;
        }

        for (let j = 0; j < drop.chars.length; j++) {
          const cy = drop.y - j * 12;
          if (cy >= 0 && cy <= canvas.height) {
            const alpha = (1 - j / drop.chars.length) * 0.04;
            ctx.fillStyle = "rgba(0, 225, 255, " + alpha + ")";
            ctx.fillText(drop.chars[j], drop.x, cy);
          }
        }
      }
      ctx.restore();

      // 5. Drifting spark micro-particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const flowAngle = time * 0.3 + p.angleOffset;
        p.x += Math.sin(flowAngle) * p.speed + 0.12;
        p.y += Math.cos(flowAngle) * p.speed - p.speed * 0.08;
        
        if (p.y < -300) p.y = 300;
        if (p.x > 400) p.x = -400;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - (centerX + p.x);
          const dy = mouse.y - (centerY + p.y);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const pull = (1 - dist / 180) * 0.12;
            p.x += (dx / Math.max(1, dist)) * pull;
            p.y += (dy / Math.max(1, dist)) * pull;
          }
        }

        let rotated = rotateY(p.x, p.y, p.z, finalAngleY);
        rotated = rotateX(rotated.x, rotated.y, rotated.z, finalAngleX);

        const pZ = rotated.z + focalLength;
        const scale = focalLength / Math.max(1, pZ);
        const px = centerX + rotated.x * scale;
        const py = centerY + rotated.y * scale;

        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.1, p.size * scale), 0, Math.PI * 2);
        ctx.fillStyle = p.color + (0.32 * Math.min(1.0, scale)) + ")";
        ctx.fill();
      }

      // 6. Holographic Calibration circles framing the brain
      ctx.save();
      ctx.strokeStyle = "rgba(0, 225, 255, 0.05)";
      ctx.lineWidth = 0.75;
      const calibrationRadii = [70, 115, 165];
      calibrationRadii.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(brainCenterX, brainCenterY, r, 0, Math.PI * 2);
        ctx.stroke();

        if (idx === 1) {
          ctx.strokeStyle = "rgba(0, 225, 255, 0.1)";
          for (let a = 0; a < Math.PI * 2; a += Math.PI / 10) {
            const rotA = a + time * 0.02;
            ctx.beginPath();
            ctx.moveTo(brainCenterX + Math.cos(rotA) * (r - 4), brainCenterY + Math.sin(rotA) * (r - 4));
            ctx.lineTo(brainCenterX + Math.cos(rotA) * r, brainCenterY + Math.sin(rotA) * r);
            ctx.stroke();
          }
        }
      });
      ctx.restore();

      // 7. Render shapes (rotating 3D wireframe chips and panels)
      for (let sIdx = 0; sIdx < shapes.length; sIdx++) {
        const shape = shapes[sIdx];
        
        if (shape.speedX) shape.rotX += shape.speedX;
        shape.rotY += shape.speedY;
        shape.rotZ += shape.speedZ;

        const shapeProjected = [];

        for (let vIdx = 0; vIdx < shape.vertices.length; vIdx++) {
          const vert = shape.vertices[vIdx];
          
          let v = rotateX(vert.x, vert.y, vert.z, shape.rotX);
          v = rotateY(v.x, v.y, v.z, shape.rotY);
          v = rotateZ(v.x, v.y, v.z, shape.rotZ);
          
          const wx = v.x + shape.offsetX;
          const wy = v.y + shape.offsetY;
          const wz = v.z + shape.offsetZ;

          let r = rotateY(wx, wy, wz, finalAngleY);
          r = rotateX(r.x, r.y, r.z, finalAngleX);

          const pZ = r.z + focalLength;
          const scale = focalLength / Math.max(1, pZ);

          shapeProjected.push({
            x: centerX + r.x * scale,
            y: centerY + r.y * scale,
            scale
          });
        }

        const avgScale = shapeProjected.reduce((sum, pt) => sum + pt.scale, 0) / shapeProjected.length;

        if (shape.type === "glass") {
          ctx.beginPath();
          ctx.moveTo(shapeProjected[0].x, shapeProjected[0].y);
          for (let j = 1; j < shapeProjected.length; j++) {
            ctx.lineTo(shapeProjected[j].x, shapeProjected[j].y);
          }
          ctx.closePath();

          const panelGrad = ctx.createLinearGradient(
            shapeProjected[0].x, shapeProjected[0].y, 
            shapeProjected[2].x, shapeProjected[2].y
          );
          panelGrad.addColorStop(0, "rgba(255, 255, 255, 0.015)");
          panelGrad.addColorStop(1, "rgba(0, 225, 255, 0.005)");
          ctx.fillStyle = panelGrad;
          ctx.fill();

          let lineAlpha = 0.065;
          if (mouse.x !== null && mouse.y !== null) {
            const mDist = Math.sqrt((shapeProjected[0].x - mouse.x)*(shapeProjected[0].x - mouse.x) + (shapeProjected[0].y - mouse.y)*(shapeProjected[0].y - mouse.y));
            if (mDist < 130) lineAlpha = 0.065 + (1 - mDist / 130) * 0.18;
          }

          ctx.strokeStyle = "rgba(0, 225, 255, " + (lineAlpha * avgScale) + ")";
          ctx.lineWidth = 0.8;
          ctx.stroke();

          ctx.save();
          ctx.clip();
          
          const sheenX = (time * 150) % (canvas.width + 400) - 200;
          const sheenGrad = ctx.createLinearGradient(sheenX, 0, sheenX + 60, 0);
          sheenGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
          sheenGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.038)");
          sheenGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
          
          ctx.fillStyle = sheenGrad;
          ctx.fillRect(-canvas.width, -canvas.height, canvas.width * 3, canvas.height * 3);
          ctx.restore();
        } else {
          ctx.save();
          ctx.lineWidth = 0.75;
          ctx.strokeStyle = "rgba(0, 225, 255, " + (0.16 * avgScale) + ")";
          
          for (let eIdx = 0; eIdx < shape.edges.length; eIdx++) {
            const edge = shape.edges[eIdx];
            const p1 = shapeProjected[edge[0]];
            const p2 = shapeProjected[edge[1]];

            if (p1 && p2) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
          ctx.restore();

          for (let vIdx = 0; vIdx < shapeProjected.length; vIdx++) {
            const pt = shapeProjected[vIdx];
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, Math.max(0.1, 1.0 * pt.scale), 0, Math.PI * 2);
            ctx.fillStyle = "rgba(168, 85, 247, " + (0.35 * pt.scale) + ")";
            ctx.fill();
          }

          // Circuit routing pathway from brain center to outer technology shapes
          const iconCenterX = shapeProjected.reduce((sum, pt) => sum + pt.x, 0) / shapeProjected.length;
          const iconCenterY = shapeProjected.reduce((sum, pt) => sum + pt.y, 0) / shapeProjected.length;

          ctx.save();
          ctx.strokeStyle = "rgba(0, 225, 255, 0.05)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(brainCenterX, brainCenterY);
          const midX = (brainCenterX + iconCenterX) / 2;
          ctx.lineTo(midX, brainCenterY);
          ctx.lineTo(midX, iconCenterY);
          ctx.lineTo(iconCenterX, iconCenterY);
          ctx.stroke();

          const pOffset = (time * 0.25 + sIdx * 0.5) % 1.0;
          let px = brainCenterX;
          let py = brainCenterY;
          if (pOffset < 0.33) {
            const r = pOffset / 0.33;
            px = brainCenterX + (midX - brainCenterX) * r;
            py = brainCenterY;
          } else if (pOffset < 0.66) {
            const r = (pOffset - 0.33) / 0.33;
            px = midX;
            py = brainCenterY + (iconCenterY - brainCenterY) * r;
          } else {
            const r = (pOffset - 0.66) / 0.34;
            px = midX + (iconCenterX - midX) * r;
            py = iconCenterY;
          }

          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(0, 225, 255, 1)";
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.restore();
        }
      }

      // 8. Telemetry overlay text telemetry
      ctx.save();
      ctx.font = "9px monospace";
      ctx.fillStyle = "rgba(0, 225, 255, 0.22)";
      
      const hudMargin = 30;
      ctx.fillText("[ NEURAL_NET: ACTIVE ]", hudMargin, hudMargin + 10);
      ctx.fillText("[ COGNITIVE: ONLINE ]", hudMargin, hudMargin + 22);
      ctx.beginPath();
      ctx.moveTo(hudMargin - 6, hudMargin);
      ctx.lineTo(hudMargin + 85, hudMargin);
      ctx.moveTo(hudMargin - 6, hudMargin);
      ctx.lineTo(hudMargin - 6, hudMargin + 30);
      ctx.strokeStyle = "rgba(0, 225, 255, 0.15)";
      ctx.stroke();

      const trOffset = canvas.width - hudMargin - 150;
      ctx.fillText("[ COMP_UNITS: OK ]", trOffset, hudMargin + 10);
      ctx.fillText("[ DECISION_GRID: 1 ]", trOffset, hudMargin + 22);
      ctx.beginPath();
      ctx.moveTo(canvas.width - hudMargin + 6, hudMargin);
      ctx.lineTo(canvas.width - hudMargin - 85, hudMargin);
      ctx.moveTo(canvas.width - hudMargin + 6, hudMargin);
      ctx.lineTo(canvas.width - hudMargin + 6, hudMargin + 30);
      ctx.stroke();
      ctx.restore();

      // 9. Mathematical waves drifting at bottom boundary
      ctx.save();
      ctx.lineWidth = 0.85;
      
      // Wave 1: Cyan
      ctx.strokeStyle = "rgba(0, 225, 255, 0.07)";
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 20) {
        const y = centerY + 120 + Math.sin(x * 0.0035 + time * 0.8) * 16 + Math.cos(x * 0.001 - time * 0.4) * 6;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Wave 2: Gold
      ctx.strokeStyle = "rgba(197, 160, 89, 0.06)";
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 20) {
        const y = centerY + 135 + Math.sin(x * 0.002 - time * 0.6) * 14 + Math.cos(x * 0.003 + time * 0.5) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // 10. Spotlight scanning sweep
      if (mouse.x !== null && mouse.y !== null) {
        const spotlight = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 140
        );
        spotlight.addColorStop(0, "rgba(0, 225, 255, 0.045)");
        spotlight.addColorStop(0.5, "rgba(168, 85, 247, 0.015)");
        spotlight.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = spotlight;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [logoRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

