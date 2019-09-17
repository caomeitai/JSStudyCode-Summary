vue-router原理
  import Vue from "vue"
  import Router from "vue-router"
  Vue.use(Router)--->让vue使用Router这个插件
  new Router()
  vue-router封装好的东西：
  <router-link></router-link>
  <router-view></router-view>
  this.$router  this.$route

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









































