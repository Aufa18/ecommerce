"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    price: number;
    category: string;
    image: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group border border-zinc-200 rounded-2xl p-4 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* 🟢 AREA KLIK GAMBAR: Mengarah ke Detail Produk */}
        <Link href={`/shop/${product.id}`} className="cursor-pointer block">
          <div className="relative w-full h-56 bg-zinc-50 rounded-xl mb-4 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              // 🟢 PERBAIKAN OPTIMASI: Menghilangkan warning 'sizes' Next.js
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={product.id <= 4} // Mengutamakan 4 produk pertama untuk LCP
            />
            {/* Wishlist Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah klik tombol memicu Link detail
                // Logika Wishlist kamu di sini
              }}
              className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-zinc-500 hover:text-red-500 transition-colors z-10"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </Link>

        {/* Info Produk */}
        <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{product.category}</p>

        {/* 🟢 AREA KLIK JUDUL: Mengarah ke Detail Produk */}
        <Link href={`/shop/${product.id}`} className="cursor-pointer block group-hover:text-orange-600 transition-colors">
          <h3 className="font-semibold text-zinc-900 leading-tight mb-2 line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400 mb-3">
          <Star className="w-4 h-4 fill-orange-400" />
          <span className="text-sm text-zinc-600 font-medium">4.8</span>
          <span className="text-xs text-zinc-400">(128)</span>
        </div>
      </div>

      {/* Harga & Button Add to Cart */}
      <div className="flex items-center justify-between mt-4 pt-2 border-t border-zinc-50">
        <div className="flex flex-col">
          <span className="text-base font-bold text-zinc-950">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
        </div>
        <Button size="sm" className="rounded-full bg-zinc-900 hover:bg-zinc-800 text-white px-4">
          <ShoppingCart className="w-4 h-4 mr-1.5" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
