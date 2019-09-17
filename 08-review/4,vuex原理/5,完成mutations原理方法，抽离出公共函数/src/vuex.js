let Vue;
// 原理中的公共函数抽离
const forEach=(obj,callback)=>{
    Object.keys(obj).forEach(keyname=>{//拿到实际中的函数
        callback(keyname,obj[keyname])//回调函数中是给每个函数名再附上个函数
    })
}
class Store{
    constructor(options){
        this._s = new Vue({
            data:{
                state:options.state
            }
        })
        console.log(this._s)//它是vue实例
        let getters = options.getters ||{}
        this.getters = {}
        forEach(getters,(getterName,fun)=>{
           Object.defineProperty(this.getters,getterName,{
             get:()=>{
                 return fun(this.state)
             }
        })
    })
       // console.log(getters)
        // Object.keys(getters).forEach(getterName=>{
        //     Object.defineProperty(this.getters,getterName,{
        //         get:()=>{
        //             return getters[getterName](this.state)
        //         }
        //     })
        // })


        // 完成mutations的原理
        let mutations = options.mutations ||{}
        // console.log(mutations)
        this.mutations = {}
        // Object.keys(mutations).forEach(mutationName=>{
        //     // 给空对象中添加的每一项来传递函数，其中携带参数payload
        //     this.mutations[mutationName] = (payload)=>{
        //         mutations[mutationName](this.state,payload)
        //     }
        // })
        forEach(mutations,(mutationName,fun)=>{
             this.mutations[mutationName] = (payload)=>{
                 fun(this.state,payload)
             }
         })
    }
    //提交的是什么函数，携带的参数，最终操作的还是mutations
    commit(type,payload){
      this.mutations[type](payload)
    }
    get state(){
        // this._s
        return this._s.state//记住this._s是vue实例
    }
}
const install = _Vue=>{
   Vue = _Vue
   Vue.mixin({
       beforeCreate(){
           if(this.$options && this.$options.store){
               this.$store = this.$options.store//父组件上存在this.$store
           }else{
              this.$store = this.$parent && this.$parent.$store//将父中的传递给子中
           }
       }
   })
}
export default {
    install,
    Store
}