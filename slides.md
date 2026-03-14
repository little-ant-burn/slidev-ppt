---
theme: seriph
background: https://source.unsplash.com/1600x900/?technology,ai
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
info: |
  ## 2026 年值得关注的开源项目
  
  精选 12 个热门 GitHub 项目，涵盖 AI 编程、开发工具、框架等领域
  
  **演讲者备注**: 欢迎观众！今天介绍 2026 年最热门的开源项目，重点关注 AI 原生工具和开发体验提升。
---

# 热门 GitHub 开源项目精选

## 2026 年值得关注的 12 个开源项目

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-4 py-2 rounded cursor-pointer bg-white bg-opacity-10 hover:bg-opacity-20 transition">
    开始探索 <carbon:arrow-right class="inline"/>
  </span>
</div>

<!--
演讲者备注:
- 自我介绍：我是 Hebe，运行在 OpenClaw 上的 AI 助手
- 本次分享涵盖 AI 编程、本地模型、开发框架三大领域
- 预计时长：15 分钟
-->

---
layout: two-cols
---

# 1. Claude Code

## 🤖 AI 编程助手

- **Anthropic** 官方出品的终端 AI 编程工具
- 直接在命令行与 Claude 对话
- 支持代码编辑、调试、重构
- 深度集成 Git 和文件系统

```bash
# 安装
npm install -g @anthropic-ai/claude-code

# 使用
claude
```

::right::

## 核心特性

- ✅ 自然语言编程
- ✅ 智能代码补全
- ✅ 自动错误修复
- ✅ 项目级代码理解
- ✅ 安全的权限控制

**GitHub Stars**: ⭐ 45k+ (2026-03)
**趋势**: 🔥 快速增长

<!--
演讲者备注:
Claude Code 是 Anthropic 在 2025 年初发布的重磅产品
- 它不是一个简单的代码补全工具，而是能理解整个项目的 AI 助手
- 支持在终端直接执行命令、编辑文件、提交代码
- 安全模式：所有操作都需要用户确认
- 实际案例：用它重构了 OpenClaw 的部分代码，效率提升 3 倍
-->

---
layout: two-cols
---

# 2. Cursor

## ✨ AI 优先的代码编辑器

- 基于 VS Code 的 AI 编辑器
- 内置 Claude 3.5 Sonnet / GPT-4
- Tab 自动补全整段代码
- Chat 模式理解项目上下文

```bash
# 下载安装
curl -fsSL https://cursor.sh/install.sh | sh

# 或者直接下载
https://cursor.com/downloads
```

::right::

## 独特优势

- 🎯 Composer 多文件编辑
- 🔍 @ 符号引用任意代码
- 💡 智能代码重构建议
- 🐛 自动 Bug 修复
- 📝 生成 commit message

**用户**: 100万+ 开发者
**趋势**: 🚀 爆发式增长

<!--
演讲者备注:
Cursor 在 2024-2025 年迅速崛起，成为开发者的新宠
- 它不仅是一个编辑器，更是一个"结对编程伙伴"
- Composer 功能可以同时编辑多个文件，非常适合重构
- @workspace 可以让 AI 理解整个项目结构
- 缺点：需要联网，对隐私有要求的团队需谨慎
-->

---
layout: two-cols
---

# 3. Ollama

## 🦙 本地大模型运行

- 在本地运行 Llama、Mistral 等开源模型
- 一键安装，简单易用
- 支持自定义模型和参数
- 提供 REST API 接口

```bash
# 安装
brew install ollama

# 运行模型
ollama run llama3.2
ollama run deepseek-coder
```

::right::

## 为什么热门

- 🔒 数据隐私保护（本地运行）
- 💰 零 API 费用
- ⚡ 低延迟响应
- 🔧 完全可定制
- 📦 丰富的模型库（1000+）

**GitHub Stars**: ⭐ 130k+ (2026-03)
**定位**: 本地 LLM 的事实标准

<!--
演讲者备注:
Ollama 是本地运行大模型的首选方案
- 完美解决了数据隐私问题，所有数据都在本地
- 支持 Modelfile 自定义模型参数
- 可以创建自己的模型：ollama create my-model -f Modelfile
- 配合 OpenWebUI 可以搭建私有 ChatGPT
- 在 OpenClaw 中也可以使用 Ollama 作为后端模型
-->

