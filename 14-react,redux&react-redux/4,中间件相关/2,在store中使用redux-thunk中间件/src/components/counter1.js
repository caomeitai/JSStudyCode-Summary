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
                {/* 实现3秒后再加的方案1： */}
                {/* <button onClick={()=>{
                    setTimeout(()=>{
                        // 利用定时器过3秒加一
                        this.props.increment(3)
                    },3000)
                }}>过3秒再加</button> */}

                {/* 实现3秒再加方案2： */}
                {/* 改变状态要派发action,action是一个对象，且只能派发一个对象 */}
                {/* 当它派发一个函数时，redux不支持，所以需要使用中间件对其进行增强 */}
                <button onClick={()=>this.props.incrementAfterThree()}>过3秒再加</button>
            </div>
        )
    }
}

// 映射状态
function mapStateToProps(state) {
    return { number: state.counter1.number }
}

export default connect(mapStateToProps, actions)(Counter1)