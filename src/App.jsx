import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Stop observing once it becomes visible to prevent repeated triggers
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observer.observe(el);
        }
      });
    };

    // Run observation check immediately
    observeElements();

    // Fallbacks to handle dynamic React render lag and hydration timing
    const timer1 = setTimeout(observeElements, 50);
    const timer2 = setTimeout(observeElements, 200);
    const timer3 = setTimeout(observeElements, 500);

    // Watch DOM continuously using MutationObserver to detect elements added by React
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Handle scroll/resize and mouse movement as user engagement fallbacks to trigger animations
    const handleEvents = () => {
      observeElements();
    };

    window.addEventListener("scroll", handleEvents, { passive: true });
    window.addEventListener("resize", handleEvents, { passive: true });
    document.addEventListener("mousemove", handleEvents, { passive: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("scroll", handleEvents);
      window.removeEventListener("resize", handleEvents);
      document.removeEventListener("mousemove", handleEvents);
    };
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <Loader />
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
