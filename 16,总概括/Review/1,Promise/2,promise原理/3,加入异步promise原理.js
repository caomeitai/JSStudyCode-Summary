const PENDING = "PENDING"
const RESOLVED = "RESOLVED"
const REJECTED = "RJECTED"
// 存在异步代码，当resolve在定时器中执行，那么then时的状态status还是pending
// 在then调用时，就将then中成功或者失败的状态存到数组中，使用时在拿出来调用
// 类似于发布订阅，将then中的两个函数都存到数组中，由于一个promise可以有多个then,所以就放到一个数组中

class Promise {
    // 执行器
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        // 将then中的函数存到数组中
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []
        // 成功态
        let resolve = (value) => {
            if (this.status == PENDING) {
                this.value = value
                this.status = RESOLVED
                // 调用then的第一个参数函数，就类似于data=>data
                this.onResolvedCallbacks.forEach(fn=>fn)
            }
        }
        // 失败态
        let reject = (reason) => {
            if (this.status == PENDING) {
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks.forEach(fn=>fn)
            }
        }
        // 捕捉错误
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    // then函数
    then(onfulfilled, onrejected) {
        if (this.status == RESOLVED) {
            onfulfilled(this.value)
        }
        if (this.status == REJECTED) {
            onrejected(this.reason)
        }
        // 处于等待态时，将then中的方法存到数组中
        if(this.status==PENDING){
           this.onResolvedCallbacks.push(()=>{
               this.onfulfilled(this.value)
           })
           this.onRejectedCallbacks.push(()=>{
               this.onrejected(this.reason)
           })
        }
    }
}
module.exports = Promise




// 简单点说：当操作中带有异步：
// 首先应定义两个数组存放then中的函数
// 在status状态仍处于pending时，将函数推到数组中
// 在状态发生改变时，将数组中的函数遍历出来，进行操作









