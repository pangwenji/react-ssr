import next from 'next';
import Koa from 'koa';
import Router from 'koa-router';
import koa_bodyParser from 'koa-bodyparser';

const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDev });
const server = new Koa();
const router = new Router();

const handle = app.getRequestHandler();

// 创建预渲染
app.prepare().then(() => {
    // Koa 路由
    router.get('/api/list', async (ctx) => {
        ctx.body = { message: 'Hello from Koa!' }; // 示例返回数据
    });

    router.get('/get/about', async (ctx) => {
        ctx.body = { message: 'Hello from Koa!' }; // 示例返回数据
    });
    // 使用 Koa 路由
    server.use(router.routes()).use(router.allowedMethods());
    server.use(koa_bodyParser());

    // 错误处理
    server.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            console.error('服务器发生错误:', err);
            ctx.status = err.status || 500;
            ctx.body = { message: '内部服务器错误' };
        }
    });
    // 处理 Next.js 页面
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false; // 阻止 Koa 再次尝试响应
    });
    // 启动 Koa 服务器
    server.listen(3002, () => {
        console.log('Koa2 服务器已经启动');
    });
});
