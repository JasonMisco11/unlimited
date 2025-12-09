"use client";

const brands = [
  "Amazon", "AliExpress", "Shein", "eBay", 
  "Zara", "Apple", "Walmart", "Asos", 
  "FashionNova", "Alibaba"
];

export function BrandMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-6">
      <div className="flex w-full">
        {/* Wrapper for the seamless loop */}
        <div className="animate-marquee flex items-center">
          {/* Set 1 */}
          {brands.map((brand, index) => (
            <span
              key={index}
              className="mx-8 text-2xl font-bold text-neutral-300 dark:text-neutral-700 uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
          
          {/* Set 2 (Duplicate for seamless loop) */}
          {brands.map((brand, index) => (
            <span
              key={"dup" + index}
              className="mx-8 text-2xl font-bold text-neutral-300 dark:text-neutral-700 uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
           {/* Set 3 (Extra buffer for wide screens) */}
           {brands.map((brand, index) => (
            <span
              key={"dup2" + index}
              className="mx-8 text-2xl font-bold text-neutral-300 dark:text-neutral-700 uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}