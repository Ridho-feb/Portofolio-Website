'use client';

import React from 'react';
import { educationData } from '@/data/education';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const EducationRenderer: React.FC = () => {
  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-4 text-[#F0F6FC]">
      <div className="text-[#8B949E] text-xs flex items-center justify-between border-b border-[#30363D] pb-1">
        <span>ACADEMIC BACKGROUND & VOCATIONAL EDUCATION</span>
        <span>TKJ MAJOR</span>
      </div>

      {educationData.map((edu, idx) => (
        <div key={idx} className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg space-y-4">
          
          {/* Institution Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363D] pb-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-[#58A6FF]" />
                <h2 className="text-base sm:text-lg font-bold text-[#F0F6FC]">{edu.institution}</h2>
              </div>
              <p className="text-[#3FB950] font-semibold text-xs sm:text-sm">{edu.degree}</p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-[#8B949E] space-y-1">
              <span className="flex items-center space-x-1 text-[#D29922]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{edu.period}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </span>
            </div>
          </div>

          {/* Honor / Distinction */}
          {edu.gpaOrGrade && (
            <div className="p-2.5 bg-[#3FB950]/10 border border-[#3FB950]/30 rounded-lg text-xs text-[#3FB950] font-semibold flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#3FB950]" />
              <span>{edu.gpaOrGrade}</span>
            </div>
          )}

          {/* Relevant Coursework */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase text-[#58A6FF] font-bold tracking-wider flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-[#58A6FF]" />
              <span>Core Practical Coursework</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {edu.courses.map((course, i) => (
                <div key={i} className="p-2 bg-[#0D1117] border border-[#30363D] rounded-lg text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3FB950] shrink-0" />
                  <span className="text-[#F0F6FC] font-sans">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Achievements */}
          <div className="space-y-1.5 bg-[#0D1117] p-3 rounded-lg border border-[#30363D]">
            <h3 className="text-xs font-bold text-[#D29922] uppercase tracking-wider">High School Technical Honors</h3>
            <ul className="space-y-1 list-disc list-inside text-xs text-[#8B949E] font-sans">
              {edu.achievements.map((ach, i) => (
                <li key={i} className="leading-relaxed">{ach}</li>
              ))}
            </ul>
          </div>

        </div>
      ))}
    </div>
  );
};
