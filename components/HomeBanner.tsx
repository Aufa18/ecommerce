import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface HomeBannerProps {
  className?: string;
}

const HomeBanner = ({ className }: HomeBannerProps) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl bg-linear-to-r from-[#e5e5e5] to-[#de8547] flex flex-col md:flex-row items-center justify-between min-h-112.5 md:min-h-125",
        className
      )}
    >
      {/* Bagian Kiri: Teks & Tombol */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-8 md:p-16 z-10 w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-2">
          Tur Terpandu
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-zinc-800 leading-tight mb-8">
          iPhone 17 Pro, iPhone Air, <br />
          dan iPhone 17
        </h2>

        <Button
          className="rounded-full px-8 py-6 text-base md:text-lg bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-lg hover:shadow-xl"
        >
          <Play className="w-5 h-5 mr-2 fill-white" />
          Tonton video
        </Button>
      </div>

      {/* Bagian Kanan: Gambar Subjek/Produk */}
      <div className="flex-1 relative w-full h-87.5 md:h-125 flex justify-center md:justify-end items-end">
        {/* Pastikan kamu menaruh file gambar PNG transparan atau WebP di folder public/images/ */}
        <Image
          src="/banner/banner.png" // Ganti dengan path gambar kamu yang sudah berformat .webp
          alt="Banner Ecommerce"
          fill
          priority // Penting untuk banner utama (LCP/Performa)
          className="object-cover md:object-contain object-bottom md:object-bottom-right drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
