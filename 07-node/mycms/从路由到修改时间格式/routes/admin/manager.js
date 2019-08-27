const router = require("koa-router")()
const DB = require("../../model/db")

// 创建三级路由
router.get("/",async (ctx)=>{
    let result = await DB.find("admin",{})  //查找数据库里所有数据
    // console.log(result)  //得到一个数组
    // ctx.body = "管理员列表"
//渲染的是这个模板，这是一个异步操作，路径是按照路由配置寻找到的
    await ctx.render("admin/manager/list",{
        list:result // 将数据和列表模板绑定
    })  //除了渲染以外还要拿到数据库的数据
})

// 添加管理员
router.get("/add",async (ctx)=>{
    // ctx.body = "添加管理员"
    await ctx.render("admin/manager/add")
})



// 导出router
module.exports = router.routes()