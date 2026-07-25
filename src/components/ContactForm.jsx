import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, MessageSquare } from "lucide-react";
import { addInquiry } from "../firebase";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "PCB Import",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await addInquiry(formData);
      if (res.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "PCB Import",
          message: "",
        });
        
        // Trigger high-end gold-blue celebratory confetti
        confetti({
          particleCount: 100,
          spread: 80,
          colors: ["#c5a059", "#00e1ff", "#0052d4", "#ffffff"],
          origin: { y: 0.6 }
        });
      } else {
        setError(res.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please verify your connection.");
    } finally {
      setLoading(false);
    }
  };

  const servicesList = [
    "PCB Import & Supply",
    "PCBA Manufacturing & Assembly",
    "WiFi Router Procurement",
    "Electronic Component Sourcing",
    "OEM Sourcing Solutions",
    "ODM Product Sourcing",
    "Global Procurement & Logistics",
    "Bulk Electronics Procurement",
    "Other Tech Inquiries"
  ];

  return (
    <div className="contact-form-container glass-card">
      <div className="form-header">
        <MessageSquare className="form-title-icon" />
        <h3>Send B2B Enquiry</h3>
        <p>Our global supplier specialists will respond within 12 business hours.</p>
      </div>

      {success ? (
        <div className="form-success-box">
          <CheckCircle2 className="success-icon" size={48} />
          <h4>Enquiry Submitted Successfully!</h4>
          <p>Thank you for contacting Leonce Multiventure. We have dispatched your request to our procurement desk.</p>
          <button className="btn btn-gold" onClick={() => setSuccess(false)}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="enquiry-form">
          {error && <div className="form-error-box">{error}</div>}

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="req">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Mohammad Faizan"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email <span className="req">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Leonce Electronics"
              />
            </div>
          </div>

          <div className="form-group select-group">
            <label htmlFor="service">Sourcing Service / Product Focus</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              {servicesList.map((srv, idx) => (
                <option key={idx} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Requirement Details <span className="req">*</span></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your product requirements, minimum order quantities (MOQ), and shipping destination..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-gold btn-submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="spinner-icon animate-spin" size={16} />
                Processing Sourcing Request...
              </>
            ) : (
              <>
                <Send size={16} />
                Submit Sourcing Inquiry
              </>
            )}
          </button>
        </form>
      )}

      <style>{`
        .contact-form-container {
          padding: 40px;
          border-color: var(--border-glass-gold);
        }

        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .form-title-icon {
          color: var(--color-gold);
          width: 36px;
          height: 36px;
          margin-bottom: 12px;
          filter: drop-shadow(0 0 5px var(--color-gold));
        }

        .form-header h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .form-header p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-light);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .req {
          color: #ef4444;
          margin-left: 2px;
        }

        .form-group input, .form-group textarea, .form-group select {
          background: rgba(13, 24, 56, 0.6);
          border: 1px solid var(--border-glass-blue);
          border-radius: 4px;
          padding: 12px 16px;
          color: var(--text-white);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 10px rgba(197, 160, 89, 0.3);
          background: rgba(13, 24, 56, 0.9);
        }

        .form-group select option {
          background: var(--bg-dark-obsidian);
          color: var(--text-white);
          padding: 10px;
        }

        .btn-submit {
          width: 100%;
          padding: 14px;
          margin-top: 10px;
        }

        .form-success-box {
          text-align: center;
          padding: 30px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .success-icon {
          color: #25d366;
          filter: drop-shadow(0 0 10px rgba(37, 211, 102, 0.5));
          animation: pulseGreen 2s infinite;
        }

        .form-success-box h4 {
          font-size: 1.3rem;
          color: var(--text-white);
        }

        .form-success-box p {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 400px;
          margin: 0 auto 10px auto;
        }

        .form-error-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
          padding: 12px 16px;
          border-radius: 4px;
          font-size: 0.9rem;
          text-align: center;
        }

        .spinner-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
