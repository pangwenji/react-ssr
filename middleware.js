// middleware.js
import { NextResponse } from 'next/server';

// 检查用户是否已登录的逻辑
const isLoggedIn = (req) => {
    // 这里您可以根据 cookies、session 或其他逻辑来确定用户是否登录
    const token = req.cookies.token; // 假设您使用 cookie 来存储 token
    return Boolean(token); // 返回是否存在 token
};

export function middleware(req) {
    const { pathname } = req.nextUrl;

    // 定义需要登录权限的路由
    const protectedRoutes = ['/dashboard', '/profile']; // 需要登录的路由

    // 如果当前路由在保护路由列表中且用户未登录
    if (protectedRoutes.includes(pathname) && !isLoggedIn(req)) {
        // 重定向到登录页
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // 允许继续访问
    return NextResponse.next();
}
