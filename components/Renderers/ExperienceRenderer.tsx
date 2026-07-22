'use client';

import React from 'react';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export const ExperienceRenderer: React.FC = () => {
  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-4 text-[#F0F6FC]">
      <div className="text-[#8B949E] text-xs flex items-center justify-between border-b border-[#30363D] pb-1">
        <span>WORK EXPERIENCE & INTERNSHIP TIMELINE</span>
        <span>1 ENTRY FOUND</span>
      </div>

      {experienceData.map((exp, index) => (
        <div key={index} className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg space-y-4">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363D] pb-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#58A6FF]" />
                <h2 className="text-base sm:text-lg font-bold text-[#F0F6FC]">{exp.company}</h2>
                <span className="px-2 py-0.5 text-[10px] bg-[#58A6FF]/20 text-[#58A6FF] rounded border border-[#58A6FF]/40">
                  {exp.type}
                </span>
              </div>
              <p className="text-[#3FB950] font-semibold text-xs sm:text-sm">{exp.role}</p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-[#8B949E] space-y-1 font-mono">
              <span className="flex items-center space-x-1 text-[#D29922]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.period}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.location}</span>
              </span>
            </div>
          </div>

          {/* Overview */}
          <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed font-sans">
            {exp.description}
          </p>

          {/* Key Responsibilities Grid */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase text-[#58A6FF] font-bold tracking-wider flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3FB950]" />
              <span>Core Responsibilities & Technical Deliverables</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {exp.responsibilities.map((resp, idx) => {
                const [title, ...rest] = resp.split(':');
                return (
                  <div key={idx} className="p-2.5 bg-[#0D1117] border border-[#30363D] rounded-lg flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3FB950] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      {rest.length > 0 ? (
                        <>
                          <span className="font-bold text-[#F0F6FC] block">{title}:</span>
                          <span className="text-[#8B949E] font-sans">{rest.join(':')}</span>
                        </>
                      ) : (
                        <span className="text-[#F0F6FC] font-sans">{resp}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stack Badges */}
          <div className="pt-2 border-t border-[#30363D] flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-[#8B949E] mr-1 flex items-center space-x-1">
              <Cpu className="w-3.5 h-3.5 text-[#A371F7]" />
              <span>Hardware & Systems Used:</span>
            </span>
            {exp.technologies.map((tech, i) => (
              <span key={i} className="px-2 py-0.5 bg-[#21262D] text-[#F0F6FC] rounded text-[11px] border border-[#30363D]">
                {tech}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};
