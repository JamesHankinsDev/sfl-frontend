'use client';

import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/cast', label: 'Cast' },
  { href: '/leagues', label: 'Leagues' },
  { href: '/scores', label: 'Scores' },
];

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={[
        'fixed inset-y-0 left-0 z-50 w-64 transform border-r border-zinc-200 bg-white p-4 transition-transform duration-300 ease-out',
        'dark:border-zinc-800 dark:bg-zinc-900',
        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
      ].join(' ')}
    >
      <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        Navigation
      </div>
      <nav className="space-y-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
