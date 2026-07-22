const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({
  orientation: 'p',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const margin = 15;
const contentWidth = pageWidth - margin * 2;
let y = 15;

function checkPageBreak(height = 10) {
  if (y + height > 280) {
    doc.addPage();
    y = 15;
  }
}

// Name Header
doc.setFont('Helvetica', 'bold');
doc.setFontSize(18);
doc.setTextColor(15, 23, 42); // dark slate
doc.text('RIDHO FEBRIAN', margin, y);
y += 6;

// Contact info line
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(71, 85, 105);
doc.text('Tangerang, Banten, 15113 | (+62) 895-3233-48180 | ridhofebrian208@gmail.com', margin, y);
y += 5;
doc.setTextColor(37, 99, 235);
doc.text('LinkedIn: linkedin.com/in/ridho-febrian1/', margin, y);
y += 8;

// Divider
doc.setDrawColor(203, 213, 225);
doc.setLineWidth(0.5);
doc.line(margin, y, pageWidth - margin, y);
y += 6;

// Helper section heading
function addSectionHeader(title) {
  checkPageBreak(12);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(title, margin, y);
  y += 2;
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;
}

// Helper paragraph
function addParagraph(text) {
  checkPageBreak(12);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const lines = doc.splitTextToSize(text, contentWidth);
  doc.text(lines, margin, y);
  y += lines.length * 4.2 + 3;
}

// Helper bullet points
function addBullets(items) {
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  items.forEach(item => {
    checkPageBreak(8);
    const bulletText = `•  ${item}`;
    const lines = doc.splitTextToSize(bulletText, contentWidth - 4);
    doc.text(lines, margin + 2, y);
    y += lines.length * 4 + 1.5;
  });
  y += 2;
}

// 1. PROFESSIONAL SUMMARY
addSectionHeader('PROFESSIONAL SUMMARY');
addParagraph('Results-oriented Networking and IT Support professional with hands-on experience in network configuration, systems troubleshooting, and end-user support within hospitality and technical lab environments. Proven expertise in MikroTik RouterOS, Cisco Packet Tracer, and Debian/Ubuntu Linux administration. Technically proficient in deploying network services including DHCP, DNS, FTP, VoIP, VRRP. A strong communicator dedicated to resolving complex technical issues efficiently while maintaining high service standards in fast-paced corporate settings.');

// 2. CORE COMPETENCIES & SKILLS
addSectionHeader('CORE COMPETENCIES & SKILLS');
doc.setFont('Helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Technical Skills:', margin, y);
y += 4.5;
addBullets([
  'Networking: MikroTik RouterOS, Cisco Packet Tracer, VLAN, Inter-VLAN Routing, OSPF, Static Routing, VRRP, VoIP.',
  'Systems: Debian Linux, Ubuntu Linux, Windows Server/Desktop, basic server administration.',
  'Services: Web Server (Apache), DHCP, DNS (BIND), Samba, FTP, CA/Certificate Authority.',
  'Tools: Network troubleshooting, documentation, virtualization, system maintenance.'
]);

doc.setFont('Helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Professional Skills:', margin, y);
y += 4.5;
addBullets([
  'Infrastructure configuration, IT support operations, system administration, technical project documentation, multi-departmental service coordination.'
]);

doc.setFont('Helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Soft Skills:', margin, y);
y += 4.5;
addBullets([
  'Complex problem solving, cross-functional collaboration, time management, adaptability, professional communication, customer service excellence.'
]);

// 3. PROFESSIONAL EXPERIENCE
addSectionHeader('PROFESSIONAL EXPERIENCE');
doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text('IT Intern', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text('| Pan Pacific Hotel Group | Jakarta, Indonesia', margin + 20, y);
const periodText = 'July 2025 – January 2026';
doc.text(periodText, pageWidth - margin - doc.getTextWidth(periodText), y);
y += 5;
addBullets([
  'Coordinated daily IT operations within a high-pressure hospitality environment, ensuring maximum uptime for critical network-connected devices.',
  'Delivered high-quality technical support for guests and internal departments, resolving hardware and software issues with professionalism.',
  'Maintained and troubleshot hospitality-specific infrastructure including IP phones, IPTV systems, wireless access points, and workstation hardware.',
  'Collaborated with the IT team to resolve connectivity and user-access challenges, ensuring seamless service delivery for hotel operations.'
]);

// 4. EDUCATION
addSectionHeader('EDUCATION');
doc.setFont('Helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text('Teknik Komputer Dan Jaringan', margin, y);
doc.setFont('Helvetica', 'normal');
doc.setTextColor(71, 85, 105);
doc.text('SMKN 3 Tangerang | Tangerang', margin + 58, y);
const eduPeriod = '2023 - 2026';
doc.text(eduPeriod, pageWidth - margin - doc.getTextWidth(eduPeriod), y);
y += 5;
addBullets([
  'Relevant Coursework: Networking Fundamentals, Routing and Switching, Linux Administration, Server Services, System Troubleshooting, Network Security Basics.'
]);

// 5. CERTIFICATIONS
addSectionHeader('CERTIFICATIONS');
addBullets([
  'MTCNA (MikroTik Certified Network Associate) – MikroTik, 2026 - 2029',
  'TOEIC (Test of English for International Communication) – Global Education and Talent Solution (ETS), Score: 935, 2025 - 2027'
]);

// 6. LANGUAGES
addSectionHeader('LANGUAGES');
addBullets([
  'Indonesian: Native Proficiency',
  'English: Full Professional Proficiency (TOEIC Gold Certificate)'
]);

// 7. ADDITIONAL INFORMATION
addSectionHeader('ADDITIONAL INFORMATION');
addBullets([
  'Technical Interests: Advanced Networking, Linux System Administration, MikroTik Optimization, Cybersecurity Fundamentals, Virtualization, and Systems Troubleshooting.'
]);

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'Ridho_Febrian_CV.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outputPath, pdfBuffer);

console.log(`PDF successfully generated at ${outputPath}`);
