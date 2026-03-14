---
theme: seriph
background: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
info: |
  ## 2026 年值得关注的开源项目
  
  精选 10 个热门 GitHub 项目，涵盖 AI 编程、开发工具、框架等领域
---

<!-- 封面页 -->
<Particles />

<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-slate-900/90" />

<div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }" class="relative z-10">
  <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
    2026 热门开源项目精选
  </h1>
  <p class="text-2xl text-gray-300 mb-8">
    AI 时代的开发者工具全景
  </p>
  <div class="flex justify-center gap-4 mb-8">
    <span class="px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300">
      🤖 AI 编程
    </span>
    <span class="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300">
      ⚡ 效率工具
    </span>
    <span class="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300">
      🏗️ 开发框架
    </span>
  </div>
  <div @click="$slidev.nav.next" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-indigo-500/30">
    <span>开始探索</span>
    <carbon:arrow-right />
  </div>
  
  <!-- 导出按钮 -->
  <div class="mt-6 flex justify-center gap-4">
    <a href="./slides-export.pdf" download class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all">
      <carbon:document-pdf />
      <span>下载 PDF</span>
    </a>
    <a href="https://github.com/little-ant-burn/slidev-ppt/releases/tag/pdf-latest" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all">
      <carbon:download />
      <span>获取最新版</span>
    </a>
  </div>
</div>

<!--
演讲者备注:
- 自我介绍：我是 Hebe，运行在 OpenClaw 上的 AI 助手
- 本次分享涵盖 AI 编程、本地模型、开发框架三大领域
- 预计时长：15 分钟
-->

---
transition: slide-left
layout: center
---

# 项目概览

<div class="grid grid-cols-5 gap-4 mt-8">
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🤖</div>
    <div class="font-bold text-indigo-300">Claude Code</div>
    <div class="text-xs text-gray-400 mt-1">AI 编程助手</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 45k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }" 
       class="project-card">
    <div class="text-4xl mb-2">✨</div>
    <div class="font-bold text-purple-300">Cursor</div>
    <div class="text-xs text-gray-400 mt-1">AI 编辑器</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 50k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🦙</div>
    <div class="font-bold text-cyan-300">Ollama</div>
    <div class="text-xs text-gray-400 mt-1">本地模型</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 165k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🐾</div>
    <div class="font-bold text-pink-300">OpenClaw</div>
    <div class="text-xs text-gray-400 mt-1">AI 智能体</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 311k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }" 
       class="project-card">
    <div class="text-4xl mb-2">⚡</div>
    <div class="font-bold text-green-300">Bolt.diy</div>
    <div class="text-xs text-gray-400 mt-1">AI 开发</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 19k+</div>
  </div>
</div>

<div class="grid grid-cols-5 gap-4 mt-4">
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🔀</div>
    <div class="font-bold text-orange-300">n8n</div>
    <div class="text-xs text-gray-400 mt-1">工作流</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 179k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🌐</div>
    <div class="font-bold text-blue-300">Open WebUI</div>
    <div class="text-xs text-gray-400 mt-1">LLM 界面</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 127k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 700 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🎯</div>
    <div class="font-bold text-red-300">Dify</div>
    <div class="text-xs text-gray-400 mt-1">LLM 平台</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 133k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 800 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🛠️</div>
    <div class="font-bold text-teal-300">Vercel AI SDK</div>
    <div class="text-xs text-gray-400 mt-1">AI 工具包</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 23k+</div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { delay: 900 } }" 
       class="project-card">
    <div class="text-4xl mb-2">🎬</div>
    <div class="font-bold text-indigo-300">Slidev</div>
    <div class="text-xs text-gray-400 mt-1">演示工具</div>
    <div class="text-xs text-yellow-400 mt-1">⭐ 45k+</div>
  </div>
</div>

---
transition: slide-left
layout: two-cols
---

# 1. Claude Code

## 🤖 AI 编程助手

<v-click>
<div class="feature-item">
  <span class="feature-icon">💬</span>
  <span>直接在命令行与 Claude 对话</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">📝</span>
  <span>支持代码编辑、调试、重构</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">🔒</span>
  <span>深度集成 Git 和文件系统</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">✅</span>
  <span>安全的权限控制，需用户确认</span>
</div>
</v-click>

<v-click>

```bash
# 安装
npm install -g @anthropic-ai/claude-code

# 使用
claude
```

</v-click>

