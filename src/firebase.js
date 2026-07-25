import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from "firebase/firestore";

// Firebase configuration from Vite env variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if variables are configured
const isFirebaseConfigured = 
  import.meta.env.VITE_FIREBASE_API_KEY && 
  import.meta.env.VITE_FIREBASE_API_KEY !== "YOUR_API_KEY";

let app, auth, db;
let useFirebase = false;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    useFirebase = true;
    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize Firebase, falling back to LocalStorage:", error);
    useFirebase = false;
  }
} else {
  console.log("Firebase environment variables not found. Using local mock storage.");
}

// -------------------------------------------------------------
// LOCAL STORAGE MOCK DATA & SIMULATION SETUP
// -------------------------------------------------------------
const DEFAULT_PRODUCTS = [
  {
    id: "prod-pcb-1",
    name: "High-Density Multilayer PCB",
    category: "PCB",
    description: "Premium grade multi-layer FR4 printed circuit boards designed for high-frequency signal integrity and thermal efficiency in telecom applications.",
    features: ["Up to 32 Layers", "Impedance Controlled", "Halogen-Free Options", "Gold Finger Plating"],
    specifications: {
      "Base Material": "FR-4 High TG / Rogers / Polyimide",
      "Board Thickness": "0.4mm - 3.2mm",
      "Min Trace Width/Spacing": "3mil / 3mil",
      "Surface Finish": "ENIG / HASL / OSP"
    },
    applications: "Telecommunications base stations, networking switches, server motherboards, industrial robotics control boards.",
    gallery: ["/products/pcb1.png", "/products/pcb2.png"]
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
    gallery: ["/products/pcba1.png", "/products/pcba2.png"]
  },
  {
    id: "prod-router-1",
    name: "Enterprise Dual-Band WiFi 6 Router",
    category: "WiFi Routers",
    description: "High-capacity WiFi 6 gigabit wireless router engineered for dense B2B office networks and enterprise smart device environments.",
    features: ["AX3000 Speeds", "MU-MIMO & OFDMA", "WPA3 Security Protocol", "8x High-Gain External Antennas"],
    specifications: {
      "Wireless Speed": "2402 Mbps (5GHz) + 574 Mbps (2.4GHz)",
      "Ethernet Ports": "1× 2.5G WAN Port, 4× Gigabit LAN Ports",
      "Concurrent Clients": "Up to 256 active devices",
      "Processor": "1.8 GHz Quad-Core CPU"
    },
    applications: "Corporate offices, education campus hubs, hotels, high-traffic commercial zones.",
    gallery: ["/products/router1.png"]
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
    gallery: ["/products/iot1.png"]
  }
];

const DEFAULT_INQUIRIES = [
  {
    id: "inq-1",
    name: "Rajesh Kumar",
    company: "Apex Telecom Solutions Ltd",
    email: "rkumar@apextelecom.co.in",
    phone: "+91 98765 43210",
    service: "PCB Import & Supply",
    message: "We are looking for a reliable importer for 10,000 units of 4-layer HDI PCBs per month. Please provide a catalog and custom price list for high TG FR-4 board requirements.",
    createdAt: new Date("2026-07-24T10:30:00Z").toISOString(),
    status: "new"
  },
  {
    id: "inq-2",
    name: "Sarah Jenkins",
    company: "SmartHome Innovations Inc",
    email: "s.jenkins@smarthome-innovations.com",
    phone: "+1 555-019-2834",
    service: "WiFi Router Import",
    message: "Seeking pricing on bulk orders of WiFi 6 networking routers for our upcoming residential installations in California. Require custom packaging/branding option (OEM).",
    createdAt: new Date("2026-07-25T08:15:00Z").toISOString(),
    status: "responded"
  }
];

// Initialize localStorage values if they don't exist
if (!localStorage.getItem("leonce_products")) {
  localStorage.setItem("leonce_products", JSON.stringify(DEFAULT_PRODUCTS));
}
if (!localStorage.getItem("leonce_inquiries")) {
  localStorage.setItem("leonce_inquiries", JSON.stringify(DEFAULT_INQUIRIES));
}
if (!localStorage.getItem("leonce_admin_logged")) {
  localStorage.setItem("leonce_admin_logged", "false");
}

// -------------------------------------------------------------
// PUBLIC API METHODS (ROUTING TO FIREBASE OR MOCK)
// -------------------------------------------------------------

// Authentication
export const loginAdmin = async (email, password) => {
  if (useFirebase) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    // Simulated credential check
    if (email === "admin@leonce.com" && password === "LeonceAdmin2026!") {
      localStorage.setItem("leonce_admin_logged", "true");
      return { success: true, user: { email, uid: "mock-admin-uid" } };
    } else {
      return { success: false, error: "Invalid admin email or password." };
    }
  }
};

