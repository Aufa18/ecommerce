'use client';

import { productData } from "@/constants/data";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { Heart, ShoppingCart, Star, Minus, Plus } from 'lucide-react';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [product, setProduct] = useState<typeof productData[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const foundProduct = productData.find((p) => p.id === id);

    if (foundProduct) {
      setProduct(foundProduct);
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <Container className="py-16">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="w-full h-[500px] bg-zinc-200 rounded-3xl" />
            <div>
              <div className="h-8 bg-zinc-200 rounded mb-4 w-1/4" />
              <div className="h-10 bg-zinc-200 rounded mb-4 w-3/4" />
              <div className="h-8 bg-zinc-200 rounded mb-4 w-1/2" />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (!product) {
    notFound();
  }

  const handleQuantityChange = (value: number) => {
    if (value > 0) setQuantity(value);
  };

  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Sisi Kiri: Gambar */}
        <div className="relative w-full h-[500px] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-zinc-400'}`} />
          </button>
        </div>

        {/* Sisi Kanan: Info */}
        <div className="flex flex-col justify-center">
          {/* Brand */}
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">{product.brand}</p>

          {/* Category */}
          <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4">{product.category}</p>

          {/* Title */}
          <h1 className="text-4xl font-bold mt-2 mb-4 text-zinc-900">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1 text-orange-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-400" />
              ))}
            </div>
            <span className="text-sm text-zinc-600 font-medium">(128 Reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-zinc-950 mb-6">Rp {product.price.toLocaleString('id-ID')}</p>

          {/* Description */}
          <div className="text-zinc-600 mb-8">
            <p>
              Produk berkualitas premium dari brand terpercaya. Dengan fitur terbaik di kelasnya,
              produk ini dirancang untuk memenuhi kebutuhan Anda dengan sempurna.
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-zinc-700">Quantity:</span>
            <div className="flex items-center border border-zinc-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="p-2 hover:bg-zinc-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-12 text-center border-0 focus:outline-none"
                min="1"
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-2 hover:bg-zinc-100 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button size="lg" className="w-full md:w-auto rounded-full px-12 bg-zinc-900 hover:bg-zinc-800 text-white">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Container>
  );
}
