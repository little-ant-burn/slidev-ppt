import { defineThemeConfig } from '@slidev/types'

export default defineThemeConfig({
  // 主题颜色配置
  colors: {
    primary: '#3b82f6',
    secondary: '#10b981',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
  },
  
  // 字体配置
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'Fira Code, monospace',
    serif: 'Georgia, serif',
  },
  
  // 代码高亮配置
  highlighter: {
    theme: 'github-dark',
    lineNumbers: true,
  },
  
  // 自定义 CSS
  css: `
    /* 自定义滚动条 */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #1a1a2e;
    }
    ::-webkit-scrollbar-thumb {
      background: #3b82f6;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #2563eb;
    }
    
    /* 幻灯片切换动画 */
    .slide-enter-active,
    .slide-leave-active {
      transition: all 0.5s ease;
    }
    
    /* 代码块样式优化 */
    pre {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }
    
    /* 演讲者模式优化 */
    .presenter-note {
      font-size: 1.2em;
      line-height: 1.6;
    }
    
    /* 两列布局优化 */
    .grid-cols-2 {
      gap: 2rem;
    }
    
    /* 强调文字 */
    .text-gradient {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* 按钮悬停效果 */
    .icon-btn:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease;
    }
    
    /* 表格样式 */
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #374151;
      padding: 0.5rem;
    }
    th {
      background: #1f2937;
    }
  `,
})
