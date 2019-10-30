import React, { Component } from 'react'
import actions from "../store/actions/counter1"
import { connect } from "react-redux"//将react与redux连接到一起

class Counter1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Counter1</h1>
                <h1>{this.props.number}</h1>
                <button onClick={() => this.props.increment(1)}>+</button>
                <button onClick={() => this.props.decrement(1)}>-</button>
                <button onClick={()=>this.props.incrementAfterThree()}>过3秒再加</button>
                {/* 处理promise,中间件redux-promise */}
                <button onClick={()=>this.props.Promiseincreament(1000)}>使用promise加</button>
            </div>
        )
    }
}

// 映射状态
function mapStateToProps(state) {
    return { number: state.counter1.number }
}

export default connect(mapStateToProps, actions)(Counter1)