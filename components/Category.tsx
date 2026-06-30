import { categoriesData } from '@/constants/data';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Category = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-zinc-950">
        Shop by Category
      </h2>

      {/* Container Scrollable */}
      <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-0">
        {categoriesData.map((item, index) => (
          <Link
            href="/shop"
            key={item.title}
            className="relative flex-shrink-0 w-60 h-80 rounded-2xl overflow-hidden group shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image Component */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 240px, 240px"
            />

            {/* Gradient Overlay untuk teks agar terbaca jelas */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Title */}
            <div className="absolute bottom-6 left-6 text-white font-bold text-xl">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
