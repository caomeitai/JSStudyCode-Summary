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
 //通过这个函数得到路径，有两种模式:一种hash，一种history
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
        window.addEventListener("load",()=>{
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
    push(){}
    go(){}
    back(){}

}
Router.install = function(Vue){
    // 当使用Vue.use(Router)时，调用install  全局混入beforeCreate方法
    Vue.mixin({
        beforeCreate(){
        //在全局上定义方法 ，找到根组件main.js
        if(this.$options && this.$options.router){
            // this._root = this//根组件main.js放在_root上
            this._router = this.$options.router//将router实例挂载到_router上
        }else{//父传子
            // this._root = this.$parent._root
            this._router = this.$parent._router

        }
          Object.defineProperty(this,"$router",{//精细配置router
              get(){
                //   return this._root._router
                  return this._router
              }
          })
          Object.defineProperty(this,"$route",{
              
        })
          
      }
    }),
    Vue.component("router-view",{
     render(h){
         return <h1>router-view</h1>
     }
    })
    Vue.component("router-link",{
        render(h){
          return <a>router-link</a>
        }
        
    })
}
export default Router