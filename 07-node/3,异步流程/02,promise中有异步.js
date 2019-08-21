// 1，因为promise本身是同步的，先执行promise，那么将setTimeout扔到队列中，执行resolve
//   紧接着即为调用then函数，先打印出看演唱会，再是setTimeout
// let p = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      console.log("setTimeout")
//    },1000)
//    resolve("看演唱会")  //看演唱会   setTimeout
// })
// p.then((data)=>{
//   console.log(data)
// },(err)=>{
//    console.log(err)
// })


// 此时resolve在定时器函数内部，先执行promise，虽然定时器为异步的宏任务，但
// .then的执行要求resolve调用，所以会先打印setTimeout，再者  看演唱会
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("setTimeout")
      resolve("看演唱会")  
    },1000)  //  setTimeout   看演唱会
 })
 p.then((data)=>{
   console.log(data)
 },(err)=>{
    console.log(err)
 })