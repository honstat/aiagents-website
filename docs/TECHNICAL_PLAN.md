# 官网建设项目 - 技术方案

**版本：** v1.0  
**日期：** 2026-04-18  
**状态：** 待评审  
**负责人：** 研发  

---

## 1. 项目概述

### 1.1 项目目标
新建公司官网，对外介绍公司产品和公司信息，树立企业形象。

### 1.2 技术栈（已确认）
| 项目 | 选择 |
|------|------|
| 前端框架 | Next.js 14+ (App Router) |
| 样式方案 | Tailwind CSS |
| 部署平台 | Vercel |
| 域名 | 临时方案（Vercel 分配的临时域名或自定义临时域名） |
| 状态管理 | React Context + useReducer |
| 语言 | TypeScript |

### 1.3 设计策略
**先出框架，后填内容**  
- 优先完成页面结构和布局
- 内容和文案后续填充
- 确保技术架构可扩展

---

## 2. 页面结构设计

### 2.1 页面清单

| 页面 | 路由 | 优先级 | 说明 |
|------|------|--------|------|
| 首页 | `/` | P0 | 公司介绍 + 核心产品 + CTA |
| 产品页 | `/products` | P0 | 产品列表 |
| 产品详情页 | `/products/[slug]` | P1 | 单个产品介绍 |
| 关于我们 | `/about` | P1 | 公司介绍、团队 |
| 联系我们 | `/contact` | P1 | 联系方式 + 表单 |

### 2.2 页面结构

```
/ (首页)
├── Hero Section（公司slogan + 主CTA）
├── Features Section（核心价值）
├── Products Preview（产品预览）
├── About Preview（公司简介）
└── Footer（联系方式 + 链接）

/products
├── Hero（页面标题）
├── Product Grid（产品卡片列表）
└── Footer

/products/[slug]
├── Hero（产品名称）
├── Feature List（产品特性）
├── Screenshots/Demo
├── Pricing（可选）
└── Footer

/about
├── Company Story（公司故事）
├── Team Section（团队成员）
├── Milestones（发展历程）
└── Footer

/contact
├── Contact Info（联系方式）
├── Contact Form（联系表单）
└── Footer
```

---

## 3. 组件清单

### 3.1 通用组件（Shared）

| 组件 | 类型 | 说明 |
|------|------|------|
| `Header` | 导航 | 顶部导航栏，含Logo + 菜单 |
| `Footer` | 导航 | 底部，包含联系方式、链接 |
| `Button` | UI | 按钮，支持 primary/secondary/ghost |
| `Container` | 布局 | 页面内容容器，统一宽度 |
| `Section` | 布局 | 页面分区组件 |
| `SEOHead` | Meta | SEO 元信息组件 |

### 3.2 业务组件

| 组件 | 页面 | 说明 |
|------|------|------|
| `Hero` | 首页/产品/关于 | 大标题区域 |
| `ProductCard` | 首页/产品页 | 产品卡片 |
| `FeatureList` | 首页 | 核心价值列表 |
| `TeamMember` | 关于页 | 团队成员卡片 |
| `ContactForm` | 联系页 | 联系表单 |
| `Timeline` | 关于页 | 发展历程时间线 |

