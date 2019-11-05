import * as React from "react";
import "./index.less";
import { Icon } from "antd";

// 需要传递的状态：history和标题内容
interface Props {
  children: any;
  history: any;
}

// 在这里不需要状态修改，只需要接收状态
export default function NavHeader(props:Props) {
  // console.log(props);//{history: {…}, children: "个人中心"}接收到的是profile传递过来的数据状态
  return (
    <div className="nav-header">
      <Icon type="left" onClick={()=>props.history.goBack()}></Icon>
      {/* 下面的children相当于插槽，将内容插入即可 */}
      {props.children}
    </div>
  );
}


