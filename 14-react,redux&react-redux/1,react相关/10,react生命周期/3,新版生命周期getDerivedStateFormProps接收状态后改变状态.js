import React, { Component } from 'react'
import ReactDOM from "react-dom"

class Counter extends Component {
    static defaultProps = { name: "tanni" }//默认属性
    constructor(props) {
        super(props)
        this.state = { number: 0 }//初始化状态
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleClick}>+</button>
                <hr />
                {/* 将状态以属性形式传递到子组件 */}
                <SubCounter number={this.state.number}></SubCounter>
            </div>
        )
    }
}

// getDerivedStateFromProps将属性接收过来转成状态
// nextProps表示父给子传递过来的新的数据 加一之后
// preState是子接收到的上一次的状态 加一之前
class SubCounter extends Component {
    state = { number: 0 }
    // 从属性对象中获取派发状态
    static getDerivedStateFromProps(nextProps, prevState) {
        let { number } = nextProps;
        // if (number % 2 === 0) {
        //     // console.log(number + 10)
        //     return {number:number + 10}
        // } else {
        //     // console.log(number + 100)
        //     return {number:number + 100}
        // }

        if (number % 2 === 0) {
            // console.log(prevState.number+number + 10)//0+0+10=10,111+2+10=123,240
            return {number:prevState.number+number + 10}
        } else {
            // console.log(prevState.number+number + 100)//10+1+100=111,123+3+100=226,345
            return {number:prevState.number+number + 100}
        }
    }
    handleChange = ()=>{
        console.log(this.state.number)//10
        this.setState({
            // 这里的改变状态是在this.state.number基础上
            // 又加上this.state.number+1的结果才是显示出来的答案
            number:this.state.number+1 //920
        })
    }
    render() {
        return (
            <div>
                <h1>子组件</h1>
                {/* 通过上面的钩子将属性转为状态，可以改变状态 */}
                <h2>{this.state.number}</h2>
                <button onClick={this.handleChange}>改变状态</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter></Counter>, window.app)