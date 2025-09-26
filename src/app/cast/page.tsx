import CastCard from '@/components/CastCard';
import { castaways } from '@/lib/castaways';

export default function CastPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold tracking-tight">Cast</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {castaways.map((c) => (
          <CastCard key={c.name} castaway={c} />
        ))}
      </div>
    </div>
  );
}
