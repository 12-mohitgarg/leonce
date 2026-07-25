import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { subscribeToAuth } from "../firebase";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuth((user) => {
      setAdminUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <Loader2 className="spinner-icon animate-spin" size={40} />
        <p>Loading Security Protocols...</p>
        <style>{`
          .loader-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: var(--bg-dark-obsidian);
            color: var(--color-cyan);
            gap: 15px;
          }
          .spinner-icon {
            color: var(--color-cyan);
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

  if (!adminUser) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
