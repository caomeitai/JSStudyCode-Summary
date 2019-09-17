vue-router原理
  import Vue from "vue"
  import Router from "vue-router"
  Vue.use(Router)--->让vue使用Router这个插件
  new Router()
  vue-router封装好的东西：
  <router-link></router-link>
  <router-view></router-view>
  this.$router  this.$route

两种路由模式：
  history:history中h5的方法：pushState和popState
  hash:主要是利用location.hash这个api
        load和hashchange两个函数  

解析：
 1，Router可以引进来，即要求从vue-router导出，且它是一个类，所以在下面才可以new Router() 
 2，Vue.use()--->use就可证明Router为插件（第三方的依赖），而非中间件（body-parser或者Nginx）
 3，Vue的插件是个对象，插件对象中必须有install方法
 4，install方法中第一个参数是Vue构造器ƒ Vue (options) {xxx}--->这里的参数是形参
 5，在Vue.use(Router)时，会调用install方法，这个方法只会执行一次，与此同时也将引进来的vue构造器传给了install中的参数
 6，想要构造器的实例都可以调用某个方法:
     1）需要把方法写在构造器原型上面  vue.prototype.say = function(){}，它与vue内部的方法是分开的
     2）使用混入vue.mixin()，它是将函数混入到vue构造器内部，组合到一起
 7，vue.mixin({beforeCreate(){}})  在beforeCreate函数中找到根组件main.js



---------------------------------------------------------------------------------------------------------------
国庆假期安排：
 不再讲的内容: 
   1，小程序
   2，js正则表达式
   3，bootstrap 官网
   4，jquery文档
 结束的内容 
   vue node express koa
   vue react 来写webapp 网页开发
 未讲的内容：
   react flutter-->android ios h5代码

Vuex原理 
  1，Vuex与vue是配套使用的，vue有自己状态的管理机制，在vue的data中放状态；
     当数据较多，或者组件与组件之间来回传递数据时，通过vuex来管理状态
  2，Vuex的核心
     把状态放在一个公共的地方，哪个组件使用，直接可从公共的地方获取状态 
  3，react中也有一个状态管理机制，是redux，它是专门的库，它可配合很多东西来使用
  4，vuex的工作原理
    1）vuex的state中存放着状态，状态的改变可通过mutations来实现；
    2）当状态是通过异步来获取到时，需要通过dispatch一个actions来解决，不过它的本质仍是commit一个mutations；
    3）通过mutations来改变状态，状态改变需要再次渲染视图，完成组件、页面的渲染
  5，代码原理
   1）vuex是个插件，且与vue配套使用
     安装：npm i vuex
     引入：import Vuex from "vuex"
     使用：Vue.use(Vuex)
     导出：new Vuex.Store({state:{},mutations:{},actions:{}})
   2）引入的Vuex是对象，需要建文件导入一个对象
      Vue.use(Vuex) 只要use就会调用installl方法，对象里肯定存在其方法
      在导出时，它是new Vuex.Store，所以Store肯定也存在于对象中
   3）每个组件中都可拿到store，需要在install方法中，找到根组件main.js，将store挂载到每个子组件上
   4）Store仓库是个对象，完成对象中的配置项options，将其全部挂到this.$store上去
      1，首先是state状态，只需要将它从main.js中拿到即可；
      2，然后getters方法，其原理存在Object.keys()来遍历getters中的方法,Object.defineProperty来配置某个属性；它需要获取数据，所以在这里需将state另外存储，且写上个函数，来返回
      3，当存在异步函数时，想要状态改变视图刷新，在vuex中状态改变了，视图也是刷新
         vuex中响应式原理靠的是new vue，只有data中的数据才是响应式的    
      4，改变状态：异步请求数据，通过事件；在vuex中最好通过mutations来获取数据，状态，mutations需要commit函数
         mutations原理和getters有相似之处，但本质上就是给每个函数名都附上函数，需要遍历对象得到数组，函数中除去state以外还存在参数，都需要传递过去
      5，处理异步操作使用actions，本质也是提交commit一个mutations;但是它利用的是dispatch，mutations利用的是commit
        异步处理时注意this的指向可能会发生变化 








































