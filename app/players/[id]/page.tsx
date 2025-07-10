'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Data pemain
const players = [
  {
    id: '1',
    name: 'David da Silva',
    image: '/player/dds.jpg',
    position: 'Striker',
    bio: 'David da Silva adalah penyerang tajam asal Brasil yang menjadi andalan Persib Bandung.',
  },
  {
    id: '2',
    name: 'Marc Klok',
    image: '/player/klok.jpg',
    position: 'Midfielder',
    bio: 'Marc Klok adalah gelandang kreatif yang punya visi bermain luar biasa.',
  },
  {
    id: '3',
    name: 'Beckham Putra',
    image: '/player/beckam.jpg',
    position: 'Winger',
    bio: 'Beckham Putra Nugraha adalah pemain muda berbakat Persib dengan kecepatan luar biasa.',
  },
  {
    id: '4',
    name: 'Nick Kuipers',
    image: '/player/nickkuiperss.jpg',
    position: 'Defender',
    bio: 'Nick Kuipers adalah bek tangguh asal Belanda yang memperkuat lini belakang Persib.',
  },
];

type Props = {
  params: {
    id: string;
  };
};

export default function PlayerDetailPage({ params }: Props) {
  const router = useRouter();
  const player = players.find((p) => p.id === params.id);

  if (!player) {
    return <div className="p-10 text-center text-red-500">Pemain tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-950 mb-6">{player.name}</h1>
      <div className="relative w-80 h-80 mb-4">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <p className="text-lg text-gray-700 mb-2">Posisi: {player.position}</p>
      <p className="text-center max-w-xl text-gray-600 mb-6">{player.bio}</p>

      <button
        onClick={() => router.back()}
        className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
      >
        Kembali
      </button>
    </div>
  );
}
