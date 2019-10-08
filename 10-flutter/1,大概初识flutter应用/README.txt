1，flutter项目结构
 1）flutter项目中代码放在lib下面，类似于vue项目中的src文件夹 
    test是flutter项目中的测试文件，类似于vue项目里面的test文件夹
 2）三者代码存放
    android android平台相关的代码
    ios ios平台相关的代码 
    lib flutter相关的代码
 3）pubspec.yaml是flutter项目中的配置文件，存放一些第三方依赖，
    类似于vue项目中的paceage.json文件
 4）在lib文件下有一个main.dart，是入口文件，类似于vue中的main.js文件。
 5）在main.dart文件中，runApp后面要跟上一个组件。vue中也有一个render(h) h(App)
 6）在flutter中，根组件只能是MyApp组件（类似于main.js文件），然后MaterialApp组件（类似于vue中的App组件），然后有在其里面的home配置项中，渲染其他组件
 7）它要通过脚手架Scaffold来渲染页面
2，flutter与vue的区别联系
 1）在flutter中，一切都是组件；在vue中，也一切都是组件；
    vue中的组件是.vue文件。在flutter中组件就是类，当需要组件时就只需new上这个类，通常可以把new省略不写。
 2）在flutter中，结构和样式写在一起，当然它不像vue中分结构和样式，它是把样式也定义成了组件。
 3）在flutter中，一个组件中包含另一个组件，那么这个组件内部需要写一个child，才可写另一个组件。



猫眼电影数据：

http://m.maoyan.com/ajax/movieOnInfoList?token=


