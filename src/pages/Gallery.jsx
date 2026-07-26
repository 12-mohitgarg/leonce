import React, { useState } from "react";
import { Image, Layers, Warehouse, Building, Users, Ship, Calendar } from "lucide-react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { id: "All", label: "All Photos", icon: <Image size={15} /> },
    { id: "Products", label: "Product Inventory", icon: <Layers size={15} /> },
    { id: "Warehouse", label: "Logistics Warehouse", icon: <Warehouse size={15} /> },
    { id: "Office", label: "Corporate Office", icon: <Building size={15} /> },
    { id: "Team", label: "Procurement Team", icon: <Users size={15} /> },
    { id: "Operations", label: "Import Operations", icon: <Ship size={15} /> },
    { id: "Events", label: "Business Events", icon: <Calendar size={15} /> }
  ];

  const galleryItems = [
    { category: "Products", title: "High TG Multi-Layer PCBs", desc: "Inspection of multilayer HDI core panels.", icon: <Layers size={40} /> },
    { category: "Products", title: "Automated SMT Assembly Line", desc: "Vacuum pick-and-place component trace runs.", icon: <Layers size={40} /> },
    { category: "Warehouse", title: "ESD Secure Warehouse", desc: "Temperature and static shielded storage shelves.", icon: <Warehouse size={40} /> },
    { category: "Warehouse", title: "Air-Cargo Consignment Consolidation", desc: "Sealing shipping pallets for dispatch.", icon: <Warehouse size={40} /> },
    { category: "Office", title: "Technology Sourcing Desk", desc: "Our Mumbai coordination and customs clearing desk.", icon: <Building size={40} /> },
    { category: "Team", title: "Procurement Desk Audit", desc: "Quality engineers reviewing electrical test sheets.", icon: <Users size={40} /> },
    { category: "Operations", title: "Port customs Verification", desc: "WPC license checking and container seal matching.", icon: <Ship size={40} /> },
    { category: "Events", title: "Global Electronics Exhibition", desc: "Leonce delegation contracting with fab operators.", icon: <Calendar size={40} /> }
  ];

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="gallery-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Visual Overview</span>
          <h1 className="section-title">Media &amp; Operations Gallery</h1>
          <p className="section-desc">
            Take a look inside our importing steps, logistics centers, corporate team, and audited manufacturer products.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="section animate-on-scroll">
        <div className="container">
          <div className="gallery-tabs-row">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`gallery-tab-btn ${activeTab === tab.id ? "tab-active" : ""}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div className="gallery-card glass-card" key={idx}>
                <div className="gallery-visual-placeholder">
                  {item.icon}
                  <span className="gallery-card-tag">{item.category}</span>
                </div>
                <div className="gallery-card-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
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

    .gallery-tabs-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-bottom: 40px;
    }

    .gallery-tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-glass-blue);
      color: var(--text-muted);
      padding: 10px 18px;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition-smooth);
    }

    .gallery-tab-btn:hover {
      border-color: var(--color-gold);
      color: var(--text-white);
      background: rgba(197, 160, 89, 0.05);
    }

    .tab-active {
      background: var(--color-gold-gradient) !important;
      color: var(--bg-dark-obsidian) !important;
      border-color: var(--color-gold) !important;
      box-shadow: var(--border-glow-gold);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
    }

    .gallery-card {
      padding: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .gallery-visual-placeholder {
      height: 180px;
      background: rgba(13, 24, 56, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-cyan);
      opacity: 0.5;
      position: relative;
      border-bottom: 1px solid var(--border-glass-blue);
      transition: var(--transition-smooth);
    }

    .gallery-card:hover .gallery-visual-placeholder {
      opacity: 1;
      color: var(--color-gold-bright);
      transform: scale(1.02);
    }

    .gallery-card-tag {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: rgba(4, 7, 18, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-muted);
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 4px;
    }

    .gallery-card-info {
      padding: 20px;
      flex-grow: 1;
    }

    .gallery-card-info h4 {
      font-size: 1rem;
      color: var(--text-white);
      margin-bottom: 6px;
    }

    .gallery-card-info p {
      font-size: 0.8rem;
      color: var(--text-muted);
      line-height: 1.4;
    }

    .gallery-card:hover {
      transform: translateY(-8px);
      border-color: var(--color-gold);
    }

    @media (max-width: 991px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .gallery-grid {
        grid-template-columns: 1fr;
      }
      .gallery-tabs-row {
        gap: 8px;
      }
      .gallery-tab-btn {
        font-size: 0.75rem;
        padding: 8px 12px;
      }
    }
  `}</style>
);
