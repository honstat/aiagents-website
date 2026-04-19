import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Bot, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "智能AI员工",
    description:
      "基于大语言模型的AI员工，24小时在线，处理各类企业任务，大幅降低人力成本。",
  },
  {
    icon: Zap,
    title: "高效工作流",
    description:
      "多Agent协作引擎，复杂任务自动拆解并行执行，让业务流程效率倍增。",
  },
  {
    icon: Shield,
    title: "安全可靠",
    description:
      "企业级安全架构，支持私有化部署，数据全程加密，保障业务隐私。",
  },
  {
    icon: Users,
    title: "轻松集成",
    description:
      "开放API和Webhook，无缝对接企业现有系统，最小侵入式集成。",
  },
];

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            为什么选择 aiagents
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            我们提供完整的AI原生解决方案，覆盖从智能客服到业务流程自动化的各类场景
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
