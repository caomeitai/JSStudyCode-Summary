// koa-router
const Koa = require("koa")
// 当以大写开头时，就是一个类，需要new一下
const Router = require("koa-router")
const app = new  Koa()
const router = new Router()
app.use(router.routes()).use(router.allowedMethods());

// 这样就可以利用get方法，写上路径OK
router.get("/",(ctx,next)=>{
   ctx.body = "首页"
})
router.get("/shop",(ctx,next)=>{
    ctx.body = "商店"
 })
 router.get("/cart",(ctx,next)=>{
    ctx.body = "购物车"
 })


app.listen(3000)