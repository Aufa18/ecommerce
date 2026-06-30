"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FilterSidebar } from "@/components/FilterSidebar";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { productData } from "@/constants/data";
import { SearchX } from "lucide-react";

// Komponen Konten Toko Utama yang membaca searchParams
function ShopContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query")?.toLowerCase() || "";

  const categoryQuery = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    if (categoryQuery) {
      // Masukkan kategori dari URL ke dalam array selectedCategories
      // Ini akan membuat Checkbox di Sidebar otomatis tercentang!
      setSelectedCategories([categoryQuery]);
    }
  }, [categoryQuery]);

  // Handler Perubahan Checkbox Kategori
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Handler Perubahan Checkbox Brand
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Handler Hapus Semua Filter
  const handleClearAll = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  // 🟢 3. Logika Super Filter: Menggabungkan Search Query + Kategori + Brand
  const filteredProducts = productData.filter((product) => {
    // A. Filter Teks Pencarian
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery) || product.brand.toLowerCase().includes(searchQuery)
      : true;

    // B. Filter Kategori
    const matchesCategory = selectedCategories.length === 0
      || selectedCategories.includes(product.category);

    // C. Filter Brand
    const matchesBrand = selectedBrands.length === 0
      || selectedBrands.includes(product.brand);

    // Produk lolos jika memenuhi ketiga kriteria di atas
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Sidebar Filter Kiri */}
      <FilterSidebar
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
        onCategoryChange={handleCategoryChange}
        onBrandChange={handleBrandChange}
        onClearAll={handleClearAll}
      />

      {/* Konten Utama Grid Produk Kanan */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
          <p className="text-sm text-zinc-600 font-medium">
            Showing <span className="text-zinc-950 font-bold">{filteredProducts.length}</span> products
            {searchQuery && ` for "${searchParams.get("query")}"`}
          </p>
        </div>

        {/* Grid Render Produk */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* 🟢 EMPTY STATE: Tampilan jika produk tidak ditemukan */
          <div className="py-24 flex flex-col items-center justify-center text-center bg-white border border-dashed border-zinc-200 rounded-3xl p-8 shadow-inner">
            <div className="p-4 bg-zinc-50 text-zinc-400 rounded-full mb-4">
              <SearchX className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-1">No Products Found</h3>
            <p className="text-sm text-zinc-500 max-w-sm mb-6">
              We couldn&apos;t find anything matching your current filters or search terms. Try adjusting them!
            </p>
            {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
              <button
                onClick={handleClearAll}
                className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full text-sm font-semibold transition-colors shadow-sm"
              >
                Reset Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Halaman Utama dengan Suspense Boundary (Wajib di Next.js saat membaca useSearchParams)
export default function ShopPage() {
  return (
    <Container className="py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-950">
        All Products
      </h1>
      <Suspense fallback={<div className="text-center py-20 text-zinc-500 text-sm">Loading Store...</div>}>
        <ShopContent />
      </Suspense>
    </Container>
  );
}
