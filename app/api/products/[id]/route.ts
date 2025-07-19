import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();

  const updated = await prisma.product.update({
    where: { id },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const deleted = await prisma.product.delete({
    where: { id },
  });

  return NextResponse.json(deleted);
}
