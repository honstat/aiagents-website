import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "定价 - aiagents",
  description: "选择适合您企业的 aiagents 定价方案，从免费版到企业版，满足不同规模的需求。",
};

const plans = [
  {
    name: "Starter",
    price: "免费",
    period: "永久",
    description: "适合个人开发者和小型团队探索 AI 应用",
    features: [
      "1 个 AI 员工",
      "每月 100 次对话",
      "基础对话配置",
      "社区支持",
      "公共展示沙箱",
    ],
    cta: "开始使用",
    ctaVariant: "secondary" as const,
    popular: false,
  },
  {
    name: "Professional",
    price: "¥999",
    period: "每月",
    description: "适合成长型企业，构建完整的 AI 生产力系统",
    features: [
      "10 个 AI 员工",
      "每月 5,000 次对话",
      "高级对话配置 & 知识库",
      "私有化部署支持",
      "API 完整访问",
      "邮件与群聊支持",
      "工作流编排",
    ],
    cta: "立即购买",
    ctaVariant: "primary" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "联系定价",
    period: "定制",
    description: "适合大型组织，提供 SLA 保障与专属服务",
    features: [
      "无限制 AI 员工",
      "无限制对话次数",
      "私有化 / 混合部署",
      "SSO & 多租户",
      "专属客户成功经理",
      "99.9% SLA 保障",
      "定制化培训",
    ],
    cta: "联系销售",
    ctaVariant: "secondary" as const,
    popular: false,
  },
];

const faq = [
  { q: "免费版可以用多久？", a: "Starter 版本永久免费，无时间限制。" },
  { q: "可以升级或降级方案吗？", a: "可以。Professional 版本随时可升级或降级，次月生效。" },
  { q: "私有化部署如何收费？", a: "Professional 及以上版本支持私有化部署，具体报价根据规模定制，请联系销售。" },
  { q: "是否支持按量付费？", a: "Enterprise 版本支持灵活的用量计费方式，请与我们的销售团队联系。" },
  { q: "支付方式有哪些？", a: "支持支付宝、微信支付、对公转账及信用卡。" },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">简单透明的定价</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">从免费版到企业版，找到最适合您组织的方案。无隐藏费用，按需升级。</p>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 flex flex-col ${plan.popular ? "bg-blue-600 text-white ring-4 ring-blue-300 dark:ring-blue-800 scale-105" : "bg-gray-50 dark:bg-gray-800"}`}>
                {plan.popular && <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-blue-600 rounded-full mb-4 w-fit">最受欢迎</span>}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>{plan.name}</h3>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>{plan.price}</span>
                  {plan.period && <span className={`text-sm ml-1 ${plan.popular ? "text-blue-200" : "text-gray-500 dark:text-gray-400"}`}>/ {plan.period}</span>}
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-gray-600 dark:text-gray-400"}`}>{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-blue-200" : "text-blue-600 dark:text-blue-400"}`} />
                      <span className={`text-sm ${plan.popular ? "text-blue-50" : "text-gray-700 dark:text-gray-300"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant={plan.ctaVariant} className={`w-full ${plan.popular ? "bg-white text-blue-600 hover:bg-blue-50" : ""}`}>{plan.cta}</Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section dark>
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item) => (
              <div key={item.q} className="border-b border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">还有其他问题？</p>
            <Link href="/contact"><Button variant="secondary">联系我们</Button></Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
