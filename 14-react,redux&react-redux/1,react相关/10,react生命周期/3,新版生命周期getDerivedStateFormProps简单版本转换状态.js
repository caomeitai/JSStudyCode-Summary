import React, { Component } from 'react'
import ReactDOM from "react-dom"

class Counter extends Component {
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
// nextProps表示父给子传递过来的新的数据
// prevState是子接收到的上一次的状态
class SubCounter extends Component {
    state = { number: 0 }
    // 从属性对象中获取派发状态
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("nextProps",nextProps)//nextProps {number: 0} 
        // console.log("nextState",prevState)//prevState {number: 0} 

        let {number} = nextProps;
        // console.log(number)//将数据解构出来 0
        // return {number:number}//第一个number表示子组件的状态，第二个才是上面得到的number
        return {number}//直接将接收过来的父组件属性转成子组件的状态

    }
    handleClick = ()=>{
        this.setState({
            number:this.state.number+900
        })
    }
    render() {
        return (
            <div>
                <h1>子组件</h1>
                {/* 通过上面的钩子将属性转为状态，可以改变状态 */}
                <h2>{this.state.number}</h2>
                <button onClick={this.handleClick}>改变状态</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter></Counter>, window.app)