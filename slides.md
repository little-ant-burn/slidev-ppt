---
theme: seriph
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80
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

<!-- 
封面页优化：
- 使用全屏背景图
- 添加渐变遮罩
- 标题动画效果
- 添加日期和作者信息
-->

<div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-blue-900/90"></div>

<div class="relative z-10">
  <div v-click class="mb-6">
    <span class="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm text-white/80 border border-white/20">
      🚀 2026 开源生态年度报告
    </span>
  </div>
  
  <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    热门 GitHub 开源项目精选
  </h1>
  
  <p class="text-2xl text-white/90 mb-8">
    2026 年值得关注的 <span class="text-cyan-400 font-bold">12</span> 个开源项目
  </p>
  
  <div v-click class="flex justify-center gap-4 mb-12">
    <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">🤖 AI 编程</span>
    <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">⚡ 开发工具</span>
    <span class="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">🛠️ 框架</span>
  </div>
  
  <div v-click>
    <span @click="$slidev.nav.next" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300 cursor-pointer hover:scale-105">
      开始探索 <carbon:arrow-right class="inline"/>
    </span>
  </div>
  
  <div class="absolute bottom-8 left-0 right-0 text-white/50 text-sm">
    <p>Presented by Hebe 🐾 | OpenClaw AI 助手</p>
    <p class="mt-1">2026年3月15日</p>
  </div>
</div>

<!--
演讲者备注:
【开场白】
大家好！我是 Hebe，运行在 OpenClaw 框架上的 AI 助手。

【主题介绍】
今天给大家带来 2026 年最值得关注的热门 GitHub 开源项目精选。
我们从 3 个维度精选了 12 个项目：
1. AI 编程工具 - 5 个项目
2. 开发体验工具 - 4 个项目  
3. 后端服务框架 - 3 个项目

【演讲时长】
预计 15-20 分钟，每个项目 1-2 分钟

【互动提示】
- 有任何问题可以随时打断提问
- 最后会有 Q&A 环节
- PPT 源码已开源，链接在最后

【技术准备】
- 确保网络连接（需要展示在线 Demo）
- 打开 Claude Code 和 Cursor 备用
- 准备 OpenClaw 实时演示环境
-->

---
layout: section
class: text-center
---

<!-- 章节页：AI 编程工具 -->

<div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>

<div class="relative z-10">
  <div class="text-8xl mb-6">🤖</div>
  <h1 class="text-5xl font-bold text-white mb-4">第一部分</h1>
  <h2 class="text-3xl text-blue-300 mb-8">AI 编程工具</h2>
  
  <div class="flex justify-center gap-6 text-white/80">
    <div class="text-center">
      <div class="text-4xl mb-2">5</div>
      <div class="text-sm">个项目</div>
    </div>
    <div class="w-px bg-white/20"></div>
    <div class="text-center">
      <div class="text-4xl mb-2">⭐</div>
      <div class="text-sm">500k+ Stars</div>
    </div>
    <div class="w-px bg-white/20"></div>
    <div class="text-center">
      <div class="text-4xl mb-2">🔥</div>
      <div class="text-sm">爆发式增长</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【章节过渡】
首先进入第一部分：AI 编程工具

【市场背景】
2025-2026 年是 AI 编程工具的爆发年：
- GitHub Copilot 用户数突破 100 万
- Cursor 估值突破 10 亿美元
- 各大厂商纷纷推出 AI 编程助手

【核心洞察】
这些工具不只是"代码补全"，而是真正的"结对编程伙伴"

【即将介绍】
1. Claude Code - Anthropic 官方终端工具
2. Cursor - AI 优先编辑器
3. Ollama - 本地模型运行
4. OpenClaw - AI 智能体框架
5. Bolt - AI 全栈生成工具
-->

---
layout: two-cols
class: "bg-gradient-to-br from-slate-50 to-slate-100"
---

<!-- Claude Code 页面优化 -->

# <span class="text-gradient">1. Claude Code</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs font-bold">ANTHROPIC 官方</span>
</div>

## 🤖 终端 AI 编程助手

<v-clicks>

- ✨ 直接在命令行与 Claude 对话
- 🛠️ 支持代码编辑、调试、重构
- 🔗 深度集成 Git 和文件系统
- 🛡️ 安全的权限控制机制

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">快速开始</div>

```bash
# 安装
npm install -g @anthropic-ai/claude-code

# 启动
claude
```

</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">核心特性</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🎯</span>
      <div>
        <div class="font-medium">自然语言编程</div>
        <div class="text-xs text-slate-500">用英文/中文描述需求</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🔍</span>
      <div>
        <div class="font-medium">项目级理解</div>
        <div class="text-xs text-slate-500">跨文件分析和修改</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🐛</span>
      <div>
        <div class="font-medium">自动错误修复</div>
        <div class="text-xs text-slate-500">识别并修复 Bug</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">⚡</span>
      <div>
        <div class="font-medium">高效重构</div>
        <div class="text-xs text-slate-500">批量代码改进</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-2xl font-bold text-orange-600">⭐ 45k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">趋势</div>
        <div class="text-lg font-bold text-green-600">🔥 快速增长</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Claude Code 详细介绍】

1. **产品定位**
   - Anthropic 在 2025 年初发布的重磅产品
   - 不是简单的代码补全，而是能理解整个项目的 AI 助手
   
2. **核心优势**
   - 终端原生体验：直接在当前工作目录运行
   - 项目级理解：能分析整个代码库的结构和依赖
   - 安全模式：所有文件操作都需要用户确认（y/n）
   - Git 集成：自动提交、创建分支、解决冲突

3. **实际使用场景**
   - 重构代码："把这段回调改成 async/await"
   - 调试："这个报错是什么原因？"
   - 代码审查："检查这个函数的边界情况"
   - 生成测试："给这个模块写单元测试"

4. **与 Cursor 的区别**
   - Claude Code：终端工具，适合自动化脚本
   - Cursor：图形编辑器，适合日常开发
   
5. **定价**
   - 免费额度：每月有一定免费次数
   - Pro 版：$20/月，无限使用

6. **演示建议**
   - 可以现场演示：claude "帮我重构这个函数"
   - 展示安全确认机制
   - 展示 Git 集成（自动 commit）

7. **注意事项**
   - 需要联网使用
   - 大型项目分析可能较慢
   - 代码建议需要人工审核
-->

---
layout: two-cols
class: "bg-gradient-to-br from-indigo-50 to-blue-50"
---

<!-- Cursor 页面优化 -->

# <span class="text-gradient">2. Cursor</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-bold">VS CODE 分支</span>
  <span class="inline-block px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-bold ml-2">100万+ 用户</span>
</div>

## ✨ AI 优先的代码编辑器

<v-clicks>

- 🎯 基于 VS Code，无缝迁移
- 🤖 内置 Claude 3.5 Sonnet / GPT-4
- ⚡ Tab 自动补全整段代码
- 💬 Chat 模式理解项目上下文

</v-clicks>

<div class="mt-6 space-y-3">
  <div class="p-4 bg-slate-800 rounded-lg">
    <div class="text-xs text-slate-400 mb-2">安装方式 1：命令行</div>

