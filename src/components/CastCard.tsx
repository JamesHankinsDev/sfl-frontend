'use client';

import Image from 'next/image';
import { useState } from 'react';
import TribeBadge from './TribeBadge';
import type { Castaway } from '@/lib/castaways';
import clsx from 'clsx';

export default function CastCard({ castaway }: { castaway: Castaway }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-[360px] w-[260px] rounded-[14px] shadow-lg ring-1 ring-black/5 dark:ring-white/10"
      style={{
        clipPath:
          'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
      }}
    >
      <div
        className="h-full w-full rounded-[14px] bg-white/70 backdrop-blur dark:bg-zinc-900/70"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 550ms cubic-bezier(.2,.8,.2,1)',
        }}
      >
        {/* front */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-40 w-full overflow-hidden rounded-t-[14px]">
            <Image
              src={castaway.image}
              alt={`${castaway.name} — ${castaway.tribe}`}
              fill
              className="object-cover"
              sizes="260px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />
          </div>

          <div className="flex h-[calc(100%-10rem)] flex-col justify-between p-4">
            <div className="space-y-2">
              <TribeBadge tribe={castaway.tribe} />
              <h3 className="text-lg font-semibold tracking-tight">
                {castaway.name}
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Tap to flip
              </span>
              <button
                onClick={() => setFlipped(true)}
                className="rounded-md bg-zinc-900/5 px-2 py-1 text-xs hover:bg-zinc-900/10 dark:bg-white/10 dark:hover:bg-white/15"
              >
                Stats →
              </button>
            </div>
          </div>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 rounded-[14px] p-4"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-sm font-semibold tracking-wide">
              {`${castaway.name.split(' ')[0]}'s Scoring`}
            </h4>
            <TribeBadge tribe={castaway.tribe} />
          </div>

          <dl className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-lg bg-zinc-900/5 p-3 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
              <dt className="opacity-60">Total</dt>
              <dd className="mt-1 text-base font-bold">
                {castaway.stats?.totalPoints ?? 0}
              </dd>
            </div>
            <div className="rounded-lg bg-zinc-900/5 p-3 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
              <dt className="opacity-60">Immunity</dt>
              <dd className="mt-1 text-base font-bold">
                {castaway.stats?.immunitiesWon ?? 0}
              </dd>
            </div>
            <div className="rounded-lg bg-zinc-900/5 p-3 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
              <dt className="opacity-60">Votes</dt>
              <dd className="mt-1 text-base font-bold">
                {castaway.stats?.votesReceived ?? 0}
              </dd>
            </div>
          </dl>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setFlipped(false)}
              className="rounded-md bg-zinc-900/5 px-2 py-1 text-xs hover:bg-zinc-900/10 dark:bg-white/10 dark:hover:bg-white/15"
            >
              ← Front
            </button>
          </div>
        </div>
      </div>

      {/* tiny corner accents */}
      <div className="pointer-events-none absolute right-2 top-2 h-3 w-3 rounded-sm border border-zinc-300 dark:border-zinc-700" />
      <div className="pointer-events-none absolute left-2 bottom-2 h-3 w-3 rounded-sm border border-zinc-300 dark:border-zinc-700" />
    </div>
  );
}