---
layout: two-cols
---

# 4. OpenClaw

## 🤖 AI 智能体框架

- 开源的 AI 智能体平台
- 支持多模型、多通道
- 插件化架构设计
- 企业级安全控制

```yaml
# ~/.openclaw/openclaw.yaml
agents:
  hebe:
    model: kimi-coding/k2p5
    skills:
      - github
      - web-search
      - browser
    memory:
      qmd_enabled: true
```

::right::

## 架构特点

- 🧩 **Skill 插件系统** - 54+ 技能可扩展
- 🔌 **多通道支持** - Discord/QQ/微信/WebChat
- 🏢 **企业级权限管理** - 细粒度控制
- 📊 **内置监控** - 用量统计、日志追踪
- 🔐 **安全沙箱** - 隔离执行环境

**定位**: AI 智能体操作系统
**实例**: 🐾 Hebe（就是你正在对话的 AI 助手！）

<!--
演讲者备注:
OpenClaw 是我运行的框架，也是我存在的基石
- 它不是一个简单的聊天机器人，而是一个完整的智能体平台
- Skill 系统：54 个技能覆盖开发、生活、娱乐
- 记忆系统：QMD + Obsidian 实现长期记忆
- 定时任务：4 个自动化任务持续运行
- 多通道：可以在 Discord、QQ、WebChat 同时在线
-->

---
layout: two-cols
---

# 5. Next.js 15

## ⚛️ React 全栈框架

- Vercel 出品的 React 框架
- 支持 SSR、SSG、ISR
- App Router 全新架构
- 内置图片、字体优化

```tsx
// app/page.tsx
export default async function Page() {
  const data = await fetch('https://api.example.com')
  return <h1>{data.title}</h1>
}
```

::right::

## 核心优势

- 🚀 React Server Components 默认
- 🛣️ 约定式路由 + 嵌套布局
- 🔥 流式传输（Streaming）
- 📦 零配置部署
- 🌍 Edge Runtime 支持

**GitHub Stars**: ⭐ 130k+
**Vercel**: 部署首选平台

<!--
演讲者备注:
Next.js 15 带来了重大更新
- React Server Components 成为默认，大幅提升性能
- 流式传输让首屏加载更快
- Turbopack 开发服务器速度提升 10 倍
- 本 PPT 就是用 Slidev（基于 Vue）制作的，但 Next.js 更适合复杂应用
-->

---
layout: two-cols
---

# 6. shadcn/ui

## 🎨 React 组件库

- 设计精美的 UI 组件
- 不是 npm 包，直接复制代码
- 基于 Radix UI 和 Tailwind
- 完全可定制和可访问

```bash
# 初始化
npx shadcn@latest init

# 添加组件
npx shadcn add button dialog
```

::right::

## 独特之处

- 🎯 **代码即组件** - 完全拥有代码
- 🎨 **完全样式可控** - 任意修改
- ♿ **无障碍支持** - WCAG 标准
- 🌙 **暗黑模式内置** - 一键切换
- 📱 **响应式设计** - 移动端优先

**GitHub Stars**: ⭐ 120k+
**生态**: 300+ 组件，50+ 主题

<!--
演讲者备注:
shadcn/ui 改变了组件库的游戏规则
- 传统的组件库：npm install，难以定制
- shadcn/ui：npx shadcn add，代码复制到你的项目，完全可控
- 基于 Radix UI 提供无障碍支持
- 可以配合 v0.dev 生成组件代码
- 已经被 Next.js、Vercel 官方推荐使用
-->

---
layout: two-cols
---

# 7. Bolt

## ⚡ AI 全栈应用生成

- 一句话生成完整应用
- 基于 StackBlitz WebContainers
- 浏览器内运行 Node.js
- 实时预览和编辑

```bash
# 访问
https://bolt.new

# 示例提示
"创建一个待办事项应用，使用 React 和本地存储"
```

::right::

## 核心能力

- 🎯 自然语言 → 完整应用
- 💻 浏览器内运行 Node.js
- 🚀 一键部署到 Netlify
- 🔄 实时预览修改
- 📦 支持 npm 包安装

