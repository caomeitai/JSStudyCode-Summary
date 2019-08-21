// 1，process.cwd() 返回node.js进程的当前工作目录  是个字符串
// console.log(process.cwd())

// 2，process.env属性  返回值：当前运行的进程处于的环境  是个对象
// console.log(process.env)

//3，process.nextTick() 是异步的且是微任务而且比promise先执行 
// console.log(1)
// setTimeout(()=>{
//   console.log("setTimeout")
// },0)
// process.nextTick(function(){
//     console.log("nextTick")
// })
// console.log(3)

// console.log(1)
// process.nextTick(function(){
//     console.log("nextTick")
// })
// console.log(3)
// setTimeout(()=>{
//   console.log("setTimeout")
// },0)

console.log(1)
Promise.resolve().then(()=>{
    console.log("Promise")
})
process.nextTick(function(){
    console.log("nextTick")
})
console.log(3)