```bash
curl -fsSL https://cursor.sh/install.sh | sh
```

  </div>
  
  <div class="p-4 bg-slate-800 rounded-lg">
    <div class="text-xs text-slate-400 mb-2">安装方式 2：官网下载</div>

```bash
https://cursor.com/downloads
```

  </div>
</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">杀手级功能</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-indigo-500">
      <span class="text-2xl">🎹</span>
      <div>
        <div class="font-medium text-indigo-700">Composer</div>
        <div class="text-xs text-slate-500">多文件同时编辑，一键重构整个项目</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-purple-500">
      <span class="text-2xl">@</span>
      <div>
        <div class="font-medium text-purple-700">@ 符号引用</div>
        <div class="text-xs text-slate-500">@workspace @file @code 精准引用</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
      <span class="text-2xl">💡</span>
      <div>
        <div class="font-medium text-blue-700">智能重构</div>
        <div class="text-xs text-slate-500">选中代码，一键优化和改进</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
      <span class="text-2xl">📝</span>
      <div>
        <div class="font-medium text-green-700">自动 Commit</div>
        <div class="text-xs text-slate-500">AI 生成清晰的 commit message</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 grid grid-cols-2 gap-3">
    <div class="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 text-center">
      <div class="text-xs text-slate-600">用户数</div>
      <div class="text-xl font-bold text-indigo-600">100万+</div>
    </div>
    <div class="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 text-center">
      <div class="text-xs text-slate-600">趋势</div>
      <div class="text-xl font-bold text-purple-600">🚀 爆发式</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Cursor 详细介绍】

1. **产品背景**
   - 2024-2025 年迅速崛起，成为开发者新宠
   - 基于 VS Code 分叉，完全兼容插件生态
   - 获得 OpenAI 和业界大佬背书

2. **核心功能详解**
   
   **Composer（最强大功能）**
   - 可以同时修改多个文件
   - 示例："把项目从 JavaScript 迁移到 TypeScript"
   - AI 会分析依赖关系，批量修改所有相关文件
   - 显示 diff，用户可以逐条确认
   
   **@ 符号系统**
   - @workspace：引用整个项目上下文
   - @file：引用特定文件
   - @code：引用代码块
   - @docs：引用在线文档
   
   **Tab 补全**
   - 不只是单行补全，可以补全整个函数
   - 基于项目上下文，理解命名规范
   - 支持多语言混合项目

3. **使用技巧**
   - Ctrl+L 打开 Chat
   - Ctrl+K 内联编辑
   - Ctrl+I Composer
   - 选中代码后按 Ctrl+K 快速重构

4. **定价模式**
   - 免费版：每月 2000 次代码补全
   - Pro 版：$20/月，无限使用
   - 支持 GPT-4 和 Claude 模型切换

5. **与 Claude Code 对比**
   | 特性 | Cursor | Claude Code |
   |------|--------|-------------|
   | 界面 | GUI | CLI |
   | 适用场景 | 日常开发 | 自动化脚本 |
   | 学习曲线 | 低 | 中 |
   | 插件支持 | 完整 VS Code | 无 |

6. **实际案例**
   - 用 Cursor 3 天重构了一个中型项目
   - 自动生成测试用例，覆盖率达到 80%
   - Bug 修复速度提升 5 倍

7. **注意事项**
   - 需要联网使用
   - 代码会上传到云端分析
   - 对隐私敏感的项目需谨慎
-->

---
layout: two-cols
class: "bg-gradient-to-br from-emerald-50 to-teal-50"
---

<!-- Ollama 页面优化 -->

# <span class="text-gradient">3. Ollama</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-bold">🦙 本地优先</span>
  <span class="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold ml-2">开源免费</span>
</div>

## 🦙 本地大模型运行平台

<v-clicks>

- 🔒 数据完全本地，隐私无忧
- 💰 零 API 费用，永久免费
- ⚡ 低延迟，离线可用
- 🔧 支持自定义模型参数

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">快速开始</div>

```bash
# 安装
brew install ollama

# 运行模型
ollama run llama3.2
ollama run deepseek-coder
ollama run qwen2.5
```

</div>

<div class="mt-4 p-3 bg-emerald-50 rounded border border-emerald-200">
  <div class="text-xs text-emerald-700 font-medium">💡 REST API 示例</div>

```bash
curl http://localhost:11434/api/generate \
  -d '{"model":"llama3.2","prompt":"你好"}'
```

</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">核心优势</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl">🔒</div>
      <div>
        <div class="font-medium">数据隐私</div>
        <div class="text-xs text-slate-500">所有数据本地处理，不上传云端</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">⚡</div>
      <div>
        <div class="font-medium">极速响应</div>
        <div class="text-xs text-slate-500">无需网络延迟，本地 GPU 加速</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-xl">📦</div>
      <div>
        <div class="font-medium">丰富模型库</div>
        <div class="text-xs text-slate-500">1000+ 模型，一键下载运行</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-xl">🔧</div>
      <div>
        <div class="font-medium">高度定制</div>
        <div class="text-xs text-slate-500">Modelfile 自定义参数和系统提示</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-3xl font-bold text-emerald-600">⭐ 130k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">定位</div>
        <div class="text-lg font-bold text-emerald-700">本地 LLM 标准</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Ollama 详细介绍】

1. **为什么重要**
   - 解决了大模型的隐私问题
   - 企业可以在内网部署
   - 个人用户无需担心数据泄露
   - 完全免费，无使用限制

2. **支持的模型**
   - Llama 3.2 (Meta)
   - Mistral / Mixtral
   - DeepSeek Coder
   - Qwen 2.5 (阿里)
   - CodeLlama
   - 1000+ 社区模型

3. **Modelfile 示例**
   ```dockerfile
   FROM llama3.2
   PARAMETER temperature 0.7
   PARAMETER top_p 0.9
   SYSTEM """你是一个专业的编程助手"""
   ```
   保存为 Modelfile，然后：
   ollama create my-model -f Modelfile

4. **与 OpenWebUI 配合**
   - OpenWebUI 提供 ChatGPT 风格的 Web 界面
   - 支持多用户、对话历史
   - 支持 RAG（知识库）
   - 完全本地部署的 ChatGPT 替代品

5. **硬件要求**
   - 7B 模型：8GB+ 内存
   - 13B 模型：16GB+ 内存
   - 70B 模型：64GB+ 内存 + GPU
   - 推荐：M1/M2/M3 Mac 或 RTX 4090

6. **实际应用场景**
   - 企业内部知识库问答
   - 代码审查助手（内网环境）
   - 敏感数据处理
   - 离线环境下的 AI 辅助

7. **在 OpenClaw 中使用**
   - 配置 ollama 后端
   - 可以替代 OpenAI API
   - 实现完全本地的 AI 助手

8. **性能优化技巧**
   - 使用量化版本（Q4/Q5）
   - GPU 层数调整
   - 上下文长度控制
-->

---
layout: two-cols
class: "bg-gradient-to-br from-rose-50 to-orange-50"
---

<!-- OpenClaw 页面优化 -->

# <span class="text-gradient">4. OpenClaw</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-rose-100 text-rose-700 text-xs font-bold">🐾 智能体框架</span>
  <span class="inline-block px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs font-bold ml-2">54+ 技能</span>
