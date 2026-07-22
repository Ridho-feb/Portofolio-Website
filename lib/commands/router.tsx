import React from 'react';
import { CommandOutput, FileNode } from '@/types';
import { profileData } from '@/data/profile';
import { virtualFilesystem } from '@/data/filesystem';
import { HelpRenderer } from '@/components/Renderers/HelpRenderer';
import { ProfileRenderer } from '@/components/Renderers/ProfileRenderer';
import { ExperienceRenderer } from '@/components/Renderers/ExperienceRenderer';
import { ProjectsRenderer } from '@/components/Renderers/ProjectsRenderer';
import { SkillsRenderer } from '@/components/Renderers/SkillsRenderer';
import { CertificatesRenderer } from '@/components/Renderers/CertificatesRenderer';
import { EducationRenderer } from '@/components/Renderers/EducationRenderer';
import { CvRenderer } from '@/components/Renderers/CvRenderer';
import { ContactRenderer } from '@/components/Renderers/ContactRenderer';
import { NeofetchRenderer } from '@/components/Renderers/NeofetchRenderer';
import { FileTreeRenderer } from '@/components/Renderers/FileTreeRenderer';

const FORTUNES = [
  "\"There is no place like 127.0.0.1\" — Classical Networking Truth",
  "\"Root is not just a permission, it is a lifestyle.\" — System Administrator Proverb",
  "\"Packet loss is the universe's way of telling you to re-cable.\" — Hardware Engineer",
  "\"In a world without fences, who needs Gates and Windows? Choose Linux.\" — Open Source Creed",
  "\"Measure twice, splice once.\" — Fiber Optic Technician Wisdom",
  "\"MikroTik WinBox connected. Keep calm and check packet firewall rules.\""
];

