'use client';

import React, { useState } from 'react';
import { certificatesData } from '@/data/certificates';
import { Award, Calendar, CheckCircle2, Eye, Download, FileText } from 'lucide-react';
import { ImageModal } from './ImageModal';

export const CertificatesRenderer: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<{ src: string; title: string; caption: string; pdfUrl?: string } | null>(null);

  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-4 text-[#F0F6FC]">
      <div className="text-[#8B949E] text-xs flex items-center justify-between border-b border-[#30363D] pb-1">
        <span>VERIFIED CREDENTIALS & CERTIFICATIONS</span>
        <span>{certificatesData.length} CERTIFICATES ISSUED</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              
              {/* Badge Preview Image */}
              {cert.badgeUrl && (
                <div 
                  onClick={() => setActiveCertModal({ src: cert.badgeUrl!, title: cert.title, caption: cert.description, pdfUrl: cert.pdfUrl })}
                  className="group relative h-40 bg-[#0D1117] border border-[#30363D] rounded-lg overflow-hidden cursor-pointer hover:border-[#58A6FF] transition-colors"
                >
                  <img 
                    src={cert.badgeUrl} 
                    alt={cert.title} 
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs text-[#F0F6FC] font-mono gap-1">
                    <Eye className="w-4 h-4 text-[#58A6FF]" />
                    <span>View Credential Document</span>
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between gap-2">
                <h2 className="font-bold text-[#F0F6FC] text-sm flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#3FB950] shrink-0" />
                  <span>{cert.title}</span>
                </h2>
              </div>

              <div className="space-y-1 text-xs">
                <p className="text-[#58A6FF] font-semibold">{cert.issuer}</p>
                {cert.scoreOrId && (
                  <p className="text-[#3FB950] font-mono font-bold bg-[#3FB950]/10 px-2 py-0.5 rounded border border-[#3FB950]/30 inline-block">
                    {cert.scoreOrId}
                  </p>
                )}
                <p className="text-[#8B949E] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#D29922]" />
                  <span>{cert.validity}</span>
                </p>
              </div>

              <p className="text-[#8B949E] text-xs font-sans leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] text-[#8B949E] font-bold block uppercase">Skills Verified:</span>
                <div className="space-y-0.5">
                  {cert.skillsVerified.map((sk, i) => (
                    <div key={i} className="text-[11px] text-[#F0F6FC] flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-[#3FB950] shrink-0" />
                      <span>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-1.5 pt-2">
              {cert.badgeUrl && (
                <button
                  onClick={() => setActiveCertModal({ src: cert.badgeUrl!, title: cert.title, caption: cert.description, pdfUrl: cert.pdfUrl })}
                  className="w-full py-1.5 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] rounded text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Document Preview</span>
                </button>
              )}

              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  download
                  className="w-full py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer font-bold shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Original PDF</span>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      {activeCertModal && (
        <ImageModal
          src={activeCertModal.src}
          alt={activeCertModal.title}
          title={activeCertModal.title}
          caption={activeCertModal.caption}
          pdfUrl={activeCertModal.pdfUrl}
          isOpen={!!activeCertModal}
          onClose={() => setActiveCertModal(null)}
        />
      )}
    </div>
  );
};
