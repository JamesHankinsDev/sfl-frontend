'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh md:pl-64">
      <Sidebar open={open} />

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          aria-hidden
        />
      )}

      <div className="relative z-10 flex min-h-dvh flex-col">
        <Header onToggleNav={() => setOpen((v) => !v)} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
