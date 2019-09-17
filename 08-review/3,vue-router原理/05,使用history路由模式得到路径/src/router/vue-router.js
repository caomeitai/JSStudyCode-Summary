class HistoryRoute{
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
   init(){
       if(this.mode ==="hash"){
        location.hash ? "" :location.hash="/"
        window.addEventListener("load",()=>{
           this.history.current = location.hash.slice(1)
        })
        window.addEventListener("hashchange",()=>{
            this.history.current = location.hash.slice(1)
        })
       }else{
        //    console.log("history模式")
        window.addEventListener("load",()=>{
            // 使用的是location.pathname  得到路径
            this.history.current = location.pathname
        })
        window.addEventListener("popState",()=>{
            this.history.current = location.pathname
        })
        
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