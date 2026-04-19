import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductsSection from "@/components/home/ProductsSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductsSection />
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              准备好开始了吗？
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              无论是探索产品还是联系我们，我们的团队随时准备为您提供帮助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg">探索产品</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  预约演示
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
