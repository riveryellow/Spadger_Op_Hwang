const Controller = require('egg').Controller

class MenuController extends Controller {

  async index(ctx) {
    const menuItems = await this.app.menuItems;
    await ctx.render('pages/dashboard.ejs', {menutree: menuItems, active: 0});
  }

  async statistics(ctx) {
    const menuItems = await this.app.menuItems;
    await ctx.render('pages/statistics.ejs', {menutree: menuItems, active: 6});
  }


}

module.exports = MenuController;
