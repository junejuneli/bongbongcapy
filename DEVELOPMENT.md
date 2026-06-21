# 开发文档

本文件整理了敲好运 BongBongCapy 官网的开发、构建与维护信息，供贡献者与运维人员参考。

## 环境要求

- Node.js ≥ 16.0.0（建议通过 `nvm` 管理版本）
- pnpm ≥ 8.0.0（运行 `npm install -g pnpm` 安装）
- 现代浏览器，用于验证本地开发与预览

## 安装与启动

```bash
# 克隆代码库
git clone https://github.com/junejuneli/bongbongcapy.git
cd bongbongcapy/home

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

开发服务器默认在 `http://localhost:5173` 提供热更新体验，可在浏览器中实时验证多语言与动画效果。

## 常用脚本

- `pnpm run dev`：启动 Vite 本地开发服务器并启用 HMR。
- `pnpm run lint`：执行 ESLint（含 TypeScript 规则），阻止所有警告与未使用的禁用指令。
- `pnpm run build`：先运行 `tsc` 进行类型检查，再输出优化后的生产构建。
- `pnpm run preview`：本地预览生产包，建议用于发布前回归。

## 目录结构

```
home/
├── public/                  # 静态资源与版本元数据
│   ├── images/              # 宣传图与皮肤素材
│   │   └── skins/           # 皮肤展示图
│   ├── pet-item/            # 游戏引擎相关资源
│   └── versions/            # 最新安装包与 latest.json
├── src/
│   ├── components/          # React 组件
│   ├── data/                # 静态数据与配置
│   ├── i18n/                # 语言初始化逻辑
│   ├── locales/             # zh/en/ja 文案
│   ├── types/               # TypeScript 类型定义
│   └── utils/               # 工具方法（事件追踪、多语言等）
├── postcss.config.js        # PostCSS 配置
├── tailwind.config.js       # Tailwind 配置
├── tsconfig*.json           # TypeScript 配置
└── vite.config.ts           # Vite 构建配置
```

## 技术栈与框架

- **前端框架**：React 18、TypeScript 5、Vite 4
- **样式**：Tailwind CSS 3，搭配 PostCSS 与 Autoprefixer
- **动效**：Framer Motion、Lucide React、Tabler Icons
- **国际化**：React i18next、i18next-browser-languagedetector
- **分析埋点**：自研事件封装 + Umami Analytics

## 代码规范

- 统一使用 TypeScript、ES Module、2 空格缩进、单引号与末尾逗号（受 ESLint 约束）。
- React 组件采用 `PascalCase` 文件与导出命名，工具函数使用 `camelCase`。
- Tailwind 工具类以组件内联为主，共享模式可抽成轻量包装组件。
- 提交前务必运行 `pnpm run lint`，保持代码风格一致。

## 性能优化要点

- **Vite 极速构建**：利用 ESbuild 与 Rollup，缩短开发与构建时间。
- **代码分割**：按需加载提升首屏速度，避免无用代码引入。
- **图片优化**：根据设备提供合适格式，宣传图推荐 WebP。
- **Tree Shaking**：仅打包实际使用的模块和图标。
- **缓存策略**：依赖 Vite 输出的 hashed 资源实现浏览器长期缓存。

## SEO 与分享配置

- Meta 标签覆盖常见社交平台，保持标题、描述、预览图一致。
- 自动生成 `sitemap.xml`，并为多语言入口配置 `hreflang`。
- 采用 Schema.org 的 Game/Application 结构化数据改善搜索展示。

## 国际化与分析

- 所有文案存放于 `src/locales/{zh,en,ja}.json`，新增 key 时三种语言需同步更新。
- 语言检测逻辑位于 `src/i18n` 与 `src/utils/languageUtils.ts`，修改时需注意浏览器默认语言兼容。
- 事件追踪封装在 `src/utils/analytics.ts`，新增事件后同步通知数据看板维护人员。

## 资源与部署建议

- 新增图片或大文件请提前压缩，放置于 `public/images/` 或 `public/pet-item/` 对应目录。
- 官网下载只提供最新版本，仓库内保留 `public/versions/<latest>/` 安装包目录与 `public/versions/latest.json`。
- 提交前运行 `pnpm run prune:versions`，默认只保留最新 1 个本地版本目录；如需临时保留更多版本，可设置 `KEEP_VERSION_COUNT`。
- 历史安装包可上传到 `junejuneli/bongbongcapy` 的对应 `vX.Y.Z` GitHub Release，避免官网仓库继续累积旧版本包。
- 部署时使用 `pnpm run build` 生成 `dist/`，以静态资源方式托管即可；结合 CDN 可进一步提升访问速度。
- 生产环境需确保 Umami 或其他分析脚本正确指向正式域名。

## Steam 发布
