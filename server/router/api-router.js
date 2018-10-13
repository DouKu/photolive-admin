const KoaRouter = require('koa-router');

class ApiRouter extends KoaRouter {
  constructor () {
    super();

    this.prefix('/api');

    this.all('*', async ctx => {
      ctx.body = 'test';
    });
  }
}

module.exports = ApiRouter;