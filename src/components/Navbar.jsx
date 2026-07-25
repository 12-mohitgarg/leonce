import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ShieldAlert, Cpu, ChevronDown } from "lucide-react";
import { subscribeToAuth } from "../firebase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on page transition
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // Listen to admin login changes
    const unsubscribe = subscribeToAuth((user) => {
      setAdminUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Dropdown Link Groups
  const corporateLinks = [
    { path: "/about", label: "About Company" },
    { path: "/md", label: "Managing Director" },
    { path: "/faq", label: "FAQ Desk" },
  ];

  const sourcingLinks = [
    { path: "/services", label: "Import Services" },
    { path: "/sourcing", label: "Global Network" },
    { path: "/industries", label: "Industries We Serve" },
  ];

  const qualityLinks = [
    { path: "/qa", label: "Quality Control" },
    { path: "/certifications", label: "Certifications" },
    { path: "/portfolio", label: "Portfolio & Achievements" },
    { path: "/gallery", label: "Operations Gallery" },
  ];

  const isAdminRoute = location.pathname.startsWith("/admin");
  const showScrolled = scrolled || isAdminRoute;

  return (
    <nav className={`navbar ${showScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo-link">
          <div className="navbar-logo-wrapper">
            <Cpu className="logo-svg-icon" />
            <div className="navbar-brand-text">
              <span className="brand-primary">LEONCE</span>
              <span className="brand-secondary">MULTIVENTURE</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>
            Home
          </NavLink>

          {/* Corporate Dropdown */}
          <div className="nav-item-dropdown">
            <button className="dropdown-trigger">
              Corporate <ChevronDown size={12} />
            </button>
            <div className="dropdown-menu">
              {corporateLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `dropdown-item ${isActive ? "dropdown-item-active" : ""}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>
            Products
          </NavLink>

          {/* Sourcing Solutions Dropdown */}
          <div className="nav-item-dropdown">
            <button className="dropdown-trigger">
              Sourcing <ChevronDown size={12} />
            </button>
            <div className="dropdown-menu">
              {sourcingLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `dropdown-item ${isActive ? "dropdown-item-active" : ""}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Quality & Trust Dropdown */}
          <div className="nav-item-dropdown">
            <button className="dropdown-trigger">
              Quality &amp; Standards <ChevronDown size={12} />
            </button>
            <div className="dropdown-menu">
              {qualityLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `dropdown-item ${isActive ? "dropdown-item-active" : ""}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>
            Contact Us
          </NavLink>
          
          {/* Admin desk button */}
          {adminUser ? (
            <NavLink to="/admin/dashboard" className="nav-btn-admin admin-active">
              <ShieldAlert size={14} /> Admin Desk
            </NavLink>
          ) : (
            <NavLink to="/admin/login" className="nav-btn-admin">
              Admin Login
            </NavLink>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`navbar-mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
        {/* Main Section */}
        <div className="mobile-section-block">
          <span className="mobile-section-hdr">Main Directory</span>
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}>
            Products Catalog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}>
            Contact Us
          </NavLink>
        </div>

        {/* Corporate Section */}
        <div className="mobile-section-block">
          <span className="mobile-section-hdr">Corporate Profile</span>
          {corporateLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Sourcing Section */}
        <div className="mobile-section-block">
          <span className="mobile-section-hdr">Sourcing Desk</span>
          {sourcingLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Quality Section */}
        <div className="mobile-section-block">
          <span className="mobile-section-hdr">Quality &amp; Standards</span>
          {qualityLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Admin Link at Bottom */}
        <div className="mobile-section-block" style={{ marginTop: 10, border: "none" }}>
          {adminUser ? (
            <Link to="/admin/dashboard" className="mobile-nav-link mobile-nav-admin">
              <ShieldAlert size={16} style={{ marginRight: 6 }} /> Admin Portal
            </Link>
          ) : (
            <Link to="/admin/login" className="mobile-nav-link mobile-nav-admin">
              Admin Login Desk
            </Link>
          )}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: var(--transition-smooth);
          padding: 20px 24px;
        }

        .navbar-scrolled {
          background: var(--bg-glass-nav);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 12px 24px;
          border-bottom: 1px solid var(--border-glass-blue);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar-logo-link {
          display: flex;
          align-items: center;
        }

        .navbar-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-svg-icon {
          color: var(--color-cyan);
          width: 26px;
          height: 26px;
          filter: drop-shadow(0 0 8px rgba(0, 225, 255, 0.6));
          animation: float 4s ease-in-out infinite;
        }

        .navbar-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-primary {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--text-white);
        }

        .brand-secondary {
          font-family: var(--font-display);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: var(--color-gold);
        }

        .navbar-desktop-menu {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding: 8px 4px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-gold-gradient);
          transition: var(--transition-smooth);
        }

        .nav-link:hover {
          color: var(--text-white);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link-active {
          color: var(--color-gold-bright) !important;
          font-weight: 600;
        }

        .nav-link-active::after {
          width: 100%;
          background: var(--color-gold-gradient);
        }

        /* Hover Dropdown styles */
        .nav-item-dropdown {
          position: relative;
        }

        .dropdown-trigger {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 8px 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          outline: none;
          transition: var(--transition-fast);
        }

        .dropdown-trigger:hover {
          color: var(--text-white);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(8, 13, 34, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass-blue);
          box-shadow: var(--shadow-premium);
          border-radius: 6px;
          padding: 10px 0;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000;
        }

        .nav-item-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-item {
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 10px 20px;
          text-align: left;
          transition: var(--transition-fast);
          display: block;
          white-space: nowrap;
        }

        .dropdown-item:hover {
          color: var(--color-gold-bright);
          background: rgba(197, 160, 89, 0.08);
          padding-left: 24px;
        }

        .dropdown-item-active {
          color: var(--color-gold-bright) !important;
          font-weight: 600;
          background: rgba(197, 160, 89, 0.04);
        }

        /* Admin Link */
        .nav-btn-admin {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(197, 160, 89, 0.1);
          border: 1px solid var(--border-glass-gold);
          color: var(--color-gold-bright);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition-smooth);
        }

        .nav-btn-admin:hover {
          background: var(--color-gold-gradient);
          color: var(--bg-dark-obsidian);
          border-color: var(--color-gold);
          box-shadow: var(--border-glow-gold);
        }

        .admin-active {
          background: rgba(0, 225, 255, 0.1);
          border-color: var(--border-glass-blue);
          color: var(--color-cyan);
        }

        .admin-active:hover {
          background: var(--color-tech-gradient);
          color: var(--text-white);
          border-color: var(--color-cyan);
          box-shadow: var(--border-glow-blue);
        }

        .navbar-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-white);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .navbar-mobile-toggle:hover {
          color: var(--color-cyan);
        }

        /* Mobile Sidebar Menu (Categorized) */
        .navbar-mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          height: 100vh;
          background: rgba(4, 7, 18, 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-left: 1px solid var(--border-glass-blue);
          padding: 90px 24px 40px 24px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          overflow-y: auto;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 999;
          box-shadow: -15px 0 35px rgba(0, 0, 0, 0.8);
        }

        .mobile-menu-open {
          right: 0;
        }

        .mobile-section-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding-bottom: 12px;
        }

        .mobile-section-hdr {
          font-family: var(--font-display);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-gold-bright);
          letter-spacing: 1.5px;
          margin-bottom: 4px;
        }

        .mobile-nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 8px 0;
          transition: var(--transition-fast);
        }

        .mobile-nav-link:hover, .mobile-nav-link-active {
          color: var(--text-white);
          padding-left: 6px;
        }

        .mobile-nav-admin {
          color: var(--color-cyan) !important;
          border-bottom: none;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        @media (max-width: 1050px) {
          .navbar-desktop-menu {
            display: none;
          }
          .navbar-mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
