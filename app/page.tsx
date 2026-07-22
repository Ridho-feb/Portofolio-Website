'use client';

import React from 'react';
import { TerminalWindow } from '@/components/Terminal/TerminalWindow';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] flex flex-col justify-between">
      <TerminalWindow />
    </main>
  );
}
