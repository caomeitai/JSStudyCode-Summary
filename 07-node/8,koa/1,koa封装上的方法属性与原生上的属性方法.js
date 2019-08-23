const koa =require("koa")

// 创建一个koa实例
let app = new koa

// koa建议使用koa封装的
//原生的：ctx.res.XXX  ctx.req.XXX
// koa封装的：ctx.response.XXX    ctx.request.XXX

// 在koa中全部是中间件   但是在koa中没有任何捆绑中间件  ctx中包装了req和res代表上下文  next是中间件必须参数
app.use((ctx,next)=>{

//  1，send是express中res上的方法   在koa是不存在的
//  ctx.res.send("hello")  //是拿不到数据的
//  ctx.response.send("hello")  //是拿不到数据的

//2，在原生中的res参数中有end方法     ctx.res代表拿原生的res
//  ctx.res.end("hello")   // hello


// 3，除了可以拿到原生的res，req之外，koa自己还封装两个东西：request  response
//    ctx.response  代表去拿koa封装的响应对象  
//   ctx.response.body="world"



    //1， url值这个属性在原生和koa封装的上面都存在
    // console.log(ctx.req.url)// 通过原生的方式获取url
    // console.log(ctx.request.url)// 通过koa封装的request对象来获取url
    // console.log(ctx.request.req.url)// 通过koa封装的request对象得到原生的req对象，再得到url
    // console.log(ctx.url)// 可以直接通过上下文得到url

    //2，path属性在原生上是不存在的，原生上的是通过url解析出来的pathname
    // console.log(ctx.request.path)// 通过koa封装的request对象来获取path
    // console.log(ctx.path)// 可以直接通过上下文得到path
    // console.log(ctx.req.path)// undefined  在原生的Node中，req上面是没有path
     

    // ctx.response.res.end("tanni,hello!")//封装上的res对象上的end方法
    // ctx.res.end("tanni阿爸")//拿到原生上的end方法
    // ctx.response.end("防弹forever")  //封装的response上没有end方法
    // ctx.response.body = "侬好！"
    // ctx.body="你好！！！！"

})

app.listen(3000)