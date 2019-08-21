// 首页  入口文件
var createError = require('http-errors');
// 引入express模块
var express = require('express');
// 引入path模块
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入自己写的路由模块  载入两个二级路由文件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建一个app应用
var app = express();

// 调用视图  如果只是写api接口那么是用不到的
app.set('views', path.join(__dirname, 'views'));//表示视图模板在views文件下面
app.set('view engine', 'jade');//表示设置使用jade模板引擎去解析视图  默认不是HTML 而是jade

// 使用一堆中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 用来自动载入静态资源，将要读取的所有资源：html,css,js等等放入public中
app.use(express.static(path.join(__dirname, 'public')));

// 中间件   是一级路由
app.use('/', indexRouter);
app.use('/users', usersRouter);


// 中间件  用来处理404
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// 错误处理中间件  里面多了一个参数  err
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
