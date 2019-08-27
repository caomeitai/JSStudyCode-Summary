const Koa = require("koa")
// 之前在下面调用了router()
const router = require("koa-router")()
const path = require("path")
const static = require("koa-static")

// 引入模板引擎模块
const render = require("koa-art-template")

// 想要格式化处理时间  配置时间管道
const sd = require("silly-datetime")

// 想要使用session来存储数据需要引进模块
const session = require("koa-session")
// 需要拿到用户名，密码 koa-bodyparser
const bodyParser = require("koa-bodyparser")

// 实例化一个koa
const app = new Koa()

// 配置post提交数据的中间件
app.use(bodyParser())


// 配置session中间件
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess', 
    maxAge: 86400000,
    autoCommit: true, 
    overwrite: true, 
    httpOnly: true, 
    signed: true, 
    rolling: false, 
    renew: false, 
  };
app.use(session(CONFIG, app));



// 想要将静态资源数据渲染成真实数据   配置模板引擎
render(app,{
    root:path.join(__dirname,"views"),//这里使用的是绝对路径
    extname:".html",
    debug:process.env.NODE_ENV !='production',
    // 配置一个格式化时间的东西  在模板引擎中配置的  扩展模板中的方法
    dateFormat:dateFormat = function(value){//时间参数
      return sd.format(value,'YYYY-MM-DD  HH:mm') //创建新的时间以什么样的形式
    }
})


// 托管静态资源
app.use(static(__dirname+"/public"))  //拼接得到地址

// 引入自定义的路由模块     在这里存放的都是二级路由
let index = require("./routes/index")  //前端入口
let admin = require("./routes/admin")  //后台入口
let api = require("./routes/api")   //api接口入口


// 创建一级路由  就是对应三个模块的入口   应用router中间件  
router.use("/",index)  //当访问对应路由时，让其找到对应路由模块
router.use("/api",api)  //当访问对应路由时，让其找到对应路由模块
router.use("/admin",admin)  //当访问对应路由时，让其找到对应路由模块

// 对于路由中间件来说  需要启动一下路由
app.use(router.routes()).use(router.allowedMethods())


// 监听端口
app.listen(3000)