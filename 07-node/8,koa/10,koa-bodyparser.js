// koa-bodyparser
const Koa = require("koa")
// 直接就是把内容解析出来
const bodyParser = require("koa-bodyparser")
const app = new  Koa()
app.use(bodyParser())//直接使用这个中间件


// app.use表示的是使用中间件，中间件指的就是use里面的函数，它是异步的
// 当访问/时，会调用函数()=>{}
app.use(async (ctx,next)=>{
//   console.log(ctx.request.body) //拿到后端数据 { name: 'tanni', age: '12' }
//   ctx.body = "hello"
  ctx.body = ctx.request.body  //拿到响应数据
  await next()
})



app.listen(3000)