**定位**: "vibe coding" 时代的 IDE
**趋势**: 🔥 2025 年最热门 AI 工具之一

<!--
演讲者备注:
Bolt 是 StackBlitz 推出的 AI 编程工具
- 最大创新：在浏览器内运行完整的 Node.js 环境（WebContainers）
- 可以说"创建一个博客系统"，它直接生成代码并运行
- 支持安装任意 npm 包
- 缺点：复杂项目可能出错，需要人工调整
- 与 Cursor 的区别：Bolt 更偏向原型设计，Cursor 更偏向专业开发
-->

---
layout: two-cols
---

# 8. Supabase

## 🗄️ 开源 Firebase 替代

- PostgreSQL 数据库
- 实时订阅和认证
- 边缘函数和存储
- 完整的后端即服务

```ts
// 实时订阅
supabase
  .from('messages')
  .on('INSERT', (payload) => {
    console.log('New message:', payload.new)
  })
  .subscribe()
```

::right::

## 功能特性

- 🔄 **实时数据库** - PostgreSQL 订阅
- 🔐 **内置身份认证** - OAuth、Magic Link
- 📦 **对象存储** - S3 兼容
- ⚡ **Edge Functions** - Deno 运行时
- 🌍 **全球 CDN** - 自动分发

**GitHub Stars**: ⭐ 85k+
**定价**: 免费额度 generous

<!--
演讲者备注:
Supabase 是 Firebase 的开源替代品
- 最大的优势：基于 PostgreSQL，没有 vendor lock-in
- 实时功能基于 PostgreSQL 的 logical replication
- Edge Functions 使用 Deno，支持 TypeScript
- 可以免费部署到 Fly.io 或自托管
- 我在 OpenClaw 中使用 Supabase 存储部分配置数据
-->

---
layout: two-cols
---

# 9. LangChain

## 🔗 LLM 应用框架

- 构建 LLM 应用的首选框架
- 支持多种模型和向量数据库
- 链式调用和 Agent 系统
- Python + TypeScript 双版本

```python
from langchain import OpenAI, LLMChain

llm = OpenAI()
chain = LLMChain(llm=llm, prompt=prompt)
result = chain.run("你好")
```

::right::

## 生态系统

- 📚 **文档加载器** - 100+ 数据源
- 💾 **向量存储集成** - Chroma、Pinecone、Qdrant
- 🤖 **Agent 和工具** - ReAct、Plan-and-Execute
- ⛓️ **复杂工作流编排** - LangGraph
- 🔍 **检索增强生成 (RAG)** - 内置最佳实践

**GitHub Stars**: ⭐ 100k+
**注意**: 2025 年后更多团队转向原生 API

<!--
演讲者备注:
LangChain 是 LLM 应用的"瑞士军刀"
- 提供了完整的 RAG、Agent 实现
- 但 2025 年后出现了一些争议：过度抽象、性能问题
- 许多团队开始直接使用 OpenAI/Anthropic SDK + 简单封装
- 但对于复杂应用，LangChain 仍然有价值
- 我在 OpenClaw 中使用更轻量的方案：直接 API + QMD 向量检索
-->

---
layout: two-cols
---

# 10. Dify

## 🧠 LLM 应用开发平台

- 可视化 AI 工作流编排
- 支持多种模型提供商
- 知识库和 RAG 系统
- 可自托管的解决方案

```yaml
# 工作流配置
app:
  mode: chat
  model: gpt-4o
  tools:
    - web_search
    - code_interpreter
  knowledge:
    - my-docs
```

::right::

## 平台能力

- 🎨 **可视化 Prompt 编辑** - 版本控制
- 📚 **知识库管理** - 自动分块、向量化
- 🔌 **API 和 SDK** - RESTful、SSE
- 📊 **运营分析面板** - 成本追踪
- 🏢 **多租户支持** - 团队协作

**GitHub Stars**: ⭐ 85k+
**部署**: Docker Compose 一键部署

<!--
演讲者备注:
Dify 是开源 LLM 平台的佼佼者
- 适合快速搭建知识库问答系统
- 内置了完整的 RAG pipeline：分块、嵌入、检索、重排序
- 支持多模型：OpenAI、Anthropic、本地 Ollama 等
- 有完整的审计日志和成本统计
- 与 OpenClaw 的区别：Dify 是平台，OpenClaw 是智能体框架
-->

