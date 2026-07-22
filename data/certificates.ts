import { CertificateItem } from '@/types';

export const certificatesData: CertificateItem[] = [
  {
    id: "mtcna",
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik (SIA MikroTikls)",
    scoreOrId: "Credential ID: 26019842MTC",
    validity: "2026 – 2029 (Valid)",
    badgeUrl: "/certificates/mtcna.png",
    pdfUrl: "/certificates/mtcna.pdf",
    description: "Official MikroTik certification validating comprehensive proficiency in RouterOS configuration, IPv4 subnetting, static & OSPF routing, wireless link setup, stateful firewall rules, quality of service (QoS) queues, tunnel protocols (PPPoE, EoIP), and RouterOS diagnostic utilities.",
    skillsVerified: [
      "RouterOS Initial Setup & Backup",
      "IPv4 Addressing & CIDR Subnetting",
      "Static Routing & OSPF Protocols",
      "Firewall Filter, NAT, & Mangle Rules",
      "Simple Queues & Bandwidth Control",
      "Wireless AP / Station Bridge Setup",
      "PPPoE Client / Server Configuration",
      "RouterOS Diagnostics (Ping, Torch, Traceroute)"
    ],
    verificationUrl: "https://mikrotik.com/training/certificates"
  },
  {
    id: "toeic-gold",
    title: "TOEIC Official Gold Certificate",
    issuer: "ETS (Educational Testing Service) / PT ITC",
    scoreOrId: "Result No: 1907905 | Total Score: 935 / 990",
    validity: "2025/08/26 – 2027/08/26",
    badgeUrl: "/certificates/toeic.png",
    pdfUrl: "/certificates/toeic.pdf",
    description: "Official Test of English for International Communication (TOEIC) Listening & Reading certification. Achieved 935/990 score (Listening: 495, Reading: 440), qualifying for the prestigious ETS Gold Certificate level for professional international fluency in technical and business communication.",
    skillsVerified: [
      "Listening Comprehension (495 / 495 - Perfect)",
      "Reading Comprehension (440 / 495)",
      "Technical IT Documentation & Manuals",
      "International Client & Vendor Communication",
      "Professional Ticket Escalation Correspondence"
    ],
    verificationUrl: "https://www.ets.org/toeic"
  },
  {
    id: "pan-pacific-internship",
    title: "Certificate for Internship Completion - IT Department",
    issuer: "Pan Pacific Jakarta & PARKROYAL Serviced Suites Jakarta",
    scoreOrId: "IT Internship Completion Certificate",
    validity: "July 2, 2025 – January 2, 2026",
    badgeUrl: "/certificates/panpacific.png",
    pdfUrl: "/certificates/panpacific.pdf",
    description: "Certificate awarded for completing a 6-month intensive IT Support Internship at Pan Pacific Jakarta and PARKROYAL Serviced Suites Jakarta, handling hotel IT operations, guest support, IPTV, IP phones, wireless access, and network infrastructure.",
    skillsVerified: [
      "Hospitality IT Infrastructure Maintenance",
      "StayPlease Ticketing & Helpdesk Support",
      "Aruba Access Points & Wireless Controller",
      "IP Phones (PBX) & IPTV Systems Troubleshooting",
      "LinkSprinter Network Diagnostics & Cable Auditing"
    ],
    verificationUrl: "#"
  },
  {
    id: "bnsp-tkj",
    title: "BNSP Computer Network Engineer Certificate",
    issuer: "LSP SMKN 3 Tangerang / BNSP Indonesia",
    scoreOrId: "Competency Assessment Passed (Pending Hardcopy Distribution)",
    validity: "2026 – 2029",
    badgeUrl: "/certificates/bnsp.svg",
    description: "Indonesian National Professional Certification Board (BNSP) competency certification certifying practical mastery in Computer & Network Infrastructure Engineering (Teknik Komputer dan Jaringan). Physical certificate pending distribution.",
    skillsVerified: [
      "Network Infrastructure Design & Subnetting",
      "Fiber Optic & Cat6 Cable Termination",
      "Linux Server Operating Systems (Debian)",
      "Hardware Maintenance & Assembly",
      "Workstation Reimaging & Helpdesk Support"
    ],
    verificationUrl: "https://bnsp.go.id"
  }
];
