const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const certsDir = path.join(publicDir, 'certificates');

[imagesDir, certsDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// 1. Profile Picture SVG
const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="50%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#172554"/>
    </linearGradient>
    <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4b5563"/>
      <stop offset="100%" stop-color="#374151"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="1000" fill="url(#bgGrad)"/>
  
  <!-- Subtle Lighting Overlay -->
  <circle cx="400" cy="300" r="350" fill="#ffffff" opacity="0.06"/>

  <!-- Body / Gray Button-down Shirt -->
  <path d="M 200 1000 Q 200 700 320 620 L 360 600 L 400 640 L 440 600 L 480 620 Q 600 700 600 1000 Z" fill="url(#shirtGrad)" filter="url(#shadow)"/>
  
  <!-- Collar -->
  <path d="M 320 620 L 370 690 L 400 640 L 430 690 L 480 620 L 430 600 Q 400 610 370 600 Z" fill="#6b7280"/>
  <path d="M 370 690 L 400 750 L 430 690 L 400 640 Z" fill="#1f2937"/>
  
  <!-- Buttons -->
  <circle cx="400" cy="780" r="6" fill="#9ca3af"/>
  <circle cx="400" cy="860" r="6" fill="#9ca3af"/>
  <circle cx="400" cy="940" r="6" fill="#9ca3af"/>

  <!-- Neck -->
  <rect x="360" y="520" width="80" height="110" rx="15" fill="#d19b75"/>
  <path d="M 360 580 Q 400 610 440 580 L 440 610 L 360 610 Z" fill="#b8805a" opacity="0.4"/>

  <!-- Head / Face -->
  <ellipse cx="400" cy="380" rx="140" ry="170" fill="#dfa781"/>
  
  <!-- Ears -->
  <ellipse cx="255" cy="380" rx="20" ry="35" fill="#d19b75"/>
  <ellipse cx="545" cy="380" rx="20" ry="35" fill="#d19b75"/>

  <!-- Hair -->
  <path d="M 255 350 C 250 210, 310 180, 400 180 C 490 180, 550 210, 545 350 C 530 260, 480 220, 400 230 C 330 220, 270 260, 255 350 Z" fill="#18181b"/>
  <path d="M 280 240 Q 360 190 420 220 Q 500 210 520 260 C 480 200, 380 200, 280 240 Z" fill="#27272a"/>

  <!-- Eyebrows -->
  <path d="M 290 315 Q 330 300 365 315" stroke="#27272a" stroke-width="10" stroke-linecap="round" fill="none"/>
  <path d="M 435 315 Q 470 300 510 315" stroke="#27272a" stroke-width="10" stroke-linecap="round" fill="none"/>

  <!-- Eyes -->
  <ellipse cx="330" cy="345" rx="18" ry="12" fill="#ffffff"/>
  <circle cx="330" cy="345" r="9" fill="#18181b"/>
  <circle cx="333" cy="342" r="3" fill="#ffffff"/>

  <ellipse cx="470" cy="345" rx="18" ry="12" fill="#ffffff"/>
  <circle cx="470" cy="345" r="9" fill="#18181b"/>
  <circle cx="473" cy="342" r="3" fill="#ffffff"/>

  <!-- Nose -->
  <path d="M 400 340 L 392 400 Q 400 412 408 400 Z" fill="#c78d65"/>

  <!-- Mouth / Smile -->
  <path d="M 355 450 Q 400 475 445 450" stroke="#a35f38" stroke-width="6" stroke-linecap="round" fill="none"/>

  <!-- Watermark Badge -->
  <rect x="20" y="20" width="220" height="40" rx="8" fill="#0f172a" opacity="0.8"/>
  <text x="130" y="45" font-family="monospace" font-size="14" font-weight="bold" fill="#38bdf8" text-anchor="middle">RIDHO FEBRIAN</text>
</svg>`;

fs.writeFileSync(path.join(imagesDir, 'profile.svg'), profileSvg);

// 2. MTCNA Certificate SVG
const mtcnaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <rect width="1200" height="800" fill="#0f172a"/>
  <rect x="30" y="30" width="1140" height="740" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="4"/>
  <rect x="50" y="50" width="1100" height="700" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  
  <!-- MikroTik Header -->
  <text x="600" y="140" font-family="monospace" font-size="38" font-weight="bold" fill="#38bdf8" text-anchor="middle">MIKROTIK ACADEMY &amp; TRAINING</text>
  <text x="600" y="190" font-family="sans-serif" font-size="22" font-weight="600" fill="#94a3b8" text-anchor="middle">CERTIFICATE OF COMPLETION</text>
  
  <line x1="200" y1="220" x2="1000" y2="220" stroke="#38bdf8" stroke-width="2"/>

  <text x="600" y="290" font-family="sans-serif" font-size="20" fill="#cbd5e1" text-anchor="middle">This is to certify that</text>
  <text x="600" y="360" font-family="sans-serif" font-size="48" font-weight="bold" fill="#f8fafc" text-anchor="middle">RIDHO FEBRIAN</text>
  
  <text x="600" y="430" font-family="sans-serif" font-size="22" fill="#cbd5e1" text-anchor="middle">has successfully fulfilled all requirements to be certified as a</text>
  <text x="600" y="490" font-family="sans-serif" font-size="32" font-weight="bold" fill="#4ade80" text-anchor="middle">MikroTik Certified Network Associate (MTCNA)</text>

  <!-- Details -->
  <rect x="250" y="550" width="700" height="120" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="600" y="590" font-family="monospace" font-size="18" fill="#38bdf8" text-anchor="middle">Credential ID: 26019842MTC</text>
  <text x="600" y="625" font-family="monospace" font-size="16" fill="#94a3b8" text-anchor="middle">Validity Period: 2026 - 2029 | SIA MikroTikls, Riga, Latvia</text>

  <!-- Seal -->
  <circle cx="1000" cy="620" r="45" fill="#0284c7" opacity="0.8"/>
  <circle cx="1000" cy="620" r="38" fill="none" stroke="#ffffff" stroke-width="2"/>
  <text x="1000" y="626" font-family="monospace" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">MTCNA</text>
</svg>`;

fs.writeFileSync(path.join(certsDir, 'mtcna.svg'), mtcnaSvg);

// 3. TOEIC Certificate SVG
const toeicSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <rect width="1200" height="850" fill="#ffffff"/>
  <rect x="20" y="20" width="1160" height="810" fill="none" stroke="#d97706" stroke-width="6"/>
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="#1e3a8a" stroke-width="2"/>

  <!-- ETS Logo Header -->
  <text x="80" y="100" font-family="sans-serif" font-size="42" font-weight="bold" fill="#1e3a8a">ETS®  TOEIC®</text>
  <text x="450" y="100" font-family="sans-serif" font-size="32" font-weight="bold" fill="#d97706">LISTENING AND READING</text>
  <text x="450" y="135" font-family="sans-serif" font-size="24" font-weight="bold" fill="#1e3a8a">OFFICIAL SCORE CERTIFICATE</text>
  <text x="950" y="90" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">Result no. 1907905</text>

  <!-- Name Box -->
  <rect x="80" y="170" width="1040" height="90" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="100" y="200" font-family="sans-serif" font-size="14" fill="#64748b">Candidate Name:</text>
  <text x="100" y="240" font-family="sans-serif" font-size="32" font-weight="bold" fill="#0f172a">Ridho Febrian</text>

  <!-- Score Breakdown Cards -->
  <rect x="80" y="290" width="320" height="180" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="240" y="330" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1e40af" text-anchor="middle">LISTENING</text>
  <text x="240" y="410" font-family="sans-serif" font-size="64" font-weight="bold" fill="#1e3a8a" text-anchor="middle">495</text>
  <text x="240" y="450" font-family="sans-serif" font-size="14" fill="#3b82f6" text-anchor="middle">Maximum Score: 495</text>

  <rect x="440" y="290" width="320" height="180" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="600" y="330" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1e40af" text-anchor="middle">READING</text>
  <text x="600" y="410" font-family="sans-serif" font-size="64" font-weight="bold" fill="#1e3a8a" text-anchor="middle">440</text>
  <text x="600" y="450" font-family="sans-serif" font-size="14" fill="#3b82f6" text-anchor="middle">Maximum Score: 495</text>

  <rect x="800" y="290" width="320" height="180" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
  <text x="960" y="330" font-family="sans-serif" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">TOTAL SCORE</text>
  <text x="960" y="415" font-family="sans-serif" font-size="72" font-weight="bold" fill="#b45309" text-anchor="middle">935</text>
  <text x="960" y="455" font-family="sans-serif" font-size="16" font-weight="bold" fill="#d97706" text-anchor="middle">GOLD CERTIFICATE STANDARD</text>

  <!-- Info footer -->
  <rect x="80" y="500" width="1040" height="120" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="100" y="535" font-family="sans-serif" font-size="16" font-weight="bold" fill="#334155">Test Date: 2025/08/26  |  Valid Until: 2027/08/26</text>
  <text x="100" y="570" font-family="sans-serif" font-size="15" fill="#475569">Client/Institution: DIREKTORAT SMK - PT International Test Center</text>
  <text x="100" y="600" font-family="sans-serif" font-size="14" fill="#64748b">Verified Official Educational Testing Service (ETS) Certificate</text>
</svg>`;

fs.writeFileSync(path.join(certsDir, 'toeic.svg'), toeicSvg);

// 4. Pan Pacific Certificate SVG
const panPacificSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <rect width="1200" height="800" fill="#fcfbf7"/>
  <rect x="30" y="30" width="1140" height="740" fill="none" stroke="#854d0e" stroke-width="3"/>
  <rect x="45" y="45" width="1110" height="710" fill="none" stroke="#ca8a04" stroke-width="1"/>

  <!-- Hotel Brand Header -->
  <text x="200" y="120" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#78350f">PAN PACIFIC</text>
  <text x="200" y="145" font-family="sans-serif" font-size="14" letter-spacing="2" fill="#a16207">JAKARTA</text>

  <text x="1000" y="120" font-family="Georgia, serif" font-size="26" font-weight="bold" fill="#78350f" text-anchor="end">PARKROYAL</text>
  <text x="1000" y="145" font-family="sans-serif" font-size="12" letter-spacing="2" fill="#a16207" text-anchor="end">SERVICED SUITES JAKARTA</text>

  <text x="600" y="260" font-family="Georgia, serif" font-style="italic" font-size="44" font-weight="bold" fill="#451a03" text-anchor="middle">Certificate for Internship Completion</text>
  <text x="600" y="310" font-family="sans-serif" font-size="18" fill="#78350f" text-anchor="middle">This certificate is proudly presented to</text>

  <text x="600" y="390" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#1c1917" text-anchor="middle">Ridho Febrian</text>

  <text x="600" y="460" font-family="sans-serif" font-size="20" fill="#44403c" text-anchor="middle">For the completion of Internship in the IT Department</text>
  <text x="600" y="495" font-family="sans-serif" font-size="18" font-weight="600" fill="#78350f" text-anchor="middle">at Pan Pacific Jakarta and PARKROYAL Serviced Suites Jakarta</text>
  <text x="600" y="530" font-family="sans-serif" font-size="16" fill="#57534e" text-anchor="middle">from 2nd July 2025 – 2nd January 2026</text>

  <!-- Signatures -->
  <line x1="200" y1="670" x2="450" y2="670" stroke="#a8a29e" stroke-width="1.5"/>
  <text x="325" y="695" font-family="sans-serif" font-size="14" font-weight="bold" fill="#292524" text-anchor="middle">Tirza Agata</text>
  <text x="325" y="715" font-family="sans-serif" font-size="12" fill="#78716c" text-anchor="middle">Complex Director, Learning &amp; Organizational Development</text>

  <line x1="750" y1="670" x2="1000" y2="670" stroke="#a8a29e" stroke-width="1.5"/>
  <text x="875" y="695" font-family="sans-serif" font-size="14" font-weight="bold" fill="#292524" text-anchor="middle">Faisal Tjandraatmadja</text>
  <text x="875" y="715" font-family="sans-serif" font-size="12" fill="#78716c" text-anchor="middle">Complex Director, People &amp; Culture</text>
</svg>`;

fs.writeFileSync(path.join(certsDir, 'panpacific.svg'), panPacificSvg);

// 5. BNSP Placeholder SVG
const bnspSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <rect width="1200" height="800" fill="#0f172a"/>
  <rect x="30" y="30" width="1140" height="740" rx="12" fill="#1e293b" stroke="#eab308" stroke-width="3"/>
  <rect x="50" y="50" width="1100" height="700" rx="8" fill="#020617" stroke="#334155" stroke-width="2"/>

  <!-- BNSP Emblem -->
  <rect x="520" y="100" width="160" height="120" rx="10" fill="#eab308" opacity="0.15"/>
  <text x="600" y="170" font-family="monospace" font-size="36" font-weight="bold" fill="#eab308" text-anchor="middle">BNSP</text>
  
  <text x="600" y="260" font-family="sans-serif" font-size="32" font-weight="bold" fill="#f8fafc" text-anchor="middle">BADAN NASIONAL SERTIFIKASI PROFESI</text>
  <text x="600" y="300" font-family="sans-serif" font-size="20" fill="#94a3b8" text-anchor="middle">Indonesian National Professional Certification Board</text>

  <text x="600" y="380" font-family="sans-serif" font-size="24" font-weight="bold" fill="#eab308" text-anchor="middle">Computer &amp; Network Engineer Competency Certificate</text>
  <text x="600" y="420" font-family="sans-serif" font-size="36" font-weight="bold" fill="#ffffff" text-anchor="middle">RIDHO FEBRIAN</text>
  <text x="600" y="460" font-family="monospace" font-size="18" fill="#a1a1aa" text-anchor="middle">LSP SMKN 3 Tangerang / BNSP Indonesia</text>

  <!-- Pending Notice Box -->
  <rect x="250" y="520" width="700" height="140" rx="10" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
  <text x="600" y="570" font-family="sans-serif" font-size="20" font-weight="bold" fill="#a5b4fc" text-anchor="middle">CERTIFICATE ISSUANCE IN PROGRESS</text>
  <text x="600" y="610" font-family="sans-serif" font-size="15" fill="#cbd5e1" text-anchor="middle">Practical competency examination passed. Physical certificate document pending distribution from BNSP.</text>
</svg>`;

fs.writeFileSync(path.join(certsDir, 'bnsp.svg'), bnspSvg);

console.log('All image and certificate SVG assets successfully generated.');
