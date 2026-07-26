import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, Loader2, ShieldCheck } from "lucide-react";
import { loginAdmin, subscribeToAuth } from "../firebase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to dashboard
    const unsubscribe = subscribeToAuth((user) => {
      if (user) {
        navigate("/admin/dashboard", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please input both admin email and password credentials.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await loginAdmin(email, password);
      if (res.success) {
        navigate("/admin/dashboard");
      } else {
        setError(res.error || "Authentication failed. Please verify credentials.");
      }
    } catch (err) {
      setError("An unexpected error occurred during security handshake.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page page-padding">
      <div className="login-container glass-card">
        <div className="login-header">
          <Lock className="login-lock-icon" size={32} />
          <h2>Security Handshake</h2>
          <p>Leonce Multiventure B2B Portal Admin Login</p>
        </div>

        {error && <div className="login-error-alert">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Admin Email</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={16} />
              <input
                type="email"
                id="email"
                placeholder="admin@leonce.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: 15 }}>
            <label htmlFor="password">Security Key (Password)</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={16} />
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-gold btn-login" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="spinner-icon animate-spin" size={16} />
                Authorizing Access...
              </>
            ) : (
              <>
                <ShieldCheck size={16} />
                Access Dashboard
              </>
            )}
          </button>
        </form>
      </div>

      {styleStyle}
    </div>
  );
}

const styleStyle = (
  <style>{`
    .login-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at center, rgba(13, 24, 56, 0.4) 0%, var(--bg-dark-obsidian) 100%);
      padding: 24px;
    }

    .login-container {
      max-width: 420px;
      width: 100%;
      padding: 40px 30px;
      border-color: var(--border-glass-gold);
    }

    .login-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .login-lock-icon {
      color: var(--color-gold);
      margin-bottom: 12px;
      filter: drop-shadow(0 0 5px var(--color-gold));
    }

    .login-header h2 {
      font-size: 1.4rem;
      margin-bottom: 6px;
    }

    .login-header p {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .login-form {
      display: flex;
      flex-direction: column;
    }

    .input-with-icon {
      display: flex;
      align-items: center;
      background: rgba(13, 24, 56, 0.6);
      border: 1px solid var(--border-glass-blue);
      border-radius: 4px;
      padding: 10px 14px;
      gap: 12px;
    }

    .input-with-icon:focus-within {
      border-color: var(--color-gold);
      box-shadow: 0 0 10px rgba(197, 160, 89, 0.3);
    }

    .input-icon {
      color: var(--color-cyan);
    }

    .input-with-icon input {
      background: none;
      border: none;
      color: var(--text-white);
      font-size: 0.95rem;
      outline: none;
      width: 100%;
    }

    .btn-login {
      margin-top: 25px;
      padding: 12px;
      width: 100%;
    }

    .login-error-alert {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #f87171;
      padding: 10px;
      border-radius: 4px;
      font-size: 0.85rem;
      text-align: center;
      margin-bottom: 20px;
    }

    .login-fallback-info {
      margin-top: 25px;
      border-top: 1px dashed rgba(255, 255, 255, 0.08);
      padding-top: 20px;
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .login-fallback-info h4 {
      color: var(--text-light);
      margin-bottom: 6px;
    }

    .login-fallback-info code {
      color: var(--color-cyan);
      background: rgba(0, 225, 255, 0.05);
      padding: 2px 6px;
      border-radius: 2px;
    }
  `}</style>
);
