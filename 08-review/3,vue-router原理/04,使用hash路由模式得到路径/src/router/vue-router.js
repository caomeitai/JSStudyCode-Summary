class HistoryRoute{//创建路由对象
  constructor(){
    this.current = null
  }
}
class Router{
   constructor(options){
    this.mode = options.mode ||"hash"
    this.routes = options.routes ||[]
    this.routesMap = this.createMap(this.routes)
    this.history =new  HistoryRoute()
    this.init();
}
// 判断是那种路由模式是history还是hash
   init(){
       if(this.mode ==="hash"){
        //console.log("使用hash模式")
        // console.log(location.hash)//最初是为空
        location.hash ? "" :location.hash="/"
        // console.log(location.hash)//  #/
        window.addEventListener("load",()=>{
           this.history.current = location.hash.slice(1)
        //    console.log(this.history.current)
        })
        window.addEventListener("hashchange",()=>{
            this.history.current = location.hash.slice(1)
        })
       }else{
           console.log("history模式")
       }

    }
    createMap(routes){
     return  routes.reduce((memo,current)=>{
        memo[current.path] = current.component
        return memo;
      },{})
    }
}
Router.install = function(Vue){
}
export default Router