import { FileNode } from '@/types';

export const virtualFilesystem: FileNode = {
  name: "ridho",
  type: "directory",
  children: [
    {
      name: "about",
      type: "directory",
      children: [
        {
          name: "profile.txt",
          type: "file",
          size: "1.2 KB",
          permissions: "-rw-r--r--",
          updatedAt: "2026-07-22 09:00",
          content: `RIDHO FEBRIAN - IT SUPPORT & NETWORK ENGINEER
==================================================
Location: Tangerang, Banten, 15113
Status: Available for Full-time IT Support & Network Infrastructure Roles
Email: ridhofebrian208@gmail.com
Phone: +62 895-3233-48180
LinkedIn: https://linkedin.com/in/ridho-febrian1/
GitHub: https://github.com/Ridho-feb

SUMMARY:
Results-oriented Networking and IT Support professional with hands-on experience in
network configuration, systems troubleshooting, and end-user support within hospitality and
technical lab environments. Proven expertise in MikroTik RouterOS, Cisco Packet Tracer,
and Debian/Ubuntu Linux administration.
`
        },
        {
          name: "bio.md",
          type: "file",
          size: "850 B",
          permissions: "-rw-r--r--",
          updatedAt: "2026-07-22 09:15",
          content: `# About Ridho Febrian

I am a passionate Systems & Network Engineer who thrives at the intersection of
Linux administration, physical network cabling, and IT operations.

Having completed an intensive 6-month IT Support Internship at Pan Pacific Hotel Group
and earned my MTCNA (MikroTik Certified Network Associate) certification along with an
ETS TOEIC Gold Certificate (935/990), I possess both the technical discipline and the
communication skills needed for enterprise environments.
`
        },
        {
          name: "contact.json",
          type: "file",
          size: "340 B",
          permissions: "-rw-r--r--",
          updatedAt: "2026-07-22 09:20",
          content: `{
  "name": "Ridho Febrian",
  "email": "ridhofebrian208@gmail.com",
  "phone": "+62 895-3233-48180",
  "linkedin": "https://linkedin.com/in/ridho-febrian1/",
  "github": "https://github.com/Ridho-feb"
}`
        }
      ]
    },
    {
      name: "experience",
      type: "directory",
      children: [
        {
          name: "pan-pacific-hotel.md",
          type: "file",
          size: "2.4 KB",
          permissions: "-rw-r--r--",
          updatedAt: "2026-01-31 17:00",
          content: `# Pan Pacific Hotel Group - IT Intern
Duration: July 2025 – January 2026
Location: Jakarta, Indonesia

Key Responsibilities & Infrastructure Tasks:
* Coordinated daily IT operations within a high-pressure hospitality environment
* Delivered high-quality technical support for guests and internal departments
* Maintained and troubleshot hospitality-specific infrastructure (IP phones, IPTV, Wireless APs)
* Collaborated with IT team to resolve connectivity and user-access challenges
`
        }
      ]
    },
    {
      name: "projects",
      type: "directory",
      children: [
        {
          name: "network-monitoring.md",
          type: "file",
          size: "1.8 KB",
          permissions: "-rw-r--r--",
          updatedAt: "2026-06-15 14:00",
          content: `# Project: Network Monitoring & Security Implementation

Technologies: Debian 13, Netdata, Apache2, OpenSSL, VMware ESXi, MikroTik RouterOS, DNS, Firewall, Routing, WireGuard.

Highlights:
- Real-time bandwidth telemetry with Netdata daemon
- OpenSSL RSA 4096-bit TLS certificate reverse proxying
- RouterOS raw packet filtering & SYN flood protection
- BIND9 split-horizon DNS server
- Telegram Bot alarm triggers
`
        }
      ]
    },
    {
      name: "certificates",
      type: "directory",
      children: [
        {
          name: "mtcna.txt",
          type: "file",
          size: "620 B",
          permissions: "-rw-r--r--",
          updatedAt: "2026-01-10 10:00",
          content: `MIKROTIK CERTIFIED NETWORK ASSOCIATE (MTCNA)
Issuer: MikroTik (SIA MikroTikls)
Credential ID: 26019842MTC
Validity: 2026 - 2029
`
        },
        {
          name: "toeic-gold.txt",
          type: "file",
          size: "540 B",
          permissions: "-rw-r--r--",
          updatedAt: "2026-02-15 11:00",
          content: `TOEIC OFFICIAL GOLD CERTIFICATE
Issuer: ETS (Educational Testing Service)
Score: 935 / 990 (Listening: 495, Reading: 440)
Result No: 1907905
`
        },
        {
          name: "bnsp-tkj.txt",
          type: "file",
          size: "480 B",
          permissions: "-rw-r--r--",
          updatedAt: "2026-03-20 09:30",
          content: `BNSP COMPUTER NETWORK ENGINEER CERTIFICATE
Issuer: LSP SMKN 3 Tangerang / BNSP
Status: Competency Passed (Pending Hardcopy)
`
        }
      ]
    },
    {
      name: "downloads",
      type: "directory",
      children: [
        {
          name: "Ridho_Febrian_CV.pdf",
          type: "file",
          size: "184 KB",
          permissions: "-rw-r--r--",
          updatedAt: "2026-07-15 10:00",
          content: "[Binary PDF file - Use /cv command to view, print, or download]"
        }
      ]
    }
  ]
};
