// app/players/[id]/page.tsx (Server Component)
import Image from 'next/image';
import Link from 'next/link';

type Player = {
  id: number;
  name: string | null;
  position: string | null;
  image: string | null;
  biodata: string | null;
};

export default async function PlayerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/players/${params.id}`);
  const player: Player = await res.json();

  if ('error' in player) {
    return <div className="p-10 text-center text-red-500">Pemain tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">{player.name}</h1>
      <div className="relative w-80 h-80 mb-4">
        {player.image && (
          <Image
            src={player.image}
            alt={player.name ?? ''}
            fill
            className="rounded-lg object-cover"
          />
        )}
      </div>
      <p className="text-lg text-gray-700 mb-2">Posisi: {player.position}</p>
      <p className="text-center max-w-xl text-gray-600 mb-6">{player.biodata}</p>

      <Link href="/players">
        <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
          Kembali
        </button>
      </Link>
    </div>
  );
}
