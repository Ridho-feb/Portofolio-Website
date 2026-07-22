'use client';

import React from 'react';
import { User, Briefcase, FolderGit2, Cpu, Award, GraduationCap, FileText, Mail, Terminal, Sparkles } from 'lucide-react';

interface CommandQuickBarProps {
  onRunCommand: (cmd: string) => void;
}

export const CommandQuickBar: React.FC<CommandQuickBarProps> = ({ onRunCommand }) => {
  const quickCmds = [
    { label: "/about", icon: User, color: "hover:text-[#58A6FF]" },
    { label: "/experience", icon: Briefcase, color: "hover:text-[#3FB950]" },
    { label: "/projects", icon: FolderGit2, color: "hover:text-[#D29922]" },
    { label: "/skills", icon: Cpu, color: "hover:text-[#A371F7]" },
    { label: "/certificates", icon: Award, color: "hover:text-[#3FB950]" },
    { label: "/education", icon: GraduationCap, color: "hover:text-[#58A6FF]" },
    { label: "/cv", icon: FileText, color: "hover:text-[#F85149]" },
    { label: "/contact", icon: Mail, color: "hover:text-[#3FB950]" },
    { label: "neofetch", icon: Terminal, color: "hover:text-[#F85149]" },
  ];

  return (
    <div className="bg-[#0D1117] border-t border-[#30363D] px-3 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar font-mono text-xs select-none">
      <div className="flex items-center space-x-1 text-[#8B949E] shrink-0 font-bold uppercase text-[10px]">
        <Sparkles className="w-3 h-3 text-[#D29922]" />
        <span className="hidden sm:inline">Quick Commands:</span>
      </div>

      <div className="flex items-center space-x-1.5 shrink-0">
        {quickCmds.map((c, idx) => (
          <button
            key={idx}
            onClick={() => onRunCommand(c.label)}
            className={`px-2.5 py-1 bg-[#161B22] hover:bg-[#30363D] border border-[#30363D] text-[#F0F6FC] rounded-lg flex items-center space-x-1.5 transition-all text-xs cursor-pointer ${c.color}`}
          >
            <c.icon className="w-3 h-3 text-[#8B949E]" />
            <span>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
