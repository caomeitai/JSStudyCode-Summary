import React, { Component } from 'react'
import ReactDOM from "react-dom"

// ref可以获取真实的dom元素
// 方案一：直接给ref起名字，利用this.refs.xxx来获取到dom元素中的值
class Counter extends Component {
    state={number:0}
    add = ()=>{
        // 获取到input框标签中的数值
        let num1 = this.refs.num1.value
        let num2 = this.refs.num2.value
        // console.log(num1,num2) // 1,1
        // console.log(typeof num1,typeof num2)//string string
        let res =  parseFloat(num1)+parseFloat(num2)
        // console.log( res)
        // console.log(typeof res)
        this.refs.res.value = res;//将相加之后的数值给了input框
    }
    render() {
        return (
            <div>
               <input ref="num1"/>+ <input ref="num2"/><button onClick={this.add}>=</button><input ref="res"/>
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>,window.app)