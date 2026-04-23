# AGENTS.md - 汽车销售网站项目规范

## 项目概览

**项目名称**: AutoUzbekistan - 汽车销售网站
**目标市场**: 乌兹别克斯坦（主要）、俄罗斯（后期扩展）
**核心语言**: 俄语（主要）、中文、英语
**网站类型**: B2B 汽车出口服务平台（客资收集模式）

## 技术栈

- **框架**: Next.js 16 (App Router)
- **核心**: React 19
- **语言**: TypeScript 5
- **UI 组件**: shadcn/ui
- **样式**: Tailwind CSS 4
- **包管理**: pnpm

## 目录结构

```
├── public/                    # 静态资源
│   ├── images/               # 汽车图片
│   └── flags/               # 国旗图标
├── src/
│   ├── app/                 # 页面路由
│   │   ├── page.tsx        # 首页
│   │   ├── case/           # 成功案例
│   │   ├── about/          # 关于我们
│   │   ├── contact/        # 联系我们
│   │   └── layout.tsx      # 根布局
│   ├── components/
│   │   ├── Header.tsx      # 头部导航
│   │   ├── Footer.tsx      # 页脚
│   │   ├── Hero.tsx        # Hero 轮播
│   │   ├── CarCard.tsx     # 车型卡片
│   │   ├── CarFilter.tsx   # 筛选组件
│   │   ├── LanguageSwitcher.tsx  # 语言切换
│   │   ├── StatsSection.tsx      # 数据统计展示（200+仓库等）
│   │   ├── HowItWorks.tsx       # 三步流程展示
│   │   ├── NewsSection.tsx      # 新闻/案例模块
│   │   └── WhatsAppButton.tsx   # WhatsApp浮动按钮
│   ├── lib/
│   │   ├── i18n.ts         # 多语言配置
│   │   ├── translations/   # 翻译文件
│   │   └── cars.ts         # 车型数据
│   └── hooks/
│       └── useLanguage.ts  # 语言 hook
```

## 功能模块

### 1. 首页 (/)
- Hero 轮播展示热门车型
- 数据统计展示（200+ Warehouse, 15000+ Car Source, 20+ Sale Country）
- 三步流程展示（Get Quote -> Transportation -> Receive）
- 热门车型展示
- 新闻/案例模块
- WhatsApp 浮动咨询按钮
- CTA 行动召唤

### 2. 成功案例 (/case)
- 案例网格展示
- 分类筛选（新能源汽车、燃油车型、高端车型）
- 案例详情（出口国家、数量、车型描述）
- 成功案例统计展示
- CTA 行动召唤

### 3. 关于我们 (/about)
- 公司介绍
- 发展历程
- 团队展示
- 合作伙伴

### 4. 联系我们 (/contact)
- 联系信息
- 地图展示
- 在线留言表单

## 设计规范

### 色彩方案
- **主色**: #1E3A8A (深蓝色)
- **次要色**: #F97316 (橙色 - 强调色)
- **背景色**: #0F172A (深色), #FFFFFF (浅色)
- **文字色**: #F8FAFC (主文字), #94A3B8 (次要文字)

### 排版
- **标题字体**: Inter (俄语/英语支持良好)
- **正文字体**: Inter
- **字号层级**: 48px / 36px / 24px / 18px / 16px / 14px

### 间距
- **基础单位**: 4px
- **组件间距**: 16px / 24px / 32px / 48px / 64px

### 响应式断点
- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 多语言支持

### 语言列表
1. **俄语 (ru)** - 主要语言，适用于乌兹别克斯坦和俄罗斯
2. **中文 (zh)** - 辅助语言
3. **英语 (en)** - 辅助语言

### 翻译范围
- 导航菜单
- 页面标题和内容
- 表单标签和提示
- 错误信息
- 按钮文本

## SEO 优化

- 语义化 HTML
- Open Graph 标签
- 面包屑导航
- 结构化数据
-  sitemap.xml

## 性能要求

- 首屏加载 < 3s
- 图片优化 (WebP)
- 组件懒加载
- 代码分割
