const Controller = require('egg').Controller;

class DashBoardController extends Controller {
  async index(ctx) {
    await ctx.render('pages/dashboard.ejs');
  }
}

module.exports = DashBoardController;
