import React, { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polygon points="2 17 12 22 22 17" />
            <polygon points="2 12 12 17 22 12" />
          </svg>
        </div>
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loader-text">
          <span className="loader-company">LEONCE</span>
          <span className="loader-tagline">MULTIVENTURE</span>
        </div>
        <div className="loader-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
      <style>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #040712;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeOut 0.5s ease 2s forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            pointer-events: none;
          }
        }

        .loader-content {
          text-align: center;
          position: relative;
        }

        .loader-logo {
          color: #c5a059;
          margin-bottom: 30px;
          animation: logoPulse 2s ease-in-out infinite;
        }

        @keyframes logoPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .loader-spinner {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 30px;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 50%;
        }

        .spinner-ring:nth-child(1) {
          border-top-color: #00e1ff;
          animation: spin 1.5s linear infinite;
        }

        .spinner-ring:nth-child(2) {
          border-right-color: #c5a059;
          animation: spin 2s linear infinite reverse;
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
        }

        .spinner-ring:nth-child(3) {
          border-bottom-color: #00e1ff;
          animation: spin 2.5s linear infinite;
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loader-text {
          margin-bottom: 25px;
        }

        .loader-company {
          display: block;
          font-family: 'Outfit', 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #c5a059;
          letter-spacing: 8px;
          animation: slideIn 1s ease-out;
        }

        .loader-tagline {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: #00e1ff;
          letter-spacing: 6px;
          margin-top: 5px;
          animation: slideIn 1s ease-out 0.2s both;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .loader-progress {
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin: 0 auto;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #00e1ff, #c5a059);
          border-radius: 2px;
          animation: progress 2s ease-out forwards;
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
