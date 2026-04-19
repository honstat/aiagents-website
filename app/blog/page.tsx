import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "博客 - aiagents",
  description: "了解 AI Agent 技术动态、产品更新和行业洞察。",
};

const posts = [
  {
    slug: "aiemployee-for-enterprise",
    title: "AIEmployee 如何助力企业数字化转型",
    excerpt: "本文探讨 AIEmployee 如何通过智能化员工概念，帮助企业实现降本增效，涵盖客服自动化、数据分析和内容创作等多个场景。",
    date: "2026-04-10",
    category: "产品洞察",
    readTime: "5 分钟",
  },
  {
    slug: "agent-workflow-automation",
    title: "多 Agent 协作：Agent Workers 工作流自动化实战",
    excerpt: "深入解析 Agent Workers 的多智能体协作引擎，如何通过并行与串行执行，让复杂业务流程实现自动化，效率提升高达 10 倍。",
    date: "2026-04-05",
    category: "技术解读",
    readTime: "7 分钟",
  },
  {
    slug: "taskflow-ai-dispatching",
    title: "TaskFlow 智能任务分配：让合适的人做合适的事",
    excerpt: "TaskFlow 的 AI 驱动任务拆解与智能分配功能，如何帮助项目管理团队将大型项目分解为可执行的最小任务单元，并精准匹配执行者。",
    date: "2026-03-28",
    category: "产品洞察",
    readTime: "4 分钟",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">博客</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">AI Agent 技术动态、产品更新与行业洞察</p>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400">阅读全文 <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
