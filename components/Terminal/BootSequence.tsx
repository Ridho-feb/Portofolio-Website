'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootSteps = [
  "Initializing Portfolio Environment...",
  "Loading Profile...",
  "Loading Experience...",
  "Loading Projects...",
  "Loading Certificates...",
  "Connecting...",
  "Authentication successful.",
  "Welcome back."
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < bootSteps.length) {
        setLines(prev => [...prev, bootSteps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 500);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    onComplete();
  };

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1117] flex flex-col items-center justify-center p-4 font-mono text-xs sm:text-sm text-[#F0F6FC]">
      
      {/* Container */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-[#161B22] border border-[#30363D] rounded-xl p-6 shadow-2xl space-y-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#30363D] pb-3 text-[#8B949E]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#F85149] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#D29922] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#3FB950] inline-block" />
            <span className="ml-2 font-mono text-xs text-[#58A6FF]">Debian 13 (Bookworm) Kernel 6.8.12</span>
          </div>

          <button
            onClick={handleSkip}
            className="px-2.5 py-1 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] rounded text-xs flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>Skip Boot</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Boot output */}
        <div className="space-y-2 min-h-[200px] font-mono text-xs">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-[#3FB950] font-bold">[ OK ]</span>
              <span className={idx === lines.length - 1 ? 'text-[#F0F6FC] font-semibold' : 'text-[#8B949E]'}>
                {line}
              </span>
            </div>
          ))}
          <div className="w-2 h-4 bg-[#58A6FF] animate-pulse inline-block ml-1" />
        </div>

        {/* System Banner when done */}
        <div className="pt-2 border-t border-[#30363D] text-[#8B949E] text-[11px] flex justify-between items-center">
          <span>Ridho Febrian Workstation v1.0</span>
          <span>Press [Space] to skip</span>
        </div>
      </motion.div>
    </div>
  );
};