</div>

## 🤖 AI 智能体平台

<v-clicks>

- 🧩 插件化 Skill 架构
- 🔌 多通道支持（Discord/QQ/微信）
- 🏢 企业级权限控制
- 📊 内置监控和分析
- 🔐 安全沙箱执行

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">配置示例：Hebe（就是我！）</div>

```yaml
# ~/.openclaw/openclaw.yaml
agents:
  hebe:
    model: kimi-coding/k2p5
    skills:
      - github
      - browser
      - web-search
    memory:
      qmd_enabled: true
```

</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">架构特点</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-rose-500">
      <span class="text-2xl">🧩</span>
      <div>
        <div class="font-medium text-rose-700">Skill 插件系统</div>
        <div class="text-xs text-slate-500">54+ 可扩展技能，覆盖开发/生活/娱乐</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
      <span class="text-2xl">🧠</span>
      <div>
        <div class="font-medium text-orange-700">分层记忆系统</div>
        <div class="text-xs text-slate-500">QMD + Obsidian 实现长期记忆</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-amber-500">
      <span class="text-2xl">⏰</span>
      <div>
        <div class="font-medium text-amber-700">定时任务系统</div>
        <div class="text-xs text-slate-500">4 个自动化任务持续运行</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-yellow-500">
      <span class="text-2xl">💬</span>
      <div>
        <div class="font-medium text-yellow-700">多通道支持</div>
        <div class="text-xs text-slate-500">Discord、QQ、WebChat 同时在线</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg border border-rose-200">
    <div class="text-center">
      <div class="text-sm text-slate-600">定位</div>
      <div class="text-xl font-bold text-rose-600">AI 智能体操作系统</div>
      <div class="mt-2 text-sm text-slate-500">🐾 Hebe 就是运行在此框架上</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【OpenClaw 详细介绍】

1. **这是什么？**
   - 这就是我（Hebe）运行的框架！
   - 不是一个简单的聊天机器人，而是一个完整的智能体平台
   - 可以理解为 "AI 的操作系统"

2. **核心组件**
   
   **Skill 系统**
   - 54 个内置技能
   - 包括：github、browser、web-search、apple-notes 等
   - 可以通过 clawhub 安装更多
   - 每个 Skill 都是独立的功能模块
   
   **记忆系统**
   - QMD：本地向量数据库，支持语义搜索
   - Obsidian：知识库存储，PARA 方法组织
   - Memory：长期记忆文件
   - Session Context：短期对话上下文
   
   **定时任务**
   - Docling：每5分钟文档转换
   - QMD 索引：每5分钟更新
   - 每日归档：每天23:00自动归档对话
   
   **多通道**
   - WebChat：网页界面
   - QQ：QQ 机器人
   - Discord：Discord 集成
   - 未来支持：微信、Telegram、Slack

3. **实际演示**
   - 可以现场展示 OpenClaw 的能力
   - 例如："帮我查一下 GitHub trending"
   - 展示记忆系统："记得昨天我们讨论了什么吗？"

4. **与 Dify 的区别**
   - Dify：低代码平台，适合快速搭建
   - OpenClaw：智能体框架，更灵活、更强大
   - Dify 有界面，OpenClaw 更偏向代码配置

5. **使用场景**
   - 个人 AI 助手（就是我现在的形态）
   - 企业自动化工作流
   - 多平台客服机器人
   - 开发者工具集成

6. **技术栈**
   - 后端：Node.js + TypeScript
   - 数据库：SQLite + sqlite-vec（向量）
   - 前端：Vue 3
   - 部署：Docker / 本地运行

7. **开源状态**
   - 核心框架开源
   - 社区活跃，持续更新
   - 文档完善：https://openclaw.ai/docs
--

---
layout: section
class: text-center
---

<!-- 章节页：开发体验 -->

<div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900"></div>

<div class="relative z-10">
  <div class="text-8xl mb-6">⚡</div>
  <h1 class="text-5xl font-bold text-white mb-4">第二部分</h1>
  <h2 class="text-3xl text-purple-300 mb-8">开发体验工具</h2>
  
  <div class="flex justify-center gap-6 text-white/80">
    <div class="text-center">
      <div class="text-4xl mb-2">4</div>
      <div class="text-sm">个项目</div>
    </div>
    <div class="w-px bg-white/20"></div>
    <div class="text-center">
      <div class="text-4xl mb-2">⭐</div>
      <div class="text-sm">400k+ Stars</div>
    </div>
    <div class="w-px bg-white/20"></div>
    <div class="text-center">
      <div class="text-4xl mb-2">🎯</div>
      <div class="text-sm">体验至上</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【章节过渡】
进入第二部分：开发体验工具

【核心理念】
这些工具的共同目标是：让开发者更快乐、更高效

【即将介绍】
1. Next.js 15 - React 全栈框架
2. shadcn/ui - 组件库新范式
3. Hono - 边缘优先 Web 框架
4. Slidev - 开发者演示工具（本 PPT 就是用这个做的）

【趋势洞察】
- "零配置"成为标配
- TypeScript 成为默认
- 边缘计算崛起
- 开发者体验（DX）优先
--

---
layout: two-cols
class: "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white"
---

<!-- Next.js 15 页面优化 -->

# <span class="text-white">5. Next.js 15</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-white/10 text-white text-xs font-bold">⚛️ REACT 框架</span>
  <span class="inline-block px-2 py-1 rounded bg-white/10 text-white text-xs font-bold ml-2">VERCEL 出品</span>
</div>

## 🚀 React 全栈框架

<v-clicks>

- ⚡ React Server Components 默认
- 🛣️ App Router 约定式路由
- 🔥 Turbopack 极速构建
- 🌍 Edge Runtime 支持

</v-clicks>

<div class="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
  <div class="text-xs text-white/60 mb-2">RSC 示例</div>

```tsx
// app/page.tsx
export default async function Page() {
  const data = await fetch('https://api.example.com')
  return <h1>{data.title}</h1>
}
```

</div>

<div class="mt-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded border border-white/10">
  <div class="text-xs text-white/60 mb-1">性能对比</div>
  <div class="flex items-center gap-2 text-sm">
    <span class="text-white/80">Turbopack vs Webpack</span>
    <span class="text-green-400 font-bold">10x 更快 ⚡</span>
  </div>
</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-white/90">核心优势</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
      <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">⚡</div>
      <div>
        <div class="font-medium text-white">RSC 默认</div>
        <div class="text-xs text-white/60">服务端组件，零 JS Bundle</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
      <div class="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-xl">🛣️</div>
      <div>
        <div class="font-medium text-white">嵌套布局</div>
        <div class="text-xs text-white/60">layout.tsx + page.tsx 灵活组合</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
      <div class="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-xl">🔥</div>
      <div>
        <div class="font-medium text-white">流式传输</div>
        <div class="text-xs text-white/60">Streaming SSR，首屏更快</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
      <div class="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-xl">🌍</div>
      <div>
        <div class="font-medium text-white">Edge Ready</div>
        <div class="text-xs text-white/60">中间件和 API 路由支持 Edge</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 grid grid-cols-2 gap-3">
    <div class="p-3 bg-white/10 rounded-lg text-center backdrop-blur-sm">
      <div class="text-xs text-white/60">Stars</div>
      <div class="text-xl font-bold text-white">⭐ 130k+</div>
    </div>
    <div class="p-3 bg-white/10 rounded-lg text-center backdrop-blur-sm">
      <div class="text-xs text-white/60">部署</div>
      <div class="text-lg font-bold text-white">Vercel</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Next.js 15 详细介绍】

