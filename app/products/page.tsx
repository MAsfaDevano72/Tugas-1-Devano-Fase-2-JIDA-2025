'use client';

import { useEffect, useState } from 'react';
import { Product } from '../lib/definitions';

type FormData = {
  name: string;
  price: string;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<FormData>({ name: '', price: '' });
  const [editId, setEditId] = useState<number | null>(null);

  // Fetch produk dari API
  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name: form.name,
      price: parseInt(form.price),
    };

    const url = editId ? `/api/products/${editId}` : '/api/products';
    const method = editId ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });

    await fetchProducts();
    setForm({ name: '', price: '' });
    setEditId(null);
  };

  const handleEdit = (product: Product) => {
    setForm({ name: product.name, price: String(product.price) });
    setEditId(product.id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    await fetchProducts();
  };

  const handleCancelEdit = () => {
    setForm({ name: '', price: '' });
    setEditId(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Persib Store Produk</h1>

      {/* Form Produk */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
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
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {editId ? 'Update Produk' : 'Tambah Produk'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Batal Edit
            </button>
          )}
        </div>
      </form>

      {/* Daftar Produk */}
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded border shadow-sm"
          >
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-700">Rp {product.price.toLocaleString()}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
