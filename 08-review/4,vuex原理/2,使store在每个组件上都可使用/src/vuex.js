let Vue;
class Store{

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