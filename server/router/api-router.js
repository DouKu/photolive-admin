const KoaRouter = require('koa-router');
const request = require('request');
const apiServerAddr = 'http://api.qxphotolive.xyz';

class ApiRouter extends KoaRouter {
  constructor () {
    super();

    this.prefix('/api');

    this.all('*', async ctx => {
      ctx.body = ctx.req.pipe(request(`${apiServerAddr}${ctx.url}`));
    });
  }
}

module.exports = ApiRouter;