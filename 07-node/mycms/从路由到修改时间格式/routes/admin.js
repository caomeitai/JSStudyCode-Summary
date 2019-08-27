// 在对应的路由配置时都需要载入路由模块
const router = require("koa-router")()
const url = require("url")



// 得到静态资源的绝对路径
router.use(async (ctx,next)=>{
    // 在走到后台所有路径之前，拦截。配置全局的变量得到绝对路径 以便它们可以使用
    // console.log("http://"+ctx.request.header.host) // http://localhost:3000
    ctx.state.__HOST__ = "http://"+ctx.request.header.host
    
    // 得到页面访问的路径   解析路径
    // let pathname = url.parse(ctx.request.url).pathname
   // console.log(pathname)  // /admin/user/
   
   //将路径名前面的/去掉    
   let pathname = url.parse(ctx.request.url).pathname.substring(1)
  // console.log(pathname) //admin/user/
   let splitUrl = pathname.split("/")
//    console.log(splitUrl)   // [ 'admin', 'user', '' ]分割得到数组


   ctx.state.G ={
        userinfo:ctx.session.userinfo,  // 将存放在session中的用户信息保存到ctx的state上面
        url:splitUrl
    }



 

    // 权限校验
    if(ctx.session.userinfo){ //假设session区域中存在填写过的userinfo  放行
        await next()
    }else{
        if(pathname =="admin/login" ||pathname =="admin/login/doLogin"||pathname =="admin/login/code"){
            await next() //本身访问登录页面，或者说登录校验页面时，也是直接放行到登录页面
        }else{
            ctx.redirect("/admin/login")  //跳转到登录页面  因为是在绝对路径里面，所以路径是/admin/login
        }
    }
})


let login = require("./admin/login")
// let user = require("./admin/user")
let manager = require("./admin/manager")

// 创建二级路由  它代表的是在访问某路径时，会使用中间件  为异步操作
router.get("/",async (ctx)=>{
    // ctx.body = "后台首页面"
    ctx.render("admin/index")
})   // 二级路由须在一级路由基础上进行

router.use("/login",login)
// router.use("/user",user)
router.use("/manager",manager)




// 导出router
module.exports = router.routes()