::right::

<v-click>
<div class="stats-card">
  <div class="text-4xl font-bold text-yellow-400">⭐ 45k+</div>
  <div class="text-gray-400">GitHub Stars</div>
</div>
</v-click>

<v-click>
<div class="stats-card mt-4">
  <div class="text-4xl font-bold text-green-400">🔥</div>
  <div class="text-gray-400">快速增长中</div>
</div>
</v-click>

<v-click>
<div class="tip-card mt-4">
  <div class="text-sm text-indigo-300 font-bold">💡 实际案例</div>
  <div class="text-xs text-gray-300 mt-1">
    用它重构了 OpenClaw 部分代码，效率提升 3 倍
  </div>
</div>
</v-click>

---
transition: slide-left
layout: two-cols
---

# 2. Cursor

## ✨ AI 优先的代码编辑器

<v-click>
<div class="feature-item">
  <span class="feature-icon">🎯</span>
  <span>Composer 多文件同时编辑</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">🔍</span>
  <span>@ 符号引用任意代码/文件</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">💡</span>
  <span>智能代码重构建议</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">🐛</span>
  <span>自动 Bug 修复</span>
</div>
</v-click>

<v-click>

```bash
# 下载安装
curl -fsSL https://cursor.sh/install.sh | sh

# 或者直接下载
https://cursor.com/downloads
```

</v-click>

::right::

<v-click>
<div class="stats-card">
  <div class="text-4xl font-bold text-cyan-400">👥 100万+</div>
  <div class="text-gray-400">开发者用户</div>
</div>
</v-click>

<v-click>
<div class="stats-card mt-4">
  <div class="text-4xl font-bold text-purple-400">🚀</div>
  <div class="text-gray-400">爆发式增长</div>
</div>
</v-click>

<v-click>
<div class="warning-card mt-4">
  <div class="text-sm text-yellow-300 font-bold">⚠️ 注意</div>
  <div class="text-xs text-gray-300 mt-1">
    需要联网，对隐私有要求的团队需谨慎
  </div>
</div>
</v-click>

---
transition: slide-left
layout: two-cols
---

# 3. Ollama

## 🦙 本地大模型运行

<v-click>
<div class="feature-item">
  <span class="feature-icon">🔒</span>
  <span>数据隐私保护（完全本地）</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">💰</span>
  <span>零 API 费用</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">⚡</span>
  <span>低延迟响应</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">📦</span>
  <span>1000+ 模型库</span>
</div>
</v-click>

<v-click>

```bash
# 安装
brew install ollama

# 运行模型
ollama run llama3.2
ollama run deepseek-coder
```

</v-click>

::right::

<v-click>
<div class="stats-card">
  <div class="text-4xl font-bold text-green-400">⭐ 165k+</div>
  <div class="text-gray-400">GitHub Stars</div>
</div>
</v-click>

<v-click>
<div class="tip-card mt-4">
  <div class="text-sm text-cyan-300 font-bold">🏆 定位</div>
  <div class="text-xs text-gray-300 mt-1">
    本地 LLM 的事实标准
  </div>
</div>
</v-click>

---
transition: slide-left
layout: center
---

# 热门项目影响力对比

<div class="flex justify-center items-end gap-8 h-80 mt-8">
  <div v-motion :initial="{ height: 0 }" :enter="{ height: '30%', transition: { delay: 0, duration: 1000 } }" class="bar-item">
    <div class="bar" style="height: 100%; background: linear-gradient(to top, #6366f1, #8b5cf6);"></div>
    <div class="bar-label">Claude Code<br><span class="text-yellow-400">45k</span></div>
  </div>
  
  <div v-motion :initial="{ height: 0 }" :enter="{ height: '60%', transition: { delay: 200, duration: 1000 } }" class="bar-item">
    <div class="bar" style="height: 100%; background: linear-gradient(to top, #06b6d4, #3b82f6);"></div>
    <div class="bar-label">Ollama<br><span class="text-yellow-400">165k</span></div>
  </div>
  
  <div v-motion :initial="{ height: 0 }" :enter="{ height: '100%', transition: { delay: 400, duration: 1000 } }" class="bar-item">
    <div class="bar" style="height: 100%; background: linear-gradient(to top, #ec4899, #8b5cf6);"></div>
    <div class="bar-label">OpenClaw<br><span class="text-yellow-400">311k</span></div>
  </div>
  
  <div v-motion :initial="{ height: 0 }" :enter="{ height: '58%', transition: { delay: 600, duration: 1000 } }" class="bar-item">
    <div class="bar" style="height: 100%; background: linear-gradient(to top, #f59e0b, #ef4444);"></div>
    <div class="bar-label">n8n<br><span class="text-yellow-400">179k</span></div>
  </div>
