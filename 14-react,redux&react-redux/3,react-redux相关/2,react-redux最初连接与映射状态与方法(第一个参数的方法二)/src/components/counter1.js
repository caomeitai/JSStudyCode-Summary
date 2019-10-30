import React, { Component } from 'react'
import actions from "../store/actions/counter1"
import { connect } from "react-redux"//将react与redux连接到一起

class Counter1 extends Component {
    render() {
        // 这里组件中的属性全部都是仓库中数据映射回来的
        // console.log(this.props)//{number: 1, increment: ƒ, decrement: ƒ}
        return (
            <div>
                <h1>Counter1</h1>
                <h1>{this.props.number}</h1>
                <button onClick={() => this.props.increment(1)}>+</button>
                <button onClick={() => this.props.decrement(1)}>-</button>
            </div>
        )
    }
}

// 映射状态
function mapStateToProps(state) {
    return { number: state.counter1.number }
}

// 第二种方法：不再封装函数，而是直接调用actions


export default connect(mapStateToProps, actions)(Counter1)