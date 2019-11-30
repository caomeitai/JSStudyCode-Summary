一、移动端项目：使用lib-flexible做适配，配合flex布局；UI库一般可以是Element-UI，View-UI(适用于PC端)；MintUI，Vant，cubeUI(适用于移动端)。

二、适配库：https://juejin.im/post/5c6e53f1f265da2dc538b5bb   目的就是为了使用REM

三、因为CubeUI中存在自己的适配库（amfe-flexible），就不再使用lib-flexible啦！当你使用别的适配库的话，就需要利用上述适配库咯！  
四、想要适配的话，除了适配库以外，还需要指定设计稿大小：amfe-flexible中自带工具postcss-px2rem，对其文件配置postcss.config.js，还需要在utils文件夹中建上一个setRem.js文件，只需在入口文件中引入并调用。
更为详细的参考：https://juejin.im/post/5cbd7b54f265da0356323219

五、组件懒加载属于异步加载，需要包上函数loading，就是处理异步组件

六、常见问题：
  1，首页白屏：
   答：可分三大块： 
     1）把首页作为服务端ssr渲染(Nuxt.js)，有利于SEO；
     2）预渲染，在数据请求回来之前就渲染出来一些死数据；
     3）设置骨架屏
  2，异步加载组件出现闪动？
  3，tabbar定位到最底部时出现闪动？
    答：最好使用flex布局来设置样式，不要利用position直接定位   
  4，axios封装？
    答：以下几个步骤搞定：
      1）引入axios；2）封装类，里面存在constructor构造器，以及request请求数据的方法；
      3）构造器中参数：baseUrl：通过环境判断来得到，timeout：3000；
      4）request方法：创建axios实例，合并传递过来的参数与构造器中参数，返回实例调用instance(config)，是个promise,直接.then得到数据
      5）请求拦截与响应拦截设置，需要设置函数将两者包一下
      6）最终返回new上的axios类(对象)
   5，      