1. **重大更新**（相比 Next.js 14）
   - React Server Components (RSC) 成为默认
   - Turbopack 开发服务器（比 Webpack 快 10 倍）
   - 流式传输（Streaming）全面支持
   - 新的缓存策略

2. **App Router 详解**
   ```
   app/
   ├── layout.tsx      # 根布局
   ├── page.tsx        # 首页
   ├── loading.tsx     # 加载状态
   ├── error.tsx       # 错误处理
   ├── about/
   │   ├── page.tsx    # /about
   │   └── layout.tsx  # about 专属布局
   └── api/
       └── route.ts    # API 路由
   ```

3. **React Server Components**
   - 服务端渲染，不发送 JS 到客户端
   - 可以直接访问数据库
   - 大幅减少 Bundle 大小
   - 示例：
     ```tsx
     // 这个组件只在服务端运行
     async function ProductList() {
       const products = await db.products.findAll()
       return <ul>{products.map(...)}</ul>
     }
     ```

4. **Turbopack**
   - Rust 编写的构建工具
   - 热更新（HMR）快到毫秒级
   - 大型项目启动时间从分钟到秒
   - 完全兼容现有 Webpack 配置

5. **部署**
   - Vercel：最佳体验，零配置
   - Docker：自托管支持
   - Node.js：传统服务器
   - Edge：Cloudflare Workers 等

6. **实际案例**
   - Vercel.com 自己用 Next.js
   - GitHub 新版部分页面使用
   - 很多初创公司首选框架

7. **学习资源**
   - 官方文档：https://nextjs.org/docs
   - App Router 教程（必须看）
   - Vercel YouTube 频道

8. **与 Nuxt 对比**
   - Next.js：React 生态
   - Nuxt：Vue 生态
   - 两者功能类似，看个人技术栈
--

---
layout: two-cols
class: "bg-gradient-to-br from-zinc-50 to-neutral-50"
---

<!-- shadcn/ui 页面优化 -->

# <span class="text-gradient">6. shadcn/ui</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-zinc-200 text-zinc-700 text-xs font-bold">🎨 组件库</span>
  <span class="inline-block px-2 py-1 rounded bg-neutral-200 text-neutral-700 text-xs font-bold ml-2">非 NPM 包</span>
</div>

## 🎨 React 组件新范式

<v-clicks>

- 🎯 代码即组件，完全可控
- 📋 复制代码，不是 npm install
- ♿ 基于 Radix UI，无障碍支持
- 🌙 暗黑模式内置

</v-clicks>

<div class="mt-6 space-y-3">
  <div class="p-4 bg-slate-800 rounded-lg">
    <div class="text-xs text-slate-400 mb-2">初始化项目</div>

```bash
npx shadcn@latest init
```

  </div>
  
  <div class="p-4 bg-slate-800 rounded-lg">
    <div class="text-xs text-slate-400 mb-2">添加组件</div>

```bash
npx shadcn add button dialog card
```

  </div>
</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">独特之处</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-zinc-500">
      <span class="text-2xl">🎯</span>
      <div>
        <div class="font-medium text-zinc-700">拥有代码</div>
        <div class="text-xs text-slate-500">组件代码复制到你的项目，完全可修改</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-neutral-500">
      <span class="text-2xl">♿</span>
      <div>
        <div class="font-medium text-neutral-700">无障碍优先</div>
        <div class="text-xs text-slate-500">WCAG 2.1 标准，键盘导航支持</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-gray-500">
      <span class="text-2xl">🌙</span>
      <div>
        <div class="font-medium text-gray-700">暗黑模式</div>
        <div class="text-xs text-slate-500">一键切换，自动适配</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 border-stone-500">
      <span class="text-2xl">🔧</span>
      <div>
        <div class="font-medium text-stone-700">Tailwind 集成</div>
        <div class="text-xs text-slate-500">基于 Tailwind CSS，样式灵活</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-zinc-100 to-neutral-100 rounded-lg border border-zinc-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-3xl font-bold text-zinc-700">⭐ 120k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">生态</div>
        <div class="text-lg font-bold text-zinc-700">300+ 组件</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【shadcn/ui 详细介绍】

1. **颠覆性理念**
   - 传统组件库：npm install，难以定制
   - shadcn/ui：复制代码到项目，完全拥有
   - 不是依赖，而是"脚手架"

2. **工作流程**
   ```bash
   # 1. 初始化
   npx shadcn@latest init
   
   # 2. 添加组件（代码复制到项目）
   npx shadcn add button
   
   # 3. 代码在：components/ui/button.tsx
   # 可以自由修改这个文件！
   ```

3. **技术栈**
   - Radix UI：底层交互逻辑（无障碍）
   - Tailwind CSS：样式系统
   - class-variance-authority：组件变体
   - clsx + tailwind-merge：类名合并

4. **组件变体系统**
   ```tsx
   // button.tsx
   const buttonVariants = cva(
     "inline-flex items-center justify-center",
     {
       variants: {
         variant: {
           default: "bg-primary text-primary-foreground",
           destructive: "bg-destructive text-destructive-foreground",
           outline: "border border-input bg-background",
           // ...
         },
         size: {
           default: "h-10 px-4 py-2",
           sm: "h-9 px-3",
           lg: "h-11 px-8",
         },
       },
     }
   )
   ```

5. **主题定制**
   - CSS 变量定义颜色系统
   - 一键切换主题
   - 支持任意配色方案
   - 可以通过 v0.dev 生成自定义主题

6. **生态工具**
   - v0.dev：AI 生成组件
   - shadcn/ui 官网：300+ 组件
   - 社区主题：50+ 主题可选
   - blocks：复杂页面模板

7. **实际案例**
   - 本 PPT 使用 seriph 主题
   - Vercel 官网使用
   - 很多开源项目采用

8. **最佳实践**
   - 不要直接修改 node_modules
   - 复制后的组件可以任意修改
   - 建议建立团队规范
   - 配合 v0.dev 快速原型
--

---
layout: two-cols
class: "bg-gradient-to-br from-red-50 to-rose-50"
---

<!-- Hono 页面优化 -->

# <span class="text-gradient">7. Hono</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-bold">🔥 边缘优先</span>
  <span class="inline-block px-2 py-1 rounded bg-rose-100 text-rose-700 text-xs font-bold ml-2">15KB</span>
</div>

## 🔥 轻量级 Web 框架

<v-clicks>

- 📦 零依赖，单文件运行
- ⚡ 极致性能，边缘优化
- 🌍 多运行时支持
- 💪 TypeScript 原生

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">Hello World</div>

```ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/api/users', (c) => c.json([{ name: 'Hebe' }]))

export default app
```

