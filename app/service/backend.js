const Service = require('egg').Service;
class BackendService extends Service {

  async queryTrafficStatistics() {
    const data = await this.app.mysql.query('select * from data_traffic');
    return data;
  }
}
module.exports = BackendService;
