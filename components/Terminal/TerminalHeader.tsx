'use client';

import React from 'react';
import { Terminal, Copy, Trash2, HelpCircle, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalHeaderProps {
  onClear: () => void;
  onCopy: () => void;
  onHelp: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  onClear,
  onCopy,
  onHelp,
  isFullscreen,
  onToggleFullscreen,
}) => {
  return (
    <div className="bg-[#0D1117] border-b border-[#30363D] px-4 py-3 flex items-center justify-between select-none font-mono text-xs text-[#F0F6FC]">
      
      {/* Left: Window Controls + Host Name */}
      <div className="flex items-center space-x-3">
        {/* Window controls */}
        <div className="flex items-center space-x-1.5">
          <span 
            onClick={onClear} 
            className="w-3 h-3 rounded-full bg-[#F85149] hover:opacity-80 inline-block cursor-pointer transition-opacity" 
            title="Clear Terminal"
          />
          <span 
            onClick={onToggleFullscreen} 
            className="w-3 h-3 rounded-full bg-[#D29922] hover:opacity-80 inline-block cursor-pointer transition-opacity" 
            title="Toggle Fullscreen"
          />
          <span 
            onClick={onHelp} 
            className="w-3 h-3 rounded-full bg-[#3FB950] hover:opacity-80 inline-block cursor-pointer transition-opacity" 
            title="Help Menu"
          />
        </div>

        {/* Debian Red Spiral Icon + Title */}
        <div className="flex items-center space-x-2 border-l border-[#30363D] pl-3">
          <svg className="w-4 h-4 text-[#F85149]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <span className="font-bold text-[#F0F6FC] hidden sm:inline">ridho@portfolio:~$</span>
          <span className="text-[#8B949E] text-[11px] hidden md:inline">— Debian GNU/Linux 13</span>
        </div>
      </div>

      {/* Right: Quick Terminal Action Controls */}
      <div className="flex items-center space-x-2 text-[#8B949E]">
        <button
          onClick={onCopy}
          className="p-1.5 hover:text-[#F0F6FC] transition-colors rounded hover:bg-[#30363D]/60 flex items-center space-x-1"
          title="Copy Terminal Output"
        >
          <Copy className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">Copy</span>
        </button>

        <button
          onClick={onClear}
          className="p-1.5 hover:text-[#F85149] transition-colors rounded hover:bg-[#30363D]/60 flex items-center space-x-1"
          title="Clear Buffer (Ctrl+L)"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">Clear</span>
        </button>

        <button
          onClick={onHelp}
          className="p-1.5 hover:text-[#3FB950] transition-colors rounded hover:bg-[#30363D]/60 flex items-center space-x-1"
          title="Command Reference (/help)"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[#3FB950]" />
          <span className="hidden sm:inline text-[11px]">Help</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          className="p-1.5 hover:text-[#58A6FF] transition-colors rounded hover:bg-[#30363D]/60 ml-1"
          title="Toggle Fullscreen Window"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>

    </div>
  );
};
