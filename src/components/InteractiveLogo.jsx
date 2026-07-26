import React, { useId } from "react";

export default function InteractiveLogo({ width = "100%", height = "auto", className = "", animate = true }) {
  const rawId = useId().replace(/:/g, "");
  const ids = {
    metallicBlue: `${rawId}-metallicBlue`,
    neonCyan: `${rawId}-neonCyan`,
    metallicGold: `${rawId}-metallicGold`,
    metallicSilver: `${rawId}-metallicSilver`,
    goldGlow: `${rawId}-goldGlow`,
    blueGlow: `${rawId}-blueGlow`,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      width={width}
      height={height}
      className={`leonce-interactive-logo ${className}`}
      style={{ display: "block", maxWidth: "100%" }}
    >
      <defs>
        {/* Metallic Blue Gradient */}
        <linearGradient id={ids.metallicBlue} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052d4" />
          <stop offset="50%" stopColor="#4364f7" />
          <stop offset="100%" stopColor="#6fb1fc" />
        </linearGradient>

        {/* Glowing Cyan Gradient */}
        <linearGradient id={ids.neonCyan} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0072ff" />
          <stop offset="100%" stopColor="#00e1ff" />
        </linearGradient>

        {/* Metallic Gold Gradient */}
        <linearGradient id={ids.metallicGold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8c6d33" />
          <stop offset="30%" stopColor="#f3cf65" />
          <stop offset="70%" stopColor="#c5a059" />
          <stop offset="100%" stopColor="#7a5b20" />
        </linearGradient>

        {/* Metallic Silver Gradient */}
        <linearGradient id={ids.metallicSilver} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#737b84" />
          <stop offset="50%" stopColor="#f1f2f6" />
          <stop offset="100%" stopColor="#95a5a6" />
        </linearGradient>

        {/* Drop Shadow for Gold Elements */}
        <filter id={ids.goldGlow} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Drop Shadow for Blue Elements */}
        <filter id={ids.blueGlow} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComponentTransfer in="blur" result="glow1">
            <feFuncA type="linear" slope="0.6" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="glow1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>
        {`
          @keyframes pulseWifi {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
          @keyframes spinGlobe {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbitRotate {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -100; }
          }
          .wifi-wave-1 { animation: ${animate ? "pulseWifi 1.5s infinite" : "none"}; animation-delay: 0s; }
          .wifi-wave-2 { animation: ${animate ? "pulseWifi 1.5s infinite" : "none"}; animation-delay: 0.3s; }
          .wifi-wave-3 { animation: ${animate ? "pulseWifi 1.5s infinite" : "none"}; animation-delay: 0.6s; }
          .globe-bg { 
            transform-origin: 400px 250px; 
            animation: ${animate ? "spinGlobe 60s linear infinite" : "none"}; 
          }
          .orbit-path {
            stroke-dasharray: 10 10;
            animation: ${animate ? "orbitRotate 8s linear infinite" : "none"};
          }
          .tech-circuit-line {
            stroke-dasharray: 5 5;
            animation: ${animate ? "orbitRotate 12s linear infinite" : "none"};
          }
        `}
      </style>

      {/* 1. GLOBE BACKGROUND (UPPER CENTER) */}
      <g className="globe-bg" opacity="0.18">
        <circle cx="400" cy="250" r="160" fill="none" stroke="#00e1ff" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="400" cy="250" r="140" fill="none" stroke="#00e1ff" strokeWidth="1" />
        {/* Simulated Latitude/Longitude Lines */}
        <path d="M 260 250 A 140 60 0 0 0 540 250" fill="none" stroke="#00e1ff" strokeWidth="1" />
        <path d="M 260 250 A 140 60 0 0 1 540 250" fill="none" stroke="#00e1ff" strokeWidth="1" />
        <path d="M 260 250 A 140 110 0 0 0 540 250" fill="none" stroke="#00e1ff" strokeWidth="0.8" />
        <path d="M 260 250 A 140 110 0 0 1 540 250" fill="none" stroke="#00e1ff" strokeWidth="0.8" />
        <line x1="400" y1="90" x2="400" y2="410" stroke="#00e1ff" strokeWidth="1" />
        <path d="M 400 90 A 60 160 0 0 0 400 410" fill="none" stroke="#00e1ff" strokeWidth="1" />
        <path d="M 400 90 A 60 160 0 0 1 400 410" fill="none" stroke="#00e1ff" strokeWidth="1" />
        <path d="M 400 90 A 110 160 0 0 0 400 410" fill="none" stroke="#00e1ff" strokeWidth="0.8" />
        <path d="M 400 90 A 110 160 0 0 1 400 410" fill="none" stroke="#00e1ff" strokeWidth="0.8" />
      </g>

      {/* 2. ELECTRONIC CIRCUIT TRACES (LEFT SIDE) */}
      <g stroke="#00e1ff" strokeWidth="2.5" fill="none" opacity="0.85">
        <path d="M 210 260 L 150 260 L 120 220" className="tech-circuit-line" />
        <circle cx="120" cy="220" r="4.5" fill="#00e1ff" />
        
        <path d="M 205 290 L 130 290 L 100 270" />
        <circle cx="100" cy="270" r="4.5" fill="#00e1ff" />
        
        <path d="M 205 320 L 110 320 L 80 320" />
        <circle cx="80" cy="320" r="4.5" fill="#00e1ff" />
        
        <path d="M 210 350 L 140 350 L 110 380" />
        <circle cx="110" cy="380" r="4.5" fill="#00e1ff" />
      </g>

      {/* 3. SHINY BLUE INITIAL "L" (LEFT LAYER) */}
      <path
        d="M 210 160 
           L 260 160 
           L 260 360 
           L 410 360 
           A 220 220 0 0 1 210 430 
           Z"
        fill={`url(#${ids.metallicBlue})`}
        filter={`url(#${ids.blueGlow})`}
      />

      {/* 4. SHINY GOLD INITIAL "M" (RIGHT LAYER, OVERLAPPING) */}
      <path
        d="M 320 430
           L 320 220
           L 420 370
           L 480 370
           L 580 220
           L 580 430
           L 530 430
           L 530 270
           L 450 390
           L 370 270
           L 370 430
           Z"
        fill={`url(#${ids.metallicGold})`}
        filter={`url(#${ids.goldGlow})`}
      />

      {/* 5. INTERTWINING ORBIT SWOOSH (BLUE & GOLD) */}
      <path
        d="M 140 400 
           C 120 490, 220 540, 390 480 
           C 560 420, 680 320, 640 200 
           C 625 150, 560 110, 480 90"
        fill="none"
        stroke={`url(#${ids.metallicGold})`}
        strokeWidth="6"
        filter={`url(#${ids.goldGlow})`}
      />
      
      <path
        d="M 140 400 
           C 120 490, 220 540, 390 480 
           C 560 420, 680 320, 640 200"
        fill="none"
        stroke={`url(#${ids.neonCyan})`}
        strokeWidth="2.5"
        className="orbit-path"
      />

      {/* 6. WIFI ROUTER GRAPHIC (RIGHT SIDE) */}
      <g transform="translate(620, 310)" filter={`url(#${ids.blueGlow})`}>
        {/* Router Base */}
        <rect x="0" y="70" width="160" height="36" rx="6" fill="#1b2440" stroke="#00e1ff" strokeWidth="2" />
        <rect x="15" y="86" width="70" height="4" fill="#00e1ff" />
        <circle cx="115" cy="88" r="3" fill="#00e1ff" />
        <circle cx="130" cy="88" r="3" fill="#00e1ff" />
        <circle cx="145" cy="88" r="3" fill="#00e1ff" />
        
        {/* Antennas */}
        <line x1="15" y1="70" x2="10" y2="15" stroke={`url(#${ids.metallicSilver})`} strokeWidth="4.5" />
        <line x1="145" y1="70" x2="150" y2="15" stroke={`url(#${ids.metallicSilver})`} strokeWidth="4.5" />
        
        {/* Wifi Waves */}
        <path d="M 60 25 A 30 30 0 0 1 100 25" fill="none" stroke="#00e1ff" strokeWidth="2.5" strokeLinecap="round" className="wifi-wave-1" />
        <path d="M 50 15 A 45 45 0 0 1 110 15" fill="none" stroke="#00e1ff" strokeWidth="3" strokeLinecap="round" className="wifi-wave-2" />
        <path d="M 40 5 A 60 60 0 0 1 120 5" fill="none" stroke="#00e1ff" strokeWidth="3.5" strokeLinecap="round" className="wifi-wave-3" />
      </g>

      {/* 7. BRAND TEXT - LEONCE MULTIVENTURE */}
      <text
        x="400"
        y="530"
        fontFamily="Outfit, Space Grotesk, sans-serif"
        fontSize="54"
        fontWeight="800"
        letterSpacing="12"
        fill={`url(#${ids.metallicSilver})`}
        textAnchor="middle"
      >
        LEONCE
      </text>
      
      {/* Dynamic 3-line blue detail next to E */}
      <line x1="630" y1="504" x2="665" y2="504" stroke="#00e1ff" strokeWidth="6" strokeLinecap="round" />
      <line x1="630" y1="518" x2="665" y2="518" stroke="#00e1ff" strokeWidth="6" strokeLinecap="round" />
      <line x1="630" y1="532" x2="665" y2="532" stroke="#00e1ff" strokeWidth="6" strokeLinecap="round" />

      <text
        x="400"
        y="585"
        fontFamily="Outfit, Space Grotesk, sans-serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="8"
        fill={`url(#${ids.metallicGold})`}
        textAnchor="middle"
        filter={`url(#${ids.goldGlow})`}
      >
        MULTIVENTURE
      </text>

      {/* Divider Gold Lines */}
      <line x1="80" y1="620" x2="720" y2="620" stroke={`url(#${ids.metallicGold})`} strokeWidth="1.5" />
      <circle cx="80" cy="620" r="3" fill="#c5a059" />
      <circle cx="720" cy="620" r="3" fill="#c5a059" />

      {/* Subtitle */}
      <text
        x="400"
        y="650"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="500"
        letterSpacing="4"
        fill="#94a3b8"
        textAnchor="middle"
      >
        IMPORTER OF <tspan fill="#00e1ff" fontWeight="600">PCB</tspan>, <tspan fill="#00e1ff" fontWeight="600">PCBA</tspan>, <tspan fill="#00e1ff" fontWeight="600">WIFI ROUTERS</tspan> &amp; ALL DEVICES
      </text>

      {/* 8. MINI DETAILED ICONS (BOTTOM ROW) */}
      <g transform="translate(0, 680)">
        {/* PCB Mini Icon */}
        <g transform="translate(100, 0)">
          <rect x="0" y="0" width="70" height="70" rx="10" fill="#080f24" stroke="#00e1ff" strokeWidth="1.5" />
          <rect x="12" y="12" width="46" height="46" rx="4" fill="none" stroke="#c5a059" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="10" fill="none" stroke="#00e1ff" strokeWidth="1.5" />
          <line x1="35" y1="12" x2="35" y2="25" stroke="#00e1ff" strokeWidth="1" />
          <line x1="35" y1="45" x2="35" y2="58" stroke="#00e1ff" strokeWidth="1" />
          <line x1="12" y1="35" x2="25" y2="35" stroke="#00e1ff" strokeWidth="1" />
          <line x1="45" y1="35" x2="58" y2="35" stroke="#00e1ff" strokeWidth="1" />
          <text x="35" y="85" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#94a3b8" textAnchor="middle">PCB</text>
        </g>

        {/* PCBA Mini Icon */}
        <g transform="translate(280, 0)">
          <rect x="0" y="0" width="70" height="70" rx="10" fill="#080f24" stroke="#00e1ff" strokeWidth="1.5" />
          <rect x="15" y="15" width="40" height="40" fill="#1b2440" rx="3" />
          <rect x="25" y="25" width="20" height="20" fill={`url(#${ids.metallicGold})`} rx="2" />
          <circle cx="20" cy="20" r="2.5" fill="#00e1ff" />
          <circle cx="50" cy="20" r="2.5" fill="#00e1ff" />
          <circle cx="20" cy="50" r="2.5" fill="#00e1ff" />
          <circle cx="50" cy="50" r="2.5" fill="#00e1ff" />
          <text x="35" y="85" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#94a3b8" textAnchor="middle">PCBA</text>
        </g>

        {/* Wifi Router Mini Icon */}
        <g transform="translate(460, 0)">
          <rect x="0" y="0" width="70" height="70" rx="10" fill="#080f24" stroke="#00e1ff" strokeWidth="1.5" />
          <rect x="15" y="40" width="40" height="15" rx="3" fill="#1b2440" stroke="#00e1ff" strokeWidth="1" />
          <line x1="22" y1="40" x2="20" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <line x1="48" y1="40" x2="50" y2="20" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="35" cy="28" r="3.5" fill="#00e1ff" />
          <text x="35" y="85" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#94a3b8" textAnchor="middle">WIFI ROUTER</text>
        </g>

        {/* All Devices Mini Icon */}
        <g transform="translate(640, 0)">
          <rect x="0" y="0" width="70" height="70" rx="10" fill="#080f24" stroke="#00e1ff" strokeWidth="1.5" />
          {/* Laptop Shape */}
          <rect x="15" y="25" width="28" height="18" rx="2" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="10" y1="43" x2="38" y2="43" stroke="#94a3b8" strokeWidth="2" />
          {/* Mobile phone Shape */}
          <rect x="44" y="30" width="12" height="22" rx="2" fill="none" stroke="#c5a059" strokeWidth="1.5" />
          <circle cx="50" cy="49" r="1" fill="#c5a059" />
          <text x="35" y="85" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#94a3b8" textAnchor="middle">ALL DEVICES</text>
        </g>
      </g>
    </svg>
  );
}
