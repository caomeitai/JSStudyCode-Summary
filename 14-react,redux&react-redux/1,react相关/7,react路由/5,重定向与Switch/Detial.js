import React from "react"
import {createBrowserHistory} from "history"


// 创建history
let history = createBrowserHistory({
    // 配置强制刷新，以便使用push指令
    forceRefresh:true
});




export default class Home extends React.Component{
   render(){
       return(
           <div>
               <h3>这是商品详情界面</h3>
               <p>{"这是第"+ this.props.match.params.id+"号商品的详情界面"}</p>
               
               {/* 以下两种方式都是返回到上一级 */}
               {/* <button onClick={()=>history.go(-1)}>返回</button> */}
               {/* <button onClick={()=>history.goBack()}>返回</button> */}

               <button onClick={()=>history.push("/")}>返回</button>
           </div>
       )
   }
}