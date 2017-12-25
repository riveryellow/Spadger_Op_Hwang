const menu = Symbol('Application#menuItems');
const subMenu = Symbol('Application#subMenuItems');

async function queryMenu(app) {
  return await app.mysql.query('select id,m_name,icon_class,href,order_num,hasSub from menutree where father_id is null');
}
async function querySubMenu(app) {
  return await app.mysql.query('select id,father_id,m_name,icon_class,href,order_num from menutree where father_id is not null');
}

module.exports = {
  get menuItems() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    if (!this[menu]) {
      this[menu] = queryMenu(this);
    }
    return this[menu];
  },
  get subMenuItems(){
    if(!this[subMenu]){
      this[subMenu] = querySubMenu(this);
    }
    return this[subMenu];
  }

}
