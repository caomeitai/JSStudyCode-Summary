let Vue;
class Store{
    // Store是个对象，需要class一下，在其里面配置可选项
    constructor(options){
        // console.log(options)
        // 利用_s的原因是为了方便的拿到数据，状态
        this._s = options.state//拿到state，给每个组件上的$store都挂上去
        // 得到仓库中的getters
        let getters = options.getters ||{}//不能直接挂载到$store上的原因是因为getters的方法中利用了状态
        // this.getters = getters//将main.js中的getters挂载到仓库上
        this.getters = {}
        // Object.keys获得的是键名，即函数名getterName，形成个新数组
        Object.keys(getters).forEach((getterName)=>{
            // console.log(getterName)
            // 详细化设置一个属性，也可说是配置某个属性，给其挂上个方法
            Object.defineProperty(this.getters,getterName,{
            //get函数给其配置相关内容，当你要获取gtterName时，自动调用
                get:()=>{//get中的指向发生改变，转成箭头函数，而在箭头函数中不存在this
                    // 可以拿到对象中对应函数名的方法，然后调用
                    return getters[getterName](this.state)//具体到拿到myAge对应的函数
                }
            })
        })
    }
    get state(){
        return this._s//为了返回状态，
    }
}
const install = _Vue=>{
   Vue = _Vue
   Vue.mixin({
     //保证每个组件中都可拿到store
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