import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "产品", href: "/products" },
  { label: "定价", href: "/pricing" },
  { label: "博客", href: "/blog" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">a</div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">aiagents</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" aria-label="菜单">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
