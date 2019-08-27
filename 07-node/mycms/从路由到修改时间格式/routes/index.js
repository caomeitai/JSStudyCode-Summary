// 在对应的路由配置时都需要载入路由模块
const router = require("koa-router")()


// 创建二级路由  它代表的是在访问某路径时，会使用中间件  为异步操作
router.get("/",async (ctx)=>{
    ctx.body = "前端首页面"
})

// 导出router
module.exports = router.routes()