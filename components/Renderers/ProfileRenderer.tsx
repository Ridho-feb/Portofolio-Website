'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { User, MapPin, Mail, Phone, ExternalLink, ShieldCheck, Terminal, Server, Network, Wrench } from 'lucide-react';
import { ImageModal } from './ImageModal';

export const ProfileRenderer: React.FC = () => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  // Profile picture of Ridho Febrian
  const profilePhotoUrl = "/images/profile.png";

  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-4 text-[#F0F6FC]">
      {/* Primary Card */}
      <div className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg space-y-4">
        
        {/* Top Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="relative group cursor-pointer" onClick={() => setShowPhotoModal(true)}>
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border-2 border-[#58A6FF] bg-[#0D1117] relative">
              <img 
                src={profilePhotoUrl} 
                alt="Ridho Febrian Profile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity text-[10px] text-[#F0F6FC] font-sans">
              Click to Zoom
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-[#F0F6FC] tracking-tight">{profileData.name}</h1>
              <span className="px-2 py-0.5 text-[11px] bg-[#3FB950]/20 text-[#3FB950] border border-[#3FB950]/40 rounded-full flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3 h-3" />
                MTCNA Certified
              </span>
            </div>

            <p className="text-[#58A6FF] font-semibold text-sm">{profileData.title}</p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-[#8B949E]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D29922]" />
                {profileData.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#58A6FF]" />
                <a href={`mailto:${profileData.email}`} className="hover:underline hover:text-[#F0F6FC]">{profileData.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#3FB950]" />
                {profileData.phone}
              </span>
            </div>

            <div className="pt-1 flex flex-wrap gap-2 justify-center md:justify-start">
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noreferrer" 
                className="px-2.5 py-1 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#F0F6FC] rounded text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#8B949E]" />
              </a>
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="px-2.5 py-1 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] rounded text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#8B949E]" />
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-[#0D1117] p-3 rounded-lg border border-[#30363D]/80">
          <h2 className="text-xs uppercase text-[#8B949E] tracking-wider mb-1.5 font-bold flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#58A6FF]" />
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-[#F0F6FC] leading-relaxed font-sans">
            {profileData.bio}
          </p>
        </div>

        {/* Current Focus Grid */}
        <div className="space-y-2">
          <h2 className="text-xs uppercase text-[#8B949E] tracking-wider font-bold">Current Focus</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {[
              { label: "Linux Admin", icon: Server, color: "text-[#3FB950]" },
              { label: "Networking", icon: Network, color: "text-[#58A6FF]" },
              { label: "IT Support", icon: Wrench, color: "text-[#D29922]" },
              { label: "Infrastructure", icon: Terminal, color: "text-[#F85149]" },
              { label: "Web Tech", icon: ExternalLink, color: "text-[#A371F7]" }
            ].map((item, i) => (
              <div key={i} className="p-2 bg-[#0D1117] border border-[#30363D] rounded-lg text-center flex flex-col items-center justify-center space-y-1">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-[11px] font-semibold text-[#F0F6FC]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal
        src={profilePhotoUrl}
        alt="Ridho Febrian Profile Photo"
        title="Ridho Febrian - IT Support & Network Engineer"
        caption="Professional profile photo of Ridho Febrian."
        isOpen={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
      />
    </div>
  );
};
