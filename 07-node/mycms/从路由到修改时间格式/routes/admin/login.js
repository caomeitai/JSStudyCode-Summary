// const router = require("koa-router")()
// const DB = require("../../model/db") 
// // 用来得到验证码
// const svgCaptcha = require('svg-captcha');


// // 创建二级路由
// router.get("/",async (ctx)=>{
//     // ctx.body = "登录页面"
//     await ctx.render("admin/login")
// })

// // 处理用户提交的信息   刚开始出现临时重定向  302
// router.post("/doLogin",async (ctx)=>{
//     // console.log("提交成功啦！")
//     let username = ctx.request.body.username  //通过后端form表单的name属性来拿到提交的数据信息
//     let password = ctx.request.body.password  //通过后端form表单的name属性来拿到提交的数据信息
//     // console.log(username)
//     // console.log(password)
//     let code = ctx.request.body.code  //通过后端form表单的name属性来拿到提交的数据信息
//     // 判断用户提交的验证码与session中保存的验证码是否一致
//     if (code.toLocaleLowerCase() === ctx.session.kcode.toLocaleLowerCase()) {
//         // 去连接数据库，对比username和password和数据库里面的数据是否一致  
//         // 专门件一个model用来存放数据  
//         var result = await DB.find("users",{"username":username,"password":password})
//         // console.log(result)
//         if(result.length>0){
//             // console.log("hddhcdcjd")
//             // 将登陆信息存到session中
//             ctx.session.userinfo = result[0]
//             ctx.redirect(ctx.state.__HOST__+"/admin")
//         }else {// 用户名和密码错误  渲染可带参数
//             ctx.render("admin/error",{
//                 message:"用户名和密码错误",
//                 redirect:ctx.state.__HOST__+"/admin/login"
//             })
//         }

//     }else {// 验证码错误
//         ctx.render("admin/error",{
//             message:"验证码错误",
//             redirect:ctx.state.__HOST__+"/admin/login"
//         })
//     }


// })


// // 生成验证码  当访问这个路由时会访问验证码
// router.get("/code",async (ctx,next)=>{
//     // 创建 生成验证码只有数字和字母
//     let captcha = svgCaptcha.create({
//         width:100,
//         height:50,
//         fontSize:50,
//     });

//     // 生成具有数学算法的验证码
//     // let captcha = svgCaptcha.createMathExpr({
//     //     width:100,
//     //     height:50,
//     //     fontSize:50,
//     // });
//     ctx.session.code = captcha.text; //根据name属性保存验证码
//     ctx.response.type = "image/svg+xml" //设置响应头
//     ctx.body = captcha.data  // 响应验证码
//     await next()
// })

// module.exports = router.routes()


const router = require("koa-router")()
const DB = require("../../model/db")
const tools = require("../../model/tools")
const svgCaptcha = require('svg-captcha');

// 创建二级路由
router.get("/", async (ctx, next) => {
    // ctx.body = "登录页面"
    await ctx.render("admin/login")
    await next()
})

// 处理用户登录时填写信息 
router.post("/doLogin", async (ctx) => {
    // console.log("......")
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let code = ctx.request.body.code;
    // 判断用户提交的验证码和session中保存的验证码是否一样
    if (code.toLocaleLowerCase() === ctx.session.code.toLocaleLowerCase()) {
        // 验证码一至
        // 去连接数据库，对比uername和password和数据库的是否一样。  使用工具对密码进行加密处理
        var result = await DB.find("admin", { "username": username, "password": tools.md5(password) })
        // console.log(result)
        if (result.length > 0) {
            ctx.session.userinfo = result[0]
            // console.log(ctx.session)
            ctx.redirect(ctx.state.__HOST__ + "/admin")
        } else {
            // 用户名和密码错误
            ctx.render("admin/error",{
                message:"用户名和密码错误",
                redirect:ctx.state.__HOST__+"/admin/login"
            })
        }

    } else {
        // 验证码错误
        ctx.render("admin/error",{
            message:"验证码错误",
            redirect:ctx.state.__HOST__+"/admin/login"
        })
    }
})

// 生成验证码
router.get("/code", async (ctx, next) => {
    var captcha = svgCaptcha.create({
        width: 120,
        height: 40,
        fontSize: 40
    });


    // var captcha = svgCaptcha.createMathExpr({
    //     background:"skyblue",
    //     width:100,
    //     height:40,
    //     fontSize:40
    // })
    // 保存验证码
    ctx.session.code = captcha.text;
    // 设置响应头
    ctx.response.type = "image/svg+xml"
    // 响应验证码
    ctx.body = captcha.data
    await next();
})

// 退出登录
router.get("/loginOut",async (ctx,next)=>{
    ctx.session.userinfo = null;//将session中的userinfo数据清空就OK
    ctx.redirect(ctx.state.__HOST__+"/admin/login")
    await next()
})

module.exports = router.routes()