### 3.3 组件树

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   └── NavMenu
│   └── Footer
│       ├── ContactInfo
│       └── SocialLinks
├── Pages
│   ├── HomePage
│   │   ├── Hero
│   │   ├── FeatureList
│   │   ├── ProductCard (×3)
│   │   └── ProductGrid
│   ├── ProductsPage
│   │   └── ProductGrid
│   │       └── ProductCard (×N)
│   ├── ProductDetailPage
│   │   ├── Hero
│   │   └── FeatureList
│   ├── AboutPage
│   │   ├── CompanyStory
│   │   ├── TeamSection
│   │   │   └── TeamMember (×N)
│   │   └── Timeline
│   └── ContactPage
│       └── ContactForm
```

---

## 4. 技术架构图

### 4.1 系统架构

```
┌─────────────────────────────────────────────────────────┐
│                     Vercel Edge                          │
│              (CDN + Global Distribution)                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   Browser ──▶ Next.js App (SSG/SSR/ISR)                 │
│                                                          │
│   ┌─────────────┐   ┌─────────────┐   ┌──────────────┐  │
│   │   Pages/    │   │ Components/ │   │    Lib/      │  │
│   │  (Routes)   │   │ (UI Parts)  │   │ (Utils/Hooks)│  │
│   └─────────────┘   └─────────────┘   └──────────────┘  │
│                                                          │
│   ┌─────────────┐   ┌─────────────┐                    │
│   │   Types/    │   │   Styles/   │                    │
│   │ (TypeScript)│   │ (Tailwind)  │                    │
│   └─────────────┘   └─────────────┘                    │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                    Data Layer (v1)                       │
│         静态数据：JSON files 或 内嵌常量                  │
│         (后续扩展：CMS / Database)                       │
└─────────────────────────────────────────────────────────┘
```

### 4.2 目录结构

```
aiagents-website/
├── public/                 # 静态资源
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # 根布局
│   │   ├── page.tsx       # 首页
│   │   ├── products/
│   │   │   ├── page.tsx   # 产品列表页
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # 产品详情页
│   │   ├── about/
│   │   │   └── page.tsx   # 关于我们
│   │   ├── contact/
│   │   │   └── page.tsx   # 联系我们
│   │   └── globals.css    # 全局样式
│   ├── components/         # React 组件
│   │   ├── layout/        # 布局组件
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/            # 基础UI组件
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── home/          # 首页组件
│   │   │   ├── Hero.tsx
│   │   │   ├── FeatureList.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── products/      # 产品页组件
│   │   │   └── ProductGrid.tsx
│   │   ├── about/         # 关于页组件
│   │   │   ├── TeamSection.tsx
│   │   │   └── Timeline.tsx
│   │   └── contact/       # 联系页组件
│   │       └── ContactForm.tsx
│   ├── lib/               # 工具函数
│   │   ├── data.ts        # 静态数据
│   │   └── utils.ts       # 工具函数
│   ├── hooks/             # 自定义Hooks
│   │   └── useScrollAnimation.ts
│   └── types/             # TypeScript类型
│       └── index.ts
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── docs/
    ├── TECHNICAL_PLAN.md   # 本文档
    └── SCHEDULE.md        # 开发排期
```

### 4.3 技术决策

| 决策点 | 选择 | 理由 |
|--------|------|------|
| 渲染模式 | SSG（静态生成）为主 | 内容以静态为主，SEO友好，构建时生成 |
| 样式方案 | Tailwind CSS | 快速开发、一致性、无需自定义CSS |
| 图标方案 | Lucide React | 轻量、一致、支持Tree-shaking |
| 部署 | Vercel | 与Next.js原生集成、自动CI/CD、CDN |
| 域名 | 临时 → 正式 | 初期用Vercel临时域名，后续绑定正式域名 |
| 数据层 | 静态JSON/常量 | v1.0不考虑CMS，后续扩展 |

---

## 5. CI/CD 流程

### 5.1 开发流程

```
开发环境 (本地)
     │
     │ git push (feature branch)
     ▼
GitHub Repository
     │
     │ Pull Request
     ▼
CI Pipeline (GitHub Actions)
     ├── Lint (ESLint)
     ├── Type Check (TypeScript)
     ├── Build (next build)
     └── Test (可选)
     │
     │ PR合并
     ▼
Main Branch
     │
     │ 自动触发
     ▼
Vercel Auto-Deploy
     ├── Build
     ├── Preview (PR预览)
     └── Production (main分支)
          │
          ▼
     正式环境发布
```

### 5.2 Git 工作流

```
分支模型：GitHub Flow（简化版）

main          ─── 生产环境 (Vercel Production)
    │
    └── feat/*  ─── 功能开发分支
    │
    └── fix/*   ─── Bug修复分支

流程：
1. 从 main 创建 feat/xxx 分支
2. 开发 + 提交
3. Push → GitHub → 自动CI
4. PR → Code Review → 合并到 main
5. Vercel 自动部署到 Production
```

### 5.3 环境说明

| 环境 | 触发条件 | URL |
|------|----------|-----|
| Local | 本地运行 `npm run dev` | localhost:3000 |
| Preview | 每个PR自动创建 | Vercel临时URL |
| Production | main分支合并 | Vercel分配域名 |

### 5.4 部署检查清单

- [ ] 代码Lint通过
- [ ] TypeScript编译无错误
- [ ] 构建成功 (`next build`)
- [ ] Preview环境验收通过
- [ ] 合并main
- [ ] Production环境验证

---

## 6. 后续扩展点（v2.0+）

以下内容不在本次范围内，记录备查：

1. **CMS集成** - 内容管理系统（Contentful / Strapi）
2. **博客系统** - 新闻/文章发布
3. **正式域名** - 绑定自有域名 + SSL
4. **Analytics** - 访问统计（Google Analytics / Plausible）
5. **SEO增强** - Sitemap、Structured Data、AMP
6. **多语言** - i18n国际化
7. **联系表单** - 后端处理（Formspree / Resend）

---

## 7. 验收标准

- [ ] 首页、产品页、关于页、联系页 四个页面可访问
- [ ] 响应式布局（桌面 + 移动端）
- [ ] 导航栏可在各页面间切换
- [ ] CI/CD流水线正常（GitHub → Vercel自动部署）
- [ ] 代码通过ESLint + TypeScript检查
