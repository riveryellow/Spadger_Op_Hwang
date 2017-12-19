const Controller = require('egg').Controller;

class DashBoardController extends Controller {
  async index(ctx) {
    const menuItems = await ctx.service.backend.queryMenutree();
    console.log(menuItems);
    await ctx.render('pages/dashboard.ejs', {menutree: menuItems});
  }
}

module.exports = DashBoardController;
