import React, { Component } from 'react'
import ReactDOM from "react-dom"

class Counter extends Component {
    state = { number: 0 }
    // 箭头函数，下面直接调用
    add = (event,msg) => {
        console.log(msg)//1000
        console.log(this)//Counter组件  Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
        this.setState({
            number: this.state.number + msg
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                {/* 参数传递：匿名函数 */}
                <button onClick={(event)=>{this.add(event,1000)}}>加1</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter></Counter>, window.app)


//1，this只会出现在类组件中，函数组件中不存在this;所以react推荐使用函数组件
//2，想要this的指向代表当前组件，处理办法：
//   1）使用箭头函数(里面不存在this，会向外找)，如果是普通函数，那么它里面的this就是undefined
//   2）在调用普通函数时，手动绑定this  onSubmit = {this.handleSubmit.bind(this)}
//   3）使用匿名函数 onclick=()=>{this.f1()}，感觉就是箭头函数的感觉










