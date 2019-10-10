一、cookie学习：
  1，cookie产生的原因
    HTTP是无状态的，并不知道是谁来请求我的；也不会记录下来，是哪个客户端访问的服务器
    主要依赖的就是会话控制（一个页面完全关闭，会话控制结束），利用会话控制可以在多个请求之间建立联系。
  2，cookie的概念
    cookie是服务器给浏览器种植得到的，当一下子种植多个cookie时，可使用数组形式。
    cookie就是用来存储标识的，标识是存储在浏览器端，再次请求浏览器时会带上cookie，它是通过req.headers.cookie来拿到cookie的
  3，cookie的特点
    1）cookie是不安全的
    2）一般不会存放敏感信息在cookie中
  4，cookie相关字段
    设置cookie相关字段时是将其与头的内容放在""中，用;来分隔开的
    domain  限制某个域可以访问，域名指的是后面的内容。比如：www.baidu.com--->域名指的是.baidu.com  
    path 表示在哪个路径下面可以访问cookie，可以在setHeader中设置路径，但一般默认是/
    size cookie的大小
    expires cookie过期时间，其默认值就是session，只有当会话关闭之后才会过期  max-age=10，设置的过期期限
    httpOnly 默认为false 表示只能通过服务器来操作cookie，它只是避免了服务器通过js代码（document.cookie）来操作cookie，它仍然可直接双击来修改cookie
  5，cookie最初配置与利用方法配置差异点
    1）种植一个cookie，且没有字段时，直接就是''的形式将cookie本身进行配置
    2）种植多个cookie，利用数组形式，多个cookie之间使用,隔开['name=tanni','age=12']
    3）存在字段配置时，cookie本身与字段之间使用;隔开，且它们共用一个引号'name=tanni;path=/write;max-age=10'
    4）在封装方法时，是将含有字段配置的引号外还添加上[]  [ 'name=tanni;path=/write;max-age=10' ]
二、session学习
  session是基于cookie的，cookie中保存着一个session_id，浏览器以后的每次请求都会带上id号
  第一次请求时，服务器会把一个session_id以cookie的形式种植给浏览器，而浏览器再次请求时会携带着id
  session存储在服务器的内存中，也可以存储在数据库中（持久化），但都是在服务器中
三、JWT学习
 1，JWT概念
   JWT指的是json web token
 2，封装axios 
   vue中的模块化是ES6的模块化  import
   node中的模块化是Commontjs中的模块化 require--->想要使用ES6的高级语言，利用babel模块就OK
   （1）利用class类来封装axios，在发送请求的方法中创建axios实例，传递参数时要求将constructor中的数据与传递的参数合并（merge函数）
   （2）请求接口全部存放在api文件夹中
   （3）axios的请求拦截与响应拦截。它们在浏览器中不起作用时，是因为options试探性请求处理不当。
   （4）加载动画小圆圈显示或者隐藏靠store.js来管理状态
 前后端分离开发：
  前端：
   安装模块：iview body-parser jsonwebtoken axios 
   组件模块：Home,Login,Profile 三大块
   登录：
    1）访问个人中心需要经过登录，登录之后跳转到首页面
    2）点击登录按钮首先拿到actions中的方法，将用户信息传递；成功就到首页，失败错误信息。
    3）actions中调用接口，成功的话commit提交mutations，失败就返回失败信息
    4）接口也是暴露函数，本质上也是调用了封装的axios的request方法，登录接口会将返回token存储到vuex中实现共享
   token：
    1）先要封装函数，存储数据到vuex和从vuex中获取数据的方法暴露出来，以便使用
    2）在store.js中将函数引进来操作使用，从而将token存到vuex中
    3）每次请求都要携带token，将其放到请求头上,验证token来开个接口
    4)在接口中也是调用actions方法，通过token来判断到底登录与否
   Profile:
    1）个人中心登录才能访问，在个人中心的路由中配置：meta:{needLogin:true}
    2）得到哪些页面需要登陆后访问，进行路由之间的跳转与验证是否需要登录
  后端：
   开一台服务器，写端口要注意跨域问题：浏览器的同源策略，（ajax）axios+浏览器
   解决方案：代理服务器，在vue.config.js中配置；后端配置cors就是配置一堆的头；浏览器插件；
四、最常见面试题
 1，localStorage，sessionStorage，session，cookie四者的区别？
   （1）localStorage：它里面不能跨域存取；最大5M的存储空间，当超过5M的数据就会丢失；在发送请求时，不会带上localStorage
   （2）sessionStorage：它是临时的存储区域，当浏览器关闭，会话结束以后，里面的数据就会丢失。
   （3）cookie：它是靠服务器种植的，浏览器每次请求时都会带上cookie，浪费流量与带宽；它是不安全的，每个人都可以篡改信息；解决无状态问题，它最大空间是4K。
   （4）session：它是基于cookie的，保存在服务器中（内存或者数据库中），它相对于cookie是较为安全的
 2，前后端分离开发（前端调用后端的api接口）：cookie仍是可以种植的，但不会用到它（不安全，性能不高），用到的主流是session和JWT




localStorage--->setItem("name","tanni")来存储标识
























