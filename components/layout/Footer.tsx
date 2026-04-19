import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";

const footerLinks = {
  产品: [
    { label: "AIEmployee", href: "/products/aiemployee" },
    { label: "Agent Workers", href: "/products/agent-workers" },
    { label: "TaskFlow", href: "/products/taskflow" },
  ],
  公司: [
    { label: "关于我们", href: "/about" },
    { label: "联系我们", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
                a
              </div>
              <span className="text-xl font-semibold text-white">aiagents</span>
            </div>
            <p className="text-gray-400 max-w-md">
              aiagents 致力于打造新一代AI原生应用平台，帮助企业快速构建和部署智能化解决方案，加速数字化转型。
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} aiagents. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
