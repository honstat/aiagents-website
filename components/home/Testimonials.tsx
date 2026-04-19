import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const testimonials = [
  {
    quote: "接入 AIEmployee 后，我们的客服团队效率提升了 3 倍，客户的平均等待时间从 3 分钟降到了 10 秒以内。用户满意度反而提高了，因为 AI 回复比人工更快更准确。",
    name: "张经理",
    role: "客服总监",
    company: "某头部电商平台",
    avatar: "张",
  },
  {
    quote: "Agent Workers 让我们实现了以前不敢想象的风控自动化。以前一个贷款审批要 3 天，现在 2 小时就能完成，而且每个环节都可追溯，大幅降低了合规风险。",
    name: "王总监",
    role: "风控部负责人",
    company: "某股份制商业银行",
    avatar: "王",
  },
  {
    quote: "TaskFlow 的 AI 任务拆解功能改变了我们做项目计划的方式。系统能自动把大目标拆成可执行的小任务，还能智能分配给合适的成员，项目延期率降低了 60%。",
    name: "刘总监",
    role: "项目管理办公室",
    company: "某科技集团",
    avatar: "刘",
  },
];

export default function Testimonials() {
  return (
    <Section dark>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">客户怎么说</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">已有数百家企业通过 aiagents 实现智能化升级</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-6 leading-relaxed italic">「{t.quote}」</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{t.avatar}</div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
