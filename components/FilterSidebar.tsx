"use client";

import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  "Tech & Accessories",
  "Gaming & Hardware",
  "Apparel & Footwear",
  "Electronics",
  "Home & Living",
  "Home & Essentials",
  "Digital Devices",
  "Software"
];

const brands = ["Apple", "Microsoft", "Adidas", "Acer", "3M", "Amazon", "Google", "Adobe"];

interface FilterSidebarProps {
  selectedCategories: string[];
  selectedBrands: string[];
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onClearAll: () => void;
}

export const FilterSidebar = ({
  selectedCategories,
  selectedBrands,
  onCategoryChange,
  onBrandChange,
  onClearAll,
}: FilterSidebarProps) => (
  <aside className="w-64 pr-8 hidden md:block flex-shrink-0">
    <div className="flex items-center justify-between mb-6 mt-6">
      <h2 className="text-xl font-bold">Filters</h2>
      {/* Tombol reset opsional untuk membersihkan filter */}
      {selectedCategories.length > 0 || selectedBrands.length > 0 ? (
        <button
          onClick={onClearAll}
          className="text-xs text-zinc-500 hover:text-zinc-900 underline transition-colors"
        >
          Clear All
        </button>
      ) : null}
    </div>

    <div className="w-full space-y-6">
      <div>
        <h3 className="text-base font-semibold text-zinc-900 py-4">Product Categories</h3>
        <div className="space-y-3 pt-1 pb-3">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-3">
              <Checkbox
                id={cat}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() => onCategoryChange(cat)}
                className="rounded-[4px] border-zinc-300 data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900"
              />
              <label
                htmlFor={cat}
                className="text-sm font-medium leading-none text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors"
              >
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-zinc-900 py-4">Brands</h3>
        <div className="space-y-3 pt-1 pb-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-3">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => onBrandChange(brand)}
                className="rounded-[4px] border-zinc-300 data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900"
              />
              <label
                htmlFor={brand}
                className="text-sm font-medium leading-none text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
);
