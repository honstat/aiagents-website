import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/home/ProductCard";
import Button from "@/components/ui/Button";
import { products } from "@/lib/data";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <Section id="products" dark>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            核心产品
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            从智能员工到工作流引擎，aiagents 提供完整的企业智能化解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button variant="secondary" size="lg">
              查看全部产品
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
