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

        {/* Floating Particles */}
        <div className="particle" style={{ top: "20%", left: "10%", animationDelay: "0s" }}></div>
        <div className="particle" style={{ top: "30%", right: "15%", animationDelay: "1s" }}></div>
        <div className="particle" style={{ top: "60%", left: "20%", animationDelay: "2s" }}></div>
        <div className="particle" style={{ top: "70%", right: "25%", animationDelay: "3s" }}></div>
        <div className="particle" style={{ top: "40%", left: "40%", animationDelay: "4s" }}></div>

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
          transition: var(--transition-smooth);
        }

        .intro-visual:hover {
          transform: translateY(-4px);
          box-shadow: var(--border-glow-gold);
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

        .highlight-item {
          transition: var(--transition-smooth);
        }

        .highlight-item:hover {
          transform: translateX(8px);
        }

        .highlight-item:hover .hl-icon {
          color: var(--color-gold-bright);
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
          transition: var(--transition-smooth);
        }

        .overview-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
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

        .cat-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
        }

        .cat-card:hover .cat-icon-container {
          background: rgba(197, 160, 89, 0.1);
          border-color: var(--color-gold);
          color: var(--color-gold-bright);
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
          padding-left: 24px;
          font-size: 0.95rem;
          color: var(--text-light);
          transition: var(--transition-smooth);
        }

        .bullets-list li:hover {
          transform: translateX(8px);
          color: var(--text-white);
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
          transition: var(--transition-smooth);
        }

        .counter-box:hover {
          transform: translateY(-8px);
          border-color: var(--color-gold);
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

        .testimonial-card {
          padding: 40px;
          transition: var(--transition-smooth);
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-gold);
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
          transition: var(--transition-smooth);
        }

        .cta-contact-item:hover {
          transform: translateX(8px);
        }

        .cta-contact-item:hover .cta-icon {
          color: var(--color-gold-bright);
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

        /* Premium Card Animations */
        .glass-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 225, 255, 0.1);
        }

        /* Icon Glow Animation */
        .card-icon-wrapper,
        .cat-icon-container {
          transition: all 0.3s ease;
        }

        .glass-card:hover .card-icon-wrapper,
        .glass-card:hover .cat-icon-container {
          transform: scale(1.1);
          filter: drop-shadow(0 0 15px rgba(0, 225, 255, 0.6));
        }

        /* Subtle Background Pulse */
        .hero-banner::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(0, 225, 255, 0.03) 0%, transparent 70%);
          animation: subtlePulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes subtlePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        /* Smooth Fade In Animation */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Counter Animation */
        .counter-val {
          background: linear-gradient(135deg, var(--color-cyan), var(--color-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Button Shine Effect */
        .btn {
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn:hover::before {
          left: 100%;
        }

        /* Staggered Card Animations */
        .overview-card:nth-child(1) {
          animation: slideInUp 0.6s ease-out 0.1s both;
        }
        .overview-card:nth-child(2) {
          animation: slideInUp 0.6s ease-out 0.2s both;
        }
        .overview-card:nth-child(3) {
          animation: slideInUp 0.6s ease-out 0.3s both;
        }

        .cat-card:nth-child(1) {
          animation: slideInUp 0.5s ease-out 0.1s both;
        }
        .cat-card:nth-child(2) {
          animation: slideInUp 0.5s ease-out 0.15s both;
        }
        .cat-card:nth-child(3) {
          animation: slideInUp 0.5s ease-out 0.2s both;
        }
        .cat-card:nth-child(4) {
          animation: slideInUp 0.5s ease-out 0.25s both;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero Text Reveal Animation */
        .hero-badge {
          animation: fadeInDown 0.8s ease-out 0.3s both;
        }

        .hero-title {
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        .hero-desc {
          animation: fadeInUp 1s ease-out 0.7s both;
        }

        .hero-actions {
          animation: fadeInUp 1s ease-out 0.9s both;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Floating Particles in Hero */
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--color-cyan);
          border-radius: 50%;
          animation: floatParticle 8s ease-in-out infinite;
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -30px) scale(1.5);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -50px) scale(1);
            opacity: 0.4;
          }
          75% {
            transform: translate(40px, -20px) scale(1.3);
            opacity: 0.7;
          }
        }

        /* Glow Effect on Scroll */
        .section-header {
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 0 transparent);
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(197, 160, 89, 0.3));
          }
        }

        /* Counter Box Stagger */
        .counter-box:nth-child(1) {
          animation: scaleIn 0.5s ease-out 0.1s both;
        }
        .counter-box:nth-child(2) {
          animation: scaleIn 0.5s ease-out 0.2s both;
        }
        .counter-box:nth-child(3) {
          animation: scaleIn 0.5s ease-out 0.3s both;
        }
        .counter-box:nth-child(4) {
          animation: scaleIn 0.5s ease-out 0.4s both;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Industry Card Hover Glow */
        .industry-card {
          position: relative;
        }

        .industry-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, var(--color-cyan), var(--color-gold), var(--color-cyan));
            border-radius: inherit;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .industry-card:hover::before {
          opacity: 1;
            animation: borderRotate 2s linear infinite;
        }

        @keyframes borderRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Media Queries */
        @media (max-width: 991px) {
          .hero-grid, .intro-grid, .stats-grid, .cta-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-text-content {
            text-align: left;
          }
          .hero-actions {
            justify-content: flex-start;
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

    let buildings = [];
    let cars = [];
    let drones = [];
    let satellites = [];
    let screens = [];
    let particles = [];
    let lightning = null;

    let time = 0;
    const focalLength = 380;
    let camAngleX = -0.32; // pitch, looking down
    let camAngleY = 0;     // yaw
    const mouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      initBuildings();
      initCars();
      initDrones();
      initSatellites();
      initScreens();
      initParticles();
    };

    const project = (x, y, z) => {
      // 3D rotations relative to center (0,0,0)
      // Rotate around Y-axis (yaw)
      const cosY = Math.cos(camAngleY);
      const sinY = Math.sin(camAngleY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;

      // Rotate around X-axis (pitch)
      const cosX = Math.cos(camAngleX);
      const sinX = Math.sin(camAngleX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Camera translation drift
      const cameraX = 0;
      const cameraY = 160 + Math.cos(time * 0.05) * 30; // slow drift
      const cameraZ = 720 + Math.sin(time * 0.04) * 80; // slow zoom

      const transX = x1 + cameraX;
      const transY = y2 + cameraY;
      const transZ = z2 + cameraZ;

      const scale = focalLength / Math.max(1, transZ);
      const sx = (canvas.width / 2) + transX * scale;
      const sy = (canvas.height / 2) + transY * scale;

      return {
        x: sx,
        y: sy,
        z: transZ,
        scale
      };
    };

    const initBuildings = () => {
      buildings = [];
      const gridSpacing = 160;
      for (let gx = -2; gx <= 2; gx++) {
        for (let gz = -2; gz <= 2; gz++) {
          if (gx === 0 && gz === 0 && Math.random() < 0.4) continue;
          if (Math.random() < 0.15) continue; // 85% density

          const bx = gx * gridSpacing + (Math.random() - 0.5) * 35;
          const bz = gz * gridSpacing + (Math.random() - 0.5) * 35;
          const w = Math.random() * 25 + 50;
          const d = Math.random() * 25 + 50;
          const h = Math.random() * 190 + 130;
          const isGold = Math.random() < 0.35;

          // Generate internal vertical lines / windows
          const lines = [];
          const lineCount = Math.floor(Math.random() * 3) + 2;
          for (let l = 0; l < lineCount; l++) {
            lines.push({
              offsetX: (Math.random() - 0.5) * w * 0.8,
              offsetZ: (Math.random() - 0.5) * d * 0.8,
              speed: Math.random() * 1.2 + 0.6,
              offset: Math.random() * 100,
              length: Math.random() * 30 + 15
            });
          }

          buildings.push({
            x: bx,
            z: bz,
            w,
            d,
            h,
            isGold,
            lines
          });
        }
      }
    };

    const initCars = () => {
      cars = [];
      const carCount = 18;
      for (let i = 0; i < carCount; i++) {
        const isZAxis = Math.random() < 0.5;
        const speed = (Math.random() * 2.2 + 2) * (Math.random() < 0.5 ? 1 : -1);

        cars.push({
          x: isZAxis ? (Math.random() - 0.5) * 600 : (Math.random() < 0.5 ? -450 : 450),
          y: -Math.random() * 140 - 70,
          z: isZAxis ? (Math.random() < 0.5 ? -450 : 450) : (Math.random() - 0.5) * 600,
          vx: isZAxis ? 0 : speed,
          vz: isZAxis ? speed : 0,
          isZAxis,
          isGold: Math.random() < 0.4,
          history: []
        });
      }
    };

    const initDrones = () => {
      drones = [];
      const droneCount = 6;
      for (let i = 0; i < droneCount; i++) {
        drones.push({
          cx: (Math.random() - 0.5) * 450,
          cy: -Math.random() * 180 - 140,
          cz: (Math.random() - 0.5) * 450,
          radius: Math.random() * 35 + 15,
          speed: Math.random() * 0.02 + 0.012,
          phase: Math.random() * Math.PI * 2,
          rotSpeed: Math.random() * 0.08 + 0.04
        });
      }
    };

    const initSatellites = () => {
      satellites = [];
      satellites.push({
        x: -220,
        y: -360,
        z: -220,
        size: 30,
        rotSpeed: 0.004,
        angle: 0
      });
      satellites.push({
        x: 240,
        y: -370,
        z: 220,
        size: 35,
        rotSpeed: -0.006,
        angle: Math.PI / 4
      });
    };

    const initScreens = () => {
      screens = [];
      screens.push({
        x: 0,
        y: -90,
        z: -140,
        w: 90,
        h: 50,
        rotY: 0,
        type: "matrix"
      });
      screens.push({
        x: -140,
        y: -120,
        z: 50,
        w: 75,
        h: 40,
        rotY: Math.PI / 4,
        type: "sine"
      });
      screens.push({
        x: 140,
        y: -110,
        z: -40,
        w: 80,
        h: 45,
        rotY: -Math.PI / 6,
        type: "grid"
      });
    };

    const initParticles = () => {
      particles = [];
      const count = 150;
      const roadOffsets = [-150, -75, 75, 150];
      for (let i = 0; i < count; i++) {
        const offsetVal = roadOffsets[Math.floor(Math.random() * roadOffsets.length)];
        const isZDirection = Math.random() < 0.5;

        particles.push({
          x: isZDirection ? offsetVal : (Math.random() - 0.5) * 800,
          y: -2,
          z: isZDirection ? (Math.random() - 0.5) * 800 : offsetVal,
          speed: Math.random() * 2.5 + 2.0,
          isZDirection,
          isGold: Math.random() < 0.35
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
      time += 0.015;

      // Parallax camera tilt angles
      const targetAngleY = (time * 0.015) + (mouse.x !== null ? (mouse.x - centerX) * 0.0003 : 0);
      const targetAngleX = -0.32 + (mouse.y !== null ? (mouse.y - centerY) * 0.0002 : 0);

      camAngleY += (targetAngleY - camAngleY) * 0.06;
      camAngleX += (targetAngleX - camAngleX) * 0.06;

      const emerge = Math.min(1.0, time / 4.0);
      const renderQueue = [];

      // Update Flying Cars
      cars.forEach((car) => {
        car.history.push({ x: car.x, y: car.y, z: car.z });
        if (car.history.length > 12) car.history.shift();

        car.x += car.vx;
        car.z += car.vz;

        if (car.isZAxis) {
          if (car.vz > 0 && car.z > 450) { car.z = -450; car.history = []; }
          else if (car.vz < 0 && car.z < -450) { car.z = 450; car.history = []; }
        } else {
          if (car.vx > 0 && car.x > 450) { car.x = -450; car.history = []; }
          else if (car.vx < 0 && car.x < -450) { car.x = 450; car.history = []; }
        }
      });

      // Update Highway Particles
      particles.forEach((p) => {
        if (p.isZDirection) {
          p.z += p.speed;
          if (p.z > 400) p.z = -400;
        } else {
          p.x += p.speed;
          if (p.x > 400) p.x = -400;
        }
      });

      // Trigger Lightning
      if (!lightning && Math.random() < 0.003) {
        const startX = (Math.random() - 0.5) * 600;
        const startZ = (Math.random() - 0.5) * 600;
        const startY = -400;

        let endX = (Math.random() - 0.5) * 400;
        let endZ = (Math.random() - 0.5) * 400;
        let endY = 0;

        if (buildings.length > 0) {
          const b = buildings[Math.floor(Math.random() * buildings.length)];
          endX = b.x;
          endZ = b.z;
          endY = -b.h * emerge;
        }

        const segments = [];
        const steps = 10;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const tx = startX + (endX - startX) * t + (Math.random() - 0.5) * 35;
          const ty = startY + (endY - startY) * t + (Math.random() - 0.5) * 15;
          const tz = startZ + (endZ - startZ) * t + (Math.random() - 0.5) * 35;
          segments.push({ x: tx, y: ty, z: tz });
        }

        lightning = { segments, timer: 8 };
      }

      if (lightning) {
        lightning.timer--;
        if (lightning.timer <= 0) lightning = null;
      }

      // Add Buildings to Render Queue
      buildings.forEach((b) => {
        const h = b.h * emerge;
        const halfW = b.w / 2;
        const halfD = b.d / 2;

        const baseCorners = [
          { x: b.x - halfW, y: 0, z: b.z - halfD },
          { x: b.x + halfW, y: 0, z: b.z - halfD },
          { x: b.x + halfW, y: 0, z: b.z + halfD },
          { x: b.x - halfW, y: 0, z: b.z + halfD }
        ];

        const topCorners = [
          { x: b.x - halfW, y: -h, z: b.z - halfD },
          { x: b.x + halfW, y: -h, z: b.z - halfD },
          { x: b.x + halfW, y: -h, z: b.z + halfD },
          { x: b.x - halfW, y: -h, z: b.z + halfD }
        ];

        const refTopCorners = [
          { x: b.x - halfW, y: h, z: b.z - halfD },
          { x: b.x + halfW, y: h, z: b.z - halfD },
          { x: b.x + halfW, y: h, z: b.z + halfD },
          { x: b.x - halfW, y: h, z: b.z + halfD }
        ];

        const pB = baseCorners.map(c => project(c.x, c.y, c.z));
        const pT = topCorners.map(c => project(c.x, c.y, c.z));
        const pR = refTopCorners.map(c => project(c.x, c.y, c.z));

        const avgZ = pB.reduce((sum, p) => sum + p.z, 0) / 4;

        // Reflection
        renderQueue.push({
          depthZ: avgZ + 15,
          draw: () => {
            ctx.save();
            const strokeColor = b.isGold ? "rgba(197, 160, 89, 0.03)" : "rgba(0, 225, 255, 0.03)";
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.5;

            // Reflect Base
            ctx.beginPath();
            ctx.moveTo(pB[0].x, pB[0].y);
            pB.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.closePath();
            ctx.stroke();

            // Reflect Top
            ctx.beginPath();
            ctx.moveTo(pR[0].x, pR[0].y);
            pR.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.closePath();
            ctx.stroke();

            // Reflect vertical columns
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
              ctx.moveTo(pB[i].x, pB[i].y);
              ctx.lineTo(pR[i].x, pR[i].y);
            }
            ctx.stroke();
            ctx.restore();
          }
        });

        // Building
        renderQueue.push({
          depthZ: avgZ,
          draw: () => {
            ctx.save();
            const colorPrefix = b.isGold ? "rgba(197, 160, 89, " : "rgba(0, 225, 255, ";

            // Wireframe Base Outline
            ctx.strokeStyle = colorPrefix + "0.15)";
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(pB[0].x, pB[0].y);
            pB.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.closePath();
            ctx.stroke();

            // Wireframe Top Outline
            ctx.strokeStyle = colorPrefix + "0.45)";
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(pT[0].x, pT[0].y);
            pT.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.closePath();
            ctx.stroke();

            // Columns
            ctx.strokeStyle = colorPrefix + "0.22)";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
              ctx.moveTo(pB[i].x, pB[i].y);
              ctx.lineTo(pT[i].x, pT[i].y);
            }
            ctx.stroke();

            // Circuit tracks running along building surfaces
            ctx.strokeStyle = colorPrefix + "0.38)";
            ctx.lineWidth = 0.5;
            b.lines.forEach((l) => {
              const yOffset = ((l.offset + time * l.speed * 20) % h);
              const yTop = -yOffset;
              const yBot = Math.min(0, yTop + l.length);

              const pLineTop = project(b.x + l.offsetX, yTop, b.z + l.offsetZ);
              const pLineBot = project(b.x + l.offsetX, yBot, b.z + l.offsetZ);

              ctx.beginPath();
              ctx.moveTo(pLineTop.x, pLineTop.y);
              ctx.lineTo(pLineBot.x, pLineBot.y);
              ctx.stroke();

              // Circuit head glow
              ctx.fillStyle = b.isGold ? "#e5c17b" : "#00e1ff";
              ctx.beginPath();
              ctx.arc(pLineTop.x, pLineTop.y, 1.2 * pLineTop.scale, 0, Math.PI * 2);
              ctx.fill();
            });

            // Holographic floor rings
            ctx.strokeStyle = colorPrefix + "0.06)";
            ctx.lineWidth = 0.5;
            const floorCount = 5;
            for (let f = 1; f <= floorCount; f++) {
              const fh = -h * (f / floorCount);
              const pf1 = project(b.x - halfW, fh, b.z - halfD);
              const pf2 = project(b.x + halfW, fh, b.z - halfD);
              const pf3 = project(b.x + halfW, fh, b.z + halfD);
              const pf4 = project(b.x - halfW, fh, b.z + halfD);

              ctx.beginPath();
              ctx.moveTo(pf1.x, pf1.y);
              ctx.lineTo(pf2.x, pf2.y);
              ctx.lineTo(pf3.x, pf3.y);
              ctx.lineTo(pf4.x, pf4.y);
              ctx.closePath();
              ctx.stroke();
            }

            ctx.restore();
          }
        });
      });

      // Add Screens to Render Queue
      screens.forEach((s) => {
        const halfW = s.w / 2;
        const halfH = s.h / 2;
        const cosY = Math.cos(s.rotY);
        const sinY = Math.sin(s.rotY);

        const getCoords = (lx, ly) => {
          return {
            x: s.x + lx * cosY,
            y: s.y + ly,
            z: s.z + lx * sinY
          };
        };

        const corners = [
          getCoords(-halfW, -halfH),
          getCoords(halfW, -halfH),
          getCoords(halfW, halfH),
          getCoords(-halfW, halfH)
        ];

        const pC = corners.map(c => project(c.x, c.y, c.z));
        const avgZ = pC.reduce((sum, p) => sum + p.z, 0) / 4;

        renderQueue.push({
          depthZ: avgZ,
          draw: () => {
            ctx.save();

            // Draw Screen Surface
            ctx.beginPath();
            ctx.moveTo(pC[0].x, pC[0].y);
            pC.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.closePath();

            const screenGrad = ctx.createLinearGradient(pC[0].x, pC[0].y, pC[2].x, pC[2].y);
            screenGrad.addColorStop(0, "rgba(0, 225, 255, 0.04)");
            screenGrad.addColorStop(1, "rgba(197, 160, 89, 0.015)");
            ctx.fillStyle = screenGrad;
            ctx.fill();

            // Screen Border Glow
            ctx.strokeStyle = "rgba(0, 225, 255, 0.28)";
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Draw content inside screen
            if (s.type === "sine") {
              ctx.strokeStyle = "rgba(197, 160, 89, 0.4)";
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              const steps = 14;
              for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const lx = -halfW + t * s.w;
                const ly = Math.sin(t * Math.PI * 4 + time * 3) * (halfH * 0.5);
                const wCoord = getCoords(lx, ly);
                const pt = project(wCoord.x, wCoord.y, wCoord.z);
                if (i === 0) ctx.moveTo(pt.x, pt.y);
                else ctx.lineTo(pt.x, pt.y);
              }
              ctx.stroke();
            } else if (s.type === "matrix") {
              ctx.fillStyle = "rgba(0, 225, 255, 0.35)";
              ctx.font = `${Math.max(4, 5.5 * pC[0].scale)}px monospace`;
              const cols = 5;
              const rows = 4;
              for (let c = 0; c < cols; c++) {
                for (let r = 0; r < rows; r++) {
                  const tx = -halfW + (c / cols) * s.w + s.w * 0.1;
                  const ty = -halfH + (r / rows) * s.h + s.h * 0.15;
                  const wCoord = getCoords(tx, ty);
                  const pt = project(wCoord.x, wCoord.y, wCoord.z);
                  const char = Math.random() < 0.5 ? "0" : "1";
                  ctx.fillText(char, pt.x, pt.y);
                }
              }
            } else {
              // Cyber grid display
              ctx.strokeStyle = "rgba(0, 225, 255, 0.08)";
              ctx.lineWidth = 0.5;
              const gridLines = 4;
              for (let g = 1; g < gridLines; g++) {
                const t = g / gridLines;
                const pTop = project(corners[0].x + t * (corners[1].x - corners[0].x), corners[0].y, corners[0].z + t * (corners[1].z - corners[0].z));
                const pBot = project(corners[3].x + t * (corners[2].x - corners[3].x), corners[3].y, corners[3].z + t * (corners[2].z - corners[3].z));
                ctx.beginPath();
                ctx.moveTo(pTop.x, pTop.y);
                ctx.lineTo(pBot.x, pBot.y);
                ctx.stroke();
              }
            }
            ctx.restore();
          }
        });
      });

      // Add Drones to Render Queue
      drones.forEach((d) => {
        const dx = d.cx + Math.cos(time * 2 + d.phase) * d.radius;
        const dz = d.cz + Math.sin(time * 1.5 + d.phase) * d.radius;
        const dy = d.cy + Math.sin(time * 3 + d.phase) * 12;

        const pDrone = project(dx, dy, dz);
        const avgZ = pDrone.z;

        renderQueue.push({
          depthZ: avgZ,
          draw: () => {
            ctx.save();
            const size = 5.5 * pDrone.scale;
            ctx.strokeStyle = "rgba(0, 225, 255, 0.4)";
            ctx.lineWidth = 1.0;

            ctx.beginPath();
            ctx.moveTo(pDrone.x - size, pDrone.y);
            ctx.lineTo(pDrone.x + size, pDrone.y);
            ctx.moveTo(pDrone.x, pDrone.y - size * 0.5);
            ctx.lineTo(pDrone.x, pDrone.y + size * 0.5);
            ctx.stroke();

            // Blinking rotor navigation lights
            const flashGreen = Math.sin(time * 12 + d.phase) > 0;
            ctx.fillStyle = flashGreen ? "#22c55e" : "#ef4444";
            ctx.beginPath();
            ctx.arc(pDrone.x - size, pDrone.y, 1.2 * pDrone.scale, 0, Math.PI * 2);
            ctx.arc(pDrone.x + size, pDrone.y, 1.2 * pDrone.scale, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        });
      });

      // Add Satellites to Render Queue
      satellites.forEach((s) => {
        s.angle += s.rotSpeed;
        const pSat = project(s.x, s.y, s.z);
        const avgZ = pSat.z;

        renderQueue.push({
          depthZ: avgZ,
          draw: () => {
            ctx.save();
            ctx.strokeStyle = "rgba(197, 160, 89, 0.35)";
            ctx.lineWidth = 0.8;

            const wingLength = s.size * pSat.scale;
            const cosA = Math.cos(s.angle);
            const sinA = Math.sin(s.angle);

            const xLeft = pSat.x - wingLength * cosA;
            const yLeft = pSat.y - wingLength * sinA * 0.3;
            const xRight = pSat.x + wingLength * cosA;
            const yRight = pSat.y + wingLength * sinA * 0.3;

            // Boom axis
            ctx.beginPath();
            ctx.moveTo(xLeft, yLeft);
            ctx.lineTo(xRight, yRight);
            ctx.stroke();

            // Panel Wings
            const pSize = 7.5 * pSat.scale;
            ctx.fillStyle = "rgba(0, 225, 255, 0.08)";
            ctx.fillRect(xLeft - pSize, yLeft - pSize/2, pSize*2, pSize);
            ctx.strokeRect(xLeft - pSize, yLeft - pSize/2, pSize*2, pSize);
            ctx.fillRect(xRight - pSize, yRight - pSize/2, pSize*2, pSize);
            ctx.strokeRect(xRight - pSize, yRight - pSize/2, pSize*2, pSize);

            // Center Dish
            ctx.beginPath();
            ctx.ellipse(pSat.x, pSat.y, 9 * pSat.scale, 5.5 * pSat.scale, s.angle * 0.1, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(197, 160, 89, 0.1)";
            ctx.fill();
            ctx.stroke();

            ctx.restore();
          }
        });
      });

      // Add Cars and Trails to Render Queue
      cars.forEach((car) => {
        const pCar = project(car.x, car.y, car.z);
        const avgZ = pCar.z;

        renderQueue.push({
          depthZ: avgZ,
          draw: () => {
            ctx.save();
            const colorPrefix = car.isGold ? "rgba(197, 160, 89, " : "rgba(0, 225, 255, ";

            // Draw long trailing neon path
            if (car.history.length > 1) {
              ctx.beginPath();
              const startPt = project(car.history[0].x, car.history[0].y, car.history[0].z);
              ctx.moveTo(startPt.x, startPt.y);
              for (let j = 1; j < car.history.length; j++) {
                const pt = project(car.history[j].x, car.history[j].y, car.history[j].z);
                ctx.lineTo(pt.x, pt.y);
              }
              const trailGrad = ctx.createLinearGradient(startPt.x, startPt.y, pCar.x, pCar.y);
              trailGrad.addColorStop(0, colorPrefix + "0.0)");
              trailGrad.addColorStop(1, colorPrefix + "0.6)");
              ctx.strokeStyle = trailGrad;
              ctx.lineWidth = 1.6 * pCar.scale;
              ctx.stroke();
            }

            // Glow Car Point
            ctx.fillStyle = car.isGold ? "#e5c17b" : "#00e1ff";
            ctx.beginPath();
            ctx.arc(pCar.x, pCar.y, 2.2 * pCar.scale, 0, Math.PI * 2);
            ctx.fill();

            // Blinking tail light
            if (Math.sin(time * 10 + car.x) > 0) {
              ctx.fillStyle = "rgba(239, 68, 68, 0.85)";
              ctx.beginPath();
              ctx.arc(pCar.x - (car.vx * 0.7), pCar.y - (car.vz * 0.7), 1.0 * pCar.scale, 0, Math.PI * 2);
              ctx.fill();
            }
            ctx.restore();
          }
        });
      });

      // 1. Draw Digital Highway Grid on Ground (Y = 0)
      ctx.save();
      ctx.strokeStyle = "rgba(0, 225, 255, 0.015)";
      ctx.lineWidth = 0.6;
      const roadSpacing = 75;
      ctx.beginPath();
      for (let x = -400; x <= 400; x += roadSpacing) {
        const p1 = project(x, 0, -400);
        const p2 = project(x, 0, 400);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      }
      for (let z = -400; z <= 400; z += roadSpacing) {
        const p1 = project(-400, 0, z);
        const p2 = project(400, 0, z);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      }
      ctx.stroke();
      ctx.restore();

      // 2. Draw Highway Particles
      drawHighwayParticles();

      // 3. Sort and Draw all isometric perspective elements (Far to Near depthZ descending)
      renderQueue.sort((a, b) => b.depthZ - a.depthZ);
      renderQueue.forEach(item => item.draw());

      // 4. Draw Jagged lightning flashes
      if (lightning) {
        ctx.save();
        ctx.strokeStyle = Math.random() < 0.55 ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 225, 255, 0.92)";
        ctx.lineWidth = (lightning.timer / 2.5) + 0.6;
        ctx.beginPath();
        const pStart = project(lightning.segments[0].x, lightning.segments[0].y, lightning.segments[0].z);
        ctx.moveTo(pStart.x, pStart.y);
        for (let j = 1; j < lightning.segments.length; j++) {
          const pt = project(lightning.segments[j].x, lightning.segments[j].y, lightning.segments[j].z);
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        // Sky flash flare
        ctx.fillStyle = "rgba(0, 225, 255, 0.07)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      // 5. Draw Cyber HUD Telemetry text
      ctx.save();
      ctx.font = "9px monospace";
      ctx.fillStyle = "rgba(0, 225, 255, 0.22)";
      const hudMargin = 30;
      ctx.fillText("[ DISTRICT_7: ACTIVE ]", hudMargin, hudMargin + 10);
      ctx.fillText("[ GRID_CORE: ONLINE ]", hudMargin, hudMargin + 22);
      ctx.beginPath();
      ctx.moveTo(hudMargin - 6, hudMargin);
      ctx.lineTo(hudMargin + 95, hudMargin);
      ctx.moveTo(hudMargin - 6, hudMargin);
      ctx.lineTo(hudMargin - 6, hudMargin + 30);
      ctx.strokeStyle = "rgba(0, 225, 255, 0.15)";
      ctx.stroke();

      const trOffset = canvas.width - hudMargin - 150;
      ctx.fillText("[ COGNITIVE: PASS ]", trOffset, hudMargin + 10);
      ctx.fillText("[ PARALLAX_SENS: OK ]", trOffset, hudMargin + 22);
      ctx.beginPath();
      ctx.moveTo(canvas.width - hudMargin + 6, hudMargin);
      ctx.lineTo(canvas.width - hudMargin - 95, hudMargin);
      ctx.moveTo(canvas.width - hudMargin + 6, hudMargin);
      ctx.lineTo(canvas.width - hudMargin + 6, hudMargin + 30);
      ctx.stroke();
      ctx.restore();

      // 6. Volumetric Fog Gradient (Dark blue fading bottom up)
      ctx.save();
      const fogHeight = 220;
      const fogGrad = ctx.createLinearGradient(0, canvas.height - fogHeight, 0, canvas.height);
      fogGrad.addColorStop(0, "rgba(4, 7, 18, 0)");
      fogGrad.addColorStop(0.5, "rgba(4, 7, 18, 0.65)");
      fogGrad.addColorStop(1, "rgba(4, 7, 18, 1.0)");
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, canvas.height - fogHeight, canvas.width, fogHeight);
      ctx.restore();

      // 7. Cinematic Lens Flare Simulation
      const lightSource = { x: 0, y: -650, z: 200 };
      const pLight = project(lightSource.x, lightSource.y, lightSource.z);
      if (pLight.z > 0 && pLight.x >= -100 && pLight.x <= canvas.width + 100) {
        ctx.save();
        // Central Light Sun bloom
        const sunGlow = ctx.createRadialGradient(pLight.x, pLight.y, 0, pLight.x, pLight.y, 160 * pLight.scale);
        sunGlow.addColorStop(0, "rgba(0, 225, 255, 0.08)");
        sunGlow.addColorStop(0.3, "rgba(197, 160, 89, 0.035)");
        sunGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(pLight.x, pLight.y, 160 * pLight.scale, 0, Math.PI * 2);
        ctx.fill();

        // Secondary flare rings reflecting along focal axis line
        const dx = centerX - pLight.x;
        const dy = centerY - pLight.y;

        const drawFlare = (ratio, radius, color) => {
          const fx = pLight.x + dx * ratio;
          const fy = pLight.y + dy * ratio;
          const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, radius);
          glow.addColorStop(0, color);
          glow.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(fx, fy, radius, 0, Math.PI * 2);
          ctx.fill();
        };

        drawFlare(0.45, 12 * pLight.scale, "rgba(197, 160, 89, 0.04)");
        drawFlare(0.78, 25 * pLight.scale, "rgba(0, 225, 255, 0.035)");
        drawFlare(1.25, 38 * pLight.scale, "rgba(197, 160, 89, 0.03)");
        drawFlare(1.65, 18 * pLight.scale, "rgba(0, 225, 255, 0.025)");

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const drawHighwayParticles = () => {
      ctx.save();
      particles.forEach((p) => {
        const pPt = project(p.x, p.y, p.z);
        ctx.fillStyle = p.isGold ? "rgba(197, 160, 89, 0.58)" : "rgba(0, 225, 255, 0.58)";
        ctx.beginPath();
        ctx.arc(pPt.x, pPt.y, 1.4 * pPt.scale, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
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
