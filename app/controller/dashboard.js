const Controller = require('egg').Controller;

class DashBoardController extends Controller {
  async index(ctx){
    await ctx.renderLayout('pages/dashboard.ejs', { css: false });
  }
}

module.exports = DashBoardController;