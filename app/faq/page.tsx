import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "常见问题 - aiagents",
  description: "关于 aiagents 产品和服务的常见问题解答。",
};

const faqs = [
  {
    category: "产品相关",
    items: [
      { q: "aiagents 的产品适合哪些企业？", a: "我们的产品适用于各行各业的企业，尤其是客服工作量大的零售/电商、需要流程自动化的制造和金融企业、以及希望提升内部效率的中大型组织。" },
      { q: "AIEmployee 和真人客服有什么区别？", a: "AIEmployee 可以 24×7 在线，秒级响应，成本远低于人工客服。它擅长处理标准化、高频次的问题；复杂、情感化和需要决策的问题则转接给人工处理。两者协同才能达到最佳效果。" },
      { q: "Agent Workers 支持哪些第三方系统集成？", a: "Agent Workers 提供 50+ 预置连接器，涵盖主流 CRM、ERP、数据库、消息平台（钉钉/飞书/企业微信）等。同时提供开放的 REST API 和 Webhook，支持快速对接自有系统。" },
      { q: "TaskFlow 适合什么规模的团队使用？", a: "TaskFlow 从小型创业团队（5人以下免费）到大型企业均适用。团队规模越大，项目复杂度越高，TaskFlow 的价值体现越明显。" },
    ],
  },
  {
    category: "技术相关",
    items: [
      { q: "是否支持私有化部署？", a: "是的，Professional 和 Enterprise 版本支持私有化部署。我们支持 Docker/Kubernetes 容器化部署，也支持在企业自有云（阿里云/腾讯云/华为云）或私有数据中心运行。" },
      { q: "数据安全和隐私如何保障？", a: "我们通过等保三级认证，数据全程加密传输和存储，支持数据不留存模式（对话数据处理后即删除）。Enterprise 版本还支持客户自主管理加密密钥（BYOK）。" },
      { q: "产品的可用性如何（SLA）？", a: "SaaS 版本月度可用性 99.9%，Enterprise 版本年度 SLA 可达 99.99%，并配备专职 SRE 团队实时监控。" },
      { q: "是否支持定制化开发？", a: "Enterprise 版本支持深度定制，包括专属 Agent 训练、知识库定制、工作流定制和 UI 品牌化。" },
    ],
  },
  {
    category: "商务相关",
    items: [
      { q: "有免费试用吗？", a: "Starter 版本免费使用，无需绑定信用卡。Professional 版本提供 14 天全功能免费试用。" },
      { q: "如何申请企业报价？", a: "您可以通过联系我们页面填写需求，或直接发送邮件至 contact@aiagents.com。我们的销售团队会在 24 小时内与您联系。" },
      { q: "付款方式有哪些？", a: "支持支付宝、微信支付、银行转账、对公转账和信用卡。年付可享受 8.5 折优惠。" },
      { q: "合同签订后多久可以上线？", a: "SaaS 版本开通后即刻使用。私有化部署项目，标准交付周期为签约后 4-6 周，含环境搭建、配置、培训和上线护航。" },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">常见问题</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">关于 aiagents 产品和服务，您可能想了解的问题</p>
          </div>
        </Container>
      </section>
      {faqs.map((section) => (
        <Section key={section.category}>
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{section.category}</h2>
            <div className="max-w-3xl space-y-6">
              {section.items.map((item) => (
                <div key={item.q} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ))}
      <Section dark>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">还有其他问题？</h2>
            <p className="text-gray-400 mb-8">我们随时准备为您提供帮助，欢迎联系我们获取更多信息。</p>
            <Link href="/contact"><Button variant="secondary">联系我们</Button></Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
