'use client';

import React from 'react';
import { skillsData } from '@/data/skills';
import { Network, Server, Wrench, Code, CheckCircle, Shield } from 'lucide-react';

export const SkillsRenderer: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Networking')) return Network;
    if (category.includes('Linux')) return Server;
    if (category.includes('Support')) return Wrench;
    return Code;
  };

  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-4 text-[#F0F6FC]">
      <div className="text-[#8B949E] text-xs flex items-center justify-between border-b border-[#30363D] pb-1">
        <span>TECHNICAL SKILLS & COMPETENCY MATRIX</span>
        <span>4 CATEGORIES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsData.map((cat, idx) => {
          const IconComp = getIcon(cat.category);
          return (
            <div key={idx} className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg space-y-3">
              <div className="flex items-center space-x-2 border-b border-[#30363D] pb-2">
                <IconComp className="w-4 h-4 text-[#58A6FF]" />
                <h2 className="text-sm font-bold text-[#F0F6FC]">{cat.category}</h2>
              </div>

              <div className="space-y-2">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="p-2 bg-[#0D1117] border border-[#30363D] rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#F0F6FC] text-xs flex items-center space-x-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#3FB950]" />
                        <span>{skill.name}</span>
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                        skill.level === 'Expert' ? 'bg-[#3FB950]/20 text-[#3FB950] border border-[#3FB950]/40' :
                        skill.level === 'Advanced' ? 'bg-[#58A6FF]/20 text-[#58A6FF] border border-[#58A6FF]/40' :
                        'bg-[#D29922]/20 text-[#D29922] border border-[#D29922]/40'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {skill.tags.map((tag, t) => (
                        <span key={t} className="px-1.5 py-0.5 bg-[#21262D] text-[#8B949E] rounded text-[10px]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
