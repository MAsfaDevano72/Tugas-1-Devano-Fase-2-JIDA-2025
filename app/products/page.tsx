'use client'

import { useEffect, useState } from 'react';
import Navbar from '@/app/ui/dashboard/navbar';


type Product = {
  id: string
  name: string
  price: number
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState({ name: '', price: '' })
  const [editId, setEditId] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editId) {
      // Update
      await fetch(`/api/products/${editId}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: form.name,
          price: parseInt(form.price),
        }),
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      // Tambah
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({
          name: form.name,
          price: parseInt(form.price),
        }),
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Refresh list
    const data = await fetch('/api/products').then((res) => res.json())
    setProducts(data)
    setForm({ name: '', price: '' })
    setEditId(null)
  }

  const handleEdit = (product: Product) => {
    setForm({ name: product.name, price: String(product.price) })
    setEditId(product.id)
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' })
    const data = await fetch('/api/products').then((res) => res.json())
    setProducts(data)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
        
      <h1 className="text-2xl font-bold mb-4 text-center">Persib Store Produk</h1>

      {/* Form Produk */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Nama Produk"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Harga Produk"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {editId ? 'Update Produk' : 'Tambah Produk'}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null)
              setForm({ name: '', price: '' })
            }}
            className="ml-2 text-sm underline text-red-600"
          >
            Batal Edit
          </button>
        )}
      </form>

      {/* Daftar Produk */}
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border-2 p-4 rounded shadow-sm flex justify-between items-center border-black bg-slate-100">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-800">Rp {product.price.toLocaleString()}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-500 px-2 py-1 text-white rounded hover:bg-yellow-400"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 px-2 py-1 text-white rounded hover:bg-red-500"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
