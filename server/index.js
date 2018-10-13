const Koa = require('koa');
const next = require('next');
const Router = require('./router');
const mobxReact = require('mobx-react');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

mobxReact.useStaticRendering(true);

app.prepare()
  .then(() => {
    const server = new Koa();
    const router = new Router(app);

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });

    server
      .use(router.routes())
      .use(router.allowedMethods());

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });