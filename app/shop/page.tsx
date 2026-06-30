"use client"; // 🟢 Wajib ditambahkan karena kita menggunakan useState

import { useState } from "react";
import { FilterSidebar } from "@/components/FilterSidebar"; // Sesuaikan path jika berbeda
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { productData } from "@/constants/data";

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  const filteredProducts = productData.filter((product) => {
    if (selectedCategories.length === 0 && selectedBrands.length === 0) return true;

    const categoryMatches =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatches = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return categoryMatches && brandMatches;
  });

  return (
    <Container className="py-8">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>

      <div className="flex flex-col md:flex-row gap-10">

        {/* 🟢 4. Kirim state dan fungsi handler ke Sidebar */}
        <FilterSidebar
          selectedCategories={selectedCategories}
          selectedBrands={selectedBrands}
          onCategoryChange={handleCategoryChange}
          onBrandChange={handleBrandChange}
          onClearAll={handleClearAll}
        />

        {/* Konten Utama Kanan */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            {/* 🟢 Tampilkan jumlah hasil hanya saat filter aktif */}
            {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
              <p className="text-zinc-500">Showing {filteredProducts.length} results</p>
            )}
          </div>

          {/* 🟢 5. Looping menggunakan filteredProducts (Bukan productData asli) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Tampilan jika filter tidak menemukan produk */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center w-full">
              <p className="text-zinc-500 text-lg">Oops! No products found in this category.</p>
            </div>
          )}

        </div>
      </div>
    </Container>
  );
}