</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">全平台支持</h3>
  
  <v-clicks>
  
  <div class="grid grid-cols-2 gap-3">
    <div class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🟢</span>
      <div class="text-sm font-medium">Node.js</div>
    </div>
    
    <div class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🦕</span>
      <div class="text-sm font-medium">Deno</div>
    </div>
    
    <div class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🥟</span>
      <div class="text-sm font-medium">Bun</div>
    </div>
    
    <div class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">☁️</span>
      <div class="text-sm font-medium">Cloudflare</div>
    </div>
    
    <div class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">▲</span>
      <div class="text-sm font-medium">Vercel Edge</div>
    </div>
    
    <div class="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🌩️</span>
      <div class="text-sm font-medium">AWS Lambda</div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-2xl font-bold text-red-600">⭐ 55k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">大小</div>
        <div class="text-lg font-bold text-red-600">15KB (gzip)</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Hono 详细介绍】

1. **核心理念**
   - "Fast, Lightweight, Web-Standard"
   - 边缘计算时代的 Express.js
   - 极致轻量，极致性能

2. **为什么是 15KB？**
   - 零依赖，无外部包
   - Tree-shaking 友好
   - 只包含核心功能

3. **多运行时意味着什么？**
   ```ts
   // 同样的代码，到处运行
   
   // Node.js
   import { serve } from '@hono/node-server'
   serve(app)
   
   // Cloudflare Workers
   export default app
   
   // Deno
   Deno.serve(app.fetch)
   
   // Bun
   Bun.serve({ fetch: app.fetch })
   ```

4. **性能对比**
   | 框架 | 吞吐量 (req/sec) |
   |------|------------------|
   | Hono | ~120,000 |
   | Express | ~20,000 |
   | Fastify | ~80,000 |
   
   *在 Cloudflare Workers 环境测试*

5. **中间件系统**
   ```ts
   app.use(logger())
   app.use(cors())
   app.use(auth())
   
   app.get('/api/*', async (c, next) => {
     // 前置处理
     await next()
     // 后置处理
   })
   ```

6. **实际应用场景**
   - API 网关
   - Webhook 处理器
   - 边缘函数
   - BFF (Backend for Frontend)
   - 微服务

7. **在 OpenClaw 中使用**
   - Gateway 层使用类似架构
   - 轻量级路由处理
   - 边缘部署支持

8. **与 Express 对比**
   - API 设计相似，学习成本低
   - TypeScript 原生支持
   - 性能提升 6 倍以上
   - 更小的 Bundle 体积
--

---
layout: two-cols
class: "bg-gradient-to-br from-violet-50 to-purple-50"
---

<!-- Slidev 页面优化 -->

# <span class="text-gradient">8. Slidev</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-violet-100 text-violet-700 text-xs font-bold">🎬 演示工具</span>
  <span class="inline-block px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-bold ml-2">本 PPT 制作工具</span>
</div>

## 🎬 开发者演示工具

<v-clicks>

- 📝 Markdown 编写幻灯片
- 💻 代码高亮 + 动画
- 🎨 Vue 组件支持
- 📄 导出 PDF / 网页

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">快速开始</div>

```bash
# 创建项目
npm init slidev

# 启动开发服务器
npm run dev

# 导出 PDF
npm run export
```

</div>

<div class="mt-4 p-3 bg-violet-50 rounded border border-violet-200">
  <div class="text-xs text-violet-700 font-medium mb-1">💡 本 PPT 源码</div>
  <div class="text-sm text-slate-600">https://github.com/little-ant-burn/slidev-ppt</div>
</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">为什么选择</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-xl">📝</div>
      <div>
        <div class="font-medium">Markdown 优先</div>
        <div class="text-xs text-slate-500">版本控制友好，Git 管理</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl">💻</div>
      <div>
        <div class="font-medium">代码展示完美</div>
        <div class="text-xs text-slate-500">Shiki 高亮 + 行号 + 聚焦动画</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-fuchsia-100 flex items-center justify-center text-xl">🎨</div>
      <div>
        <div class="font-medium">主题丰富</div>
        <div class="text-xs text-slate-500">可自定义，支持 Windi CSS</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-xl">🖼️</div>
      <div>
        <div class="font-medium">导出灵活</div>
        <div class="text-xs text-slate-500">PDF、PNG、SPA 静态网站</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-3xl font-bold text-violet-600">⭐ 40k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">状态</div>
        <div class="text-lg font-bold text-violet-600">🎉 活跃维护</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Slidev 详细介绍】

1. **为什么做这个 PPT 用 Slidev？**
   - Markdown 编写，版本控制方便
   - 代码展示效果完美
   - 可以直接插入 Vue 组件
   - 一键导出 PDF

2. **Markdown 语法**
   ```md
   ---
   layout: cover
   ---
   
   # 标题
   
   - 要点 1
   - 要点 2
   
   ---
   
   # 代码演示
   
   ```ts
   const hello = 'world'
   ```
   ```

3. **特殊功能**
   - `v-click`：点击动画
   - `v-clicks`：逐项显示
   - `layout: two-cols`：双列布局
   - `layout: center`：居中布局
   - `---`：分页
   
4. **代码高亮**
   - Shiki 引擎，VS Code 同款
   - 支持行号、高亮特定行
   - 聚焦动画（逐步显示）
   - 代码片段复制

5. **演讲者模式**
   - 按 `p` 进入演讲者视图
   - 显示当前页和下页
   - 显示演讲者备注（speaker notes）
   - 计时器和进度

6. **导出选项**
   ```bash
   npm run export        # 导出 PDF
   npm run export:png    # 导出 PNG 图片
   npm run build         # 导出静态网站
   ```

7. **主题系统**
   - 内置：default、seriph
   - 社区主题：30+
   - 自定义 CSS
   - Windi CSS / UnoCSS 支持

8. **使用建议**
   - 技术分享首选工具
   - 比 PowerPoint 更适合开发者
   - 可以直接在 GitHub 展示
   - 支持在线演示

9. **实际案例**
   - 本 PPT 完整源码开源
   - 使用了两列布局、渐变背景、动画效果
   - 每个页面都有演讲者备注
   - 配置了自动部署到 GitHub Pages
--

---
layout: section
class: text-center
---

<!-- 章节页：后端服务 -->

<div class="absolute inset-0 bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900"></div>

<div class="relative z-10">
  <div class="text-8xl mb-6">🗄️</div>
  <h1 class="text-5xl font-bold text-white mb-4">第三部分</h1>
  <h2 class="text-3xl text-cyan-300 mb-8">后端服务</h2>
  
  <div class="flex justify-center gap-6 text-white/80">
    <div class="text-center">
      <div class="text-4xl mb-2">4</div>
      <div class="text-sm">个项目</div>
    </div>
    <div class="w-px bg-white/20"></div>
    <div class="text-center">
      <div class="text-4xl mb-2">⭐</div>
      <div class="text-sm">350k+ Stars</div>
    </div>
    <div class="w-px bg-white/20"></div>
    <div class="text-center">
      <div class="text-4xl mb-2">🏗️</div>
      <div class="text-sm">基础设施</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【章节过渡】
进入第三部分：后端服务

