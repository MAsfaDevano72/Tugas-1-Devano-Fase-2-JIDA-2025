import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma'; // pastikan ini sesuai path kamu

export async function GET() {
  try {
    const players = await prisma.playerData.findMany();
    return NextResponse.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
