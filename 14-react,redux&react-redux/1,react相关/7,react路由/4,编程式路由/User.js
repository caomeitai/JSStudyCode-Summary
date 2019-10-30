import React from "react"
import {Route,Link} from "react-router-dom"

import Reg from "./Reg" 
import Login from "./Login" 
export default class Home extends React.Component{
   render(){
       return(
           <div>
               <h1>用户页</h1>
               {/* link链接跳转 */}
               <p><Link to="/user/login">登录</Link></p>
               <p><Link to="/user/reg">注册</Link></p>

               {/* 匹配路由规则 */}
               <Route path="/user/reg" component={Reg}></Route>
               <Route path="/user/login" component={Login}></Route>
           </div>
       )
   }
}