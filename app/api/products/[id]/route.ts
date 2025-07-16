// app/api/products/[id]/route.ts
import { NextResponse } from 'next/server'
import { products } from '@/data/productData'

function extractIdFromUrl(url: string): string {
  const parts = url.split('/')
  return parts[parts.length - 1] // ambil bagian terakhir dari path sebagai id
}

export async function GET(request: Request) {
  const id = extractIdFromUrl(request.url)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}

export async function PUT(request: Request) {
  const id = extractIdFromUrl(request.url)
  const { name, price } = await request.json()
  const index = products.findIndex((p) => p.id === id)

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

export async function DELETE(request: Request) {
  const id = extractIdFromUrl(request.url)
  const index = products.findIndex((p) => p.id === id)

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const deleted = products.splice(index, 1)

  return NextResponse.json({ deleted: deleted[0] })
}
