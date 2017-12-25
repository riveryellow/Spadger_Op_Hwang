const Controller = require('egg').Controller;

class MenuController extends Controller {

  async index(ctx) {
    const menuItems = await this.app.menuItems;
    await ctx.render('pages/dashboard.ejs', { menutree: menuItems, active: 0 });
  }

  async traffic(ctx) {
    const menuItems = await this.app.menuItems;
    const subMenuItems = await this.app.subMenuItems;
    const newSubStruct = {};
    for (let i = 0; i < subMenuItems.length; i++) {
      if (!newSubStruct[subMenuItems[i].father_id]) {
        newSubStruct[subMenuItems[i].father_id] = {};
      }
      newSubStruct[subMenuItems[i].father_id][subMenuItems[i].id] = subMenuItems[i];
    }
    const traffic_data = await ctx.service.backend.queryTrafficStatistics()
    await ctx.render('pages/statistics_traffic.ejs', { menutree: menuItems, active: 6, submenu: newSubStruct, subactive: 9, traffic: traffic_data});
  }


}

module.exports = MenuController;
