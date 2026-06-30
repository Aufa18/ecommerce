import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
// Hapus import productData dari sini, karena datanya akan dikirim dari ShopPage

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
    <div className="group border border-zinc-200 rounded-2xl p-4 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Gambar Produk */}
      <Link href={`/shop/${product.id}`}>
        <div className="relative w-full h-56 bg-zinc-50 rounded-xl mb-4 overflow-hidden">
          <Image
            src={product.image} // 🟢 PERBAIKAN: Gunakan product.image, bukan productData.image
            alt={product.name} // 🟢 PERBAIKAN: Gunakan product.name, bukan productData.name
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-zinc-500 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </Link>

      {/* Info Produk */}
      <div className="flex-1">
        <h3 className="font-semibold text-zinc-900 leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400 mb-3">
          <Star className="w-4 h-4 fill-orange-400" />
          <span className="text-sm text-zinc-600 font-medium">4.8</span>
          <span className="text-xs text-zinc-400">(128 Reviews)</span>
        </div>
      </div>

      {/* Harga & Button */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-zinc-950">
            {/* Format Rupiah yang lebih rapi */}
            Rp {product.price.toLocaleString("id-ID")}
          </span>
        </div>
        <Button
          size="sm"
          className="rounded-full bg-zinc-900 hover:bg-zinc-800 text-white"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