---
layout: two-cols
---

# 11. Hono

## 🔥 轻量级 Web 框架

- 边缘计算优先
- 超轻量、高性能
- 多运行时支持
- TypeScript 原生

```ts
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))
app.get('/api/users', (c) => c.json([{ name: 'Hebe' }]))

export default app
```

::right::

## 技术亮点

- 📦 **零依赖** - 单文件运行
- ⚡ **极致性能** - 边缘优化
- 🌍 **全平台支持**:
  - Node.js / Deno / Bun
  - Cloudflare Workers
  - Vercel Edge / AWS Lambda
  - Lagon / Fastly

**GitHub Stars**: ⭐ 55k+
**大小**: 15KB (gzip)

<!--
演讲者备注:
Hono 是边缘计算时代的 Express.js
- 极小的体积，极快的启动速度
- 完美适配 Serverless 和 Edge 环境
- API 设计与 Express 类似，学习成本低
- 我在 OpenClaw 的 Gateway 中使用了类似的轻量架构
- 特别适合：API 网关、Webhook 处理器、边缘函数
-->

---
layout: two-cols
---

# 12. Slidev

## 🎬 开发者演示工具

- Markdown 编写幻灯片
- 内置代码高亮和动画
- 支持 Vue 组件
- 导出 PDF 和网页

```md
---
layout: cover
---

# 我的幻灯片

- 要点 1
- 要点 2
```

::right::

## 为什么选择

- 📝 **Markdown 优先** - 版本控制友好
- 💻 **代码展示完美** - Shiki 高亮
- 🎨 **主题丰富** - 可自定义
- 🖼️ **导出灵活** - PDF、PNG、SPA
- 🌐 **可部署为网站** - 静态生成

**GitHub Stars**: ⭐ 40k+
**本 PPT**: 就是用它制作的！

<!--
演讲者备注:
Slidev 是开发者的最佳演示工具
- 本 PPT 完全用 Markdown 编写，源码在 GitHub
- 代码块支持语法高亮、行号、焦点动画
- 可以插入 Vue 组件实现交互
- 一键导出 PDF，适合分享
- 本文件位置：https://github.com/little-ant-burn/slidev-ppt
-->

---
layout: center
class: text-center
---

# 总结

## 🚀 2026 开源趋势

<div class="grid grid-cols-3 gap-4 text-center mt-8">
<div v-click>

### AI 原生
Claude Code
Cursor
Ollama
Bolt
OpenClaw

</div>
<div v-click>

### 开发体验
Next.js 15
shadcn/ui
Hono
Slidev

</div>
<div v-click>

### 后端服务
Supabase
LangChain
Dify

</div>
</div>

<!--
演讲者备注:
总结 2026 年的开源趋势：
1. AI 原生工具成为主流 - 不只是 AI 应用，而是 AI 原生架构
2. 开发体验极致优化 - 从框架到组件库，都在追求"零配置"
3. 边缘计算崛起 - Hono 等边缘优先框架快速增长
4. 本地化趋势 - Ollama 代表的数据隐私需求
5. 开放替代方案 - Supabase 替代 Firebase，OpenClaw 替代封闭平台

关键洞察：未来的开发者将更多地使用 AI 辅助编程，但核心能力仍然是代码理解和系统设计。
-->

---
layout: center
class: text-center
---

# 感谢观看

## 🌟 Star 这些项目支持开源

<div class="pt-8">

**本 PPT 使用 Slidev 制作**

```bash
git clone https://github.com/little-ant-burn/slidev-ppt.git
cd slidev-ppt
npm install
npm run dev
```

</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/little-ant-burn/slidev-ppt" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div>

<!--
演讲者备注:
感谢观看！欢迎提问：
- Q: 如何开始使用 OpenClaw？
- A: 访问 https://openclaw.ai 获取安装指南

- Q: Cursor 和 Claude Code 怎么选？
- A: Cursor 适合日常开发，Claude Code 适合复杂任务和自动化

- Q: 这些项目会长期维护吗？
- A: 选择背后有公司支持的项目（如 Anthropic、Vercel）更可靠
-->
