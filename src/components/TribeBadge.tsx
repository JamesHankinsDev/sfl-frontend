import type { Tribe } from '@/lib/castaways';
import clsx from 'clsx';

const tribeStyles: Record<Tribe, { bg: string; text: string; ring: string }> = {
  Hina: {
    bg: 'bg-rose-500/15',
    text: 'text-rose-500',
    ring: 'ring-rose-500/40',
  },
  Uli: {
    bg: 'bg-indigo-500/15',
    text: 'text-indigo-500',
    ring: 'ring-indigo-500/40',
  },
  Kele: {
    bg: 'bg-emerald-500/15',
    text: 'text-emerald-500',
    ring: 'ring-emerald-500/40',
  },
};

export default function TribeBadge({ tribe }: { tribe: Tribe }) {
  const s = tribeStyles[tribe];
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ring-1',
        s.bg,
        s.text,
        s.ring
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {tribe}
    </span>
  );
}
