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
        location.pathname ? "" : location.pathname = "/"
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
    Vue.mixin({
        beforeCreate(){
        if(this.$options && this.$options.router){
            this._router = this.$options.router
            // console.log(this._router)
            Vue.util.defineReactive(this,"xxx",this._router,history)
        }else{
            this._router = this.$parent._router
        }
          Object.defineProperty(this,"$router",{
              get(){
                  return this._router
              }
          })
          Object.defineProperty(this,"$route",{
              get(){
                //   console.log(this._router.history.current)
                  return {
                    current: this._router.history.current
                  }  
              }
        })
          
      }
    }),
    Vue.component("router-view",{
     render(h){
         let current = this._router.history.current
         let routesMap = this._router.history.routesMap
         console.log(current)
         return <h1>router-view</h1>
        // return h(routesMap[current])
     }
    })
    Vue.component("router-link",{
        render(h){
          return <a>router-link</a>
        }
        
    })
}
export default Router