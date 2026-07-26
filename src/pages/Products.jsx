import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, Eye, X, BookOpen, Settings, CheckCircle2, ShoppingBag } from "lucide-react";


const STATIC_PRODUCTS = [
  {
    id: "prod-pcb-1",
    name: "High-Density Multilayer PCB",
    category: "PCB",
    description: "Premium grade multi-layer FR-4 printed circuit boards designed for high-frequency signal integrity and thermal efficiency in telecom applications.",
    features: ["Up to 32 Layers", "Impedance Controlled", "Halogen-Free Options", "Gold Finger Plating"],
    specifications: {
      "Base Material": "FR-4 High TG / Rogers / Polyimide",
      "Board Thickness": "0.4mm - 3.2mm",
      "Min Trace Width/Spacing": "3mil / 3mil",
      "Surface Finish": "ENIG / HASL / OSP"
    },
    applications: "Telecommunications base stations, networking switches, server motherboards, industrial robotics control boards.",
    gallery: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-pcb-2",
    name: "Flexible Rigid PCB (Rigid-Flex)",
    category: "PCB",
    description: "Hybrid rigid-flex PCBs providing extreme space efficiency, dynamic flexing cycles, and high interconnect reliability for medical and aerospace tech.",
    features: ["Polymide Flexible Film", "High Vibration Resistance", "3D Dynamic Flexing", "No Cable Connector Needed"],
    specifications: {
      "Layer Count": "2 - 12 Layers",
      "Flex Core Thickness": "2mil - 5mil",
      "Adhesive Layer": "Acrylic / Epoxy",
      "Copper Weight": "0.5oz - 2oz"
    },
    applications: "Medical wearables, folding smartphone hinge displays, aerospace telemetry.",
    gallery: ["https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-pcba-1",
    name: "Industrial SMT PCBA Assembly",
    category: "PCBA",
    description: "Turnkey PCBA manufacturing utilizing advanced high-speed SMT assembly, automated optical inspection (AOI), and functional testing.",
    features: ["01005 Component Placement", "BGA & QFN Fine Pitch SMT", "Conformal Coating", "X-Ray Solder Inspection"],
    specifications: {
      "SMT Line Speed": "80,000 components/hour",
      "Testing Capabilities": "ICT, FCT, AOI, Flying Probe, X-Ray",
      "Lead-free Compliance": "RoHS / REACH Compliant",
      "IPC Standard": "IPC-A-610 Class II / Class III"
    },
    applications: "Automotive engine control units, medical diagnostics, high-reliability smart grid power meters.",
    gallery: ["https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-pcba-2",
    name: "IoT Embedded PCB Assembly",
    category: "PCBA",
    description: "Custom printed circuit board assembly optimized for low-power IoT sensor nodes, containing integrated RF shields and BLE modules.",
    features: ["Low-power design layout", "BLE & WiFi integration", "Selective Wave Soldering", "Underfill encapsulation"],
    specifications: {
      "BGA Pitch": "Down to 0.4mm",
      "Component Height Limit": "1.2mm",
      "PCB Laminate": "High-TG FR4",
      "Assembly Standard": "IPC J-STD-001"
    },
    applications: "Industrial telemetry, environment sensors, smart lighting controls.",
    gallery: ["https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-router-1",
    name: "Enterprise Dual-Band WiFi 6 Router",
    category: "WiFi Routers",
    description: "High-capacity WiFi 6 gigabit wireless router engineered for dense B2B office networks and enterprise smart device environments.",
    features: ["AX3000 Speeds", "MU-MIMO & OFDMA", "WPA3 Security Protocol", "8x High-Gain External Antennas"],
    specifications: {
      "Wireless Speed": "2402 Mbps (5GHz) + 574 Mbps (2.4GHz)",
      "Ethernet Ports": "1x 2.5G WAN Port, 4x Gigabit LAN Ports",
      "Concurrent Clients": "Up to 256 active devices",
      "Processor": "1.8 GHz Quad-Core CPU"
    },
    applications: "Corporate offices, education campus hubs, hotels, high-traffic commercial zones.",
    gallery: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-router-2",
    name: "High-Power Outdoor Mesh Node",
    category: "WiFi Routers",
    description: "Weatherproof IP67 rated outdoor wireless access point with mesh networking support for continuous public WiFi coverage.",
    features: ["IP67 Weatherproof", "Seamless Roaming Mesh", "PoE Injector Powered", "Dual-Band Omni Antennas"],
    specifications: {
      "Antenna Gain": "5dBi Omni (Integrated)",
      "Max Range": "300 Meters (Line of Sight)",
      "PoE Standard": "802.3at PoE+",
      "Temperature Limit": "-40°C to 65°C"
    },
    applications: "Public parks, warehouse yards, industrial campuses, farming estates.",
    gallery: ["https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-net-1",
    name: "Gigabit Fiber Optic Media Converter",
    category: "Networking Devices",
    description: "High-performance Ethernet-to-Fiber media converter extending copper network distances up to 20km over single-mode fiber optic cabling.",
    features: ["Hot-Swappable SFP Slots", "Auto-Negotiation Flow", "Link Fault Pass-Through", "Low Power Draw"],
    specifications: {
      "Wavelength": "1310nm / 1550nm",
      "Fiber Type": "Single-Mode / Multi-Mode",
      "Interface": "SC Duplex / LC SFP Slot",
      "Distance": "Up to 20 km"
    },
    applications: "Data centers, CCTV networks, metropolitan campus fiber loops.",
    gallery: ["https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-net-2",
    name: "24-Port Managed Gigabit PoE Switch",
    category: "Networking Devices",
    description: "Layer 2+ managed network switch delivering PoE power up to 370W to IP cameras, VoIP phones, and wireless access points.",
    features: ["Layer 2+ Management", "370W Total PoE Budget", "4x 10G SFP+ Uplink Ports", "Static Routing Support"],
    specifications: {
      "Switching Capacity": "128 Gbps",
      "PoE Ports": "24x RJ45 802.3at/af",
      "Console Interface": "RJ45 & Micro-USB",
      "Rackmount Height": "1U standard"
    },
    applications: "Office networks, high-definition IP camera networks, server racks.",
    gallery: ["https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-iot-1",
    name: "B2B IoT Smart Gateway Hub",
    category: "IoT Devices",
    description: "Multi-protocol IoT gateway supporting Zigbee, Z-Wave, BLE, and WiFi to bridge smart sensors directly to cloud infrastructure.",
    features: ["Multi-protocol Support", "Edge Computing Capability", "Local Automations Storage", "Power-over-Ethernet (PoE)"],
    specifications: {
      "Protocols": "Zigbee 3.0, Bluetooth 5.2, Thread, WiFi 2.4/5GHz",
      "Input Voltage": "PoE (802.3af) or 5V 2A USB-C",
      "Operating Temp": "-10°C to 50°C",
      "SDK Availability": "Python / C++ Client SDK"
    },
    applications: "Smart building automation, warehouse environment monitoring, smart agriculture networks.",
    gallery: ["https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-iot-2",
    name: "Industrial Edge Computing Gateway",
    category: "IoT Devices",
    description: "Ruggedized fanless industrial PC designed for high-performance edge computing, analytics, and Modbus protocol conversion.",
    features: ["Fanless Aluminium Chassis", "Modbus & OPC UA Support", "Wide Input Voltage range", "Dual SIM LTE failover"],
    specifications: {
      "Processor": "Intel Quad-Core Atom CPU",
      "RAM / Storage": "8GB DDR4 / 128GB SSD",
      "Serial Ports": "2x RS232/425, 2x RJ45",
      "Mounting Option": "DIN Rail mount"
    },
    applications: "Factory PLC gateway, heavy machinery diagnostics, solar grid telecommunication.",
    gallery: ["https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-comp-1",
    name: "ARM Cortex-M4 Microcontroller Chip",
    category: "Electronic Components",
    description: "High-performance ARM Cortex-M4 32-bit RISC processor core with DSP instructions, FPU, and rich embedded peripherals.",
    features: ["180MHz Clock Speed", "Embedded FPU & DSP", "Rich Analog Peripherals", "Ultra-low Power Modes"],
    specifications: {
      "Flash / SRAM": "1MB Flash / 256KB SRAM",
      "Package Type": "LQFP-100 / BGA-137",
      "Operating Voltage": "1.7V - 3.6V",
      "Interfaces": "CAN, SPI, I2C, USART, USB OTG"
    },
    applications: "Consumer wearables, drone flight controller, high-precision industrial sensors.",
    gallery: ["https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "prod-comp-2",
    name: "Optoelectronic High-Speed Optocoupler",
    category: "Electronic Components",
    description: "High-speed optoelectronic isolator delivering 5000V isolation voltage and 10MBd data transfer speeds for safe industrial switching.",
    features: ["5000 Vrms Isolation", "10 MBd Data Speed", "TTL / CMOS Compatible", "High Common Mode Rejection"],
    specifications: {
      "Isolation Voltage": "5000 Vrms",
      "Max Forward Current": "20mA",
      "Rise/Fall Time": "25ns / 25ns",
      "Package Option": "DIP-8 / SMD-8"
    },
    applications: "Motor drives, power supplies, logic circuit isolation.",
    gallery: ["https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=600&q=80"]
  }
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [products, setProducts] = useState(STATIC_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const categoriesList = [
    "All",
    "PCB",
    "PCBA",
    "WiFi Routers",
    "Networking Devices",
    "IoT Devices",
    "Electronic Components"
  ];

  useEffect(() => {
    // Filter and search
    let list = [...products];

    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.applications && p.applications.toLowerCase().includes(q))
      );
    }

    setFilteredProducts(list);
  }, [products, selectedCategory, searchQuery]);

  // Update category when URL search parameter changes
  useEffect(() => {
    const catParam = searchParams.get("category");
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [searchParams]);

  const selectCategoryHandler = (cat) => {
    setSelectedCategory(cat);
    setSearchParams({ category: cat });
  };

  return (
    <div className="products-page page-padding">
      {/* HEADER */}
      <section className="page-header bg-deep-navy">
        <div className="container text-center">
          <span className="section-subtitle">Corporate Catalog</span>
          <h1 className="section-title">Imported Products Directory</h1>
          <p className="section-desc">
            Browse our verified inventory ranging from high-frequency PCB layers to finished enterprise WiFi 6 terminals.
          </p>
        </div>
      </section>

      {/* FILTER & PRODUCT GRID */}
      <section className="section">
        <div className="container">
          <div className="catalog-control-panel glass-card">
            {/* Search Input */}
            <div className="search-box-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search products, specifications, or applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filters Info */}
            <div className="filters-header">
              <SlidersHorizontal size={16} />
              <span>Category Filter</span>
            </div>
          </div>

          <div className="catalog-layout">
            {/* Left: Category pills */}
            <aside className="category-sidebar">
              {categoriesList.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => selectCategoryHandler(cat)}
                  className={`category-pill-btn ${selectedCategory === cat ? "active-pill" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </aside>

            {/* Right: Products grid */}
            <main className="products-grid-content">
              {loading ? (
                <div className="catalog-status-msg">Loading Product Catalog...</div>
              ) : filteredProducts.length === 0 ? (
                <div className="catalog-status-msg">
                  No products found matching your search. Please check another category or query.
                </div>
              ) : (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="product-card glass-card"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="product-img-wrapper">
                        {product.gallery && product.gallery[0] ? (
                          <img src={product.gallery[0]} alt={product.name} className="product-card-img" />
                        ) : (
                          <div className="product-card-svg-placeholder">
                            <ShoppingBag size={48} className="placeholder-bag-icon" />
                          </div>
                        )}
                        <span className="product-category-tag">{product.category}</span>
                      </div>
                      <div className="product-card-info">
                        <h3>{product.name}</h3>
                        <p>{product.description.slice(0, 100)}...</p>
                        <button className="btn btn-secondary btn-card-view">
                          <Eye size={14} /> Technical Specs
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* DETAILED PRODUCT SPECS MODAL */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="modal-grid">
              {/* Modal Image/Icon Panel */}
              <div className="modal-visual-panel">
                {selectedProduct.gallery && selectedProduct.gallery[0] ? (
                  <img src={selectedProduct.gallery[0]} alt={selectedProduct.name} className="modal-large-img" />
                ) : (
                  <div className="modal-visual-box">
                    <ShoppingBag size={80} className="modal-large-icon" />
                  </div>
                )}
                <span className="modal-tag">{selectedProduct.category}</span>
                
                <div className="modal-b2b-cta">
                  <h4>Procurement Quote</h4>
                  <p>Inquire about MOQ pricing, sample batches, and customs delivery rates.</p>
                  <a href={`/contact?inquiry_about=${encodeURIComponent(selectedProduct.name)}`} className="btn btn-gold" onClick={() => setSelectedProduct(null)}>
                    Request Quote For This Item
                  </a>
                </div>
              </div>

              {/* Modal Technical Specifications Panel */}
              <div className="modal-info-panel">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-desc-text">{selectedProduct.description}</p>

                {/* Key Features */}
                {selectedProduct.features && selectedProduct.features.length > 0 && (
                  <div className="modal-section-block">
                    <h3><CheckCircle2 size={16} className="block-icon" /> Key Features</h3>
                    <ul className="modal-features-list">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Specifications */}
                {selectedProduct.specifications && Object.keys(selectedProduct.specifications).length > 0 && (
                  <div className="modal-section-block">
                    <h3><Settings size={16} className="block-icon" /> Technical Specifications</h3>
                    <table className="modal-specs-table">
                      <tbody>
                        {Object.entries(selectedProduct.specifications).map(([key, val], idx) => (
                          <tr key={idx}>
                            <td className="spec-key">{key}</td>
                            <td className="spec-val">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Applications */}
                {selectedProduct.applications && (
                  <div className="modal-section-block">
                    <h3><BookOpen size={16} className="block-icon" /> Applications</h3>
                    <p className="modal-apps-text">{selectedProduct.applications}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

        .catalog-control-panel {
          padding: 20px;
          border-color: var(--border-glass-blue);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
        }

        .search-box-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(13, 24, 56, 0.5);
          border: 1px solid var(--border-glass-blue);
          border-radius: 4px;
          padding: 10px 16px;
          width: 60%;
        }

        .search-box-wrapper input {
          background: none;
          border: none;
          color: var(--text-white);
          font-size: 0.95rem;
          outline: none;
          width: 100%;
        }

        .search-icon {
          color: var(--color-cyan);
        }

        .filters-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-gold-bright);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
        }

        /* Catalog Layout */
        .catalog-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          align-items: flex-start;
        }

        .category-sidebar {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: var(--bg-glass-card);
          border: 1px solid var(--border-glass-blue);
          border-radius: 8px;
          padding: 15px;
        }

        .category-pill-btn {
          text-align: left;
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 10px 14px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .category-pill-btn:hover {
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-white);
        }

        .active-pill {
          background: var(--color-gold-gradient) !important;
          color: var(--bg-dark-obsidian) !important;
          font-weight: 600;
        }

        .products-grid-content {
          width: 100%;
        }

        .catalog-status-msg {
          text-align: center;
          padding: 60px 20px;
          font-size: 1rem;
          color: var(--text-muted);
          border: 1px dashed rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .product-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
        }

        .product-img-wrapper {
          position: relative;
          height: 180px;
          background: rgba(13, 24, 56, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border-glass-blue);
        }

        .product-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .product-card:hover .product-card-img {
          transform: scale(1.05);
        }

        .modal-large-img {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border: 1px solid var(--border-glass-blue);
          border-radius: 8px;
          filter: drop-shadow(0 0 10px rgba(0, 225, 255, 0.2));
          margin-bottom: 20px;
        }

        .product-card-svg-placeholder {
          color: var(--color-cyan);
          opacity: 0.35;
          transition: var(--transition-smooth);
        }

        .product-card:hover .product-card-svg-placeholder {
          opacity: 0.8;
          color: var(--color-gold-bright);
          transform: scale(1.1);
        }

        .placeholder-bag-icon {
          filter: drop-shadow(0 0 5px currentColor);
        }

        .product-category-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(0, 225, 255, 0.15);
          border: 1px solid var(--border-glass-blue);
          color: var(--color-cyan);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .product-card-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .product-card-info h3 {
          font-size: 1.15rem;
          color: var(--text-white);
        }

        .product-card-info p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          flex-grow: 1;
        }

        .btn-card-view {
          padding: 8px 12px;
          font-size: 0.75rem;
          width: 100%;
          margin-top: 5px;
        }

        /* Modal Details */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(4, 7, 18, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .product-modal-container {
          position: relative;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border-color: var(--border-glass-gold);
          padding: 40px;
          box-shadow: 0 0 50px rgba(0,0,0,0.8);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          color: var(--text-muted);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--text-white);
          border-color: var(--color-gold);
          background: rgba(197,160,89,0.1);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
        }

        .modal-visual-panel {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-visual-box {
          width: 180px;
          height: 180px;
          background: rgba(13, 24, 56, 0.4);
          border: 1px solid var(--border-glass-blue);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-cyan);
          filter: drop-shadow(0 0 10px rgba(0, 225, 255, 0.2));
          margin-bottom: 20px;
        }

        .modal-large-icon {
          filter: drop-shadow(0 0 8px currentColor);
        }

        .modal-tag {
          background: rgba(197, 160, 89, 0.15);
          border: 1px solid var(--border-glass-gold);
          color: var(--color-gold-bright);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 30px;
        }

        .modal-b2b-cta {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 25px;
          width: 100%;
        }

        .modal-b2b-cta h4 {
          font-size: 1.05rem;
          color: var(--text-white);
          margin-bottom: 6px;
        }

        .modal-b2b-cta p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 15px;
        }

        .modal-b2b-cta .btn {
          width: 100%;
        }

        .modal-info-panel {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .modal-info-panel h2 {
          font-size: 1.8rem;
          color: var(--text-white);
        }

        .modal-desc-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .modal-section-block h3 {
          font-size: 1.1rem;
          color: var(--text-white);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .block-icon {
          color: var(--color-gold);
        }

        .modal-features-list {
          list-style: none;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .modal-features-list li {
          position: relative;
          padding-left: 20px;
          font-size: 0.9rem;
          color: var(--text-light);
        }

        .modal-features-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-cyan);
          font-weight: bold;
        }

        .modal-specs-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 8px;
        }

        .modal-specs-table td {
          padding: 8px 12px;
          font-size: 0.85rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .spec-key {
          color: var(--text-muted);
          font-weight: 500;
          width: 40%;
        }

        .spec-val {
          color: var(--text-white);
        }

        .modal-apps-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .catalog-layout {
            grid-template-columns: 1fr;
          }
          .category-sidebar {
            flex-direction: row;
            overflow-x: auto;
            white-space: nowrap;
            padding: 10px;
          }
          .category-pill-btn {
            display: inline-block;
          }
          .products-grid {
            grid-template-columns: 1fr 1fr;
          }
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .search-box-wrapper {
            width: 100%;
          }
          .catalog-control-panel {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
