let Vue;
const forEach=(obj,callback)=>{
    Object.keys(obj).forEach(keyname=>{
        callback(keyname,obj[keyname])
    })
}
class Store{
    constructor(options){
        // state响应式
        this._s = new Vue({
            data:{
                state:options.state
            }
        })
        // getters原理
        let getters = options.getters ||{}
        this.getters = {}
        forEach(getters,(getterName,fun)=>{
           Object.defineProperty(this.getters,getterName,{
             get:()=>{
                 return fun(this.state)
             }
          })
        })
        // mutations原理
        let mutations = options.mutations ||{}
        this.mutations = {}
        forEach(mutations,(mutationName,fun)=>{
             this.mutations[mutationName] = (payload)=>{
                 fun(this.state,payload)
             }
         })
        //actions原理
        let actions = options.actions || {}
        this.actions = {}
        // console.log(this)//这里this指的是store
        forEach(actions,(actionName,fun)=>{
          this.actions[actionName]=(payload)=>{
            //   console.log(this)
              fun(this,payload)//this指的是Store实例
          }
        })
    }
    // 解决异步 本质提交mutations
    // dispatch(type,payload){
    //     // console.log(this)//此时的this是undefined，this的指向发生变化
    //     this.actions[type](payload)
    // }

    // this的指向发生改变
    dispatch=(type,payload)=>{
        console.log(this)//此时的this指的是Store，它需要拿到Store中的actions
        this.actions[type](payload)
    }

    // commit一个mutations
    // commit(type,payload){
    //   // console.log(this)//this的指向还是Store
    //   this.mutations[type](payload)
    // }

    // this的指向并未变，但是当存在异步时
    // mutations不写箭头函数会出现mutations未定义
    commit=(type,payload)=>{
        console.log(this)
        this.mutations[type](payload)
    }
    // 方便获取state
    get state(){
        return this._s.state
    }
}
const install = _Vue=>{
   Vue = _Vue
   Vue.mixin({
       beforeCreate(){
           if(this.$options && this.$options.store){
               this.$store = this.$options.store
           }else{
              this.$store = this.$parent && this.$parent.$store
           }
       }
   })
}
export default {
    install,
    Store
}