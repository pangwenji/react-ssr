/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // 启用 React 严格模式
    swcMinify: true, // 使用 SWC 进行 JavaScript 和 TypeScript 的压缩
    images: {
        domains: ['example.com'],
    },
    i18n: {
        locales: ['en', 'fr', 'de'],
        defaultLocale: 'en',
    },

    // experimental: {
    //     images: true, // 启用图像处理功能
    // },
    // compression: true, // 启用 Gzip 压缩
    // serverRuntimeConfig: {
    //     secret: 'your-server-secret', // 服务器端配置
    // },
    // publicRuntimeConfig: {
    //     apiUrl: 'https://api.example.com', // 客户端配置
    // },
    // trailingSlash: true, // 在路由后添加斜杠

    // async redirects() {
    //     return [
    //         {
    //             source: '/old-path',
    //             destination: '/new-path',
    //             permanent: true, // 301 重定向
    //         },
    //     ];
    // },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'https://external-api.com/:path*', // 代理请求
    //         },
    //     ];
    // },
};

export default nextConfig;
