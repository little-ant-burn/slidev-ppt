# 🎬 2026年热门 GitHub 开源项目精选

[![Deploy to GitHub Pages](https://github.com/little-ant-burn/slidev-ppt/actions/workflows/deploy.yml/badge.svg)](https://github.com/little-ant-burn/slidev-ppt/actions/workflows/deploy.yml)
[![Slidev](https://img.shields.io/badge/powered%20by-Slidev-4EC5D4?logo=Slidev)](https://github.com/slidevjs/slidev)

> 使用 [Slidev](https://github.com/slidevjs/slidev) 制作的开发者演示文稿，介绍2026年GitHub上最热门的开源项目。

🌐 **在线演示**: https://little-ant-burn.github.io/slidev-ppt/

---

## 📋 内容概览

本演示文稿涵盖以下10个2026年热门GitHub项目：

| 序号 | 项目 | 类别 | Stars |
|------|------|------|-------|
| 1 | MCP 生态系统 | AI协议标准 | 83,000+ |
| 2 | Gemini CLI | AI终端工具 | 97,623 |
| 3 | Ollama | 本地大模型 | 164,995 |
| 4 | OpenClaw | AI智能体框架 | 311,219 |
| 5 | Bolt.diy | AI全栈开发 | 19,146 |
| 6 | n8n | AI工作流 | 179,032 |
| 7 | Open WebUI | AI界面工具 | 127,094 |
| 8 | Dify | LLM开发平台 | 132,715 |
| 9 | Vercel AI SDK | AI工具包 | 22,603 |
| 10 | Slidev | 演示工具 | 44,805 |

---

## 🚀 本地运行

### 前置要求
- Node.js 18+
- npm 或 yarn

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/little-ant-burn/slidev-ppt.git
cd slidev-ppt

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3030 查看演示文稿。

### 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run export:pdf` | 导出PDF |
| `npm run export:png` | 导出PNG图片 |
| `npm run preview` | 预览生产构建 |

---

## 📁 项目结构

```
slidev-ppt/
├── slides.md              # 主内容文件（Markdown格式）
├── styles/
│   └── custom.css        # 自定义主题样式
├── notes.md              # 演讲者备注
├── package.json          # 项目配置
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 自动部署
├── UPDATE_PLAN.md        # 2026年更新方案
└── README.md             # 项目说明
```

---

## 🎨 自定义主题

本项目使用了自定义的深色科技风格主题，特点：

- 🌙 **深色背景**: 更适合代码展示
- 🎨 **渐变色彩**: 紫色到蓝色的AI科技感
- 💻 **代码优化**: 现代化的语法高亮
- ✨ **动画效果**: 流畅的过渡和交互动画

自定义样式位于 `styles/custom.css`。

---

## 📝 编辑内容

Slidev 使用 Markdown 编写幻灯片，支持：

```markdown
---
# 新幻灯片

- 要点 1
- 要点 2

```代码块```

<v-click>
点击显示的内容
</v-click>
```

更多语法请参考 [Slidev 文档](https://sli.dev/)。

---

## 🔄 自动部署

项目配置了 GitHub Actions 自动部署：

- ✅ **推送即部署**: 主分支推送自动触发
- 📅 **定时更新**: 每周一检查更新
- 🖱️ **手动触发**: 支持 workflow_dispatch
- 🔄 **依赖缓存**: 加速构建流程

---

## 📊 数据来源

所有 GitHub Stars 数据来源于 GitHub API (2026年3月)，项目排名基于：

- 星标数量
- 近期活跃度
- 技术影响力
- 社区热度

---

## 🤝 贡献

欢迎提交 Issue 和 PR：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/xxx`)
3. 提交更改 (`git commit -am 'Add xxx'`)
4. 推送分支 (`git push origin feature/xxx`)
5. 创建 Pull Request

---

## 📜 许可

[MIT](./LICENSE) License © 2026 [little-ant-burn](https://github.com/little-ant-burn)

---

## 🙏 致谢

- [Slidev](https://github.com/slidevjs/slidev) - 强大的演示工具
- [GitHub](https://github.com) - 开源社区平台
- 所有上榜的开源项目贡献者

---

<div align="center">

**Made with ❤️ and Slidev**

</div>
