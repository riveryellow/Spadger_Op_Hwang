'use strict';

module.exports = app => {
  // 页面
  app.get('/', app.controller.menu.index);
  app.get('/organic-traffic', app.controller.menu.traffic);
  //app.get('/login', app.controller.login.index);
  app.get('/404', app.controller.error.index);
  app.get('/500', app.controller.error.index);
  // api接口
  //app.get('/api/dataTable/test', app.controller.admin.dataTable);
  //游戏管理界面
  //app.get('/gameManage', app.controller.gameManage.index);
};