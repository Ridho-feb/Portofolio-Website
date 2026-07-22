import { ProjectItem } from '@/types';

export const projectsData: ProjectItem[] = [
  {
    id: "net-monitor-security",
    title: "Network Monitoring & Security Implementation",
    subtitle: "Real-time Telemetry, Encrypted Access & Firewall Hardening",
    description: "Designed and deployed a central network monitoring and security infrastructure utilizing a Debian 13 server, Netdata metrics collector, and MikroTik RouterOS for real-time bandwidth inspection, anomaly alerts, and secure encrypted remote management.",
    technologies: [
      "Debian 13 (Bookworm)",
      "Netdata",
      "Apache2",
      "OpenSSL",
      "VMware ESXi",
      "MikroTik RouterOS",
      "DNS (BIND9)",
      "Firewall Rules (Filter/NAT)",
      "OSPF & Static Routing",
      "WireGuard VPN"
    ],
    architectureDiagram: `
+-----------------------------------------------------------------------+
|                         WAN / Internet Gateway                        |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                       MikroTik RouterOS Gateway                       |
|   - NAT / Mangle / Filter Rules                                       |
|   - WireGuard VPN Tunnel Receiver                                     |
|   - Netflow / Port Mirroring Agent                                    |
+-----------------------------------------------------------------------+
                |                                       |
                v                                       v
+-------------------------------+       +-------------------------------+
|    VLAN 10: Management Core   |       |      VLAN 20: Server Farm    |
| - Switch Trunking (802.1Q)    |       | - Debian 13 Linux Node        |
| - LinkSprinter Verified       |       | - Netdata Real-Time Engine    |
+-------------------------------+       | - Apache2 SSL Reverse Proxy   |
                                        | - BIND9 Authoritative DNS     |
                                        +-------------------------------+
`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        alt: "Server Rack & Network Infrastructure",
        caption: "Data center rack deployment hosting Debian 13 monitoring nodes and VMware ESXi virtual switches."
      },
      {
        url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
        alt: "Network Cable & Switch Patch Panel",
        caption: "LinkSprinter verified Cat6 patch panels connected to MikroTik managed switches with VLAN tagging."
      }
    ],
    features: [
      "Real-time Metric Dashboards: Monitored CPU, RAM, disk I/O, latency, packet loss, and interface bandwidth with 1-second granularity.",
      "Custom SSL/TLS Cryptography: Generated RSA 4096-bit self-signed and Let's Encrypt certificates via OpenSSL for secure HTTPS reverse proxying.",
      "Stateful Packet Firewall: Configured RouterOS raw & filter rules to drop port scanners, SYN floods, and brute-force SSH attacks automatically.",
      "BIND9 DNS Resolution: Configured local split-horizon DNS for fast local hostname resolution without relying on external DNS latency.",
      "Automated Alerting: Integrated Netdata alarms with Telegram Bot API to notify network administrators of bandwidth spikes or down interfaces."
    ],
    lessonsLearned: "Gained a deep understanding of packet flow processing order in MikroTik RouterOS (Prerouting -> Input/Forward -> Postrouting), optimizing netdata collector poll intervals to minimize server CPU overhead, and configuring SSL cipher suites to enforce TLS 1.3 security standards.",
    futureImprovements: "Integrating Prometheus and Grafana for long-term historical trend retention and configuring VRRP dual-router gateway redundancy for 99.99% uptime.",
    githubUrl: "https://github.com/Ridho-feb",
    demoUrl: "https://github.com/Ridho-feb"
  }
];
