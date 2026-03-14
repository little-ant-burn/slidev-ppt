# slidev-ppt 2026 年迭代更新方案

## 📊 研究数据汇总

### 2026年热门GitHub项目Stars数据

| 排名 | 项目名称 | Stars | 类别 |
|------|----------|-------|------|
| 1 | OpenClaw | 311,219 ⭐ | AI 智能体框架 |
| 2 | build-your-own-x | 474,904 ⭐ | 编程教程 |
| 3 | awesome | 445,312 ⭐ | 资源列表 |
| 4 | AutoGPT | 182,442 ⭐ | AI Agent |
| 5 | n8n | 179,032 ⭐ | 工作流自动化 |
| 6 | Ollama | 164,995 ⭐ | 本地大模型 |
| 7 | Next.js | 138,286 ⭐ | React框架 |
| 8 | shadcn/ui | 109,459 ⭐ | UI组件库 |
| 9 | Open WebUI | 127,094 ⭐ | AI界面 |
| 10 | Gemini CLI | 97,623 ⭐ | AI终端工具 |
| 11 | Dify | 132,715 ⭐ | LLM开发平台 |
| 12 | LangChain | 129,396 ⭐ | LLM框架 |
| 13 | Bolt.diy | 19,146 ⭐ | AI全栈开发 |
| 14 | Vercel AI SDK | 22,603 ⭐ | AI工具包 |
| 15 | Awesome MCP Servers | 83,030 ⭐ | MCP服务器集合 |
| 16 | Slidev | 44,805 ⭐ | 演示工具 |

### 2026年技术趋势洞察

1. **MCP (Model Context Protocol)** 生态爆发 - AI工具互操作标准
2. **AI Coding** 工具链成熟 - Cursor、Windsurf、Bolt 等
3. **本地大模型** 普及 - Ollama + 开源模型
4. **AI Agent** 框架百花齐放 - OpenClaw、AutoGPT、n8n
5. **终端AI工具** 兴起 - Claude Code、Gemini CLI

---

## 📝 文件更新计划

### 1. slides.md - 2026年版本内容

**主要更新点：**
- 将10个项目更新为2026年最热门的AI/开发工具
- 添加 OpenClaw 详细介绍
- 新增 MCP 生态、Bolt.diy、Vercel AI SDK 等新兴项目
- 更新 Stars 数据为2026年最新

**内容结构：**
1. **MCP 生态系统** - Awesome MCP Servers
2. **AI 终端工具** - Gemini CLI
3. **本地大模型** - Ollama  
4. **AI 智能体框架** - OpenClaw
5. **全栈开发平台** - Bolt.diy
6. **AI 工作流** - n8n
7. **AI 界面工具** - Open WebUI
8. **LLM 开发平台** - Dify
9. **AI 工具包** - Vercel AI SDK
10. **演示工具** - Slidev

### 2. 自定义主题样式 - styles/custom.css

**设计方向：**
- 深色科技风，配合AI主题
- 渐变色彩：紫色到蓝色的AI科技感
- 代码块优化：更现代的语法高亮
- 字体优化：使用更现代的字体栈

### 3. 演讲者备注 - notes.md

**内容规划：**
- 每页幻灯片的演讲要点
- 技术细节补充
- 过渡话术建议
- 互动问题设计

### 4. GitHub Actions - deploy.yml

**优化点：**
- 添加缓存优化
- 支持手动触发
- 添加构建预览
- 优化部署流程

---

## 🎨 视觉设计方案

### 色彩系统
```css
--color-primary: #6366f1;      /* Indigo - AI主题 */
--color-secondary: #a855f7;    /* Purple - 科技感 */
--color-accent: #06b6d4;       /* Cyan - 点缀 */
--color-background: #0f172a;   /* Slate 900 - 深色背景 */
--color-text: #f8fafc;         /* Slate 50 - 文字 */
```

### 布局优化
- 封面页：全屏背景 + 动态粒子效果
- 内容页：左右分栏，代码 + 说明
- 数据页：卡片式布局展示Stars数据
- 总结页：网格分类展示

---

## 📁 目录结构

```
slidev-ppt/
├── slides.md                 # 主内容文件
├── styles/
│   └── custom.css           # 自定义主题样式
├── notes.md                 # 演讲者备注
├── package.json             # 依赖配置
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions
└── README.md                # 项目说明
```

---

## ✅ 实施步骤

1. **更新 slides.md** - 替换为2026年内容
2. **创建自定义样式** - styles/custom.css
3. **添加演讲者备注** - notes.md
4. **优化部署配置** - 更新 deploy.yml
5. **测试构建** - 验证所有功能
6. **部署到GitHub Pages**

---

## 📈 预期效果

- ✅ 内容紧跟2026年技术趋势
- ✅ 准确的GitHub Stars数据
- ✅ 专业的视觉呈现
- ✅ 完整的演讲者支持
- ✅ 自动化部署流程
