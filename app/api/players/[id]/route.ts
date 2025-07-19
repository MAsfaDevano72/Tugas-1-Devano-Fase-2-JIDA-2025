// app/api/players/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { Prisma } from '@/generated/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const player = await prisma.playerData.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!player) {
    return NextResponse.json({ error: 'Player not found' }, { status: 404 });
  }

  return NextResponse.json(player);
}
