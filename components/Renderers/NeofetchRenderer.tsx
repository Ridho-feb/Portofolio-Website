'use client';

import React from 'react';
import { profileData } from '@/data/profile';

export const NeofetchRenderer: React.FC = () => {
  const debianAscii = [
    "       _,met$$$$$gg.",
    "    ,g$$$$$$$$$$$$$$$P.",
    "  ,g$$P\"        \"\"\"Y$$\".",
    " ,$$P'              `$$$.",
    "',$$P       ,ggs.     `$$b:",
    "`d$$'     ,$P\"'   .    $$$",
    " $$P      d$'     ,    $$P",
    " $$:      $$.   -    ,d$$'",
    " $$;      Y$b._   _,d$P'",
    " I$$$.     `\"Y$$$$P\"'",
    "  `$$b:          \"",
    "   `Y$$b.",
    "     `\"Y$b._",
    "         `\"\"\""
  ];

  const info = [
    { label: "ridho@portfolio", value: "-----------------------", isHeader: true },
    { label: "OS", value: "Debian GNU/Linux 13 (Bookworm) x86_64" },
    { label: "Host", value: "Portfolio Workstation v1.0" },
    { label: "Kernel", value: profileData.workstation.kernel },
    { label: "Uptime", value: profileData.workstation.uptime },
    { label: "Packages", value: "1842 (dpkg), 12 (flatpak)" },
    { label: "Shell", value: "bash 5.2.21" },
    { label: "Terminal", value: "GNOME Terminal 3.52.0" },
    { label: "CPU", value: profileData.workstation.cpu },
    { label: "Memory", value: profileData.workstation.memory },
    { label: "Disk", value: profileData.workstation.disk },
    { label: "Editor", value: profileData.workstation.editor },
    { label: "Certifications", value: "MTCNA, TOEIC Gold (935)" },
    { label: "Interests", value: "Linux, Networking, IT Infrastructure" }
  ];

  return (
    <div className="font-mono text-xs sm:text-sm my-3 p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg text-[#F0F6FC] overflow-x-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 min-w-0">
        
        {/* Debian Red Spiral ASCII */}
        <div className="text-[#F85149] font-bold text-[11px] sm:text-xs leading-none select-none font-mono shrink-0">
          {debianAscii.map((line, i) => (
            <div key={i} className="whitespace-pre">{line}</div>
          ))}
        </div>

        {/* System Info List */}
        <div className="space-y-1 font-mono flex-1 w-full min-w-0">
          {info.map((item, i) => (
            <div key={i} className="flex flex-wrap items-center">
              {item.isHeader ? (
                <span className="text-[#58A6FF] font-bold text-sm sm:text-base">{item.label}</span>
              ) : (
                <>
                  <span className="text-[#F85149] font-bold w-28 shrink-0">{item.label}:</span>
                  <span className="text-[#F0F6FC] truncate">{item.value}</span>
                </>
              )}
            </div>
          ))}

          {/* Color Blocks Palette */}
          <div className="pt-3 flex gap-1.5">
            <span className="w-4 h-4 bg-[#0D1117] rounded-sm inline-block border border-[#30363D]" />
            <span className="w-4 h-4 bg-[#F85149] rounded-sm inline-block" />
            <span className="w-4 h-4 bg-[#3FB950] rounded-sm inline-block" />
            <span className="w-4 h-4 bg-[#D29922] rounded-sm inline-block" />
            <span className="w-4 h-4 bg-[#58A6FF] rounded-sm inline-block" />
            <span className="w-4 h-4 bg-[#A371F7] rounded-sm inline-block" />
            <span className="w-4 h-4 bg-[#F0F6FC] rounded-sm inline-block" />
          </div>
        </div>

      </div>
    </div>
  );
};
