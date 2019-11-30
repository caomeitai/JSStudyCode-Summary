// promise创建出来存在三种状态，且它会有执行器executor
// pending
// let promise = new Promise((resolve,reject)=>{})
// console.log(promise)//Promise { <pending> }



// pending--->resolved
// let promise = new Promise((resolve,reject)=>{
//     resolve("去旅游")//Promise { '去旅游' }
// })
// console.log(promise)



// pending--->rejected
// let promise = new Promise((resolve,reject)=>{
//     reject("没钱旅游")//Promise { <rejected> '没钱旅游' }
// })
// console.log(promise)

