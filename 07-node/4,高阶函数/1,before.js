// 高阶函数主要可分为两类：第1种：这个函数中的参数是函数。第2种：这个函数的返回值是函数。
// 1，before函数(装饰函数，AOP)  在执行一个函数之前去执行另一个函数 
// const f1 =()=>{
//     console.log("正在执行任务....")
// }
// // 使用before函数,在f1函数执行之前执行下面函数,但在f1函数上没有before函数，需要在其原型上挂上一个这样的函数
// Function.prototype.before=function(beforeFn){  //beforeFn是一个回调函数
// //  before函数返回一个函数，它的参数是一个函数
//     return ()=>{
//         beforeFn();
//         // 在箭头函数中不存在this，向它的上一级去寻找
//         // 除去调用before函数以外还调用了f1函数，使用this()来调用f1
//         this();//this是谁调用了before函数，就指向谁，这里是f1

//     }
// }
// // 意味着在执行f1之前执行了before的那个函数  
// // f2是会返回一个新的函数
// const f2 = f1.before(()=>{
//     console.log("开始啦....")
// })
// f2()


// 执行多个before函数
// let f1 = ()=>{
//     console.log("正在执行中...")
// }
// Function.prototype.before=function(beforeFn){
//      return ()=>{
//         beforeFn();
//         this();
//      }
// }
// let f2 =  f1.before(()=>{
//     console.log("before函数里参数是函数")
// })
// f2()
// // 每执行一次before函数，就会执行一次f1函数
// let f3 = f1.before(()=>{
//     console.log("这是又一个before函数f3")
// })
// f3()   //before函数里参数是函数  正在执行中...;  这是又一个before函数f3  正在执行中...


// 在调用before返回函数时可传递参数，利用...rest参数来接收，它可不断向下传递，传给f1
const f1 = (...args)=>{
    console.log("正在执行任务....",...args)
}
Function.prototype.before=function(beforeFn){
    return (...args)=>{// 利用rest参数来接收实参
        beforeFn();
        this(...args)  //从返回函数那里得到参数，把参数继续传递给f1
    }
}
let f2 = f1.before(()=>{
    console.log("开始吧！")
})
// f2()
// 如果给before返回函数传递了实参,它是传到了before函数return的那里
f2(1,2,3)



































// 练习代码
// let f1 = ()=>{
//     console.log("正在执行中...")
// }
// Function.prototype.before=function(beforeFn){
//      return ()=>{
//         beforeFn();
//         this();

//      }
// }
// let f2 =  f1.before(()=>{
//     console.log("before函数里参数是函数")
// })
// f2()