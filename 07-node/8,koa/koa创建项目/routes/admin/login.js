const router = require("koa-router")()
const DB = require("../../model/db") 

// 创建二级路由
router.get("/",async (ctx)=>{
    // ctx.body = "登录页面"
    await ctx.render("admin/login")
})

// 处理用户提交的信息   刚开始出现临时重定向  302
router.post("/doLogin",async (ctx)=>{
    // console.log("提交成功啦！")
    let username = ctx.request.body.username  //通过后端form表单的name属性来拿到提交的数据信息
    let password = ctx.request.body.password  //通过后端form表单的name属性来拿到提交的数据信息
    // console.log(username)
    // console.log(password)
    // 去连接数据库，对比username和password和数据库里面的数据是否一致  
    // 专门件一个model用来存放数据  
    var result = await DB.find("users",{"username":username,"password":password})
    console.log(result)
    if(result.length>0){
        // console.log("hddhcdcjd")
        // 将登陆信息存到session中
        ctx.session.userinfo = result[0]
        ctx.redirect(ctx.state.__HOST__+"/admin")
    }else{

    }
})

// 导出router
module.exports = router.routes()

