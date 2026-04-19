import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            让每个企业都拥有
            <span className="text-blue-600 dark:text-blue-400"> AI 原生</span>
            能力
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            aiagents 提供新一代AI员工和智能工作流平台，助力企业快速构建智能化业务流程，提升效率，降低成本。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg">了解产品</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                联系我们
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
