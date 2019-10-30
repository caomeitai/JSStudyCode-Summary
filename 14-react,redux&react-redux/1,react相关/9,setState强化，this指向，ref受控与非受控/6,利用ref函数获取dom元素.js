import React, { Component } from 'react'
import ReactDOM from "react-dom"

// ref可以获取真实的dom元素
// 方案二：利用ref函数，将input框中的值赋给input框
class Counter extends Component {
    state={number:0}
    add = ()=>{
        // console.log(this.num1.value)//输到input框中的值
        // console.log(this.num1)//<input>
        let num1 = this.num1.value
        let num2 = this.num2.value
        let res =  parseFloat(num1)+parseFloat(num2)
        this.res.value = res;
    }
    render() {
        return (
            <div>
                {/* 最初始时是<input> 框，输入数值时就变成了数值*/}
               {/* <input ref={input=>{console.log(this.num1=input)}}/>+ <input ref={input=>this.num2=input}/><button onClick={this.add}>=</button><input ref={input=>this.res=input}/> */}
               <input ref={input=>this.num1=input}/>+ <input ref={input=>this.num2=input}/><button onClick={this.add}>=</button><input ref={input=>this.res=input}/>
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>,window.app)