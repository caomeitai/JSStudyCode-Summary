const PENDING = "PENDING"
const RESOLVED = "RESOLVED"
const REJECTED = "RJECTED"

// new上promise时默认状态是pending
class Promise {
    // 执行器
    constructor(executor) {
        this.status = PENDING
        this.value = undefined//终值
        this.reason = undefined//拒因
        // 成功态的函数
        let resolve = (value) => {
            // 状态只能从等待态到其他状态，不可成功与失败同时出现
            if (this.status == PENDING) {
                this.value = value
                this.status = RESOLVED
            }
        }
        // 失败态的函数
        let reject = (reason) => {
            if (this.status == PENDING) {
                this.reason = reason//传递过来的reason值赋给初始值
                this.status = REJECTED
            }
        }
        // 当执行器抛出错误时，需要捕获错误
        try {
            // 执行器立即执行
            executor(resolve, reject)
        } catch (e) {
            reject(e)//扔出错误就代表失败啦！
        }
    }
    // .then函数
    then(onfulfilled,onrejected){
      if(this.status==RESOLVED){
        onfulfilled(this.value)
      }
      if(this.status==REJECTED){
          onrejected(this.reason)
      }
    }
}

// node中导出对象使用module.exports
module.exports = Promise