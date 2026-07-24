'use client';

import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageModalProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  pdfUrl?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  title,
  caption,
  pdfUrl,
  isOpen,
  onClose
}) => {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-5xl w-full bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0D1117] border-b border-[#30363D] text-[#F0F6FC]">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#F85149] inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-[#D29922] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#3FB950] inline-block" />
              <span className="ml-2 font-mono text-xs text-[#8B949E]">{title || alt}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-[#8B949E]">
              <button
                onClick={() => setZoom(z => Math.min(z + 0.25, 2.5))}
                className="p-1 hover:text-[#F0F6FC] transition-colors rounded hover:bg-[#30363D]/50"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoom(z => Math.max(z - 0.25, 0.75))}
                className="p-1 hover:text-[#F0F6FC] transition-colors rounded hover:bg-[#30363D]/50"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="p-1 hover:text-[#F0F6FC] transition-colors rounded hover:bg-[#30363D]/50"
                title="Reset Zoom"
              >
                <Maximize className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:text-[#F85149] transition-colors rounded hover:bg-[#30363D]/50 ml-2"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative flex-1 overflow-auto bg-[#090C10] p-6 flex items-center justify-center min-h-[300px]">
            <img
              src={src}
              alt={alt}
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }}
              className="max-h-[65vh] object-contain rounded-lg border border-[#30363D] shadow-lg"
            />
          </div>

          {/* Caption Footer */}
          <div className="p-3 bg-[#0D1117] border-t border-[#30363D] font-mono text-xs text-[#8B949E] flex flex-wrap justify-between items-center gap-2">
            <span>{caption || title || alt}</span>
            <div className="flex items-center space-x-3">
              {pdfUrl && (
                <a 
                  href={pdfUrl} 
                  download
                  className="px-2.5 py-1 bg-[#238636] hover:bg-[#2ea043] text-white rounded font-bold text-[11px] flex items-center space-x-1 transition-colors"
                >
                  <span>Download PDF</span>
                </a>
              )}
              <a 
                href={src} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-1 text-[#58A6FF] hover:underline"
              >
                <span>Open Raw Image</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
