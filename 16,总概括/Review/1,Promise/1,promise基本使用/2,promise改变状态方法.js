// 利用resolve将等待态转为成功态
let p = new Promise((resolve,reject)=>{
    resolve("钱")
})
console.log(p)//Promise { '钱' }


// 将等待态转成失败态两种方法：throw一个错误，reject直接改变状态
let p1 = new Promise((resolve,reject)=>{
    reject("穷")
    // throw new Error("穷")//Promise {<rejected> Error: 穷}
})
console.log(p1)//Promise { <rejected> '穷' }