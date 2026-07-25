import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ManagingDirector from "./pages/ManagingDirector";
import Products from "./pages/Products";
import ImportServices from "./pages/ImportServices";
import GlobalSourcing from "./pages/GlobalSourcing";
import Industries from "./pages/Industries";
import QualityAssurance from "./pages/QualityAssurance";
import Certifications from "./pages/Certifications";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import TermsPrivacy from "./pages/TermsPrivacy";
import NotFound from "./pages/NotFound";

// Scroll To Top on Route Change Helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Setup Intersection Observer for premium scroll entrance animations
    const elements = document.querySelectorAll(".animate-on-scroll");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]); // Re-observe when path changes

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/md" element={<ManagingDirector />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<ImportServices />} />
            <Route path="/sourcing" element={<GlobalSourcing />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/qa" element={<QualityAssurance />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<TermsPrivacy />} />
            <Route path="/terms" element={<TermsPrivacy />} />
            
            {/* Admin Authentication & Console */}
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
        <FloatingActions />
      </div>

      <style>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content {
          flex-grow: 1;
        }
      `}</style>
    </Router>
  );
}
