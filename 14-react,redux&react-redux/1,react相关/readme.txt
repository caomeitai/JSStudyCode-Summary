1，路由：
    web端：react-router-dom( webapp)
    原生端：react-router-native( nativeapp)
2，安装：
    web端：npm i react-router-dom --save
    原生端：npm i react-router-native 
3，分类:
    基本路由，嵌套路由，动态路由，编程式路由，重定向路由，Switch
    1）基本路由：Router组件；Route组件；Link组件；类似以vue中的route.js  router-link  router-view
        使用步骤：
            1）在入口文件(index.js)导入路由模块；
            2）把Router组件包在根组件(App.js)外边；
            3）Route规则同样需要引进来(import { Route,Link } from 'react-router-dom')
            4）根据Route定义的规则(存在于App.js中) exact代表绝对纯净匹配
            5）使用Link组件生成连接  
        和vue中内容进行对比：Link组件即为router-link  Route组件规则即为router.js文件   
    2）嵌套式路由：Route组件；Link组件；
        它存在于基本路由之间，仅仅时发生了嵌套而已，用法并无大的变化。
    3）动态路由：在路由路径配置时存在着参数的传递，传入不同的id，显示不同的内容 
       配置：/id值--->/:id  
       获得id号：this.props.match.params.id   
    4）编程式路由：它有很多种方案，其中有一种是history
        使用步骤：
           1）引入相关模块 import {createBrowerHistory} from 'history'
           2）创建history  let history = createBrowerHistory()
           3）使用history  history.go(-1) history.goback() 都表示返回上一级   history.push("/xxx") push就是可以推到任何地方
           4）使用push存在的问题：不会自动跳转，需要强制刷新 createBrowerHistory({forcerefresh:true})
    5）重定向路由：Redirect组件与Switch组件是配合使用完成重定向的
        使用步骤：
          1）引入相关模块：import {Redirect,Switch} from "react-router-dom"
          2）使用：<Switch><Redirect from="/xxx" to="/xxxx"></Redirect></Switch>
上面全部仅仅是与路由相关总结


