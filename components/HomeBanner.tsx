import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface HomeBannerProps {
  className?: string;
}

const HomeBanner = ({ className }: HomeBannerProps) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl bg-linear-to-r from-[#e5e5e5] to-[#de8547] flex flex-col sm:flex-row items-center justify-between sm:min-h-[340px] md:min-h-[360px]",
        className
      )}
    >
      {/* Bagian Kiri: Teks & Tombol */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left p-8 md:p-16 z-10 w-full md:w-[55%]">
        <h1 className="text-2xl md:text-4xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-2">
          Iconic Brands, One Destination.
        </h1>
        <p className="text-base md:text-lg font-semibold text-zinc-700 leading-relaxed mb-8">
          Discover a handpicked <br />
          selection of premium gear and lifestyle products.
        </p>

        <Button
          className="rounded-full px-8 py-6 text-base md:text-lg bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-lg hover:shadow-xl"
        >
          <ShoppingCart className="w-5 h-5 mr-2 fill-white" />
          Shop Now
        </Button>
      </div>

      {/* Bagian Kanan: Gambar Subjek/Produk */}
      <div className="hidden md:flex relative w-full h-[240px] sm:h-[280px] md:h-110 md:flex-1 justify-center md:justify-end items-end mt-4 md:mt-0">
        <Image
          src="/banner/banner.webp"
          alt="Banner Ecommerce"
          fill
          priority
          className="object-contain object-bottom scale-[1.05] md:object-bottom-right drop-shadow-2xl md:pr-12"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
