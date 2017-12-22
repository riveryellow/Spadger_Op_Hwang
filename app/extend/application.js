const menu = Symbol('Application#menuItems')

async function queryMenu(app) {
  return await app.mysql.query('select m_name,icon_class,href,order_num from menutree');
}

module.exports = {
  get menuItems() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    if (!this[menu]) {
      this[menu] = queryMenu(this);
    }
    return this[menu];
  }

}
