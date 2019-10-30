import React, { Component } from 'react'
import ReactDOM from "react-dom"

// 生命周期的渲染是在子组件渲染完毕之后，父组件才有渲染完毕的一说
// 刚初始化时，父给子传递数据，并不调更新数据的钩子
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
    UNSAFE_componentWillMount(){
        console.log("Counter:componentWillMount")
    }
    componentDidMount(){
        console.log("Counter:componentDidMount")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Counter:shouldComponentUpdate")
        // if(nextState.number%2===0){
        //     return true;
        // }else{
        //     return false;
        // }
        return true;
       
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
                <h1>父组件</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleClick}>+</button>
                <hr/>
                {/* 表示偶数的话就渲染子组件，否则不渲染 */}
                {this.state.number%2===0 ? <SubCounter number={this.state.number}></SubCounter> : null}
            </div>
        )
    }
}

class SubCounter extends Component{
    UNSAFE_componentWillMount(){
        console.log("子组件:componentWillMount")
    }
    componentDidMount(){
        console.log("子组件:componentDidMount")
    }
    UNSAFE_componentWillReceiveProps(){
        console.log("子组件:UNSAFE_componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("子组件:shouldComponentUpdate")
        return true;
       
    }
    UNSAFE_componentWillUpdate(){
        console.log("子组件:componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("子组件:componentDidUpdate")
    }
    render(){
        console.log("子组件：render")
        return(

            <div>
                <h1>子组件</h1>
                <h2>{this.props.number}</h2>
            </div>
        )
    }
}
ReactDOM.render(<Counter></Counter>, window.app)