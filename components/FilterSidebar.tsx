"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // 🟢 Import Accordion Shadcn UI

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
    <div className="flex items-center justify-between mb-6">
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

    {/* 🟢 Implementasi Accordion */}
    {/* type="multiple" mengizinkan lebih dari 1 tab terbuka.
        defaultValue={["categories", "brands"]} membuat keduanya terbuka otomatis di awal */}
    <Accordion type="multiple" defaultValue={["categories", "brands"]} className="w-full">

      {/* 📦 Tab Kategori */}
      <AccordionItem value="categories" className="border-b-zinc-200">
        <AccordionTrigger className="text-base font-semibold text-zinc-900 hover:no-underline py-4">
          Product Categories
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-1 pb-3">
            {categories.map(cat => (
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
        </AccordionContent>
      </AccordionItem>

      {/* 🏷️ Tab Brand */}
      <AccordionItem value="brands" className="border-b-zinc-200">
        <AccordionTrigger className="text-base font-semibold text-zinc-900 hover:no-underline py-4">
          Brands
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-1 pb-3">
            {brands.map(brand => (
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
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  </aside>
);
