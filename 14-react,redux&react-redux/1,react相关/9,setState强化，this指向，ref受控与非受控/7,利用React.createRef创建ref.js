import React, { Component } from 'react'
import ReactDOM from "react-dom"

// ref可以获取真实的dom元素
// 方案三：利用React.createRef()创建ref
class Counter extends Component {
    constructor(props) {
        super(props)
        // 利用React.createRef创建ref，相当于给input框起名字
        // 跟refs的用法较为相似，this.refs.value
        this.num1 = React.createRef();
        this.num2 = React.createRef();
        this.res = React.createRef();
    }
    add = () => {
        // console.log(this.num1)//{current: input}
        // console.log(this.num1.current)//<input>
        // console.log(this.num1.current.value)//1
        // 拿到input框中的输入值
        let num1 = this.num1.current.value
        let num2 = this.num2.current.value
        let res = parseFloat(num1) + parseFloat(num2)
        this.res.current.value = res;
    }
    render() {
        return (
            <div>
                <input ref={this.num1} />+ <input ref={this.num2} /><button onClick={this.add}>=</button><input ref={this.res} />
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>, window.app)