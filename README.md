# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

```
your-project-root/
├── public/                 # 如果是构建后的输出目录，或用于存放根目录下的静态资源
│   ├── index.html          # 主入口HTML文件（如果你的项目是单页应用）
│   └── assets/             # 编译后的静态资源（JS, CSS, 图片等）
│       ├── css/
│       ├── js/
│       └── images/
│
├── src/                    # 源代码目录
│   ├── assets/             # 静态资源，如图片、字体、全局CSS
│   │   ├── images/
│   │   ├── styles/
│   │   └── fonts/
|   |   |
│   ├── pages/              # 存放所有独立的HTML页面文件 (对应P-开头的HTML)
│   │   ├── forgot/           # 认证相关页面，可以进一步细分
│   │   │   ├── P-FORGOT_PASSWORD.html
|   |   |── register/
│   │   │   └── P-REGISTER_LOGIN.html
│   │   ├── contests/       # 竞赛相关页面
│   │   │   ├── P-CONTEST_DETAIL.html
│   │   │   └── P-CONTEST_LIST.html
│   │   ├── playlists/      # 播放列表相关页面
│   │   │   └── P-PLAYLIST_LIST.html
|   |   |──My_List
│   │   │   ├── P-PLAYLIST_DETAIL.html
│   │   ├── problems/       # 问题相关页面
│   │   │   ├── P-PROBLEM_DETAIL.html
│   │   │   └── P-PROBLEM_LIST.html
│   │   ├── P-HOME.html     # 首页
│   │   └── P-PROFILE.html  # 个人资料页面
│   │
│   ├── components/         # 可复用的UI组件（如果这些HTML是组件化的）
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── ...
│   │
│   │
│   ├── utils/              # 通用工具函数、类型定义等
│   │   └── vite-env.d.ts   # 你提供的 vite-env.d.ts 文件
│   │   └── api.ts          # 如果有API调用封装
│   │
│   ├── main.js             # 主入口JS文件（对于现代前端框架）
│   └── App.vue/jsx         # 根组件 (如果使用Vue/React)
│
├── public/                  # 如果用于存放未经过构建的原始静态资源，例如 favicon.ico
│   └── favicon.ico
│
├── prd.md                   # 产品需求文档
├── package.json             # 项目依赖和脚本
├── vite.config.ts           # Vite 配置文件
└── README.md
```