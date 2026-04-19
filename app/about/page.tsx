import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { teamMembers, timelineEvents } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "关于我们 - aiagents",
  description:
    "了解 aiagents 团队，我们致力于用AI技术赋能企业数字化转型。",
};

const values = [
  "AI原生：所有产品从设计之初就围绕AI能力展开",
  "客户至上：深入理解客户需求，提供最优解决方案",
  "持续创新：不断探索AI技术边界，保持技术领先",
  "开放协作：与生态伙伴共建AI应用生态",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              关于 aiagents
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              我们相信 AI 能够从根本上改变企业的工作方式，让每个组织都能受益于人工智能的变革力量。
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              我们的故事
            </h2>
            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 space-y-4">
              <p>
                aiagents 成立于2024年，是一支专注于AI应用研发的创业团队。我们的创始成员来自头部科技公司和知名AI研究机构，在大语言模型、多智能体系统、企业级AI落地等领域拥有深厚积累。
              </p>
              <p>
                我们观察到，虽然大语言模型技术取得了突破性进展，但大多数企业在将AI转化为实际生产力方面仍面临巨大挑战。基于这一洞察，aiagents 致力于打造从AI员工到工作流引擎的完整产品矩阵，让企业能够以最低门槛、最快速度拥抱AI时代。
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section dark>
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            我们的价值观
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.map((value) => (
              <div key={value} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{value}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section id="team">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            核心团队
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            我们的团队由一群对AI充满热情的行业老兵组成，兼具技术创新与商业落地能力。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800"
              >
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            发展历程
          </h2>
          <div className="max-w-2xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {event.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0 w-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                  {index < timelineEvents.length - 1 && (
                    <div className="w-0.5 flex-1 bg-blue-200 dark:bg-blue-800 absolute top-3 left-1/2 -translate-x-1/2 h-full" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
