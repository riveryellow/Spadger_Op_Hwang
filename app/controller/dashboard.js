const BaseController = require('egg').Controller;

class DashBoardController extends BaseController {
  async index(ctx){
    await ctx.renderLayout('dashboard.html', { css: false });
  }
}

module.exports = DashBoardController;