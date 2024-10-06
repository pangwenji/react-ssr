/** @type {import('next').NextConfig} */
const nextConfig = {
    // 是否启用React的严格模式，通常在开发环境中开启
    reactStrictMode: true,
  
    // 配置图片优化的域名，允许加载的图片来源
    images: {
      domains: ['example.com', 'cdn.example.com'],
      // 允许使用非标准拓展名的图片
      dangerouslyAllowSVG: true,
    },
  
    // 国际化配置，如果你的应用有多语言支持
    i18n: {
      locales: ['en-US', 'fr', 'es'], // 支持的语言列表
      defaultLocale: 'en-US',          // 默认语言
    },
  
    // 配置环境变量
    env: {
      CUSTOM_API_URL: process.env.CUSTOM_API_URL, // 可通过process.env.CUSTOM_API_URL访问
    },
  
    // 构建文件输出路径（导出为静态文件时使用）
    // output: 'export',
  
    // 自定义 Webpack 配置
    webpack: (config, { isServer }) => {
      // 添加自定义的 Webpack 规则或插件
      if (!isServer) {
        config.resolve.fallback = {
          fs: false, // 如果是在客户端环境，禁止引入 'fs' 模块
        };
      }
  
      return config;
    },
  
    // 自定义页面扩展名（默认是 `.js` 和 `.jsx`）
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  
    // API请求超时配置
    api: {
      bodyParser: {
        sizeLimit: '1mb', // 请求体大小限制
      },
      externalResolver: true, // 外部解析
    },
  
    // 性能优化：启用静态文件缓存
    staticPageGenerationTimeout: 60, // 生成静态页面的超时时间，单位秒
  
    // 静态文件导出配置
    // exportPathMap: async function (defaultPathMap) {
    //   return {
    //     '/': { page: '/' },
    //     '/about': { page: '/about' },
    //     '/contact': { page: '/contact' },
    //   };
    // },
  
    // 启用 `swcMinify`，提高构建和运行时的性能
    swcMinify: true,
  
    // 禁用文件系统路由，适用于自定义路由的场景
    // useFileSystemPublicRoutes: false,
  
    // 增加重定向规则
    async redirects() {
      return [
        {
          source: '/old-path',
          destination: '/new-path',
          permanent: true, // 301永久重定向
        },
      ];
    },
  
    // 增加重写规则
    async rewrites() {
      return [
        {
          source: '/custom-path/:slug',
          destination: '/api/:slug', // 将 '/custom-path' 重写到对应的 API
        },
      ];
    },
  };
  
  export default nextConfig;
  