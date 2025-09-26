'use client';

import { Menu, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header({ onToggleNav }: { onToggleNav: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-zinc-200 bg-white/80 px-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
      <button
        onClick={onToggleNav}
        className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 md:hidden"
        aria-label="Toggle navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="font-semibold tracking-tight">
        Survivor Fantasy League
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
        <button
          className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
