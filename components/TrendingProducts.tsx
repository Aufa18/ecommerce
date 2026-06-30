import React from 'react';
import { productData } from '@/constants/data';
import { Button } from './ui/button';
import Image from 'next/image';
import { Star, Heart } from 'lucide-react';
import Link from 'next/link';

const TrendingProducts = () => {
  // Kita ambil 4 produk pertama sebagai sampel "Trending"
  const trending = productData.slice(0, 4);

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-950">Trending Now</h2>
        <Link href="/shop" className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trending.map((product) => (
          <div key={product.id} className="group border border-zinc-200 rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative w-full h-60 bg-zinc-100 rounded-xl mb-4 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Product Details */}
            <div className="flex items-center gap-1 text-orange-500 mb-1">
              <Star className="w-4 h-4 fill-orange-500" />
              <span className="text-sm text-zinc-600">4.8</span>
            </div>
            <h3 className="font-semibold text-zinc-900 truncate">{product.name}</h3>
            <p className="text-zinc-500 font-medium mb-4">${product.price.toLocaleString()}</p>

            <Button variant="outline" className="w-full rounded-full border-zinc-300 hover:bg-zinc-950 hover:text-white">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
