import * as React from "react"
import { NavLink } from "react-router-dom"
import { Icon } from "antd"
import "./index.less"

class Tabs extends React.Component{
   render(){
       return(
           <footer>
               {/* exact精确匹配路径 */}
               <NavLink exact to="/"><Icon type="home"></Icon><span>首页</span></NavLink>
               <NavLink to="/mine"><Icon type="instagram"/><span>我的电影</span></NavLink>
               <NavLink to="profile"><Icon type="user"/><span>个人中心</span></NavLink>
           </footer>
       )
   }
} 
export default Tabs