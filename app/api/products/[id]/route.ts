// app/api/products/[id]/route.ts
import { NextResponse } from 'next/server'
import { products } from '@/data/productData'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { name, price } = await request.json()
  const index = products.findIndex((p) => p.id === params.id)

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  products[index] = {
    ...products[index],
    name: name ?? products[index].name,
    price: price ?? products[index].price,
  }

  return NextResponse.json(products[index])
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = products.findIndex((p) => p.id === params.id)

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const deleted = products.splice(index, 1)

  return NextResponse.json({ deleted: deleted[0] })
}
