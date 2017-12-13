const Controller = require('egg').Controller;

class GameManageController extends Controller {
  async index(ctx){
    await ctx.renderLayout('pages/GameManage.ejs', { css: false });
  }
}

module.exports = GameManageController;