'use client';

import React, { useState } from 'react';
import { Download, ExternalLink, Maximize2, FileText, X, Eye } from 'lucide-react';

export const CvRenderer: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<'images' | 'pdf'>('images');
  const pdfUrl = "/Ridho_Febrian_CV.pdf";
  const pageImages = [
    "/documents/cv-page-1.png",
    "/documents/cv-page-2.png"
  ];

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
          <span className="font-bold text-[#F0F6FC]">Official Curriculum Vitae (Ridho Febrian)</span>
          <span className="px-2 py-0.5 text-[10px] bg-[#3FB950]/20 text-[#3FB950] border border-[#3FB950]/30 rounded font-bold">Original PDF</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex bg-[#0D1117] p-0.5 border border-[#30363D] rounded">
            <button
              onClick={() => setViewMode('images')}
              className={`px-2.5 py-1 text-xs rounded transition-colors flex items-center space-x-1 cursor-pointer ${
                viewMode === 'images' ? 'bg-[#21262D] text-[#58A6FF] font-bold' : 'text-[#8B949E] hover:text-[#F0F6FC]'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Document View</span>
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-2.5 py-1 text-xs rounded transition-colors flex items-center space-x-1 cursor-pointer ${
                viewMode === 'pdf' ? 'bg-[#21262D] text-[#58A6FF] font-bold' : 'text-[#8B949E] hover:text-[#F0F6FC]'
              }`}
            >
              <FileText className="w-3 h-3" />
              <span>PDF Embed</span>
            </button>
          </div>

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
            <span>Open PDF</span>
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

      {/* CV Document Container */}
      <div className="bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden shadow-2xl relative">
        <div className="bg-[#161B22] px-4 py-2 border-b border-[#30363D] flex items-center justify-between text-xs text-[#8B949E]">
          <span>Document: Ridho_Febrian_CV.pdf</span>
          <span>{viewMode === 'images' ? 'Page View (High Resolution)' : 'Interactive PDF Reader'}</span>
        </div>

        {viewMode === 'images' ? (
          <div className="p-4 sm:p-6 bg-[#090C10] space-y-6 max-h-[800px] overflow-y-auto">
            {pageImages.map((imgSrc, idx) => (
              <div key={idx} className="relative bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#0D1117] px-3 py-1.5 border-b border-[#30363D] text-[11px] text-[#8B949E] flex justify-between">
                  <span>Page {idx + 1} of {pageImages.length}</span>
                  <span className="text-[#3FB950] font-bold">Original Upload</span>
                </div>
                <img 
                  src={imgSrc} 
                  alt={`Ridho Febrian CV Page ${idx + 1}`}
                  className="w-full h-auto object-contain block"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[600px] sm:h-[750px] relative bg-[#1e293b]/50">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              title="Ridho Febrian CV PDF"
              className="w-full h-full border-0 rounded-b-xl"
            />
          </div>
        )}
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
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 bg-[#21262D] hover:bg-[#F85149] text-white rounded transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 max-w-6xl w-full mx-auto bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden overflow-y-auto p-4 space-y-4">
            {pageImages.map((imgSrc, idx) => (
              <img 
                key={idx}
                src={imgSrc} 
                alt={`Ridho Febrian CV Fullscreen Page ${idx + 1}`}
                className="w-full h-auto object-contain rounded-lg border border-[#30363D]"
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
