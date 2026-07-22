'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CommandOutput } from '@/types';
import { executeCommand } from '@/lib/commands/router';
import { TerminalHeader } from './TerminalHeader';
import { CommandQuickBar } from './CommandQuickBar';
import { BootSequence } from './BootSequence';

const initialWelcomeBanner: CommandOutput = {
  id: 'welcome-banner',
  command: '',
  timestamp: new Date().toLocaleTimeString(),
  type: 'text',
  content: (
    <div className="space-y-3 font-mono my-2 text-[#F0F6FC]">
      <div className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg space-y-3">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#58A6FF] bg-[#0D1117] shrink-0 shadow-md">
            <img 
              src="/images/profile.png" 
              alt="Ridho Febrian" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="text-base sm:text-lg font-bold text-[#F0F6FC]">
              Ridho Febrian Workstation
            </div>
            <div className="text-xs text-[#58A6FF] font-semibold">
              IT Support & Network Engineer | MTCNA Certified
            </div>
            <div className="text-xs text-[#8B949E]">
              Debian GNU/Linux 13 (Bookworm) x86_64 — SSH Session Active
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-[#30363D] text-xs text-[#3FB950] font-semibold flex items-center space-x-2">
          <span>Type</span>
          <kbd className="px-2 py-0.5 bg-[#21262D] border border-[#30363D] text-[#58A6FF] rounded">/help</kbd>
          <span>to begin navigating or click quick commands below.</span>
        </div>
      </div>
    </div>
  )
};

export const TerminalWindow: React.FC = () => {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [history, setHistory] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('ridho_terminal_history');
      if (savedHistory) {
        try {
          return JSON.parse(savedHistory);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputVal, setInputVal] = useState('');
  const [outputs, setOutputs] = useState<CommandOutput[]>([initialWelcomeBanner]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Auto command list for Tab completion
  const autocompleteCommands = [
    '/help', '/about', '/experience', '/projects', '/skills', '/certificates',
    '/education', '/cv', '/contact', '/neofetch', '/github', '/linkedin', '/email',
    'whoami', 'pwd', 'ls', 'cat', 'tree', 'history', 'clear', 'uptime', 'hostname',
    'ping', 'traceroute', 'coffee', 'sudo hire ridho', 'fortune'
  ];

  // Save history
  useEffect(() => {
    if (typeof window !== 'undefined' && history.length > 0) {
      localStorage.setItem('ridho_terminal_history', JSON.stringify(history.slice(-50)));
    }
  }, [history]);

  // Scroll to bottom on outputs update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  // Focus input on window click
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Run a command string
  const handleRunCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    // Update command history
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    const result = executeCommand(
      cmd,
      [...history, cmd],
      (nextCmd) => handleRunCommand(nextCmd),
      () => setOutputs([])
    );

    if (result.content !== null) {
      setOutputs(prev => [...prev, result]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRunCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIndex);
      setInputVal(history[history.length - 1 - nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(history[history.length - 1 - nextIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = autocompleteCommands.find(c => c.startsWith(inputVal.toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setOutputs([]);
    }
  };

  const handleCopyOutput = () => {
    if (typeof window !== 'undefined') {
      const textToCopy = outputs.map(o => `${o.command ? `ridho@portfolio:~$ ${o.command}\n` : ''}${typeof o.content === 'string' ? o.content : ''}`).join('\n\n');
      navigator.clipboard.writeText(textToCopy);
      showToast('Terminal session output copied to clipboard!');
    }
  };

  return (
    <div className={`flex flex-col bg-[#0D1117] min-h-screen text-[#F0F6FC] font-mono selection:bg-[#58A6FF]/30 selection:text-[#F0F6FC]`}>
      
      {!bootCompleted && (
        <BootSequence onComplete={() => setBootCompleted(true)} />
      )}

      {/* Main Terminal Shell Container */}
      <div 
        ref={terminalContainerRef}
        onClick={handleContainerClick}
        className={`flex-1 flex flex-col w-full max-w-7xl mx-auto my-0 sm:my-4 rounded-none sm:rounded-xl border-0 sm:border border-[#30363D] bg-[#161B22] shadow-2xl overflow-hidden ${
          isFullscreen ? 'fixed inset-0 z-40 max-w-none rounded-none my-0 h-screen' : ''
        }`}
      >
        {/* Terminal Window Header */}
        <TerminalHeader
          onClear={() => setOutputs([])}
          onCopy={handleCopyOutput}
          onHelp={() => handleRunCommand('/help')}
          isFullscreen={isFullscreen}
          onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
        />

        {/* Scrollable Output Buffer */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs sm:text-sm min-h-[70vh]">
          {outputs.map((out) => (
            <div key={out.id} className="space-y-1">
              
              {/* Command Prompt Line (if present) */}
              {out.command && (
                <div className="flex items-center space-x-2 text-xs sm:text-sm pt-1">
                  <span className="text-[#58A6FF] font-bold">ridho@portfolio</span>
                  <span className="text-[#8B949E]">:</span>
                  <span className="text-[#3FB950] font-bold">~$</span>
                  <span className="text-[#F0F6FC] font-semibold">{out.command}</span>
                </div>
              )}

              {/* Rendered Content */}
              {out.content && (
                <div className="pl-0 sm:pl-2">
                  {typeof out.content === 'string' ? (
                    <pre className={`font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed ${
                      out.type === 'error' ? 'text-[#F85149]' :
                      out.type === 'success' ? 'text-[#3FB950]' :
                      out.type === 'warning' ? 'text-[#D29922]' :
                      out.type === 'info' ? 'text-[#58A6FF]' :
                      'text-[#F0F6FC]'
                    }`}>
                      {out.content}
                    </pre>
                  ) : (
                    out.content
                  )}
                </div>
              )}

            </div>
          ))}

          {/* Active Prompt Input Line */}
          <div className="flex items-center space-x-2 pt-2 text-xs sm:text-sm">
            <span className="text-[#58A6FF] font-bold shrink-0">ridho@portfolio</span>
            <span className="text-[#8B949E] shrink-0">:</span>
            <span className="text-[#3FB950] font-bold shrink-0">~$</span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                autoFocus
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type /help or command..."
                className="w-full bg-transparent text-[#F0F6FC] focus:outline-none font-mono text-xs sm:text-sm caret-[#58A6FF]"
              />
            </div>
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Command Quick Action Bar */}
        <CommandQuickBar onRunCommand={handleRunCommand} />

      </div>

      {/* Copy Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3FB950] text-[#0D1117] px-4 py-2 rounded-lg shadow-xl font-mono text-xs font-bold animate-bounce">
          {toastMessage}
        </div>
      )}

    </div>
  );
};