export function executeCommand(
  rawInput: string,
  history: string[],
  onRunCommand: (cmd: string) => void,
  onClear: () => void
): CommandOutput {
  const trimmed = rawInput.trim();
  const timestamp = new Date().toLocaleTimeString();
  const id = Math.random().toString(36).substring(2, 9);

  if (!trimmed) {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: null
    };
  }

  const parts = trimmed.split(' ').filter(Boolean);
  const primaryCmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  // Clear handler
  if (primaryCmd === 'clear' || primaryCmd === '/clear') {
    onClear();
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: null
    };
  }

  // Help
  if (primaryCmd === '/help' || primaryCmd === 'help') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <HelpRenderer onRunCommand={onRunCommand} />
    };
  }

  // About / Profile
  if (primaryCmd === '/about' || primaryCmd === 'about') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <ProfileRenderer />
    };
  }

  // Experience
  if (primaryCmd === '/experience' || primaryCmd === 'experience') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <ExperienceRenderer />
    };
  }

  // Projects
  if (primaryCmd === '/projects' || primaryCmd === 'projects') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <ProjectsRenderer />
    };
  }

  // Skills
  if (primaryCmd === '/skills' || primaryCmd === 'skills') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <SkillsRenderer />
    };
  }

  // Certificates
  if (primaryCmd === '/certificates' || primaryCmd === 'certificates') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <CertificatesRenderer />
    };
  }

  // Education
  if (primaryCmd === '/education' || primaryCmd === 'education') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <EducationRenderer />
    };
  }

  // CV
  if (primaryCmd === '/cv' || primaryCmd === 'cv') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <CvRenderer />
    };
  }

  // Contact
  if (primaryCmd === '/contact' || primaryCmd === 'contact') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <ContactRenderer />
    };
  }

  // Neofetch
  if (primaryCmd === '/neofetch' || primaryCmd === 'neofetch') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <NeofetchRenderer />
    };
  }

  // Social redirects
  if (primaryCmd === '/github' || primaryCmd === 'github') {
    if (typeof window !== 'undefined') window.open(profileData.github, '_blank');
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'success',
      content: `Opening GitHub profile: ${profileData.github}`
    };
  }

  if (primaryCmd === '/linkedin' || primaryCmd === 'linkedin') {
    if (typeof window !== 'undefined') window.open(profileData.linkedin, '_blank');
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'success',
      content: `Opening LinkedIn profile: ${profileData.linkedin}`
    };
  }

  if (primaryCmd === '/email' || primaryCmd === 'email') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'info',
      content: `Direct Email: ${profileData.email} (Type /contact to send a message directly)`
    };
  }

  // Whoami
  if (primaryCmd === 'whoami') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: `${profileData.name}\nRole: ${profileData.title}`
    };
  }

  // Pwd
  if (primaryCmd === 'pwd') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: '/home/ridho'
    };
  }

  // Tree
  if (primaryCmd === 'tree' || primaryCmd === '/tree') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'react',
      content: <FileTreeRenderer node={virtualFilesystem} onSelectFile={(p) => onRunCommand(`cat ${p}`)} />
    };
  }

  // Ls
  if (primaryCmd === 'ls' || primaryCmd === '/ls') {
    const isLong = args.includes('-l') || args.includes('-la') || args.includes('-al');
    const isAll = args.includes('-a') || args.includes('-la') || args.includes('-al');

    let items = virtualFilesystem.children || [];
    if (!isAll) {
      items = items.filter(c => !c.name.startsWith('.'));
    }

    if (isLong) {
      const rows = items.map(item => {
        const perm = item.permissions || (item.type === 'directory' ? 'drwxr-xr-x' : '-rw-r--r--');
        const size = (item.size || (item.type === 'directory' ? '4.0 KB' : '1.0 KB')).padStart(8);
        const date = item.updatedAt || '2026-07-22 09:00';
        const name = item.type === 'directory' ? `${item.name}/` : item.name;
        return `${perm}  1 ridho ridho ${size}  ${date}  ${name}`;
      }).join('\n');

      return {
        id,
        command: rawInput,
        timestamp,
        type: 'text',
        content: `total ${items.length * 4}\n${rows}`
      };
    } else {
      const formattedNames = items.map(item => item.type === 'directory' ? `\x1b[34m${item.name}/\x1b[0m` : item.name).join('   ');
      return {
        id,
        command: rawInput,
        timestamp,
        type: 'text',
        content: items.map(i => i.type === 'directory' ? `${i.name}/` : i.name).join('   ')
      };
    }
  }

  // Cat
  if (primaryCmd === 'cat' || primaryCmd === '/cat') {
    if (args.length === 0) {
      return {
        id,
        command: rawInput,
        timestamp,
        type: 'error',
        content: 'cat: missing file operand. Example: cat about/profile.txt'
      };
    }

    const filePath = args[0].replace('ridho/', '').replace('/home/ridho/', '');
    const pathParts = filePath.split('/');

    let current: FileNode | undefined = virtualFilesystem;
    for (const p of pathParts) {
      if (!current || current.type !== 'directory') break;
      current = current.children?.find(c => c.name === p);
    }

    if (current && current.type === 'file') {
      return {
        id,
        command: rawInput,
        timestamp,
        type: 'text',
        content: current.content || '[Empty File]'
      };
    } else if (current && current.type === 'directory') {
      return {
        id,
        command: rawInput,
        timestamp,
        type: 'error',
        content: `cat: ${filePath}: Is a directory`
      };
    } else {
      return {
        id,
        command: rawInput,
        timestamp,
        type: 'error',
        content: `cat: ${filePath}: No such file or directory`
      };
    }
  }

  // History
  if (primaryCmd === 'history' || primaryCmd === '/history') {
    const list = history.map((h, i) => ` ${(i + 1).toString().padStart(4)}  ${h}`).join('\n');
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: list || ' No history records yet.'
    };
  }

  // Uptime
  if (primaryCmd === 'uptime') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: `09:12:44 up 14 days, 6:32, 2 users, load average: 0.12, 0.08, 0.05`
    };
  }

  // Hostname
  if (primaryCmd === 'hostname') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: 'portfolio'
    };
  }

  // Ping
  if (primaryCmd === 'ping') {
    const target = args[0] || 'google.com';
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: `PING ${target} (142.250.190.46) 56(84) bytes of data.
64 bytes from ${target}: icmp_seq=1 ttl=117 time=14.2 ms
64 bytes from ${target}: icmp_seq=2 ttl=117 time=12.8 ms
64 bytes from ${target}: icmp_seq=3 ttl=117 time=13.5 ms
64 bytes from ${target}: icmp_seq=4 ttl=117 time=12.1 ms

--- ${target} ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 12.100/13.150/14.200/0.812 ms`
    };
  }

  // Traceroute
  if (primaryCmd === 'traceroute' || primaryCmd === 'mtr') {
    const target = args[0] || 'ridhofebrian.dev';
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'text',
      content: `traceroute to ${target} (104.21.72.19), 30 hops max, 60 byte packets
 1  gateway.local (192.168.1.1)  1.214 ms  1.102 ms  0.985 ms
 2  10.200.0.1 (MikroTik RouterOS Core)  4.321 ms  3.890 ms  4.120 ms
 3  isp-backbone.telkom.net.id (180.252.0.1)  12.450 ms  11.900 ms  12.100 ms
 4  cloud-gateway.singapore.net (203.116.1.2)  28.400 ms  27.900 ms  28.100 ms
 5  ${target} (104.21.72.19)  31.200 ms  30.800 ms  30.950 ms`
    };
  }

  // Coffee
  if (primaryCmd === 'coffee') {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'warning',
      content: 'Coffee level: Critical ☕\nRecommendation: Restock Espresso before deploying BGP routing table changes.'
    };
  }

  // Sudo hire & privilege escalation
  if (primaryCmd === 'sudo' || trimmed.toLowerCase().includes('sudo hire')) {
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'success',
      content: `[sudo] password for ridho: **********
[AUTHENTICATED] Root Administrative Privileges Granted!
==================================================
SUCCESS: Ridho Febrian has been hired as IT Support & Network Engineer!
Contact: ${profileData.email} | ${profileData.phone}
Status: Ready for immediate onboarding & deployment.`
    };
  }

  // Fortune
  if (primaryCmd === 'fortune') {
    const random = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    return {
      id,
      command: rawInput,
      timestamp,
      type: 'info',
      content: random
    };
  }

  // Unknown command
  return {
    id,
    command: rawInput,
    timestamp,
    type: 'error',
    content: `bash: ${primaryCmd}: command not found. Type /help or help to view available commands.`
  };
}
