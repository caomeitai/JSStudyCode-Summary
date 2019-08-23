let app = {
    middlewares:[],
    use(fn){
     this.middlewares.push(fn)
    }
}
app.use((next)=>{
    console.log(1)
    console.log(2)
    next()
})
app.use((next)=>{
    console.log(3)
    console.log(4)
    // next()
})
app.use((next)=>{
    console.log(5)
    console.log(6)
})

// [ [Function], [Function], [Function] ]
// console.log(app.middlewares)

// compose是reducx的中间件原理
function compose(middlewares){
    // 要想使用middlewares就要传过来
   return middlewares.reduceRight((a,b)=>{
      /* reduceRight方法是将最后一个数先给了总和，然后不断去拿值
         在这里第一次时：先把b拿到的最后一个函数给了a(5,6)  b中得到(3,4)
         第二次时：再把b拿到函数给了a(3,4里面有5,6)  b中得到(1,2)
     */
       //   这里是自己让它返回一个函数
        // console.log(b)  //此时打印出两个函数function
        return function(){
            // 这里的b最先指的是最后一个函数  中间件
            // console.log(b)
            // b()  //最后一次b中存放的函数使第一个，打印出1,2
            b(a)
        }
    })
}

// 规定compose函数调用返回值为函数  需要用到数组，就要作为参数传过去
let fn =compose(app.middlewares)
// 是一步步返回，不断return，一直将函数返回到compose函数调用处
fn()















// 数组中的reduceRight方法
// reduceRight()方法与reduce()功能一致 都是累加 只不过前者是从后往前进行累加的
// let numbers = [1,2,3,4,5]
// let h = numbers.reduceRight((total,number)=>{
//     console.log(total)
//     return total+number
// })
// console.log(h)



// 通过这几行来判断上面a,b中到底存放了啥数据
// let numbers = [1,2,3]
// let h = numbers.reduceRight((total,number)=>{
//     console.log(number)
    // return total+number
// })
// console.log(h)
