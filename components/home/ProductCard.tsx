import React from "react";
import { Product } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all">
      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
        <span className="text-2xl">⚡</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
        {product.description}
      </p>
      <Link
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium hover:gap-2 transition-all"
      >
        了解更多 <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
