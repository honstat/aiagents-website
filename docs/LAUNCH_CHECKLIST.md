# 官网上线检查清单 (Launch Checklist)

**项目：** aiagents-website  
**Phase 3：** 测试 + 上线准备  
**状态：** ✅ 测试完成 | 🔲 待上线

---

## 一、测试结果 ✅

| 测试项 | 结果 |
|--------|------|
| 生产构建 (`npm run build`) | ✅ 通过，17个页面生成 |
| ESLint 检查 | ✅ 无错误 |
| Playwright 自动化测试 | ✅ 27/27 全部通过 |
| Dev Server 启动 | ✅ HTTP 200 正常响应 |

### 27项测试覆盖
- [x] 首页加载、导航、页脚、产品展示
- [x] 产品列表页（3个产品）
- [x] 产品详情页（AIEmployee）
- [x] 定价页（3个套餐）
- [x] 关于我们页（团队、时间线）
- [x] 联系我们页（表单提交）
- [x] 博客页（文章列表、详情页跳转）
- [x] FAQ页（分类展示）

---

## 二、已生成文件

| 文件 | 用途 |
|------|------|
| `Dockerfile` | 容器化部署配置 |
| `.dockerignore` | Docker 构建排除 |
| `.github/workflows/deploy.yml` | GitHub Actions 部署工作流 |
| `.github/workflows/ci.yml` | CI 测试工作流 |
| `app/robots.ts` | SEO robots.txt |
| `app/sitemap.ts` | SEO sitemap.xml |

---

## 三、上线前待确认事项 ⚠️

### 3.1 域名配置
> **需要确认真实域名**

sitemap.xml 和 robots.txt 目前使用占位域名 `https://aiagents.example.com`，上线前需更新：

```typescript
// app/sitemap.ts
const baseUrl = "https://aiagents.example.com"  // ← 替换为真实域名

// app/robots.ts
sitemap: "https://aiagents.example.com/sitemap.xml"  // ← 替换为真实域名
```

### 3.2 部署方式选择

#### 选项 A：Vercel（推荐，快速）
1. 登录 [vercel.com](https://vercel.com)
2. Import `honstat/aiagents-website`
3. 设置 `NEXT_TELEMETRY_DISABLED=1`
4. 自动部署完成

**Secrets 需要配置：**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

#### 选项 B：Docker 自部署
```bash
# 构建镜像
docker build -t aiagents-website:latest .

# 运行
docker run -d -p 3000:3000 --name aiagents-website aiagents-website:latest
```

#### 选项 C：腾讯云服务器
```bash
scp -r dist/ ubuntu@your-server:/data/aiagents-website/
# 使用现有 SSH 配置: tencent-dev (124.222.83.94)
```

### 3.3 环境变量（如需要）
| 变量 | 说明 | 必填 |
|------|------|------|
| `NEXT_TELEMETRY_DISABLED` | 禁用 Next.js 遥测 | ✅ |
| `NEXT_PUBLIC_SITE_URL` | 网站 URL（用于 sitemap） | ⚠️ |
| `CONTACT_EMAIL` | 联系表单收件邮箱 | ⚠️ |

### 3.4 联系表单后端
联系页面目前为纯前端实现，表单提交仅做 UI 反馈（`消息已发送`）。如需真实发送，需对接邮件服务（SendGrid / 飞书邮件 API）。

---

## 四、Git 状态

```
main: 8523c7b — fix: resolve test selector strictness issues (9 failing → 0)
已推送至 origin
```

---

## 五、后续建议

- [ ] 添加 Vercel Analytics
- [ ] 配置正式域名 SSL 证书
- [ ] 接入联系表单邮件服务
- [ ] 添加网站监控（Uptime Robot / Sentry）
- [ ] 配置 CDN 加速
- [ ] 添加正式环境 CI/CD 自动部署