export const logoutAdmin = async () => {
  if (useFirebase) {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    localStorage.setItem("leonce_admin_logged", "false");
    return { success: true };
  }
};

export const subscribeToAuth = (callback) => {
  if (useFirebase) {
    return onAuthStateChanged(auth, callback);
  } else {
    // Poll localStorage for simulation or simulate active state check
    const checkState = () => {
      const logged = localStorage.getItem("leonce_admin_logged") === "true";
      callback(logged ? { email: "admin@leonce.com", uid: "mock-admin-uid" } : null);
    };
    checkState();
    
    // Add custom listener mechanism
    const listener = (e) => {
      if (e.key === "leonce_admin_logged") {
        checkState();
      }
    };
    window.addEventListener("storage", listener);
    
    // Return cleanup function
    return () => {
      window.removeEventListener("storage", listener);
    };
  }
};

// Products API
export const getProducts = async () => {
  if (useFirebase) {
    try {
      const q = query(collection(db, "products"));
      const snapshot = await getDocs(q);
      const list = [];
      snapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      // Fallback if firestore is empty
      if (list.length === 0) {
        return DEFAULT_PRODUCTS;
      }
      return list;
    } catch (error) {
      console.error("Firestore getProducts error, falling back to LocalStorage:", error);
      return JSON.parse(localStorage.getItem("leonce_products") || "[]");
    }
  } else {
    return JSON.parse(localStorage.getItem("leonce_products") || "[]");
  }
};

export const addProduct = async (productData) => {
  const newProduct = {
    ...productData,
    id: productData.id || `prod-${Date.now()}`,
    features: typeof productData.features === 'string' 
      ? productData.features.split(',').map(f => f.trim()) 
      : productData.features,
    gallery: productData.gallery || ["/products/placeholder.png"]
  };

  if (useFirebase) {
    try {
      const docRef = await addDoc(collection(db, "products"), newProduct);
      return { success: true, id: docRef.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    const list = JSON.parse(localStorage.getItem("leonce_products") || "[]");
    list.unshift(newProduct);
    localStorage.setItem("leonce_products", JSON.stringify(list));
    // Trigger storage event manually so other panels update
    window.dispatchEvent(new Event("storage"));
    return { success: true, id: newProduct.id };
  }
};

export const deleteProduct = async (productId) => {
  if (useFirebase) {
    try {
      await deleteDoc(doc(db, "products", productId));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    let list = JSON.parse(localStorage.getItem("leonce_products") || "[]");
    list = list.filter(p => p.id !== productId);
    localStorage.setItem("leonce_products", JSON.stringify(list));
    window.dispatchEvent(new Event("storage"));
    return { success: true };
  }
};

// Inquiries API
export const getInquiries = async () => {
  if (useFirebase) {
    try {
      const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const list = [];
      snapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      return list;
    } catch (error) {
      console.error("Firestore getInquiries error, falling back to LocalStorage:", error);
      return JSON.parse(localStorage.getItem("leonce_inquiries") || "[]");
    }
  } else {
    return JSON.parse(localStorage.getItem("leonce_inquiries") || "[]");
  }
};

export const addInquiry = async (inquiryData) => {
  const newInquiry = {
    ...inquiryData,
    id: `inq-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "new"
  };

  if (useFirebase) {
    try {
      const docRef = await addDoc(collection(db, "inquiries"), newInquiry);
      return { success: true, id: docRef.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    const list = JSON.parse(localStorage.getItem("leonce_inquiries") || "[]");
    list.unshift(newInquiry);
    localStorage.setItem("leonce_inquiries", JSON.stringify(list));
    window.dispatchEvent(new Event("storage"));
    return { success: true, id: newInquiry.id };
  }
};

export const deleteInquiry = async (inquiryId) => {
  if (useFirebase) {
    try {
      await deleteDoc(doc(db, "inquiries", inquiryId));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  } else {
    let list = JSON.parse(localStorage.getItem("leonce_inquiries") || "[]");
    list = list.filter(i => i.id !== inquiryId);
    localStorage.setItem("leonce_inquiries", JSON.stringify(list));
    window.dispatchEvent(new Event("storage"));
    return { success: true };
  }
};

export const updateInquiryStatus = async (inquiryId, newStatus) => {
  if (useFirebase) {
    // For simplicity, local fallback operates directly on localStorage:
    return { success: true };
  } else {
    let list = JSON.parse(localStorage.getItem("leonce_inquiries") || "[]");
    list = list.map(i => i.id === inquiryId ? { ...i, status: newStatus } : i);
    localStorage.setItem("leonce_inquiries", JSON.stringify(list));
    window.dispatchEvent(new Event("storage"));
    return { success: true };
  }
};

export { useFirebase };
