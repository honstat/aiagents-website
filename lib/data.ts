import { Product, TeamMember, TimelineEvent } from "@/types";

export const products: Product[] = [
  {
    slug: "aiemployee",
    name: "AIEmployee",
    description: "智能AI员工平台，赋能企业数字化转型",
    longDescription:
      "AIEmployee 是新一代智能员工平台，通过先进的大语言模型技术，为企业提供可定制的AI数字员工。AI员工可以 24小时在线，处理客服咨询、数据分析、内容创作等多种任务，大幅提升企业运营效率。",
    features: [
      "多场景AI员工模板",
      "私有化部署支持",
      "开放API接口",
      "可视化对话配置",
      "数据隐私安全保障",
    ],
    category: "企业服务",
    icon: "Bot",
  },
  {
    slug: "agent-workers",
    name: "Agent Workers",
    description: "多Agent协作工作流引擎",
    longDescription:
      "Agent Workers 是一个强大的多智能体协作引擎，让多个AI Agent协同工作，完成复杂的企业级任务。通过灵活的工作流编排，企业可以构建自动化业务流程，实现效率的指数级提升。",
    features: [
      "可视化工作流设计",
      "多Agent并行/串行执行",
      "丰富的预置工具集",
      "实时任务监控",
      "失败自动重试机制",
    ],
    category: "开发平台",
    icon: "Workflow",
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    description: "企业级任务管理与自动化平台",
    longDescription:
      "TaskFlow 是专为企业打造的智能任务管理平台，支持复杂任务的拆解、分配、执行和追踪。结合AI能力，系统可以自动推荐最优执行方案，预测项目风险，让团队协作更加高效。",
    features: [
      "AI智能任务拆解",
      "多视图项目管理",
      "自动化工作流",
      "跨团队协作",
      "深度数据分析",
    ],
    category: "企业管理",
    icon: "CheckSquare",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "李明",
    role: "创始人 & CEO",
    bio: "深耕AI领域15年，曾任多家科技公司技术负责人，对AI落地应用有深刻洞察。",
  },
  {
    name: "张华",
    role: "CTO",
    bio: "分布式系统专家，前BAT架构师，主导过多个大型AI平台的设计与落地。",
  },
  {
    name: "王芳",
    role: "产品VP",
    bio: "资深产品人，擅⻑从0到1打造B端产品，服务过数百家企业客户。",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2024",
    title: "公司成立",
    description: "aiagents团队正式组建，开始AI产品研发",
  },
  {
    year: "2024 Q4",
    title: "产品内测",
    description: "AIEmployee平台上线，完成首批企业客户内测",
  },
  {
    year: "2025 Q1",
    title: "正式发布",
    description: "全系产品正式发布，获得首批企业客户认可",
  },
  {
    year: "2025 Q2",
    title: "快速迭代",
    description: "Agent Workers 和 TaskFlow 相继上线，产品线完善",
  },
];
