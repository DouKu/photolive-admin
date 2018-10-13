const KoaRouter = require('koa-router');
const PageRouter = require('./page-router');
const ApiRouter = require('./api-router');

class Router extends KoaRouter {
  constructor (app) {
    super();
    const pageRouter = new PageRouter(app);
    const apiRouter = new ApiRouter();
    this.use(apiRouter.routes(), apiRouter.allowedMethods());
    this.use(pageRouter.routes());
  }
}

module.exports = Router;