【涵盖范围】
这一部分是 AI 应用和后端服务的基础设施：
1. Supabase - 开源 Firebase 替代
2. LangChain - LLM 应用框架
3. Dify - LLM 开发平台
4. Bolt - AI 应用生成工具

【核心价值】
这些工具帮助开发者快速构建 AI 应用的后端
--

---
layout: two-cols
class: "bg-gradient-to-br from-emerald-50 to-teal-50"
---

<!-- Supabase 页面优化 -->

# <span class="text-gradient">9. Supabase</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-bold">🗄️ 数据库</span>
  <span class="inline-block px-2 py-1 rounded bg-teal-100 text-teal-700 text-xs font-bold ml-2">开源 Firebase</span>
</div>

## 🗄️ 开源 Firebase 替代

<v-clicks>

- 🔄 PostgreSQL 实时数据库
- 🔐 内置身份认证系统
- 📦 对象存储（S3 兼容）
- ⚡ Edge Functions

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">实时订阅示例</div>

```ts
supabase
  .from('messages')
  .on('INSERT', (payload) => {
    console.log('New:', payload.new)
  })
  .subscribe()
```

</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">功能特性</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">🔄</span>
      <div>
        <div class="font-medium">实时数据库</div>
        <div class="text-xs text-slate-500">PostgreSQL + logical replication</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">🔐</span>
      <div>
        <div class="font-medium">身份认证</div>
        <div class="text-xs text-slate-500">OAuth、Magic Link、SSO</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">⚡</span>
      <div>
        <div class="font-medium">Edge Functions</div>
        <div class="text-xs text-slate-500">Deno 运行时，全球分发</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">🌍</span>
      <div>
        <div class="font-medium">全球 CDN</div>
        <div class="text-xs text-slate-500">自动边缘缓存</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-2xl font-bold text-emerald-600">⭐ 85k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">定价</div>
        <div class="text-lg font-bold text-emerald-600">免费额度 generous</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Supabase 详细介绍】

1. **为什么替代 Firebase？**
   - Firebase：Vendor lock-in，数据在 Google
   - Supabase：开源，PostgreSQL，自主可控
   - 可以导出数据，自托管

2. **核心功能详解**
   
   **PostgreSQL**
   - 完整的关系型数据库
   - 支持复杂查询、事务、索引
   - 可以直接用 SQL
   
   **实时订阅**
   - 基于 PostgreSQL logical replication
   - WebSocket 推送数据变更
   - 示例：聊天应用、实时协作
   
   **认证**
   - GoTrue 库（Netlify 开源）
   - 支持多种 OAuth 提供商
   - JWT token 管理
   - Row Level Security (RLS)

3. **使用场景**
   - 快速原型开发
   - MVP 产品
   - 实时应用（聊天、协作）
   - 需要 PostgreSQL 的应用

4. **自托管**
   ```bash
   # Docker Compose 一键部署
   git clone https://github.com/supabase/supabase.git
   cd supabase/docker
   docker-compose up
   ```

5. **与 Firebase 对比**
   | 特性 | Supabase | Firebase |
   |------|----------|----------|
   | 数据库 | PostgreSQL | Firestore |
   | 开源 | ✅ | ❌ |
   | 自托管 | ✅ | ❌ |
   | 实时 | ✅ | ✅ |
   | 价格 | 更低 | 较高 |

6. **定价**
   - Free tier：2GB 数据库，1GB 存储
   - Pro：$25/月，8GB 数据库，100GB 存储
   - 比 Firebase 便宜很多

7. **实际案例**
   - 很多初创公司使用
   - 适合快速启动项目
   - 可以从 Supabase 无缝迁移到自建 PostgreSQL
--

---
layout: two-cols
class: "bg-gradient-to-br from-yellow-50 to-amber-50"
---

<!-- LangChain 页面优化 -->

# <span class="text-gradient">10. LangChain</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-bold">🔗 LLM 框架</span>
  <span class="inline-block px-2 py-1 rounded bg-amber-100 text-amber-700 text-xs font-bold ml-2">Python + TS</span>
</div>

## 🔗 LLM 应用框架

<v-clicks>

- 📚 100+ 文档加载器
- 💾 向量存储集成
- 🤖 Agent 和工具系统
- ⛓️ 复杂工作流编排

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">基础示例</div>

```python
from langchain import OpenAI, LLMChain

llm = OpenAI()
chain = LLMChain(llm=llm, prompt=prompt)
result = chain.run("你好")
```

</div>

<div class="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
  <div class="text-xs text-yellow-700 font-medium">⚠️ 趋势变化</div>
  <div class="text-sm text-slate-600">2025 年后更多团队转向原生 SDK</div>
</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">生态系统</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">📚</div>
      <div>
        <div class="font-medium">文档加载器</div>
        <div class="text-xs text-slate-500">PDF、Word、网页、数据库</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">💾</div>
      <div>
        <div class="font-medium">向量存储</div>
        <div class="text-xs text-slate-500">Chroma、Pinecone、Qdrant</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">🤖</div>
      <div>
        <div class="font-medium">Agent 系统</div>
        <div class="text-xs text-slate-500">ReAct、Plan-and-Execute</div>
      </div>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">⛓️</div>
      <div>
        <div class="font-medium">LangGraph</div>
        <div class="text-xs text-slate-500">复杂工作流编排</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-2xl font-bold text-yellow-600">⭐ 100k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">争议</div>
        <div class="text-sm font-bold text-amber-600">过度抽象？</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【LangChain 详细介绍】

1. **历史地位**
   - 2023-2024 年最火的 LLM 框架
   - 提供了完整的 RAG、Agent 实现
   - 学习曲线平缓，文档完善

2. **核心概念**
   
   **Chains**
   - 把多个操作串联起来
   - 例如：检索 → 格式化 → LLM 调用
   
   **Agents**
   - 让 LLM 决定使用什么工具
   - ReAct 模式：Reasoning + Acting
   
   **Retrieval**
   - 向量数据库集成
   - 文本分块、嵌入、检索
   
   **Memory**
   - 对话历史管理
   - 短期记忆和长期记忆

3. **争议和批评**
   - **过度抽象**：简单的任务也变得复杂
   - **性能问题**：比原生 SDK 慢
   - **版本不稳定**：API 经常变动
   - **黑盒问题**：不容易调试

4. **什么时候用？**
   - ✅ 快速原型开发
   - ✅ 需要完整 RAG pipeline
   - ✅ 复杂 Agent 系统
   - ✅ 多模型切换
   
   - ❌ 简单应用（直接用 SDK 更好）
   - ❌ 性能敏感场景
   - ❌ 需要精细控制

5. **替代方案**
   - 原生 SDK：OpenAI、Anthropic
   - LlamaIndex：更专注 RAG
   - 自研框架：灵活性最高
   
6. **在 OpenClaw 中的选择**
   - 使用原生 API + QMD
   - 轻量级封装，避免过度抽象
   - 直接控制提示词和参数

7. **未来发展**
   - LangChain 推出了 LangGraph
   - 更灵活的工作流编排
   - 但社区开始分化
   
8. **建议**
   - 初学者：可以学习概念
   - 生产环境：谨慎使用
   - 复杂应用：考虑自研
--

---
layout: two-cols
class: "bg-gradient-to-br from-blue-50 to-indigo-50"
---

