import React,{useState} from "react"
import ReactDOM from "react-dom"
// 函数组件中不存在this，不存在生命周期，不存在状态
// 因此react推荐使用函数组件，hooks针对函数组件设计，类组件中没有

// 简单的useState:
// function Counter(){
//     // 想要使用状态就要引入useState
//     let [number,setNumber] = useState(0)
//     return(
//         <>
//         {/* 这样的状态直接使用，方法也同样直接调用即可 */}
//         <div>{number}</div>
//         <button onClick={()=>{setNumber(number+10)}}>改变状态</button>
//         </>
//     )
// }

// 深入的useState:
// useState每次渲染都是独立的闭包，每次改变状态时都有自己独立的事件处理函数
// 在使用alert时，仅仅是捕获到，当你点击按钮时的状态
function Counter(){
    let [number,setNumber] = useState(0)
    function alertNumber(){
        setTimeout(()=>{
            alert(number)
        },3000)
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={alertNumber}>弹出数值</button>
        <button onClick={()=>{setNumber(number+10)}}>加一</button>
        </>
    )
}
ReactDOM.render(<Counter></Counter>, document.getElementById("app"))