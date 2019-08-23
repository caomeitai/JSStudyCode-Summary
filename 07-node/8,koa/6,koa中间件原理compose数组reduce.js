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

function compose(middlewares){
    return middlewares.reduce((a,b)=>{
        // console.log(b)
        // b()  //得到的是后两个函数中的数据
       return function(arg){ 
        //    a()  //得到1，2
        // a(b)  // 仅仅传递第一次b中的值   结果为1,2,3,4
        //  a(()=>{})  //在a中存在next()函数
         return a(function(){
              return b(arg)
        })
       }
    })
}

let fn = compose(app.middlewares)
// 当存在next时，那么就要给函数传递一个函数参数
fn(()=>{})










// 得到结果与reduceRight相反，b中得到后面两个结果
// let nums = [1,2,3]
// let r = nums.reduce(function(a,b){
//     console.log(b)
// })
// console.log(r)