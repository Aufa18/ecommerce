"use client";

import { Search, X, PackageX } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { productData } from '@/constants/data'; // 🟢 Import data produk

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // 🟢 UX Pro 1: Kunci scroll body & Kompensasi Scrollbar agar tidak geser
  useEffect(() => {
    if (isOpen) {
      // 1. Hitung lebar scrollbar bawaan sistem operasi (Windows/Mac)
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // 2. Kunci scroll dan tambahkan padding pengganti scrollbar
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      // 3. Kembalikan ke normal saat modal ditutup
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
      setQuery("");
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [isOpen]);

  // Tutup search bar jika menekan ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Submit form manual (Enter)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?query=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  // 🟢 LOGIKA LIVE SEARCH: Filter data secara real-time saat ngetik
  const liveResults = query.trim() === ""
    ? []
    : productData.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4); // Batasi maksimal 4 hasil agar UI tetap rapi

  return (
    <>
      {/* 🔍 Ikon Pemicu di Header */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-1 hover:text-orange-500 transition-colors duration-200"
        aria-label="Open Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* 🚀 Modal Search Mengapung */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center px-4 md:px-0">

          {/* Overlay Gelap */}
          <div
            className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Kotak Utama */}
          <div className="relative w-full max-w-2xl bg-white mt-20 md:mt-32 h-fit rounded-2xl shadow-2xl border border-zinc-200 animate-in zoom-in-95 fade-in duration-200 overflow-hidden flex flex-col">

            {/* 1. Area Input */}
            <form onSubmit={handleSearch} className="flex items-center gap-3 px-6 py-4">
              <Search className="w-6 h-6 text-orange-500 flex-shrink-0" />

              <input
                ref={inputRef}
                type="text"
                placeholder="Search products, brands..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-lg md:text-xl font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
              />

              <div className="flex items-center gap-3 flex-shrink-0">
                <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-medium rounded-md border border-zinc-200">
                  ESC
                </kbd>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* 2. Area Live Results (Muncul hanya jika user mengetik) */}
            {query.trim() !== "" && (
              <div className="border-t border-zinc-100 bg-zinc-50/50 max-h-[60vh] overflow-y-auto">

                {/* Jika ada hasil */}
                {liveResults.length > 0 ? (
                  <div className="p-2">
                    <p className="px-4 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Products
                    </p>
                    {liveResults.map((product) => (
                      <Link
                        href={`/shop/${product.id}`}
                        key={product.id}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-3 hover:bg-white rounded-xl transition-colors group cursor-pointer"
                      >
                        {/* Thumbnail Gambar */}
                        <div className="relative w-14 h-14 bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-200/50">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                            sizes="56px"
                          />
                        </div>

                        {/* Info Produk */}
                        <div className="flex-1 flex flex-col justify-center">
                          <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors line-clamp-1">
                            {product.name}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-0.5">
                            {product.category} &bull; {product.brand}
                          </p>
                        </div>

                        {/* Harga */}
                        <div className="font-bold text-sm text-zinc-900 pr-2">
                          Rp {product.price.toLocaleString('id-ID')}
                        </div>
                      </Link>
                    ))}

                    {/* Tombol "See all results" */}
                    <button
                      onClick={handleSearch}
                      className="w-full mt-2 py-3 text-sm font-medium text-orange-500 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
                    >
                      View all results for &quot;{query}&quot; &rarr;
                    </button>
                  </div>
                ) : (
                  <div className="px-6 py-12 flex flex-col items-center justify-center text-center">
                    <PackageX className="w-10 h-10 text-zinc-300 mb-3" />
                    <p className="text-sm font-medium text-zinc-900">No results found</p>
                    <p className="text-xs text-zinc-500 mt-1">
                      We couldn&apos;t find anything matching &quot;{query}&quot;
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
