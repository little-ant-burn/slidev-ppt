---
theme: seriph
background: https://source.unsplash.com/1600x900/?technology,code
title: 热门 GitHub 开源项目精选
info: |
  ## 2025 年值得关注的开源项目
  
  精选 10 个热门 GitHub 项目，涵盖 AI、开发工具、框架等领域
class: text-center
highlighter: shiki
drawings:
  persist: false
---

# 热门 GitHub 开源项目精选

## 2025 年值得关注的 10 个开源项目

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-4 py-2 rounded cursor-pointer bg-white bg-opacity-10 hover:bg-opacity-20 transition">
    开始探索 <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# 1. Claude Code

<div class="grid grid-cols-2 gap-4">
<div>

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

</div>
<div>

## 核心特性

- ✅ 自然语言编程
- ✅ 智能代码补全
- ✅ 自动错误修复
- ✅ 项目级代码理解
- ✅ 安全的权限控制

**星标趋势**: ⭐ 快速增长

</div>
</div>

---

# 2. Ollama

<div class="grid grid-cols-2 gap-4">
<div>

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
```

</div>
<div>

## 为什么热门

- 🔒 数据隐私保护
- 💰 零 API 费用
- ⚡ 低延迟响应
- 🔧 完全可定制
- 📦 丰富的模型库

**GitHub Stars**: 100k+

</div>
</div>

---

# 3. OpenClaw

<div class="grid grid-cols-2 gap-4">
<div>

## 🤖 AI 智能体框架

- 开源的 AI 智能体平台
- 支持多模型、多通道
- 插件化架构设计
- 企业级安全控制

```yaml
# 配置示例
agents:
  my-agent:
    model: claude-sonnet-4
    skills:
      - github
      - web-search
```

</div>
<div>

## 架构特点

- 🧩 Skill 插件系统
- 🔌 多通道支持 (Discord/QQ/微信)
- 🏢 企业级权限管理
- 📊 内置监控和分析
- 🔐 安全沙箱执行

**定位**: AI 智能体操作系统

</div>
</div>

---

# 4. Next.js 15

<div class="grid grid-cols-2 gap-4">
<div>

## ⚛️ React 全栈框架

- Vercel 出品的 React 框架
- 支持 SSR、SSG、ISR
- App Router 全新架构
- 内置图片、字体优化

```tsx
// app/page.tsx
export default function Page() {
  return <h1>Hello Next.js!</h1>
}
```

</div>
<div>

## 核心优势

- 🚀 极致性能优化
- 🛣️ 约定式路由
- 🔥 React Server Components
- 📦 零配置部署
- 🌍 Edge Runtime 支持

**GitHub Stars**: 120k+

</div>
</div>

---

# 5. LangChain

<div class="grid grid-cols-2 gap-4">
<div>

## 🔗 LLM 应用框架

- 构建 LLM 应用的首选框架
- 支持多种模型和向量数据库
- 链式调用和 Agent 系统
- Python + TypeScript 双版本

```python
from langchain import OpenAI, LLMChain

llm = OpenAI()
chain = LLMChain(llm=llm, prompt=prompt)
```

</div>
<div>

## 生态系统

- 📚 文档加载器
- 💾 向量存储集成
- 🤖 Agent 和工具
- ⛓️ 复杂工作流编排
- 🔍 检索增强生成 (RAG)

**GitHub Stars**: 90k+

</div>
</div>

---

# 6. shadcn/ui

<div class="grid grid-cols-2 gap-4">
<div>

## 🎨 React 组件库

- 设计精美的 UI 组件
- 不是 npm 包，直接复制代码
- 基于 Radix UI 和 Tailwind
- 完全可定制和可访问

```bash
# 添加组件
npx shadcn add button
npx shadcn add dialog
```

</div>
<div>

## 独特之处

- 🎯 代码即组件
- 🎨 完全样式可控
- ♿ 无障碍支持
- 🌙 暗黑模式内置
- 📱 响应式设计

**GitHub Stars**: 80k+

</div>
</div>

---

# 7. Supabase

<div class="grid grid-cols-2 gap-4">
<div>

## 🗄️ 开源 Firebase 替代

- PostgreSQL 数据库
- 实时订阅和认证
- 边缘函数和存储
- 完整的后端即服务

```sql
-- 实时订阅
supabase
  .from('messages')
  .on('INSERT', callback)
  .subscribe()
```

</div>
<div>

## 功能特性

- 🔄 实时数据库
- 🔐 内置身份认证
- 📦 对象存储
- ⚡ Edge Functions
- 🌍 全球 CDN

**GitHub Stars**: 75k+

</div>
</div>

---

# 8. Dify

<div class="grid grid-cols-2 gap-4">
<div>

## 🧠 LLM 应用开发平台

- 可视化 AI 工作流编排
- 支持多种模型提供商
- 知识库和 RAG 系统
- 可自托管的解决方案

```yaml
# 工作流配置
app:
  mode: chat
  model: gpt-4
  tools:
    - web_search
    - code_interpreter
```

</div>
<div>

## 平台能力

- 🎨 可视化 Prompt 编辑
- 📚 知识库管理
- 🔌 API 和 SDK
- 📊 运营分析面板
- 🏢 多租户支持

**GitHub Stars**: 60k+

</div>
</div>

---

# 9. Hono

<div class="grid grid-cols-2 gap-4">
<div>

## 🔥 轻量级 Web 框架

- 边缘计算优先
- 超轻量、高性能
- 多运行时支持
- TypeScript 原生

```ts
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))
```

</div>
<div>

## 技术亮点

- 📦 零依赖
- ⚡ 极致性能
- 🌍 全平台支持
  - Node.js
  - Deno
  - Bun
  - Cloudflare Workers
  - Vercel Edge

**GitHub Stars**: 40k+

</div>
</div>

---

# 10. Slidev

<div class="grid grid-cols-2 gap-4">
<div>

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

</div>
<div>

## 为什么选择

- 📝 Markdown 优先
- 💻 代码展示完美
- 🎨 主题丰富
- 🖼️ 导出灵活
- 🌐 可部署为网站

**GitHub Stars**: 35k+

</div>
</div>

---

# 总结

## 🚀 2025 开源趋势

<div class="grid grid-cols-3 gap-4 text-center">
<div>

### AI 原生
- Claude Code
- Ollama
- LangChain
- Dify

</div>
<div>

### 开发体验
- Next.js
- shadcn/ui
- Hono
- Slidev

</div>
<div>

### 后端服务
- Supabase
- OpenClaw

</div>
</div>

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
