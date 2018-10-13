const KoaRouter = require('koa-router');

class PageRouter extends KoaRouter {
  constructor (app) {
    
    super();

    const handle = app.getRequestHandler();

    this.get('/a', async ctx => {
      await app.render(ctx.req, ctx.res, '/a', ctx.query);
      ctx.respond = false;
    });

    this.get('/b', async ctx => {
      await app.render(ctx.req, ctx.res, '/b', ctx.query);
      ctx.respond = false;
    });

    this.get('*', async ctx => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });
  }
}

module.exports = PageRouter;
