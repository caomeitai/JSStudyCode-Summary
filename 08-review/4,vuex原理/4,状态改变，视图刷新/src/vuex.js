let Vue;//在Vue.use时调用install方法传过来的vue实例
class Store{
    constructor(options){
        // this._s = options.state
        // 把状态变成响应式，状态改变视图刷新
        this._s = new Vue({
            data:{
                state:options.state
            }
        })
        // this._s = options.state

        // getters原理：传递状态获取状态
        let getters = options.getters ||{}
        this.getters = {}
        Object.keys(getters).forEach((getterName)=>{
            Object.defineProperty(this.getters,getterName,{
                get:()=>{
                    return getters[getterName](this.state)
                }
            })
        })
    }
    get state(){
        return this._s
    }
}
const install = _Vue=>{
   Vue = _Vue
 //通过混入来得到全局的this.$store
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