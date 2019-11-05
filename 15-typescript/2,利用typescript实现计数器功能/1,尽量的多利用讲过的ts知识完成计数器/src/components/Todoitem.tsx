import * as React from "react"
// 抽离出style对象，给其加上类型，
// 利用react中的api:React.CSSProperties限定style类型
const todoItemStyle:React.CSSProperties ={
    color:"red",
    backgroundColor:"purple"
}

// 定义传递参数类型
interface Props{
    content:string
}

// 定义函数组件，存在返回值，直接使用()
// 函数组件中不存在this，使用参数时直接就是props.xxx
const TodoItem:React.SFC<Props> = (props:Props)=>(<li style={todoItemStyle}>{props.content}</li>)

export default TodoItem;