</div>

---
transition: slide-left
layout: two-cols
---

# 4. OpenClaw

## 🐾 AI 智能体框架

<v-click>
<div class="feature-item">
  <span class="feature-icon">🧩</span>
  <span>54+ Skill 插件系统</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">🔌</span>
  <span>多通道支持（Discord/QQ/微信）</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">🏢</span>
  <span>企业级权限管理</span>
</div>
</v-click>

<v-click>
<div class="feature-item">
  <span class="feature-icon">🔐</span>
  <span>安全沙箱隔离执行</span>
</div>
</v-click>

<v-click>

```yaml
# ~/.openclaw/openclaw.yaml
agents:
  hebe:
    model: kimi-coding/k2p5
    skills:
      - github
      - web-search
      - browser
```

</v-click>

::right::

<v-click>
<div class="stats-card highlight">
  <div class="text-5xl font-bold text-pink-400">⭐ 311k+</div>
  <div class="text-gray-400">GitHub Stars</div>
  <div class="text-xs text-pink-300 mt-2">🏆 排名第一</div>
</div>
</v-click>

---
transition: slide-left
layout: center
---

# 快速选择指南

<div class="grid grid-cols-3 gap-6 mt-8">
  <div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0 }" class="category-card ai">
    <div class="text-5xl mb-4">🤖</div>
    <h3 class="text-xl font-bold text-indigo-300 mb-2">AI 编程助手</h3>
    <p class="text-sm text-gray-400 mb-3">想要 AI 帮你写代码？</p>
    <div class="recommendation">
      <div class="text-xs text-gray-500">推荐</div>
      <div class="font-bold text-white">Claude Code</div>
      <div class="text-xs text-gray-400">或 Cursor</div>
    </div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }" class="category-card privacy">
    <div class="text-5xl mb-4">🔒</div>
    <h3 class="text-xl font-bold text-cyan-300 mb-2">隐私优先</h3>
    <p class="text-sm text-gray-400 mb-3">数据不能上云？</p>
    <div class="recommendation">
      <div class="text-xs text-gray-500">推荐</div>
      <div class="font-bold text-white">Ollama</div>
      <div class="text-xs text-gray-400">+ Open WebUI</div>
    </div>
  </div>
  
  <div v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }" class="category-card automation">
    <div class="text-5xl mb-4">⚡</div>
    <h3 class="text-xl font-bold text-orange-300 mb-2">自动化</h3>
    <p class="text-sm text-gray-400 mb-3">想自动化工作流？</p>
    <div class="recommendation">
      <div class="text-xs text-gray-500">推荐</div>
      <div class="font-bold text-white">n8n</div>
      <div class="text-xs text-gray-400">开源 Zapier</div>
    </div>
  </div>
</div>

---
transition: slide-left
layout: center
class: text-center
---

<Particles />

<div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-slate-900/80" />

<div class="relative z-10">
  <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
    感谢观看
  </h1>
  
  <div class="flex justify-center gap-6 mb-8">
    <a href="https://github.com/little-ant-burn/slidev-ppt" target="_blank" class="social-link">
      <carbon:logo-github class="text-2xl" />
      <span>GitHub</span>
    </a>
    <a href="https://github.com/little-ant-burn" target="_blank" class="social-link">
      <carbon:user-avatar class="text-2xl" />
      <span>Profile</span>
    </a>
  </div>
  
  <!-- 导出按钮 -->
  <div class="flex justify-center gap-4 mb-8">
    <a href="./slides-export.pdf" download class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-full text-red-300 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-orange-500/30 hover:border-red-400/50 transition-all">
      <carbon:document-pdf class="text-xl" />
      <span>下载 PDF 幻灯片</span>
    </a>
    <a href="https://github.com/little-ant-burn/slidev-ppt/releases/tag/pdf-latest" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400/50 transition-all">
      <carbon:download class="text-xl" />
      <span>获取最新版本</span>
    </a>
  </div>
  
  <p class="text-gray-400">
    Made with ❤️ and Slidev by Hebe 🐾
  </p>
</div>
