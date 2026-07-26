import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  getInquiries, 
  deleteInquiry, updateInquiryStatus, logoutAdmin 
} from "../firebase";
import { 
  MessageSquare, Trash2, Check, LogOut, 
  User, Mail, Phone, Building, Briefcase, ShieldAlert 
} from "lucide-react";
import confetti from "canvas-confetti";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadAllData = async () => {
    setLoading(true);
    try {
      const inqs = await getInquiries();
      setInquiries(inqs);
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
              className="sidebar-nav-btn active-sidebar-nav"
            >
              <MessageSquare size={16} /> B2B Inquiries Desk ({inquiries.length})
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
          ) : (
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
      padding: 140px 24px 60px 24px;
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

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }

    .form-group label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-light);
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: left;
    }

    .dashboard-add-form input, .dashboard-add-form select, .dashboard-add-form textarea {
      background: rgba(13, 24, 56, 0.4);
      border: 1px solid var(--border-glass-blue);
      color: var(--text-white);
      padding: 12px 16px;
      border-radius: 4px;
      outline: none;
      width: 100%;
      transition: var(--transition-smooth);
    }

    .dashboard-add-form input:focus, .dashboard-add-form select:focus, .dashboard-add-form textarea:focus {
      border-color: var(--color-gold);
      box-shadow: 0 0 10px rgba(197, 160, 89, 0.3);
      background: rgba(13, 24, 56, 0.6);
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
        gap: 25px;
      }
      .dashboard-sidebar {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding: 20px;
      }
      .sidebar-admin-profile {
        border-bottom: none;
        padding-bottom: 0;
      }
      .sidebar-navigation {
        flex-direction: row;
        gap: 10px;
        width: auto;
      }
      .btn-sidebar-signout {
        margin-top: 0;
        padding: 10px 16px;
        width: auto;
      }
    }

    @media (max-width: 768px) {
      .record-info-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .form-row-two {
        grid-template-columns: 1fr;
        gap: 15px;
      }
    }

    @media (max-width: 650px) {
      .dashboard-sidebar {
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
      }
      .sidebar-navigation {
        flex-direction: column;
        width: 100%;
      }
      .sidebar-admin-profile {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        padding-bottom: 15px;
        justify-content: center;
      }
      .btn-sidebar-signout {
        width: 100%;
        justify-content: center;
      }
    }
  `}</style>
);
