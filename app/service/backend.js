const Service = require('egg').Service;
class BackendService extends Service {

  async queryStatistics() {
    const data = await this.app.mysql.query('select * from statistics');
    return data;
  }
}
module.exports = BackendService;