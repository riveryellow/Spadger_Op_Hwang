const Controller = require('egg').Controller;

class MenuController extends Controller {

  async index(ctx) {
    await ctx.render('pages/dashboard.ejs', {});
  }


}

module.exports = MenuController;
