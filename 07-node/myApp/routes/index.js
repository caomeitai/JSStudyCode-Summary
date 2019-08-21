var express = require('express');
var router = express.Router();

//不是写接口，而是做系统，渲染模板
// render渲染index这个模板  { title: 'Express' }把数据给模板
// 二级路由  /会渲染模板  app.js入口文件指定模板位置，在views中
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
