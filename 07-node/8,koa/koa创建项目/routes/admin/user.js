const router = require("koa-router")()

// 创建三级路由
router.get("/",async (ctx)=>{
    // ctx.body = "用户管理"
//渲染的是这个模板，这是一个异步操作，路径是按照路由配置寻找到的
    await ctx.render("admin/user/index")  
})

// 添加用户
router.get("/add",async (ctx)=>{
    // ctx.body = "添加用户"
    await ctx.render("admin/user/add")
})



// 导出router
module.exports = router.routes()