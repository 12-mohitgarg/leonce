import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ShieldAlert, Cpu } from "lucide-react";
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

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/md", label: "Managing Director" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Import Services" },
    { path: "/sourcing", label: "Global Sourcing" },
    { path: "/industries", label: "Industries" },
    { path: "/qa", label: "Quality" },
    { path: "/certifications", label: "Certifications" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
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

        {/* Desktop Links */}
        <div className="navbar-desktop-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Admin link */}
          {adminUser ? (
            <NavLink to="/admin/dashboard" className="nav-btn-admin admin-active">
              <ShieldAlert size={15} /> Admin Portal
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

      {/* Mobile Links */}
      <div className={`navbar-mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
        {adminUser ? (
          <Link
            to="/admin/dashboard"
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link mobile-nav-admin"
          >
            <ShieldAlert size={16} style={{ marginRight: 6 }} /> Admin Portal
          </Link>
        ) : (
          <Link
            to="/admin/login"
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link mobile-nav-admin"
          >
            Admin Login
          </Link>
        )}
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
          width: 28px;
          height: 28px;
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
          font-size: 1.35rem;
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
          gap: 20px;
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

        .nav-btn-admin {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(197, 160, 89, 0.1);
          border: 1px solid var(--border-glass-gold);
          color: var(--color-gold-bright);
          display: flex;
          align-items: center;
          gap: 6px;
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

        /* Mobile Menu */
        .navbar-mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: rgba(4, 7, 18, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid var(--border-glass-blue);
          padding: 100px 30px 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 999;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.8);
        }

        .mobile-menu-open {
          right: 0;
        }

        .mobile-nav-link {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link:hover, .mobile-nav-link-active {
          color: var(--color-gold-bright);
          padding-left: 8px;
        }

        .mobile-nav-admin {
          color: var(--color-cyan);
          border-bottom: none;
          font-weight: 600;
          margin-top: 15px;
          display: flex;
          align-items: center;
        }

        @media (max-width: 1150px) {
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
