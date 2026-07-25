import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-container glass-card">
        <ShieldAlert size={60} className="notfound-icon animate-pulse" />
        <h1>404 Error</h1>
        <h2>Coordinates Not Found</h2>
        <p>The sourcing route or document catalog you are searching for does not exist in the Leonce Multiventure database index.</p>
        <Link to="/" className="btn btn-gold">
          <Home size={15} /> Return to Home Port
        </Link>
      </div>

      <style>{`
        .notfound-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #02040a;
          padding: 24px;
        }

        .notfound-container {
          max-width: 450px;
          width: 100%;
          text-align: center;
          padding: 40px 30px;
          border-color: var(--border-glass-gold);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .notfound-icon {
          color: var(--color-gold);
          filter: drop-shadow(0 0 10px rgba(197, 160, 89, 0.4));
        }

        .notfound-container h1 {
          font-size: 2.25rem;
          color: var(--text-white);
        }

        .notfound-container h2 {
          font-size: 1.25rem;
          color: var(--color-cyan);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .notfound-container p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
