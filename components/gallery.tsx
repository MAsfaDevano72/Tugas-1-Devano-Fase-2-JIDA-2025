'use client';

import { useEffect, useState } from 'react';

type Player = {
  id: number;
  name: string;
  position: string;
  image: string;
  biodata: string;
};

export default function GalleryPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const res = await fetch('/api/players');
        const data = await res.json();
        setPlayers(data);
      } catch (error) {
        console.error('Failed to fetch players:', error);
      }
    }

    fetchPlayers();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">Skuad Persib 2024/2025</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-white rounded-2xl shadow-md p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{player.name}</h2>
            <p className="text-sm text-gray-600">{player.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