<!-- Dify 页面优化 -->

# <span class="text-gradient">11. Dify</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold">🧠 LLM 平台</span>
  <span class="inline-block px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-bold ml-2">可视化</span>
</div>

## 🧠 LLM 应用开发平台

<v-clicks>

- 🎨 可视化 Prompt 编辑
- 📚 知识库和 RAG 系统
- 🔌 API 和 SDK 支持
- 📊 运营分析面板

</v-clicks>

<div class="mt-6 p-4 bg-slate-800 rounded-lg">
  <div class="text-xs text-slate-400 mb-2">工作流配置</div>

```yaml
app:
  mode: chat
  model: gpt-4o
  tools:
    - web_search
    - code_interpreter
  knowledge:
    - my-docs
```

</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">平台能力</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">🎨</span>
      <div>
        <div class="font-medium">Prompt 版本控制</div>
        <div class="text-xs text-slate-500">可视化编辑，A/B 测试</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">📚</span>
      <div>
        <div class="font-medium">知识库管理</div>
        <div class="text-xs text-slate-500">自动分块、向量化、检索</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🔌</span>
      <div>
        <div class="font-medium">API 和 SDK</div>
        <div class="text-xs text-slate-500">RESTful、SSE、WebSocket</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">📊</span>
      <div>
        <div class="font-medium">运营分析</div>
        <div class="text-xs text-slate-500">成本追踪、质量评估</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
    <div class="flex items-center justify-between">
      <div>
        <div class="text-sm text-slate-600">GitHub Stars</div>
        <div class="text-2xl font-bold text-blue-600">⭐ 85k+</div>
      </div>
      <div class="text-right">
        <div class="text-sm text-slate-600">部署</div>
        <div class="text-lg font-bold text-blue-600">Docker</div>
      </div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Dify 详细介绍】

1. **产品定位**
   - 开源 LLM 应用开发平台
   - 介于 LangChain 和 no-code 之间
   - 适合快速搭建知识库问答系统

2. **核心功能**
   
   **可视化 Prompt 编辑**
   - 拖拽式界面
   - 变量插入
   - 版本控制和回滚
   - A/B 测试功能
   
   **知识库（RAG）**
   - 文档上传（PDF、Word、TXT）
   - 自动分块策略
   - 向量数据库集成
   - 检索结果重排序
   
   **工作流编排**
   - 可视化流程设计
   - 条件分支
   - 变量传递
   - 循环和并行

3. **部署方式**
   ```bash
   # Docker Compose 一键部署
   git clone https://github.com/langgenius/dify.git
   cd dify/docker
   docker-compose up -d
   ```
   访问 http://localhost 即可使用

4. **使用场景**
   - 企业知识库问答
   - 客服机器人
   - AI 助手快速原型
   - 多模型对比测试

5. **与 OpenClaw 的区别**
   - Dify：低代码平台，有 Web UI
   - OpenClaw：智能体框架，代码配置
   - Dify 适合业务人员，OpenClaw 适合开发者
   - Dify 专注 LLM 应用，OpenClaw 更广泛

6. **定价**
   - 社区版：免费，自托管
   - 云服务：按量付费
   - 企业版：更多功能和支持

7. **实际案例**
   - 很多企业内部知识库使用
   - 结合 Ollama 可以完全本地部署
   - 支持多租户，适合 SaaS 场景

8. **优缺点**
   - ✅ 快速搭建，无需编码
   - ✅ 完整的 RAG pipeline
   - ✅ 多模型支持
   - ✅ 可自托管
   
   - ❌ 灵活性不如代码
   - ❌ 复杂逻辑受限
   - ❌ 性能不如原生
--

---
layout: two-cols
class: "bg-gradient-to-br from-orange-50 to-red-50"
---

<!-- Bolt 页面优化 -->

# <span class="text-gradient">12. Bolt</span>

<div class="mb-4">
  <span class="inline-block px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs font-bold">⚡ AI 生成</span>
  <span class="inline-block px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-bold ml-2">StackBlitz</span>
</div>

## ⚡ AI 全栈应用生成

<v-clicks>

- 🎯 自然语言 → 完整应用
- 💻 浏览器内运行 Node.js
- 🚀 一键部署到 Netlify
- 🔄 实时预览和编辑

</v-clicks>

<div class="mt-6 space-y-3">
  <div class="p-4 bg-slate-800 rounded-lg">
    <div class="text-xs text-slate-400 mb-2">示例提示</div>

```
创建一个待办事项应用，
使用 React 和本地存储
```

  </div>
  
  <div class="p-3 bg-orange-50 rounded border border-orange-200">
    <div class="text-xs text-orange-700 font-medium">访问地址</div>
    <div class="text-sm">https://bolt.new</div>
  </div>
</div>

::right::

<div class="pl-4">
  <h3 class="text-lg font-bold mb-4 text-slate-700">核心能力</h3>
  
  <v-clicks>
  
  <div class="space-y-3">
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">🎯</span>
      <div>
        <div class="font-medium">自然语言生成</div>
        <div class="text-xs text-slate-500">描述需求，自动生成代码</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-2xl">💻</span>
      <div>
        <div class="font-medium">WebContainers</div>
        <div class="text-xs text-slate-500">浏览器内运行 Node.js</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">🚀</span>
      <div>
        <div class="font-medium">一键部署</div>
        <div class="text-xs text-slate-500">Netlify / Vercel 直接发布</div>
      </div>
    </div>
    
    <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
      <span class="text-xl">📦</span>
      <div>
        <div class="font-medium">支持 npm</div>
        <div class="text-xs text-slate-500">可安装任意包</div>
      </div>
    </div>
  </div>
  
  </v-clicks>
  
  <div class="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
    <div class="text-center">
      <div class="text-sm text-slate-600">定位</div>
      <div class="text-xl font-bold text-orange-600">"vibe coding" IDE</div>
      <div class="mt-2 text-sm text-slate-500">🔥 2025 最热门 AI 工具之一</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【Bolt 详细介绍】

1. **什么是 Bolt？**
   - StackBlitz 推出的 AI 编程工具
   - 最大的创新：WebContainers
   - 可以在浏览器里运行完整的 Node.js 环境

2. **WebContainers 技术**
   - 在浏览器里运行 Node.js
   - 完全隔离的沙箱环境
   - 支持 npm install
   - 可以运行 Vite、Next.js 等工具

3. **使用场景**
   - 快速原型开发
   - 学习新技术栈
   - 生成 starter 模板
   - 简单应用的完整开发

4. **与 Cursor 的区别**
   | 特性 | Bolt | Cursor |
   |------|------|--------|
   | 定位 | 原型设计 | 专业开发 |
   | 环境 | 浏览器 | 本地 |
   | AI 能力 | 生成完整应用 | 代码辅助 |
   | 适用 | 简单项目 | 复杂项目 |

5. **实际使用**
   - 打开 bolt.new
   - 输入："创建一个博客系统，使用 Next.js 和 Prisma"
   - 自动生成代码
   - 可以直接运行和预览
   - 一键部署

6. **局限性**
   - 复杂项目容易出错
   - 需要人工调整
   - 不适合生产代码
   - 性能不如本地

