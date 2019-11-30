1,熟练掌握Promise原理，熟悉多种异步解决方案
   1）链式调用时想要走到下一个then的第二个函数，需要返回一个失败的promise,或者扔出一个错误
   2）then可以链式调用，上一个then返回的普通值，无论你是在第1个函数中返回，还是在第2个函数中返回，
    都会作为下一下then的成功的结果，如果不返回，undefined就作为下一个then的成功的结果
   3）终止then的链式调用，需要返回一个处于pending状态的promise	
   4）异步解决方案：回调函数-->Promise-->Generator+Co-->Async+await
2,如何将伪数组（本质就是对象）转成数组？
  arguments虽是伪数组，但其本身存在iterator迭代器 
  1）Array.from  利用这个直接转成数组
  2）[...obj]   需要它本身上带有iterator迭代器
  3）[].slice.call(obj)  对象借用数组上的slice方法
  slice是从已有的数组中返回符合条件的新的数据（返回数组）
  split将字符串分割成字符串数组
  splice得到的是被删除的数据形成的数组
3,熟练使用ES6语法，了解ES6的一些新语法？
  Map,WeakMap,Set  
  修饰器是一个对类进行处理的函数，用来修改类的行为;装饰器只能用来修改类及类的方法。
  模板字符串利用的是反引号，变量使用${}来拼接数据  传统字符串利用+进行数据拼接
  ES5继承
    继承实例属性：Animal.call(Dog)// Dog继承了Animal实例属性
    继承共有属性：
      1，Dog.prototype = Animal.prototype  //指向出现问题
      2，Dog.prototype.__proto__ = Animal.prototype
      3，Object.setPrototypeOf(Dog.prototype,Animal.prototype)
      4，Dog.prototype= Object.create(Animal.prototype)
  ES6继承
   直接通过extends就可实现继承
4,数组交集,并集,差集实现方法
  交集：Set与filter
  差集：Set与filter
  并集：Set  
   

  
  
个人技能：
	1,熟练使用DIV+CSS进行网页架构,深刻理解HTML5标签语义化;熟练掌握常见WebAPI;
	2,熟悉响应式布局及flex弹性布局,有效解决移动端适配问题;
	3,熟练掌握JavaScript相关技术,灵活运用JQeury,Swiper等常见的web库或插件;
	4,熟练掌握ES6语法及一些新特性,并能够在项目中灵活运用;
	5,熟练运用ElementUI、MintUI和CubeUI等UI组件库美化页面;
	6,熟练掌握JS中常见的异步解决方案;
	7,熟练掌握Webpack的常见配置并进行优化;
	8,熟悉node.js后端编程语言,利用express等框架开发简单的api接口;
	9,熟悉MongoDB数据库,可以熟练利用mongoose对数据库进行操作;
	10,熟练使用Vue.js,能够熟练使用vue-router进行路由管理，能够熟练使用Vuex进行状态管理;
	11,熟悉React技术栈(react.js,react-router,redux等),能够完成简单的项目开发;
	12,了解微信小程序、公众号开发流程,可以进行简单的app开发;
	13,熟练掌握七层网络模型,熟悉TCP,HTTP协议;
	14,熟悉常见的跨域解决方案,如;代理,nginx,jsonp;
	15,熟悉常见鉴权方案,如cookie,session,jwt,auth;
	16,熟练使用git源代码管理工具。
	
	

项目开发：
 项目名称：捕娱网（app） 	
	项目描述：捕娱网是为上海市人们开发的一款享受生活,娱乐自己的移动端app,
	它主要包括电影、演出、文化卡等页面。能够为上海的人们提供最新的娱乐信息,让其更好的享受生活。
 技术要点：
    1,该项目使用vue作为整体框架;
	3,使用Element-UI来美化页面;
	3,利用百度api,自定义覆盖物,标记商户位置;
	4,使用axios请求加载数据进行页面渲染;
	5,使用vue-router管理路由信息;
	6,使用props和$emit完成父子通信。
	
	
	
 项目开发：	
	项目名称：汉新闻（app）
	项目描述：汉新闻是由武汉广播电视台倾力打造，集头条、热门资讯、
	热门视频等节目于一身，全方位满足您的新闻需求的app。
 技术要点：
    1,该项目使用Vue-cli进行项目整体框架的搭建;
	2,使用swiper插件实现轮播图;
	3,使用Element-UI来美化页面;
	4,使用axios请求加载数据进行页面渲染;
	5,使用vue-router管理路由信息;
	6,使用Vuex实现用户信息的本地存储	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
工作经历：
	1,负责和UI沟通,根据产品需求渲染出规范的移动端和PC端页面;
	2,负责使用vue/react全家桶进行项目团队协作开发;
	3,负责使用axios请求接口数据,与后端完成接口对接;
	4,负责对前端项目进行优化,提高项目用户体验和性能;
	5,配合团队进行调试阶段的Bug修复;
	6,配合产品,UI等其他部门,进行项目推进;
	7,负责旧项目的维护;
	
自我评价：
    1,熟悉HTML5+CSS3新特性,比如变型,过渡动画等;
	2,能够使用 vue/react前端主流框架构建项目;
	3,了解过Flutter移动UI框架，试着写过简单的demo;
	4,看过vue-router,vuex源码,试着封装过minivue-router,minivuex;
    5,运用node.js的koa框架开发后台接口;
	6,熟悉vue中的常见的项目优化方案;
	7,利用mongodb创建简单的数据库。
	
	
	
找公司：
	应用市场 apk 下载量少的，hbuild打包apk  搜索这个apk对应web(PC,webapp)
	找公司（天眼查找公司）  找官网PC端和webapp端
	关注一些公众号小程序  网页 vue
	pc端网站  css
	CMS 内网访问  医院  政府  银行



	
		
	



















