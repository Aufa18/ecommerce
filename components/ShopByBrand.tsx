import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, RefreshCcw, Headset, ShieldCheck } from 'lucide-react';
import { brandData } from '@/constants/data';

const features = [
  { icon: Truck, title: "Free Delivery", desc: "Free shipping over $100" },
  { icon: RefreshCcw, title: "Free Return", desc: "Free shipping over $100" },
  { icon: Headset, title: "Customer Support", desc: "Friendly 24/7 customer support" },
  { icon: ShieldCheck, title: "Money Back Guarantee", desc: "Quality checked by our team" },
];

const ShopByBrands = () => {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-950">Shop By Brands</h2>
        <Link
          href="/shop"
          className="text-sm font-semibold text-zinc-900 hover:underline transition-all"
        >
          View all
        </Link>
      </div>

      {/* Brand Logos Slider */}
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-4 mb-12">
        {brandData.map((brand, index) => (
          <div
            key={index}
            // 🟢 PERBAIKAN: Ubah background menjadi gradasi putih-ke-orenan (peach) yang elegan
            className="group flex-shrink-0 w-36 h-24 md:w-44 md:h-28 bg-gradient-to-br from-white-50 to-white-100 border border-black-200 rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md hover:shadow-black-200/50 hover:border-black-300 transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image
                src={brand.src}
                alt={`${brand.name} Logo`}
                fill
                // 🟢 TAMBAHAN UX: Efek scale membesar saat kartu di-hover agar lebih hidup
                className="object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Features / Services Row */}
      <div className="bg-white border border-zinc-200/50 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-zinc-700">
                <feature.icon className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-zinc-900 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByBrands;
