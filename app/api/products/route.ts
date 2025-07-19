import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import { Prisma } from '@/generated/prisma'; // pastikan ini benar

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { id: 'desc' }
  });
  return NextResponse.json(products);
}


export async function POST(req: Request) {
  const body = await req.json();

  const { name, price } = body;

  const newProduct = await prisma.product.create({
    data: {
      name,
      price,
    },
  });

  return NextResponse.json(newProduct);
}