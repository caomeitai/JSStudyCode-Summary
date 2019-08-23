const Koa = require("koa")
let app = new  Koa()

// 在koa中没有路由，你要使用路由的话就要使用第三方的Koa中间件
//    app.use((ctx,next)=>{
//       ctx.body = "hello,tanni"  //响应数据
//    })

// 研究koa的中间件
// 在koa中，中间件也是从上到下执行的
// app.use((ctx,next)=>{
//     console.log(1)
//     console.log(2)
//     next()
// })
// app.use((ctx,next)=>{
//     console.log(3)
//     console.log(4)
//     next()
// })
// app.use((ctx,next)=>{
//     console.log(5)
//     console.log(6)
//     next()
// })


// koa中间件原理与express中间件原理是不同的
app.use((ctx,next)=>{
    console.log(1)
    next()
    console.log(2)
})
app.use((ctx,next)=>{
    console.log(3)
    next()
    console.log(4)
    
})
app.use((ctx,next)=>{
    console.log(5)
    console.log(6)
})  //  1  3  5  6  4  2


// 上面可等效如下代码
app.use((ctx,next)=>{
    console.log(1)
    // next()
    ((ctx,next)=>{
        console.log(3)
        // next()
        ((ctx,next)=>{
            console.log(5)
            console.log(6)
        })()
        console.log(4)
        
    })() //转成立即调用函数  IIFE 只需在函数外面加上()并且调用
    console.log(2)
})
// app.use((ctx,next)=>{
//     console.log(3)
//     next()
//     console.log(4)
    
// })
// app.use((ctx,next)=>{
//     console.log(5)
//     console.log(6)
// })  //  1  3  5  6  4  2






app.listen(3000)