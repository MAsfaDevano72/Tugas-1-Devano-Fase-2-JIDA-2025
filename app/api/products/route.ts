// app/api/products/route.ts
import { NextResponse } from 'next/server'
import { products } from '@/data/productData'

// GET: Mengambil semua produk
export async function GET() {
  return NextResponse.json(products)
}

// POST: Menambahkan produk baru
export async function POST(request: Request) {
  const { name, price } = await request.json()

  const newProduct = {
    id: crypto.randomUUID(),
    name,
    price,
  }

  products.push(newProduct)

  return NextResponse.json(newProduct, { status: 201 })
}
