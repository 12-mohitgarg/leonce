import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingActions() {
  const whatsappNumber = "+919876543210"; // Sample WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hello Leonce Multiventure team, we would like to inquire about bulk importing PCBA & router devices."
  );

  return (
    <div className="floating-actions-wrapper">
      {/* WhatsApp Button */}
      {/* <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn float-wa"
        aria-label="Chat on WhatsApp"
      >
        <span className="tooltip">WhatsApp Chat</span>
        <MessageCircle size={24} fill="currentColor" />
      </a> */}

      {/* Call Button */}
      {/* <a
        href={`tel:${phoneNumber}`}
        className="floating-btn float-call"
        aria-label="Direct Call Office"
      >
        <span className="tooltip">Call Office</span>
        <PhoneCall size={22} fill="currentColor" />
      </a> */}

      <style>{`
        .floating-actions-wrapper {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 999;
        }

        .floating-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          transition: var(--transition-smooth);
          position: relative;
          cursor: pointer;
        }

        .float-wa {
          background: #25d366;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: pulseGreen 2s infinite;
        }

        .float-wa:hover {
          background: #128c7e;
          transform: scale(1.1) rotate(8deg);
        }

        .float-call {
          background: var(--color-blue);
          border: 1px solid rgba(0, 225, 255, 0.3);
          animation: pulseBlue 2s infinite;
          animation-delay: 0.5s;
        }

        .float-call:hover {
          background: #0052d4;
          transform: scale(1.1) rotate(-8deg);
          box-shadow: var(--shadow-neon-blue);
        }

        /* Tooltip style */
        .tooltip {
          position: absolute;
          right: 65px;
          background: var(--bg-deep-navy);
          border: 1px solid var(--border-glass-gold);
          color: var(--text-white);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition-fast);
          pointer-events: none;
          box-shadow: var(--shadow-premium);
        }

        .floating-btn:hover .tooltip {
          opacity: 1;
          visibility: visible;
          right: 70px;
        }

        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes pulseBlue {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 114, 255, 0.5);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(0, 114, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 114, 255, 0);
          }
        }

        @media (max-width: 768px) {
          .floating-actions-wrapper {
            bottom: 20px;
            right: 20px;
            gap: 10px;
          }
          .floating-btn {
            width: 46px;
            height: 46px;
          }
        }
      `}</style>
    </div>
  );
}
