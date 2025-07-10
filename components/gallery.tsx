'use client';

import Link from 'next/link';
import Image from 'next/image';

const players = [
  {
    name: 'David da Silva',
    image: '/player/dds.jpg',
    position: 'Striker',
  },
  {
    name: 'Marc Klok',
    image: '/player/klok.jpg',
    position: 'Midfielder',
  },
  {
    name: 'Beckham Putra',
    image: '/player/beckam.jpg',
    position: 'Winger',
  },
  {
    name: 'Nick Kuipers',
    image: '/player/nickkuiperss.jpg',
    position: 'Defender',
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

export default function Gallery() {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">Galeri Pemain Persib 2025</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="relative w-full h-60">
              <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{player.name}</h3>
              <p className="text-sm text-gray-600">{player.position}</p>
                <Link href={`/players/${index + 1}`}
                     className="text-blue-600 hover:underline block mt-2"> Lihat Profil
                </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
