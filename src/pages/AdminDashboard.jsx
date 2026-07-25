import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  getInquiries, getProducts, addProduct, deleteProduct, 
  deleteInquiry, updateInquiryStatus, logoutAdmin 
} from "../firebase";
import { 
  MessageSquare, Layers, Plus, Trash2, Check, LogOut, 
  User, Mail, Phone, Building, Briefcase, PlusCircle, ShieldAlert 
} from "lucide-react";
import confetti from "canvas-confetti";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("inquiries");
  const [inquiries, setInquiries] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Form State for New Product
  const [prodForm, setProdForm] = useState({
    name: "",
    category: "PCB",
    description: "",
    features: "",
    specifications: "",
    applications: ""
  });

  const categoriesList = [
    "PCB", "PCBA", "WiFi Routers", "Networking Devices", "Industrial Electronics", 
    "Consumer Electronics", "Smart Devices", "IoT Devices", "Communication Devices", 
    "Electronic Components", "Embedded Hardware", "Custom Electronic Solutions"
  ];

  const loadAllData = async () => {
    setLoading(true);
    try {
      const inqs = await getInquiries();
      const prods = await getProducts();
      setInquiries(inqs);
      setProducts(prods);
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const handleLogout = async () => {
    await logoutAdmin();
    navigate("/admin/login");
  };

  const handleMarkResponded = async (inqId) => {
    try {
      await updateInquiryStatus(inqId, "responded");
      confetti({
        particleCount: 50,
        spread: 60,
        colors: ["#25d366", "#ffffff"]
      });
      loadAllData();
    } catch (err) {
      alert("Failed to update status.");
    }
  };

  const handleDeleteInq = async (inqId) => {
    if (!window.confirm("Are you sure you want to delete this B2B inquiry?")) return;
    try {
      await deleteInquiry(inqId);
      loadAllData();
    } catch (err) {
      alert("Failed to delete inquiry.");
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!prodForm.name || !prodForm.description) {
      alert("Please fill in Product Name and Description.");
      return;
    }

    // Parse specifications string: "Key: Val, Key2: Val2" into object
    const specsObj = {};
    if (prodForm.specifications.trim()) {
      const pairs = prodForm.specifications.split(",");
      pairs.forEach(pair => {
        const [k, v] = pair.split(":");
        if (k && v) {
          specsObj[k.trim()] = v.trim();
        }
      });
    }

    const payload = {
      name: prodForm.name,
      category: prodForm.category,
      description: prodForm.description,
      features: prodForm.features,
      specifications: specsObj,
      applications: prodForm.applications
    };

    try {
      const res = await addProduct(payload);
      if (res.success) {
        confetti({
          particleCount: 100,
          spread: 80,
          colors: ["#c5a059", "#00e1ff"]
        });
        setProdForm({
          name: "",
          category: "PCB",
          description: "",
          features: "",
          specifications: "",
          applications: ""
        });
        loadAllData();
      } else {
        alert("Failed to add product: " + res.error);
      }
    } catch (err) {
      alert("Failed to process product upload.");
    }
  };

  const handleDeleteProduct = async (prodId) => {
    if (!window.confirm("Are you sure you want to delete this product from the public catalog?")) return;
    try {
      await deleteProduct(prodId);
      loadAllData();
    } catch (err) {
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="dashboard-page page-padding">
      <div className="container dashboard-main-layout">
        {/* SIDE PANEL */}
        <aside className="dashboard-sidebar glass-card">
          <div className="sidebar-admin-profile">
            <User className="profile-avatar" size={32} />
            <div>
              <h3>Admin Console</h3>
              <span>Active Security Desk</span>
            </div>
          </div>
          
          <div className="sidebar-navigation">
            <button 
              onClick={() => setActiveTab("inquiries")} 
              className={`sidebar-nav-btn ${activeTab === "inquiries" ? "active-sidebar-nav" : ""}`}
            >
              <MessageSquare size={16} /> B2B Inquiries Desk ({inquiries.length})
            </button>
            <button 
              onClick={() => setActiveTab("products")} 
              className={`sidebar-nav-btn ${activeTab === "products" ? "active-sidebar-nav" : ""}`}
            >
              <Layers size={16} /> Public Catalog Editor ({products.length})
            </button>
          </div>

          <button onClick={handleLogout} className="btn-sidebar-signout">
            <LogOut size={16} /> Sign Out Desk
          </button>
        </aside>

        {/* CONTENT PANEL */}
        <main className="dashboard-content-wrapper">
          {loading ? (
            <div className="dashboard-loading-box glass-card">
              <ShieldAlert className="loader-shield-icon animate-pulse" size={48} />
              <p>Syncing secure database credentials...</p>
            </div>
          ) : activeTab === "inquiries" ? (
            /* INQUIRIES PANELS */
            <div className="dashboard-inqs-panel">
              <div className="panel-header">
                <h2>B2B Sourcing Enquiries Desk</h2>
                <p>Incoming RFQs submitted through the contact form.</p>
              </div>

              {inquiries.length === 0 ? (
                <div className="empty-panel-msg glass-card">No inquiries logged in the registry.</div>
              ) : (
                <div className="inquiries-stack">
                  {inquiries.map((inq) => (
                    <div className={`inquiry-record-card glass-card ${inq.status === "responded" ? "record-read" : ""}`} key={inq.id}>
                      <div className="record-top-row">
                        <span className={`record-tag-status ${inq.status === "responded" ? "status-read" : "status-unread"}`}>
                          {inq.status === "responded" ? "Responded" : "New Enquiry"}
                        </span>
                        <span className="record-date">{new Date(inq.createdAt).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="record-body">
                        <h3>{inq.name}</h3>
                        
                        <div className="record-info-grid">
                          <div><Building size={14} /> <strong>Company:</strong> {inq.company || "N/A"}</div>
                          <div><Mail size={14} /> <strong>Email:</strong> {inq.email}</div>
                          <div><Phone size={14} /> <strong>Phone:</strong> {inq.phone || "N/A"}</div>
                          <div><Briefcase size={14} /> <strong>Sourcing Service:</strong> {inq.service}</div>
                        </div>

                        <p className="record-message-text">"{inq.message}"</p>
                      </div>

                      <div className="record-actions-footer">
                        {inq.status !== "responded" && (
                          <button 
                            onClick={() => handleMarkResponded(inq.id)} 
                            className="btn-action-done"
                            title="Mark as Responded"
                          >
                            <Check size={14} /> Mark Responded
                          </button>
                        )}
                        <button 
                          onClick={() => handleDeleteInq(inq.id)} 
                          className="btn-action-delete"
                          title="Delete Record"
                        >
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* PRODUCTS CATALOG EDITORS PANEL */
            <div className="dashboard-products-panel">
              <div className="panel-header">
                <h2>Public Catalog Sourcing Editor</h2>
                <p>Manage items showcased in the client product directory.</p>
              </div>

              {/* Add Product Form */}
              <div className="add-product-form-box glass-card" style={{ marginBottom: 40 }}>
                <h3><PlusCircle size={18} className="panel-title-icon" /> Upload New Tech Sourcing Item</h3>
                
                <form onSubmit={handleAddProduct} className="dashboard-add-form">
                  <div className="form-row-two">
                    <div className="form-group">
                      <label>Product Name *</label>
                      <input 
                        type="text" 
                        value={prodForm.name} 
                        onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                        placeholder="e.g. Multi-layer High Frequency PCB"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Product Category *</label>
                      <select 
                        value={prodForm.category} 
                        onChange={(e) => setProdForm({ ...prodForm, category: e.target.value })}
                      >
                        {categoriesList.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Description *</label>
                    <textarea 
                      rows="3"
                      value={prodForm.description}
                      onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })}
                      placeholder="Describe core component functions..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>Key Features (comma-separated list)</label>
                    <input 
                      type="text" 
                      value={prodForm.features}
                      onChange={(e) => setProdForm({ ...prodForm, features: e.target.value })}
                      placeholder="e.g. WPA3 Security, AX3000 speeds, MU-MIMO support"
                    />
                  </div>

                  <div className="form-group">
                    <label>Technical Specifications (comma-separated 'Key: Value' pairs)</label>
                    <input 
                      type="text" 
                      value={prodForm.specifications}
                      onChange={(e) => setProdForm({ ...prodForm, specifications: e.target.value })}
                      placeholder="e.g. Layers: 16, Impedance: 50 ohms, Thickness: 1.6mm"
                    />
                  </div>

                  <div className="form-group">
                    <label>Applications</label>
                    <input 
                      type="text" 
                      value={prodForm.applications}
                      onChange={(e) => setProdForm({ ...prodForm, applications: e.target.value })}
                      placeholder="e.g. Telecom routers, smart server blades"
                    />
                  </div>

                  <button type="submit" className="btn btn-gold btn-add-prod">
                    <Plus size={16} /> Publish To Catalog
                  </button>
                </form>
              </div>

              {/* Products List & Deletion */}
              <div className="existing-products-box">
                <h3>Existing Sourcing Items ({products.length})</h3>
                {products.length === 0 ? (
                  <div className="empty-panel-msg glass-card">No products present in registry database.</div>
                ) : (
                  <div className="dashboard-products-list">
                    {products.map((prod) => (
                      <div className="dashboard-prod-row glass-card" key={prod.id}>
                        <div className="prod-row-meta">
                          <h4>{prod.name}</h4>
                          <span className="prod-row-cat-tag">{prod.category}</span>
                        </div>
                        <button 
                          onClick={() => handleDeleteProduct(prod.id)} 
                          className="btn-action-delete"
                          title="Delete Product"
                        >
                          <Trash2 size={14} /> Remove Item
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {styleStyle}
    </div>
  );
}

const styleStyle = (
  <style>{`
    .dashboard-page {
      background: #02040a;
      min-height: 100vh;
    }

    .dashboard-main-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 40px;
      align-items: flex-start;
    }

    /* Sidebar */
    .dashboard-sidebar {
      padding: 24px;
      border-color: var(--border-glass-blue);
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .sidebar-admin-profile {
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 20px;
    }

    .profile-avatar {
      color: var(--color-cyan);
      filter: drop-shadow(0 0 5px rgba(0,225,255,0.4));
    }

    .sidebar-admin-profile h3 {
      font-size: 0.95rem;
      color: var(--text-white);
    }

    .sidebar-admin-profile span {
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .sidebar-navigation {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sidebar-nav-btn {
      text-align: left;
      background: none;
      border: none;
      color: var(--text-muted);
      padding: 12px 14px;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: var(--transition-fast);
    }

    .sidebar-nav-btn:hover {
      background: rgba(255, 255, 255, 0.02);
      color: var(--text-white);
    }

    .active-sidebar-nav {
      background: rgba(0, 225, 255, 0.1) !important;
      color: var(--color-cyan) !important;
      font-weight: 600;
      border: 1px solid var(--border-glass-blue);
    }

    .btn-sidebar-signout {
      text-align: left;
      background: none;
      border: none;
      color: #f87171;
      padding: 12px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-top: 40px;
    }

    /* Content Area */
    .dashboard-content-wrapper {
      width: 100%;
    }

    .dashboard-loading-box {
      text-align: center;
      padding: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .loader-shield-icon {
      color: var(--color-gold);
    }

    .panel-header {
      margin-bottom: 30px;
    }

    .panel-header h2 {
      font-size: 1.8rem;
      margin-bottom: 6px;
    }

    .panel-header p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .empty-panel-msg {
      text-align: center;
      padding: 40px;
      color: var(--text-muted);
    }

    /* Inquiries Stack */
    .inquiries-stack {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .inquiry-record-card {
      border-color: var(--border-glass-blue);
    }

    .record-read {
      opacity: 0.75;
      border-color: rgba(255, 255, 255, 0.05) !important;
    }

    .record-top-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .record-tag-status {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 3px 8px;
      border-radius: 4px;
    }

    .status-unread {
      background: rgba(197, 160, 89, 0.15);
      border: 1px solid var(--border-glass-gold);
      color: var(--color-gold-bright);
    }

    .status-read {
      background: rgba(255,255,255,0.05);
      color: var(--text-muted);
    }

    .record-date {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .record-body h3 {
      font-size: 1.2rem;
      margin-bottom: 15px;
    }

    .record-info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      font-size: 0.85rem;
      color: var(--text-light);
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.03);
      padding-bottom: 15px;
    }

    .record-info-grid div {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .record-message-text {
      font-style: italic;
      color: var(--text-muted);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .record-actions-footer {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 15px;
    }

    .btn-action-done {
      background: rgba(37, 211, 102, 0.1);
      border: 1px solid rgba(37, 211, 102, 0.2);
      color: #4ade80;
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .btn-action-done:hover {
      background: #22c55e;
      color: var(--bg-dark-obsidian);
    }

    .btn-action-delete {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.2);
      color: #f87171;
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .btn-action-delete:hover {
      background: #ef4444;
      color: var(--text-white);
    }

    /* Products Form */
    .dashboard-add-form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 20px;
    }

    .form-row-two {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .dashboard-add-form input, .dashboard-add-form select, .dashboard-add-form textarea {
      background: rgba(13, 24, 56, 0.4);
      border: 1px solid var(--border-glass-blue);
      color: var(--text-white);
      padding: 10px 14px;
      border-radius: 4px;
      outline: none;
    }

    .dashboard-add-form input:focus, .dashboard-add-form select:focus, .dashboard-add-form textarea:focus {
      border-color: var(--color-gold);
    }

    .btn-add-prod {
      margin-top: 10px;
      padding: 12px;
    }

    /* Existing Products list */
    .dashboard-products-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 15px;
    }

    .dashboard-prod-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      border-color: var(--border-glass-blue);
    }

    .prod-row-meta {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .prod-row-cat-tag {
      background: rgba(0, 225, 255, 0.1);
      color: var(--color-cyan);
      font-size: 0.65rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 4px;
      text-transform: uppercase;
    }

    @media (max-width: 991px) {
      .dashboard-main-layout {
        grid-template-columns: 1fr;
      }
    }
  `}</style>
);
