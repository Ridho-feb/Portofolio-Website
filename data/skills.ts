import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    category: "Networking & Telecommunications",
    iconName: "Network",
    skills: [
      { name: "MikroTik RouterOS", level: "Expert", tags: ["Routing", "Firewall", "Mangle", "Queues", "WinBox"] },
      { name: "DHCP & DNS Services", level: "Expert", tags: ["BIND9", "DHCP Snooping", "Split-Horizon"] },
      { name: "TCP/IP & OSI Model", level: "Expert", tags: ["Subnetting", "CIDR", "Wireshark", "Packet Analysis"] },
      { name: "Firewall & Security", level: "Expert", tags: ["Filter Rules", "NAT", "RAW Rules", "UFW"] },
      { name: "Routing Protocols", level: "Advanced", tags: ["OSPF", "Static Routing", "ECMP", "VRRP"] },
      { name: "PPPoE & Tunnels", level: "Advanced", tags: ["PPPoE Server/Client", "WireGuard", "L2TP/IPsec"] },
      { name: "VLAN & Trunking", level: "Advanced", tags: ["802.1Q", "Switch Port Security", "PVID"] },
      { name: "Aruba Wireless Controller", level: "Advanced", tags: ["AP Provisioning", "Aruba Central", "RF Site Survey"] },
      { name: "LinkSprinter Diagnostics", level: "Expert", tags: ["PoE Testing", "Link Discovery", "CDP/LLDP"] }
    ]
  },
  {
    category: "Linux & System Administration",
    iconName: "Server",
    skills: [
      { name: "Debian GNU/Linux 13", level: "Expert", tags: ["Systemd", "APT Package Manager", "CLI Mastery"] },
      { name: "Apache Web Server", level: "Advanced", tags: ["Virtual Hosts", "SSL Mod", "HTAccess", "Reverse Proxy"] },
      { name: "VMware Workstation & ESXi", level: "Advanced", tags: ["Hypervisor", "vSwitch", "VM Provisioning"] },
      { name: "OpenSSL & PKI", level: "Advanced", tags: ["Certificates", "TLS 1.3", "RSA Keys", "Certificate Authority"] },
      { name: "System Hardening & Shell", level: "Advanced", tags: ["Fail2ban", "SSH Security", "Bash Scripting", "Cron"] },
      { name: "Netdata Telemetry", level: "Advanced", tags: ["Real-time Metrics", "Alerting", "Daemon Tuning"] }
    ]
  },
  {
    category: "IT Support & Infrastructure",
    iconName: "Wrench",
    skills: [
      { name: "Hardware Maintenance", level: "Expert", tags: ["PC Building", "RAM/SSD Upgrades", "Thermal Maintenance"] },
      { name: "Asset Inventory & SOPs", level: "Expert", tags: ["Asset Tagging", "Spreadsheet Audits", "Documentation"] },
      { name: "Helpdesk Ticketing", level: "Expert", tags: ["StayPlease", "ITIL Best Practices", "SLA Resolution"] },
      { name: "Enterprise Workstations", level: "Expert", tags: ["Windows 10/11 Pro", "Group Policy", "OS Reimaging"] },
      { name: "Enterprise Peripherals", level: "Expert", tags: ["Multi-function Printers", "Thermal Printers", "Barcode Scanners"] },
      { name: "UPS Power Systems", level: "Advanced", tags: ["APC Smart-UPS", "Load Testing", "Battery Management"] },
      { name: "Honeywell CCTV", level: "Advanced", tags: ["IP Camera Config", "NVR/DVR Backup", "Network Video"] },
      { name: "Enterprise IP Phones", level: "Advanced", tags: ["SIP Extension Setup", "PoE Phone Power", "PBX Cabling"] }
    ]
  },
  {
    category: "Development & Web Technologies",
    iconName: "Code",
    skills: [
      { name: "HTML5 & CSS3", level: "Advanced", tags: ["Semantic Layouts", "Responsive Design", "Flexbox/Grid"] },
      { name: "Tailwind CSS", level: "Advanced", tags: ["Utility Classes", "Custom Configs", "Dark Mode"] },
      { name: "TypeScript / JavaScript", level: "Proficient", tags: ["Next.js App Router", "React Components", "Node.js"] },
      { name: "Git & GitHub", level: "Proficient", tags: ["Version Control", "CLI Git", "Repository Hygiene"] }
    ]
  }
];
