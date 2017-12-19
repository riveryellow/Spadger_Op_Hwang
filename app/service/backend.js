const Service = require('egg').Service;
class BackendService extends Service {
  //查询类目树
  async queryMenutree() {
    const items = await this.app.mysql.query('select m_name from menutree');
    return items;
  }
}
module.exports = BackendService;