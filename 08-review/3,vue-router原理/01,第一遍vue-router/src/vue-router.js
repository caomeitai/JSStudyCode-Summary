let Vue;
class Router{
    // new上的构造器中的参数就是将内容传递给了constructor
    // 解构赋值得到routes，是数组的形式
    constructor({routes}){
       console.log(routes)
    }

}
// 首参是vue构造器
Router.install = (_Vue)=>{
 // console.log(_Vue)
//  console.log("********") //打印一次，表明install函数调用一次
 Vue = _Vue

//在混入时是找到根组件，将方法注册到全局上
 Vue.mixin({
     beforeCreate(){
        // console.log(".............")//打印四次
        // console.log(this)//this代表的是vue实例
        if(this.$options&&this.$options.router){ // 找到了main.js
           this._router = this.$options.router
        }else{//使得子组件中都有_router属性，指向当前的router
            this._router = this.$parent && this.$parent.router
        }
        // 给vue实例来上全局的router和route方法
        // Object.defineProperty(this,$router),{

        // }
        // Object.defineProperty(this,$route),{

        // }
     }
 }),
// 将组件进行全局注册
 Vue.component("router-link",{
     props:{
         to:{
             type:String,
             require:true
         }
     },
    //  router-link相当于a标签，需要有跳转的地方
     render(){
         return <a href={`#${this.to}`}>{this.$slots.default}</a>
     }
 }),
 Vue.component("router-view",{
    render(){
        return null
    }
})
}
export default Router