'use client';

import React from 'react';
import { Terminal, Shield, User, Briefcase, FolderGit2, Award, GraduationCap, Mail, FileText, Cpu, Compass } from 'lucide-react';

interface HelpRendererProps {
  onRunCommand?: (cmd: string) => void;
}

export const HelpRenderer: React.FC<HelpRendererProps> = ({ onRunCommand }) => {
  const categories = [
    {
      title: "Portfolio Navigation",
      commands: [
        { cmd: "/about", desc: "Display professional profile & summary", icon: User },
        { cmd: "/experience", desc: "View Pan Pacific Hotel IT internship & timeline", icon: Briefcase },
        { cmd: "/projects", desc: "Network monitoring, VLAN rollout & Linux projects", icon: FolderGit2 },
        { cmd: "/skills", desc: "Networking, Linux, IT Support & Web tech stack", icon: Cpu },
        { cmd: "/certificates", desc: "MTCNA, TOEIC Gold (935) & BNSP credentials", icon: Award },
        { cmd: "/education", desc: "SMKN 3 Tangerang TKJ background & coursework", icon: GraduationCap },
        { cmd: "/cv", desc: "Embedded CV viewer, PDF download & print", icon: FileText },
        { cmd: "/contact", desc: "Interactive email & message terminal form", icon: Mail },
      ]
    },
    {
      title: "Linux Utilities & Workstation",
      commands: [
        { cmd: "whoami", desc: "Display current user identity", icon: Terminal },
        { cmd: "pwd", desc: "Print current working directory", icon: Compass },
        { cmd: "ls", desc: "List virtual directory files (supports -l, -a)", icon: Terminal },
        { cmd: "cat <file>", desc: "Read content of a file (e.g. cat about/profile.txt)", icon: Terminal },
        { cmd: "tree", desc: "Display portfolio filesystem hierarchy", icon: Compass },
        { cmd: "neofetch", desc: "System info & Debian ASCII logo banner", icon: Terminal },
        { cmd: "history", desc: "Show previous command log", icon: Terminal },
        { cmd: "clear", desc: "Clear screen output (or press Ctrl+L)", icon: Terminal },
        { cmd: "uptime", desc: "Show workstation system uptime", icon: Terminal },
        { cmd: "hostname", desc: "Print system hostname", icon: Terminal },
      ]
    },
    {
      title: "Network Utilities & Fun",
      commands: [
        { cmd: "ping google.com", desc: "Simulate ICMP ping latency diagnostic", icon: Shield },
        { cmd: "traceroute", desc: "Simulate route path to gateway", icon: Shield },
        { cmd: "coffee", desc: "Check engineer caffeine levels", icon: Terminal },
        { cmd: "sudo hire ridho", desc: "Elevate administrative privileges to hire", icon: Shield },
        { cmd: "fortune", desc: "Display random Linux/Networking wisdom", icon: Terminal },
      ]
    }
  ];

  return (
    <div className="font-mono text-xs sm:text-sm space-y-4 my-2 text-[#F0F6FC]">
      <div className="p-3 bg-[#161B22] border border-[#30363D] rounded-lg">
        <div className="text-[#3FB950] font-bold mb-1 flex items-center space-x-2">
          <Terminal className="w-4 h-4" />
          <span>RIDHO FEBRIAN WORKSTATION COMMAND REFERENCE</span>
        </div>
        <p className="text-[#8B949E] text-xs">
          Type commands directly or click any command badge below to execute automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-[#161B22]/70 border border-[#30363D] rounded-lg p-3 space-y-2">
            <h3 className="text-[#58A6FF] font-semibold text-xs uppercase tracking-wider border-b border-[#30363D] pb-1">
              === {cat.title} ===
            </h3>
            <div className="space-y-1.5">
              {cat.commands.map((c, i) => (
                <div 
                  key={i}
                  onClick={() => {
                    if (!onRunCommand) return;
                    let runCmd = c.cmd;
                    if (runCmd.includes('<file>')) runCmd = runCmd.replace('<file>', 'about/profile.txt');
                    onRunCommand(runCmd);
                  }}
                  className="group flex items-start justify-between p-1.5 rounded hover:bg-[#30363D]/60 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-2 min-w-0">
                    <span className="text-[#3FB950] group-hover:text-[#58A6FF] font-semibold font-mono text-xs">
                      {c.cmd}
                    </span>
                  </div>
                  <span className="text-[#8B949E] text-[11px] text-right truncate ml-2">
                    {c.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-[#8B949E] flex flex-wrap gap-2 pt-1">
        <span>Tips: Use <kbd className="px-1.5 py-0.5 bg-[#30363D] rounded text-[#F0F6FC]">Tab</kbd> for autocomplete,</span>
        <span><kbd className="px-1.5 py-0.5 bg-[#30363D] rounded text-[#F0F6FC]">↑ / ↓</kbd> for history,</span>
        <span><kbd className="px-1.5 py-0.5 bg-[#30363D] rounded text-[#F0F6FC]">Ctrl + L</kbd> to clear screen.</span>
      </div>
    </div>
  );
};
