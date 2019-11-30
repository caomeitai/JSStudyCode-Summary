const PENDING = "PENDING"
const RESOLVED = "RESOLVED"
const REJECTED = "RJECTED"

class Promise {
    // 执行器
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []
        // 成功态
        let resolve = (value) => {
            if (this.status == PENDING) {
                this.value = value
                this.status = RESOLVED
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }
        // 失败态
        let reject = (reason) => {
            if (this.status == PENDING) {
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks.forEach(fn=>fn())
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
        // 声明then返回值promise为promise2
        let promise2 = new Promise((resolve,reject)=>{
            if (this.status == RESOLVED) {
                onfulfilled(this.value)
            }
            if (this.status == REJECTED) {
                onrejected(this.reason)
            }
            if(this.status==PENDING){
               this.onResolvedCallbacks.push(()=>{
                   onfulfilled(this.value)
               })
               this.onRejectedCallbacks.push(()=>{
                   onrejected(this.reason)
               })
            } 
        })
      
    }
}
module.exports = Promise