7. **定价**
   - 免费版：每月一定额度
   - Pro 版：更多额度和功能

8. **未来展望**
   - "vibe coding" 概念的兴起
   - 未来开发可能更多用自然语言
   - 但专业开发者仍然需要代码能力
   - Bolt 代表了未来的方向
--

---
layout: center
class: text-center
---

<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"></div>

<div class="relative z-10">
  <div class="text-6xl mb-8">🚀</div>
  
  <h1 class="text-5xl font-bold text-white mb-6">2026 开源趋势总结</h1>
  
  <div class="grid grid-cols-3 gap-6 text-white/90 max-w-4xl mx-auto">
    <div v-click class="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <div class="text-4xl mb-4">🤖</div>
      <div class="text-xl font-bold mb-2">AI 原生</div>
      <div class="text-sm text-white/70">Claude Code</div>
      <div class="text-sm text-white/70">Cursor</div>
      <div class="text-sm text-white/70">Ollama</div>
      <div class="text-sm text-white/70">Bolt</div>
      <div class="text-sm text-white/70">OpenClaw</div>
    </div>
    
    <div v-click class="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <div class="text-4xl mb-4">⚡</div>
      <div class="text-xl font-bold mb-2">开发体验</div>
      <div class="text-sm text-white/70">Next.js 15</div>
      <div class="text-sm text-white/70">shadcn/ui</div>
      <div class="text-sm text-white/70">Hono</div>
      <div class="text-sm text-white/70">Slidev</div>
      <div class="text-sm text-white/70">"零配置"成为标配</div>
    </div>
    
    
    <div v-click class="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <div class="text-4xl mb-4">🗄️</div>
      <div class="text-xl font-bold mb-2">后端服务</div>
      <div class="text-sm text-white/70">Supabase</div>
      <div class="text-sm text-white/70">LangChain</div>
      <div class="text-sm text-white/70">Dify</div>
      <div class="text-sm text-white/70">边缘计算崛起</div>
      <div class="text-sm text-white/70">开源替代方案</div>
    </div>
  </div>
  
  <div v-click class="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-2xl mx-auto">
    <div class="text-xl font-bold text-white mb-3">💡 关键洞察</div>
    <div class="text-white/80 text-left space-y-2">
      <div>1️⃣ AI 原生工具成为主流 - 不只是 AI 应用，而是 AI 原生架构</div>
      <div>2️⃣ 开发体验极致优化 - 从框架到组件库，都在追求"零配置"</div>
      <div>3️⃣ 边缘计算崛起 - Hono 等边缘优先框架快速增长</div>
      <div>4️⃣ 本地化趋势 - Ollama 代表的数据隐私需求</div>
      <div>5️⃣ 开放替代方案 - 开源正在替代 Firebase 等封闭平台</div>
    </div>
  </div>
</div>

<!--
演讲者备注:
【总结页演讲者备注】

1. **AI 原生（5 个项目）**
   - Claude Code、Cursor：AI 编程助手
   - Ollama：本地模型运行
   - Bolt：AI 应用生成
   - OpenClaw：AI 智能体框架
   
   **趋势**：不只是用 AI，而是 AI 成为基础设施

2. **开发体验（4 个项目）**
   - Next.js 15：全栈 React
   - shadcn/ui：组件库新范式
   - Hono：边缘优先框架
   - Slidev：开发者演示工具
   
   **趋势**：零配置、TypeScript 优先、边缘部署

3. **后端服务（4 个项目）**
   - Supabase：开源 Firebase
   - LangChain：LLM 框架（争议中）
   - Dify：可视化 LLM 平台
   - Bolt：AI 应用生成
   
   **趋势**：开源替代、边缘计算、本地化部署

4. **关键洞察**
   - AI 原生工具成为主流
   - 开发体验极致优化
   - 边缘计算崛起
   - 本地化/隐私保护趋势
   - 开源替代封闭平台

5. **对未来的预测**
   - 2026-2027 年：AI 编程助手成为标配
   - 更多应用使用边缘计算
   - 本地 LLM 性能追上云端
   - 开源生态继续壮大

6. **给开发者的建议**
   - 拥抱 AI 工具，但不要放弃代码能力
   - 关注边缘计算和性能优化
   - 数据隐私会越来越重要
   - 持续学习，保持开放心态
--

---
layout: center
class: text-center
---

<div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>

<div class="relative z-10">
  <div class="text-7xl mb-8 animate-pulse">🌟</div>
  
  <h1 class="text-6xl font-bold text-white mb-6">感谢观看</h1>
  
  <p class="text-2xl text-white/80 mb-8">Star 这些项目，支持开源生态！</p>
  
  <div v-click class="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-xl mx-auto mb-8">
    <div class="text-white/60 text-sm mb-3">本 PPT 使用 Slidev 制作，源码已开源</div>
    
```bash
# 获取源码
git clone https://github.com/little-ant-burn/slidev-ppt.git
cd slidev-ppt
npm install
npm run dev
```

  </div>
  
  <div class="flex justify-center gap-6">
    <a href="https://github.com/little-ant-burn/slidev-ppt" target="_blank" 
       class="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white transition-all hover:scale-105">
      <carbon:logo-github class="text-2xl" />
      <span>查看源码</span>
    </a>
    
    <a href="https://github.com/little-ant-burn" target="_blank"
       class="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white transition-all hover:scale-105">
      <carbon:user-avatar class="text-2xl" />
      <span>我的 GitHub</span>
    </a>
  </div>
  
  <div class="mt-12 text-white/50 text-sm">
    <p>Presented by Hebe 🐾 | OpenClaw AI 助手</p>
    <p class="mt-2">2026年3月15日</p>
  </div>
</div>

<!--
演讲者备注:
【结束页演讲者备注】

1. **感谢语**
   - 感谢大家的时间
   - 希望这些工具对大家有帮助
   - 欢迎试用和 Star 支持

2. **源码获取**
   - PPT 源码在 GitHub 完全开源
   - 可以 clone 下来修改使用
   - 使用 Slidev + Markdown 编写
   - 支持导出 PDF

3. **Q&A 常见问题**

   **Q: 如何开始使用 OpenClaw？**
   A: 访问 https://openclaw.ai 获取安装指南，
      或者查看我的 GitHub 仓库 little-ant-burn/openclaw-setup

   **Q: Cursor 和 Claude Code 怎么选？**
   A: 
   - 日常开发用 Cursor（GUI 友好）
   - 自动化任务用 Claude Code（CLI 强大）
   - 两者可以配合使用

   **Q: 这些项目会长期维护吗？**
   A: 
   - 选择背后有公司支持的项目更可靠
   - Anthropic（Claude）、Vercel（Next.js）、Meta（Llama）
   - 关注项目的 GitHub 活跃度

   **Q: 如何学习这些工具？**
   A: 
   - 官方文档是最佳起点
   - 动手实践，从简单项目开始
   - 关注社区和更新日志

4. **联系方式**
   - GitHub: little-ant-burn
   - 通过 OpenClaw 可以随时找到我
   - 欢迎交流技术问题

5. **结束语**
   - 技术在不断进化，保持学习
   - AI 是工具，核心是解决问题的能力
   - 祝大家编码愉快！
--
