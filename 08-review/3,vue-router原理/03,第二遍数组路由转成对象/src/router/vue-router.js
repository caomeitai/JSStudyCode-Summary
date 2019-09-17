class Router{
   constructor(options){
    //  console.log(options)
    this.mode = options.mode ||"hash"//默认是hash模式
    this.routes = options.routes ||[]
    this.routesMap = this.createMap(this.routes)//调用函数，传递实参this.routes
    console.log(this.routesMap)   
}
    //将路由规则从数组的结构转成对象的结构--->createMap
    createMap(routes){
     return  routes.reduce((memo,current)=>{
        // current.path是变量，赋值时使用[]，原本mome.path就OK
        memo[current.path] = current.component//向空对象中赋值
        return memo;
      },{})//传参，所以第一个值mome为{}
    }
}
// install必须作为类的静态方法
Router.install = function(Vue){

}
export default Router