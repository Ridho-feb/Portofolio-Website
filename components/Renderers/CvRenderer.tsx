'use client';

import React, { useState } from 'react';
import { Download, ExternalLink, Maximize2, FileText, X } from 'lucide-react';

export const CvRenderer: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const pdfUrl = "/Ridho_Febrian_CV.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ridho_Febrian_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-4 text-[#F0F6FC]">
      
      {/* Control Bar */}
      <div className="p-3 bg-[#161B22] border border-[#30363D] rounded-xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <FileText className="w-4 h-4 text-[#58A6FF]" />
          <span className="font-bold text-[#F0F6FC]">Official Curriculum Vitae (PDF)</span>
          <span className="px-2 py-0.5 text-[10px] bg-[#3FB950]/20 text-[#3FB950] border border-[#3FB950]/30 rounded font-bold">PDF Embedded</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs flex items-center space-x-1.5 transition-colors cursor-pointer font-bold shadow"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>

          <button
            onClick={handleOpenNewTab}
            className="px-3 py-1.5 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] rounded text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in New Tab</span>
          </button>

          <button
            onClick={() => setIsFullscreen(true)}
            className="px-3 py-1.5 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#F0F6FC] rounded text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#D29922]" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Embedded PDF Viewer Container */}
      <div className="bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden shadow-2xl relative">
        <div className="bg-[#161B22] px-4 py-2 border-b border-[#30363D] flex items-center justify-between text-xs text-[#8B949E]">
          <span>Document: Ridho_Febrian_CV.pdf</span>
          <span>Scroll to navigate page 1 of 1</span>
        </div>

        {/* Embedded Iframe PDF */}
        <div className="w-full h-[600px] sm:h-[750px] relative bg-[#1e293b]/50">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            title="Ridho Febrian CV PDF"
            className="w-full h-full border-0 rounded-b-xl"
          />
        </div>
      </div>

      {/* Fullscreen Modal Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-2 sm:p-6 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center max-w-6xl w-full mx-auto pb-3">
            <span className="text-[#F0F6FC] font-mono text-sm font-bold flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#58A6FF]" />
              Ridho Febrian — Official CV Document
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="px-3 py-1 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs flex items-center gap-1 font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 bg-[#21262D] hover:bg-[#F85149] text-white rounded transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 max-w-6xl w-full mx-auto bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden">
            <iframe
              src={pdfUrl}
              title="Ridho Febrian CV Fullscreen PDF"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

    </div>
  );
};
