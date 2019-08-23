// koa-views  express 中ejs  可以把数据渲染到模板，然后输出给客户端
// 后端：就是给前端写api接口   拿到前端写的模板，把模板中的数据删除掉，然后通过模板引擎views中的内容，把真实数据渲染出来
const Koa = require("koa")
const views = require("koa-views")
const path = require("path")
const app = new  Koa()

// console.log(path.join(__dirname,"views"))


// 这一模块与中间件无关
// app.use(views(__dirname,+"/views"))
// app.use(async (ctx,next)=>{
//     ctx.body = "hello"
//     await next()
// })


// 中间件就是一个函数，那么直接在views后写函数
// console.log(path.join(__dirname, '/views'))//得到文件绝对路径
app.use(views(path.join(__dirname, '/views'), {//可以在views函数中来配置内容
    extension: 'ejs'  //扩展名为ejs
}))
app.use(async (ctx,next)=>{
    // 渲染模板  是异步的
    await ctx.render("index",{title:"Koa"})
    await next()
})
app.listen(3000)