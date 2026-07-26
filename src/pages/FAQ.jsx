import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is your standard Minimum Order Quantity (MOQ) for high-density PCBs?",
      a: "Our typical B2B import MOQ for standard FR-4 multi-layer PCBs starts at 100 panels. For custom multilayer HDI boards or specialized impedance-controlled layouts, the MOQ can adjust based on the fabrication parameters. Contact our sales desk for prototype sample concessions."
    },
    {
      q: "How does the WPC licensing and wireless import clearance process operate?",
      a: "Leonce Multiventure operates an in-house compliance desk. For WiFi routers and IoT gateway terminal imports, we manage WPC (Wireless Planning & Coordination) filings and obtain ETA (Equipment Type Approval) certificates, ensuring complete customs clearances at harbor cargo hubs."
    },
    {
      q: "What is the typical shipping lead time for bulk PCBA assembly runs?",
      a: "Turnkey PCBA lead times typically span 4 to 6 weeks, which incorporates component sourcing (2 weeks), pick-and-place SMT/DIP run setup (1 week), quality checking (AOI/ICT), packing, and air cargo delivery. Ocean freight logistics may extend timelines by 3 weeks."
    },
    {
      q: "Do you supply product warranties on imported semiconductor batches?",
      a: "Yes. All our bulk technology import shipments are backed by a structured hardware warranty. If manufacturing anomalies are discovered during incoming electrical audits, our clients file RMA cases for prompt factory repair credits or replacement shipments."
    },
    {
      q: "How are payment milestones structured for custom OEM/ODM sourcing?",
      a: "Standard B2B terms require a 50% deposit upon contract sign-off and engineering CAD approval. The remaining 50% balance is payable upon verification of sample batches and shipping document (Bill of Lading) generation."
    },
    {
      q: "Can you source hard-to-find active microchips or obsolete diodes?",
      a: "Yes. We utilize a worldwide sourcing network that allows us to source hard-to-find chips directly from licensed fabs, bypassing intermediate broker markups."
    },
    {
      q: "Do you offer localized technical support for corporate mesh network routers?",
      a: "Yes. We offer direct technical coordination with factory software engineers to resolve custom firmware setups, security protocols, or mesh node setups for enterprise projects."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Have Questions?</span>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-desc">
            Find technical and logistics details regarding order minimums, customs licensing, shipping cycles, and warranty replacements.
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="section animate-on-scroll">
        <div className="container faq-max-width">
          <div className="faq-intro-block text-center" style={{ marginBottom: 40 }}>
            <HelpCircle size={36} className="faq-hub-icon" />
            <h2>Sourcing Support FAQ Hub</h2>
          </div>

          <div className="accordion-wrapper">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`accordion-item glass-card ${activeIndex === idx ? "acc-expanded" : ""}`}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="accordion-trigger">
                  <h4>{faq.q}</h4>
                  <button className="accordion-action-btn" aria-label="Toggle content">
                    {activeIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </button>
                </div>
                
                <div className={`accordion-panel ${activeIndex === idx ? "panel-visible" : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {styleStyle}
    </div>
  );
}

const styleStyle = (
  <style>{`
    .page-padding {
      padding-top: 100px;
    }

    .page-header {
      padding: 80px 24px;
      text-align: center;
      background: linear-gradient(180deg, var(--bg-deep-navy) 0%, var(--bg-dark-obsidian) 100%);
      border-bottom: 1px solid var(--border-glass-blue);
    }

    .faq-max-width {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-hub-icon {
      color: var(--color-cyan);
      filter: drop-shadow(0 0 5px rgba(0, 225, 255, 0.3));
      margin-bottom: 12px;
    }

    .faq-intro-block h2 {
      font-size: 1.6rem;
    }

    /* Accordion */
    .accordion-wrapper {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .accordion-item {
      cursor: pointer;
      transition: var(--transition-smooth);
      border-color: var(--border-glass-blue);
    }

    .accordion-item:hover {
      border-color: var(--color-gold);
    }

    .acc-expanded {
      border-color: var(--color-gold) !important;
      box-shadow: var(--border-glow-gold);
    }

    .accordion-trigger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    .accordion-trigger h4 {
      font-size: 1rem;
      color: var(--text-white);
      font-weight: 600;
      line-height: 1.4;
    }

    .accordion-action-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      color: var(--color-gold-bright);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
    }

    .accordion-panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s;
      padding-top: 0;
    }

    .panel-visible {
      max-height: 200px;
      padding-top: 15px;
      border-top: 1px solid rgba(255, 255, 255, 0.04);
      margin-top: 15px;
    }

    .accordion-panel p {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    @media (max-width: 600px) {
      .accordion-trigger h4 {
        font-size: 0.9rem;
      }
      .accordion-panel p {
        font-size: 0.85rem;
      }
    }
  `}</style>
);
