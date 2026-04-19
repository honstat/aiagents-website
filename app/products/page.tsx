import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/lib/data";

export const metadata = {
  title: "产品 - aiagents",
  description: "了解 aiagents 全系列AI产品，找到适合您企业的解决方案。",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              产品概览
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              从智能员工到工作流引擎，aiagents 提供完整的企业智能化解决方案
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
