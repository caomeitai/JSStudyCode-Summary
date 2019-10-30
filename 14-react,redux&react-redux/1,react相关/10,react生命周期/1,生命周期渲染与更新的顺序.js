import React, { Component } from 'react'
import ReactDOM from "react-dom"

class Counter extends Component {
    static defaultProps = {name:"tanni"}//默认属性
    constructor(props) {
        super(props)
        this.state = {number:0}//初始化状态
    }
    handleClick =()=>{
        this.setState({
            number:this.state.number+1
        })

    }
    // Mounting生命周期的渲染顺序：componentWillMount-->render-->componentDidMount
    // 出现警告，是因为componentWillMount被废弃啦
    UNSAFE_componentWillMount(){
        console.log("Counter:componentWillMount")
    }
    componentDidMount(){
        console.log("Counter:componentDidMount")
    }
    // 状态改变updateing生命周期顺序：
    // shouldComponentUpdate-->UNSAFE_componentWillUpdate--->render--->componentDidUpdate
    shouldComponentUpdate(nextProps,nextState){
        // 它是更新与否的判断依据,需要返回布尔值
        console.log("Counter:shouldComponentUpdate")
        if(nextState.number%2===0){
            // 偶数
            return true;
        }else{
            return false;//只走这里不再向下渲染啦！
        }
        // return true;
       
    }
    UNSAFE_componentWillUpdate(){
        console.log("Counter:componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("Counter:componentDidUpdate")
    }
    render() {
        console.log("Counter:render")
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter></Counter>, window.app)